import { Workspace, Point, Range, TextEditor } from 'atom';
import { dirname } from 'path';
// Wrapper around any interaction with atom api
// Makes it easier to unit test the other classes
export default class FileContext {

    private locations: Point[];

    constructor(private workspace: Workspace) {
        this.locations = [];
    }

    retrieveLocations(): Point[] {
        const currentFile = this.currentFile;

        if (currentFile.isEmpty()) { return []; }

        this.locations = currentFile.getCursorBufferPositions();

        return this.locations;
    }

    // would love to abstract this out
    // but it is hard to unit test with an actual atom instance
    retrieveEndOfFilePoint(): Point {
        const lastRow = this.currentFile.getLastBufferRow();
        return this.currentFile.clipBufferPosition({
            column: Infinity, row: lastRow
        });
    }

    removeText(range: Range) {
        this.currentFile.setSelectedBufferRange(range);
        this.currentFile.delete();
    }

    getText(range: Range) {
        return this.currentFile.getTextInBufferRange(range);
    }

    createPane(): Promise<TextEditor | Object> {
        return this.workspace.open(null);
    }

    getContextDir(): string {
        const currentFile = this.currentFile;
        return dirname(currentFile.getPath());
    }

    private get currentFile() {
        return this.workspace.getActiveTextEditor() ||
            (() => { throw new Error('file not active') })();
    }
}