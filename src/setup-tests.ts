import router from "@/router";
import { config } from "@vue/test-utils";
import resizeObserverPolyfill from "resize-observer-polyfill";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

config.global.plugins = [router, vuetify];
global.ResizeObserver = resizeObserverPolyfill;
