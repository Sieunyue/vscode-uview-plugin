import { Component, getOthersInfo} from './index';


export const cell: Component = {
  prefix: 'u-cell',
  description: 'cell 单元格',
  body: ['<u-cell-${1}>${2}</u-cell-${1}'],
  props: {
    title: { desc: '分组标题', type: 'string', default: '-' },
    border: { desc: '是否显示外边框', type: 'boolean', default: 'true', options: 'false' },
    'title-style': {
      desc: "分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontsize': '24rpx'}",
      type: 'object',
      default: '-'
    }
  },
  'item-props': {
    title: { desc: '左侧标题', type: 'string', default: '-' },
    icon: { desc: '左侧图标名，只支持uview内置图标，见icon 图标', type: 'string', default: '-' },
    'icon-style 1.4.0': { desc: 'icon的样式，对象形式', type: 'object', default: '-' },
    value: { desc: '右侧内容', type: 'string', default: '-' },
    label: { desc: '标题下方的描述信息', type: 'string', default: '-' },
    'border-bottom': { desc: '是否显示cell的下边框', type: 'boolean', default: 'true', options: 'false' },
    'border-top': { desc: '是否显示cell的上边框', type: 'boolean', default: 'false', options: 'true' },
    'hover-class': {
      desc: '是否开启点击反馈，none为无效果，见上方说明',
      type: 'string',
      default: '-',
      options: 'none'
    },
    arrow: {
      desc: '是否显示右侧箭头，开启的话，将会默认带上点击反馈，可通过hover-class配置',
      type: 'boolean',
      default: 'true',
      options: 'false'
    },
    'arrow-direction': { desc: '箭头方向，可选值为', type: 'string', default: 'right', options: 'up / down' },
    'title-style': { desc: '标题样式，对象形式', type: 'object', default: '-' },
    required: { desc: '是否显示左边表示必填的星号', type: 'boolean', default: 'false', options: 'true' },
    'value-style': { desc: '右侧内容样式，对象形式', type: 'object', default: '-' },
    'label-style': { desc: '标题下方描述信息的样式，对象形式', type: 'object', default: '-' },
    'bg-color': { desc: '背景颜色，默认透明背景', type: 'string', default: 'transparent' },
    index: { desc: '用于在click事件回调中返回，标识当前是第几个item', type: 'string | number', default: '-' },
    'title-width': { desc: '标题的宽度，单位rpx', type: 'number | string', default: '-' },
    'icon-size': { desc: '左边通过icon参数传入的图标的大小，单位rpx', type: 'number | string', default: '34' },
    center: { desc: '是否使内容垂直居中', type: 'boolean', default: 'false', options: 'true' }
  },
  'item-slot': {
    title: { desc: '自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可' },
    icon: { desc: '自定义左侧的图标' },
    'right-icon': { desc: '自定义右侧图标内容，需设置arrow为false才起作用' },
    label: { desc: '自定义label内容，需同时设置use-label-slot为true' }
  },
  'item-event': { click: { desc: '点击cell列表时触发', params: 'index' } },
  getOthersInfo
  
};
