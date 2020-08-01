import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/bulma.css'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
FastClick(document.body)
app.mount('#app')