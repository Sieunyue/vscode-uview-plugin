import { Component } from './index';

export const button: Component = {
  prefix: 'u-button',
  description: 'button 按钮',
  body: ['<u-button type="${1: info}">${2}</u-button>'],
  props: {
    size: { desc: '按钮的大小', type: 'string', default: 'default', options: 'medium / mini' },
    ripple: { desc: '是否开启点击水波纹效果', type: 'boolean', default: 'false', options: 'true' },
    'ripple-bg-color': { desc: '水波纹的背景色，ripple为true时有效', type: 'string', default: 'rgba(0, 0, 0, 0.15)' },
    type: {
      desc: '按钮的样式类型',
      type: 'string',
      default: 'default',
      options: 'primary / success / info/ warning / error'
    },
    plain: { desc: '按钮是否镂空，背景色透明', type: 'boolean', default: 'false', options: 'true' },
    disabled: { desc: '是否禁用', type: 'boolean', default: 'false', options: 'true' },
    'hair-line': { desc: '是否显示按钮的细边框', type: 'boolean', default: 'true', options: 'false' },
    shape: { desc: '按钮外观形状，见上方说明', type: 'string', default: 'square', options: 'circle' },
    loading: { desc: '按钮名称前是否带 loading 图标', type: 'boolean', default: 'false', options: 'true' },
    'form-type': {
      desc: '用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件',
      type: 'string',
      default: '-',
      options: 'submit / reset'
    },
    'open-type': { desc: '开放能力', type: 'string', default: '请参考uni-app方文档' },
    'hover-class': {
      desc: '指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果',
      type: 'string',
      default: 'button-hover'
    },
    'hover-start-time': { desc: '按住后多久出现点击态，单位毫秒', type: 'number', default: '20' },
    'hover-stay-time': { desc: '手指松开后点击态保留时间，单位毫秒', type: 'number', default: '70' },
    'custom-style': { desc: '对按钮的自定义样式，对象形式，见上方说明', type: 'object', default: '-' },
    'app-parameter': {
      desc: '指定是否阻止本节点的祖先节点出现点击态',
      type: 'boolean',
      default: 'false',
      options: 'true'
    },
    'hover-stop-propagation': {
      desc: '打开 app 时，向 app 传递的参数，open-type=launchapp时有效',
      type: 'boolean',
      default: 'false',
      options: 'true'
    },
    lang: {
      desc: '指定返回用户信息的语言，zh_cn 简体中文，zh_tw 繁体中文，en 英文',
      type: 'string',
      default: 'en',
      options: 'zh_cn \\ zh_tw'
    },
    'session-from': { desc: '会话来源，open-type="contact"时有效', type: 'string', default: '-' },
    'send-message-title': {
      desc: '会话内消息卡片标题，open-type="contact"时有效',
      type: 'string',
      default: '当前标题'
    },
    'send-message-path': {
      desc: '会话内消息卡片点击跳转小程序路径，open-type="contact"时有效',
      type: 'string',
      default: '当前分享路径'
    },
    'send-message-img': {
      desc: '会话内消息卡片图片，open-type="contact"时有效',
      type: 'string',
      default: '当前页面截图'
    },
    'show-message-card': {
      desc:
        '是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效',
      type: 'string',
      default: '-'
    },
    'throttle-time 1.5.8': {
      desc: '节流的时间间隔(一定时间内无论点击多少次，只会触发一次click事件)，单位ms，详见节流防抖',
      type: 'string | number',
      default: '500'
    }
  },
  events: {
    click: { desc: '按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数', params: 'handler' },
    getphonenumber: { desc: 'open-type="getphonenumber"时有效', params: 'handler' },
    getuserinfo: {
      desc: '用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getuserinfo',
      params: 'handler'
    },
    error: { desc: '当使用开放能力时，发生错误的回调', params: 'handler' },
    opensetting: { desc: '在打开授权设置页并关闭后回调', params: 'handler' },
    launchapp: { desc: '打开 app 成功的回调', params: 'handler' }
  }
};
