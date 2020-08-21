import {Component, getOthersInfo} from './index'; 
export const popup: Component = {
  "prefix": "u-popup",
  "description": "popup",
  "body": [
    "<u-popup></u-popup>"
  ],
  "url": "http://uviewui.com/components/popup.html",
  "props": {
    "mode": {
      "desc": "弹出方向",
      "type": "string",
      "default": "left",
      "options": "top / right / bottom / center"
    },
    "mask": {
      "desc": "是否显示遮罩",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "length": {
      "desc": "mode=left | 见上方说明",
      "type": "string | number",
      "default": "auto"
    },
    "zoom": {
      "desc": "是否开启缩放动画，只在mode为center时有效",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "safe-area-inset-bottom": {
      "desc": "是否开启底部安全区适配",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "mask-close-able": {
      "desc": "点击遮罩是否可以关闭弹出层",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "custom-style": {
      "desc": "用户自定义样式",
      "type": "object",
      "default": "-"
    },
    "border-radius": {
      "desc": "弹窗圆角值",
      "type": "number | string",
      "default": "0"
    },
    "z-index": {
      "desc": "弹出内容的z-index值",
      "type": "number | string",
      "default": "10075"
    },
    "closeable": {
      "desc": "是否显示关闭图标",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "close-icon": {
      "desc": "关闭图标的名称，只能uview的内置图标",
      "type": "string",
      "default": "close"
    },
    "close-icon-pos": {
      "desc": "自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角",
      "type": "string",
      "default": "top-right",
      "options": "top-left / bottom-left / bottom-right"
    },
    "close-icon-color": {
      "desc": "关闭图标的颜色",
      "type": "string",
      "default": "#909399"
    },
    "close-icon-size": {
      "desc": "关闭图标的大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "width  1.3.7": {
      "desc": "mode = left | center | right时有效，优先级高于length",
      "type": "string | number",
      "default": "-"
    },
    "height  1.3.7": {
      "desc": "mode = top | center | bottom时有效，优先级高于length",
      "type": "string | number",
      "default": "-"
    },
    "negative-top": {
      "desc": "中部弹出时，以避免可能弹出的键盘重合，往上偏移的值，单位任意，数值则默认为rpx单位",
      "type": "string | number",
      "default": "0"
    },
    "mask-custom-style 1.5.4": {
      "desc": "遮罩自定义样式，一般用于修改遮罩透明度对象形式，如：{background: 'rgba(0, 0, 0, 0.5)'}",
      "type": "object",
      "default": "-"
    }
  },
  "event": {
    "open": {
      "desc": "弹出层打开",
      "params": "-"
    },
    "close": {
      "desc": "弹出层收起",
      "params": "-"
    }
  }
};