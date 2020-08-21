import {Component, getOthersInfo} from './index'; 
export const tabs: Component = {
  "prefix": "u-tabs",
  "description": "tabs",
  "body": [
    "<u-tabs></u-tabs>"
  ],
  "url": "http://uviewui.com/components/tabs.html",
  "props": {
    "is-scroll": {
      "desc": "tabs是否可以左右拖动",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "list": {
      "desc": "标签数组，元素为对象，如[{name: '推荐'}]",
      "type": "array",
      "default": "-"
    },
    "current": {
      "desc": "指定哪个tab为激活状态",
      "type": "string | number",
      "default": "0，即list的第一项"
    },
    "height": {
      "desc": "导航栏的高度，单位rpx",
      "type": "string | number",
      "default": "80"
    },
    "font-size": {
      "desc": "tab文字大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "duration": {
      "desc": "滑块移动一次所需的时间，单位秒",
      "type": "string | number",
      "default": "0.5"
    },
    "active-color": {
      "desc": "滑块和激活tab文字的颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "inactive-color": {
      "desc": "tabs文字颜色",
      "type": "string",
      "default": "#303133"
    },
    "bar-width": {
      "desc": "滑块宽度，单位rpx",
      "type": "string | number",
      "default": "40"
    },
    "bar-height": {
      "desc": "滑块高度，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "gutter": {
      "desc": "单个tab标签的左右内边距之和，单位rpx",
      "type": "string | number",
      "default": "40"
    },
    "bg-color": {
      "desc": "tabs导航栏的背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "name": {
      "desc": "组件内部读取的list参数中的属性名，见上方说明",
      "type": "string",
      "default": "name"
    },
    "bold": {
      "desc": "激活选项的字体是否加粗",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-bar": {
      "desc": "是否显示底部的滑块",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "bar-style": {
      "desc": "底部滑块的样式，对象形式",
      "type": "object",
      "default": "{}"
    },
    "active-item-style": {
      "desc": "当前活动item的样式，对象形式",
      "type": "object",
      "default": "{}"
    },
    "item-width 1.5.6": {
      "desc": "标签的宽度，单位rpx",
      "type": "string | number",
      "default": "auto"
    }
  },
  "events": {
    "change": {
      "desc": "点击标签时触发",
      "params": "index: 点击了第几个tab，索引从0开始"
    }
  }
};