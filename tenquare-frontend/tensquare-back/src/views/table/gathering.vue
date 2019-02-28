<template>
<div>
    <br>
    <el-form :inline="true">
        <el-form-item label="活动名称">
            <el-input v-model="searchMap.name"></el-input>
        </el-form-item>
        <el-form-item label="城市">
            <el-input v-model="searchMap.city"></el-input>
        </el-form-item>
        <el-form-item label="活动日期">
            <el-date-picker v-model="searchMap.startTime" type="date" placeholder="选择活动开始日期">
            </el-date-picker>
            <el-date-picker v-model="searchMap.endTime" type="date" placeholder="选择活动结束日期">
            </el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="fetchData()">查询</el-button>
        <el-button type="primary" @click="handleEdit('')">新增</el-button>
    </el-form>
    <el-table :data="list" style="width: 100%">
        <el-table-column prop="id" label="活动ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="活动名称" width="180">
        </el-table-column>
        <el-table-column prop="sponsor" label="主办方" width="180">
        </el-table-column>
        <el-table-column prop="address" label="活动地址" width="180">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row.id)" type="text" size="small">修改</el-button>
                <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <br>
    <el-pagination @size-change="fetchData" @current-change="fetchData" :current-page="currentPage" :page-sizes="[5, 10 ,20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="3">
    </el-pagination>
    <el-dialog title="编辑" :visible.sync="dialogVisible">
        <el-form ref="form" :model="entity" label-width="80px">
            <el-form-item label="活动名称">
                <el-input placeholder="活动名称" v-model="entity.name"></el-input>
            </el-form-item>
            <el-form-item label="活动地址">
                <el-input placeholder="活动地址" v-model="entity.address"></el-input>
            </el-form-item>
            <el-form-item label="开始日期">
                <el-input type="date" placeholder="活动开始时间" v-model="entity.startTime"></el-input>
            </el-form-item>
            <el-form-item label="结束日期">
                <el-input type="date" placeholder="活动结束时间" v-model="entity.endTime"></el-input>
            </el-form-item>
            <el-form-item label="报名截止">
                <el-input type="date" placeholder="报名截止时间" v-model="entity.enrollTime"></el-input>
            </el-form-item>
            <el-form-item label="选择城市">
                <el-select v-model="entity.city" placeholder="请选择">
                    <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动详情">
                <el-input type="textarea" rows="5" placeholder="活动详情介绍" v-model="entity.detail"></el-input>
            </el-form-item>
            <el-form-item label="是否可见">
                <el-switch active-value="1" inactive-value="0" v-model="entity.state"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSave()">保存</el-button>
                <el-button @click="dialogVisible = false">关闭</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</div>
</template>

<script>
import gatheringApi from "@/api/gathering";
import cityApi from '@/api/city';
export default {
    data() {
        return {
            list: [],
            totalPage: 0, //总页面数
            currentPage: 1, //当前页
            // pageSize: 10, //每页数据条数
            searchMap: {}, //查询条件
            dialogVisible: false,
            entity: {}, //编辑菜单绑定的实体对象  
            cityList: {}, //城市列表
            id: '' //用户操作的当前数据的id
        }
    },
    created() {
        this.fetchData()
        cityApi.getList().then(response => {
            this.cityList = response.data
        })
    },
    methods: {
        fetchData() {
            gatheringApi.search(this.currentPage, this.searchMap).then(response => {
                this.list = response.data
                this.totalPage = response.data.total
            })
        },
        handleSave() {
            gatheringApi.update(this.id, this.entity).then(response => {
                this.$message({
                    message: response.message,
                    type: (response.flag ? 'success' : 'warning')
                });
                if (response.flag) {
                    this.fetchData()
                }
            })
            this.dialogVisible = false
        },
        handleEdit(id) {
            this.dialogVisible = true
            this.id = id
            if (id != '') { //修改操作
                gatheringApi.findById(id).then(response => {
                    if (response.flag) {
                        this.entity = response.data
                    }
                })
            } else { //新增操作
                this.entity = {}
            }
        },
        handleDelete(id) {
            this.$confirm('是否确定要删除该条数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                gatheringApi.delete(id).then(response => {
                    this.$message({
                        message: response.message,
                        type: (response.flag ? 'success' : 'warning')
                    });
                    if (response.flag) {
                        this.fetchData()
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        }
    }
}
</script>
