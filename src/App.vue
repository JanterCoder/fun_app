<template>
  <div class="appContainer">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="最新资讯">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <h1>根组件</h1>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
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
    this.flag = this.$route.path === "/home" ? false : true;
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

