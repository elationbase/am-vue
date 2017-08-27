<template>
  <article class="view-project">
    <load-project v-if="loading"></load-project>

    <transition name="fade">
      <section v-if="show" class="view-project__wrap">
        <a v-on:click.prevent="hideProject() + !show">CLOSE</a>
        <h1 v-text="projectPass.company"></h1>
        <h2 v-text="projectPass.name">{{projectPass.company}}</h2>
        <p v-text="projectPass.project"></p>
        <img :src="projectPass.picture" alt="">
        <p>{{projectPass.body}}</p>
      </section>
    </transition>
  </article>
</template>

<script>
import LoadProject from '@/components/LoadProject';

export default {
  components: {
    LoadProject,
  },
  props: ['projectPass'],
  data() {
    return {
      loading: true,
      projectSelected: false,
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  },
  methods: {
    hideProject() {
      this.$emit('projectHide');
    },
  },
};
</script>

<style lang="scss">
  .view-project {
    &__wrap {
      background-color: var(--dark);
      min-height: 100vh;
      padding: 6rem 12rem;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  img {
    max-width: 100%;
    padding: 36px;
  }
</style>
