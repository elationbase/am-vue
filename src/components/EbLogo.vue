<template>
  <div class="logo">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 310.8 142.1" style="enable-background:new 0 0 310.8 142.1;" xml:space="preserve">

      <polygon class="st st1" points="62.8,6.3 100.8,6.3 129.2,135 91.1,134.1 "/>
      <polygon class="st st2" points="186.9,6.8 148.3,5.6 156.9,107.8 195.5,109 "/>
      <polygon class="st st2" points="246.9,6.7 208.3,5.6 211.5,133.3 250.5,134.6 "/>
      <path class="path path1" d="M100.2,11c2.2-5-0.5-9.1-6-9.1H71.9c-5.5,0-11.8,4.1-14,9.1L5.7,129.4c-2.2,5,0.5,9.1,6,9.1H34
      	c5.5,0,11.8-4.1,14-9.1L100.2,11z"/>
      <path class="path path2" d="M186.2,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1L91.7,129.4c-2.2,5,0.5,9.1,6,9.1H120
      	c5.5,0,11.8-4.1,14-9.1L186.2,11z"/>
      <path class="path path3" d="M246,10.8c2.4-4.9-0.1-9-5.6-9h-22.2c-5.5,0-12,4-14.4,9l-45.9,92.9c-2.4,4.9,0.1,9,5.6,9h22.3
      	c5.5,0,12-4,14.4-9L246,10.8z"/>
      <path class="path path4" d="M306.7,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1l-52.2,118.4c-2.2,5,0.5,9.1,6,9.1h22.3
      	c5.5,0,11.8-4.1,14-9.1L306.7,11z"/>


        <path class="fill fill--blue fill1" d="M100.2,11c2.2-5-0.5-9.1-6-9.1H71.9c-5.5,0-11.8,4.1-14,9.1L5.7,129.4c-2.2,5,0.5,9.1,6,9.1H34
        	c5.5,0,11.8-4.1,14-9.1L100.2,11z"/>
        <path class="fill fill--grey fill2" d="M186.2,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1L91.7,129.4c-2.2,5,0.5,9.1,6,9.1H120
        	c5.5,0,11.8-4.1,14-9.1L186.2,11z"/>
        <path class="fill fill--grey fill3" d="M246,10.8c2.4-4.9-0.1-9-5.6-9h-22.2c-5.5,0-12,4-14.4,9l-45.9,92.9c-2.4,4.9,0.1,9,5.6,9h22.3
        	c5.5,0,12-4,14.4-9L246,10.8z"/>
        <path class="fill fill--grey fill4" d="M306.7,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1l-52.2,118.4c-2.2,5,0.5,9.1,6,9.1h22.3
        	c5.5,0,11.8-4.1,14-9.1L306.7,11z"/>
      </svg>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

.fill {
  opacity: 0;
  animation: fill 0.5s linear forwards;
  will-change: opacity;
}
.fill--blue {
  fill:#2cb3c4;
}
.fill--grey {
  fill:#4e6374;
}
.fill1 {
    animation-delay: 1.6s
}
.fill2 {
    animation-delay: 2s
}
.fill3 {
    animation-delay: 2.4s
}
.fill4 {
    animation-delay: 2.8s
}

.path {
  fill: transparent;
  stroke:#FFF;
  stroke-miterlimit:10;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dashLogo 2.5s linear forwards;
}
.path2 {
  animation-delay: 0.4s
}
.path3 {
  animation-delay: 0.8s
}
.path4 {
  animation-delay: 1.2s
}

.st {
  transform: scaleY(0) skewX(-25deg);
  animation: skewLogo 0.4s linear forwards;
  animation-delay: 3.2s
}
.st1 {
    fill:#A7A9AC;
}

.st2 {
    fill:#E44F26;
}

.logo {
  transform: translate(0, 0);
  animation: moveLogo 0.75s linear forwards;
  will-change: opacity, width;
  opacity: 0;
}
</style>
