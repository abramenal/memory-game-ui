<template>
  <div class="banner">
    <Banner />
    <p>Enter your username to start:</p>
    <input class="input" type="text" v-model="username" v-on:keyup.enter="login" />
    <div class="banner-action">
      <Button text="Let me in" @click="login" :disabled="!username" />
    </div>
    <Error v-if="error" :message="error" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { Banner, Button, Error } from '../components';

import { login } from '../api';

export default defineComponent({
  name: 'Login',
  components: {
    Banner,
    Button,
    Error,
  },
  emits: ['onLoginSuccess'],
  data() {
    return {
      username: '',
      error: '',
    };
  },
  methods: {
    async login() {
      if (!this.username) {
        return;
      }

      try {
        const res = await login({ username: this.username });

        if (res.error) {
          throw res.error;
        }

        if (res.id) {
          this.$emit('onLoginSuccess', true, res.id);
        }
      } catch (e) {
        this.error = e.message;
      }
    },
  },
});
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
