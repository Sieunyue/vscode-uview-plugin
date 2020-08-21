import {Component, getOthersInfo} from './index'; 
export const navbar: Component = {
  "prefix": "u-navbar",
  "description": "navbar",
  "body": [
    "<u-navbar></u-navbar>"
  ],
  "url": "http://uviewui.com/components/navbar.html",
  "props": {
    "height": {
      "desc": "导航栏高度(不包括状态栏高度在内，内部自动加上)，注意这里的单位是px",
      "type": "string | number",
      "default": "44"
    },
    "back-icon-color": {
      "desc": "左边返回图标的颜色",
      "type": "string",
      "default": "#606266"
    },
    "back-icon-name": {
      "desc": "左边返回图标的名称，只能为uview自带的图标，1.5.5起由arrow-left调整为nav-back",
      "type": "string",
      "default": "nav-back"
    },
    "back-icon-size": {
      "desc": "左边返回图标的大小，单位rpx",
      "type": "string | number",
      "default": "30"
    },
    "back-text": {
      "desc": "返回图标右边的辅助提示文字",
      "type": "string",
      "default": "-"
    },
    "back-text-style": {
      "desc": "返回图标右边的辅助提示文字的样式，对象形式",
      "type": "object",
      "default": "{ color: '#606266' }"
    },
    "title": {
      "desc": "导航栏标题，如设置为空字符，将会隐藏标题占位区域",
      "type": "string",
      "default": "-"
    },
    "title-width": {
      "desc": "导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx",
      "type": "string | number",
      "default": "250"
    },
    "title-color": {
      "desc": "标题的颜色",
      "type": "string",
      "default": "#606266"
    },
    "title-size": {
      "desc": "导航栏标题字体大小，单位rpx，1.5.5起由32调整为44",
      "type": "string | number",
      "default": "44"
    },
    "z-index": {
      "desc": "固定在顶部时的z-index值",
      "type": "string | number",
      "default": "980"
    },
    "is-back": {
      "desc": "是否显示导航栏左边返回图标和辅助文字",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "background": {
      "desc": "导航栏背景设置(app和小程序上包括状态栏的颜色)，见上方说明",
      "type": "object",
      "default": "{ background: '#ffffff' }"
    },
    "is-fixed": {
      "desc": "导航栏是否固定在顶部",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "border-bottom": {
      "desc": "导航栏底部是否显示下边框，如定义了较深的背景颜色，可取消此值",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "custom-back 1.3.4": {
      "desc": "自定义返回逻辑方法，如传入，点击返回按钮执行函数，否则正常返回上一页，注意不需要写方法参数的括号",
      "type": "function",
      "default": "-"
    },
    "immersive 1.5.6": {
      "desc": "沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "slot": {
    "-": {
      "desc": "自定义中间部分的内容"
    },
    "right": {
      "desc": "自定义右侧部分内容"
    }
  }
};