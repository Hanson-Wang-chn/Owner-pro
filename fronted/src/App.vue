<template>

  <div class="background">
    <div class="head">
      <div class="logo">
        <RouterLink to="/index">
          <h3>云端博远<el-icon :size="20" style="font-weight: bold;"><MostlyCloudy /></el-icon></h3>
          <p>华东师范大学博远信息技术社</p>
        </RouterLink>
      </div>
      <!-- <nav>
        <RouterLink to="/" class="TopLabel">Home</RouterLink>
        <RouterLink to="/index" class="TopLabel">index</RouterLink>
      </nav> -->
      <div class="head-link">
        <ul class="top">
          <li class="drop"><a href="#">校园网站 <i class="iconfont icon-jiantou"></i></a>
            <ul class="droplist">
              <li><a href="https://mail.stu.ecnu.edu.cn/" target="_blank">学校邮箱</a></li>
              <li><a href="https://service.ecnu.edu.cn/_layouts/15/ecnu/index.aspx" target="_blank">公共数据库</a>
              </li>
              <li><a href="http://ecnu.fanya.chaoxing.com/portal" target="_blank">大夏学堂</a></li>
              <li><a href="https://elearning.ecnu.edu.cn/" target="_blank">原大夏学堂</a></li>
            </ul>
          </li>
          <li><a href="#">自习室</a></li>
          <li><a href="#">聊天室</a></li>
              
              
          </ul>
      </div>

    </div>

    <div>
      <router-view/>
    </div>


  </div>

  

  <!-- <div style="height: 30px; background-color: whitesmoke; width: auto; padding: 15px;">
    
    
  </div> -->

  
  
</template>

<script setup>
// import {Lock} from '@element-plus/icons-vue'
import {get} from "@/net";
import {ElMessage} from "element-plus";
import {useStore} from "@/stores"
import {MostlyCloudy} from '@element-plus/icons-vue';

const store = useStore();

if (store.auth.user == null) {
  // get当前用户
  get('/api/user/me', (message) => { 
    store.auth.user = message;
    ElMessage.success('登录成功')
  }, () => {
    store.suth.user = null;
    ElMessage.warning('登录失败')
  })  
}



</script>

<style scoped>
a.TopLabel {
  display: inline-block;
  /* padding: 0 1rem; */
  border-left: 1px solid var(--color-border);
  padding: 0 20px;
  font-size: 20px;
  text-decoration: none;
  color: var(--color-text);
  text-align: center; 
  align-items: center;
}

a.TopLabel:hover {
  transform: translateY(-3px);
  background-color: transparent;
}


* {
    padding: 0;
    margin: 0;
}

/* 确定版心 */
.w {
    width: 1000px;
    margin: 0 auto;
}


.background {
    background: #00c6ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0072ff, #00c6ff);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

/* 所有大模块的阴影和圆角设置 */
.radius-shadow {
    border-radius: 15px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.145);
}

.radius-shadow:hover {
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.268);
}

/* 头部 */

/* 头部-左侧logo */
.head {
    position: sticky;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, .4);
    z-index: 1;
    /* backdrop-filter: blur(50px); */
}


.logo {
    float: left;
    color: white;
    margin-left: 10px;
    margin-top: 5px;
}

.logo h3 {
    color: black;
    font-size: 18px;
    color: white;
    margin: 0 0 2px 28px;
    text-shadow: 3px 2px 2px #00000062;
}

.logo h3 i {
    font-size: 25px;
    position: relative;
    top: 3px;
}

.logo p {
    font-size: 10px;
    margin-left: 11px;
    color: rgba(255, 255, 255, 0.685);
}

/* 头部-快速到达 */
.head-link { /* */
    float: left;
    margin-left: 56px;
}



.head-link .top>li {
    float: left;
    padding: 0 30px;
}

.head-link .top>li a {
    display: block;
    color: white;
    line-height: 40px;
    height: 40px;
    margin-top: 5px;
    padding: 0 10px;

}

.head-link .top>li a:hover {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 10%;

}

.droplist {
    position: absolute;
    background-color: rgba(0, 0, 0, .4);

    border-radius: 5%;
    display: none;
}

.drop:hover .droplist {
    display: block;
}

/* 头部-右侧用户 */
.head-user {
    float: right;
}

.head-user img {

    position: relative;
    top: 5px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.head-user img:hover {
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.145);
}

/* 第一大行 */
.line1 {
    height: 300px;
    /* background-color: pink; */
    margin-top: 50px;
}



/* 第一大行-个人模块 */
.user {
    display: block;
    position: relative;
    float: left;
    padding: 20px;
    height: 260px;
    width: 260px;
    background-color: rgba(255, 255, 255, 0.767);

    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.145);
}

.line1 .user img {

    margin-bottom: 10px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.249);
    z-index: 2;
}

.line1 .user h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
    color: #13181d;
    font-size: 30px;

}

.line1 .user p {
    position: absolute;
    bottom: 20px;
    color: rgb(103, 103, 103);
    font-size: 16px;
}



/* 第一大行-日历模块 */
.calendar {
    float: right;
    height: 300px;
    width: 670px;
    background-color: gray;

}
</style>
