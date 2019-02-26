
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">HOME</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="info" to="contact">
        <v-icon>info</v-icon>お問い合わせ
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      //
    };
  }
};
</script>


<style>
</style>




