import {Component, getOthersInfo} from './index'; 
export const tabbar: Component = {
  "prefix": "u-tabbar",
  "description": "tabbar",
  "body": [
    "<u-tabbar></u-tabbar>"
  ],
  "url": "http://uviewui.com/components/tabbar.html",
  "table-props": {
    "list": {
      "desc": "各项的配置参数，见顶部说明，数组形式",
      "type": "array",
      "default": "-"
    },
    "show": {
      "desc": "是否显示组件",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "v-model": {
      "desc": "双向绑定的激活项的索引值",
      "type": "string | number",
      "default": "0"
    },
    "bg-color": {
      "desc": "组件的背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "height": {
      "desc": "高度，单位任意，数值则为rpx单位，不建议修改",
      "type": "string | number",
      "default": "50px"
    },
    "icon-size": {
      "desc": "非中部凸起图标的大小，单位任意，数值则为rpx单位",
      "type": "string | number",
      "default": "40"
    },
    "mid-button-size": {
      "desc": "凸起的图标的大小，单位任意，数值则为rpx单位",
      "type": "string | number",
      "default": "90"
    },
    "active-color": {
      "desc": "文字和字体图标激活时的颜色",
      "type": "string",
      "default": "#303133"
    },
    "inactive-color": {
      "desc": "文字和字体图标未激活时的颜色",
      "type": "string",
      "default": "#606266"
    },
    "mid-button": {
      "desc": "是否需要中部凸起的按钮，配置了此值，依然需要配置list参数中需凸起项的midbutton为true，见上方说明",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "before-switch": {
      "desc": "切换之前的回调钩子，见上方说明",
      "type": "function",
      "default": "-"
    },
    "border-top": {
      "desc": "是否显示顶部的边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "hide-tab-bar 1.5.6": {
      "desc": "是否隐藏原生tabbar",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "events": {
    "change": {
      "desc": "切换选项时触发",
      "params": "index：当前要切换项的索引"
    }
  }
};