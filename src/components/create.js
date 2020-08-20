const fs = require('fs');
const t = {
  c: 'divider',
  props: {
    'half-width': {
      desc: '文字左或右边线条宽度，数值或百分比，数值时单位为rpx',
      type: 'string | number',
      default: '-',
      options: '150'
    },
    'border-color': { desc: '线条颜色，优先级高于type', type: 'string', default: '#dcdfe6' },
    color: { desc: '文字颜色', type: 'string', default: '#909399' },
    fontsize: { desc: '字体大小，单位rpx', type: 'string | number', default: '26' },
    'bg-color': { desc: '整个divider的背景颜色', type: 'string', default: '#ffffff' },
    height: { desc: '整个divider的高度，单位rpx', type: 'string | number', default: '40' },
    type: {
      desc: '将线条设置主题色',
      type: 'string',
      default: 'primary',
      options: 'info \\ success \\ warning \\ error'
    },
    'margin-top': { desc: '与前一个元素的距离，单位rpx', type: 'string | number', default: '0' },
    'margin-bottom': { desc: '与后一个元素的距离，单位rpx', type: 'string | number', default: '0' },
    'use-slot': {
      desc: '是否使用slot传入内容，如果不传入，中间不会有空隙',
      type: 'boolean',
      default: 'true',
      options: 'false'
    }
  },
  events: { click: { desc: 'divider组件被点击时触发', params: '-' } }
};
let template = `import {Component, getOthersInfo} from './index'; \n`;
const r = {};
r.prefix = `u-${t.c}`;
r.description = t.c;
r.body = [`<u-${t.c}></u-${t.c}>`];

Object.assign(r, t);
delete r.c;
r.getOthersInfo = '';

template += `export const ${t.c}: Component = ${JSON.stringify(r)}`;

fs.writeFile('./' + t.c + '.ts', template, (e) => {
  if (e) {
  }
});

const indexData = fs.readFileSync('./index.ts', { encoding: 'utf8' });

fs.writeFile('./index.ts', indexData + `export * from './${t.c}';\n`, (e) => {
  if (e) {
  }
});
