import { createApp } from "vue";
import App from "./app/app.vue";
import { router } from "app/routing";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import ToastService from "primevue/toastservice";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(PrimeVue).use(ToastService).mount("#app");
