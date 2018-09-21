"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileSplitter {
    constructor(fileContext, bufferBuilder) {
        this.fileContext = fileContext;
        this.bufferBuilder = bufferBuilder;
    }
    startSplitting() {
        const buffers = this.bufferBuilder.retrieveBuffers();
        return buffers.map(buffer => Promise.all([buffer, this.fileContext.createPane()])
            .then(([buffer, textEditor]) => {
            textEditor.setText(buffer.text);
            return buffer.range;
        })
            .then(() => {
            return true;
        }));
    }
}
exports.default = FileSplitter;
//# sourceMappingURL=file-splitter.js.map