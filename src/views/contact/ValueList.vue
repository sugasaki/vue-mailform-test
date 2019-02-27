<template>
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
        <v-list-tile-sub-title>{{agreement}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>


<script>
export default {
  computed: {
    product() {
      return this.$store.getters["contact/product"];
    },
    agreement() {
      return this.values.agree ? "同意する" : "同意しない";
    },
    values() {
      //console.log("getters", this.$store.getters);
      //console.log("values", this.$store.getters["contact/values"]);
      return this.$store.getters["contact/values"];
    }
  }
};
</script>
