<template>
  <div class="main">
    <CommonHeader />
    <router-view />
  </div>
</template>


<script lang="ts" setup>
import CommonHeader from "@/components/CommonHeader.vue";
import '@/assets/css/reset.css';
</script>

<style lang="scss">
.main {
  background-color: #ff8787;
  height: 100vh;
  padding: 0 2rem;
}
</style>
