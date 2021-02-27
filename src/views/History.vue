<template>
  <div class="record" v-for="game in history" :key="game.id">
    <p class="title">Game length: {{ game.turnsTotal }} | Status: {{ game.status }}</p>
    <div class="cards">
      <Card
        v-for="(turn, index) in game.turns"
        :key="turn.value"
        :value="turn.value"
        :isVisible="true"
        :isClickable="false"
        :type="index < game.currentTurn ? 'success' : 'error'"
        v-on:click="() => {}"
      />
    </div>
  </div>
  <Error v-if="error" :message="error" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Card, Error } from '../components';

import { getUserHistory } from '../api';
import { GameHistory } from '../types';

type Data = {
  error: string;
  history: GameHistory[];
};

export default defineComponent({
  name: 'History',
  components: {
    Card,
    Error,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  data(): Data {
    return {
      error: '',
      history: [],
    };
  },
  created() {
    this.getUserHistory();
  },
  methods: {
    async getUserHistory() {
      try {
        const { userId } = this;
        const history = await getUserHistory({ userId });
        this.history = history;
      } catch (e) {
        this.error = e.message;
      }
    },
  },
});
</script>

<style>
.record:not(:last-child) {
  border-bottom: 1px solid #f5f5f7;
}

.title {
  text-align: left;
}
</style>
