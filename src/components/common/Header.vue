<template>
<div class="header">
    <el-header>
        <div class="title">通用管理系统</div>
        <div>{{name}}</div>
    </el-header>
</div>
</template>
<script>
import { getToken } from '@/utils/setToken.js'
export default {
    data() {
        return {
            name:''
        }
    },
    created() {
        console.log('this.name',this.name)
        this.name = getToken('username')
    }
}
</script>
<style lang="scss" scoped>
.header {
    .el-header {
        background-color: #2578b5;
        color:#fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;/* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
        .title {
            width:200px;
            font-size: 24px;
        }
    }
}
</style>