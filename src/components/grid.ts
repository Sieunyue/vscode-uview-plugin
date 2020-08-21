import {Component, getOthersInfo} from './index'; 
export const grid: Component = {
  "prefix": "u-grid",
  "description": "grid",
  "body": [
    "<u-grid></u-grid>"
  ],
  "url": "http://uviewui.com/components/grid.html",
  "grid-props": {
    "col": {
      "desc": "宫格的列数",
      "type": "string | number",
      "default": "3"
    },
    "border": {
      "desc": "是否显示宫格的边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "align": {
      "desc": "宫格的对齐方式，用于控制只有一两个宫格时的对齐场景",
      "type": "string",
      "default": "left",
      "options": "center / right"
    },
    "hover-class": {
      "desc": "样式类名，按下时有效，样式必须写在根目录的app.vue或通过其引入的全局样式中才有效，none为无效果，作用于头部标题区域",
      "type": "string",
      "default": "u-hover-class",
      "options": "none / 其他"
    }
  },
  "grid-item-props": {
    "bg-color": {
      "desc": "宫格的背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "index": {
      "desc": "点击宫格时，返回的值",
      "type": "string | number",
      "default": "-"
    }
  },
  "grid-event": {
    "click": {
      "desc": "点击宫格触发",
      "params": "index: u-grid-item通过props传递的index值"
    }
  },
  "grid-item-event": {
    "click": {
      "desc": "点击宫格触发",
      "params": "index: u-grid-item通过props传递的index值"
    }
  }
};