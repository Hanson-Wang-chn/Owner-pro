<template>
    <div class="profile-body w bgc-radius-shadow">
        
        <div class="box">
            <h3>编辑资料</h3>
            <img src="@/assets/images/test-pic.jpg" alt="">
            <div class="mask">
                <input type="file" name="" id="" value="上传头像">
            </div>
        </div>

        <!-- 利用表格规整布局 -->
        <table>
            <tr>
                <td class="title changeable">昵称：</td>
                <td class="changeable">
                    <el-input v-model="form.username" type="text" placeholder="用户名/邮箱" style="margin: 20px 0;" :prefix-icon="User"></el-input>
                    <!-- <input type="text" class="nickname" value="user-name"> -->
                </td>
            </tr>
            <tr>
                <td class="title ">uid：</td>
                <td>
                    000001
                </td>
            </tr>
            <tr>
                <td class="title">邮箱：</td>
                <td>
                    10235101111@stu.ecnu.edu.cn
                </td>
            </tr>

        </table>
        <input type="submit" value="确认编辑" class="submit">

    </div>
</template>

<script>
import {reactive} from 'vue';
const form = reactive({
    nikename: ''
})
</script>

<style scoped>
@import url('@/assets/profile-modify.css');
</style>
