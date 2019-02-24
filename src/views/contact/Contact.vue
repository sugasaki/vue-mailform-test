<template>
  <div class="contact">
    <el-container>
      <el-header>
        <h1>お問い合わせ</h1>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
            <router-view></router-view>
          </el-col>

          <el-col :span="6" :offset="6">
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
