import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import i18n, { getLanguage } from "@/i18n";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3369ff",
      },
    },
  },
  // vuetity语言配置
  lang: {
    t: (key, ...params) => i18n.t(key, params),
    current: getLanguage(),
  },
});
