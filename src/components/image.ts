import { Component } from './index';

interface ImageComponent extends Component {
  'cellitem-events': ImageComponentCellItemEvent;
}

interface ImageComponentCellItemEvent {
  [name: string]: {
    desc: string;
  };
}

export const image: ImageComponent = {
  prefix: 'u-image',
  description: 'image 图片',
  body: ['<u-image width="${1}" height="${2}" :src="${3}"/>'],
  props: {
    src: { desc: '图片地址，强烈建议使用绝对或者网络路径', type: 'string' },
    mode: { desc: '裁剪模式，见上方说明', type: 'string' },
    width: { desc: '宽度，单位任意，如果为数值，则为rpx单位', type: 'string | number' },
    height: { desc: '高度，单位任意，如果为数值，则为rpx单位', type: 'string | number' },
    shape: { desc: '图片形状，circle-圆形，square-方形', type: 'string', options: 'circle' },
    'border-radius': { desc: '圆角值，单位任意，如果为数值，则为rpx单位', type: 'string | number' },
    'lazy-load': { desc: '是否懒加载，仅微信小程序、app、百度小程序、字节跳动小程序有效', type: 'boolean' },
    'show-menu-by-longpress': { desc: '是否开启长按图片显示识别小程序码菜单，仅微信小程序有效', type: 'boolean' },
    'loading-icon': { desc: '加载中的图标，或者小图片', type: 'string' },
    'error-icon': { desc: '加载失败的图标，或者小图片', type: 'string' },
    'show-loading': { desc: '是否显示加载中的图标或者自定义的slot', type: 'boolean', options: 'false' },
    'show-error': { desc: '是否显示加载错误的图标或者自定义的slot', type: 'boolean', options: 'false' },
    fade: { desc: '是否需要淡入效果', type: 'boolean', options: 'false' },
    webp: { desc: '只支持网络资源，只对微信小程序有效', type: 'boolean', options: 'true' },
    duration: { desc: '搭配fade参数的过渡时间，单位ms', type: 'string | number' }
  },
  slot: { loading: { desc: '自定义加载中的提示内容' }, error: { desc: '自定义失败的提示内容' } },
  'cellitem-events': {
    click: { desc: '点击图片时触发' },
    error: { desc: '图片加载失败时触发' },
    load: { desc: '图片加载成功时触发' }
  },
  getOthersInfo(){
    console.log(this,this["cellitem-events"])
    const cellEventList = Object.keys(this["cellitem-events"]);
    let t = '* cellitem-events \n';

    cellEventList.forEach((key) => {
      t += ` * **${key}**: ${this["cellitem-events"][key].desc} \n`;
    });

    return t;
  }
};
