import { HoverProvider, TextDocument, Position, CancellationToken, Hover, Range } from 'vscode';
import * as uview from './components/index';

const allComponent = Object.values(uview)
  .filter((o) => {
    return !(typeof o === 'function');
  })
  .map((o) => {
    if (!(typeof o === 'function')) {
      return o.prefix;
    }
  });

export default class ProvideHover implements HoverProvider {
  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): import('vscode').ProviderResult<import('vscode').Hover> {
    const wordRange = document.getWordRangeAtPosition(position);
    const word = document.getText(wordRange);
    let comp: string = '';
    const reg = new RegExp('u-' + word);

    if (
      allComponent.some((s) => {
        if (!s) {
          return false;
        }

        if (reg.test(s)) {
          comp = s;
          return true;
        }
        return false;
      })
    ) {
      if (!!comp) {
        let t = comp.replace(/-([a-z])/g, function (all, letter) {
          return letter.toUpperCase();
        });
        t = t.substring(1);
        t = t.replace(/^([A-Z])/, function (all, letter) {
          return letter.toLowerCase();
        });

        return new Hover(this.getComponentInfo(uview[t]));
      }
    }
  }

  private getComponentInfo(component: uview.Component): string {
    const { description, props, events, slot, methods, url } = component;
    let t = '';
    try {
      if (props) {
        const propList = Object.keys(props);
        t += '* props \n';
        propList.forEach((key) => {
          t += `  * **${key}**: {*${props[key].type || 'string'}*} ${props[key].default || ''} ${
            props[key].options || ''
          } ${props[key].desc} \r\n`;
        });
      }
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

      if (methods) {
        const methList = Object.keys(methods);
        t += '* methods \n';
        methList.forEach((key) => {
          t += ` * **${key}**: ${methods[key].desc} \n`;
        });
      }

      t += uview.getOthersInfo.call(component);
    } catch (e) {
      console.log(e);
    }

    return `**${description}** <${url}>\n***\n${t}`;
  }
}
