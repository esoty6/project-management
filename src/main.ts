import "vuetify/styles";
import "./assets/base.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

export const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
