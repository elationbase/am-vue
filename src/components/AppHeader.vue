<template>
  <header class="main-header">
    <eb-logo></eb-logo>
    <eb-media></eb-media>
  </header>
</template>

<script>
import EbLogo from '@/components/EbLogo';
import EbMedia from '@/components/EbMedia';

export default {
  components: {
    EbLogo,
    EbMedia,
  },
  data() {
    return {
      icons: {
        one: {
          url: 'https://github.com/elationbase',
          icon: 'icon-github',
        },
        two: {
          url: 'https://www.npmjs.com/~elationbase',
          icon: 'icon-npm',
        },
        three: {
          url: 'https://codepen.io/elationbase/',
          icon: 'icon-codepen',
        },
        four: {
          url: 'https://www.linkedin.com/in/monterodesign/',
          icon: 'icon-linkedin',
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../scss/utilities/base";

.main-header {
  @include full();
  bottom: auto;
  z-index: z-index(header);
  background-color: theme-get(background, alternate);
  text-align: center;
  height: 35px;
  padding-top: theme-get(space, small);
  .logo {
    width: 60px;
    margin-left: theme-get(space, small);;
  }
}
</style>
