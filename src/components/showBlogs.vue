<template>
  <div v-theme:column id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link :to="`/blog/${blog.id}`">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.blogs = res.body.slice(0, 10);
    });
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  background: #eee;
}
</style>
