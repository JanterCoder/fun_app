<template>
  <div class="newsInfo">
    <div class="main">
      <h3 class="title">{{ newsInfo.title }}</h3>

      <div class="subtitle">
        <div class="avatar">
          <img :src="newsInfo.author.avatar_url">
          <span>{{ newsInfo.author.loginname }}</span>
        </div>
        <span>发布于 {{ newsInfo.create_at | dateFormat('YYYY-MM-DD  HH:mm') }}</span>
      </div>

      <div class="content" v-html="newsInfo.content"></div>
    </div>
    
    <!-- 回复子组件 -->
    <reply :id = "this.id" :newsInfo = "this,newsInfo"></reply>
  </div>
</template>

<script>
// 导入 回复 子组件
import reply from "./subcomponents/reply.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http
        .get("https://cnodejs.org/api/v1/topic/" + this.id)
        .then(result => {
          if (result.body.success == true) {
            this.newsInfo = result.body.data;
          } else {
            Toast("获取资讯详情失败");
          }
        });
    }
  },
  components: {
    reply
  }
};
</script>

<style lang="scss">
.newsInfo {
  .main {
    padding: 10px;
    .title {
      font-size: 20px;
      margin-bottom: 10px;
      text-align: center;
      line-height: 32px;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      .avatar {
        img {
          width: 22px;
          height: 22px;
          border-radius: 3px;
          vertical-align: top;
        }
        span {
          display: inline-block;
          color: #666;
          font-size: 14px;
          line-height: 22px;
        }
      }
      span {
        font-size: 14px;
        color: #999;
        line-height: 22px;
      }
    }
    .content {
      margin-top: 10px;
      font-size: 14px;
      line-height: 26px;
      img {
        width: 100%;
      }
    }
  }
}
</style>

