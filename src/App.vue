<template>
  <div id="container">
    <title-bar 
      v-bind:title="title"
      v-on:menu-click="toggleSidebar"/>
    <side-bar
      :loggedIn="loggedIn"
      v-model="sidebarIsOpen"    
      v-on:export-pdf="exportPdf"
      v-on:export-json="exportJson"
      v-on:load-json="loadJson"
      v-on:new-template="newTemplate"
      v-on:login="openLogin"
      v-on:logout="logout"/>
    <workspace ref="workspace" v-show="!showLogin"/>
    <login v-show="showLogin"
      v-on:login="loginSuccess"
      v-on:editor="openEditor"/>
  </div>
</template>

<script>
import TitleBar from '@/components/Layout/TitleBar';
import Workspace from '@/components/Workspace';
import SideBar from '@/components/Layout/SideBar';
import Login from '@/components/Layout/Login';
import loginService from '@/components/Utils/services/Login';

export default {
  name: 'app',
  components: {
    TitleBar,
    Workspace,
    SideBar,
    Login,
  },
  data() {
    return {
      title: 'Labeler',
      sidebarIsOpen: false,
      showLogin: false,
      loggedIn: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },
    exportPdf() {
      this.$refs.workspace.exportPdf();
      this.sidebarIsOpen = false;
    },
    exportJson() {
      this.$refs.workspace.exportJson();
      this.sidebarIsOpen = false;
    },
    loadJson(json) {
      console.log('app loadJson', json); // eslint-disable-line no-console
      this.$refs.workspace.loadJson(json);
      this.sidebarIsOpen = false;
    },
    newTemplate() {
      this.$refs.workspace.newTemplate();
      this.sidebarIsOpen = false;
    },
    logout() {
      loginService.logout();
      this.loggedIn = false;
    },
    loginSuccess() {
      this.loggedIn = true;
      this.showLogin = false;
    },
    openLogin() {
      this.showLogin = true;
      this.sidebarIsOpen = false;
    },
    openEditor() {
      this.showLogin = false;
    },
  },
  mounted() {
    this.loggedIn = loginService.isLoggedIn();
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
