<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" @tap="getNewsList('')">
            全部
          </a>
          <a class="mui-control-item" @tap="getNewsList('good')">
            精华
          </a>
          <a class="mui-control-item" @tap="getNewsList('share')">
            分享
          </a>
          <a class="mui-control-item" @tap="getNewsList('ask')">
            问答
          </a>
          <a class="mui-control-item" @tap="getNewsList('job')">
            招聘
          </a>
          <a class="mui-control-item" @tap="getNewsList('dev')">
            测试
          </a>
        </div>
      </div>
    </div>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/news/newsInfo/' + item.id">
          <!-- <img class="mui-media-object mui-pull-left" :src="item.author.avatar_url"> -->
          <div class="lazyLoading mui-pull-left">
            <img class="mui-media-object" v-lazy="item.author.avatar_url">
          </div>
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
import { Toast } from "mint-ui";

import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList('');
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getNewsList(cateId) {
      this.$http.get("https://cnodejs.org/api/v1/topics?limit=40&tab=" + cateId).then(result => {
        if (result.body.success == true) {
          this.newsList = result.body.data;
        } else {
          Toast("获取资讯列表失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.mui-table-view {
  li {
    h4 {
      font-size: 14px;
      font-weight: 500;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
    .lazyLoading {
      width: 42px;
      height: 42px;
      margin-right: 10px;
      background-color: #f0f0f0;
      text-align: center;
      img {
        vertical-align: top;
        border-radius: 4px;
      }
      img[lazy="loading"] {
        width: 30px;
        height: 30px;
        margin-top: 6px;
      }
    }
  }
}
</style>


