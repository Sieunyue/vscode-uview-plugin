import {Component, getOthersInfo} from './index'; 
export const line: Component = {
  "prefix": "u-line",
  "description": "line",
  "body": [
    "<u-line></u-line>"
  ],
  "url": "http://uviewui.com/components/line.html",
  "props": {
    "color": {
      "desc": "线条的颜色",
      "type": "string",
      "default": "#e4e7ed"
    },
    "length": {
      "desc": "长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等",
      "type": "string",
      "default": "100%"
    },
    "direction": {
      "desc": "线条的方向，row-横向，col-竖向",
      "type": "string",
      "default": "row",
      "options": "col"
    },
    "hair-line": {
      "desc": "是否显示细线条",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "margin": {
      "desc": "线条与上下左右元素的间距，字符串形式，如\"30rpx\"、\"20rpx 30rpx\"",
      "type": "string",
      "default": "-"
    },
    "border-style 1.3.7": {
      "desc": "线条类型，见上方说明",
      "type": "string",
      "default": "solid",
      "options": "dashed / dotted"
    }
  }
};