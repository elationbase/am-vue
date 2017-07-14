<template>
  <div id="app">
    <img src="./assets/eb-logo.svg" class="eb-logo">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  #app {
    text-align: center;
    color: var(--midgrey);
    background-color: var(--dark);
    padding-top: 60px;
    min-height: 100vh;
  }
  .eb-logo {
    max-width: 400px;
  }
</style>
