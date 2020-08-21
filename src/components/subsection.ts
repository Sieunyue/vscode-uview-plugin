import {Component, getOthersInfo} from './index'; 
export const subsection: Component = {
  "prefix": "u-subsection",
  "description": "subsection",
  "body": [
    "<u-subsection></u-subsection>"
  ],
  "url": "http://uviewui.com/components/subsection.html",
  "props": {
    "list": {
      "desc": "选项的数组，形式见上方\"基本使用\"",
      "type": "array",
      "default": "-"
    },
    "current": {
      "desc": "初始化时默认选中的选项索引值",
      "type": "string | number",
      "default": "0"
    },
    "active-color": {
      "desc": "激活时的颜色",
      "type": "string",
      "default": "#303133"
    },
    "inactive-color": {
      "desc": "未激活时的颜色",
      "type": "string",
      "default": "#606266"
    },
    "mode": {
      "desc": "模式选择，见上方\"模式选择\"说明",
      "type": "string",
      "default": "button",
      "options": "subsection"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "height": {
      "desc": "组件高度，单位rpx",
      "type": "string | number",
      "default": "70"
    },
    "animation": {
      "desc": "是否开启动画效果，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "bold": {
      "desc": "激活选项的字体是否加粗",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "bg-color": {
      "desc": "组件背景颜色，mode为button时有效",
      "type": "string",
      "default": "#eeeeef"
    },
    "button-color": {
      "desc": "按钮背景颜色，mode为button时有效",
      "type": "string",
      "default": "#ffffff"
    }
  },
  "events": {
    "change": {
      "desc": "分段器选项发生改变时触发",
      "params": "index：选项的index索引值，从0开始"
    }
  }
};