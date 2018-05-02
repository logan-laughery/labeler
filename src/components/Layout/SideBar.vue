<template>
  <md-sidenav class="md-left" ref="sidenav"
    v-on:close="closeNav">
    <div class="md-toolbar text-primary-color md-large mid-primary-color">
      <img class="logo logo-img md-whiteframe-2dp" src="../../assets/orange_hand.svg">
      <div class="md-toolbar-container">
        <h3 class="logo-title md-title">Labeler</h3>
      </div>
    </div>

    <div>
      <md-list>
        <md-list-item @click="pdfExport">Export as pdf</md-list-item>
        <md-list-item @click="jsonExport">Export as json</md-list-item>
        <md-list-item @click="jsonExport">Load json</md-list-item>
        <md-list-item @click="jsonExport">New</md-list-item>
      </md-list>
    </div>
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
      } else if (!newValue && oldValue) {
        this.$refs.sidenav.close();
      }
    },
  },
  methods: {
    closeNav() {
      this.$emit('input', false);
    },
    pdfExport() {
      this.$emit('export-pdf');
    },
    jsonExport() {

    },
    load() {

    },
    new() {

    },
  },
};
</script>

<style>
.logo-img {
  border-radius: 12px;
  width: 125px;
  margin: 0 auto;
  margin-top: 20px;
}
.logo-title.md-title {
  margin: 0 auto !important;
}
</style>
