import './assets/main.css'
import bootstrap from './assets/bootstrap.rtl.min.css'
import './assets/bootstrap.bundle.min.js'

import bootstrapicon from 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router);
});
app.use(pinia)

app.use(router)
app.use(bootstrap)
app.mount('#app')
