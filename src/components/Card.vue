<template>
  <div class="card">
    <p class="label" v-show="isVisible">{{value}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    value: String,
    isVisible: Boolean,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;

  border: 1px solid #000;
  border-radius: 4px;
  width: 180px;
  height: 260px;

  /* background-color: #f5e9dd; */

  transition: background-color 0.05s ease,
              color 0.05s ease,
              border 0.05s ease;

  cursor: pointer;
}

.label {
  font-size: 3rem;
  font-weight: bold;
}
</style>
