export default class FileContext {
    constructor(workspace) {
        this.workspace = workspace;
        this.locations = [];
    }
    retrievelocations() {
        const currentFile = this.getCurrentFile();
        if (currentFile.isEmpty()) {
            return [];
        }
        this.locations = currentFile.getCursorBufferPositions();
        return this.locations;
    }
    getContextPath() {
        const currentFile = this.getCurrentFile();
        return currentFile.getPath();
    }
    getCurrentFile() {
        return this.workspace.getActiveTextEditor() ||
            (() => { throw new Error('file not active'); })();
    }
}
//# sourceMappingURL=file-context.js.map