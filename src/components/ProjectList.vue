<template>
  <article class="projects">
    <div class="projects__group">
      <div class="projects__row">
        <section v-for="(project, index) in projects" :key="project.key" v-if="index <= projectSplit / 2" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
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
        <section v-for="(project, index) in projects" :key="project.key" v-if="index > projectSplit / 2 && index <= projectSplit" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
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
        <section v-for="(project, index) in projects" :key="project.key" v-if="index > projectSplit && index <= (projectSplit) + (projectSplit / 2)" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
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
        <section v-for="(project, index) in projects" :key="project.key" v-if="index > (projectSplit) + (projectSplit / 2)" class="projects__row__project" :class="{ 'projects__row__project--x2': project.important }">
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
  import getProjects from '@/api/projects';

  export default {
    methods: {
      showProject(project) {
        this.$emit('projectShow', project);
      },
      setPositionY() {
        this.$emit('getPositionY', window.scrollY);
      },
      getSize() {
        return Object.keys(getProjects.projects).length;
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
      splipObj(part) {
        const projectsObj = getProjects.projects;
        const fullLength = projectsObj.length;
        const halfLength = Math.ceil(fullLength / 2);
        const leftSide = projectsObj.splice(0, halfLength);
        const rightSide = projectsObj.splice(halfLength, fullLength);
        let newOnj;
        if (part === 'first') {
          newOnj = leftSide;
        }
        if (part === 'last') {
          newOnj = rightSide;
        }
        return newOnj;
      },
    },
    data() {
      return {
        projects: getProjects.projects,
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

// vars
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
      color: #fff;
      min-height: 300px;
      margin: 2rem 1rem;
      cursor: pointer;
      &--x2 {
        min-height: 600px;
      }
      h2 {
        margin-bottom: 5px;
        line-height: 1;
        margin-top: 200px;
        opacity: 0;
        transition: all 0.8s ease-out;
        color: $color-white;
        font-weight: theme-get(weight, light);
        will-change: margin-top, opacity;
      }
      p {
        margin-top: 200px;
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
