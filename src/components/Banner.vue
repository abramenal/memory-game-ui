<template>
  <h1>
    Wanna flip some
    <br />
    <span>cards?</span>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Banner',
});
</script>

<style scoped>
  h1 {
    font-size: 4.5rem;
    margin: 1rem;
  }

  span {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
