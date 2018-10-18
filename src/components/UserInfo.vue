<template>
  <div class="userInfoContainer">
    <div class="userInfo">
      <img :src="userInfo.avatar_url">
      <div>
        <span>{{ userInfo.loginname }} &nbsp;<i>1412积分</i></span>
        <p>注册于: {{ userInfo.create_at | dateFormat1('YYYY-MM-DD HH:mm') }}</p>
      </div>
    </div>
    <div class="topic">
      <p class="title">最近主题</p>
      <div class="body" v-for="item in userInfo.recent_topics" :key="item.id">
        <router-link :to="'/news/newsInfo/' + item.id" tag="div">
          <h4 class='mui-ellipsis'>{{ item.title }}</h4>
          <p>
            <span>{{ item.author.loginname }}</span>
            <span>{{ item.last_reply_at | dateFormat('YYYY-MM-DD HH:mm') }}</span>
          </p>
        </router-link>
      </div>
    </div>
    <div class="topic">
      <p class="title">最近回复</p>
      <div class="body" v-for="item in userInfo.recent_replies" :key="item.id">
        <router-link :to="'/news/newsInfo/' + item.id" tag="div">
          <h4 class='mui-ellipsis'>{{ item.title }}</h4>
          <p>
            <span>{{ item.author.loginname }}</span>
            <span>{{ item.last_reply_at | dateFormat('YYYY-MM-DD HH:mm') }}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import moment from "moment";
import "moment/locale/zh-cn";

export default {
  data() {
    return {
      loginname: this.$route.params.loginname,
      userInfo: {}
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$http
        .get("https://cnodejs.org/api/v1/user/" + this.loginname)
        .then(result => {
          if (result.body.success == true) {
            this.userInfo = result.body.data;
          } else {
            Toast({
              message: "用户详情失败",
              position: "middle",
              duration: 1000
            });
          }
        });
    }
  },
  //定义一个私有的过滤器（局部）
  filters: {
    dateFormat1: function(dataStr, pattern = "YYYY-MM-DD  HH:mm:ss") {
      return moment(dataStr).format(pattern);
      // return moment(dataStr, pattern).fromNow();
    }
  }
};
</script>

<style lang="scss" scoped>
.userInfoContainer {
  font-size: 14px;
  .userInfo {
    display: flex;
    padding: 10px;
    margin: 12px 0 2px;
    box-shadow: 0px 0px 5px #dedede;
    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      vertical-align: top;
      margin-right: 10px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
    i {
      font-style: normal;
      font-size: 12px;
      color: #666;
    }
  }
  .topic {
    .title {
      padding: 0 10px;
      color: #333;
      height: 36px;
      line-height: 36px;
      background-color: #f5f5f5;
      margin: 0;
      border-bottom: 1px solid #dedede;
    }
    .body {
      padding: 10px;
      border-bottom: 1px solid #dedede;
      .mui-ellipsis {
        font-size: 14px;
        margin-bottom: 8px;
      }
      p {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #666;
        margin: 0;
      }
    }
  }
}
</style>
