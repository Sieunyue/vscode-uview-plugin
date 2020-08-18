import * as vscode from 'vscode';

class CompletionItemProvide implements vscode.CompletionItemProvider {
  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
    const res = [];
    for(let i = 0; i< 5; i++){
      res.push(new vscode.CompletionItem('aaaaa'+i, vscode.CompletionItemKind.Field));
    }
    return res;
  }

  public resolveCompletionItem(item:vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
    return null;
  }
}

export default new CompletionItemProvide();
