<template>
  <div class="appContainer">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="最新资讯">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <router-view></router-view>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/news">
				<span class="mui-icon icon-xinwen"></span>
				<span class="mui-tab-label">资讯</span>
			</router-link>
			<router-link class="mui-tab-item" to="/picture">
				<span class="mui-icon icon-tupian1"><!--<span class="mui-badge">9</span>--></span>
				<span class="mui-tab-label">图片</span>
			</router-link>
			<router-link class="mui-tab-item" to="/service">
				<span class="mui-icon icon-fuwu"></span>
				<span class="mui-tab-label">服务</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myself">
				<span class="mui-icon icon-gerentouxiang"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

     
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/news" ? false : true;
  },
  methods: {
   goBack() {
      this.$router.goBack(-1);
   }
  },
  watch: {
     "$route.path": function (newVal) {
       if (newVal ==='/home') {
         this.flag = 'false'
       }else{
         this.flag = 'true'
       }
     }
   }
};
</script>

<style lang="scss" scoped>
.appContainer {
  padding-top: 40px;
  padding-bottom: 50px;
  .mint-header {
    background-color: #098eff;
  }
  .mui-bar {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
}
</style>

