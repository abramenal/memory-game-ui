<template>
  <p v-if="message" class="error">{{ message }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error',
  props: {
    message: String,
  },
});
</script>

<style scoped>
.error {
  color: #de3240;
}
</style>
