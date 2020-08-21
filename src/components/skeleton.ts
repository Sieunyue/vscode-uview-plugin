import {Component, getOthersInfo} from './index'; 
export const skeleton: Component = {
  "prefix": "u-skeleton",
  "description": "skeleton",
  "body": [
    "<u-skeleton></u-skeleton>"
  ],
  "url": "http://uviewui.com/components/skeleton.html",
  "props": {
    "el-color": {
      "desc": "骨架块状元素的背景颜色",
      "type": "string",
      "default": "#e5e5e5"
    },
    "bg-color": {
      "desc": "骨架组件背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "animation": {
      "desc": "骨架块是否显示动画效果",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "border-radius": {
      "desc": "u-skeleton-fillet类名元素，对应的骨架块的圆角大小，单位rpx",
      "type": "string | number",
      "default": "10"
    },
    "loading": {
      "desc": "是否显示骨架组件，请求完成后，将此值设置为false",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  }
};