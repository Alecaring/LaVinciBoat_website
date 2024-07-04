import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import {router} from './router';
import '@fortawesome/fontawesome-free/css/all.css';



createApp(App)
.use(router)
.mount('#app')
