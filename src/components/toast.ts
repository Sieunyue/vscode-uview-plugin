import {Component, getOthersInfo} from './index'; 
export const toast: Component = {
  "prefix": "u-toast",
  "description": "toast",
  "body": [
    "<u-toast></u-toast>"
  ],
  "url": "http://uviewui.com/components/toast.html",
  "methods": {
    "show": {
      "desc": "显示toast，如需一进入页面就显示toast，请在onready生命周期调用",
      "type": "见上方说明"
    }
  }
};