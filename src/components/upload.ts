import {Component, getOthersInfo} from './index'; 
export const upload: Component = {
  "prefix": "u-upload",
  "description": "upload",
  "body": [
    "<u-upload></u-upload>"
  ],
  "url": "http://uviewui.com/components/upload.html",
  "props": {
    "action": {
      "desc": "服务器上传地址",
      "type": "string",
      "default": "-"
    },
    "max-count": {
      "desc": "最大选择图片的数量",
      "type": "string | number",
      "default": "99"
    },
    "width": {
      "desc": "图片预览区域和添加图片按钮的宽度(高等于宽)，单位rpx，不能是百分比，或者auto",
      "type": "string | number",
      "default": "200"
    },
    "custom-btn": {
      "desc": "如果需要自定义选择图片的按钮，设置为true",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "show-progress": {
      "desc": "是否显示进度条",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "disabled": {
      "desc": "是否启用(显示/隐藏)组件",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "image-mode": {
      "desc": "预览图片等显示模式，可选值为uni的image的mode属性值",
      "type": "string",
      "default": "aspectfill"
    },
    "header": {
      "desc": "上传携带的头信息，对象形式",
      "type": "object",
      "default": "{}"
    },
    "form-data": {
      "desc": "上传额外携带的参数",
      "type": "object",
      "default": "{}"
    },
    "name": {
      "desc": "上传文件的字段名，供后端获取使用",
      "type": "string",
      "default": "file"
    },
    "size-type": {
      "desc": "original 原图，compressed 压缩图，默认二者都有，h5无效",
      "type": "array<string>",
      "default": "['original', 'compressed']"
    },
    "source-type": {
      "desc": "选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有",
      "type": "array<string>",
      "default": "['album', 'camera']"
    },
    "preview-full-image": {
      "desc": "是否可以通过uni.previewimage预览已选择的图片",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "multiple": {
      "desc": "是否开启图片多选，部分安卓机型不支持",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "deletable": {
      "desc": "是否显示删除图片的按钮",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "max-size": {
      "desc": "选择单个文件的最大大小，单位b(byte)，默认不限制",
      "type": "string | number",
      "default": "number.max_value"
    },
    "file-list": {
      "desc": "默认显示的图片列表，数组元素为对象，必须提供url属性",
      "type": "array<object>",
      "default": "-"
    },
    "upload-text": {
      "desc": "选择图片按钮的提示文字",
      "type": "string",
      "default": "选择图片"
    },
    "auto-upload": {
      "desc": "选择完图片是否自动上传，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-tips": {
      "desc": "特殊情况下是否自动提示toast，见上方说明",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "show-upload-list": {
      "desc": "是否显示组件内部的图片预览",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "del-icon": {
      "desc": "右上角删除图标名称，只能为uview内置图标",
      "type": "string",
      "default": "close"
    },
    "del-bg-color": {
      "desc": "右上角关闭按钮的背景颜色",
      "type": "string",
      "default": "#fa3534"
    },
    "del-color": {
      "desc": "右上角关闭按钮图标的颜色",
      "type": "string",
      "default": "#ffffff"
    },
    "to-json 1.3.7": {
      "desc": "如果上传后服务端返回的值为json字符串的话，是否自动转为json",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "before-upload 1.3.7": {
      "desc": "每个文件上传前触发的钩子回调函数，见上方说明",
      "type": "function",
      "default": "-"
    },
    "limittype 1.5.5": {
      "desc": "允许的图片后缀",
      "type": "array",
      "default": "['png', 'jpg', 'jpeg', 'webp', 'gif']"
    },
    "index  1.6.1": {
      "desc": "在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件",
      "type": "string | number",
      "default": "-"
    }
  },
  "methods": {
    "upload": {
      "desc": "调用此方法，手动上传图片",
      "type": ""
    },
    "clear": {
      "desc": "调用此方法，清空内部文件列表",
      "type": ""
    },
    "reupload": {
      "desc": "调用此方法，重新上传内部上传失败或者尚未上传的图片",
      "type": ""
    },
    "remove(index)": {
      "desc": "手动移除列表的某一个图片，index为lists数组的索引",
      "type": ""
    }
  },
  "slot": {
    "addbtn": {
      "desc": "自定义的选择图片按钮"
    }
  },
  "events": {
    "on-oversize": {
      "desc": "图片大小超出最大允许大小",
      "params": "(file, lists, name), name为通过props传递的index参数"
    },
    "on-preview": {
      "desc": "全屏预览图片时触发",
      "params": "(url, lists, name)，url为当前选中的图片地址，index为通过props传递的index参数"
    },
    "on-remove": {
      "desc": "移除图片时触发",
      "params": "(index, lists, name)，name为通过props传递的index参数"
    },
    "on-success": {
      "desc": "图片上传成功时触发",
      "params": "(data, index, lists, name)，data为服务器返回的数据，name为通过props传递的index参数"
    },
    "on-change": {
      "desc": "图片上传后，无论成功或者失败都会触发",
      "params": "(res, index, lists, name)，res为服务器返回的信息，name为通过props传递的index参数"
    },
    "on-error": {
      "desc": "图片上传失败时触发",
      "params": "(res, index, lists, name)，res为服务器返回的信息，name为通过props传递的index参数"
    },
    "on-progress": {
      "desc": "图片上传过程中的进度变化过程触发",
      "params": "(res, index, lists, name)，res为服务器返回的信息，具体参数请打印查看，name为通过props传递的index参数"
    },
    "on-uploaded": {
      "desc": "所有图片上传完毕触发",
      "params": "(lists, name)，可以通过此事件，将lists参数获取，提交给后端使用，name为通过props传递的index参数"
    },
    "on-choose-complete": {
      "desc": "每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表",
      "params": "(lists, name)，内部当前的文件列表，name为通过props传递的index参数"
    },
    "on-list-change": {
      "desc": "当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发",
      "params": "(lists, name)，内部文件变化之后的列表，name为通过props传递的index参数"
    }
  }
};