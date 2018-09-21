import FileContext from './file-context';
import CursorToCursorBuffer from './cursor-to-cursor-buffer';
import FileSplitter from './file-splitter';
import { CompositeDisposable } from 'atom';
export default {
    fileContext: null,
    cursorToCursorBuffer: null,
    fileSplitter: null,
    subscriptions: null,
    activate() {
        this._registerServices();
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'atom-file-splitter:toggle': () => this._split()
        }));
    },
    deactivate() {
        delete this.fileContext;
        this.subscriptions.dispose();
    },
    _registerServices() {
        this.fileContext = new FileContext(atom.workspace);
        this.cursorToCursorBuffer = new CursorToCursorBuffer(this.fileContext);
        this.fileSplitter = new FileSplitter(this.fileContext, this.cursorToCursorBuffer);
    },
    _split() {
        this.fileSplitter.startSplitting();
    }
};
//# sourceMappingURL=main.js.map