<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label for>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label for>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label for>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label for>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label for>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label for>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label for>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: [
        "The React Rooster",
        "The Angular Avenger",
        "The Vue Vindicator"
      ]
    };
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
