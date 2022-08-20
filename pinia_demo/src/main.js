import { createApp } from 'vue'
import {createPinia} from 'pinia';
import './style.css'
import App from './App.vue'

const app = createApp(App);
// 创建pinia
const pinia = createPinia();
app.use(pinia);

app.mount('#app')
