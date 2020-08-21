import {Component, getOthersInfo} from './index'; 
export const slider: Component = {
  "prefix": "u-slider",
  "description": "slider",
  "body": [
    "<u-slider></u-slider>"
  ],
  "url": "http://uviewui.com/components/slider.html",
  "props": {
    "v-model": {
      "desc": "双向绑定滑块选择值",
      "type": "string | number",
      "default": "0"
    },
    "min": {
      "desc": "可选的最小值(0-100之间)",
      "type": "string | number",
      "default": "0"
    },
    "max": {
      "desc": "可选的最大值(0-100之间)",
      "type": "string | number",
      "default": "100"
    },
    "step": {
      "desc": "选择的步长",
      "type": "string | number",
      "default": "1"
    },
    "block-width": {
      "desc": "滑动按钮的宽度(高等于宽)，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "height": {
      "desc": "滑动选择条的高度，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "inactive-color": {
      "desc": "滑动选择条的底部背景颜色",
      "type": "string",
      "default": "#c0c4cc"
    },
    "active-color": {
      "desc": "底部选择部分的背景颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "block-color": {
      "desc": "滑块背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "block-style": {
      "desc": "给滑块按钮自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "disabled": {
      "desc": "是否禁用滑块",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "use-slot": {
      "desc": "是否使用slot传入自定义滑块",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "slot": {
    "-": {
      "desc": "自定义滑块内容"
    }
  },
  "events": {
    "start": {
      "desc": "触发滑块移动",
      "params": "-"
    },
    "moving": {
      "desc": "正在滑动中",
      "params": "-"
    },
    "end": {
      "desc": "滑动结束",
      "params": "-"
    }
  }
};