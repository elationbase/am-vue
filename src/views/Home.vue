<template>
  <div class="home">
    <hero></hero>
    <intro></intro>
    <stack></stack>
  </div>
</template>

<script>

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Stack from '@/components/Stack';

export default {
  name: 'home',
  components: {
    Hero,
    Intro,
    Stack,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
