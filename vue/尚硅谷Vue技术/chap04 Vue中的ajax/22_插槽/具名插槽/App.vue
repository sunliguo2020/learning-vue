<template>
  <div class="container">
    <category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="">更多美食</a>
    </category>

    <category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) of games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </category>
    <category title="电影">
      <video
        slot="center" controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer >
        <a href="#">经典</a>
        <a href="#">热门</a>
        <a href="#">推荐</a>
      </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>