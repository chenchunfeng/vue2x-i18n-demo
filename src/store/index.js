import Vue from "vue";
import Vuex from "vuex";
import { getLanguage } from "@/i18n/index";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: getLanguage(),
  },
  mutations: {
    // 设置语言
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set("language", language);
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
  },
  modules: {},
});
