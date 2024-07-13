import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/arya-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { initializeApp } from "firebase/app";
import router from './router';
import { createPinia } from 'pinia'
import './api'

const firebaseConfig = {
    apiKey: "AIzaSyCHIpRf4SPGw5z7oYIYs_RruNb28M5nck4",
    authDomain: "enlino.firebaseapp.com",
    projectId: "enlino",
    storageBucket: "enlino.appspot.com",
    messagingSenderId: "602377349221",
    appId: "1:602377349221:web:f6823f29e74d80c9b5be8c"
  };

initializeApp(firebaseConfig);

const app = createApp(App)
// components.forEach(component => {
//     app.component(component.name,component)
// })
app.use(router)
app.use(PrimeVue)
app.use(createPinia())
app.mount('#app')







