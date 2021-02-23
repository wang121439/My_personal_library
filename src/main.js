import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
// import {Swipe, SwipeItem} from 'mint-ui'
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//导入MintUI组件
import MintUI from 'mint-ui';
//导入样式表文件
import 'mint-ui/lib/style.min.css';
//将MintUI注册为vue插件
Vue.use(MintUI);

//导入VantUI组件
import Vant from 'vant';
//导入样式表文件
import 'vant/lib/index.css';
//将VanUI注册为vue插件
Vue.use(Vant);

// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
