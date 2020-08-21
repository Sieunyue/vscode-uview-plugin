import {Component, getOthersInfo} from './index'; 
export const loading: Component = {
  "prefix": "u-loading",
  "description": "loading",
  "body": [
    "<u-loading></u-loading>"
  ],
  "url": "http://uviewui.com/components/loading.html",
  "props": {
    "mode": {
      "desc": "模式选择，见上方说明",
      "type": "string",
      "default": "circle",
      "options": "flower"
    },
    "color": {
      "desc": "动画活动区域的颜色，只对 mode = circle 模式有效",
      "type": "string",
      "default": "#c7c7c7"
    },
    "size": {
      "desc": "加载图标的大小，单位rpx",
      "type": "string | number",
      "default": "34"
    },
    "show": {
      "desc": "是否显示动画",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  }
};