import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'

// main.ts
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


createApp(App).use(Antd).use(router).mount('#app')
