
<template>
  <div id="app">

    <app-loader v-if="firstLoad" :speed="8" message="Loading"></app-loader>

    <main v-show="ready" v-if="!selectedProject">
      <app-header></app-header>
      <home-hero></home-hero>
      <my-intro></my-intro>
      <project-list v-on:projectShow="showProject"></project-list>
      <work-stack></work-stack>
      <comments-section></comments-section>
      <app-footer v-show="ready"></app-footer>
    </main>

    <project-page v-else v-on:projectHide="hideProject" :projectPass="project"></project-page>

  </div>
</template>

<script>
  import api from '@/api/projects';
  import AppHeader from '@/components/AppHeader';
  import AppLoader from '@/components/AppLoader';
  import AppFooter from '@/components/AppFooter';
  import HomeHero from '@/components/HomeHero';
  import MyIntro from '@/components/MyIntro';
  import ProjectList from '@/components/ProjectList';
  import WorkStack from '@/components/WorkStack';
  import CommentsSection from '@/components/CommentsSection';
  import ProjectPage from '@/views/ProjectPage';

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppLoader,
      AppFooter,
      HomeHero,
      MyIntro,
      ProjectList,
      WorkStack,
      CommentsSection,
      ProjectPage,
    },
    data() {
      return {
        projects: api.projects,
        loading: false,
        firstLoad: true,
        ready: false,
        selectedProject: false,
        project: {},
      };
    },
    methods: {
      showProject(project) {
        this.selectedProject = true;
        this.project = project;
      },
      hideProject() {
        this.selectedProject = false;
        this.project = {};
      },
      loadTimer() {
        this.loading = true;
        // setTimeout(() => {
        //   this.loading = false;
        // }, 2000);
      },
    },
    computed: {
      setPosition(x, y) {
        return x + y;
      },
      getPosition() {
        return this.setPosition();
      },
    },
    mounted() {
      setTimeout(() => {
        this.firstLoad = false;
        this.ready = true;
      }, 500);
    },
  };
</script>
<style lang="scss">
  @import './src/scss/main';
</style>
