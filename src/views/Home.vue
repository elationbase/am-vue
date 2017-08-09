<template>
  <div class="home">
    <hero></hero>
    <intro></intro>
  </div>
</template>

<script>

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';

export default {
  name: 'home',
  components: {
    Hero,
    Intro,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
