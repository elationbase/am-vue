<template>
  <div class="loader">
      <svg class="loader__img" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 310.8 142.1" style="enable-background:new 0 0 310.8 142.1;" xml:space="preserve">
        <title>AM Logo</title>
        <path :style="loaderSpeed" class="path path1" d="M100.2,11c2.2-5-0.5-9.1-6-9.1H71.9c-5.5,0-11.8,4.1-14,9.1L5.7,129.4c-2.2,5,0.5,9.1,6,9.1H34
        	c5.5,0,11.8-4.1,14-9.1L100.2,11z"/>
        <path :style="loaderSpeed" class="path path2" d="M186.2,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1L91.7,129.4c-2.2,5,0.5,9.1,6,9.1H120
        	c5.5,0,11.8-4.1,14-9.1L186.2,11z"/>
        <path :style="loaderSpeed" class="path path3" d="M246,10.8c2.4-4.9-0.1-9-5.6-9h-22.2c-5.5,0-12,4-14.4,9l-45.9,92.9c-2.4,4.9,0.1,9,5.6,9h22.3
        	c5.5,0,12-4,14.4-9L246,10.8z"/>
        <path :style="loaderSpeed" class="path path4" d="M306.7,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1l-52.2,118.4c-2.2,5,0.5,9.1,6,9.1h22.3
      	c5.5,0,11.8-4.1,14-9.1L306.7,11z"/>
      </svg>
      <span class="loader__txt" v-if="message.length > 0">{{message}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      fullLoad: {
        type: Boolean,
        default: false,
      },
      speed: {
        type: Number,
        default: '0.8',
      },
      message: {
        type: String,
        default: '',
      },
    },
    computed: {
      loaderSpeed() {
        return {
          'animation-duration': `${this.speed}s`,
          'animation-name': 'dash',
          'animation-timing-function': 'linear',
          'animation-iteration-count': 100,
        };
      },
    },
  };
</script>

<style>

.path {
  fill: transparent;
  stroke:#FFF;
  stroke-miterlimit:1;
  stroke-dasharray: 400;
  will-change: opacity, stroke-dashoffset;
  animation-iteration-count: 100;
}
.path2 {
  animation-delay: 0.3s;
  animation-iteration-count: 100;
}
.path3 {
  animation-delay: 0.6s;
  animation-iteration-count: 100;
}
.path4 {
  animation-delay: 0.9s;
  animation-iteration-count: 100;
}
@keyframes dash {
  0% {
    stroke-dashoffset: 1600;
  }
  50% {
    stroke-dashoffset: 10;
  }
  100% {
    stroke-dashoffset: 1200;
  }
}


.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: z-index(loader);
  background-color: var(--dark);
  will-change: opacity;
}
.loader__img {
  width: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader__txt {
  width: 140px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-100px, 0);
}
</style>
