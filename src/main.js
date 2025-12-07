import './assets/main.css'
import "preline";
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'

createApp(App).use(router).mount('#app')
