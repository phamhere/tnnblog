export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.includes(this.search);
      });
    }
  }
};
