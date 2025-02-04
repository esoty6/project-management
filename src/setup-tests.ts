import { config } from "@vue/test-utils";
import resizeObserverPolyfill from "resize-observer-polyfill";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

config.global.plugins = [router, vuetify];
global.ResizeObserver = resizeObserverPolyfill;
