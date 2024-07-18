import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import {router} from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import { i18n } from './i18n';



createApp(App)
.use(router)
.use(i18n)
.mount('#app')
