<template>
  <div class="loader">
      <div class="am-loader"></div>
  </div>
</template>

<style lang="scss">
@import "../scss/utilities/base";

.loader {
  @include full();
  z-index: z-index(loader);
  background-color: $color-white;
  .am-loader {
    @include full('absolute');
    bottom: 0;
    background: radial-gradient(ellipse at center, #eeeeee 0%, #dfe4e7 100%);
    will-change: bottom;
    animation: upDown 1s linear;
    -webkit-backface-visibility: hidden;
  	-webkit-perspective: 1000;
    -webkit-transform: translate3d(0, 0, 0);
  }
}
</style>
