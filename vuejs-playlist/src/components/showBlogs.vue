<template>
  <div v-theme:column="themeType" id="show-blogs">
    <h1>Show Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search...">
    <div v-for="blog in filteredBlogs" class="single-blog">

      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 >{{ blog.title | to-uppercase }}</h2>
      </router-link>

      <article>
        {{ blog.content | snippet }}
      </article>
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
    this.$http.get('https://net-ninja-vue-playlist-default-rtdb.firebaseio.com/posts.json')
      .then(
      data => {
        return data.json();
        // this.blogs = data.body.slice(0,10);
      }
    ).then(
      data => {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key])
        }
        console.log(blogsArray);
        this.blogs = blogsArray;
      });
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
 #show-blogs {
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
