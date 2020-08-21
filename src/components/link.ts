import {Component, getOthersInfo} from './index'; 
export const link: Component = {
  "prefix": "u-link",
  "description": "link",
  "body": [
    "<u-link></u-link>"
  ],
  "url": "http://uviewui.com/components/link.html",
  "props": {
    "color": {
      "desc": "文字颜色",
      "type": "string",
      "default": "#606266"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "under-line": {
      "desc": "是否显示下划线",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "href": {
      "desc": "跳转的链接，要带上http(s)",
      "type": "string",
      "default": "-"
    },
    "line-color": {
      "desc": "下划线颜色，默认同color参数颜色",
      "type": "string",
      "default": "-"
    },
    "mp-tips": {
      "desc": "各个小程序平台把链接复制到粘贴板后的提示语",
      "type": "string",
      "default": "链接已复制，请在浏览器打开"
    }
  }
};