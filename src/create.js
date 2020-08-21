const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const list = [
  'icon',
  'image',
  'button',
  'layout',
  'cell',
  'badge',
  'tag',
  'input',
  'form',
  'calendar',
  'select',
  'keyboard',
  'picker',
  'rate',
  'search',
  'numberBox',
  'upload',
  'verificationCode',
  'field',
  'checkbox',
  'radio',
  'switch',
  'slider',
  'circleProgress',
  'lineProgress',
  'table',
  'countDown',
  'countTo',
  'actionSheet',
  'alertTips',
  'toast',
  'noticeBar',
  'topTips',
  'collapse',
  'popup',
  'swipeAction',
  'modal',
  'fullScreen',
  'line',
  'card',
  'mask',
  'noNetwork',
  'grid',
  'swiper',
  'timeLine',
  'skeleton',
  'sticky',
  'waterfall',
  'divider',
  'dropdown',
  'tabbar',
  'backTop',
  'navbar',
  'tabs',
  'tabsSwiper',
  'subsection',
  'indexList',
  'steps',
  'empty',
  'link',
  'section',
  'parse',
  'messageInput',
  'avatarCropper',
  'loadMore',
  'readMore',
  'lazyLoad',
  'gap',
  'avatar',
  'loading'
];

let snippets = {};

function getPage(component) {
  const url = `http://uviewui.com/components/${component}.html`;
  return axios.get(url);
}



function parsePage(text, componentName) {
  const $ = cheerio.load(text);
  const tableList = $('table');

  const r = {
    c: componentName
  };

  [].forEach.call(tableList, (el, index) => {
    const t = {};
    if (index === 0) {
      return;
    }

    let preElId = $(el).prev('h3').attr('id');
    if (!preElId) {
      preElId = $(el).prevUntil('h3').prev().attr('id');
    }

    if (/props/.test(preElId)) {
      $(el)
        .find('tr')
        .each((index, tr) => {
          const tds = $(tr).find('td');

          if (tds.length > 0) {
            const name = $(tds[0]).text().toLowerCase().replace(/' '/g, '');
            const desc = $(tds[1]).text().toLowerCase().replace(/' '/g, '');
            const type = $(tds[2]).text().toLowerCase().replace(/' '/g, '');
            const defaul = $(tds[3]).text().toLowerCase().replace(/' '/g, '');
            t[name] = {
              desc,
              type,
              default: defaul
            };
            if ($(tds[4]).text() !== '-') {
              t[name].options = $(tds[4]).text().toLowerCase().replace(/' '/g, '');
            }
          }
        });
    } else if (/events?/.test(preElId)) {
      $(el)
        .find('tr')
        .each((index, tr) => {
          const tds = $(tr).find('td');
          if (tds.length > 0) {
            const name = $(tds[0]).text().toLowerCase().replace(/' '/g, '');
            const desc = $(tds[1]).text().toLowerCase().replace(/' '/g, '');
            const params = $(tds[2]).text().toLowerCase().replace(/' '/g, '');
            t[name] = {
              desc,
              params
            };
          }
        });
    } else if (/slot/.test(preElId)) {
      $(el)
        .find('tr')
        .each((index, tr) => {
          const tds = $(tr).find('td');
          if (tds.length > 0) {
            const name = $(tds[0]).text().toLowerCase().replace(/' '/g, '');
            const desc = $(tds[1]).text().toLowerCase().replace(/' '/g, '');
            t[name] = {
              desc
            };
          }
        });
    } else if (/methods?/.test(preElId)) {
      $(el)
        .find('tr')
        .each((index, tr) => {
          const tds = $(tr).find('td');
          if (tds.length > 0) {
            const name = $(tds[0]).text().toLowerCase().replace(/' '/g, '');
            const desc = $(tds[1]).text().toLowerCase().replace(/' '/g, '');
            const type = $(tds[2]).text().toLowerCase().replace(/' '/g, '');
            t[name] = {
              desc,
              type
            };
          }
        });
    } else {
      return;
    }
    r[preElId || index] = t;
  });
  r.url = `http://uviewui.com/components/${componentName}.html`

  return r;
}

function buildTemplate(t) {
  let template = `import {Component, getOthersInfo} from './index'; \n`;
  const r = {};
  const pre = t.c.replace(/([A-Z])/g, '-$1').toLowerCase();
  r.prefix = `u-${pre}`;
  r.description = t.c;
  r.body = [`<u-${pre}></u-${pre}>`];
  r.url = t.url;

  Object.assign(r, t);
  delete r.c;

  template += `export const ${t.c}: Component = ${JSON.stringify(r, null, 2)};`;
  template = template.replace(/1\.\d{,2}\.\d{,2}/g,'');

  snippets[pre] = {
    "prefix": r.prefix,
    "body": r.body,
    "description": r.description
  };

  return template;
}

function writeFile(text, t) {
  fs.writeFileSync('./components/' + t.c + '.ts', text);

  const indexData = fs.readFileSync('./components/index.ts', { encoding: 'utf8' });


  fs.writeFileSync('./components/index.ts', indexData + `export * from './${t.c}';\n`);
}

function cleanExport(){
  const indexData = fs.readFileSync('./components/index.ts', { encoding: 'utf8' });
  const rText = indexData.replace(/export \* from .*;\n/g, '');
  fs.writeFileSync('./components/index.ts', rText);
}

function writeSnippetsFile(text){
  fs.writeFileSync('./snippets/vue_uview_ui.json', text);
}

async function start() {
  cleanExport();
  for (let i = 0; i < list.length; i++) {
    try {
      const ctx = await getPage(list[i]);
      const t = parsePage(ctx.data, list[i]);
      const template = buildTemplate(t);
      writeFile(template, t);
      console.log('write component ' + list[i] + ' success');
    } catch (e) {
      console.log('write component ' + list[i] + ' error');
      // console.log(e);
    }
  }
  writeSnippetsFile(JSON.stringify(snippets));
}
start();
