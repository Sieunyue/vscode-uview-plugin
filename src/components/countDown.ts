import {Component, getOthersInfo} from './index'; 
export const countDown: Component = {
  "prefix": "u-count-down",
  "description": "countDown",
  "body": [
    "<u-count-down></u-count-down>"
  ],
  "url": "http://uviewui.com/components/countDown.html",
  "props": {
    "timestamp": {
      "desc": "倒计时，单位为秒",
      "type": "string | number",
      "default": "0"
    },
    "autoplay": {
      "desc": "是否自动开始倒计时，如果为false，需手动调用开始方法。见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "separator": {
      "desc": "分隔符，colon为英文冒号，zh为中文",
      "type": "string",
      "default": "colon",
      "options": "zh"
    },
    "separator-size": {
      "desc": "分隔符的字体大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "separator-color": {
      "desc": "分隔符的颜色",
      "type": "string",
      "default": "#303133"
    },
    "font-size": {
      "desc": "倒计时字体大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "show-border": {
      "desc": "是否显示倒计时数字的边框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "border-color": {
      "desc": "数字边框的颜色",
      "type": "string",
      "default": "#303133"
    },
    "bg-color": {
      "desc": "倒计时数字的背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "color": {
      "desc": "倒计时数字的颜色",
      "type": "string",
      "default": "#303133"
    },
    "height": {
      "desc": "数字高度值(宽度等同此值)，设置边框时看情况是否需要设置此值，单位rpx",
      "type": "string",
      "default": "auto"
    },
    "show-days": {
      "desc": "是否显示倒计时的\"天\"部分",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-hours": {
      "desc": "是否显示倒计时的\"时\"部分",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-minutes": {
      "desc": "是否显示倒计时的\"分\"部分",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-seconds": {
      "desc": "是否显示倒计时的\"秒\"部分",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "hide-zero-day 1.4.4": {
      "desc": "当\"天\"的部分为0时，隐藏该字段",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "end": {
      "desc": "倒计时结束",
      "params": "-"
    },
    "change": {
      "desc": "倒计过程中，每秒触发一次",
      "params": "timestamp: 当前剩余的倒计秒数"
    }
  },
  "methods": {
    "start": {
      "desc": "开始倒计时",
      "type": ""
    }
  }
};