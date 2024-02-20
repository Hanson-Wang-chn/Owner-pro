<template>

  <div class="background">
    <div class="head">
      <div class="logo">
        <RouterLink to="/index">
          <h3>云端博远<i class="iconfont icon-yun"></i></h3>
        </RouterLink>

        <RouterLink to="/">
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
          <li><RouterLink to="/study">自习室</RouterLink></li>
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

@import url('@/assets/iconfont/iconfont.css');
@import url('@/assets/index');

</style>
