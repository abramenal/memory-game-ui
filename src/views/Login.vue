<template>
  <div class="banner">
    <Banner />
    <p>Enter your username to start:</p>
    <input class="input" type="text" v-model="username" v-on:keyup.enter="login" />
    <div class="banner-action">
      <Button text="Let me in" @click="login" :disabled="!username" />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Button from '../components/Button.vue';

import { login } from '../api';

export default {
  name: 'Login',
  components: {
    Banner,
    Button,
  },
  data() {
    return {
      username: '',
    };
  },
  methods: {
    async login() {
      if (!this.username) {
        return;
      }
      const res = await login({ username: this.username });
      if (!res.error && res.id) {
        this.$emit('onLoginSuccess', true, res.id);
      }
    },
  },
};
</script>

<style>
.banner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 200px);
}

.banner-action {
  margin-top: 15px;
}

.input {
  width: 250px;
  align-self: center;
  padding: 5px 1px;
}
</style>
