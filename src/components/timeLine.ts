import {Component, getOthersInfo} from './index'; 
export const timeLine: Component = {
  "prefix": "u-time-line",
  "description": "timeLine",
  "body": [
    "<u-time-line></u-time-line>"
  ],
  "url": "http://uviewui.com/components/timeLine.html",
  "tiemlimeitem-props": {
    "bg-color": {
      "desc": "左边节点的背景颜色，一般通过slot内容自定义背景颜色即可",
      "type": "string",
      "default": "#ffffff"
    },
    "node-top": {
      "desc": "节点左边图标绝对定位的top值，单位rpx",
      "type": "string | number",
      "default": "-"
    }
  }
};