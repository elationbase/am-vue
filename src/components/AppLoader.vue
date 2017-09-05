<template>
  <div class="loader">
      <div class="cw-loader">
      </div>
  </div>
</template>

<script>
  import EbLogo from '@/components/EbLogo';

  export default {
    components: {
      EbLogo,
    },
    props: {
      fullLoad: {
        type: Boolean,
        default: false,
      },
      speed: {
        type: Number,
        default: '0.8',
      },
      message: {
        type: String,
        default: '',
      },
    },
    computed: {
      loaderSpeed() {
        return {
          // 'animation-duration': `${this.speed}s`,
          // 'animation-name': 'dash',
          // 'animation-timing-function': 'linear',
          // 'animation-iteration-count': 100,
        };
      },
    },
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

$size: 120px;

.loader {
  @include full();
  z-index: z-index(loader);
  background-color: $color-white;
  .cw-loader {
    @include full('absolute');
    bottom: 0;
    background: radial-gradient(ellipse at center, #eeeeee 0%, #dfe4e7 100%);
    will-change: bottom;
    animation: upDown 2s linear;
  }
}
</style>
