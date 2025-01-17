import { createApp } from 'vue'

import App from './App.vue'
import './index.css'

import { setupStore } from './store'
import { setupRouter } from './router'

const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
