// 项目js的入口文件

import Vue from 'vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';
// 导入扩展图标样式
// import './lib/mui/css/icons-extra.css'

// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'
import app from './App.vue';
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})



