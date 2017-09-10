<template>
  <aside class="load-img">
    <span class="load-img__mask" v-on:click.prevent="closeImg"></span>
    <span class="load-img__image" :class="{'load-img__image--zoom-out': toggleZoomData}">
      <img v-on:click.prevent="toggleZoom" :src="imgSrc" alt="">
    </span>
  </aside>
</template>

<script>
export default {
  props: [
    'imgSrc',
  ],
  mounted() {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        this.closeImg();
      }
    });
  },
  methods: {
    toggleZoom() {
      this.toggleZoomData = !this.toggleZoomData;
    },
    closeImg() {
      this.toggleZoomData = false;
      this.loadImage = false;
      this.$emit('loadImageClose');
    },
  },
  data() {
    return {
      loadImage: true,
      toggleZoomData: false,
    };
  },
};
</script>

<style lang="scss">
@import "../scss/utilities/base";

.load-img {
  @include full(fixed);
  z-index: z-index(imageLoad);
  background-color: rgba(0,0,0,0.7);
  overflow: scroll;
  text-align: center;
  &__mask {
    @include full(absolute);
    z-index: z-index(imageMask);
    display: block;
    cursor: zoom-out;
  }
  &__image {
    @include full(absolute);
    z-index: z-index(imageImg);
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    max-width: 90vw;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    display: block;
    overflow: auto;
    box-shadow: 0 0 30px rgba(0,0,0,0.8);
    transition: all 0.4s ease-out;
    will-change: border, height;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: $color-lt-gray;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: darken($color-lt-gray, 40%);
    }
    img {
      transition: all 0.4s ease-out;
      max-height: 90vh;
      max-width: 100%;
      -webkit-backface-visibility: hidden;
      cursor: zoom-in;
      display: block;
    }
    &--zoom-out {
      img {
        max-height: 10000vh;
        cursor: zoom-out;
      }
    }
  }
}
</style>
