<template>
  <div style="text-align: center; margin: 0 20px;">
    <div style="margin-top: 150px">
        <div style="font-size: 25px; font-weight: bold;">注册新用户</div>
        <div style="margin-top: 30px;">
            <el-input type="text" placeholder="用户名" style="margin-top: 20px;" :prefix-icon="User"></el-input>
            <el-input type="password" placeholder="密码" style="margin-top: 20px;" :prefix-icon="Lock"></el-input>
            <el-input type="password" placeholder="重复密码" style="margin-top: 20px;" :prefix-icon="Lock"></el-input>
            
        </div>

        <div style="margin-top: 30px;">
            <el-button style="width: 200px;" type="warning" plain>注册</el-button>
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
</script>

<style scoped>

</style>
