import { Component, getOthersInfo } from './index';
export const picker: Component = {
  prefix: 'u-picker',
  description: 'picker',
  body: ['<u-picker></u-picker>'],
  props: {
    params: { desc: '需要显示的参数，见上方说明，mode=region或mode=time时有效', type: 'object', default: '-' },
    mode: {
      desc: '模式选择，region-地区模式，time-时间模式，selector-单列模式，multiselector-多列模式',
      type: 'string',
      default: 'time',
      options: 'region / selector / multiselector'
    },
    'start-year': { desc: '可选的开始年份，mode=time时有效', type: 'string | number', default: '1950' },
    'end-year': { desc: '可选的结束年份，mode=time时有效', type: 'string | number', default: '2050' },
    'safe-area-inset-bottom': { desc: '是否开启底部安全区适配', type: 'boolean', default: 'false', options: 'true' },
    'cancel-color': { desc: '取消按钮的颜色', type: 'string', default: '#606266' },
    'confirm-color': { desc: '确认按钮的颜色', type: 'string', default: '#2979ff' },
    'default-time': {
      desc: '默认选中的时间，mode=time时有效，需在onready生命周期赋值，见顶部说明',
      type: 'string',
      default: '-'
    },
    'default-region': {
      desc: '默认选中的地区，中文形式，mode=region时有效，需在onready生命周期赋值，见顶部说明',
      type: 'array',
      default: '-'
    },
    'area-code': { desc: '默认选中的地区，编号形式，mode=region时有效', type: 'array', default: '-' },
    'default-selector': {
      desc: '数组形式，其中每一项表示选择了range对应项中的第几个(下标从0开始)，见上方说明',
      type: 'array',
      default: '[]'
    },
    'mask-close-able': { desc: '是否允许通过点击遮罩关闭picker', type: 'boolean', default: 'true', options: 'false' },
    'show-time-tag': {
      desc: '时间模式时，是否显示后面的年月日中文提示',
      type: 'boolean',
      default: 'true',
      options: 'false'
    },
    'z-index': { desc: '弹出时的z-index值', type: 'string | number', default: '10075' },
    range: { desc: '自定义选择的数据，mode=selector或mode=multiselector时有效', type: 'array', default: '[]' },
    'range-key': {
      desc: '当range参数的元素为对象时，指定object中的哪个key的值作为选择器显示内容，见上方说明',
      type: 'string',
      default: '-'
    },
    'title 1.3.6': { desc: '顶部中间的标题', type: 'string', default: '-' },
    'confirm-text 1.5.6': { desc: '确认按钮的文字', type: 'string', default: '取消' },
    'cancel-text 1.5.6': { desc: '取消按钮的文字', type: 'string', default: '确认' }
  },
  events: {
    confirm: { desc: '点击确定按钮，返回当前选择的值', params: 'object: 见上方"回调参数"部分说明' },
    cancel: { desc: '点击取消按钮，返回当前选择的值', params: 'object: 见上方"回调参数"部分说明' },
    columnchange: {
      desc: '列发生改变时触发，只对mode = multiselector时有效',
      params: '{column: column, index: index}: 见上方"回调参数"部分说明'
    }
  },
  getOthersInfo
};
