import {Component, getOthersInfo} from './index'; 
export const countTo: Component = {
  "prefix": "u-count-to",
  "description": "countTo",
  "body": [
    "<u-count-to></u-count-to>"
  ],
  "url": "http://uviewui.com/components/countTo.html",
  "props": {
    "start-val": {
      "desc": "开始值",
      "type": "string | number",
      "default": "0"
    },
    "end-val": {
      "desc": "结束值",
      "type": "string | number",
      "default": "0"
    },
    "duration": {
      "desc": "滚动过程所需的时间，单位ms",
      "type": "string | number",
      "default": "2000"
    },
    "autoplay": {
      "desc": "是否自动开始滚动",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "decimals": {
      "desc": "要显示的小数位数，见上方说明",
      "type": "string | number",
      "default": "0"
    },
    "use-easing": {
      "desc": "滚动结束时，是否缓动结尾，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "separator": {
      "desc": "千位分隔符，见上方说明",
      "type": "string",
      "default": "-"
    },
    "color": {
      "desc": "字体颜色",
      "type": "string",
      "default": "#303133"
    },
    "font-size": {
      "desc": "字体大小，单位rpx",
      "type": "string | number",
      "default": "50"
    },
    "bold": {
      "desc": "字体是否加粗",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "methods": {
    "start": {
      "desc": "autoplay为false时，通过此方法启动滚动",
      "type": ""
    },
    "restart": {
      "desc": "暂停后重新开始滚动(从暂停前的值开始滚动)",
      "type": ""
    },
    "paused": {
      "desc": "暂停滚动",
      "type": ""
    }
  },
  "event": {
    "end": {
      "desc": "数值滚动到目标值时触发",
      "params": "-"
    }
  }
};