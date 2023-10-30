<template>
  <div>
    <h3>Person展示</h3>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="idcard" label="身份证号"> </el-table-column>
      <el-table-column prop="link-phone1" label="联系电话"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Person",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getPersons() {
      axios.get("http://127.0.0.1:8000/api/person/").then(
        (response) => {
          console.log("请求成功了", response.data);
          this.results = response.data.results;
          //   console.log(typeof this.results)
          this.tableData = response.data.results;
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
  },
  mounted() {
    this.getPersons();
  },
};
</script>

<style>
</style>