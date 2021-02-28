<template>
  <div class="card" v-bind:class="{ error: isFailed, clickable: isClickable, [type]: true }">
    <p data-testid="Card label" class="label" v-show="isVisible">{{ value }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

enum CardType {
  default = 'default',
  error = 'error',
  success = 'success',
}

export default defineComponent({
  name: 'Card',
  props: {
    value: Number,
    isVisible: Boolean,
    type: {
      type: String,
      validator(v: CardType) {
        return !!CardType[v];
      },
    },
    isFailed: {
      type: Boolean,
      default: false,
    },
    isClickable: Boolean,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;

  border-radius: 4px;
  width: 100px;
  height: 130px;

  /* background-color: #f5e9dd; */

  transition: background-color 0.05s ease, color 0.05s ease, border 0.05s ease;

  user-select: none;
}

.clickable {
  cursor: pointer;
}

.label {
  font-size: 3rem;
  font-weight: bold;
}

.default {
  border: 1px solid #000;
  color: #000;
}

.error {
  border: 1px solid #de3240;
  color: #de3240;
}

.success {
  border: 1px solid #428c4d;
  color: #428c4d;
}
</style>
