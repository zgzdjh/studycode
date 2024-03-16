<template>
  <div>
    <div class="welcome">welcome</div>
    <router-link to="/login">去登录</router-Link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>
.welcome {
  background-color: #f0f0f0;
}
</style>
