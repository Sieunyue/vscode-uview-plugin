import {Component, getOthersInfo} from './index'; 
export const form: Component = {
  "prefix": "u-form",
  "description": "form",
  "body": [
    "<u-form></u-form>"
  ],
  "url": "http://uviewui.com/components/form.html",
  "form-props": {
    "model": {
      "desc": "表单数据对象",
      "type": "object",
      "default": "-"
    },
    "rules": {
      "desc": "通过ref设置，见上方说明",
      "type": "object",
      "default": "-"
    },
    "error-type": {
      "desc": "错误的提示方式，数组形式，见上方说明",
      "type": "array",
      "default": "['message']"
    },
    "border-bottom 1.4.6": {
      "desc": "是否显示表单域的下划线边框",
      "type": "boolean",
      "default": "true"
    },
    "label-position 1.4.6": {
      "desc": "表单域提示文字的位置，left-左侧，top-上方",
      "type": "string",
      "default": "left",
      "options": "top"
    },
    "label-width 1.4.6": {
      "desc": "提示文字的宽度，单位rpx",
      "type": "string | number",
      "default": "90",
      "options": "数值 / auto"
    },
    "label-style 1.4.6": {
      "desc": "lable的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "label-align 1.4.6": {
      "desc": "lable的对齐方式",
      "type": "string",
      "default": "left",
      "options": "center / right"
    }
  },
  "form-methods": {
    "setrules": {
      "desc": "调用此方法，设置校验规则",
      "type": "function(rules)"
    },
    "resetfields": {
      "desc": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
      "type": "-"
    },
    "validate": {
      "desc": "对整个表单进行校验的方法",
      "type": "function(callback: function(boolean))"
    }
  },
  "form-item-props": {
    "label": {
      "desc": "左侧提示文字",
      "type": "string",
      "default": "-"
    },
    "prop": {
      "desc": "表单域model对象的属性名，在使用 validate、resetfields 方法的情况下，该属性是必填的",
      "type": "string",
      "default": "-"
    },
    "border-bottom": {
      "desc": "是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false",
      "type": "boolean",
      "default": "true",
      "options": "true / false"
    },
    "label-position": {
      "desc": "表单域提示文字的位置，left-左侧，top-上方，如设置，将覆盖u-form的同名参数",
      "type": "string",
      "default": "-",
      "options": "left / top"
    },
    "label-width": {
      "desc": "提示文字的宽度，单位rpx，如设置，将覆盖u-form的同名参数",
      "type": "string | number",
      "default": "-"
    },
    "label-style": {
      "desc": "lable的样式，对象形式，如设置，将覆盖u-form的同名参数",
      "type": "object",
      "default": "-"
    },
    "label-align": {
      "desc": "lable的对齐方式，如设置，将覆盖u-form的同名参数",
      "type": "string",
      "default": "-"
    },
    "right-icon": {
      "desc": "右侧自定义字体图标(限uview内置图标)或图片地址",
      "type": "string",
      "default": "-",
      "options": ""
    },
    "left-icon": {
      "desc": "左侧自定义字体图标(限uview内置图标)或图片地址",
      "type": "string",
      "default": "-",
      "options": ""
    },
    "left-icon-style": {
      "desc": "左侧图标的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "right-icon-style": {
      "desc": "右侧图标的样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "required 1.3.5": {
      "desc": "是否显示左边的\"*\"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "form-item-slot": {
    "-": {
      "desc": "form item 的内容"
    },
    "right": {
      "desc": "右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景"
    }
  }
};