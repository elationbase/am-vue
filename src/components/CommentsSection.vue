<template>
  <div class="comments">
    <h2 class="eb-type-h2">What People Say About Me</h2>
    <ul>
      <li v-for="comment in commentsData" :key="comment.key">
        <div class="comments__container">
          <p v-text="comment.comment"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['commentsData'],
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

.comments {
	margin: auto;
	overflow: hidden;
  @include small {
	   padding: theme-get(space, small);
  }
  @include large {
    padding: theme-get(space, big);
  }
  h2 {
    text-align: center;
  }
  ul {
  	width: 400%;
    margin-bottom: theme-get(space, normal);
    will-change: transition;
    animation: slide-animation 25s infinite;
    &:hover{
    	animation-play-state: paused;
    }
  }
  li {
  	float: left;
  	position: relative;
  	width: 25%;
  	display: inline-block;
  }
  p {
    @include small {
      padding-left: theme-get(space, small);
      padding-right: theme-get(space, small);
    }
    @include large {
      padding-left: theme-get(space, bigger);
      padding-right: theme-get(space, bigger);
    }
    text-align: center;
  }
  &__container {
  	width: 100%;
  }
}

</style>
