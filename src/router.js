import VueRouter from 'vue-router';

import News from './components/tabbar/News.vue';
import Picture from './components/tabbar/Picture.vue';
import Service from './components/tabbar/Service.vue';
import Myself from './components/tabbar/Myself.vue';
import NewsInfo from './components/NewsInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/news' },
    { path: '/news', component: News },
    { path: '/picture', component: Picture },
    { path: '/service', component: Service },
    { path: '/myself', component: Myself },
    { path: '/news/newsInfo/:id', component: NewsInfo}
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router;