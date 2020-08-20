import { Component } from './index';

export const tag: Component = {
  prefix: 'u-tag',
  description: 'tag 标签',
  body: ['<u-tag text="${1}" type="${2, success}"></u-tag>'],
  props: {
    type: { desc: '主题类型', type: 'string', default: 'primary', options: 'success / info / warning / error' },
    size: { desc: '标签大小', type: 'string', default: 'default', options: 'mini' },
    shape: { desc: '标签形状', type: 'string', default: 'square', options: 'circle / circleleft / circleright' },
    text: { desc: '标签的文字内容', type: 'string', default: '-' },
    'bg-color': { desc: '自定义标签的背景颜色', type: 'string', default: '-' },
    color: { desc: '文字的颜色', type: 'string', default: '-' },
    'border-color': { desc: '标签的边框颜色', type: 'string', default: '-' },
    'close-color': { desc: '关闭按钮的颜色', type: 'string', default: '-' },
    index: { desc: '点击标签时，会通过click事件返回该值', type: 'string | number', default: '-' },
    mode: { desc: '模式选择，见上方说明', type: 'string', default: 'light', options: 'dark / plain' },
    closeable: {
      desc: '是否可关闭，设置为true，文字右边会出现一个关闭图标',
      type: 'boolean',
      default: 'false',
      options: 'true'
    },
    show: { desc: '标签显示与否', type: 'boolean', default: 'true', options: 'false' }
  },
  events: {
    click: { desc: '点击标签触发', params: 'index' },
    close: { desc: 'closeable为true时，点击标签关闭按钮触发', params: 'index' }
  }
};
