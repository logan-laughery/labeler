<template>
  <div id="container">
    <title-bar 
      v-on:menu-click="test" 
      v-bind:title="title"/>
      <workspace/> 
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar';
import Workspace from '@/components/Workspace';

export default {
  name: 'app',
  components: {
    TitleBar,
    Workspace,
  },
  data() {
    return {
      title: 'Labeler',
    };
  },
  methods: {
    test: () => {
    },
  },
};
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,900);
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:600);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  @import './assets/FjallaOne.css';
  @import './assets/FjallaOne_400.css';
  @import './assets/Oswald.css';
  @import './assets/Oswald_300.css';
  @import './assets/Oswald_400_900.css';
  
  .dark-primary-color    { background: #455A64; }
  .default-primary-color { background: #607D8B; }
  .mid-primary-color     { background: #8198a3; }
  .light-primary-color   { background: #CFD8DC; }
  .text-primary-color    { color: #FFFFFF; }
  .accent-color          { background: #00BCD4; }
  .primary-text-color    { color: #212121; }
  .secondary-text-color  { color: #757575; }
  .divider-color         { border-color: #BDBDBD; }

  #container {
    height: 100%;  
  }
</style>
