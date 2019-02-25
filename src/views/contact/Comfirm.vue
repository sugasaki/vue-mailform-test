<template>
  <div v-loading="isBusy">
    <h1>お問い合わせの確認</h1>

    <v-list>
      <v-subheader>入力に間違いがないか、ご確認ください</v-subheader>

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

    <v-btn color="info" @click="handleClickSubmit">送信する</v-btn>
    <v-btn to="/contact">戻る</v-btn>
  </div>
</template>


<script>
import store from "../../store";
import { api } from "../../services";

export default {
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
      console.log("getters", this.$store.getters);
      console.log("values", this.$store.getters["contact/values"]);
      return this.$store.getters["contact/values"];
    }
    // isBusy() {
    //   return this.$store.getters["contact/isBusy"];
    // }
  },

  methods: {
    async handleClickSubmit() {
      //constform = newContactForm(this.values);
      //onstrequestBody = form.buildRequestBody();
      //console.log(requestBody);
      // await this.$store.dispatch("contact/postContactValues");
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

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
