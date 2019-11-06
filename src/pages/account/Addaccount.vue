<template>
  <div>
    <h1>添加账号</h1>
    <el-form
      status-icon
      label-width="100px"
    >
      <el-form-item  label="账号" prop="name">
        <el-input v-model="acc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="pwdex" autocomplete="off"></el-input>
      </el-form-item>
      <p v-show="this.pwdyz" style="color:red;font-size:10px;margin-left:100px;">两次密码不一致</p>
      <div class="drop-down">
        <el-select  v-model="values" placeholder="选择用户组">
          <el-option
            v-for="item in options"
            :key="item.label"
            :label="item.label"
            :value="item.values"
          ></el-option>
        </el-select>
      </div>
      <el-form-item>
        <el-button type="primary" @click="clickadd">添加</el-button> 
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {addaccount} from '../../api/apis'
export default {
  data() {
    return {
        acc: "",
        pwd: "",
        pwdex: "",
        pwdyz:false,
      options: [
          {
          values: 0,
          label: '普通管理员'
          },
          {
            values: 1,
            label: '超级管理员'
          }, 
        ],
        values:0,


        
     
    };
  },
  methods: {
   clickadd(){
     if(this.pwd!==this.pwdex){
       this.pwdyz=true;
       return
     }else{
       this.pwdyz=false
     }
      if(this.acc!=''&this.pwd!=''&this.values!=''){

      }else{
        return
      }
     addaccount(this.acc,this.pwd,this.values).then(res=>{
       if(res.data=='ok'){
          this.$message({
          message: '添加账号成功',
          type: 'success'
        });
       }else{
         this.$message.error('添加失败');
       }
     })
   }
  }
};
</script>

<style  scoped>
.el-form-item {
  width: 500px;
}
.drop-down{
  margin: 30px 100px;
}

</style>