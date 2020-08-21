import {Component, getOthersInfo} from './index'; 
export const search: Component = {
  "prefix": "u-search",
  "description": "search",
  "body": [
    "<u-search></u-search>"
  ],
  "url": "http://uviewui.com/components/search.html",
  "props": {
    "shape": {
      "desc": "搜索框形状，round-圆形，square-方形",
      "type": "string",
      "default": "round",
      "options": "square"
    },
    "bg-color": {
      "desc": "搜索框背景颜色",
      "type": "string",
      "default": "#f2f2f2"
    },
    "border-color": {
      "desc": "边框颜色，配置了颜色，才会有边框",
      "type": "string",
      "default": "-"
    },
    "placeholder": {
      "desc": "占位文字内容",
      "type": "string",
      "default": "请输入关键字"
    },
    "clearabled": {
      "desc": "是否启用清除控件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "focus": {
      "desc": "是否自动获得焦点",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "show-action": {
      "desc": "是否显示右侧控件(右侧的\"搜索\"按钮)",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "action-text": {
      "desc": "右侧控件文字",
      "type": "string",
      "default": "搜索"
    },
    "action-style": {
      "desc": "右侧控件的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "input-align": {
      "desc": "输入框内容水平对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    },
    "disabled": {
      "desc": "是否启用输入框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "animation": {
      "desc": "是否开启动画，见上方说明",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "value": {
      "desc": "输入框初始值",
      "type": "string",
      "default": "-"
    },
    "height": {
      "desc": "输入框高度，单位rpx",
      "type": "string | number",
      "default": "64"
    },
    "search-icon-color": {
      "desc": "搜索图标的颜色，默认同输入框字体颜色",
      "type": "string",
      "default": "-"
    },
    "color": {
      "desc": "输入框字体颜色",
      "type": "string",
      "default": "#606266"
    },
    "placeholder-color": {
      "desc": "placeholder的颜色",
      "type": "string",
      "default": "#909399"
    },
    "margin": {
      "desc": "组件与其他上下左右元素之间的距离，带单位的字符串形式，如\"30rpx\"、\"30rpx 20rpx\"等写法",
      "type": "string",
      "default": "-"
    },
    "maxlength": {
      "desc": "输入框最大能输入的长度，-1为不限制长度",
      "type": "string | number",
      "default": "-1"
    },
    "input-style": {
      "desc": "自定义输入框样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "search-icon 1.3.5": {
      "desc": "输入框左边的图标，可以为uview图标名称或图片路径",
      "type": "string",
      "default": "search"
    }
  },
  "events": {
    "change": {
      "desc": "输入框内容发生变化时触发",
      "params": "value：输入框的值"
    },
    "search": {
      "desc": "用户确定搜索时触发，用户按回车键，或者手机键盘右下角的\"搜索\"键时触发",
      "params": "value：输入框的值"
    },
    "custom": {
      "desc": "用户点击右侧控件时触发",
      "params": "value：输入框的值"
    },
    "blur": {
      "desc": "输入框失去焦点时触发",
      "params": "value：输入框的值"
    },
    "focus": {
      "desc": "输入框获得焦点时触发",
      "params": "value：输入框的值"
    },
    "clear": {
      "desc": "配置了clearabled后，清空内容时会发出此事件",
      "params": "-"
    },
    "click 1.5.3": {
      "desc": "disabled为true时，点击输入框，发出此事件，用于跳转搜索页",
      "params": "-"
    }
  }
};