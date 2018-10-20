<template>
  <div class="appContainer">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="乐趣生活">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <router-view></router-view>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-alias" to="/news">
        <span class="mui-icon icon-xinwen"></span>
        <span class="mui-tab-label">资讯</span>
      </router-link>
      <router-link class="mui-tab-item-alias" to="/picture">
        <span class="mui-icon icon-tupian1">
          <!--<span class="mui-badge">9</span>--></span>
        <span class="mui-tab-label">图片</span>
      </router-link>
      <!-- <router-link class="mui-tab-item-alias" to="/service">
        <span class="mui-icon icon-fuwu"></span>
        <span class="mui-tab-label">服务</span>
      </router-link> -->
      <router-link class="mui-tab-item-alias" to="/user">
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
    this.flag =
      this.$route.path === "/news" ||
      this.$route.path === "/picture" ||
      this.$route.path === "/user" ||
      this.$route.path === "/service"
        ? false
        : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      // console.log(this);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (
        newVal === "/news" ||
        newVal === "/picture" ||
        newVal === "/user" ||
        newVal === "/service"
      ) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import './lib/font/font.css';
.appContainer {
  padding-top: 40px;
  padding-bottom: 50px;
  .mint-header {
    background-color: #098eff;
    z-index: 99;
  }
  .mui-bar {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
  // 该类名，解决 tabbar 点击无法切换的问题
  .mui-bar-tab .mui-tab-item-alias.mui-active {
    color: #007aff;
  }

  .mui-bar-tab .mui-tab-item-alias {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }

  .mui-bar-tab .mui-tab-item-alias .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mui-bar-tab .mui-tab-item-alias .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

