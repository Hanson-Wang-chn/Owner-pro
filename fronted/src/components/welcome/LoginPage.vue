<template>
    <div style="text-align: center; margin: 0 20px;">
        <div style="margin-top: 150px;">
            <div style="font-size: 25px; font-weight: bold;">登录</div>
            <div></div>
        </div>

        <div style="margin-top: 30px;">
            <el-input v-model="form.username" type="text" placeholder="用户名/邮箱" style="margin: 20px 0;" :prefix-icon="User">
            <!-- <template #prefix>
                <el-icon><User /></el-icon>
            </template> -->
            </el-input>
            <el-input v-model="form.password" type="password" placeholder="密码" :prefix-icon="Lock">
            <!-- <template #prefix>
                <el-icon><Lock /></el-icon>
            </template> -->
            </el-input>
        </div>

        <div style="margin-top: 10px;">
            <el-row :gutter="20">
                <el-col :span="12" style="text-align: left;">
                    <el-checkbox v-model="form.remember" label="管理员" size="large" />
                </el-col>
                <!-- <el-col :span="12" style="text-align: right;">
                    <el-link>忘记密码</el-link>
                </el-col> -->
            </el-row>
            
        </div>

        <div style="margin-top: 30px;">
            <el-button style="width: 200px;" type="success" plain @click="login">登录</el-button>
        </div>

        <el-divider>
            <span style="color: grey; font-size: 13px; ">没有账号？</span>
        </el-divider>

        <div style="margin-top: 30px;">
            <el-button @click="router.push('/register')" style="width: 200px;" type="warning" plain>注册</el-button>
        </div>
    </div>
</template>
  
<script setup>
import {User, Lock} from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import {reactive} from 'vue';
import {post} from '@/net';
import router from '@/router';
import {useStore} from '@/stores'
import axios from 'axios';

import 'element-plus/theme-chalk/el-message.css';

const form = reactive({
    username: '',
    password: ''
})

const store = useStore()

const login = () => {
    if (!form.username || !form.password) {
        alert('请填写用户名和密码')
    }
    else {
        axios.post('/account/login', {
            username: form.username,
            password: form.password
        })
        .then(response => {
            // 登录成功，处理响应
            router.push('/index');
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

const test = () => {
    console.log('cnm,老子按了');
    ElMessage.success('cccc');
    ElMessage({
        message: 'this is a message.',
        type: 'success',
    })
}

</script>

<style scoped>

</style>