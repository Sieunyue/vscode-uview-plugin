import {Component, getOthersInfo} from './index'; 
export const card: Component = {
  "prefix": "u-card",
  "description": "card",
  "body": [
    "<u-card></u-card>"
  ],
  "url": "http://uviewui.com/components/card.html",
  "props": {
    "full": {
      "desc": "卡片与屏幕两侧是否留空隙",
      "type": "boolean",
      "default": "fasle",
      "options": "true"
    },
    "title": {
      "desc": "头部左边的标题",
      "type": "string",
      "default": "-"
    },
    "title-color": {
      "desc": "标题颜色",
      "type": "string",
      "default": "#303133"
    },
    "title-size": {
      "desc": "标题字体大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "sub-title": {
      "desc": "头部右边的副标题",
      "type": "string",
      "default": "-"
    },
    "sub-title-color": {
      "desc": "副标题颜色",
      "type": "string",
      "default": "#909399"
    },
    "sub-title-size": {
      "desc": "副标题字体大小",
      "type": "string | number",
      "default": "26"
    },
    "border": {
      "desc": "是否显示边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "index": {
      "desc": "用于标识点击了第几个卡片",
      "type": "string | number",
      "default": "-"
    },
    "margin": {
      "desc": "卡片与屏幕两边和上下元素的间距，需带单位，如\"30rpx 20rpx\"，见上方说明",
      "type": "string",
      "default": "30rpx"
    },
    "border-radius": {
      "desc": "卡片整体的圆角值，单位rpx",
      "type": "string | number",
      "default": "16"
    },
    "head-style": {
      "desc": "头部自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "body-style": {
      "desc": "主体自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "foot-style": {
      "desc": "底部自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "head-border-bottom": {
      "desc": "是否显示头部的下边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "foot-border-top": {
      "desc": "是否显示底部的上边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "thumb": {
      "desc": "缩略图路径，如设置将显示在标题的左边，不建议使用相对路径",
      "type": "string",
      "default": "-"
    },
    "thumb-width": {
      "desc": "缩略图的宽度，高等于宽，单位rpx",
      "type": "string | number",
      "default": "60"
    },
    "thumb-circle": {
      "desc": "缩略图是否为圆形",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "padding": {
      "desc": "给head，body，foot部的内边距，见上方说明，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "show-head 1.3.5": {
      "desc": "是否显示头部",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-foot 1.3.5": {
      "desc": "是否显示尾部",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "box-shadow 1.6.2": {
      "desc": "卡片外围阴影，字符串形式",
      "type": "string",
      "default": "none"
    }
  },
  "slot": {
    "head": {
      "desc": "自定义卡片头部内容"
    },
    "body": {
      "desc": "自定义卡片主体部分内容"
    },
    "foot": {
      "desc": "自定义卡片底部部分内容"
    }
  },
  "event": {
    "click": {
      "desc": "整个卡片任意位置被点击时触发",
      "params": "index: 用户传递的标识符"
    },
    "head-click": {
      "desc": "卡片头部被点击时触发",
      "params": "index: 用户传递的标识符"
    },
    "body-click": {
      "desc": "卡片主体部分被点击时触发",
      "params": "index: 用户传递的标识符"
    },
    "foot-click": {
      "desc": "卡片底部部分被点击时触发",
      "params": "index: 用户传递的标识符"
    }
  }
};