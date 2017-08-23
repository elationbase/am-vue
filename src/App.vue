
<template>
  <div id="app">
    <loader v-if="firstLoad" :speed="8" message="Loading"></loader>
    <loader v-if="loading" :speed="1"></loader>
    <div v-if="ready">
      <header class="main-header">
        <logo></logo>
        <ul class="main-nav">
          <li>
            <router-link :to="{ name: 'Home'}" @click="loadTimer">Home</router-link>
          </li>
          <li v-for="project in projects" :key="project.id" @click="loadTimer">
            <router-link :to="'/project/' + project.company" v-text="project.company" @click="loadTimer"></router-link>
          </li>
          <li>
            <router-link :to="'/project/xxx'">XXXXX</router-link>
          </li>
        </ul>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import Loader from '@/components/Loader';
  import getProjects from '@/api/projects';

  export default {
    name: 'app',
    components: {
      Logo,
      Loader,
    },
    data() {
      return {
        projects: getProjects.projects,
        loading: false,
        firstLoad: true,
        ready: false,
      };
    },
    methods: {
      loadTimer() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
    },
    mounted() {
      setTimeout(() => {
        this.firstLoad = false;
        this.ready = true;
      }, 3000);
    },
  };
</script>
<style lang="sass">
  @import './src/scss/main';
</style>
