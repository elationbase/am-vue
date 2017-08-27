<template>
  <article class="projects">
    <div class="projects__group">
      <div class="projects__row">
        <section v-for="(project, index) in projects" :key="project.key" v-if="index <= projectSplit" class="project" :class="{ 'project--x2': project.important }">
          <a href="#" v-on:click.prevent="showProject(project)">
            <div class="project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <h2 v-text="project.name"></h2>
            <div class="project__slide">
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
      <div class="projects__row">
        <section v-for="(project, index) in projects" :key="project.key" v-if="index > projectSplit" class="project" :class="{ 'project--x2': project.important }">
          <a :href="'/project/' + project.company">
            <div class="project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <h2 v-text="project.name"></h2>
            <div class="project__slide">
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
    </div>
    <div class="projects__group">
      <div class="projects__row">
        <section v-for="(project, index) in projects" :key="project.key" v-if="index <= projectSplit" class="project" :class="{ 'project--x2': project.important }">
          <a :href="'/project/' + project.company">
            <div class="project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <h2 v-text="project.name"></h2>
            <div class="project__slide">
              <p v-text="project.project"></p>
            </div>
          </a>
        </section>
      </div>
      <div class="projects__row">
        <section v-for="(project, index) in projects" :key="project.key" v-if="index > projectSplit" class="project" :class="{ 'project--x2': project.important }">
          <a :href="'/project/' + project.company">
            <div class="project__photo" :style="{ backgroundImage: 'url(' + project.pictureHome + ')' }"></div>
            <h2 v-text="project.name"></h2>
            <div class="project__slide">
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
      getSize() {
        return Object.keys(getProjects.projects).length;
      },
      getHalfSize() {
        return this.getSize() / 2;
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
        projectSplit: this.getHalfSize(),
        counter: 0,
      };
    },
  };
</script>

<style lang="scss">

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
      ~ .projects__row .project__slide {
        transform: translateX(-100%);
      }
      .project__slide {
        transform: translateY(100%);
      }
      .project:hover ~ .project .project__slide {
        transform: translateY(-100%);
      }
      .project:hover .project__slide {
        transform: none;
        visibility: visible;
        transition-delay: 0s;
      }
    }
  }
}
.project {
  overflow: hidden;
  position: relative;
  color: #fff;
  min-height: 300px;
  margin: 2rem 1rem;
  &--x2 {
    min-height: 600px;
  }
  h2 {
    font-weight: 300;
    font-size: 1.33333rem;
    line-height: 1.25;
    margin: 0;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 0;
  }
  &__photo {
    background: 50% 50% / cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 1s;
    transform-origin: center;
  }
  &__slide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.275s ease-in-out, visibility 0s 0.275s;
    visibility: hidden;
    will-change: transform;
    transform: translateX(100%);
      background: rgba(0,0,0,0.4);
      padding: 0 1.5rem;
  }
  &:hover {
    .project__photo {
      transform: scale(1.25);
    }
  }
}

</style>
