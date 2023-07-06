<template>
  <div>
    <div class="main-logo-container">
      <img title="제라스" class="main-logo"
        src="https://opgg-static.akamaized.net/logo/20230601050340.43a02ea2187741c6af65599282dba854.png?image=q_auto,f_webp,w_auto&v=1686296929687"
        alt="op.gg logo ver.제라스">
    </div>
    <div class="search-container">
      <div class="search-bar">
        <label for="search-input" class="label">Search</label>
        <input v-model="summonerName" type="text" id="search-input" placeholder="소환사명, 소환사명, ...">
      </div>
      <button class="search-button" @click="getSummoner"> </button>
    </div>
    <p>{{ summoner }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const summonerName = ref('');
const summoner = ref();
const router = useRouter();
const getSummoner = () => {
  router.push(`/summoners/kr/${summonerName.value}`);
};

</script>


<style lang="scss">
.main-logo-container {
  margin: 4rem 0;

  .main-logo {
    display: block;
    margin: 0 auto;
  }
}

.search-container {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  background-color: #fff;
  border-radius: 30px;
  height: 60px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .search-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
  }

  label {
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    color: #202D37;
    margin-bottom: 4px;
    font-style: normal;
  }

  input {
    border: none;
    width: 100%;
  }

  input:focus-visible {

    outline: none;
  }

  .search-button {
    background-image: url('https://s-lol-web.op.gg/images/icon/icon-gg.svg');
    background-repeat: no-repeat;
    background-size: 42px;
    background-position: 12px center;
    width: 50px;
    box-sizing: content-box;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>
