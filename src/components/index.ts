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

export * from './icon';
export * from './image';
export * from './button';
export * from './cell';
export * from './badge';
export * from './tag';