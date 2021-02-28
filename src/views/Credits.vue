<template>
  <ul class="credits">
    <li>
      <img class="img" src="../assets/github.svg" width="25" alt="github logo" />
      Made by
      <a data-testid="Github link" class="link" href="https://github.com/abramenal" target="_blank">@abramenal</a>
    </li>
    <li>
      <img class="img" src="../assets/vue.svg" width="25" alt="vue.js framework logo" />
      Powered by
      <a data-testid="Vue link" class="link" href="https://vuejs.org" target="_blank">Vue.js</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Credits',
};
</script>

<style>
.credits {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style-type: none;
  padding: 0;
}
.img {
  margin-left: 25px;
}
.link {
  color: #06c;
}
</style>
