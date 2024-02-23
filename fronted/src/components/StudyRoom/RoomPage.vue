<template>
  <div>
    <h1>自习室 {{ roomId }}</h1>
    <div v-if="mmembers && members.value.length === 0">暂无成员</div>
    <div v-else>
      <div v-for="(member, index) in members" :key="index" class="member">
        <img :src="member.avatar" alt="头像" class="avatar" />
        <div class="info">
          <p>{{ member.name }}</p>
          <p>已学习时间：{{ member.studyTime }}</p>
        </div>
      </div>
    </div>
    <div>
      <p>当前已学习时间：{{ totalStudyTime }}</p>
      <select v-model="status">
        <option value="study">学习</option>
        <option value="rest">休息</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const members = ref([1, 2]); // 自习室成员
const totalStudyTime = ref(0); // 当前已学习时间
const status = ref('study'); // 当前状态，默认为学习

export default {
  data() {
    return {
      roomId : this.$route.params.roomId
    }
  },

  mounted() {
      
  }
}



// 获取自习室成员和已学习时间
const fetchData = async () => {
  try {
    const response = await axios.get(`/api/room/${roomNumber}`);
    members.value = response.data.members;
    totalStudyTime.value = response.data.totalStudyTime;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};
</script>

<style scoped>
.member {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}
.info {
    display: flex;
    flex-direction: column;
}
</style>
