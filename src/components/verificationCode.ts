import {Component, getOthersInfo} from './index'; 
export const verificationCode: Component = {
  "prefix": "u-verification-code",
  "description": "verificationCode",
  "body": [
    "<u-verification-code></u-verification-code>"
  ],
  "url": "http://uviewui.com/components/verificationCode.html",
  "props": {
    "seconds": {
      "desc": "倒计时所需的秒数",
      "type": "number | string",
      "default": "60"
    },
    "start-text": {
      "desc": "开始前的提示语，见上方说明",
      "type": "string",
      "default": "获取验证码"
    },
    "change-text": {
      "desc": "倒计时期间的提示语，必须带有字母\"x\"，见上方说明",
      "type": "string",
      "default": "x秒重新获取"
    },
    "end-text": {
      "desc": "倒计结束的提示语，见上方说明",
      "type": "string",
      "default": "重新获取"
    },
    "keep-running": {
      "desc": "是否在h5刷新或各端返回再进入时继续倒计时",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "unique-key 1.3.4": {
      "desc": "多个组件之间继续倒计时的区分key，见上方说明",
      "type": "string",
      "default": "-"
    }
  },
  "methods": {
    "start": {
      "desc": "开始倒计时",
      "type": ""
    },
    "reset": {
      "desc": "结束当前正在进行中的倒计时，设置组件为可以重新获取验证码的状态",
      "type": ""
    }
  },
  "event": {
    "change": {
      "desc": "倒计时期间，每秒触发一次",
      "params": "text: 当前剩余多少秒的状态，见上方说明"
    },
    "start": {
      "desc": "开始倒计时触发",
      "params": "-"
    },
    "end": {
      "desc": "结束倒计时触发",
      "params": "-"
    }
  }
};