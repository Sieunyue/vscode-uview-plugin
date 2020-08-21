import {Component, getOthersInfo} from './index'; 
export const mask: Component = {
  "prefix": "u-mask",
  "description": "mask",
  "body": [
    "<u-mask></u-mask>"
  ],
  "url": "http://uviewui.com/components/mask.html",
  "props": {
    "show": {
      "desc": "是否显示遮罩",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "z-index": {
      "desc": "z-index 层级",
      "type": "string | number",
      "default": "10070"
    },
    "custom-style": {
      "desc": "自定义样式对象，见上方说明",
      "type": "object",
      "default": "-"
    },
    "duration": {
      "desc": "动画时长，单位毫秒",
      "type": "string | number",
      "default": "300"
    },
    "zoom": {
      "desc": "是否使用scale对遮罩进行缩放",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "mask-click-able": {
      "desc": "遮罩是否可点击，为false时点击不会发送click事件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "click": {
      "desc": "mask-click-able为true时，点击遮罩发送此事件",
      "params": "-"
    }
  },
  "slot": {
    "default": {
      "desc": "默认插槽，用于在遮罩层上方嵌入内容"
    }
  }
};