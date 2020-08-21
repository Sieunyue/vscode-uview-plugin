import {Component, getOthersInfo} from './index'; 
export const noticeBar: Component = {
  "prefix": "u-notice-bar",
  "description": "noticeBar",
  "body": [
    "<u-notice-bar></u-notice-bar>"
  ],
  "url": "http://uviewui.com/components/noticeBar.html",
  "props": {
    "list": {
      "desc": "滚动内容，数组形式，见上方说明",
      "type": "array",
      "default": "-"
    },
    "type": {
      "desc": "显示的主题",
      "type": "string",
      "default": "warning",
      "options": "primary / info / error / success / none"
    },
    "volume-icon": {
      "desc": "是否显示小喇叭图标",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "more-icon": {
      "desc": "是否显示右边的向右箭头",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "close-icon": {
      "desc": "是否显示关闭图标",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "autoplay": {
      "desc": "是否自动播放",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "color": {
      "desc": "文字颜色",
      "type": "string",
      "default": "-"
    },
    "bg-color": {
      "desc": "背景颜色",
      "type": "string | number",
      "default": "-"
    },
    "mode": {
      "desc": "滚动模式",
      "type": "string",
      "default": "horizontal(水平滚动)",
      "options": "vertical(垂直滚动)"
    },
    "show": {
      "desc": "是否显示",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "volume-size": {
      "desc": "左边喇叭的大小",
      "type": "string | number",
      "default": "34"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "duration": {
      "desc": "滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms",
      "type": "string | number",
      "default": "2000"
    },
    "speed": {
      "desc": "水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接方式有效，单位rpx",
      "type": "string | number",
      "default": "160"
    },
    "is-circular": {
      "desc": "mode为horizontal时，指明是否水平衔接滚动",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "play-state": {
      "desc": "播放状态，play - 播放，paused - 暂停",
      "type": "string",
      "default": "play",
      "options": "paused"
    },
    "disable-touch": {
      "desc": "是否禁止通过手动滑动切换通知，只有mode = vertical，或者mode = horizontal且is-circular = false时有效；只支持app 2.5.5+、h5 2.5.5+、支付宝小程序、字节跳动小程序",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "padding": {
      "desc": "内置滚动通知的内边距，字符串，类似\"16rpx 20rpx\"",
      "type": "string",
      "default": "18rpx 24rpx"
    },
    "border-radius": {
      "desc": "圆角值，单位rpx",
      "type": "string \\ number",
      "default": "0"
    },
    "no-list-hidden": {
      "desc": "list为空数组时，是否显示组件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "click": {
      "desc": "点击通告文字触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效",
      "params": "index：当前文字所在list数组的索引值"
    },
    "close": {
      "desc": "点击右侧关闭图标触发",
      "params": "-"
    },
    "getmore": {
      "desc": "点击右侧向右图标触发",
      "params": "-"
    },
    "end": {
      "desc": "列表的消息每次被播放一个周期时触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效",
      "params": "-"
    }
  }
};