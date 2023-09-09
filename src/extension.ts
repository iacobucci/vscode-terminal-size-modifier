// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
const os = require('os');

const homeDirectory = os.homedir();
const defaultSize = 16;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const increase = vscode.commands.registerCommand('terminal-size-modifier.increaseTerminalFontSize', () => {
		// Percorso del file JSON di configurazione da modificare
		const filePath = homeDirectory + "/.config/Code/User/settings.json";

		console.log(filePath)

		// Carica il contenuto del file JSON
		const settings = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		console.log(settings)

		if (settings["terminal.integrated.fontSize"]) {
			// Modifica la proprietà 'fontSize' solo se esiste
			settings["terminal.integrated.fontSize"] = settings["terminal.integrated.fontSize"] + 1
		}
		// Salva le modifiche
		fs.writeFileSync(filePath, JSON.stringify(settings, null, 4));
	});

	const decrease = vscode.commands.registerCommand('terminal-size-modifier.decreaseTerminalFontSize', () => {


		const filePath = homeDirectory + "/.config/Code/User/settings.json";

		// Carica il contenuto del file JSON
		const settings = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		//
		if (settings["terminal.integrated.fontSize"]) {
			// Modifica la proprietà 'fontSize' solo se esiste
			settings["terminal.integrated.fontSize"] = settings["terminal.integrated.fontSize"] - 1
		}
		settings.terminal.integrated.fontSize = settings.terminal.integrated.fontSize - 1;
		// Salva le modifiche
		fs.writeFileSync(filePath, JSON.stringify(settings, null, 4));

	});

	const reset = vscode.commands.registerCommand('terminal-size-modifier.resetTerminalFontSize', () => {

		const filePath = homeDirectory + "/.config/Code/User/settings.json";

		// Carica il contenuto del file JSON
		const settings = JSON.parse(fs.readFileSync(filePath, 'utf8'));

		if (settings["terminal.integrated.fontSize"]) {
			// Modifica la proprietà 'fontSize' solo se esiste
			settings["terminal.integrated.fontSize"] = 16
		}

		// Salva le modifiche
		fs.writeFileSync(filePath, JSON.stringify(settings, null, 4));
	});



	context.subscriptions.push(increase, decrease, reset);
}

// This method is called when your extension is deactivated
export function deactivate() { }
