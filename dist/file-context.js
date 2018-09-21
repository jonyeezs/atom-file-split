"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class FileContext {
    constructor(workspace) {
        this.workspace = workspace;
        this.locations = [];
    }
    retrieveLocations() {
        const currentFile = this.currentFile;
        if (currentFile.isEmpty()) {
            return [];
        }
        this.locations = currentFile.getCursorBufferPositions();
        return this.locations;
    }
    retrieveEndOfFilePoint() {
        const lastRow = this.currentFile.getLastBufferRow();
        return this.currentFile.clipBufferPosition({
            column: Infinity, row: lastRow
        });
    }
    removeText(range) {
        this.currentFile.setSelectedBufferRange(range);
        this.currentFile.delete();
    }
    getText(range) {
        return this.currentFile.getTextInBufferRange(range);
    }
    createPane() {
        return this.workspace.open(null);
    }
    getContextDir() {
        const currentFile = this.currentFile;
        return path_1.dirname(currentFile.getPath());
    }
    get currentFile() {
        return this.workspace.getActiveTextEditor() ||
            (() => { throw new Error('file not active'); })();
    }
}
exports.default = FileContext;
//# sourceMappingURL=file-context.js.map