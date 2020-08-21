import {Component, getOthersInfo} from './index'; 
export const checkbox: Component = {
  "prefix": "u-checkbox",
  "description": "checkbox",
  "body": [
    "<u-checkbox></u-checkbox>"
  ],
  "url": "http://uviewui.com/components/checkbox.html",
  "checkboxgroup-props": {
    "max": {
      "desc": "最多能选中多少个checkbox",
      "type": "string \\ number",
      "default": "999"
    },
    "disabled": {
      "desc": "是否禁用所有checkbox",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "icon-size": {
      "desc": "图标大小，单位rpx",
      "type": "string \\ number",
      "default": "20"
    },
    "size": {
      "desc": "组件整体的大小，单位rpx",
      "type": "string \\ number",
      "default": "34"
    },
    "shape": {
      "desc": "形状，见上方说明",
      "type": "string",
      "default": "circle",
      "options": "square"
    },
    "active-color": {
      "desc": "选中时的颜色，应用到所有子checkbox组件",
      "type": "string",
      "default": "#2979ff"
    },
    "label-disabled": {
      "desc": "是否禁止点击文本操作checkbox",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "width 1.3.0": {
      "desc": "checkbox的宽度，需带单位，如50%，150rpx",
      "type": "string",
      "default": "auto"
    },
    "wrap 1.3.0": {
      "desc": "是否每个checkbox占一行",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "checkbox-event": {
    "change": {
      "desc": "某个checkbox状态发生变化时触发，回调为一个对象",
      "params": "detail = {value: [true或者false，true为被选中，否则反之], name: [通过props传递的name参数] }"
    }
  },
  "checkboxgroup-event": {
    "change": {
      "desc": "任一个checkbox状态发生变化时触发，回调为一个对象",
      "params": "detail = array( [元素为被选中的checkbox的name] )"
    }
  }
};