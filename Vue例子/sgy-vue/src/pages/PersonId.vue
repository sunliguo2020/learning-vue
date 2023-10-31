<template>
    <div>
        <div class="header">
            <el-input @change="searchInput" 
                        v-model="searchData" 
                        aria-placeholder="请输入内容"
                        clearable
                        ></el-input>
            <el-button type="primary">查询</el-button>
        </div>
        <h3>PersonID展示</h3>
        <!-- 展示区域 -->
        <el-table :data="tableData" style="width: 100%" :stripe="true">
            <el-table-column prop="id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="idcard" label="身份证号" width="180">
            </el-table-column>
            <el-table-column prop="personid" label="PersonID">
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <Mypagination :total="total" :pageSize="pageSize" @changePage="getPersonId"></Mypagination>
    </div>
</template>

<script>
import Mypagination from '@/components/Mypagination.vue';

export default {
    components: {
        Mypagination
    },
    data() {
        return {
            tableData: [],
            //数据总量
            total: 10,
            //每页条数
            pageSize: 10,
            searchData: ''
        }
    },
    methods: {
        /**
         * 按照页码请求数据
         * page 页码
         */
        getPersonId(page) {
            this.axios.get("http://127.0.0.1:8000/api/personid/?size=" + this.pageSize + "&page=" + page).then(
                (response) => {
                    console.log("请求成功了", response.data);
                    this.total = response.data.count
                    this.tableData = response.data.results;
                },
                (error) => {
                    console.log("请求失败了", error.message);
                }
            );
        },
        /**
         * 搜索
         */
        searchInput(val) {
            console.log('搜索---', val)
            //url http://127.0.0.1:8000/api/personid/?search=3112
            this.axios.get('http://127.0.0.1:8000/api/personid/?search=' + this.searchData).then(
                (response) => {
                    console.log("搜索请求成功了", response.data);
                    this.tableData = response.data.results;
                    this.total = response.data.count;

                }
            )

        }
    },
    created() {
        this.getPersonId(1);
    }
}
</script>

<style></style>