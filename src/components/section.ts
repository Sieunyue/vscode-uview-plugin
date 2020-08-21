import {Component, getOthersInfo} from './index'; 
export const section: Component = {
  "prefix": "u-section",
  "description": "section",
  "body": [
    "<u-section></u-section>"
  ],
  "url": "http://uviewui.com/components/section.html",
  "props": {
    "title": {
      "desc": "左边主标题",
      "type": "string",
      "default": "-"
    },
    "sub-title": {
      "desc": "右边副标题",
      "type": "string",
      "default": "更多"
    },
    "right": {
      "desc": "是否显示右边的内容",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-line 1.3.3": {
      "desc": "是否显示左边的竖条",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "font-size": {
      "desc": "主标题的字体大小",
      "type": "string | number",
      "default": "28"
    },
    "bold": {
      "desc": "主标题是否加粗",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "color": {
      "desc": "主标题颜色",
      "type": "string",
      "default": "#303133"
    },
    "sub-color": {
      "desc": "右边副标题的颜色(右箭头同此颜色)",
      "type": "string",
      "default": "#909399"
    },
    "line-color 1.5.5": {
      "desc": "左边竖线的颜色，默认同color参数值",
      "type": "string",
      "default": "-"
    },
    "arrow 1.6.0": {
      "desc": "是否显示右边箭头",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "click": {
      "desc": "组件右侧的内容被点击时触发，用于跳转\"更多\"",
      "params": "-"
    }
  },
  "slot": {
    "right 1.6.0": {
      "desc": "自定义右侧内容"
    }
  }
};