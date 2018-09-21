'use babel';

import CursorLocator from './cursor-locator';
import CursorToCursorBuffer from './cursor-to-cursor-buffer'
import FileSplitter from './file-splitter'
import { CompositeDisposable } from 'atom';

export default {

  cursorLocator: null,
  cursorToCursorBuffer: null,
  subscriptions: null,

  activate(state) {
    this._registerServices();
    
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-file-splitter:toggle': () => this._split()
    }));
  },

  deactivate() {
    delete this.cursorLocator;
    this.subscriptions.dispose();
  },

  _registerServices() {
    this.cursorLocator = new CursorLocator(atom.workspace);
    this.cursorToCursorBuffer = new CursorToCursorBuffer(this.cursorLocator);
    this.fileSplitter = new FileSplitter(this.cursorToCursorBuffer);    
  },
  
  _split() {
      this.fileSplitter.startSplitting()
      .then(status => {
          
      });
  }

};
