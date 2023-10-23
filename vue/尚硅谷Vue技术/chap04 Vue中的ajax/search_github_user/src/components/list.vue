<template>
  <div class="row">
    <h3 v-if="usersTotal">展示{{ usersTotal }}位用户</h3>
    <h3 v-if="!info.isFirst && !usersTotal">没有搜到相关用户</h3>
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" v-for="item of info.users" :key="item.login" class="card">
      <a :href="item.html_url">
        <img :src="item.avatar_url" alt="" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中。。。</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
     info:{
      isFirst: true,
      isLoading: false,
      errMsg: "",
      users: [],
     }
    };
  },
  methods: {
    getUsers(user) {
      console.log("我是list组件，收到了数据：", user);
      this.users = user;
    },
  },
  computed: {
    usersTotal() {
      return this.info.users.length;
    },
    isShow() {
      return !this.info.users.length;
    },
  },
  mounted() {
    // this.$bus.$on('getUsers',this.getUsers)

    this.$bus.$on("updateListDate", (dataObj) => {
      // console.log("我是list组件，收到了数据：", users);
      this.info = dataObj
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>