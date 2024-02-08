<template>
  <div>
    <ul>
      <li v-for="m of messageList" :key="m.id">
        <!-- 跳转路由并携带query参数 to字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

        <!-- 跳转路由并携带query参数 to对象写法 -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "孙婉贻001" },
        { id: "002", title: "孙梓怡002" },
        { id: "003", title: "孙立国003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      // console.log(this.$router)
      this.$router.push({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      // console.log(this.$router)
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>