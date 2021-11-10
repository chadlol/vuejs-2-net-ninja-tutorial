import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
})

// Filters

Vue.filter('to-uppercase',
    val => val.toUpperCase()
);

Vue.filter('snippet',
  val => val.slice(0,100)
);

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
  render: h => h(App)
})
