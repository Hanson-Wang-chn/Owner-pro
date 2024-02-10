<template>
    <div style="text-align: center; margin: 0 20px;">
        <div style="margin-top: 150px;">
            <div style="font-size: 25px;">登录</div>
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
                    <el-checkbox v-model="form.remember" label="记住我" size="large" />
                </el-col>
                <el-col :span="12" style="text-align: right;">
                    <el-link>忘记密码</el-link>
                </el-col>
            </el-row>
            
        </div>

        <div style="margin-top: 30px;">
            <el-button @click="login()" style="width: 200px;" type="success" plain>登录</el-button>
        </div>

        <el-divider>
            <span style="color: grey; font-size: 13px; ">没有账号？</span>
        </el-divider>

        <div style="margin-top: 30px;">
            <el-button style="width: 200px;" type="warning" plain>注册</el-button>
        </div>
    </div>
</template>
  
<script setup>
import {User, Lock} from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import {reactive} from 'vue';
import {post} from '@/net';
import router from '@/router';

const form = reactive({
    username: '',
    password: '',
    remember: false
})

const login = () => {
    if (!form.username || !form.password) {
        ElMessage.warning('请填写用户名和密码')
    }
    else {
        post('/api/auth/login', {
            username: form.username,
            password: form.password,
            remember: form.remember
        }, () => {
            ElMessage.success(message)
            router.push('/index')
        })
    }
}

</script>

<style scoped>

</style>