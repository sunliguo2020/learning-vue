<template>
  <div>
    <h3>Main 搜索内容为:{{ search }}</h3>
    <search @searchEvent="searchData"></search>
    <br>
    <button @click="searchData('ceshi')">ceshi </button>
  </div>
</template>

<script>
import search from "./search.vue";

export default {
  name: "main",
  data() {
    return { search: "" };
  },
  methods: {
    searchData(data) {
      console.log("我是main组件，收到了数据", data);
      this.search = data;
    },
  },
  components: {
    search,
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>