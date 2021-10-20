
import * as vscode from "vscode";

export class Container implements vscode.TreeDataProvider<any>{
    constructor(private context: vscode.ExtensionContext) {}
    private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
    readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;
    
    getTreeItem(element: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: any): vscode.ProviderResult<any[]> {
        return this.initData();
    }

    initData() {
        return [1,2,3,4,5];
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
     }

}