<template>
  <div>
    <h1>账号管理</h1>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="账号" prop="date"></el-table-column>
      <el-table-column label="密码" prop="name"></el-table-column>
      <el-table-column label="管理员权限" prop="name"></el-table-column>
      <el-table-column align="right">
        <template slot="header" >
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        
      ],
      search: ""
    };
  },
  created(){
      
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>