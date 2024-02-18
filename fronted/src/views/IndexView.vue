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
      <img src="@/assets/test-pic.jpg" alt="">
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
            <div><img src="@/assets/test-pic.jpg" alt="">
                <img src="@/assets/test-pic.jpg" alt="">
                <img src="@/assets/test-pic.jpg" alt="">
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
                        <img src="@/assets/test-pic.jpg" alt="">
                        <span>username1</span>
                    </div>
                    <p>这是目前倒数第二句话</p>
                </div>
                <div class="message">
                    <div class="img-username">
                        <img src="@/assets/test-pic.jpg" alt="">
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
* {
    padding: 0;
    margin: 0;
}

/* 确定版心 */
.w {
    width: 1000px;
    margin: 0 auto;
}


body {
    background: #00c6ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0072ff, #00c6ff);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

/* 所有大模块的阴影和圆角设置 */
.bgc-radius-shadow {
    background-color: rgba(255, 255, 255, 0.767);
    backdrop-filter: blur(50px);
    border-radius: 15px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.145);
}

.bgc-radius-shadow:hover {
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, 0.268);
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
    backdrop-filter: blur(50px);
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
.head-link {
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
    color: rgb(255, 180, 42);

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
    margin-top: 30px;
}



/* 第一大行-个人模块 */
.user {
    display: block;
    position: relative;
    float: left;
    padding: 20px;
    height: 260px;
    width: 260px;
    /* background-color: rgba(255, 255, 255, 0.767); */

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

}



/* 第二大行 */
.line2 {
    margin-top: 30px;
    height: 300px;
    /* background-color: pink; */
}

/* 自习室 */
.study-room {
    float: left;
    width: 485px;
    height: 300px;
}

.study-room-head,
.chat-room-head {
    height: 65px;
}

.study-room-head h3,
.chat-room-head h3 {
    float: left;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
}

.study-room-head h3 i,
.chat-room-head h3 i {
    position: relative;
    top: 3px;
    font-size: 30px;
    margin-right: 10px;
}

.study-room-head a,
.chat-room-head a {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 18px;
    color: rgba(128, 128, 128, 0.682);
    font-weight: 700;
}

.study-room-head a:hover,
.chat-room-head a:hover {
    color: rgb(232, 151, 0);

}

.study-room-body,
.chat-room-body {
    position: relative;
    height: 195px;
    background-color: rgba(255, 255, 255, 0.608);
    border-radius: 0 0 15px 15px;
    padding: 20px;
}

.study-room-body p {
    color: rgb(53, 53, 53);
    font-size: 17px;
}

.study-room-body div {
    /* background-color: pink; */
    overflow: hidden;
    margin-top: 30px;
}

.study-room-body img {
    float: left;
    width: 90px;
    height: 90px;
    border-radius: 50%;

    margin-left: 20px;
}

.study-room-body span {
    position: relative;
    right: 60px;
    float: right;
    font-size: 40px;
}

.study-room-body .down {
    position: absolute;
    bottom: 20px;
}


/* 聊天室 */

.chat-room {
    float: right;
    width: 485px;
    height: 300px;
}

.chat-room-body .preview {
    background-color: rgba(184, 184, 184, 0.403);
    height: 155px;
    border-radius: 15px;
    padding: 20px;
}

.chat-room-body .preview .message {
    height: 70px;
    /* background-color: pink; */
    margin-bottom: 15px;
}

.message .img-username {
    overflow: hidden;
}

.message .img-username img {
    float: left;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.message .img-username span {
    float: left;
    line-height: 40px;
    margin-left: 10px;
    color: rgb(85, 85, 85);
}

.message p {
    color: black;
    margin-top: 8px;
    font-size: 16px;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
