<template>
  <div>
    <h1>送信が完了しました</h1>

    <div>
      <p>名前</p>
      <p>{{values.name}}</p>

      <p>ふりがな</p>
      <p>{{values.kana}}</p>

      <p>社名</p>
      <p>{{values.company}}</p>

      <p>メールアドレス</p>
      <p>{{values.email}}</p>

      <p>郵便番号</p>
      <p>{{values.postal}}</p>

      <p>住所</p>
      <p>{{values.address}}</p>

      <p>どの製品について</p>
      <p>{{values.productKey}}</p>

      <p>問い合わせ件名</p>
      <p>{{values.title}}</p>

      <p>問い合わせ内容</p>
      <p>{{values.contactBody}}</p>

      <p>個人情報の保持の同意</p>
      <p>{{values.agree}}</p>
    </div>

    <router-link to="/contact/cofirm">戻る</router-link>

    <div></div>
  </div>
</template>

<script>
import store from "../../store";

export default {
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
      //console.log("getters", this.$store.getters);
      //console.log("values", this.$store.getters["contact/values"]);
      return this.$store.getters["contact/values"];
    }
  },

  methods: {}
};
</script>
