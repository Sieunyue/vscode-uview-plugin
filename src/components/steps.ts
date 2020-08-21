import {Component, getOthersInfo} from './index'; 
export const steps: Component = {
  "prefix": "u-steps",
  "description": "steps",
  "body": [
    "<u-steps></u-steps>"
  ],
  "url": "http://uviewui.com/components/steps.html",
  "props": {
    "mode": {
      "desc": "设置模式",
      "type": "string",
      "default": "dot",
      "options": "number"
    },
    "list": {
      "desc": "数轴条数据，数组。具体见上方示例",
      "type": "array",
      "default": "[ ]"
    },
    "type(1.3.7起已废弃)": {
      "desc": "type主题",
      "type": "string",
      "default": "primary",
      "options": "info / success / error / warning"
    },
    "current": {
      "desc": "设置当前处于第几步",
      "type": "number | string",
      "default": "0"
    },
    "direction 1.5.1": {
      "desc": "row-横向，column-竖向",
      "type": "string",
      "default": "row",
      "options": "column"
    },
    "active-color": {
      "desc": "已完成步骤的激活颜色，如设置，type值会失效",
      "type": "string",
      "default": "-"
    },
    "un-active-color": {
      "desc": "未激活的颜色，用于表示未完成步骤的颜色",
      "type": "string",
      "default": "#606266"
    },
    "icon 1.3.7": {
      "desc": "mode = number时的自定义图标",
      "type": "string",
      "default": "checkmark"
    }
  }
};