import {Component, getOthersInfo} from './index'; 
export const dropdown: Component = {
  "prefix": "u-dropdown",
  "description": "dropdown",
  "body": [
    "<u-dropdown></u-dropdown>"
  ],
  "url": "http://uviewui.com/components/dropdown.html",
  "dropdown-props": {
    "active-color": {
      "desc": "标题和选项卡选中的颜色",
      "type": "string",
      "default": "#2979ff"
    },
    "inactive-color": {
      "desc": "标题和选项卡未选中的颜色",
      "type": "string",
      "default": "#606266"
    },
    "close-on-click-mask": {
      "desc": "点击遮罩是否关闭菜单",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "close-on-click-self": {
      "desc": "点击当前激活项标题是否关闭菜单",
      "type": "boolean",
      "default": "true",
      "options": "false"
    },
    "duration": {
      "desc": "选项卡展开和收起的过渡时间，单位ms",
      "type": "string | number",
      "default": "300"
    },
    "height": {
      "desc": "标题菜单的高度，单位任意，数值默认为rpx单位",
      "type": "string | number",
      "default": "80"
    },
    "border-bottom": {
      "desc": "标题菜单是否显示下边框",
      "type": "boolean",
      "default": "false",
      "options": "true"
    },
    "title-size": {
      "desc": "标题的字体大小，单位任意，数值默认为rpx单位",
      "type": "string | number",
      "default": "28"
    }
  },
  "dropdown-item-props": {
    "v-model": {
      "desc": "双向绑定选项卡选择值",
      "type": "string | number",
      "default": "-"
    },
    "title": {
      "desc": "菜单项标题",
      "type": "string",
      "default": "-"
    },
    "options": {
      "desc": "选项数据，如果传入了默认slot，此参数无效，数据结构见上方说明",
      "type": "array[object]",
      "default": "-"
    },
    "disabled": {
      "desc": "是否禁用此选项卡",
      "type": "boolean",
      "default": "false",
      "options": "true"
    }
  },
  "dropdown-item-slot": {
    "-": {
      "desc": "自定义选项卡内容"
    }
  },
  "dropdown-item-events": {
    "change": {
      "desc": "每个u-dropdown均有此回调，点击某个options选项时触发",
      "params": "(value) - 点击项绑定的value属性值"
    }
  }
};