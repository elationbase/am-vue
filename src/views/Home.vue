<template>
  <div class="home">
    <hero></hero>
    <intro></intro>
    <projects></projects>
    <stack></stack>
    <comments></comments>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Comments from '@/components/Comments';

export default {
  name: 'home',
  components: {
    Hero,
    Intro,
    Projects,
    Stack,
    Comments,
  },
};
</script>
