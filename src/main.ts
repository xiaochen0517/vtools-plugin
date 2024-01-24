import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VTools from "../plugins/index.ts";

let app = createApp(App);

app.use(VTools);

app.mount('#app')
