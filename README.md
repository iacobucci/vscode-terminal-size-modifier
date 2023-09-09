# Terminal size modifier
with the ability to add keyboard shortcuts  
This chnages the setting `terminal.integrated.fontSize` and vscode instantly updates the font size.
It is handy to use with a `keybindings.json` configuration such as this:
```json
    {
        "key": "ctrl+=",
        "command": "terminal-size-modifier.increaseTerminalFontSize"
    },
    {
        "key": "ctrl+-",
        "command": "terminal-size-modifier.decreaseTerminalFontSize"
    },
    {
        "key": "ctrl+0",
        "command": "terminal-size-modifier.resetTerminalFontSize"
    }
```
