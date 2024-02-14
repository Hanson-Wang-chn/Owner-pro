<script setup>

// import {Lock} from '@element-plus/icons-vue'
</script>

<template>
  <div style="height: 25px; background-color: whitesmoke;">
    <nav>
      <RouterLink to="/" class="TopLabel">Home</RouterLink>
      <RouterLink to="/index" class="TopLabel">index</RouterLink>
    </nav>
  </div>
  <router-view/>
</template>

<style scoped>
nav a.TopLabel {
  text-decoration: none;
  color: var(--color-text);
  text-align: center; 
  align-items: center;
}

nav a.TopLabel:hover {
  transform: translateY(-3px);
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
