import {Component, getOthersInfo} from './index'; 
export const keyboard: Component = {
  "prefix": "u-keyboard",
  "description": "keyboard",
  "body": [
    "<u-keyboard></u-keyboard>"
  ],
  "url": "http://uviewui.com/components/keyboard.html",
  "props": {
    "mode": {
      "desc": "键盘类型，见上方基本使用的说明",
      "type": "string",
      "default": "number",
      "options": "car / card"
    },
    "dot-enabled": {
      "desc": "是否显示\".\"按键，只在mode=number时有效",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "tooltip": {
      "desc": "是否显示键盘顶部工具条",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "tips": {
      "desc": "工具条中间的提示文字，见上方基本使用的说明",
      "type": "string",
      "default": "-"
    },
    "show-tips": {
      "desc": "是否显示工具条中间的文字",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "cancel-btn": {
      "desc": "是否显示工具条左边的\"取消\"按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "confirm-btn": {
      "desc": "是否显示工具条右边的\"完成\"按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "mask": {
      "desc": "是否显示遮罩",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "z-index": {
      "desc": "弹出键盘的z-index值",
      "type": "number | string",
      "default": "1075"
    },
    "random": {
      "desc": "是否打乱键盘按键的顺序",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "safe-area-inset-bottom": {
      "desc": "是否开启底部安全区适配",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "mask-close-able": {
      "desc": "是否允许点击遮罩收起键盘",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "confirm-text  1.5.6": {
      "desc": "确认按钮的文字",
      "type": "string",
      "default": "取消"
    },
    "cancel-text  1.5.6": {
      "desc": "取消按钮的文字",
      "type": "string",
      "default": "确认"
    }
  },
  "events": {
    "change": {
      "desc": "按键被点击(不包含退格键被点击)",
      "params": "按键的值，见上方说明和示例"
    },
    "cancel": {
      "desc": "键盘顶部工具条左边的\"取消\"按钮被点击",
      "params": "-"
    },
    "confirm": {
      "desc": "键盘顶部工具条右边的\"完成\"按钮被点击",
      "params": "-"
    },
    "backspace": {
      "desc": "键盘退格键被点击",
      "params": "-"
    }
  },
  "slot": {
    "default": {
      "desc": "内容将会显示键盘的工具条上面，可以结合messageinput 验证码输入组件实现类似支付宝输入密码时，上方显示输入内容的功能"
    }
  }
};