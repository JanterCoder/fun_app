<template>
  <div class="reply-conntainer">
    <div class="count">{{replyList.length}}条回复</div>
    <div class="reply-list">
      <div class="reply-item" v-for="(item, i) in replyList" :key="item.id">
        <div class="reply-title">
          <router-link :to="'/userInfo/' + item.author.loginname" class="user" tag="div" >
            <img :src="item.author.avatar_url">
            <span class="loginname">{{ item.author.loginname }}</span>
          </router-link>
          <span class="time">{{ i+1 }}楼·{{ item.create_at | dateFormat('YYYY-MM-DD HH:mm') }}</span>
          <span class="author" v-show="item.author.loginname == newsInfo.author.loginname ? true : false">作者</span>
        </div>
        <div class="reply-body" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // id: this.$route.params.id,
      replyList: []
    };
  },
  created() {
    this.getReplyList();
  },
  methods: {
    getReplyList() {
      this.$http
        .get("https://cnodejs.org/api/v1/topic/" + this.id)
        .then(result => {
          if (result.body.success == true) {
            this.replyList = result.body.data.replies;
            // 每当获取新数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            // this.replyList = this.replyList.concat(result.body.data.replies);
          } else {
            Toast("获取资讯详情失败");
          }
        });
    }
  },
  props: ["id", "newsInfo"]
};
</script>

<style lang="scss">
.reply-conntainer {
  font-size: 14px;
  .count {
    padding: 0 10px;
    background-color: #f5f5f5;
    color: #666;
    height: 36px;
    line-height: 36px;
  }
  .reply-list {
    .reply-item {
      font-size: 12px;
      border-bottom: 1px solid #dedede;
      padding: 10px;
      .user {
        display: inline-block;
        img {
          width: 22px;
          height: 22px;
          border-radius: 3px;
          vertical-align: top;
        }
        .loginname {
          padding-left: 5px;
          font-weight: 600;
          color: #333;
        }
      }
      .time {
        color: #098eff;
      }
      .author {
        padding: 3px 3px;
        background-color: #098eff;
        color: #fff;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .reply-body {
      line-height: 26px;
      margin-top: 6px;
      img {
        width: 100%;
      }
    }
  }
}
</style>

