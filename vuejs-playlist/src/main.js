import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Global Directives
Vue.directive('theme', {
  bind(el, binding, vnode){
    let themeType = binding.value;

    if(themeType == 'wide') {
      el.style.maxWidth = '1200px'
    }
    else if (themeType == 'narrow') {
      el.style.maxWidth = '560px'
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
