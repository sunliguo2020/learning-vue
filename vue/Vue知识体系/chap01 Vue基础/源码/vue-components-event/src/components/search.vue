<template>

    <input type="text" v-model="search">
</template>

<script>
export default {
  name: "search",
  data(){
    return {
        search:''
    }
  },
  watch:{
    search(newValue,oldValue){
        console.log(newValue)
        this.$emit('searchEvent',newValue)
    }
  }
};
</script>

<style>
</style>