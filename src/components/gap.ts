import {Component, getOthersInfo} from './index'; 
export const gap: Component = {
  "prefix": "u-gap",
  "description": "gap",
  "body": [
    "<u-gap></u-gap>"
  ],
  "url": "http://uviewui.com/components/gap.html",
  "props": {
    "bg-color": {
      "desc": "背景颜色",
      "type": "string",
      "default": "transparent(背景透明)"
    },
    "height": {
      "desc": "间隔槽高度，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "margin-top": {
      "desc": "与前一个元素的距离，单位rpx",
      "type": "string | number",
      "default": "0"
    },
    "margin-bottom": {
      "desc": "与后一个元素的距离，单位rpx",
      "type": "string | number",
      "default": "0"
    }
  }
};