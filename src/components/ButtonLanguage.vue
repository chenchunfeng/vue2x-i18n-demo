<template>
  <div class="page-container">
    <img :src="iconSrc" class="page-icon" />
    <el-dropdown @command="handleSetLanguage" trigger="click">
      <span class="el-dropdown-link">
        {{ $t(languageText) }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="languageType === 'zh'">{{
          $t("chinese")
        }}</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="languageType === 'en'">{{
          $t("english")
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// 英文 Accept-Language:en-US
// 中文 Accept-Language:zh-CN

export default {
  name: "ButtonLanguage",

  components: {},
  data() {
    return {
      languageType: null,
      iconZH: require("../assets/icon-zh.png"),
      iconEN: require("../assets/icon-en.png"),
    };
  },
  mounted() {
    this.languageType = this.$i18n.locale;
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.languageType = lang;
      this.$vuetify.lang.current = lang;
      this.$store.dispatch("setLanguage", lang);
      // 外部js不使用函数，就要reload
      // location.reload();
    },
  },
  computed: {
    iconSrc() {
      return this.languageType === "zh" ? this.iconZH : this.iconEN;
    },
    languageText() {
      return this.languageType === "zh" ? "chinese" : "english";
    },
  },
};
</script>
<style scoped>
.page-container {
  /* position: absolute;
  right: 0px;
  top: 18px;*/
  display: flex;
  align-items: center;
}
.page-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
</style>
