<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="200px"
    class="demo-ruleForm"
    status-icon
    validate-on-rule-change
  >
    <el-form-item label="名前(姓名)" prop="name">
      <el-input id="name" v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="ふりがな(姓名)" prop="kana">
      <el-input v-model="ruleForm.kana"></el-input>
    </el-form-item>
    <el-form-item label="社名">
      <el-input v-model="ruleForm.company"></el-input>
    </el-form-item>
    <el-form-item label="メールアドレス" prop="mailaddress">
      <el-input v-model="ruleForm.mailaddress"></el-input>
    </el-form-item>
    <el-form-item label="郵便番号">
      <el-input v-model="ruleForm.postal"></el-input>
    </el-form-item>
    <el-form-item label="住所">
      <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>

    <el-form-item label="どの製品について" prop="productKey">
      <el-select v-model="ruleForm.productKey" placeholder="どの製品について">
        <el-option label="Aサービスについて" value="regionA"></el-option>
        <el-option label="Bサービスについて" value="regionB"></el-option>
        <el-option label="Cサービスについて" value="regionC"></el-option>
        <el-option label="その他" value="regionOther"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="問い合わせ件名" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="問い合わせ内容" prop="contactBody">
      <el-input type="textarea" v-model="ruleForm.contactBody" :rows="5" autosize></el-input>
    </el-form-item>

    <el-form-item label prop="agree">
      <el-checkbox label="個人情報の保持の同意" name="agree" v-model="ruleForm.agree" required></el-checkbox>
    </el-form-item>

    <el-form-item>
      <el-button @click="submitForm('ruleForm')" type="primary">送信内容確認</el-button>
      <el-button @click="cancelClick">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    const storeValue = this.$store.getters["contact/values"];
    const initState = {
      name: "",
      kana: "",
      company: "",
      mailaddress: "",
      postal: "",
      address: "",
      region: "",
      title: "",
      contactBody: "",
      agree: true
    };

    return {
      ruleForm: storeValue === null ? initState : storeValue,
      rules: {
        name: [
          {
            required: true,
            message: "名前を入力してください",
            trigger: "blur"
          },
          {
            min: 2,
            max: 100,
            message: "名前は２文字以上、100文字以下で入力してください",
            trigger: "blur"
          }
        ],
        kana: [
          {
            required: true,
            message: "ふりがなを入力してください",
            trigger: "blur"
          },
          {
            min: 2,
            max: 100,
            message: "ふりがなは２文字以上、100文字以下で入力してください",
            trigger: "blur"
          }
        ],

        mailaddress: [
          {
            required: true,
            message: "メールアドレスを入力してください",
            trigger: "blur"
          },
          {
            type: "email",
            message: "有効なメールアドレスを入力してください",
            trigger: "blur"
          }
        ],

        title: [
          {
            required: true,
            message: "問い合わせ件名を入力してください",
            trigger: "blur"
          },
          {
            min: 5,
            max: 100,
            message: "件名は5文字以上、100文字以下で入力してください",
            trigger: "blur"
          }
        ],
        contactBody: [
          {
            required: true,
            message: "問い合わせ内容を入力してください",
            trigger: "blur"
          },
          {
            min: 5,
            max: 1000,
            message: "内容は5文字以上、1000文字以下で入力してください",
            trigger: "blur"
          }
        ],
        agree: [
          {
            required: true,
            message: "個人情報の保持の同意をお願いします",
            trigger: "change"
          }
        ]
      }
    };
  },
  components: {},
  props: {},

  created: function() {
    this.$store.commit("contact/stepActive", 0);
  },

  methods: {
    cancelClick() {
      this.$router.push("/");
    },
    submitForm(formName) {
      if (this.ruleForm.agree == false) {
        this.$message({
          showClose: true,
          message: "個人情報の保持の同意をお願いします",
          type: "error"
        });
        return false;
      }

      this.$refs[formName].validate(valid => {
        if (valid) {
          //console.log("ruleForm", this.ruleForm);
          this.$store.commit("contact/setValues", this.ruleForm);
          this.$router.push("contact/cofirm");
        } else {
          this.$message({
            showClose: true,
            message: "必須項目を入力してください",
            type: "error"
          });
          return false;
        }
      });
    }
  }
};
</script>
