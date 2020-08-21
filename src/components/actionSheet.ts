import {Component, getOthersInfo} from './index'; 
export const actionSheet: Component = {
  "prefix": "u-action-sheet",
  "description": "actionSheet",
  "body": [
    "<u-action-sheet></u-action-sheet>"
  ],
  "url": "http://uviewui.com/components/actionSheet.html",
  "props": {
    "list": {
      "desc": "按钮的文字数组，见上方文档示例",
      "type": "array<object>",
      "default": "[ ]"
    },
    "tips": {
      "desc": "顶部的提示文字，见上方文档示例",
      "type": "object",
      "default": "-"
    },
    "cancel-btn": {
      "desc": "是否显示底部的取消按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "border-radius": {
      "desc": "弹出部分顶部左右的圆角值，单位rpx",
      "type": "number \\ string",
      "default": "0"
    },
    "mask-close-able": {
      "desc": "点击遮罩是否可以关闭",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "safe-area-inset-bottom": {
      "desc": "是否开启底部安全区适配",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "z-index": {
      "desc": "z-index值",
      "type": "number \\ string",
      "default": "1075"
    },
    "cancel-text 1.3.0": {
      "desc": "取消按钮的提示文字",
      "type": "string",
      "default": "取消"
    }
  },
  "event": {
    "click": {
      "desc": "点击actionsheet列表项时触发",
      "params": "index: 点击了第几个，从0开始"
    },
    "close": {
      "desc": "点击取消按钮时触发",
      "params": "-"
    }
  }
};