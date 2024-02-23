import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";

import 'element-plus/theme-chalk/el-message.css';

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/4045339-0-default';

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
