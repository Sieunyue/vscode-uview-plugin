import {Component, getOthersInfo} from './index'; 
export const avatarCropper: Component = {
  "prefix": "u-avatar-cropper",
  "description": "avatarCropper",
  "body": [
    "<u-avatar-cropper></u-avatar-cropper>"
  ],
  "url": "http://uviewui.com/components/avatarCropper.html",
  "event": {
    "uavatarcropper": {
      "desc": "裁剪结束后的事件，通过uni.$on监听",
      "params": "path: 裁剪的图片数据"
    }
  }
};