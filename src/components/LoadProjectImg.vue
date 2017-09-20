<template>
  <span class="eb-img-loader">Loading...</span>
</template>

<script>
  export default {
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";


$fullSize: 40px;


.eb-img-loader {
  margin: 60px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  text-indent: -9999em;
  border-top: 2px solid rgba(0,0,0,0.2);
  border-right: 2px solid rgba(0,0,0,0.2);
  border-bottom: 2px solid rgba(0,0,0,0.2);
  border-left: 2px solid $color-orange;
  animation: round 0.5s infinite linear;
  border-radius: 50%;
  width: $fullSize;
  height: $fullSize;
  margin-top: -$fullSize / 2;
  margin-left: -$fullSize / 2;
  &:after {
    content: '';
    border-radius: 50%;
    width: $fullSize;
    height: $fullSize;
  }
}
</style>
