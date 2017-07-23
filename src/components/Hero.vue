<template>
  <section>
      <header>
        <h1 v-text="name"></h1>
        <h2 v-text="position"></h2>
      </header>
      <p v-text="tag"></p>
  </section>
</template>

<script>
  export default {
    props: {
    },
    computed: {
    },
    data() {
      return {
        name: 'Alvaro Montero',
        position: 'UX Designer + UI Engineer',
        tag: 'a Creative Technologist',
      };
    },
  };
</script>

<style scoped="">
  section {
    background: url('/static/img/hero1.jpg') center right no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 75vh;
    position: relative;
    text-transform: uppercase;
    text-align: left;
  }
  header {
    position: absolute;
    top: 50px;
    left: 50px;
    color: white;
  }
  h1 {
    font-size: 42px;
    font-weight: 800;
  }
  h2 {
    font-size: 26px;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50px;
    font-size: 36px;
    color: #623b42;
  }
</style>
