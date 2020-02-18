export interface Step {
    name: string;
    fileName?: string;
    markdown: {
      file: string;
      content?: string;
    };
    solidity: {
      file:string;
      content?:string;
    };
    test: {
      file:string;
      content?:string;
    };
    js?:{
      file:string;
      content?:string;
    }
    vype?:{
      file:string;
      content?:string;
    }
  }