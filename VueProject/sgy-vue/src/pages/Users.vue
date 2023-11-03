<template>
  <div>
    这是User组件
    <button @click="getUsersInfo">获取用户信息</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>地址</th>
          <th>头像</th>
          <th>标题4</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of dataShow" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.realname }}</td>
          <td>{{ item.address }}</td>
          <td><img :src="item.headImgUrl" /></td>
          <td>{{ item.sales_volume }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 分页展示 -->
    <input type="button" value="上一页" @click="prePage" />
    <span v-for="i in pageNum" @click="page(i)" :style="{ cursor: 'pointer', margin: '10px' }" :key="i.index">{{ i
    }}</span>
    <input type="button" value="下一页" @click="nextPage" />

    <h3>饿了么展示</h3>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="realname" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      results: [],
      pageSize: 10, // 每页显示数量
      pageNum: 1, // 共几页=所有数据/每页现实数量
      currentPage: 0, // 默认当前显示第一页
    };
  },
  methods: {
    getUsersInfo() {
      axios.get("http://127.0.0.1:8000/api/users/").then(
        (response) => {
          console.log("请求成功了", response.data);
          this.results = response.data.results;
          //   console.log(typeof this.results)
          this.data = response.data.results;
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    // 点击页码
    page(i) {
      this.currentPage = i;
      this.dataShow = this.totalPage[i - 1];
    },
  },
  created() {
    this.getUsersInfo();
  },
  computed: {
    //所有分页的数据
    totalPage() {
      //计算有多少页数据，默认为1
      this.pageNum = Math.ceil(this.results.length / this.pageSize) || 1;

      var totalPage = [];
      // 循环页面
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
        totalPage[i] = this.results.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      return totalPage;
    },
    //当前显示的数据
    dataShow: {
      get() {
        // 获取到数据后默认显示第一页内容
        var dataShow = this.totalPage[this.currentPage];
        return dataShow;
      },
      set() { },
    },
    tableData() {
      return this.results;
    },
  },
  mounted() {
    console.log(this.results);
    this.getUsersInfo();
    console.log("this.totalPage", this.totalPage);
  },
};
</script>

<style>
img {
  width: 50px;
  height: auto;
}
</style>