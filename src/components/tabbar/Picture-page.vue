<template>
  <div class="page-loadmore">

    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :autoFill="false" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @translate-change="translateChange" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" ref="loadmore">

        <router-link class="photoList" to='/picture/pictureInfo' tag="ul">
          <li v-for="item in photoList" :key="item.url" class="page-loadmore-listitem">
            <img v-lazy="item.url">
            <div>{{ item.type }}</div>
          </li>
        </router-link>

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>

        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>

      </mt-loadmore>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: [],
      pageIndex: 2,
      // pageNum: 1,
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      translate: 0,
      moveTranslate: 0
    };
  },
  created() {
    this.getphotoList();
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    //上拉执行
    loadBottom() {
      setTimeout(() => {
        this.pageIndex++;
        this.getphotoList();
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    // 下拉执行
    loadTop() {
      setTimeout(() => {
        // this.getphotoList();
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },

    getphotoList() {
      this.$http
        .get("https://www.apiopen.top/meituApi?page=" + this.pageIndex)
        .then(result => {
          // console.log(result.body);
          this.photoList = this.photoList.concat(result.body.data);
        });
      this.scrollState = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.photoList {
  list-style: none;
  margin: 0;
  padding: 10px 12px 0;
  li {
    margin-bottom: 10px;
    position: relative;
    background-color: #f5f5f5;
    text-align: center;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  div {
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
  }
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}

.loading-background,
.mint-loadmore-top span {
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}
.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle;
}

.mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}

.page-loadmore-wrapper {
  overflow: auto;
}

.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>

