<template>
  <div class="comments">
    <h2 class="eb-type-h2">What People Say About Me</h2>
    <ul>
      <li>
        <div class="comments__container">
          <p>Alvaro leverages his extensive domain knowledge to build confidence with stakeholders and effectively influence their design decisions. I have no reservations with Alvaro leading stakeholder meetings or design discussions.</p>
        </div>
      </li>
      <li>
        <div class="comments__container">
          <p>When presented with a problem, Alvaro is tenacious, not resting until a suitable solution is found.</p>
        </div>
      </li>
      <li>
        <div class="comments__container">
          <p>Alvaro's clear understanding of his craft and ability to deliver have fostered a solid relationship with both our stakeholders and his team.</p>
        </div>
      </li>
      <li>
        <div class="comments__container">
          <p>Alvaro is never satisfied with the status quo. He is constantly looking to introduce new and innovative user experiences. His drive continuously pushes the rest of the team to excel.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
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
