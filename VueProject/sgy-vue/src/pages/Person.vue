<template>
  <div>
    <h3>Person展示</h3>
    <span>每页显示数量 </span>
    <select name="" id="" v-model="pageSize">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
      <option :value="20">20</option>
    </select>
    <!-- 搜索 -->
    <div class="search">
            <el-input @change="searchInput" 
                        v-model="searchData" 
                        aria-placeholder="请输入内容"
                        clearable
                        ></el-input>
            <el-button type="primary">查询</el-button>
        </div>
    <el-table :data="tableData" style="width: 100%" :stripe="true">
      <el-table-column prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="idcard" label="身份证号"> </el-table-column>
      <el-table-column prop="link-phone1" label="联系电话"> </el-table-column>
    </el-table>
    <Mypagination :total="total" :pageSize="pageSize" @changePage="getPersons"></Mypagination>
  </div>
</template>

<script>

import Mypagination from '../components/Mypagination.vue';

export default {
  name: "Person",
  components: {
    Mypagination
  },
  data() {
    return {
      tableData: [],
      total: 10,
      pageSize: 5,
      searchData:'',
    };
  },
  watch: {
    pageSize(newValue, oldValue) {
      this.changePage(newValue)
    }
  },

  methods: {
    //查询某页数据
    getPersons(page) {
      this.axios.get("http://127.0.0.1:8000/api/person/?size=" + this.pageSize + "&page=" + page).then(
        (response) => {
          console.log("请求成功了", response.data);
          this.results = response.data.results;
          this.total = response.data.count
          //   console.log(typeof this.results)
          this.tableData = response.data.results;
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
    //获取某页数据
    changePage(num) {
      this.getPersons(num)
    },
    searchInput(){
      this.axios.get('http://127.0.0.1:8000/api/person/?search='+this.searchData).then(
        (res)=>{
          console.log("搜索请求成功了", res.data);
          this.tableData = res.data.results;
          this.total = res.data.count;
        }
      )
    }
  },
  created() {
    this.getPersons(1);
  },
};
</script>

<style>
h3 {
  text-align: center;
}
</style>