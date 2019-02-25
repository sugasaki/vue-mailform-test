<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/moyai.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Moyai</h1>
        <v-spacer></v-spacer>

        <h2>お問い合わせは以下からお願いします</h2>

        <div>
          <v-btn color="info" to="contact">お問い合わせ</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
};
</script>


<style>
.link {
  color: #ffffff;
}
</style>



