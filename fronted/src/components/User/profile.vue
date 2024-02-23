<template>

<div class="profile-body w bgc-radius-shadow">

    <div class="box">
        <h3>个人主页</h3>
        <img src="@/assets/images/test-pic.jpg" alt="图像看不见了！">

        <RouterLink to="profileChange">编辑资料</RouterLink>
        <RouterLink to="profileChange">修改密码</RouterLink>
    </div>

    <!-- 利用表格规整布局 -->
    <table>
        <tr>
            <td class="title">昵称：</td>
            <td>
                unser-nickname
            </td>
        </tr>
        <tr>
            <td class="title">uid：</td>
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
</div>

</template>

<script>
import {RouterLink} from 'vue-router'
</script>

<style scoped>
@import url('@/assets/profile.css');
</style>
