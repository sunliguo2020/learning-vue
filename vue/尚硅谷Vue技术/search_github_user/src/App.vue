<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面跳转 -->
          <!-- <a href="" class="list-group-item">About</a>
          <a href="" class="list-group-item active">Home</a> -->

          <!--Vue中借助router-link实现路由的跳转  -->
          <router-link class="list-group-item " active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item " active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';

export default {
  name: "App",
  components: {
    Banner
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