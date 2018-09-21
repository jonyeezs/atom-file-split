import FileContext from './file-context';
import CursorToCursorBuffer from './cursor-to-cursor-buffer'
import FileSplitter from './file-splitter'
import { CompositeDisposable } from 'atom';

class AtomFileSplit {

  private fileContext: FileContext;
  private cursorToCursorBuffer: CursorToCursorBuffer;
  private fileSplitter: FileSplitter;
  private subscriptions: CompositeDisposable;

  public activate(state: any) {
    this.registerServices();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(
        atom.commands.add('atom-text-editor', {
            'file-split:split': () =>
            this.split()}),
    );

    return (console.log('file-split activated'));
  }

  public deactivate() {
    delete this.fileContext;
    this.subscriptions.dispose();
  }

  private registerServices() {
    this.fileContext = new FileContext(atom.workspace);
    this.cursorToCursorBuffer = new CursorToCursorBuffer(this.fileContext);
    this.fileSplitter = new FileSplitter(this.fileContext, this.cursorToCursorBuffer);
  }

  public split() {
      Promise.all(this.fileSplitter.startSplitting())
      .then();
  }

};

module.exports = new AtomFileSplit;