<template>
  <Login v-if="!isLoggedIn" v-on:on-login-success="login" />
  <div v-if="isLoggedIn">
    <Header :active="activeTab" v-on:on-link-click="changeTab" />

    <div v-if="activeTab === 'game'">
      <Play :userId="userId" />
    </div>
    <div v-else-if="activeTab === 'history'">
      <History :userId="userId" />
    </div>
    <div v-else-if="activeTab === 'credits'">
      <Credits />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

import Credits from './views/Credits.vue';
import History from './views/History.vue';
import Login from './views/Login.vue';
import Play from './views/Play.vue';

export default defineComponent({
  name: 'app',
  components: {
    Header,
    Credits,
    History,
    Login,
    Play,
  },
  data() {
    return {
      isLoggedIn: false,
      userId: '',
      activeTab: 'game',
    };
  },
  methods: {
    login(isLoggedIn: boolean, userId: string) {
      this.isLoggedIn = isLoggedIn;
      this.userId = userId;
    },
    changeTab(tabKey: string) {
      this.activeTab = tabKey;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.vue-dropdown-item:hover {
  color: #fff;
  background-color: #0071e3;
}
</style>
