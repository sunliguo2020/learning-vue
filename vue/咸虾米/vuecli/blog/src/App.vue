<template>
  <div id="app">
    <HdView></HdView>
    <div class="main">
      <ShowView/>
    </div>
    <FtView/>
  </div>
</template>
<script>
import HdView from "./components/HdView.vue";
import FtView from "./components/FtView.vue";
import ShowView from "./components/ShowView.vue";
export default {
  components: {
    HdView,
    FtView,
    ShowView
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
#app {
  width:1200px;
  border:1px solid #41b883;
  margin:0 auto;
}
.main{
  min-height:200px;

}
</style>
