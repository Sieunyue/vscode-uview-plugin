import {Component, getOthersInfo} from './index'; 
export const numberBox: Component = {
  "prefix": "u-number-box",
  "description": "numberBox",
  "body": [
    "<u-number-box></u-number-box>"
  ],
  "url": "http://uviewui.com/components/numberBox.html",
  "props": {
    "v-model": {
      "desc": "输入框初始值",
      "type": "number",
      "default": "1"
    },
    "bg-color": {
      "desc": "输入框和按钮的背景颜色",
      "type": "string",
      "default": "#f2f3f5"
    },
    "min": {
      "desc": "用户可输入的最小值",
      "type": "number",
      "default": "0"
    },
    "max": {
      "desc": "用户可输入的最大值",
      "type": "number",
      "default": "99999"
    },
    "step": {
      "desc": "步长，每次加或减的值，1.4.5起支持小数值，如需小数，请设置positive-integer为false",
      "type": "number",
      "default": "1"
    },
    "disabled": {
      "desc": "是否禁用操作，禁用后无法加减或手动修改输入框的值",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "size": {
      "desc": "输入框文字和按钮字体大小，单位rpx",
      "type": "string | number",
      "default": "26"
    },
    "color": {
      "desc": "输入框文字和加减按钮图标的颜色",
      "type": "string",
      "default": "#323233"
    },
    "input-width": {
      "desc": "输入框宽度，单位rpx",
      "type": "string | number",
      "default": "80"
    },
    "input-height": {
      "desc": "输入框和按钮的高度，单位rpx",
      "type": "string | number",
      "default": "50"
    },
    "index": {
      "desc": "事件回调时用以区分当前发生变化的是哪个输入框",
      "type": "string | number",
      "default": "-"
    },
    "disabled-input": {
      "desc": "是否禁止输入框手动输入值",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "cursor-spacing": {
      "desc": "指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx",
      "type": "string | number",
      "default": "200"
    },
    "long-press 1.4.5": {
      "desc": "是否开启长按连续递增或递减",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "press-time  1.4.5": {
      "desc": "开启长按触发后，每触发一次需要多久，单位ms",
      "type": "string | number",
      "default": "250"
    },
    "positive-integer 1.5.6": {
      "desc": "是否只能输入正整数",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "change": {
      "desc": "输入框内容发生变化时触发，对象形式",
      "params": "value：输入框当前值，index：通过props传递的index值"
    },
    "blur": {
      "desc": "输入框失去焦点时触发，对象形式",
      "params": "value：输入框当前值，index：通过props传递的index值"
    },
    "minus": {
      "desc": "点击减少按钮时触发(按钮可点击情况下)，对象形式",
      "params": "value：输入框当前值，index：通过props传递的index值"
    },
    "plus": {
      "desc": "点击增加按钮时触发(按钮可点击情况下)，对象形式",
      "params": "value：输入框当前值，index：通过props传递的index值"
    }
  }
};