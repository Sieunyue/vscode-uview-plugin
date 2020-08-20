import { Component, getOthersInfo } from './index';
export const select: Component = {
  prefix: 'u-select',
  description: 'select',
  body: ['<u-select></u-select>'],
  props: {
    mode: {
      desc: '模式选择，"single-column"-单列模式，"mutil-column"-多列模式，"mutil-column-auto"-多列联动模式',
      type: 'string',
      default: 'single-column',
      options: 'mutil-column / single-column-auto'
    },
    list: { desc: '列数据，数组形式，见上方说明', type: 'array', default: '-' },
    'v-model': { desc: '布尔值变量，用于控制选择器的弹出与收起', type: 'boolean', default: 'false', options: 'true' },
    'safe-area-inset-bottom': { desc: '是否开启底部安全区适配', type: 'boolean', default: 'false', options: 'true' },
    'cancel-color': { desc: '取消按钮的颜色', type: 'string', default: '#606266' },
    'confirm-color': { desc: '确认按钮的颜色', type: 'string', default: '#2979ff' },
    'default-value': { desc: '提供的默认选中的下标，见上方说明', type: 'array', default: '-' },
    'mask-close-able': { desc: '是否允许通过点击遮罩关闭picker', type: 'boolean', default: 'true', options: 'false' },
    'z-index': { desc: '弹出时的z-index值', type: 'string | number', default: '10075' },
    'value-name': { desc: '自定义list数据的value属性名 1.3.6', type: 'string', default: 'value' },
    'label-name': { desc: '自定义list数据的label属性名 1.3.6', type: 'string', default: 'label' },
    'child-name': {
      desc: '自定义list数据的children属性名，只对多列联动模式有效 1.3.6',
      type: 'string',
      default: 'children'
    },
    title: { desc: '顶部中间的标题 1.3.6', type: 'string', default: '-' },
    'confirm-text 1.5.6': { desc: '确认按钮的文字', type: 'string', default: '取消' },
    'cancel-text 1.5.6': { desc: '取消按钮的文字', type: 'string', default: '确认' }
  },
  events: { confirm: { desc: '点击确定按钮，返回当前选择的值', params: 'array: 见上方"回调参数"部分说明' } },
  getOthersInfo
};
