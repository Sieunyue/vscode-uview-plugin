import {Component, getOthersInfo} from './index'; 
export const radio: Component = {
  "prefix": "u-radio",
  "description": "radio",
  "body": [
    "<u-radio></u-radio>"
  ],
  "url": "http://uviewui.com/components/radio.html",
  "radio-props": {
    "icon-size": {
      "desc": "图标大小，单位rpx",
      "type": "string | number",
      "default": "-"
    },
    "label-size": {
      "desc": "label字体大小，单位rpx",
      "type": "string | number",
      "default": "-"
    },
    "name": {
      "desc": "radio组件的标示符",
      "type": "string | number",
      "default": "-"
    },
    "shape": {
      "desc": "形状，见上方说明",
      "type": "string",
      "default": "-",
      "options": "circle / square"
    },
    "disabled": {
      "desc": "是否禁用",
      "type": "boolean",
      "default": "-",
      "options": "false / true"
    },
    "label-disabled": {
      "desc": "是否禁止点击文本操作radio",
      "type": "boolean",
      "default": "-",
      "options": "true / false"
    },
    "active-color": {
      "desc": "选中时的颜色，如设置radiogroup的active-color将失效",
      "type": "string",
      "default": "-"
    }
  },
  "radiogroup-props": {
    "v-model": {
      "desc": "被选中radio双向绑定的值，如果初始值为某一个radio的name，该radio将会默认被选中",
      "type": "string \\ number",
      "default": "-"
    },
    "disabled": {
      "desc": "是否禁用所有radio",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "label-disabled 1.5.2": {
      "desc": "是否禁止点击文本操作radio",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "shape 1.5.2": {
      "desc": "形状，见上方说明",
      "type": "string",
      "default": "circle",
      "options": "square"
    },
    "icon-size 1.5.2": {
      "desc": "图标大小，单位rpx",
      "type": "string \\ number",
      "default": "20"
    },
    "active-color": {
      "desc": "选中时的颜色，应用到所有子radio组件",
      "type": "string",
      "default": "#2979ff"
    },
    "size": {
      "desc": "radio组件整体的大小，单位rpx",
      "type": "string \\ number",
      "default": "34"
    },
    "width 1.3.0": {
      "desc": "radio的宽度，需带单位，如50%，150rpx",
      "type": "string",
      "default": "auto"
    },
    "wrap 1.3.0": {
      "desc": "是否每个radio占一行",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "radio-event": {
    "change": {
      "desc": "某个radio状态发生变化时触发(选中状态)",
      "params": "name: 通过props传递的name参数"
    }
  },
  "radiogroup-event": {
    "change": {
      "desc": "任一个radio状态发生变化时触发",
      "params": "name: 值为radio通过props传递的name值"
    }
  }
};