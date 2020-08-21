import {Component, getOthersInfo} from './index'; 
export const parse: Component = {
  "prefix": "u-parse",
  "description": "parse",
  "body": [
    "<u-parse></u-parse>"
  ],
  "url": "http://uviewui.com/components/parse.html",
  "props": {
    "html": {
      "desc": "要显示的 html 字符串",
      "type": "string",
      "default": "-"
    },
    "autopause": {
      "desc": "是否允许播放视频时自动暂停其他视频",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "autoscroll": {
      "desc": "是否自动给 table 加一个滚动层（使表格可以单独滚动）",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "autosettitle": {
      "desc": "是否自动将 title 标签的内容设置到页面标题",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "compress": {
      "desc": "压缩等级，可以选择是否移除 id 和 class(不建议修改)",
      "type": "number",
      "default": "0",
      "options": "1 / 2 / 3"
    },
    "domain": {
      "desc": "主域名，设置后将给链接自动拼接上主域名或协议名",
      "type": "string",
      "default": "-"
    },
    "lazy-load": {
      "desc": "是否开启图片懒加载",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "loading-img": {
      "desc": "图片加载完成前的占位图，详见 占位图",
      "type": "string",
      "default": "-"
    },
    "selectable": {
      "desc": "是否允许长按复制内容",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "show-with-animation": {
      "desc": "是否使用渐显动画",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "tag-style": {
      "desc": "设置标签的默认样式",
      "type": "object",
      "default": "-"
    },
    "use-anchor": {
      "desc": "是否使用页面内锚点",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "use-cache": {
      "desc": "是否使用缓存，设置后多次打开不用重复解析",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "event": {
    "parse": {
      "desc": "解析完成时触发",
      "params": "返回解析结果，可以对该结果进行自定义修改，将在渲染时生效"
    },
    "load": {
      "desc": "dom 加载完成时触发",
      "params": "所有节点被添加到节点树中时触发，无返回值，可以调用 api"
    },
    "ready": {
      "desc": "渲染完成时触发",
      "params": "返回 boundingclientrect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长"
    },
    "error": {
      "desc": "出错时触发",
      "params": "返回一个 object，其中 source 是错误来源，errmsg 为错误信息，target 包含出错标签的具体信息"
    },
    "imgtap": {
      "desc": "图片被点击时触发",
      "params": "返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onshow 的调用"
    },
    "linkpress": {
      "desc": "在链接被点击时触发",
      "params": "返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作"
    }
  }
};