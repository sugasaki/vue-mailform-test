<template>
  <div class="contact">
    <el-container>
      <el-header>
        <h1>お問い合わせ</h1>
      </el-header>
      <el-main>
        <el-row class="hidden-xl-only hidden-lg-only">
          <el-col :span="22" :offset="1">
            <el-steps :active="stepActive" finish-status="success">
              <el-step title="Step 1" description="お問い合わせの入力"></el-step>
              <el-step title="Step 2" description="お問い合わせの確認"></el-step>
              <el-step title="Step 3" description="送信完了"></el-step>
            </el-steps>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
            <router-view></router-view>
          </el-col>

          <el-col hidden-xl-only :span="6" :offset="3" class="hidden-md-and-down">
            <div style="height: 300px;">
              <el-steps direction="vertical" :active="stepActive" finish-status="success">
                <el-step title="Step 1" description="お問い合わせの入力"></el-step>
                <el-step title="Step 2" description="お問い合わせの確認"></el-step>
                <el-step title="Step 3" description="送信完了"></el-step>
              </el-steps>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";

export default {
  name: "contact",

  computed: {
    stepActive() {
      // console.log("state", this.$store.state);
      // console.log("values", this.$store.getters["contact/values"]);
      return this.$store.state.contact.stepActive;
    }
  },
  components: {},
  methods: {}
};
</script>
