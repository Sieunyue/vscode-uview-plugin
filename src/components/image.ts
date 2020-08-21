import {Component, getOthersInfo} from './index'; 
export const image: Component = {
  "prefix": "u-image",
  "description": "image",
  "body": [
    "<u-image></u-image>"
  ],
  "url": "http://uviewui.com/components/image.html",
  "props": {
    "src": {
      "desc": "图片地址，强烈建议使用绝对或者网络路径",
      "type": "string",
      "default": "-"
    },
    "mode": {
      "desc": "裁剪模式，见上方说明",
      "type": "string",
      "default": "aspectfill"
    },
    "width": {
      "desc": "宽度，单位任意，如果为数值，则为rpx单位",
      "type": "string | number",
      "default": "100%"
    },
    "height": {
      "desc": "高度，单位任意，如果为数值，则为rpx单位",
      "type": "string | number",
      "default": "auto"
    },
    "shape": {
      "desc": "图片形状，circle-圆形，square-方形",
      "type": "string",
      "default": "square",
      "options": "circle"
    },
    "border-radius": {
      "desc": "圆角值，单位任意，如果为数值，则为rpx单位",
      "type": "string | number",
      "default": "0"
    },
    "lazy-load": {
      "desc": "是否懒加载，仅微信小程序、app、百度小程序、字节跳动小程序有效",
      "type": "boolean",
      "default": "true"
    },
    "show-menu-by-longpress": {
      "desc": "是否开启长按图片显示识别小程序码菜单，仅微信小程序有效",
      "type": "boolean",
      "default": "false"
    },
    "loading-icon": {
      "desc": "加载中的图标，或者小图片",
      "type": "string",
      "default": "photo"
    },
    "error-icon": {
      "desc": "加载失败的图标，或者小图片",
      "type": "string",
      "default": "error-circle"
    },
    "show-loading": {
      "desc": "是否显示加载中的图标或者自定义的slot",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-error": {
      "desc": "是否显示加载错误的图标或者自定义的slot",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "fade": {
      "desc": "是否需要淡入效果",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "webp": {
      "desc": "只支持网络资源，只对微信小程序有效",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "duration": {
      "desc": "搭配fade参数的过渡时间，单位ms",
      "type": "string | number",
      "default": "500"
    }
  },
  "slot": {
    "loading": {
      "desc": "自定义加载中的提示内容"
    },
    "error": {
      "desc": "自定义失败的提示内容"
    }
  },
  "cellitem-events": {
    "click": {
      "desc": "点击图片时触发",
      "params": "-"
    },
    "error": {
      "desc": "图片加载失败时触发",
      "params": "-"
    },
    "load": {
      "desc": "图片加载成功时触发",
      "params": "-"
    }
  }
};