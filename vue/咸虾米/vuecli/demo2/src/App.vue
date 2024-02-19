<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </nav>
    <h1>新视觉实训基地{{ name }}</h1>
    <!-- 第3步 使用组件 -->
    <Itembox></Itembox>
    <!-- <router-view/> -->
  </div>
</template>
<script>
//第1步：引入组件
import Itembox from "@/components/ItemBox";
export default {
  data() {
    return {
      name: "张三"
    };
  },
  //第2步：注入组件
  components: {
    Itembox
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
