<template>
  <div class="comments">
    <h2>What People Say About Me</h2>
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
.comments, .comments ul, .comments li {
	height: 70vh;
}

.comments {
	margin: auto;
	overflow: hidden;
	padding: 5rem;
	position: relative;
	width: 100%;
  h2 {
    font-size: 4.2rem;
    font-weight: 200;
    margin-bottom: 2rem;
    color: var(--blue);
    text-align: center;
  }
  ul {
  	position: absolute;
  	left: 0;
  	top: 0;
  	width: 400%;
    will-change: transition;
  	transition: left .3s ease-out;
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
    font-size: 3.6rem;
    line-height: 1.6;
    text-align: center;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translate(0, -50%);
    padding: 0 15rem;
  }
  &__container {
  	width: 100%;
  }
}



@-webkit-keyframes slide-animation {
	20% {
	  left: 0;
  }
	25% {
	  left: -100%;
  }
	45% {
	  left: -100%;
  }
	50% {
	  left: -200%;
  }
	70% {
	  left: -200%;
  }
	75% {
	  left: -300%;
  }
	98% {
	  left: -300%;
  }
	100% {
	  left: 0;
  }
}

</style>
