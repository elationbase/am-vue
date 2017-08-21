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
    position: relative;
  }
  section:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  }
  header {
    position: absolute;
    top: 50px;
    left: 50px;
    color: white;
  }
  h1 {
    font-size: 4.2rem;
    font-weight: 800;
  }
  h2 {
    font-size: 2.6rem;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50px;
    font-size: 3.6rem;
    color: #623b42;
  }
</style>
