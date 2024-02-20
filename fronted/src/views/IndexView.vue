<template>
  <!-- <div>
    欢迎进入
  </div>
  <div>
    <el-button @click="logout()" type="danger" plain>退出登录</el-button>
  </div> -->

  <div class="line1 w">
    <a href="#" class="user bgc-radius-shadow">
      <!-- 点击进入个人中心 -->
      <img src="@/assets/images/test-pic.jpg" alt="">
      <div class="user-info">
          <h3>
              user-nickname
          </h3>
          <p>uid:000001</p>
      </div>
    </a>
    <div class="calendar bgc-radius-shadow">
      <Calendar />
    </div>
  </div>

  <div class="line2 w">
    <div class="study-room bgc-radius-shadow">
        <div class="study-room-head">
            <h3><i class="iconfont icon-zixishi"></i>自习室</h3>
            <a href="#">立即加入</a>
        </div>
        <div class="study-room-body">
            <p>目前自习室中，他们正在学习</p>
            <div><img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <span>...</span>
            </div>
            <p class="down">共 x 人</p>

        </div>
    </div>
    <div class="chat-room bgc-radius-shadow">
        <div class="chat-room-head">
            <h3><i class="iconfont icon-chat"></i>聊天室</h3>
            <a href="#">立即加入</a>
        </div>
        <div class="chat-room-body">
            <div class="preview">
                <div class="message">
                    <div class="img-username">
                        <img src="@/assets/images/test-pic.jpg" alt="">
                        <span>username1</span>
                    </div>
                    <p>这是目前倒数第二句话</p>
                </div>
                <div class="message">
                    <div class="img-username">
                        <img src="@/assets/images/test-pic.jpg" alt="">
                        <span>username2</span>

                    </div>
                    <p>这是目前最后一句话</p>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import {get} from "@/net";
import {ElMessage} from "element-plus";
import router from "@/router"
import Calendar from "@/components/User/calendar.vue"

export default {
  components: {
    Calendar
  }

}

const logout = () => {
  // get登出
  get('/api/auth/login', (message) => {
      ElMessage.success(message)
      router.push('/')
  })
    
}

</script>

<style scoped>
@import url('@/assets/iconfont/iconfont.css');
@import url('@/assets/index');
</style>
