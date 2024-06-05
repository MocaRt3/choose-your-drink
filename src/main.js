import { createApp } from 'vue'
import i18next from '../src/i18n/i18next.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '../src/assets/scss/main.scss';
import {createPinia} from 'pinia';
import router from './router/router.js';
import App from './App.vue'

i18next(createApp(App))
			.use(ElementPlus)
			.use(createPinia())
			.use(router)
			.mount('#app')
