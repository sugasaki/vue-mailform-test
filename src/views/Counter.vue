<template>
  <div class="about">
    <h1>This is an counter page</h1>

    <el-button type="primary" v-on:click="increment">+</el-button>
    <el-button type="danger" v-on:click="decrement">-</el-button>
    <el-button type="primary" v-on:click="increment_add">+2</el-button>
    <el-button type="primary" v-on:click="increment2(2)">+2</el-button>

    <h2>{{ count }}</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "about",
  components: {},
  computed: {
    count() {
      return this.$store.state.counter.count;
    }
  },
  methods: {
    ...mapActions("counter", [
      "increment", // -> this.increment()
      "increment2", // -> this.increment2()
      "decrement" // -> this.decrement()
    ]),
    increment_add: function() {
      this.$store.dispatch("counter/increment2", 2);
      //console.log(this.$store.state.counter);
    }
  }
};
</script>
