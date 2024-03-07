import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import axios from '../plugins/axios'
import router from './router'
import App from './pages/index.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios, {
  baseUrl: 'https://cataas.com/',
})

app.mount('#app')

