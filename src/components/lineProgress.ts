import {Component, getOthersInfo} from './index'; 
export const lineProgress: Component = {
  "prefix": "u-line-progress",
  "description": "lineProgress",
  "body": [
    "<u-line-progress></u-line-progress>"
  ],
  "url": "http://uviewui.com/components/lineProgress.html",
  "props": {
    "percent": {
      "desc": "进度条百分比值，为数值类型，0-100",
      "type": "string | number",
      "default": "-"
    },
    "round": {
      "desc": "进度条两端是否为半圆",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "type": {
      "desc": "如设置，active-color值将会失效",
      "type": "string",
      "default": "-",
      "options": "success / primary / error / info / warning"
    },
    "active-color": {
      "desc": "进度条激活部分的颜色",
      "type": "string",
      "default": "#19be6b"
    },
    "inactive-color": {
      "desc": "进度条的底色，默认为灰色",
      "type": "string",
      "default": "#ececec"
    },
    "show-percent": {
      "desc": "是否在进度条内部显示当前的百分比值数值",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "height": {
      "desc": "进度条的高度，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "striped": {
      "desc": "是否显示进度条激活部分的条纹",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "striped-active": {
      "desc": "条纹是否具有动态效果",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "slots": {
    "default 1.5.4": {
      "desc": "传入自定义的显示内容，将会覆盖默认显示的百分比值"
    }
  }
};