<template>
  <md-whiteframe
    md-elevation="1"
    class="md-toolbar dark-primary-color text-primary-color">
    <md-button
      v-on:click="menuClick"
      class="md-icon-button menu-toggle">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title">
      {{ title }} 
    </h2>
  </md-whiteframe>
</template>

<script>
export default {
  name: 'title-bar',
  props: ['title'],
  methods: {
    menuClick: () => {
      this.$emit('menu-click');
    },
  },
};
</script>

<style>
  h2 {
    flex: initial;
    padding-left: 6px;
  }
</style>
