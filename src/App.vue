<template>
  <div id="app" data-app="true">
    <el-container>
      <el-header style="font-size: 30px">
        {{ $t("test") }} - {{ $t("message") }}</el-header
      >
      <el-main>
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item :label="$t('form.name')">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="el">
            <el-col :span="12">
              <el-date-picker type="date" v-model="form.date1"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="vuetify">
            <el-col :span="12">
              <!-- 烦人的vuetify -->
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="selectedDates"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    align="center"
                    readonly
                    dense
                    outlined
                    solo
                    flat
                    hide-details
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker no-title scrollable range>
                  <v-spacer></v-spacer>
                  <v-btn dark color="#095AFF">{{ $t("confirm") }}</v-btn>
                  <v-btn dark color="black">{{ $t("cancel") }}</v-btn>
                </v-date-picker>
              </v-menu>
            </el-col>
          </el-form-item>
          <el-form-item :label="$t('form.color')">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                :label="item.label"
                name="type"
                v-for="item in list1"
                :key="item.value"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item :label="$t('form.color')">
            <div>需要location.reload</div>
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                :label="item.label"
                name="type"
                v-for="item in list2"
                :key="item.value"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item :label="$t('form.button')">
            <button-language></button-language>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import ButtonLanguage from "./components/ButtonLanguage.vue";
import { getColorList, colorList } from "./config/list";

export default {
  components: {
    ButtonLanguage,
  },
  data() {
    return {
      locale: this.$i18n.locale,
      form: {
        name: "",
        date1: "",
        type: [],
      },

      menu: false,
      selectedDates: [],
    };
  },

  computed: {
    list1() {
      return getColorList();
    },
    list2() {
      return colorList;
    },
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="less"></style>
