import {Component, getOthersInfo} from './index'; 
export const empty: Component = {
  "prefix": "u-empty",
  "description": "empty",
  "body": [
    "<u-empty></u-empty>"
  ],
  "url": "http://uviewui.com/components/empty.html",
  "props": {
    "color": {
      "desc": "文字颜色",
      "type": "string",
      "default": "#c0c4cc"
    },
    "text": {
      "desc": "文字提示",
      "type": "string",
      "default": "无内容"
    },
    "icon-color 1.4.2": {
      "desc": "icon的颜色，字体图标时有效",
      "type": "string",
      "default": "#c0c4cc"
    },
    "icon-size 1.4.2": {
      "desc": "icon的大小，单位rpx",
      "type": "string | number",
      "default": "120"
    },
    "src": {
      "desc": "图标名称或者图片路径(绝对路径)，如定义，mode参数会失效",
      "type": "string",
      "default": "-"
    },
    "font-size": {
      "desc": "提示文字的大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "mode": {
      "desc": "内置的图标，见上方说明",
      "type": "string",
      "default": "data"
    },
    "img-width 1.4.2起废弃": {
      "desc": "图标的宽度，单位rpx",
      "type": "string | number",
      "default": "240"
    },
    "img-height 1.4.2起废弃": {
      "desc": "图标的高度，单位rpx",
      "type": "string",
      "default": "auto"
    },
    "show": {
      "desc": "是否显示组件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "margin-top": {
      "desc": "组件到上一个元素的间距,单位rpx",
      "type": "string | number",
      "default": "0"
    }
  },
  "slot": {
    "bottom": {
      "desc": "给组件底部传入slot内容"
    }
  }
};