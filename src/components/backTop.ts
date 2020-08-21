import {Component, getOthersInfo} from './index'; 
export const backTop: Component = {
  "prefix": "u-back-top",
  "description": "backTop",
  "body": [
    "<u-back-top></u-back-top>"
  ],
  "url": "http://uviewui.com/components/backTop.html",
  "props": {
    "mode": {
      "desc": "按钮形状",
      "type": "string",
      "default": "circle",
      "options": "square"
    },
    "icon": {
      "desc": "uview内置图标名称，或图片路径",
      "type": "string",
      "default": "arrow-upward"
    },
    "tips": {
      "desc": "返回顶部按钮的提示文字",
      "type": "string",
      "default": "-"
    },
    "duration": {
      "desc": "返回顶部过程中的过渡时间，单位ms",
      "type": "string | number",
      "default": "100"
    },
    "scroll-top": {
      "desc": "页面的滚动距离，通过onpagescroll生命周期获取",
      "type": "string | number",
      "default": "0"
    },
    "top": {
      "desc": "滚动条滑动多少距离时显示，单位rpx",
      "type": "string | number",
      "default": "400"
    },
    "bottom": {
      "desc": "返回按钮位置到屏幕底部的距离，单位rpx",
      "type": "string | number",
      "default": "200"
    },
    "right": {
      "desc": "返回按钮位置到屏幕右边的距离，单位rpx",
      "type": "string | number",
      "default": "40"
    },
    "z-index": {
      "desc": "返回顶部按钮的层级",
      "type": "string | number",
      "default": "9"
    },
    "icon-style": {
      "desc": "图标的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "custom-style": {
      "desc": "按钮外层的自定义样式",
      "type": "object",
      "default": "-"
    }
  },
  "slot": {
    "-": {
      "desc": "自定义返回按钮的所有内容"
    }
  }
};