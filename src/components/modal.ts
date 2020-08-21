import {Component, getOthersInfo} from './index'; 
export const modal: Component = {
  "prefix": "u-modal",
  "description": "modal",
  "body": [
    "<u-modal></u-modal>"
  ],
  "url": "http://uviewui.com/components/modal.html",
  "props": {
    "show": {
      "desc": "是否显示模态框，请赋值给v-model",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "z-index": {
      "desc": "层级",
      "type": "string | number",
      "default": "1075"
    },
    "title": {
      "desc": "标题内容",
      "type": "string",
      "default": "提示"
    },
    "width": {
      "desc": "模态框宽度，数值时单位为rpx",
      "type": "string | number",
      "default": "600",
      "options": "百分比 / auto"
    },
    "content": {
      "desc": "模态框内容，如传入slot内容，则此参数无效",
      "type": "string",
      "default": "内容"
    },
    "show-title": {
      "desc": "是否显示标题",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-confirm-button": {
      "desc": "是否显示确认按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-cancel-button": {
      "desc": "是否显示取消按钮",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "confirm-text": {
      "desc": "确认按钮的文字",
      "type": "string",
      "default": "确认"
    },
    "cancel-text": {
      "desc": "取消按钮的文字",
      "type": "string",
      "default": "取消"
    },
    "cancel-color": {
      "desc": "取消按钮的颜色",
      "type": "string",
      "default": "#606266"
    },
    "confirm-color": {
      "desc": "确认按钮的颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "border-radius": {
      "desc": "模态框圆角值，单位rpx",
      "type": "string | number",
      "default": "16"
    },
    "title-style": {
      "desc": "自定义标题样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "content-style": {
      "desc": "自定义内容样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "cancel-style": {
      "desc": "自定义取消按钮样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "confirm-style": {
      "desc": "自定义确认按钮样式，对象形式",
      "type": "object",
      "default": "-"
    },
    "zoom": {
      "desc": "是否开启缩放模式",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "async-close": {
      "desc": "是否异步关闭，只对确定按钮有效，见上方说明",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "mask-close-able": {
      "desc": "是否允许点击遮罩关闭modal",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "negative-top": {
      "desc": "往上偏移的值，以避免可能弹出的键盘重合，单位任意，数值则默认为rpx单位 1.4.4",
      "type": "string | number",
      "default": "0"
    }
  },
  "event": {
    "confirm": {
      "desc": "点击确认按钮时触发",
      "params": "-"
    },
    "cancel": {
      "desc": "点击取消按钮时触发",
      "params": "-"
    }
  },
  "method": {
    "clearloading": {
      "desc": "异步控制时，通过调用此方法，可以不关闭modal，而单是清除loading状态",
      "type": ""
    }
  },
  "slots": {
    "default": {
      "desc": "传入自定义内容，一般为富文本，见上方说明"
    },
    "confirm-button 1.6.0": {
      "desc": "传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景"
    }
  }
};