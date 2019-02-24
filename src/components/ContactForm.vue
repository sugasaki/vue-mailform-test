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

    <el-form-item label="どの製品について">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Aサービスについて" name="type"></el-checkbox>
        <el-checkbox label="Bサービスについて" name="type"></el-checkbox>
        <el-checkbox label="Cサービスについて" name="type"></el-checkbox>
        <el-checkbox label="その他" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="どの製品について" prop="region">
      <el-select v-model="ruleForm.region" placeholder="どの製品について">
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
      <el-input type="textarea" v-model="ruleForm.contactBody"></el-input>
    </el-form-item>

    <el-form-item label prop="agree">
      <el-checkbox label="個人情報の保持の同意" name="agree" v-model="ruleForm.agree"></el-checkbox>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem } from "element-ui";
import { Button, Select } from "element-ui";

export default {
  name: "HelloWorld",
  data() {
    return {
      ruleForm: {
        name: "",
        kana: "",
        company: "",
        mailaddress: "",
        postal: "",
        address: "",

        type: [],
        resource: "",
        desc: "",
        title: "",
        contactBody: "",
        resource: "",
        agree: true
      },
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
            message: "個人情報の保持の同意",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  props: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
