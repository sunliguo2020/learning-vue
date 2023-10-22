<template>
  <div class="row">
    <div v-for="item of users" :key='item.login' class="card">
      <a :href="item.html_url">
        <img :src="item.avatar_url" alt="" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      users: [],
    };
  },
  methods:{
    getUsers(user){
      console.log('我是list组件，收到了数据：',user)
      this.users = user
    }
  },
  mounted(){
    // this.$bus.$on('getUsers',this.getUsers)

    this.$bus.$on('getUsers',(users)=>{
      console.log('我是list组件，收到了数据：',users);
      this.users = users
    })
  }
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
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>