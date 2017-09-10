
<template>
  <div id="app">

    <transition name="fade">
      <app-loader v-if="firstLoad" :speed="8"></app-loader>
    </transition>

    <main v-show="ready" v-if="!selectedProject">
      <app-header :headerData="this.fbIcons"></app-header>
      <home-hero :heroData="this.fbHero"></home-hero>
      <my-intro :introData="this.fbIntro"></my-intro>
      <project-list :projectsData="this.fbProjects" v-on:projectShow="showProject" v-on:getPositionY="setPositionY"></project-list>
      <work-stack :stackData="this.fbStack"></work-stack>
      <comments-section :commentsData="this.fbComments"></comments-section>
      <app-footer></app-footer>
    </main>

    <project-page v-else v-on:projectHide="hideProject" :projectPass="project"></project-page>

  </div>
</template>

<script>
  import Firebase from 'firebase';
  import config from '@/api/firebase-conf';
  import AppHeader from '@/components/AppHeader';
  import AppLoader from '@/components/AppLoader';
  import AppFooter from '@/components/AppFooter';
  import HomeHero from '@/components/HomeHero';
  import MyIntro from '@/components/MyIntro';
  import ProjectList from '@/components/ProjectList';
  import WorkStack from '@/components/WorkStack';
  import CommentsSection from '@/components/CommentsSection';
  import ProjectPage from '@/views/ProjectPage';

  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database();

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
    firebase: {
      fbHero: {
        source: db.ref('/hero'),
        asObject: true,
      },
      fbIntro: {
        source: db.ref('/intro'),
        asObject: true,
      },
      fbIcons: {
        source: db.ref('/icons'),
        asObject: true,
      },
      fbProjects: {
        source: db.ref('/projects'),
        asObject: true,
      },
      fbStack: {
        source: db.ref('/stack'),
        asObject: true,
      },
      fbComments: {
        source: db.ref('/comments'),
      },
    },
    data() {
      return {
        loading: false,
        firstLoad: true,
        ready: false,
        selectedProject: false,
        project: {},
        positionY: 0,
      };
    },
    methods: {
      showProject(project) {
        this.selectedProject = true;
        this.project = project;
      },
      setPositionY(y) {
        this.positionY = y;
      },
      hideProject() {
        window.location.hash = '';
        this.selectedProject = false;
        this.project = {};
        window.scroll(0, this.positionY);
      },
      hashChangeCheck() {
        const newHash = window.location.hash;
        const newPath = newHash.slice(2);
        Object.keys(this.fbProjects).forEach((key) => {
          if (newPath === this.fbProjects[key].name) {
            this.showProject(this.fbProjects[key]);
          }
        });
      },
    },
    mounted() {
      setTimeout(() => {
        this.firstLoad = false;
        this.ready = true;
        this.hashChangeCheck();
        window.addEventListener('hashchange', this.hashChangeCheck, false);
      }, 2000);
    },
  };
</script>
<style lang="scss">
  @import './src/scss/main';
</style>
