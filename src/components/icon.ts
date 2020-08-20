import { Component } from './index';

export const icon: Component = {
  prefix: 'u-icon',
  description: 'icon 图标',
  body: ['<u-icon name="$1"></u-icon>'],
  props: {
    name: { desc: '图标名称，见示例图标集，如名称带有/，会被认为是图片图标', type: 'string' },
    color: { desc: '图标颜色', type: 'string' },
    size: {
      desc: '图标字体大小，单位rpx',
      type: 'string | number'
    },
    index: { desc: '一个用于区分多个图标的值，点击图标时通过click事件传出', type: 'string' },
    'hover-class': {
      desc: '图标按下去的样式类，用法同uni的view组件的hover-class参数，详见：hover-class',
      type: 'string'
    },
    label: { desc: '图标右侧/下方的label文字', type: 'string' },
    'label-size': { desc: 'label字体大小，单位rpx', type: 'string | number' },
    'label-color': { desc: 'label字体颜色', type: 'string' },
    'custom-prefix': { desc: '自定义字体图标库时，需要写上此值，详见：扩展自定义图标库', type: 'string' },
    'margin-left': { desc: 'label在右方时与图标的距离，单位rpx', type: 'string | number' },
    'margin-top': { desc: 'label在下方时与图标的距离，单位rpx', type: 'string | number' },
    'margin-bottom': { desc: 'label在上方时与图标的距离，单位rpx', type: 'string | number' },
    'margin-right': { desc: 'label在左侧时与图标的距离，单位rpx', type: 'string | number' },
    'label-pos': {
      desc: 'label相对于图标的位置(left和top为1.4.1新增)',
      type: 'string',
      options: 'bottom / top / left'
    },
    'custom-style': {
      desc: '图标的样式，可以设置字体大小，颜色等，对象形式，size和color优先级高于此参数',
      type: 'object'
    },
    'width': { desc: 'name为图片路径时图片的宽度，单位任意，数值默认为rpx单位', type: 'string | number' },
    'height': { desc: 'name为图片路径时图片的高度，单位任意，数值默认为rpx单位', type: 'string | number' },
    'top': {
      desc: '如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为rpx单位',
      type: 'string | number'
    }
  },
  events: { click: { desc: '点击图标时触发', params: 'index' } }
};
