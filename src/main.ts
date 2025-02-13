import "@/styles/main.scss";
import "vuetify/styles";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";

export const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
