import {Component, getOthersInfo} from './index'; 
export const swipeAction: Component = {
  "prefix": "u-swipe-action",
  "description": "swipeAction",
  "body": [
    "<u-swipe-action></u-swipe-action>"
  ],
  "url": "http://uviewui.com/components/swipeAction.html",
  "props": {
    "bg-color": {
      "desc": "整个组件背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "index": {
      "desc": "标识符，点击时候用于区分点击了哪一个，用v-for循环时的index即可",
      "type": "string | number",
      "default": "-"
    },
    "btn-width": {
      "desc": "按钮宽度，单位rpx",
      "type": "string | number",
      "default": "180"
    },
    "disabled": {
      "desc": "是否禁止某个swipeaction滑动",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "vibrate-short": {
      "desc": "是否使手机发生短促震动，目前只在ios的微信小程序和微信小程序开发工具有效",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "show": {
      "desc": "打开或者关闭某个组件",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "options": {
      "desc": "按钮组的配置参数，数组形式，见上方说明",
      "type": "array",
      "default": "[ ]"
    }
  },
  "event": {
    "click": {
      "desc": "点击组件时触发",
      "params": "(index1, index)，见上方\"点击事件\"的说明"
    },
    "close": {
      "desc": "组件触发关闭状态时",
      "params": "index: 通过props传递的index"
    },
    "open": {
      "desc": "组件触发打开状态时",
      "params": "index: 通过props传递的index"
    },
    "content-click": {
      "desc": "点击内容时触发",
      "params": "index: 通过props传递的index"
    }
  }
};