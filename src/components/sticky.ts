import { Component, getOthersInfo } from './index';
export const sticky: Component = {
  prefix: 'u-sticky',
  description: 'sticky',
  body: ['<u-sticky></u-sticky>'],
  props: {
    'offset-top': { desc: '吸顶时与顶部的距离，单位rpx', type: 'string | number', default: '0' },
    index: { desc: '自定义标识，用于区分是哪一个组件', type: 'string | number', default: '-' },
    enable: { desc: '是否开启吸顶功能', type: 'boolean', default: 'true', options: 'false' },
    'bg-color': { desc: '组件背景颜色', type: 'string', default: '#ffffff' },
    'z-index': { desc: '吸顶时的z-index值', type: 'string | number', default: '970' },
    'h5-nav-height': {
      desc: '导航栏高度，自定义导航栏时(无导航栏时需设置为0)，需要传入此值，单位px',
      type: 'string | number',
      default: '44'
    }
  },
  event: {
    fixed: { desc: '组件吸顶时触发', params: 'index: 通过props传递的index' },
    unfixed: { desc: '组件取消吸顶时触发', params: 'index: 通过props传递的index' }
  },
  getOthersInfo
};
