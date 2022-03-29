import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";

// 导入本地语言包
import LocaleEn from "./locales/en";
import LocaleZh from "./locales/zh";

// 导入element-ui语言包
import LocaleElementEn from "element-ui/lib/locale/lang/en";
import LocaleElementZH from "element-ui/lib/locale/lang/zh-CN";
import ElementLocale from "element-ui/lib/locale";

// 导入vuetify语言包
import LocaleVuetifyZh from "vuetify/lib/locale/zh-Hans";
import LocaleVuetifyEn from "vuetify/lib/locale/en";

// 注册i18n
Vue.use(VueI18n);

// 语言包根据语言环境分类
const messages = {
  en: {
    ...LocaleEn,
    ...LocaleElementEn,
    $vuetify: {
      ...LocaleVuetifyEn,
    },
  },
  zh: {
    ...LocaleZh,
    ...LocaleElementZH,
    $vuetify: {
      ...LocaleVuetifyZh,
    },
  },
};

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: getLanguage(),
  messages, // 设置语言环境对应信息
});

// 重点，同步切换element ui 组件内部语言
ElementLocale.i18n((key, value) => i18n.t(key, value));

// 设置当前语言环境，默认中文简体
export function getLanguage() {
  const chooseLanguage = Cookies.get("language");
  if (chooseLanguage) return chooseLanguage;
  // 如果没有选择语言，如果都没有，默认中文字
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "zh";
}

export default i18n;
