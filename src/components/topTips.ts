import {Component, getOthersInfo} from './index'; 
export const topTips: Component = {
  "prefix": "u-top-tips",
  "description": "topTips",
  "body": [
    "<u-top-tips></u-top-tips>"
  ],
  "url": "http://uviewui.com/components/topTips.html",
  "methods": {
    "title": {
      "desc": "要现实的内容",
      "type": "string"
    },
    "type": {
      "desc": "主题选择",
      "type": "string"
    },
    "duration": {
      "desc": "显示的时间，单位ms",
      "type": "2000"
    }
  },
  "props": {
    "navbar-height": {
      "desc": "导航栏高度(包含状态栏高度在内)，单位px",
      "type": "string | number",
      "default": "-"
    },
    "z-index": {
      "desc": "z-index值",
      "type": "string | number",
      "default": "975"
    }
  }
};