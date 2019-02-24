<template>
  <div v-loading="isBusy">
    <h1>Confirm</h1>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">名前</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">{{values.name}}</div>
      </el-col>
    </el-row>

    <div>
      <p>名前</p>
      <p>{{values.name}}</p>ふりがな
      <p></p>
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
      <p>{{values.region}}</p>

      <p>問い合わせ件名</p>
      <p>{{values.title}}</p>

      <p>問い合わせ内容</p>
      <p>{{values.contactBody}}</p>

      <p>個人情報の保持の同意</p>
      <p>{{values.agree}}</p>
    </div>

    <el-button @click="handleClickSubmit" type="primary">送信する</el-button>

    <router-link to="/contact">戻る</router-link>

    <div></div>
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

      console.log("values", this.values);
      let result = await api.fetchPosts(this.values);
      console.log("result", result);
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
