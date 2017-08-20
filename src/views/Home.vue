<template>
  <div class="home">
    <hero></hero>
    <intro></intro>
    <projects></projects>
    <stack></stack>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';

export default {
  name: 'home',
  components: {
    Hero,
    Intro,
    Projects,
    Stack,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
