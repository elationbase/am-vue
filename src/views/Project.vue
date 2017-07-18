<template>
  <div>
    <router-link :to="{ name: 'Home'}" @click="childLoader">CLOSE</router-link>
    <section v-for="project in projects" :key="project._id">
      <div v-if="project.company === $route.params.id">
        <h1 v-text="project.company"></h1>
        <h2 v-text="project.name">{{project.company}}</h2>
        <p v-text="project.project"></p>
        <img :src="project.picture" alt="">
        <p>{{project.body}}</p>
      </div>

    </section>
    <div v-if="!projectSelected">
      <p>NOT FOUND</p>
    </div>
  </div>
</template>

<script>
import getProjects from '@/api/projects';

export default {
  data() {
    return {
      loading: false,
      projects: getProjects.projects,
      projectSelected: false,
    };
  },
  methods: {
    checkProject(found) {
      this.projectSelected = found;
    },
    childLoader() {
      this.$dispatch('loadTimer', this);
    },
  },
};
</script>

<style scoped>
  img {
    max-width: 100%;
    padding: 36px;
  }
</style>
