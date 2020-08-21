import {Component, getOthersInfo} from './index'; 
export const loadMore: Component = {
  "prefix": "u-load-more",
  "description": "loadMore",
  "body": [
    "<u-load-more></u-load-more>"
  ],
  "url": "http://uviewui.com/components/loadMore.html",
  "props": {
    "status": {
      "desc": "组件状态",
      "type": "string",
      "default": "loadmore",
      "options": "loading / nomore"
    },
    "bg-color": {
      "desc": "组件背景颜色，在页面是非白色时会用到",
      "type": "string",
      "default": "#ffffff"
    },
    "icon": {
      "desc": "加载中时是否显示图标",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "icon-type": {
      "desc": "加载中时的图标类型，",
      "type": "string",
      "default": "circle",
      "options": "flower"
    },
    "icon-color": {
      "desc": "icon-type为circle时有效，加载中的动画图标的颜色",
      "type": "string",
      "default": "#b7b7b7"
    },
    "is-dot": {
      "desc": "status为nomore时，内容显示为一个\"●\"",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "color": {
      "desc": "字体颜色",
      "type": "string",
      "default": "#606266"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "load-text": {
      "desc": "自定义显示的文字，见上方说明示例",
      "type": "object",
      "default": "-"
    },
    "margin-top": {
      "desc": "与前一个元素的距离，单位rpx",
      "type": "string | number",
      "default": "0"
    },
    "margin-bottom": {
      "desc": "与后一个元素的距离，单位rpx",
      "type": "string | number",
      "default": "0"
    }
  },
  "event": {
    "loadmore": {
      "desc": "status为loadmore时，点击组件会发出此事件",
      "params": "-"
    }
  }
};