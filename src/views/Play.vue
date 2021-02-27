<template>
  <div v-if="!game">
  <h2>Start a new game</h2>
    <div class="settings">
      <v-select
        placeholder="Amount of cards"
        v-model="settings.turnsAmount"
        :options="[4, 8, 12]"
        close-on-select
      />
    </div>

    <Button text="Let's play" v-on:click="start" :disabled="!settings.turnsAmount" />
  </div>

  <div v-if="!!game" class="game">
    <h2 class="title">Memorize the numbers on cards.</h2>
    <p>
      Once you turn them, click them one by one starting from the lowest number
    </p>

    <div class="cards">
      <Card
        v-for="(card, index) in cards"
        :key="card.value"
        :value="card.value"
        :isVisible="card.isVisible"
        :isClickable="isGuessMode && card.type !== 'error'"
        :type="card.type"
        v-on:click="() => flipCard(index)"
      />
    </div>

    <div v-if="!isGuessMode && game.status === 'started'">
      <Button text="Flip the cards" v-on:click="flipAll" />
    </div>

    <p v-if="isGuessMode && game.status === 'started'">Now choose them carefully!</p>
    <p v-if="!isGuessMode && game.status === 'failed'">Better luck next time</p>
    <p v-if="!isGuessMode && game.status === 'completed'">Success!</p>

    <div v-if="!isGuessMode && game.status !== 'started'">
      <Button text="Restart" v-on:click="restart" />
    </div>
  </div>

  <Error v-if="error" :message="error" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Button, Card, Error } from '../components';

import { createGame, submitGameTurn } from '../api';
import { Game } from '../types';

type Data = {
  settings: {
    turnsAmount: number;
  };
  game: Game | null;
  isGuessMode: boolean;
  cards: {
    value: number;
    isVisible: boolean;
  }[];
  error?: string;
};

export default defineComponent({
  name: 'Play',
  components: {
    Button,
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
      settings: {
        turnsAmount: 0,
      },
      game: null,
      isGuessMode: false,
      cards: [],
      error: '',
    };
  },
  methods: {
    async start() {
      const { turnsAmount } = this.settings;

      try {
        const game = await createGame({ userId: this.userId, turnsAmount });
        this.game = game;
        this.cards = game.sequence.map((value) => ({ value, isVisible: true, type: 'default' }));
      } catch (e) {
        this.error = e.message;
      }
    },
    async restart() {
      this.settings = {
        turnsAmount: 0,
      };
      this.game = null;
      this.cards = [];
      this.isGuessMode = false;
    },
    flipAll() {
      this.cards = this.cards.map((card) => ({ ...card, isVisible: false }));
      this.isGuessMode = true;
    },
    async flipCard(cardIndex: number) {
      if (!this.isGuessMode || !this.game || this.game.status !== 'started') {
        return;
      }

      const { id, userId } = this.game;
      const { value } = this.cards[cardIndex];

      try {
        this.game = await submitGameTurn({ gameId: id, userId, value });
        const isFailed = this.game.status === 'failed';

        this.isGuessMode = this.game.status === 'started';
        this.cards = this.cards.map((card, index) => {
          if (cardIndex === index) {
            return {
              ...card,
              isVisible: true,
              type: isFailed ? 'error' : 'success',
            };
          }

          if (isFailed) {
            return {
              ...card,
              isVisible: true,
            };
          }

          return card;
        });
      } catch (e) {
        this.error = e.message;
      }
    },
  },
});
</script>

<style>
.settings {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.title {
  margin-bottom: 0;
}

.hint {
  margin-top: 4px;
}

.game {
  display: flex;
  flex-direction: column;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 448px;

  padding: 15px 0;

  align-self: center;
}
</style>
