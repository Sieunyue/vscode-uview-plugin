export interface Component {
  prefix: string;
  description: string;
  body: string[];
  props: ComponentProp;
  events?: ComponentEvents;
  slot?: ComponentSlot;
  [other: string]: any;
  getOthersInfo?():string
}

export interface ComponentProp {
  [name: string]: {
    desc: string;
    type?: string;
    default?: string;
    options?: string;
  };
}

export interface ComponentEvents{
  [event: string]: {
    desc: string;
    params: string;
  }
}

export interface ComponentSlot{
  [event: string]: {
    desc: string;
  }
}

export function getOthersInfo(this: any):string {
  const keys = Object.keys(this);

  let t = '';
  keys.forEach(key => {
    if(/prefix|body|description|props|slot|events|getOthersInfo/.test(key)){
      return;
    }

    t += `* ${key} \n`;
    Object.keys(this[key]).forEach(item=>{
      const p = this[key];
      t += `* **${item}**: `;
      if(p[item].type){
        t += `{*${p[item].type}}* `;
      }
      if(p[item].params){
        t += `(${p[item].params}) `;
      }
      if(p[item].default){
        t += p[item].default+' ';
      }
      if(p[item].options){
        t += p[item].options+' ';
      }
      if(p[item].desc){
        t += p[item].desc;
      }
      t += '\n';
    });
  });

  return t;
}

export * from './icon';
export * from './image';
export * from './button';
export * from './cell';
export * from './badge';
export * from './tag';
export * from './input';
export * from './form';