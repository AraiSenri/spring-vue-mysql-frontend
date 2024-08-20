// import './assets/main.css'
import './assets/header-sample.css'
// import './assets/base-style.css'
// import './assets/reset.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueDraggable from 'vue-draggable'
import { marked } from 'marked'

const app = createApp(App)
// const cors = require('cors')
// const app = Vue.createApp(...)

app.use(VueAxios, axios)

app.use(router, VueDraggable, marked)

app.mount('#app')

/* const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/'
}) */

/* const res = await instance.get('/1')
console.log(res) */
