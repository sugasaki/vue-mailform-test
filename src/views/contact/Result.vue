<template>
  <div>
    <h1>送信が完了しました</h1>

    <v-list>
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>名前</v-list-tile-title>
          <v-list-tile-sub-title>{{values.name}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>ふりがな</v-list-tile-title>
          <v-list-tile-sub-title>{{values.kana}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>社名</v-list-tile-title>
          <v-list-tile-sub-title>{{values.company}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>メールアドレス</v-list-tile-title>
          <v-list-tile-sub-title>{{values.mailaddress}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>郵便番号</v-list-tile-title>
          <v-list-tile-sub-title>{{values.postal}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>住所</v-list-tile-title>
          <v-list-tile-sub-title>{{values.address}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>どの製品について</v-list-tile-title>
          <v-list-tile-sub-title>{{product}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>問い合わせ件名</v-list-tile-title>
          <v-list-tile-sub-title>{{values.title}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>問い合わせ内容</v-list-tile-title>
          <v-list-tile-sub-title>{{values.contactBody}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>個人情報の保持の同意</v-list-tile-title>
          <v-list-tile-sub-title>{{values.agree}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-btn @click="homeBackClick">ホームへ</v-btn>

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
    product() {
      return this.$store.getters["contact/product"];
    },
    values() {
      //console.log("getters", this.$store.getters);
      //console.log("values", this.$store.getters["contact/values"]);
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
