import { themes } from "@/configs/theme";
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    variations: {
      colors: ["primary", "secondary", "tertiary"],
      lighten: 2,
      darken: 2,
    },
    themes: {
      ...themes,
    },
  },
});

export default vuetify;
