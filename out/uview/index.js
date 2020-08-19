"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class CompletionItemProvide {
    provideCompletionItems(document, position, token, context) {
        console.log(document.lineAt(position), position.character);
        const res = [];
        for (let i = 0; i < 5; i++) {
            res.push(new vscode.CompletionItem('aaaaa' + i, vscode.CompletionItemKind.Field));
        }
        return res;
    }
    resolveCompletionItem(item, token) {
        return null;
    }
}
exports.default = new CompletionItemProvide();
//# sourceMappingURL=index.js.map