import { HoverProvider, TextDocument, Position, CancellationToken, Hover, Range } from 'vscode';
import * as uview from './components/index';

export default class ProvideHover implements HoverProvider {
  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): import('vscode').ProviderResult<import('vscode').Hover> {
    const wordRange = document.getWordRangeAtPosition(position);
    const word = document.getText(wordRange);

    const allComponent = Object.keys(uview);
    if (allComponent.includes(word)) {
      if (!wordRange) {
        return;
      }

      const start = wordRange.start;
      if (!(start.character > 2)) {
        return;
      }
      const newStart = new Position(start.line, start.character - 2);
      const ran = new Range(newStart, wordRange.end);
      const tWord = document.getText(ran);

      if (/u\-.*/.test(tWord)) {
        return new Hover(this.getComponentInfo(uview[word]));
      }
    }
  }

  private getComponentInfo(component: uview.Component): string {
    const { description, props, events, slot, getOthersInfo } = component;
    let t = '* props \n';
    try {
      const propList = Object.keys(props);
      propList.forEach((key) => {
        t += `  * **${key}**: {*${props[key].type || 'string'}*} ${props[key].default || ''} ${props[key].options || ''} ${props[key].desc} \r\n`;
      });

      if (events) {
        const eventsList = Object.keys(events);
        t += '* events \n';
        eventsList.forEach((key) => {
          t += ` * **${key}**: (${events[key].params})  ${events[key].desc} \n`;
        });
      }

      if (slot) {
        const slotList = Object.keys(slot);
        t += '* slot \n';
        slotList.forEach((key) => {
          t += ` * **${key}**: ${slot[key].desc} \n`;
        });
      }

      if (getOthersInfo) {
        t += getOthersInfo.call(component);
      }
    } catch (e) {
      console.log(e);
    }

    return `**${description}** \n***\n${t}`;
  }
}
