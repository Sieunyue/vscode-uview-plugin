import {Component, getOthersInfo} from './index'; 
export const input: Component = {
  "prefix": "u-input",
  "description": "input",
  "body": [
    "<u-input></u-input>"
  ],
  "url": "http://uviewui.com/components/input.html",
  "props": {
    "type": {
      "desc": "模式选择，见上方说明",
      "type": "string",
      "default": "text",
      "options": "select / password / textarea / number"
    },
    "clearable": {
      "desc": "是否显示右侧的清除图标，type = select时无效",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "v-model": {
      "desc": "用于双向绑定输入框的值",
      "type": "-",
      "default": "-"
    },
    "input-align": {
      "desc": "输入框文字的对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    },
    "placeholder": {
      "desc": "placeholder显示值",
      "type": "string",
      "default": "请输入内容"
    },
    "disabled": {
      "desc": "是否禁用输入框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "maxlength": {
      "desc": "输入框的最大可输入长度",
      "type": "number | string",
      "default": "140"
    },
    "placeholder-style": {
      "desc": "placeholder的样式，字符串形式，如\"color: red;\"",
      "type": "string",
      "default": "\"color: #c0c4cc;\""
    },
    "confirm-type": {
      "desc": "设置键盘右下角按钮的文字，仅在type为text时生效",
      "type": "string",
      "default": "done"
    },
    "custom-style": {
      "desc": "自定义输入框的样式，对象形式",
      "type": "object",
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
    "password-icon": {
      "desc": "type为password时，是否显示右侧的密码查看图标",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "border": {
      "desc": "是否显示边框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "border-color": {
      "desc": "输入框的边框颜色",
      "type": "string",
      "default": "#dcdfe6"
    },
    "auto-height": {
      "desc": "是否自动增高输入区域，type为textarea时有效",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "height": {
      "desc": "高度，单位rpx",
      "type": "number | string",
      "default": "text类型时为70，textarea时为100"
    },
    "cursor-spacing 1.4.4": {
      "desc": "指定光标与键盘的距离，单位px",
      "type": "number | string",
      "default": "0"
    },
    "selection-start 1.5.6": {
      "desc": "光标起始位置，自动聚焦时有效，需与selection-end搭配使用",
      "type": "number | string",
      "default": "-1"
    },
    "selection-end\t 1.5.6": {
      "desc": "光标结束位置，自动聚焦时有效，需与selection-start搭配使用",
      "type": "number | string",
      "default": "-1"
    },
    "trim 1.5.8": {
      "desc": "是否自动去除两端的空格",
      "type": "boolean",
      "default": "true",
      "options": "false"
    }
  }
};