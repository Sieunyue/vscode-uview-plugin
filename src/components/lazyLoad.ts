import {Component, getOthersInfo} from './index'; 
export const lazyLoad: Component = {
  "prefix": "u-lazy-load",
  "description": "lazyLoad",
  "body": [
    "<u-lazy-load></u-lazy-load>"
  ],
  "url": "http://uviewui.com/components/lazyLoad.html",
  "props": {
    "index": {
      "desc": "用户自定义值，在事件触发时回调，用以区分是哪个图片",
      "type": "string | number",
      "default": "-"
    },
    "image": {
      "desc": "图片路径",
      "type": "string",
      "default": "-"
    },
    "loading-img": {
      "desc": "预加载时的占位图",
      "type": "string",
      "default": "-"
    },
    "error-img": {
      "desc": "图片加载出错时的占位图",
      "type": "string",
      "default": "-"
    },
    "threshold": {
      "desc": "触发加载时的位置，见上方说明，单位 rpx",
      "type": "string",
      "default": "100"
    },
    "duration": {
      "desc": "图片加载成功时，淡入淡出时间，单位ms",
      "type": "string | number",
      "default": "500"
    },
    "effect": {
      "desc": "图片加载成功时，淡入淡出的css动画效果",
      "type": "string",
      "default": "ease-in-out",
      "options": "linear /  ease / ease-in / ease-out"
    },
    "is-effect": {
      "desc": "图片加载成功时，是否启用淡入淡出效果",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "border-radius": {
      "desc": "图片圆角值，单位rpx",
      "type": "string | number",
      "default": "0"
    },
    "height": {
      "desc": "图片高度，注意：实际高度可能受img-mode参数影响",
      "type": "string | number",
      "default": "450"
    },
    "img-mode": {
      "desc": "图片的裁剪模式，详见image组件裁剪模式 ",
      "type": "string | number",
      "default": "widthfix"
    }
  },
  "events": {
    "click": {
      "desc": "点击图片时触发",
      "params": "index：用户通过props传递的index值"
    },
    "load": {
      "desc": "图片加载成功时触发",
      "params": "index：用户通过props传递的index值"
    },
    "error": {
      "desc": "图片加载失败时触发",
      "params": "index：用户通过props传递的index值"
    }
  }
};