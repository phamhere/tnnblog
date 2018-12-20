<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";

export default {
  data() {
    return {};
  },
  components: {
    "add-blog": addBlog
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
