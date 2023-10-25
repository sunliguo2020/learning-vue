<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <!-- <select name="" id="" v-model.number="n"> -->
    <select name="" id="" v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      :
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当为奇数时再加</button>
    <button @click="increamentWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //当前用户选择的数字
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("jia", this.n);
    },
    decrement() {
      this.$store.dispatch("jian", this.n);
    },
    incrementOdd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch("jia", this.n);
      }
    },
    increamentWait() {
      setTimeout(() => {
        this.$store.dispatch("jia", this.n);
      }, 500);
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 5px;
}
</style>