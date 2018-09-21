import { Workspace, Point } from 'atom';

export default class FileContext {
    private locations: Point[];

  constructor(private workspace: Workspace) {
    this.locations = [];
  }

  retrievelocations(): Point[] {
      const currentFile = this.getCurrentFile();

      if (currentFile.isEmpty()) { return []; }

      this.locations = currentFile.getCursorBufferPositions();

      return this.locations;
  }

  getContextPath(): string {
      const currentFile = this.getCurrentFile();
      return currentFile.getPath();
  }

  private getCurrentFile() {
      return this.workspace.getActiveTextEditor() ||
        (() => {throw new Error('file not active')})();
  }
}