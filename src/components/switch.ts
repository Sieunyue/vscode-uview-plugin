import {Component, getOthersInfo} from './index'; 
export const uSwitch: Component = {
  "prefix": "u-switch",
  "description": "switch",
  "body": [
    "<u-switch></u-switch>"
  ],
  "url": "http://uviewui.com/components/switch.html",
  "switch-props": {
    "loading": {
      "desc": "是否处于加载中",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "disabled": {
      "desc": "是否禁用",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "size": {
      "desc": "开关尺寸，单位rpx",
      "type": "string | number",
      "default": "50"
    },
    "active-color": {
      "desc": "打开时的背景色",
      "type": "string",
      "default": "#2979ff"
    },
    "inactive-color": {
      "desc": "关闭时的背景色",
      "type": "string",
      "default": "#ffffff"
    },
    "vibrate-short": {
      "desc": "是否使手机发生短促震动，目前只在ios的微信小程序和微信小程序开发工具有效",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "active-value": {
      "desc": "打开选择器时通过change事件发出的值",
      "type": "boolean | number | string",
      "default": "true",
      "options": ""
    },
    "inactive-value": {
      "desc": "关闭选择器时通过change事件发出的值",
      "type": "boolean | number | string",
      "default": "false",
      "options": ""
    }
  },
  "switch-event": {
    "change": {
      "desc": "在switch打开或关闭时触发",
      "params": "value：打开时为active-value值，关闭时为inactive-value值"
    }
  }
};