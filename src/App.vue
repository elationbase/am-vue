<template>
  <div id="app">
    <logo></logo>
    <router-view></router-view>
  </div>
</template>

<script>
  import Logo from './components/Logo';

  export default {
    name: 'app',
    components: {
      Logo,
    },
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
    max-width: 160px;
  }
</style>
