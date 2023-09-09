# Terminal size modifier
with the ability to add keyboard shortcuts  
This chnages the setting `terminal.integrated.fontSize` and vscode instantly updates the font size.
It is handy to use with a `keybindings.json` configuration such as this:
```json
    {
        "command": "runCommands",
        "key": "ctrl+=",
        "args": {
            "commands": [
                "terminal-size-modifier.increaseTerminalFontSize",
                "editor.action.fontZoomIn"
            ],
        }
    },
    {
        "command": "runCommands",
        "key": "ctrl+-",
        "args": {
            "commands": [
                "terminal-size-modifier.decreaseTerminalFontSize",
                "editor.action.fontZoomOut"
            ],
        }
    },
    {
        "command": "runCommands",
        "key": "ctrl+0",
        "args": {
            "commands": [
                "terminal-size-modifier.resetTerminalFontSize",
                "editor.action.fontZoomReset"
            ],
        }
    },
```
