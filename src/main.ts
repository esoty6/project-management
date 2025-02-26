import "@/styles/main.scss";
import "vuetify/styles";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";

export const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount("#app");
