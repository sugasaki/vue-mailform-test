<template>
  <div>
    <h1>送信が完了しました</h1>

    <value-list ></value-list>

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
  methods: {
    homeBackClick() {
      this.$store.dispatch("contact/clearContactValues", this.ruleForm);
      this.$router.push("/");
    }
  }
};
</script>
