<template>
  <p>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.key"
        v-on:click="() => handleLinkClick(tab.key)"
      >
        <span class="link" v-bind:class="{ 'active': active === tab.key }">{{tab.title}}</span>
      </li>
    </ul>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    active: String,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Play',
          key: 'game',
        },
        {
          title: 'History',
          key: 'history',
        },
        {
          title: 'Credits',
          key: 'credits',
        },
      ],
    };
  },
  methods: {
    handleLinkClick(key: string) {
      this.$emit('onLinkClick', key);
    },
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}

li:not(:last-child)::after {
  content: '|';
  display: 'inline';
  padding: 0 5px;
}

.link {
  color: #06c;
}

.link.active {
  text-decoration: underline;
}

.link:hover {
  cursor: pointer;
}
</style>
