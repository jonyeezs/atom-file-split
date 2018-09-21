import FileContext from './file-context';
import CursorToCursorBuffer from './cursor-to-cursor-buffer';

export default class FileSplitter {
    constructor(
        private fileContext: FileContext,
        private buffers: CursorToCursorBuffer) {
     }
}