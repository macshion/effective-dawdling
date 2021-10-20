import * as vscode from 'vscode';
const Container = require('./src/views/Tree/Container');

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "effective-dawdling" is now active!');

    // Commands
	let disposable = vscode.commands.registerCommand('effective-dawdling.commands', () => {
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World VS Code!');
	});
    context.subscriptions.push(disposable);
    

    const { registerTreeDataProvider,createTreeView } = vscode.window;
    // const { registerCommand } = vscode.commands;
    const containerPanel = new Container(context);

    createTreeView("dawdling.discover", {
			treeDataProvider: containerPanel,
		});

}

// this method is called when your extension is deactivated
export function deactivate() {}
