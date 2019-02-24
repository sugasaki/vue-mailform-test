<template>
  <div class="contact">
    <el-row>
      <el-col :span="12">
        <contact-form/>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>



<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact",
  components: {
    ContactForm
  },
  methods: {}
};
</script>