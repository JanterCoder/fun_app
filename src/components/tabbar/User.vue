<template>
  <div class="myContainer">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <div>
          <router-link class="mui-media-object mui-pull-left head-img" id="head-img" :to="'/userInfo/' + loginname" tag="div" v-if="loginname"><img :src="avatar_url"></router-link>
          <div class="mui-media-object mui-pull-left head-img" id="head-img" v-else>
            <router-link to="/user/login"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539697807128&di=380cf5d559d3db6adcd2dd89141c8419&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01786557e4a6fa0000018c1bf080ca.png"></router-link>
          </div>
          <div class="mui-media-body">
            <router-link :to="'/userInfo/' + loginname" tag="span" v-if="avatar_url">{{loginname}}</router-link>
            <span v-else>
              <router-link to="/user/login" tag="span">点击登录</router-link>
            </span>
            <p class='mui-ellipsis slogan'>登录乐趣开启新生活</p>
          </div>
        </div>
      </li>
    </ul>

    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="javascript:;" class="mui-navigate-right">账号与安全</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="javascript:;" class="mui-navigate-right">新消息通知</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="javascript:;" class="mui-navigate-right">意见反馈</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="javascript:;" class="mui-navigate-right">通用</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="javascript:;">当前版本 <i class="mui-pull-right">V0.0.1</i></a>
      </li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" style="text-align: center;">
        <a @click="logout">退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginname: "",
      avatar_url: ""
    };
  },
  mounted() {
    const userInfo = JSON.parse(localStorage.getItem('loginData'));
    if (userInfo) {
      this.loginname = userInfo.loginname;
      this.avatar_url = userInfo.avatar_url;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loginData');
      location.reload();
    }
  }
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
    .head-img {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
      }
    }
  }
}
</style>

