<template>
  <article class="stack">
    <h2 v-text="headline"></h2>
    <ul class="stack__list">
      <li v-for="tool in tools" :key="tools.key">
        <svg :class="tool.icon">
          <use v-bind="{'xlink:href':'#'+ tool.icon}"></use>
        </svg>
        <p v-text="tool.title"></p>
      </li>
      <li v-for="tool in tools" :key="tools.key">
        <svg :class="tool.icon">
          <use v-bind="{'xlink:href':'#'+ tool.icon}"></use>
        </svg>
        <p v-text="tool.title"></p>
      </li>
      <li v-for="tool in tools" :key="tools.key">
        <svg :class="tool.icon">
          <use v-bind="{'xlink:href':'#'+ tool.icon}"></use>
        </svg>
        <p v-text="tool.title"></p>
      </li>
    </ul>



    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="icon-git" viewBox="0 0 2500 2500">
          <path class="cls-1" d="M1974.6,1182.89l-657.54-657.5a97,97,0,0,0-137.15,0L1043.37,661.93l173.21,173.21A115.18,115.18,0,0,1,1362.44,982l166.93,166.93a115.26,115.26,0,1,1-69.12,65.07L1304.57,1058.3l0,409.66a116.6,116.6,0,0,1,30.52,21.83,115.3,115.3,0,1,1-125.42-25.18V1051.13a114,114,0,0,1-37.77-25.18A115.37,115.37,0,0,1,1147,899.78L976.27,729,525.41,1179.85a97,97,0,0,0,0,137.2L1183,1974.56a97,97,0,0,0,137.16,0l654.47-654.46a97.05,97.05,0,0,0,0-137.21"/>
        </symbol>
        <symbol id="icon-team" viewBox="0 0 512 512">
          <path d="m475 69l-216 0l0 0l-6 0l0 0l-216 0c-20 0-37 17-37 38l0 212c0 21 17 38 37 38l59 0c15 0 38 7 51 15l78 54c20 13 27 17 31 17c0 0 0 0 0 0c0 0 0 0 0 0c4 0 11-4 31-18l78-53c13-8 36-15 51-15l59 0c20 0 37-17 37-38l0-212c0-21-17-38-37-38z m22 250c0 13-10 23-22 23l-59 0c-18 0-44 8-59 18l-78 53c-12 8-20 13-23 14c-3-1-11-6-23-14l-78-53c-15-10-41-18-59-18l-59 0c-12 0-22-10-22-23l0-212c0-13 10-23 22-23l73 0l0 0l268 0l0 0l97 0c12 0 22 10 22 23z m-337-135c-20 0-37 16-37 36c0 20 17 36 37 36c20 0 36-16 36-36c0-20-16-36-36-36z m0 57c-12 0-22-10-22-21c0-12 10-22 22-22c11 0 21 10 21 22c0 11-10 21-21 21z m93-59c-20 0-36 16-36 36c0 20 16 37 36 37c20 0 36-17 36-37c0-20-16-36-36-36z m0 58c-12 0-21-10-21-22c0-11 9-21 21-21c12 0 21 10 21 21c0 12-9 22-21 22z m95-56c-20 0-36 16-36 36c0 20 16 36 36 36c20 0 36-16 36-36c0-20-16-36-36-36z m0 57c-12 0-21-10-21-21c0-12 9-22 21-22c12 0 21 10 21 22c0 11-9 21-21 21z"/>
        </symbol>
        <symbol id="icon-frameworks" viewBox="0 0 512 512">
          <path d="m45 228l181 0c5 0 8-4 8-8c0-4-3-7-8-7l-181 0c-5 0-8 3-8 7c0 4 3 8 8 8z m1 36l85 0c4 0 7-3 7-8c0-4-3-7-7-7l-85 0c-4 0-8 3-8 7c0 5 4 8 8 8z m0 37l85 0c4 0 7-3 7-8c0-4-3-7-7-7l-85 0c-4 0-8 3-8 7c0 5 4 8 8 8z m0 39l182 0c4 0 8-4 8-8c0-4-4-8-8-8l-182 0c-4 0-7 4-7 8c0 4 3 8 7 8z m182 22l-182 0c-4 0-7 3-7 8c0 4 3 7 7 7l182 0c4 0 8-3 8-7c0-5-4-8-8-8z m251-280l-446 0c-18 0-33 15-33 33l0 282c0 18 15 33 33 33l446 0c18 0 33-15 33-33l0-282c0-18-15-33-33-33z m-446 13l446 0c11 0 20 9 20 20l0 34l-486 0l0-34c0-11 9-20 20-20z m446 322l-446 0c-11 0-20-9-20-20l0-234l486 0l0 234c0 11-9 20-20 20z m-430-280c8 0 14-7 14-14c0-8-6-14-14-14c-7 0-13 6-13 14c0 7 6 14 13 14z m48-14c0 7-6 13-14 13c-7 0-13-6-13-13c0-8 6-14 13-14c8 0 14 6 14 14z m34 0c0 7-6 13-14 13c-7 0-13-6-13-13c0-8 6-14 13-14c8 0 14 6 14 14z m180 254l159 0l0-167l-159 0z m13-154l132 0l0 141l-132 0z"/>
        </symbol>
        <symbol id="icon-design" viewBox="0 0 512 512">
          <path d="m495 270l-478 0c-9 0-17 8-17 17l0 66c0 10 8 17 17 17l478 0c9 0 17-7 17-17l0-66c0-9-8-17-17-17z m6 83c0 4-3 6-6 6l-478 0c-3 0-6-2-6-6l0-66c0-3 3-5 6-5l13 0l0 18l11 0l0-18l10 0l0 18l12 0l0-18l10 0l0 35l12 0l0-35l10 0l0 19l11 0l0-19l11 0l0 19l11 0l0-19l10 0l0 36l11 0l0-36l10 0l0 19l11 0l0-19l9 0l0 19l12 0l0-19l9 0l0 35l11 0l0-35l11 0l0 18l12 0l0-18l10 0l0 18l11 0l0-18l11 0l0 35l12 0l0-35l10 0l0 18l11 0l0-18l10 0l0 18l12 0l0-18l10 0l0 35l12 0l0-35l10 0l0 19l11 0l0-19l10 0l0 18l11 0l0-18l12 0l0 35l12 0l0-35l12 0l0 19l11 0l0-19l10 0l0 19l12 0l0-19l12 0l0 35l11 0l0-35l18 0c3 0 6 2 6 5l0 66z m-386-122l0 0l247 0l0 0l36 0c13 0 26-4 35-13c9-8 15-20 15-32c0-24-23-44-50-44l-37 0l0 0l-246 0l0 0l-80 43z m202-11l-199 0l-6-3l15-15l-14-15l-2-1l1-1l0 0l15-15l-14-14l5-3l199 0z m12-67l10 0l0 67l-10 0z m-218 17l-7 7l0 0l-9 8l8 9l0 0l1 0l0 0l0 1l4 4l0 0l3 3l-9 9l-17-10l0-30l18-10z m-38 24l-15-9l15-8z m363-8c0 9-3 18-11 24c-7 6-17 10-27 10l-25 0l0-67l2 0l0 0l23 0c21 0 38 15 38 33z m-75 34l-11 0l0-67l11 0z"/>
        </symbol>
    </svg>
  </article>

</template>

<script>
  export default {
    props: {
    },
    computed: {
    },
    data() {
      return {
        headline: 'Typical technology stack',
        tools: {
          first: {
            title: 'JavaScript',
            icon: 'icon-git',
          },
          second: {
            title: 'Code',
            icon: 'icon-code',
          },
          third: {
            title: 'Development',
            icon: 'icon-frameworks',
          },
          forth: {
            title: 'Team',
            icon: 'icon-team',
          },
        },
      };
    },
  };
</script>

<style lang="scss">
.cls-1 {
  fill: none;
  stroke: #333;
  stroke-miterlimit: 10;
}
.stack {
  background-color: var(--light);
  min-height: 75vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  // max-width: 80%;
  margin: auto;
  padding: 10rem 0.1rem;
  header, p {
    width: 100%;
    order: 1;
  }
  h2 {
    font-size: 4.2rem;
    font-weight: 200;
    margin-bottom: 2rem;
    color: var(--blue);
  }
  h3 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    font-weight: 200;
    color: var(--light);
  }
  &__section {
    margin-bottom: 3rem;
  }
  &__list {
    display: flex;
    justify-content: center;
    > li {
      display: block;
      font-size: 1.8rem;
      line-height: 1.6;
      color: var(--text);
      padding: 0 3rem;
      li {

      }
    }
    svg {
      width: 80px;
      height: 80px;
      stroke: #333;
    }
    p {
      font-size: 2.2rem;
      text-transform: uppercase;
      margin-bottom: 6px;
      color: var(--light);
    }
  }
}

</style>
