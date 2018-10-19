<template>
  <div>
    <router-link class="photoList" to='/picture/pictureInfo' tag="ul">
      <li v-for="item in photoList" :key="item.channel_id">
        <img v-lazy="item.cover_middle">
        <div>{{ item.name }}</div>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: []
    };
  },
  created() {
    this.getphotoList();
  },
  methods: {
    getphotoList() {
      this.$http
        .get("http://api.jirengu.com/fm/getChannels.php")
        .then(result => {
          // console.log(result.body);
          this.photoList = result.body.channels;
        });
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
</style>

