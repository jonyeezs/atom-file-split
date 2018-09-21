import FileContext from './file-context';
import { default as CursorToCursorBuffer, SplitBuffer } from './cursor-to-cursor-buffer';
import { TextEditor } from 'atom';

export default class FileSplitter {
    constructor(
        private fileContext: FileContext,
        private bufferBuilder: CursorToCursorBuffer) {
        }

    startSplitting(): Promise<boolean>[] {
        const buffers = this.bufferBuilder.retrieveBuffers();

        return buffers.map(buffer =>
            Promise.all([buffer, this.fileContext.createPane()])
            .then(([buffer, textEditor]: [SplitBuffer, TextEditor]) => {
                textEditor.setText(buffer.text);
                return buffer.range;
            })
            .then(() => {
                return true;
            }));
    }
}