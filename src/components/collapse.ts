import {Component, getOthersInfo} from './index'; 
export const collapse: Component = {
  "prefix": "u-collapse",
  "description": "collapse",
  "body": [
    "<u-collapse></u-collapse>"
  ],
  "url": "http://uviewui.com/components/collapse.html",
  "collapse-props": {
    "accordion": {
      "desc": "是否手风琴模式",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "arrow": {
      "desc": "是否显示标题右侧的箭头",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "arrow-color": {
      "desc": "标题右侧箭头的颜色",
      "type": "string",
      "default": "#909399"
    },
    "item-style1.3.0": {
      "desc": "整个item的自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "head-style": {
      "desc": "item的标题自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "body-style": {
      "desc": "item的主体自定义样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "hover-class": {
      "desc": "样式类名，按下时有效，样式必须写在根目录的app.vue或通过其引入的全局样式中才有效，none为无效果，作用于头部标题区域",
      "type": "string",
      "default": "u-hover-class",
      "options": "none / 其他"
    }
  },
  "collapse-item-props": {
    "title": {
      "desc": "面板标题",
      "type": "string",
      "default": "-"
    },
    "index": {
      "desc": "主要用于事件的回调，标识那个item被点击",
      "type": "string / number",
      "default": "-"
    },
    "disabled": {
      "desc": "面板是否可以打开或收起",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "open": {
      "desc": "设置某个面板的初始状态是否打开",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "name": {
      "desc": "唯一标识符，如不设置，默认用当前collapse-item的索引值",
      "type": "string / number",
      "default": "-"
    },
    "align": {
      "desc": "标题的对齐方式",
      "type": "string",
      "default": "left"
    },
    "active-style": {
      "desc": "不显示箭头时，可以添加当前选择的collapse-item活动样式，对象形式",
      "type": "object",
      "default": "-"
    }
  },
  "collapse-event": {
    "change": {
      "desc": "当前激活面板展开时触发(如果是手风琴模式，参数activenames类型为string，否则为array)",
      "params": "activenames: string / array"
    }
  },
  "collapse-item-event": {
    "change": {
      "desc": "某个item被打开或者收起时触发",
      "params": "对象，{index: index, show: true | false }，index为collapse-item的index参数，show为true表示被打开，false表示被收起"
    }
  },
  "collapse-methods": {
    "init  1.3.8": {
      "desc": "重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nexttick()使用",
      "type": ""
    }
  },
  "slot": {
    "-": {
      "desc": "主体部分的内容"
    },
    "title 1.3.5": {
      "desc": "头部的内容，不含右边的箭头"
    },
    "title-all 1.3.5": {
      "desc": "整个头部的内容，包含右边的箭头"
    }
  }
};