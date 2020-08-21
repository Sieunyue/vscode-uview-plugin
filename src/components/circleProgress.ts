import {Component, getOthersInfo} from './index'; 
export const circleProgress: Component = {
  "prefix": "u-circle-progress",
  "description": "circleProgress",
  "body": [
    "<u-circle-progress></u-circle-progress>"
  ],
  "url": "http://uviewui.com/components/circleProgress.html",
  "props": {
    "percent": {
      "desc": "圆环进度百分比值，为数值类型，0-100",
      "type": "string | number",
      "default": "-"
    },
    "inactive-color": {
      "desc": "圆环的底色，默认为灰色(该值无法动态变更)",
      "type": "string",
      "default": "#ececec"
    },
    "active-color": {
      "desc": "圆环激活部分的颜色(该值无法动态变更)",
      "type": "string",
      "default": "#19be6b"
    },
    "width": {
      "desc": "整个圆环组件的宽度，高度默认等于宽度值，单位rpx",
      "type": "string | number",
      "default": "200"
    },
    "border-width": {
      "desc": "圆环的边框宽度，单位rpx",
      "type": "string | number",
      "default": "14"
    },
    "duration": {
      "desc": "整个圆环执行一圈的时间，单位ms",
      "type": "string | number",
      "default": "1500"
    },
    "type": {
      "desc": "如设置，active-color值将会失效",
      "type": "string",
      "default": "-",
      "options": "success / primary / error / info / warning"
    },
    "bg-color": {
      "desc": "整个组件背景颜色，默认为白色",
      "type": "string",
      "default": "#ffffff"
    }
  }
};