<template>

  <div style="display: grid; align-items: center; justify-content: center;">

    <div class="room bgc-radius-shadow">
        <div class="study-room-head">
            <h3>自习室1</h3>
            <RouterLink :to="{ name: 'room', params: { roomId: 1 } }">立即加入</RouterLink>
        </div>
        <div class="study-room-body">
            <p>目前自习室中，他们正在学习</p>
            <div>
                <img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <span>...</span>
            </div>
            <p class="down">共 {{ numbers_1 }} 人</p>
        </div>
    </div>

    <div class="room bgc-radius-shadow">
        <div class="study-room-head">
            <h3>自习室2</h3>
            <RouterLink :to="{ name: 'room', params: { roomId: 2 } }">立即加入</RouterLink>
        </div>
        <div class="study-room-body">
            <p>目前自习室中，他们正在学习</p>
            <div v-for="item in items">

            </div>
            <div>
                <img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <img src="@/assets/images/test-pic.jpg" alt="">
                <span>...</span>
            </div>
            <p class="down">共 {{ numbers_2 }} 人</p>
        </div>
    </div>

  </div>


</template>

<script setup>
import { computed } from 'vue';


const roomid = 2;
const numbers_1 = 10;
const numbers_2 = 20;
const limit = 8;

//const limitItems = computed(() => items)

</script>

<style scoped>

@import url('@/assets/iconfont/iconfont.css');
@import url('@/assets/index');

.room {
    margin: 20px;
    float: center;
    width: 80vw;
    height: 300px;
}

</style>
