<template>
  <footer class="main-footer">
    <div class="main-footer__wrap">
      <eb-logo></eb-logo>
      <p><small>Designed and Coded with <span>&#10084;</span> by <span>Alvaro Montero</span> 2017 for <span>You</span>.</small></p>
      <p><small>The code repo for this page can be found <span>@</span><a href="https://github.com/elationbase/am-vue">github.com</a></small></p>

      <p class="dark"><small>Source Technology used: Sketch + SVG + HTML + SCSS + JS + VueJS + GitHub.</small></p>
      <p class="dark"><small>Stock Photography courtesy of https://picjumbo.com</small></p>
    </div>
  </footer>
</template>

<script>
  import EbMedia from '@/components/EbMedia';
  import EbLogo from '@/components/EbLogo';

  export default {
    components: {
      EbMedia,
      EbLogo,
    },
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

.main-footer {
	margin: auto;
	overflow: hidden;
	position: relative;
  &__wrap {
    background-color: theme-get(background, alternate);
    @include skew(right, null, null);

    @include phone {
      padding: theme-get(space, big);
    }
    @include tablet {
      padding: theme-get(space, bigger);
    }
    @include large {
      padding-top: theme-get(space, bigger);
      padding-bottom: theme-get(space, bigger);
      padding-left: theme-get(space, huge);
      padding-right: theme-get(space, huge);
    }
  }
  .logo {
    width: 150px;
    @include phone {
      width: 110px;
    }
    @include tablet {
      width: 130px;
    }
    @include large {
      width: 150px;
    }
  }
  p {
    margin-bottom: theme-get(space, none);
    span {
      color: $color-light;
    }
    &.dark {
      color: $color-blue;
      margin-top: theme-get(space, normal);
      font-size: theme-get(text, size, small);
      &:last-child {
        margin-top: theme-get(space, none);
      }
    }
  }
}
</style>
