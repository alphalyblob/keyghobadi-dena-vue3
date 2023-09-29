import './assets/theme/style.css'
import './assets/theme/mbr-additional.css'
import './assets/theme/mobirise-icons-bold.css'
import './assets/bootstrap/bootstrap-grid.min.css'
import './assets/bootstrap/bootstrap.min.css'

import './assets/img/516665.jpg'
import './assets/img/mountain-fv.jpg'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
