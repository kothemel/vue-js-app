<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Welcome to my first web-app!</h3>
    <ul>
      <li><a href="https://github.com/kothemel/vue-js-app" target="_blank" rel="noopener">Updated code</a></li>
      <li><a href="https://www.linkedin.com/in/kothemel/" target="_blank" rel="noopener">About me</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
