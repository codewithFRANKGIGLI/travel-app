import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGMapApi } from '@fawmi/vue-google-maps'; // Importa il plugin Google Maps

const app = createApp(App);

app.use(router);
app.use(createGMapApi({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  libraries: 'places' // Aggiungi le librerie di Google Maps che desideri utilizzare
}));

app.mount('#app');
