<template>
  <div class="myContainer">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <router-link class="mui-navigate-right" to="/user/login">
          <img class="mui-media-object mui-pull-left head-img" id="head-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539697807128&di=380cf5d559d3db6adcd2dd89141c8419&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01786557e4a6fa0000018c1bf080ca.png">
          <div class="mui-media-body">
            janter
            <!-- {{ this.$route.params.loginname }} -->
            <p class='mui-ellipsis slogan'>登录乐趣开启新生活</p>
          </div>
        </router-link>
      </li>
    </ul>

    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#account" class="mui-navigate-right">账号与安全</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#notifications" class="mui-navigate-right">新消息通知</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#privacy" class="mui-navigate-right">隐私</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#general" class="mui-navigate-right">通用</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#about" class="mui-navigate-right">关于乐趣 <i class="mui-pull-right update">V0.0.1</i></a>
      </li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" style="text-align: center;">
        <a>退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.myContainer {
  font-size: 14px;
  ul {
    box-shadow: 0px 0px 5px #dedede;
    margin: 12px 0;
    &.mui-table-view:before {
      background-color: #fff;
    }
    &.mui-table-view:after {
      background-color: #fff;
    }
    i {
      font-style: normal;
      color: #999;
    }
    .slogan {
      font-size: 12px;
    }
  }
}
</style>

