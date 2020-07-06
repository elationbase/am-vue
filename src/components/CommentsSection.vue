<template>
  <div class="comments">
    <h2 class="eb-type-h2">What People Say About Me</h2>
    <ul>
      <li v-for="comment in commentsData" :key="comment.key">
        <p>{{comment.comment}}<span>{{comment.user}}</span></p>
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
  	width: 300%;
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
  	width: 33.333333%;
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
  span {
    display: block;
    color: theme-get(text, color, blue);
    font-weight: theme-get(weight, bold);
  }
  &__container {
  	width: 100%;
  }
}

</style>
