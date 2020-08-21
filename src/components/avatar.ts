import {Component, getOthersInfo} from './index'; 
export const avatar: Component = {
  "prefix": "u-avatar",
  "description": "avatar",
  "body": [
    "<u-avatar></u-avatar>"
  ],
  "url": "http://uviewui.com/components/avatar.html",
  "props": {
    "bg-color": {
      "desc": "背景颜色，一般显示文字时用",
      "type": "string",
      "default": "#ffffff"
    },
    "src": {
      "desc": "头像路径，如加载失败，将会显示默认头像",
      "type": "string",
      "default": "-"
    },
    "size": {
      "desc": "头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx",
      "type": "string | number",
      "default": "default"
    },
    "mode": {
      "desc": "显示类型，见上方说明",
      "type": "string",
      "default": "circle",
      "options": "square"
    },
    "text": {
      "desc": "用文字替代图片，级别优先于src",
      "type": "string",
      "default": "-"
    },
    "img-mode": {
      "desc": "头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthfix值",
      "type": "string",
      "default": "aspectfill"
    },
    "show-sex 1.5.6": {
      "desc": "是否显示右上角的性别图标",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "sex-icon 1.5.6": {
      "desc": "右上角性别图标，可传入图片路径，或内置图标名",
      "type": "string",
      "default": "man",
      "options": "woman"
    },
    "sex-bg-color 1.5.6": {
      "desc": "性别图标的背景颜色",
      "type": "string",
      "default": "man-primary主题，woman-error主题"
    },
    "show-level 1.5.6": {
      "desc": "是否显示右上角的等级图标",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "level-icon 1.5.6": {
      "desc": "右下角性别图标，可传入图片路径，或内置图标名",
      "type": "string",
      "default": "level"
    },
    "level-bg-color 1.5.6": {
      "desc": "等级图标的背景颜色",
      "type": "string",
      "default": "warning主题"
    }
  },
  "event": {
    "click": {
      "desc": "头像被点击",
      "params": "index: 用户传递的标识符"
    }
  }
};