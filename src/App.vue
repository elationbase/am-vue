
<template>
  <div id="app">
    <loader v-if="firstLoad" :speed="8" message="Loading"></loader>
    <loader v-if="loading" :speed="1"></loader>
    <div v-if="ready">
      <logo></logo>
      <router-link :to="{ name: 'Home'}" @click="loadTimer">Home</router-link>
      <ul>
        <li v-for="project in projects" :key="project.id" @click="loadTimer">
          <router-link :to="'/project/' + project.company" v-text="project.company" @click="loadTimer"></router-link>
        </li>
        <li>
          <router-link :to="'/project/xxx'">XXXXX</router-link>
        </li>
      </ul>
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
      }, 5500);
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
