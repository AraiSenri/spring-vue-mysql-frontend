import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios, { Axios } from 'axios'
import VueAxios from 'vue-axios'
import VueDraggable from 'vue-draggable'

const app = createApp(App)
// const cors = require('cors')
// const app = Vue.createApp(...)

app.use(VueAxios, axios)

app.use(router, VueDraggable)

app.mount('#app')

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/'
})

const res = await instance.get('/1')
console.log(res)
