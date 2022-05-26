import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    position: "top-center",
    timeout: 1500,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    hideProgressBar: false,
    icon: true,
    rtl: false,
  });

app.mount('#app')
