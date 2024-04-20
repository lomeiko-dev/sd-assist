import { createApp } from "vue";
import App from "./app/app.vue";
import { router } from "app/routing";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
