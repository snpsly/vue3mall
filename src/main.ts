import { createApp } from 'vue';
import './style.css';
import 'normalize.css/normalize.css';
import App from './App.vue';
import 'normalize.css/normalize.css';
import router from './router';
import { createPinia } from 'pinia';
import { Lazyload } from 'vant';
const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .use(Lazyload, {
    lazyComponent: true
  })
  .mount('#app');
