import { RouteRecordRaw } from 'vue-router';

const addMeta: (children: any[], key:string, data: string ) => RouteRecordRaw[] = (children, key, data) => {
  return children.map((item) => {
    const meta = item.meta || {};

    return {
      ...item,
      meta: {
        ...meta,
        [key]: data,
      },
    };
  });
};

export default addMeta;
