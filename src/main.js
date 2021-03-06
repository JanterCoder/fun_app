// 项目js的入口文件
import Vue from 'vue';

// 1.1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);

// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
// 图片懒加载必须是全局注册，不能按需引入
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式
import './lib/mui/css/mui.css';
// import './lib/mui/js/mui.min.js';
// 导入扩展图标样式
// import './lib/mui/css/icons-extra.css';


import moment from 'moment';
import 'moment/locale/zh-cn';
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD  HH:mm:ss') {
  // return moment(dataStr).format(pattern);
  return moment(dataStr, pattern).fromNow();
})

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// import store from './store.js';

// 1.3 导入自己的 router.js 路由模块
import router from './router.js';
import app from './App.vue';
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  // store
})



