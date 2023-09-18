import './assets/main.css'
import './assets/bootstrap.rtl.min.css'
import './assets/bootstrap.bundle.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.mount('#app')
