<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/news/newsInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.author.avatar_url">
						<div class="mui-media-body">
							<h4 class='mui-ellipsis'>{{ item.title }}</h4>
							<p>
                <span>作者: {{ item.author.loginname }}</span>
                <span>发布于 {{ item.create_at | dateFormat('YYYY-MM-DD HH:mm') }} </span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("https://cnodejs.org/api/v1/topics").then(result => {
        if (result.body.success == true) {
          this.newsList = result.body.data;
        } else {
          Toast("获取资讯列表失败！")
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h4 {
      font-size: 14px;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>


