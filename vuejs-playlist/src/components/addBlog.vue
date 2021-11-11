<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <div v-if="submitted">Blog post successfully submitted!</div>
    <form v-if="!submitted">
      <label>Blog Title: </label>
      <input type="text" v-model.lazy="blog.title" required>

      <label>Blog Content: </label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas
         <input type="checkbox" value="ninjas" v-model="blog.categories"></label>
        <label>Wizards
         <input type="checkbox" value="wizards" v-model="blog.categories"></label>
        <label>Mario
         <input type="checkbox" value="mario" v-model="blog.categories"></label>
        <label>Luigi
          <input type="checkbox" value="luigi" v-model="blog.categories"></label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </div>
      <button v-on:click.prevent="post">Add Blog Post</button>
    </form>

    <div v-if="!submitted" id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: {{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>


<script>
export default {
  components: {

  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Chad', 'The Net Ninja', 'The Vue Vindicator'],
      submitted: false
    }
  },
  methods: {
    post() {
      this.$http.post('https://net-ninja-vue-playlist-default-rtdb.firebaseio.com/posts.json', this.blog).then(data => {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 0.5rem;
  }

  #checkboxes label {
    display: inline-block;
  }
</style>
