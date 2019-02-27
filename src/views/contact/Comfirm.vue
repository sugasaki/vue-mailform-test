<template>
  <div v-loading="isBusy">
    <h1>お問い合わせの確認</h1>

    <v-subheader>入力に間違いがないか、ご確認ください</v-subheader>

    <el-row>
      <el-col :span="12">
        <value-list></value-list>
      </el-col>
      <el-col :span="6" :offset="3">
        <h2>送信するJSON</h2>
        <tree-view :data="values" :options="{maxDepth: 3}"></tree-view>
      </el-col>
    </el-row>

    <v-btn color="info" @click="handleClickSubmit">送信する</v-btn>
    <v-btn to="/contact">戻る</v-btn>
  </div>
</template>


<script>
import store from "../../store";
import { api } from "../../services";
import ValueList from "./ValueList";

export default {
  components: {
    ValueList
  },
  created: function() {
    this.$store.commit("contact/stepActive", 1);
  },
  beforeRouteEnter(to, from, next) {
    //console.log("store", store);
    //値が存在しないときはフォーム画面に戻す
    if (store.getters["contact/isEmpty"]) {
      next("/contact");
    }
    next();
  },
  data() {
    return {
      isBusy: false
    };
  },
  computed: {
    product() {
      return this.$store.getters["contact/product"];
    },
    values() {
      //console.log("getters", this.$store.getters);
      //console.log("values", this.$store.getters["contact/values"]);
      return this.$store.getters["contact/values"];
    }
    // isBusy() {
    //   return this.$store.getters["contact/isBusy"];
    // }
  },

  methods: {
    async handleClickSubmit() {
      this.isBusy = true;

      //console.log("values", this.values);
      let result = await api.fetchPosts(this.values);
      //console.log("result", result);
      this.isBusy = false;

      if (result.err) {
        this.$message({
          showClose: true,
          message: "送信エラーが起きました。",
          type: "error"
        });
      } else {
        this.$router.push("/contact/result");
      }
    }
  }
};
</script>
