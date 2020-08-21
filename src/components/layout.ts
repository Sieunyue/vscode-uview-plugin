import {Component, getOthersInfo} from './index'; 
export const layout: Component = {
  "prefix": "u-layout",
  "description": "layout",
  "body": [
    "<u-layout></u-layout>"
  ],
  "url": "http://uviewui.com/components/layout.html",
  "row-props": {
    "gutter": {
      "desc": "栅格间隔，左右各为此值的一半，单位rpx",
      "type": "string | number",
      "default": "0"
    },
    "justify": {
      "desc": "水平排列方式(微信小程序暂不支持)",
      "type": "string",
      "default": "start(或flex-start)",
      "options": "end(或flex-end) / center / around(或space-around) / between(或space-between)"
    },
    "align": {
      "desc": "垂直排列方式",
      "type": "string",
      "default": "center",
      "options": "top / bottom"
    }
  },
  "col-props": {
    "span": {
      "desc": "栅格占据的列数，总12等分",
      "type": "string | number",
      "default": "0",
      "options": "1-12"
    },
    "offset": {
      "desc": "分栏左边偏移，计算方式与span相同",
      "type": "string | number",
      "default": "0"
    },
    "text-align 1.5.5": {
      "desc": "文字水平对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    }
  },
  "row-events": {
    "click": {
      "desc": "row被点击",
      "params": "-"
    }
  },
  "col-events": {
    "click": {
      "desc": "col被点击，会阻止事件冒泡到row",
      "params": "-"
    }
  }
};