import {Component, getOthersInfo} from './index'; 
export const indexList: Component = {
  "prefix": "u-index-list",
  "description": "indexList",
  "body": [
    "<u-index-list></u-index-list>"
  ],
  "url": "http://uviewui.com/components/indexList.html",
  "indexbar-props": {
    "scroll-top": {
      "desc": "当前滚动高度，自定义组件无法获得滚动条事件，所以依赖接入方传入",
      "type": "number | string",
      "default": "-"
    },
    "index-list": {
      "desc": "索引字符列表，数组",
      "type": "array[string | number]",
      "default": "a-z"
    },
    "z-index": {
      "desc": "锚点吸顶时的层级",
      "type": "number | string",
      "default": "965"
    },
    "sticky": {
      "desc": "是否开启锚点自动吸顶",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "offset-top": {
      "desc": "锚点自动吸顶时与顶部的距离，单位rpx，见上方\"自定义导航栏\"说明",
      "type": "number | string",
      "default": "0"
    },
    "active-color": {
      "desc": "锚点和右边索引字符高亮颜色",
      "type": "string",
      "default": "#2979ff"
    }
  },
  "indexanchor-props": {
    "use-slot": {
      "desc": "是否使用自定义内容的插槽",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "index": {
      "desc": "索引字符，如果定义了use-slot，此参数自动失效",
      "type": "string | number",
      "default": "-"
    },
    "custom-style": {
      "desc": "自定义样式，对象形式，如\"{color: 'red'}\"",
      "type": "object",
      "default": "-"
    }
  },
  "indexbar-events": {
    "select": {
      "desc": "选中右边索引字符时触发",
      "params": "index: 索引字符"
    }
  },
  "indexanchor-slots": {
    "default": {
      "desc": "锚点位置显示内容，默认为索引字符"
    }
  }
};