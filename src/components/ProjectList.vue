<template>
  <article class="projects">
    <div class="projects__group">
      <div class="projects__row">
        <section v-for="project in projectsData" :key="project.key" v-if="project.index <= projectQuarter" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
          <a href="#" v-on:click.prevent="showProject(project); setPositionY();">
            <div class="projects__row__project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <div class="projects__row__project__slide">
              <h2 v-text="project.company"></h2>
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
      <div class="projects__row">
        <section v-for="project in projectsData" :key="project.key" v-if="project.index > projectQuarter && project.index <= projectSplit" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
          <a href="#" v-on:click.prevent="showProject(project); setPositionY();">
            <div class="projects__row__project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <div class="projects__row__project__slide">
            <h2 v-text="project.company"></h2>
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
    </div>
    <div class="projects__group">
      <div class="projects__row">
        <section v-for="project in projectsData" :key="project.key" v-if="project.index > projectSplit && project.index <= projectSplit + projectQuarter" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
          <a href="#" v-on:click.prevent="showProject(project); setPositionY();">
            <div class="projects__row__project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <div class="projects__row__project__slide">
            <h2 v-text="project.company"></h2>
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
      <div class="projects__row">
        <section v-for="project in projectsData" :key="project.key" v-if="project.index > projectSplit + projectQuarter" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
          <a href="#" v-on:click.prevent="showProject(project); setPositionY();">
            <div class="projects__row__project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <div class="projects__row__project__slide">
            <h2 v-text="project.company"></h2>
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
    </div>
  </article>

</template>

<script>
  export default {
    props: [
      'projectsData',
    ],
    methods: {
      showProject(project) {
        this.$emit('projectShow', project);
      },
      setPositionY() {
        this.$emit('getPositionY', window.scrollY);
      },
      getSize() {
        return 12;
      },
      getQuarterSize() {
        return this.getSize() / 4;
      },
      getHalfSize() {
        return this.getSize() / 2;
      },
      getFullSize() {
        return this.getSize();
      },
    },
    data() {
      return {
        projectQuarter: this.getQuarterSize(),
        projectSplit: this.getHalfSize(),
        projectsLength: this.getFullSize(),
        positionY: 0,
      };
    },
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

$projectSize: 200px;

.projects {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 1rem;
  &__group {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 300px;
  }
  &__row {
    flex-grow: 1;
    min-width: 300px;
    &:hover {
      ~ .projects__row .projects__row__project__slide {
        transform: translateX(-100%);
      }
      .projects__row__project__slide {
        transform: translateY(100%);
      }
      .projects__row__project:hover ~ .projects__row__project .projects__row__project__slide {
        transform: translateY(-100%);
      }
      .projects__row__project:hover .projects__row__project__slide {
        transform: none;
        visibility: visible;
        transition-delay: 0s;
      }
      h2 {
        margin-top: 40%;
        opacity: 1;
      }
      p {
        margin-top: 0;
        opacity: 1;
      }
    }

    &__project {
      overflow: hidden;
      position: relative;
      color: $color-white;
      min-height: 300px;
      @include phone {
        min-height: $projectSize;
        &--x2 {
          min-height: $projectSize * 2;
        }
      };
      @include tablet {
        min-height: $projectSize + 50;
        &--x2 {
          min-height: $projectSize * 2 + 100;
        }
      };
      @include large {
        min-height: $projectSize + 100;
        &--x2 {
          min-height: $projectSize * 2 + 200;
        }
      };
      margin: 2rem 1rem;
      cursor: pointer;
      h2 {
        margin-bottom: 5px;
        line-height: 1;
        margin-top: $projectSize;
        opacity: 0;
        transition: all 0.8s ease-out;
        color: $color-white;
        font-weight: theme-get(weight, light);
        will-change: margin-top, opacity;
      }
      p {
        margin-top: $projectSize;
        line-height: 1;
        opacity: 0;
        transition: all 1.3s ease-out;
        color: $color-salmon;
        will-change: margin-top, opacity;
      }
      &__photo {
        background: 50% 50% / cover;
        @include full('absolute');
        transition: 1s;
        transform-origin: center;
        will-change: transform, filter;
      }
      &__slide {
        @include full('absolute');
        transition: all 0.275s ease-in-out, visibility 0s 0.275s;
        visibility: hidden;
        will-change: transform;
        transform: translateX(100%);
        background: rgba($color-dark, 0.8);
        padding: 0 1.5rem;
      }
      &:hover {
        .projects__row__project__photo {
          transform: scale(1.3);
          filter: blur(3px);
        }
      }
    }
  }
}

</style>
