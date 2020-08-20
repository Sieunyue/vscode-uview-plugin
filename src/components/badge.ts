import { Component } from './index';

export const badge: Component = {
  prefix: 'u-badge',
  description: 'badge 徽标',
  body: ['<u-badge type="${1: success}"></u-badge>'],
  props: {
    count: {
      desc: '展示的数字，大于 overflowcount 时显示为 ${overflowcount}+，为0且show-zero为false时隐藏',
      type: 'string | number',
      default: '-'
    },
    'is-dot': { desc: '不展示数字，只有一个小点', type: 'boolean', default: 'false', options: 'true' },
    absolute: {
      desc: '组件是否绝对定位，为true时，offset参数才有效',
      type: 'boolean',
      default: 'true',
      options: 'false'
    },
    'overflow-count': { desc: '展示封顶的数字值', type: 'string | number', default: '99' },
    type: {
      desc: '使用预设的背景颜色',
      type: 'string',
      default: 'error',
      options: 'success / primary / warning / info'
    },
    'show-zero': { desc: '当数值为 0 时，是否展示 badge', type: 'boolean', default: 'false', options: 'true' },
    size: { desc: 'badge的尺寸，设为mini会得到小一号的badge', type: 'string', default: 'default', options: 'mini' },
    offset: {
      desc: '设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx。absolute为true时有效',
      type: 'array',
      default: '[20, 20]'
    },
    color: { desc: '字体颜色', type: 'string', default: '#ffffff' },
    bgcolor: { desc: '背景颜色，优先级比type高，如设置，type参数会失效', type: 'string', default: '-' },
    'is-center': {
      desc: '组件中心点是否和父组件右上角重合，优先级比offset高，如设置，offset参数会失效',
      type: 'boolean',
      default: 'false',
      options: 'true'
    }
  }
};
