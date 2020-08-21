export interface Component {
  prefix: string;
  description: string;
  body: string[];
  url: string;
  props?: ComponentProp;
  events?: ComponentEvents;
  slot?: ComponentSlot;
  methods?: ComponentMethods;
  [other: string]: any;
  getOthersInfo?(): string;
}

interface ComponentProp {
  [name: string]: {
    desc: string;
    type?: string;
    default?: string;
    options?: string;
  };
}

interface ComponentEvents {
  [event: string]: {
    desc: string;
    params: string;
  };
}

interface ComponentSlot {
  [event: string]: {
    desc: string;
  };
}

interface ComponentMethods {
  [event: string]: {
    desc: string;
    type: string;
  };
}

export function getOthersInfo(this: any): string {
  const keys = Object.keys(this);

  let t = '';
  try {
    keys.forEach((key) => {
      if (/^(prefix|body|description|props|slot|events|getOthersInfo|url)/.test(key)) {
        return;
      }

      t += `* ${key} \n`;
      Object.keys(this[key]).forEach((item) => {

        const p = this[key];
        t += `  * **${item}**: `;
        if (p[item].type) {
          t += `{*${p[item].type}}* `;
        }
        if (p[item].params) {
          t += `(${p[item].params}) `;
        }
        if (p[item].default) {
          t += p[item].default + ' ';
        }
        if (p[item].options) {
          t += p[item].options + ' ';
        }
        if (p[item].desc) {
          t += p[item].desc;
        }
        t += '\n';
      });
    });
  } catch (error) {
    console.log(error);
  }

  return t;
}


export * from './icon';
export * from './image';
export * from './button';
export * from './layout';
export * from './cell';
export * from './badge';
export * from './tag';
export * from './input';
export * from './form';
export * from './calendar';
export * from './select';
export * from './keyboard';
export * from './picker';
export * from './rate';
export * from './search';
export * from './numberBox';
export * from './upload';
export * from './verificationCode';
export * from './field';
export * from './checkbox';
export * from './radio';
export * from './switch';
export * from './slider';
export * from './circleProgress';
export * from './lineProgress';
export * from './table';
export * from './countDown';
export * from './countTo';
export * from './actionSheet';
export * from './alertTips';
export * from './toast';
export * from './noticeBar';
export * from './topTips';
export * from './collapse';
export * from './popup';
export * from './swipeAction';
export * from './modal';
export * from './fullScreen';
export * from './line';
export * from './card';
export * from './mask';
export * from './noNetwork';
export * from './grid';
export * from './swiper';
export * from './timeLine';
export * from './skeleton';
export * from './sticky';
export * from './waterfall';
export * from './divider';
export * from './dropdown';
export * from './tabbar';
export * from './backTop';
export * from './navbar';
export * from './tabs';
export * from './tabsSwiper';
export * from './subsection';
export * from './indexList';
export * from './steps';
export * from './empty';
export * from './link';
export * from './section';
export * from './parse';
export * from './messageInput';
export * from './avatarCropper';
export * from './loadMore';
export * from './readMore';
export * from './lazyLoad';
export * from './gap';
export * from './avatar';
export * from './loading';
