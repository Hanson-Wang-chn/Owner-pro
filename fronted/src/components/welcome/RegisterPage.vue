<template>
  <div style="text-align: center; margin: 0 20px;">
    <div style="margin-top: 150px">
        <div style="font-size: 25px; font-weight: bold;">注册新用户</div>
        <div style="margin-top: 30px;">
            <el-input v-model="form.username" type="text" placeholder="用户名" style="margin-top: 20px;" :prefix-icon="User"></el-input>
            <el-input v-model="form.password" type="password" placeholder="密码" style="margin-top: 20px;" :prefix-icon="Lock"></el-input>
            <el-input v-model="form.password_again" type="password" placeholder="重复密码" style="margin-top: 20px;" :prefix-icon="Lock"></el-input>
        </div>

        <div style="margin-top: 30px;">
            <el-button style="width: 200px;" type="warning" plain @click="signin">注册</el-button>
        </div>

        <div style="font-size: 14px; line-height: 15px; margin-top: 20px;">
            已有账号？ <el-link type="primary" style="translate: 0 -2px;" @click="router.push('/')">立即登录</el-link>
        </div>

    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import {User, Lock} from '@element-plus/icons-vue';
import router from "@/router"
import {reactive} from 'vue';
import axios from 'axios';

const form = reactive({
    username: '',
    password: '',
    password_again: ''
})


const signin = () => {
  if (!form.username || !form.password) {
      alert('请填写用户名和密码')
  }
  else if (form.password != form.password_again) {
    alert('请核对密码')
  }
  else {
      axios.post('/account/login', {
          username: form.username,
          password: form.password
      })
      .then(response => {
          // 登录成功，处理响应
          router.push('/');
          alert('请重新登录');
          console.log(response.data);
          // 可以跳转到用户主页等操作
      })
      .catch(error => {
          // 登录失败，处理错误
          console.error(error);
          // 可以显示错误消息等操作
      });
  }


}

</script>

<style scoped>

</style>
