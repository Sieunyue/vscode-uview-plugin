import {Component, getOthersInfo} from './index'; 
export const readMore: Component = {
  "prefix": "u-read-more",
  "description": "readMore",
  "body": [
    "<u-read-more></u-read-more>"
  ],
  "url": "http://uviewui.com/components/readMore.html",
  "props": {
    "show-height": {
      "desc": "内容超出此高度才会显示展开全文按钮，单位rpx",
      "type": "string | number",
      "default": "400"
    },
    "toggle": {
      "desc": "展开后是否显示收起按钮",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "close-text": {
      "desc": "关闭时的提示文字",
      "type": "string",
      "default": "展开阅读全文"
    },
    "font-size": {
      "desc": "提示文字的大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "open-text": {
      "desc": "展开时的提示文字",
      "type": "string",
      "default": "收起"
    },
    "color": {
      "desc": "提示文字的颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "shadow-style": {
      "desc": "对阴影的自定义处理，对象形式",
      "type": "object",
      "default": "见上方说明"
    },
    "text-indent 1.5.6": {
      "desc": "段落首行缩进的字符个数，无需缩进请设置为0",
      "type": "string",
      "default": "2em"
    },
    "index 1.5.8": {
      "desc": "用于在open和close事件中当作回调参数返回",
      "type": "string | number",
      "default": "-"
    }
  },
  "events": {
    "open 1.5.8": {
      "desc": "内容被展开时触发",
      "params": "index - props中传入的index参数值"
    },
    "close 1.5.8": {
      "desc": "内容被收起时触发",
      "params": "index - props中传入的index参数值"
    }
  }
};