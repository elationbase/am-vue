
<template>
  <div id="app">
    <logo></logo>
    <router-link :to="{ name: 'Home'}">Home</router-link>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="'/project/' + project.company" v-text="project.company"></router-link>
      </li>
      <li>
        <router-link :to="'/project/xxx'">XXXXX</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import getProjects from '@/api/projects';

  export default {
    name: 'app',
    components: {
      Logo,
    },
    data: () => ({
      projects: getProjects.projects,
    }),
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
