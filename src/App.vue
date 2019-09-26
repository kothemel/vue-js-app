<template>

  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link><br><br>
    <router-link to="user">User</router-link><br><br>
    <router-link to="login">Log in</router-link><br><br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
