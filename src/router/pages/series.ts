import addMeta from '@/router/addMeta';

const children = [
  {
    path: 'list',
    name: 'series-list',
    component: () => import(/* webpackChunkName: "SeriesList" */ '@/views/series/SeriesList.vue'),
    meta: {
      title: '下拉顯示框',
    },
  },
];

const routes = {
  path: '/series',
  name: 'series',
  component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/BaseLayout.vue'),
  children: addMeta(children, 'category', 'series'),
};

export default routes;
export { children };
