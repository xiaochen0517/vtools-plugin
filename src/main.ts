import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WeiTool from "../plugins/index.ts";

let app = createApp(App);

app.use(WeiTool);

app.mount('#app')
