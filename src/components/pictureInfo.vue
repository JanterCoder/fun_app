<template>
  <div class="picInfoContainer">
    <h4>“原创音乐日”再推6组新声</h4>
    <p>本周二“原创音乐日”再推6组新声！都是来自边疆，内蒙女孩@陈小彬的大世界 唱《对我来说》说走就走，新疆小伙阿尔达克Ardak 用暖民谣唱《暮归》。同为留学英国，某某水果 另类唱《乌鸦》，Jeff郑景仁 思乡颂《西关》。一样生活在上海，小小森林乐团 唱“白夜”暖歌， 陈致逸 玩直播搞“灵魂”创作。</p>

    <div class="thums">
      <!-- <vue-preview :slides="slide1"></vue-preview> -->
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" width="107" @click="$preview.open(index, list)" :key="item.src">
    </div>

    <p>怕黑就开灯，想念就联系。今天再大的事，到了明天就是小事；今年再大的事，到了明年就是故事。我们最多也就是个有故事的人，所以，人生就像是蒲公英，看似自由，却身不由己。有些事，不是不在意，而是在意了又能怎样。自己尽力了就好，人生没有如果，只有后果和结果。干了这一碗鸡汤，人生还是要继续。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "http://cloud.hunger-valley.com/music/public_fengge_liuxing.jpg-middle",
          w: 600,
          h: 400
        },
        {
          src: "http://cloud.hunger-valley.com/music/public_fengge_yaogun.jpg-middle",
          w: 600,
          h: 400
        },
        {
          src: "http://cloud.hunger-valley.com/music/public_fengge_qingyinyue.jpg-middle",
          w: 600,
          h: 400
        },
        {
          src: "http://cloud.hunger-valley.com/music/public_fengge_zhongguofeng.jpg-middle",
          w: 600,
          h: 400
        },
        {
          src: "http://cloud.hunger-valley.com/music/public_xinqing_huankuai.jpg-middle",
          w: 600,
          h: 400
        },
        {
          src: "http://cloud.hunger-valley.com/music/public_xinqing_shuhuan.jpg-middle",
          w: 600,
          h: 400
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.picInfoContainer {
  h4 {
    text-align: center;
    line-height: 40px;
  }
  p {
    text-indent: 2em;
    color: #333;
    margin: 0;
  }
  padding: 10px;
  .thums {
    margin: 16px 0;
    img {
      margin: 5px;
      vertical-align: middle;
    }
  }
}
</style>

