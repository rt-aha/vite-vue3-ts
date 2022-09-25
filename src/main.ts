import { createApp } from 'vue';
import router from '@/router';
import pinia from '@/stores';
import '@/styles/init/index.scss';
import '@/styles/utils/_rwd.scss';
import App from './App.vue';

const app = createApp(App);
app.use(pinia).use(router).mount('#app');
