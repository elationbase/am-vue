<template>
  <div class="eb-loader" :class="{'eb-loader--active' : ready}">
    <div class="eb-loader__item eb-loader__item--first"></div>
    <div class="leb-oader__item eb-loader__item--second"></div>
    <div class="eb-loader__item eb-loader__item--third"></div>
    <div class="eb-loader__item eb-loader__item--forth"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ready: false,
      };
    },
    props: {
      fullLoad: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      loaderSpeed() {
        return {
          'animation-duration': `${this.speed}s`,
          'animation-name': 'dash',
          'animation-timing-function': 'linear',
          'animation-iteration-count': 100,
        };
      },
    },
    mounted() {
      this.ready = true;
      setTimeout(() => {
        this.ready = false;
      }, 1000);
    },
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

.eb-loader {
  &--active {
    .eb-loader__item {
      top: 0;
      left: 0;
      width: 2000px;
      height: 2000px;
      transform: scale(3);
    }
  }
  &__item {
    position: fixed;
    top: 300px;
    right: 0;
    bottom: 0;
    left: 400px;
    background-color: theme-get(background, alternate);
    will-change: opacity, top, left, width, height, transform;
    transform: scale(0);
    transition: all 0.6s ease-out;
    border-radius: 50%;
    display: block;
    width: 0;
    height: 0;
    &--first {
      z-index: z-index(project1);
      opacity: 0.7;
    }
    &--second {
    z-index: z-index(project2);
      transition-delay: 0.3s;
      background-color: $color-blue;
      opacity: 0.3;
    }
    &--third {
    z-index: z-index(project3);
      transition-delay: 0.4s;
      background-color: $color-orange;
      opacity: 0.3;
    }
    &--forth {
    z-index: z-index(project4);
      transition-delay: 0.6s;
    }
  }
}
</style>
