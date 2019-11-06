<template>
  <div class="box">
  
    <el-container>
      
      <!-- 导航 -->
      <el-aside>
        
          <el-menu :unique-opened="true"
            default-active="1"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <div class="box-tit">
                <i class="el-icon-menu">牛B超市管理系统</i>
                
              </div>
            <el-submenu :index="item.index.toString()" v-for="item in this.list" :key="item.name">
              <template slot="title">
                <i :class="item.iocntext"></i>{{item.name}}
              </template>
              <el-menu-item-group>
                <el-menu-item :index="obj.indexs.toString()" v-for="obj in item.add" :key="obj.to"> <router-link :to='obj.to'>{{obj.names}}</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-container>
        <!-- 内容头部 -->
        <el-header>
          <div >
            <i class="el-icon-search" style="margin-right:30px;"></i>
            <i class="el-icon-s-grid"></i>
          </div>
          <div style="display:flex;">
            <i class="el-icon-message-solid"></i>
            <div class="login">
                <div class="login-img">
                  
                </div>
                <span>{{name}}</span>
            </div>
            <i class="el-icon-s-tools"></i>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {token} from '../api/apis'
import jree from '../json/jree.json'
    export default {
      data(){
        return{
          list:[],
          name:'请登录'
        }
      },
      created() {
        this.list=jree

        token(localStorage.token).then(res=>{
         if(res.data.msg=="time"){
            this.name='请登录'
         }else{
           this.name=localStorage.name
         };
        // if(res.data.msg!='time'){
          
        //   let arr=[]

        //   for(let obj of jree){
        //     if(obj.userGroup.includes(localStorage.userGroup)){
        //       arr.push(obj)
        //     }
        //   }
        //   this.list=arr
        // }

        })
      },

      
    };
</script>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  /* 顶部框 */
  .box-tit{
    width: 100%;
    height: 100px;
    background-color: #67C23A;
    font-size: 25px;
    color: #fff;
    line-height: 100px;
    text-align: center;

  }
.el-aside{
  height: 100%;
  background: #333;
  
}
.el-menu {
  height: 100%;
}
.el-container{
  height: 900px;
  background-color: #e9eef3
}
.el-header{
  height: 50px;
  width: 100%;
  background-color: #E6A23C;
  display: flex;
  justify-content: space-between;
}
.el-header i{
  font-size: 25px;
  line-height: 60px;
}
.login{
  height: 100%;
  width: 200px;
  line-height: 60px;
  text-align: center;
  display: flex;
}
.login-img{
  width: 50px;
  height: 50px;

  margin: 5px 10px 0 30px;
  border-radius: 50px;
  background-image: url('../assets/imgs/微信图片_20190901113920.jpg');
  background-size: 100% 100%
  
}







</style>