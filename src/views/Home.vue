<template>
  <div class="home">
    <hero></hero>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import Hero from '@/components/Hero';

export default {
  name: 'home',
  components: {
    Hero,
  },
  data() {
    return {
      msg: 'Welcome to A Montero Portfolio App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
