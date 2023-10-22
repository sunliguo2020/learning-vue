<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
      <button @click="searchUsers">查询</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "search",
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    searchUsers(){
      if (!this.keyWord) {
        alert('关键字不能为空');
        return
      }
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response=>{
          console.log('请求成功了',response.data.items)
          this.$bus.$emit('getUsers',response.data.items)
        },
        error=>{
          console.log('请示失败了',error.message)
        }
      )
    }
  }
};
</script>

<style>
</style>