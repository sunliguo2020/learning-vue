<template>
  <div class="container">

    <category title="游戏">
      <template scope="atguigu">
        <ul >
        <li v-for="(item, index) of atguigu.games" :key="index">{{ item }}</li>
      </ul>
      </template>
     
    </category>
    <category title="游戏">

      <template scope="{games}">
        <ul >
        <li style="color:red" v-for="(item, index) of games" :key="index">{{ item }}</li>
      </ul>
      </template>
    </category>
  
    <category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(item, index) of games" :key="index">{{ item }}</h4>
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