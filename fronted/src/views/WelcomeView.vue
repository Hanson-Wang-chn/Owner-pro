<template>
  <div style="width: 100%; height: 100vh; overflow: hidden; display: flex;">
    <div>
      <el-image style="width: 100%; height: 100%;" fit="cover"
        src="https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg"/>
    </div>

    <div style="width: 400px; background-color: white;">
        <router-view/>
    </div>

    
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>