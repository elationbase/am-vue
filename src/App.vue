<template>
  <div id="app">
    <logo></logo>
    <router-link :to="{ name: 'Home'}">Home</router-link>
    <router-link to="/works">Works</router-link>
    <router-link to="/works/foo">Work Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';

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
  a {
    color: var(--orange);
  }
</style>
