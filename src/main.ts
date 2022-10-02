import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import pinia from '@/stores';
import '@/styles/init/index.scss';
import '@/styles/utils/_rwd.scss';

const app = createApp(App);
app.use(pinia).use(router).mount('#app');

