<template>
  <div class="box">
    <div class="login-t">
      <el-form
        status-icon
        label-width="100px"
 
      >
        <el-form-item label="账号" prop="name">
          <el-input type="username" v-model="acc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="pwd" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success" round @click="clickbtn()">登录</el-button>
    </div>
  </div>
</template>

<script>
import {login} from '../api/apis'
export default {
    data(){
        return{
                acc:'',
                pwd: '',
        }
    },
  methods: {
    clickbtn() {
   
      login(this.acc,this.pwd).then(res=>{
        if(res.data.msg=='ok'&this.acc!=''&this.pwd!=''){
            this.$message({
          message: '登录成功',
          type: 'success'
        });
        localStorage.token=res.data.token
        localStorage.name=this.acc
        this.$router.history.push('/index')
        console.log(localStorage.token)
        }else{
          this.$message.error('登录失败');
        }
      })
    }
  },
 
};
</script>

<style  scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgs/29a3e511df8aaf302af8a18624f2dd96.jpg");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center}
.login-t {
  width: 400px;
  height: 300px;
  text-align: center;
    padding: 30px;
}

</style>