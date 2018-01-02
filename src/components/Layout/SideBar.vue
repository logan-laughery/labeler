<template>
  <md-sidenav class="md-left" ref="sidenav"
    v-on:close="closeNav">
    <div class="md-toolbar text-primary-color md-large mid-primary-color">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
  </md-sidenav>
</template>

<script>
export default {
  name: 'side-bar',
  props: ['value'],
  data() {
    return {
      previouslyOpen: false,
    };
  },
  watch: {
    value(newValue, oldValue) {
      const opening = newValue && !oldValue;
      if (opening) {
        this.$refs.sidenav.open();
      }
    },
  },
  methods: {
    closeNav() {
      this.$emit('input', false);
    },
  },
};
</script>

<style>
</style>
