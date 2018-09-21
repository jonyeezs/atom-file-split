"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_context_1 = require("./file-context");
const cursor_to_cursor_buffer_1 = require("./cursor-to-cursor-buffer");
const file_splitter_1 = require("./file-splitter");
const atom_1 = require("atom");
class AtomFileSplit {
    activate(state) {
        this.registerServices();
        this.subscriptions = new atom_1.CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-text-editor', {
            'file-split:split': () => this.split()
        }));
        return (console.log('file-split activated'));
    }
    deactivate() {
        delete this.fileContext;
        this.subscriptions.dispose();
    }
    registerServices() {
        this.fileContext = new file_context_1.default(atom.workspace);
        this.cursorToCursorBuffer = new cursor_to_cursor_buffer_1.default(this.fileContext);
        this.fileSplitter = new file_splitter_1.default(this.fileContext, this.cursorToCursorBuffer);
    }
    split() {
        Promise.all(this.fileSplitter.startSplitting())
            .then();
    }
}
;
module.exports = new AtomFileSplit;
//# sourceMappingURL=main.js.map