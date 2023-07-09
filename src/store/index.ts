import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('X-AUTH-TOKEN') || null,
    username: localStorage.getItem('username') || null,
  },
  getters: {
    isLoggedIn(state) {
      return state.token != null; // JWT 토큰이 있으면 로그인 상태
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username;
    }
  },
  actions: {
    saveToken({ commit }, { token, username }) {
      localStorage.setItem('X-AUTH-TOKEN', token); // JWT 토큰을 localStorage에 저장
      localStorage.setItem('username', username);
      commit('setToken', token);
      commit('setUsername', username);
    },
    removeToken({ commit }) {
      localStorage.removeItem('X-AUTH-TOKEN'); // localStorage에서 JWT 토큰 삭제
      localStorage.removeItem('username')
      commit('setToken', null);
      commit('setUsername', null);
    }
  },
  modules: {
  }
})

