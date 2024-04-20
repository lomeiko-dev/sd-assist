import { createApp } from "vue";
import App from "./app/app.vue";
import { router } from "app/routing";

createApp(App).use(router).mount("#app");
