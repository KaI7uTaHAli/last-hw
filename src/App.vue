<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  font-family: "Segoe UI", sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}

a {
  color: #42b983;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
