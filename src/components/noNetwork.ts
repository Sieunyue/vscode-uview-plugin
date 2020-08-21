import {Component, getOthersInfo} from './index'; 
export const noNetwork: Component = {
  "prefix": "u-no-network",
  "description": "noNetwork",
  "body": [
    "<u-no-network></u-no-network>"
  ],
  "url": "http://uviewui.com/components/noNetwork.html",
  "props": {
    "tips": {
      "desc": "没有网络时的提示语",
      "type": "string",
      "default": "哎呀，网络信号丢失"
    },
    "zindex": {
      "desc": "组件的z-index值",
      "type": "string | number",
      "default": "10080"
    },
    "image": {
      "desc": "无网络的图片提示，可用的src地址或base64图片",
      "type": "string",
      "default": "-"
    }
  },
  "events": {
    "retry": {
      "desc": "用户点击页面的\"重试\"按钮时触发",
      "params": "-"
    }
  }
};