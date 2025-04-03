import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstated from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import { BootstrapVue3 } from 'bootstrap-vue-3'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstated)

app.use(BootstrapVue3)
app.use(router)
app.use(pinia)

app.mount('#app')
