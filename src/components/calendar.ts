import {Component, getOthersInfo} from './index'; 
export const calendar: Component = {
  "prefix": "u-calendar",
  "description": "calendar",
  "body": [
    "<u-calendar></u-calendar>"
  ],
  "url": "http://uviewui.com/components/calendar.html",
  "props": {
    "mode": {
      "desc": "选择日期的模式，date-为单个日期，range-为选择日期范围",
      "type": "string",
      "default": "date",
      "options": "range"
    },
    "v-model": {
      "desc": "布尔值变量，用于控制日历的弹出与收起",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "safe-area-inset-bottom": {
      "desc": "是否开启底部安全区适配",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "change-year": {
      "desc": "是否显示顶部的切换年份方向的按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "change-month": {
      "desc": "是否显示顶部的切换月份方向的按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "max-year": {
      "desc": "可切换的最大年份",
      "type": "number | string",
      "default": "2050"
    },
    "min-year": {
      "desc": "可切换的最小年份",
      "type": "number | string",
      "default": "1950"
    },
    "min-date": {
      "desc": "最小可选日期",
      "type": "number | string",
      "default": "1950-01-01"
    },
    "max-date": {
      "desc": "最大可选日期",
      "type": "number | string",
      "default": "当前日期"
    },
    "border-radius": {
      "desc": "弹窗顶部左右两边的圆角值，单位rpx",
      "type": "number | string",
      "default": "20"
    },
    "mask-close-able": {
      "desc": "是否允许通过点击遮罩关闭日历",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "month-arrow-color": {
      "desc": "月份切换按钮箭头颜色",
      "type": "string",
      "default": "#606266"
    },
    "year-arrow-color": {
      "desc": "年份切换按钮箭头颜色",
      "type": "string",
      "default": "#909399"
    },
    "color": {
      "desc": "日期字体的默认颜色",
      "type": "string",
      "default": "#303133"
    },
    "active-bg-color": {
      "desc": "起始/结束日期按钮的背景色",
      "type": "string",
      "default": "#2979ff"
    },
    "z-index": {
      "desc": "弹出时的z-index值",
      "type": "string | number",
      "default": "10075"
    },
    "active-color": {
      "desc": "起始/结束日期按钮的字体颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "range-bg-color": {
      "desc": "起始/结束日期之间的区域的背景颜色",
      "type": "string",
      "default": "rgba(41,121,255,0.13)"
    },
    "range-color": {
      "desc": "选择范围内字体颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "start-text": {
      "desc": "起始日期底部的提示文字",
      "type": "string",
      "default": "开始"
    },
    "end-text": {
      "desc": "结束日期底部的提示文字",
      "type": "string",
      "default": "结束"
    },
    "btn-type": {
      "desc": "底部确定按钮的主题",
      "type": "string",
      "default": "primary",
      "options": "default / success / info/ warning / error"
    },
    "tooltip": {
      "desc": "顶部提示文字，如设置名为tooltip的slot，此参数将失效",
      "type": "string",
      "default": "选择日期"
    },
    "closeable": {
      "desc": "是否显示右上角的关闭图标",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "slot": {
    "tooltip": {
      "desc": "自定义日历顶部的内容"
    }
  },
  "event": {
    "change": {
      "desc": "点击右上角确定按钮时触发",
      "params": "选择日期相关的返回参数"
    }
  }
};