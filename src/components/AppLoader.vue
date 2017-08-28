<template>
  <div class="loader">
      <eb-logo></eb-logo>
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

@keyframes round {
  0% {
    bottom: 100%;
  }
  20% {
    bottom: 100%;
  }
  100% {
    bottom: 0;
  }
}
.loader {
  @include full();
  z-index: z-index(loader);
  background-color: theme-get(background, primary);
  will-change: bottom;
  .logo {
    width: $size;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .cw-loader {
    @include full('absolute');
    bottom: 0;
    background-color: theme-get(background, alternate);
    animation: round 2s linear;
  }
}
</style>
