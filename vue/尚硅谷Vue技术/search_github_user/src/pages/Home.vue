<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>

      </ul>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home组件挂载完毕了', this)
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }

};
</script>

<style></style>