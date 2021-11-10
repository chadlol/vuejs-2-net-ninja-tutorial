<template>
  <div v-theme:column="themeType" id="list-blogs">
    <h1>List Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search...">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <hr>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data() {
    return {
      blogs: [],
      themeType: 'narrow',
      search: ''
    }
  },
  methods: {},
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(
      data => {
        this.blogs = data.body.slice(0,10);
      }
    );
  },
  computed: {

  },
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    },
    snippet(val) {
      return val.slice(0,100);
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = '#' + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
 #list-blogs {
   max-width: 800px;
   margin: 1rem auto;
 }

 .single-blog {
   padding: 20px;
   margin: 20px 0;
   box-sizing: border-box;
   transition: all 0.15s ease;
 }

 .single-blog:hover {
   background-color: #eee;
 }
</style>
