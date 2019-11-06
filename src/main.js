import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import './assets/comment.css'
import {token} from './api/apis'
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  if(to.path!='/'){
    token(localStorage.token).then((res)=>{
      if(res.data=='time'){
        next('/')
      }else{
        next()
      }
    })
  }else{
    next()
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
