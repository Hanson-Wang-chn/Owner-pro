<template>
  <div style="height: 30px; background-color: whitesmoke; width: auto; padding: 15px;">
    <nav>
      <RouterLink to="/" class="TopLabel">Home</RouterLink>
      <RouterLink to="/index" class="TopLabel">index</RouterLink>
    </nav>
  </div>

  <div>
    <router-view/>
  </div>
  
</template>

<script setup>
// import {Lock} from '@element-plus/icons-vue'
import {get} from "@/net";
import {ElMessage} from "element-plus";
import {useStore} from "@/stores"

const store = useStore();

if (store.auth.user == null) {
  // get当前用户
  get('/api/user/me', (message) => { 
    store.auth.user = message;
    ElMessage.success('登录成功')
  }, () => {
    store.suth.user = null;
    ElMessage.warning('登录失败')
  })  
}



</script>

<style scoped>
a.TopLabel {
  padding: 0 20px;
  font-size: 20px;
  text-decoration: none;
  color: var(--color-text);
  text-align: center; 
  align-items: center;
}

a.TopLabel:hover {
  transform: translateY(-3px);
  background-color: transparent;
}

nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  border-left: 1px solid var(--color-border);
}
</style>
