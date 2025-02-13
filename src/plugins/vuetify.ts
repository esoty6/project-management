import { darkTheme } from "@/configs/theme";
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      ...darkTheme,
    },
  },
});

export default vuetify;
