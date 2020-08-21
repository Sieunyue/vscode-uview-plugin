import {Component, getOthersInfo} from './index'; 
export const table: Component = {
  "prefix": "u-table",
  "description": "table",
  "body": [
    "<u-table></u-table>"
  ],
  "url": "http://uviewui.com/components/table.html",
  "table-props": {
    "border-color": {
      "desc": "表格边框的颜色",
      "type": "string",
      "default": "#e4e7ed"
    },
    "bg-color": {
      "desc": "表格的背景颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "align": {
      "desc": "单元格的内容对齐方式，作用类似css的text-align",
      "type": "string",
      "default": "center",
      "options": "left / right"
    },
    "padding": {
      "desc": "单元格的内边距，同css的padding写法",
      "type": "string",
      "default": "10rpx 0"
    },
    "font-size": {
      "desc": "单元格字体大小，单位rpx",
      "type": "string | number",
      "default": "28"
    },
    "color": {
      "desc": "单元格字体颜色",
      "type": "string",
      "default": "#606266"
    },
    "th-style": {
      "desc": "th单元格的样式，对象形式(将th所需参数放在table组件，是为了避免每一个th组件要写一遍)",
      "type": "object",
      "default": "{}"
    }
  },
  "td-props": {
    "width": {
      "desc": "单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度",
      "type": "string | number",
      "default": "auto"
    }
  },
  "th-props": {
    "width": {
      "desc": "标题单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度",
      "type": "string | number",
      "default": "-"
    }
  }
};