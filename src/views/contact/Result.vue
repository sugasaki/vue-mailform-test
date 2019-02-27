<template>
  <div>
    <h1>送信が完了しました</h1>

    <el-row>
      <el-col :span="12">
        <value-list></value-list>
      </el-col>
      <el-col :span="6" :offset="3">
        <h2>送信したJSON</h2>
        <tree-view :data="values" :options="{maxDepth: 3}"></tree-view>
      </el-col>
    </el-row>

    <v-btn @click="homeBackClick">ホームへ</v-btn>

    <div></div>
  </div>
</template>

<script>
import store from "../../store";
import ValueList from "./ValueList";

export default {
  components: {
    ValueList
  },
  created: function() {
    this.$store.commit("contact/stepActive", 2);
  },
  beforeRouteEnter(to, from, next) {
    //console.log("store", store);
    //値が存在しないときはフォーム画面に戻す
    if (store.getters["contact/isEmpty"]) {
      next("/contact");
    }
    next();
  },
  computed: {
    values() {
      return this.$store.getters["contact/values"];
    }
  },
  methods: {
    homeBackClick() {
      this.$store.dispatch("contact/clearContactValues", this.ruleForm);
      this.$router.push("/");
    }
  }
};
</script>
