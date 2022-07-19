<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="sex_text" label="性别" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="number" label="学号" align="center"></el-table-column>
            <el-table-column prop="class" label="班级" align="center"></el-table-column>
            <el-table-column prop="state_text" label="状态" align="center"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template>
                    <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { students } from '@/api/api.js'
export default {
    data() {
        return {
            tableData: [],
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData(params) {
            students(params)
                .then(res => {
                    console.log(res, "res");
                    if (res.data.status === 200) {
                        this.tableData = res.data.data
                        this.tableData.forEach(element => {
                            // 尽量不要修改原数据
                            element.sex === 1 ? element.sex_text = '男' : element.sex_text = '女';
                            element.state === "1" ? (element.state_text = "已入学") : (element.state === "2" ? (element.state_text = "未入学") : (element.state_text = "休学中"));
                        });
                    }
                })
        }
    }
}
</script>