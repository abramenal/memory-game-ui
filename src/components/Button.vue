<template>
  <button data-testid="Button" class="button" :disabled="disabled">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.button {
  background: #0071e3;
  min-width: 28px;
  font-size: 17px;

  padding: 8px 16px;
  border-radius: 18px;
  border: 0;

  color: #fff;
  font-size: 14px;
  line-height: 1.17648;
  font-weight: 400;

  cursor: pointer;
}

.button:disabled {
  background: grey;
}

.button:focus {
  outline: 0;
}
</style>
