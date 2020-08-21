import {Component, getOthersInfo} from './index'; 
export const waterfall: Component = {
  "prefix": "u-waterfall",
  "description": "waterfall",
  "body": [
    "<u-waterfall></u-waterfall>"
  ],
  "url": "http://uviewui.com/components/waterfall.html",
  "indexbar-props": {
    "add-time": {
      "desc": "单条数据添加到队列的时间间隔，单位ms，见上方注意事项说明",
      "type": "string | number",
      "default": "200"
    },
    "idkey": {
      "desc": "数据的唯一值的键名，见上方说明",
      "type": "string",
      "default": "id"
    }
  },
  "methods": {
    "clear": {
      "desc": "清空列表数据",
      "type": ""
    },
    "remove(id)": {
      "desc": "id为唯一的\"id\"值，见上方说明",
      "type": ""
    }
  }
};