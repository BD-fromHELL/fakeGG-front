<template>
  <header>
    <nav>
      <ul class="tab-list">
        <li :class="`tab ${routeName === 'home' ? 'tab-selected' : ''}`">홈</li>
        <li :class="`tab ${routeName === 'community' ? 'tab-selected' : ''}`">커뮤니티</li>
      </ul>
    </nav>
  </header>
</template>


<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeName = computed(() => route.name);
</script>


<style lang="scss">
.tab-list {
  display: flex;
}

.tab {
  text-align: center;
  padding: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.tab-selected {
  color: white;
  border-bottom: 2px solid white;
}
</style>
