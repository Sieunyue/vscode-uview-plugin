import {Component, getOthersInfo} from './index'; 
export const icon: Component = {
  "prefix": "u-icon",
  "description": "icon",
  "body": [
    "<u-icon></u-icon>"
  ],
  "url": "http://uviewui.com/components/icon.html",
  "props": {
    "name": {
      "desc": "图标名称，见示例图标集，如名称带有/，会被认为是图片图标",
      "type": "string",
      "default": "-"
    },
    "color": {
      "desc": "图标颜色",
      "type": "string",
      "default": "inherit"
    },
    "size": {
      "desc": "图标字体大小，单位rpx",
      "type": "string | number",
      "default": "inherit"
    },
    "index": {
      "desc": "一个用于区分多个图标的值，点击图标时通过click事件传出",
      "type": "string",
      "default": "-"
    },
    "hover-class": {
      "desc": "图标按下去的样式类，用法同uni的view组件的hover-class参数，详见：hover-class ",
      "type": "string",
      "default": "-"
    },
    "label": {
      "desc": "图标右侧/下方的label文字",
      "type": "string",
      "default": "-"
    },
    "label-size": {
      "desc": "label字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "label-color": {
      "desc": "label字体颜色",
      "type": "string",
      "default": "#606266"
    },
    "custom-prefix": {
      "desc": "自定义字体图标库时，需要写上此值，详见：扩展自定义图标库 ",
      "type": "string",
      "default": "uicon"
    },
    "margin-left": {
      "desc": "label在右方时与图标的距离，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "margin-top": {
      "desc": "label在下方时与图标的距离，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "margin-bottom 1.4.1": {
      "desc": "label在上方时与图标的距离，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "margin-right 1.4.1": {
      "desc": "label在左侧时与图标的距离，单位rpx",
      "type": "string | number",
      "default": "6"
    },
    "label-pos": {
      "desc": "label相对于图标的位置(left和top为1.4.1新增)",
      "type": "string",
      "default": "right",
      "options": "bottom / top / left"
    },
    "custom-style 1.3.0": {
      "desc": "图标的样式，可以设置字体大小，颜色等，对象形式，size和color优先级高于此参数",
      "type": "object",
      "default": "-"
    },
    "width 1.5.6": {
      "desc": "name为图片路径时图片的宽度，单位任意，数值默认为rpx单位",
      "type": "string | number",
      "default": "-"
    },
    "height 1.5.6": {
      "desc": "name为图片路径时图片的高度，单位任意，数值默认为rpx单位",
      "type": "string | number",
      "default": "-"
    },
    "top 1.5.6": {
      "desc": "如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为rpx单位",
      "type": "string | number",
      "default": "0"
    }
  },
  "events": {
    "click": {
      "desc": "点击图标时触发",
      "params": "index: 通过props传递的index值"
    }
  }
};