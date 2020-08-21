import {Component, getOthersInfo} from './index'; 
export const messageInput: Component = {
  "prefix": "u-message-input",
  "description": "messageInput",
  "body": [
    "<u-message-input></u-message-input>"
  ],
  "url": "http://uviewui.com/components/messageInput.html",
  "props": {
    "maxlength": {
      "desc": "输入字符个数",
      "type": "string | number",
      "default": "4"
    },
    "dot-fill": {
      "desc": "是否用圆点填充",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "mode": {
      "desc": "模式选择，见上方\"基本使用\"说明",
      "type": "string",
      "default": "box",
      "options": "bottomline / middleline"
    },
    "value": {
      "desc": "预置值",
      "type": "string | number",
      "default": "-"
    },
    "breathe": {
      "desc": "是否开启呼吸效果，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "focus": {
      "desc": "是否自动获取焦点",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "bold": {
      "desc": "字体和输入横线是否加粗",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "60"
    },
    "active-color": {
      "desc": "当前激活输入框的样式",
      "type": "string",
      "default": "#2979ff"
    },
    "inactive-color": {
      "desc": "非激活输入框的样式，文字颜色同此值",
      "type": "string",
      "default": "#606266"
    },
    "width": {
      "desc": "输入框的宽度(高等于宽)，单位rpx",
      "type": "string | number",
      "default": "80"
    },
    "disabled-keyboard": {
      "desc": "禁止点击输入框唤起系统键盘",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "events": {
    "change": {
      "desc": "输入内容发生改变时触发，具体见上方说明",
      "params": "value：当前输入的值"
    },
    "finish": {
      "desc": "输入字符个数达maxlength值时触发，见上方说明",
      "params": "value：当前输入的值"
    }
  }
};