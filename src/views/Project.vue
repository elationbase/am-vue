<template>
  <div>
    <section v-for="project in projects" :key="project._id">
      <div v-if="project.company === $route.params.id">
        <h1 v-text="project.company"></h1>
        <h2 v-text="project.name">{{project.company}}</h2>
        <p v-text="project.project"></p>
        <img :src="project.picture" alt="">
        <p>{{project.body}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import getProjects from '@/api/projects';

export default {
  data() {
    return {
      loading: false,
      projects: getProjects.projects,
    };
  },
};
</script>

<style scoped>
  img {
    max-width: 100%;
    padding: 36px;
  }
</style>
