<template>
  <div id="login">
    <md-card>
      <div class="md-toolbar short text-primary-color mid-primary-color">
        <h2 class="md-title">Log in to get started!</h2>
      </div>
      <md-card-content>
        <md-input-container class="condensed">
          <label>Username</label>
          <md-input v-model="user"/>
        </md-input-container>
        <md-input-container class="condensed">
          <label>Password</label>
          <md-input v-model="pass"/>
        </md-input-container>
        <md-button v-on:click="editor" class="md-raised md-dense">
          Return to editor 
        </md-button>
        <md-button v-on:click="login" class="md-raised md-dense">
          Login 
        </md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import loginService from '../Utils/services/Login';

export default {
  name: 'login',
  data() {
    return {
      user: '',
      pass: '',
    };
  },
  methods: {
    login() {
      loginService.login(this.user, this.pass);
      this.$emit('login');
    },
    editor() {
      this.$emit('editor');
    },
  },
};
</script>

<style>
#login {
  width: 100%;
  height: calc(99% - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}

#login .md-card {
  width: 100%;
  max-width: 450px;
  margin: 15px;
}

#login .md-card .md-button {
  width: 49%;
  background-color: #f8f8f8;
  margin: 0;
}
</style>
