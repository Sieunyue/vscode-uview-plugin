import { Component, getOthersInfo } from './index';
export const rate: Component = {
  prefix: 'u-rate',
  description: 'rate',
  body: ['<u-rate></u-rate>'],
  props: {
    'v-model 1.4.5': { desc: '双向绑定选择星星的数量', type: 'string | number', default: '0' },
    count: { desc: '最多可选的星星数量', type: 'string | number', default: '5' },
    current: { desc: '默认选中的星星数量，1.4.5起建议使用v-model方式', type: 'string | number', default: '0' },
    disabled: { desc: '是否禁止用户操作', type: 'boolean', default: 'false', options: 'true' },
    size: { desc: '星星的大小，单位rpx', type: 'string | number', default: '32' },
    'inactive-color': { desc: '未选中星星的颜色', type: 'string', default: '#b2b2b2' },
    'active-color': { desc: '选中的星星颜色', type: 'string', default: '#fa3534' },
    gutter: { desc: '星星之间的距离', type: 'string | number', default: '10' },
    'min-count': { desc: '最少选中星星的个数', type: 'string | number', default: '0' },
    'active-icon': { desc: '选中时的图标名，只能为uview的内置图标', type: 'string', default: 'star-fill' },
    'inactive-icon': { desc: '未选中时的图标名，只能为uview的内置图标', type: 'string', default: 'star' }
  },
  events: {
    change: {
      desc: '选中的星星发生变化时触发',
      params: 'value：当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件'
    }
  },
  getOthersInfo
};
