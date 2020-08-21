import {Component, getOthersInfo} from './index'; 
export const field: Component = {
  "prefix": "u-field",
  "description": "field",
  "body": [
    "<u-field></u-field>"
  ],
  "url": "http://uviewui.com/components/field.html",
  "props": {
    "type": {
      "desc": "输入框的类型",
      "type": "string",
      "default": "text",
      "options": "textarea"
    },
    "icon": {
      "desc": "label左边的图标，限uview的图标名称",
      "type": "string",
      "default": "-"
    },
    "border-bottom 1.3.9": {
      "desc": "是否显示field的下边框",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "border-top 1.3.9": {
      "desc": "是否显示field的上边框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "icon-style 1.3.9": {
      "desc": "icon的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "right-icon": {
      "desc": "输入框右边的图标名称，限uview的图标名称",
      "type": "string",
      "default": "-"
    },
    "required": {
      "desc": "是否必填，左边显示红色\"*\"号",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "label": {
      "desc": "输入框左边的文字提示",
      "type": "string",
      "default": "-"
    },
    "password": {
      "desc": "是否密码输入方式(用点替换文字)，type为text时有效",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "clearable": {
      "desc": "是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "label-width": {
      "desc": "label的宽度，单位rpx",
      "type": "number | string",
      "default": "130"
    },
    "label-align": {
      "desc": "label的文字对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    },
    "input-align": {
      "desc": "输入框内容对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    },
    "icon-color": {
      "desc": "左边通过icon配置的图标的颜色",
      "type": "string",
      "default": "#606266"
    },
    "clear-size": {
      "desc": "清除图标的大小，单位rpx",
      "type": "number | string",
      "default": "30"
    },
    "field-style": {
      "desc": "输入框的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "auto-height": {
      "desc": "是否自动增高输入区域，type为textarea时有效",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "error-message": {
      "desc": "显示的错误提示内容，如果为空字符串或者false，则不显示错误信息",
      "type": "string \\ boolean",
      "default": "-"
    },
    "placeholder": {
      "desc": "输入框的提示文字",
      "type": "string",
      "default": "-"
    },
    "placeholder-style": {
      "desc": "placeholder的样式(内联样式，字符串)，如\"color: #ddd\"",
      "type": "string",
      "default": "-"
    },
    "focus": {
      "desc": "是否自动获得焦点",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "fixed": {
      "desc": "如果type为textarea，且在一个\"position:fixed\"的区域，需要指明为true",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "disabled": {
      "desc": "是否不可输入",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "maxlength": {
      "desc": "最大输入长度，设置为 -1 的时候不限制最大长度",
      "type": "number | string",
      "default": "140"
    },
    "confirm-type": {
      "desc": "设置键盘右下角按钮的文字，仅在type=\"text\"时生效",
      "type": "string",
      "default": "done"
    },
    "trim 1.5.8": {
      "desc": "是否自动去除两端的空格",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  },
  "cellitem-slot": {
    "icon": {
      "desc": "自定义左侧的图标"
    },
    "right": {
      "desc": "自定义右侧内容"
    }
  },
  "cellitem-events": {
    "input": {
      "desc": "输入框内容发生变化时触发",
      "params": "value：输入框的内容，建议通过v-model双向绑定输入值，而不是监听此事件的形式"
    },
    "focus": {
      "desc": "输入框获得焦点时触发",
      "params": "-"
    },
    "blur": {
      "desc": "输入框失去焦点时触发",
      "params": "-"
    },
    "confirm": {
      "desc": "点击完成按钮时触发",
      "params": "value：输入框的内容，建议通过v-model双向绑定输入值，而不是监听此事件的形式"
    },
    "right-icon-click": {
      "desc": "通过right-icon生成的图标被点击时触发",
      "params": ""
    },
    "click": {
      "desc": "输入框被点击或者通过right-icon生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出\"picker\"等操作时的场景，点击倒三角图标，理应发出此事件，见上方说明",
      "params": "-"
    }
  }
};