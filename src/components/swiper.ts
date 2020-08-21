import {Component, getOthersInfo} from './index'; 
export const swiper: Component = {
  "prefix": "u-swiper",
  "description": "swiper",
  "body": [
    "<u-swiper></u-swiper>"
  ],
  "url": "http://uviewui.com/components/swiper.html",
  "props": {
    "list": {
      "desc": "轮播图数据，见上方\"基本使用\"说明",
      "type": "array",
      "default": "-"
    },
    "title": {
      "desc": "是否显示标题文字，需要配合list参数，见上方说明",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "mode": {
      "desc": "指示器模式，见上方说明",
      "type": "string",
      "default": "round",
      "options": "rect / dot / number / none"
    },
    "height": {
      "desc": "轮播图组件高度，单位rpx",
      "type": "string | number",
      "default": "250"
    },
    "indicator-pos": {
      "desc": "指示器的位置",
      "type": "string",
      "default": "bottomcenter",
      "options": "topleft / topcenter / topright / bottomleft / bottomright"
    },
    "effect3d": {
      "desc": "是否开启3d效果",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "autoplay": {
      "desc": "是否自动播放",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "interval": {
      "desc": "自动轮播时间间隔，单位ms",
      "type": "string | number",
      "default": "2500"
    },
    "circular": {
      "desc": "是否衔接播放，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "duration": {
      "desc": "切换一张轮播图所需的时间，单位ms",
      "type": "string | number",
      "default": "500"
    },
    "border-radius": {
      "desc": "轮播图圆角值，单位rpx",
      "type": "string | number",
      "default": "8"
    },
    "title-style": {
      "desc": "自定义标题样式",
      "type": "object",
      "default": "-"
    },
    "effect3d-previous-margin": {
      "desc": "effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx",
      "type": "string | number",
      "default": "50"
    },
    "img-mode": {
      "desc": "图片的裁剪模式，详见image组件裁剪模式 ",
      "type": "string",
      "default": "aspectfill"
    },
    "name": {
      "desc": "组件内部读取的list参数中的属性名，见上方说明",
      "type": "string",
      "default": "name"
    },
    "bg-color": {
      "desc": "背景颜色",
      "type": "string",
      "default": "#f3f4f6"
    },
    "current 1.6.2": {
      "desc": "初始化时，默认显示第几项",
      "type": "string | number",
      "default": "0"
    }
  },
  "events": {
    "click": {
      "desc": "点击轮播图时触发",
      "params": "index：点击了第几张图片，从0开始"
    },
    "change": {
      "desc": "轮播图切换时触发(自动或者手动切换)",
      "params": "index：切换到了第几张图片，从0开始"
    }
  }
};