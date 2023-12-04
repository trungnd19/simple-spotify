import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import the root component App from a single-file component.
import App from './App.vue'
import router from './router'

// import tailwind css
import './assets/main.css'

// create application instance && pinia instance
const pinia = createPinia()
const app = createApp(App)

// register plugin and mount
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app') // mounting the app