import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(vant)
  .use(Lazyload)
  .mount('#app')
