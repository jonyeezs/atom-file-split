# File-Split for Atom

An Atom package that allows you to separate your file at cursors into multiple files.

![demo]()

## Installation

### Command Line

1. Install [Atom 1.30](https://atom.io) or newer
2. In the terminal, install the package via apm:

    ```sh
    apm install file-split
    ```

### GUI

1. Install [Atom 1.30](https://atom.io) or newer
1. Launch Atom
1. Open Settings View using <kbd>Cmd+,</kbd> on macOS or <kbd>Ctrl+,</kbd> on other platforms
1. Click the Install tab on the left side
1. Enter `file-split` in the search box and press <kbd>Enter</kbd>
1. Click the "Install" button that appears

## Usage

<kbd>ctrl-alt-n</kbd> to split cursor points on files into separated _untitled_ files.

#### Command

`file-split:split`

### How It Works

1. Set cursors to the points you wish for it to break into separate files.
  * _If you need more help on how to make more cursors, see [This section in the Flight Manual](https://flight-manual.atom.io/using-atom/sections/editing-and-deleting-text/#multiple-cursors-and-selections
      )._ 
1. Use the default key-binding: <kbd>ctrl-alt-n</kbd>
  * _You can remap the keybindings, see [This section in the Flight Manual to know how](https://flight-manual.atom.io/using-atom/sections/basic-customization/#customizing-keybindings)._
1. It should now create _untitled_ files to the right with the content that you've separate on.
1. Save the files however you wish.
1. Done!