import {Component, getOthersInfo} from './index'; 
export const alertTips: Component = {
  "prefix": "u-alert-tips",
  "description": "alertTips",
  "body": [
    "<u-alert-tips></u-alert-tips>"
  ],
  "url": "http://uviewui.com/components/alertTips.html",
  "props": {
    "title": {
      "desc": "显示的文字",
      "type": "string",
      "default": "-"
    },
    "description": {
      "desc": "辅助性文字，颜色比title浅一点，字号也小一点，可选",
      "type": "string",
      "default": "-"
    },
    "close-able": {
      "desc": "关闭按钮(默认为叉号icon图标)",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "type": {
      "desc": "使用预设的颜色",
      "type": "string",
      "default": "warning",
      "options": "success / primary / error / info"
    },
    "close-text": {
      "desc": "用文字替代关闭图标，close-able为true时有效",
      "type": "string",
      "default": "-"
    },
    "show-icon": {
      "desc": "是否显示左边的辅助图标",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "show": {
      "desc": "显示或隐藏组件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "icon 1.5.8": {
      "desc": "左侧的图标名称，如设置type和show-icon值，会有一个默认的图标",
      "type": "string",
      "default": "-"
    },
    "icon-style 1.5.8": {
      "desc": "自定义图标的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "title-style 1.5.8": {
      "desc": "自定义标题的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "desc-style 1.5.8": {
      "desc": "自定义内容的样式，对象形式",
      "type": "object",
      "default": "-"
    }
  },
  "events": {
    "close": {
      "desc": "点击关闭按钮时触发，需在此回调设置show为false",
      "params": "-"
    },
    "click": {
      "desc": "点击组件时触发",
      "params": "-"
    }
  }
};