<template>
  <header>
    <nav>
      <ul class="tab-list">
        <ul class="nav-list">
          <li :class="`tab ${routeName === ' home' ? 'tab-selected' : ''}`" @click="navigateTo('home')">홈</li>
          <li :class="`tab ${routeName === 'community' ? 'tab-selected' : ''}`" @click="navigateTo('community')">커뮤니티</li>
        </ul>
        <template v-if="isLoggedIn">
          <button class="header-login-button" @click="logout()">로그아웃</button>
        </template>
        <template v-else>
          <button class="header-login-button" @click="navigateTo('login')">로그인</button>
        </template>
      </ul>
    </nav>
  </header>
</template>


<script lang="ts" setup>
import store from '@/store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const routeName = computed(() => route.name);
const isLoggedIn = computed(() => store.getters.isLoggedIn);

const navigateTo = (path: string) => {
  router.push({ name: path });
};

const logout = () => {
  try {
    store.dispatch("removeToken");
    router.push("/");
    router.go(0);
  } catch (error) {
    console.log(error);
  }
};

</script>


<style lang="scss">
.tab-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
}

.header-login-button {
  color: white;
  background-color: #fc8e8e;
  border-radius: 0.4rem;
  border: white solid 1px;
  height: 2rem;

  &:hover {
    cursor: pointer;
  }

}

.tab {
  text-align: center;
  padding: 0.75rem;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    cursor: pointer;
    color: white;
  }
}



.tab-selected {
  color: white;
  border-bottom: 2px solid white;
}
</style>
