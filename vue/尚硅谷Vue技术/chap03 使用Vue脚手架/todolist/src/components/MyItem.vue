<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反了原则，因为修改了props。 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收todo对象
  props: ["todo", ],
  mounted() {
    // console.log(this.todo);
  },
  methods: {
    //勾选或者取消勾选
    handleCheck(id) {
      console.log('item组件勾选或者取消勾选',id)
      // this.checkTodo(id);
      console.log(this.$bus.$emit('checkTodo'))
      this.$bus.$emit('checkTodo',id)
    },
    //删除一个todo
    handleDelete(id) {
      if (confirm("确认要删除吗？")) {
        // alert(id)
        // this.deleteTodo(id);
        // console.log(this)
        // this.deleteTodo(id);
        this.$bus.$emit('deleteTodo',id)
      }
    },
  },
};
</script>

<style scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>