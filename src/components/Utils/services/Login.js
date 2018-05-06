module.exports = {
  login(user, pass) {
    localStorage.setItem('labeler-user', user);
    localStorage.setItem('labeler-pass', pass);
  },
  logout() {
    localStorage.removeItem('labeler-user');
    localStorage.removeItem('labeler-pass');
  },
  getCredentials() {
    const creds = {
      user: localStorage.getItem('labeler-user'),
      pass: localStorage.getItem('labeler-pass'),
    };

    if (!creds.user) {
      return undefined;
    }

    try {
      return creds;
    } catch (err) {
      this.logout();
      return undefined;
    }
  },
  isLoggedIn() {
    const creds = this.getCredentials();
    console.log('checked login', creds); // eslint-disable-line no-console
    return creds || false;
  },
};
