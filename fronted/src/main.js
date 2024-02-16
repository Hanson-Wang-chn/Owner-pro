import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";

import 'element-plus/theme-chalk/el-message.css';

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8080';

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
