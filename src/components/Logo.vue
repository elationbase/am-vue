<template>
  <div class="logo">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 310.8 142.1" style="enable-background:new 0 0 310.8 142.1;" xml:space="preserve">
      <title>AM Logo</title>
      <polygon class="st0" points="62.8,6.3 100.8,6.3 129.2,135 91.1,134.1 "/>
      <polygon class="st2" points="186.9,6.8 148.3,5.6 156.9,107.8 195.5,109 "/>
      <polygon class="st2" points="246.9,6.7 208.3,5.6 211.5,133.3 250.5,134.6 "/>
      <path class="st1 st11" d="M100.2,11c2.2-5-0.5-9.1-6-9.1H71.9c-5.5,0-11.8,4.1-14,9.1L5.7,129.4c-2.2,5,0.5,9.1,6,9.1H34
      	c5.5,0,11.8-4.1,14-9.1L100.2,11z"/>
      <path class="st1 st12" d="M186.2,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1L91.7,129.4c-2.2,5,0.5,9.1,6,9.1H120
      	c5.5,0,11.8-4.1,14-9.1L186.2,11z"/>
      <path class="st1 st13" d="M246,10.8c2.4-4.9-0.1-9-5.6-9h-22.2c-5.5,0-12,4-14.4,9l-45.9,92.9c-2.4,4.9,0.1,9,5.6,9h22.3
      	c5.5,0,12-4,14.4-9L246,10.8z"/>
      <path class="st1 st14" d="M306.7,11c2.2-5-0.5-9.1-6-9.1h-22.2c-5.5,0-11.8,4.1-14,9.1l-52.2,118.4c-2.2,5,0.5,9.1,6,9.1h22.3
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.st0 {
    fill:#A7A9AC;
}
.fill {
}
.fill--blue {
  fill:#2cb3c4;
}
.fill--grey {
  fill:#4e6374;
}

  @each $i 10 {
    .fill$i {
      width: $(i)px;
    }
  }



.st1 {
    fill: transparent;
    stroke:#000000;stroke-miterlimit:10;
}
.st2 {
    fill:#E44F26;
}
.st1 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}
.st12 {
  animation-delay: 0.4s
}
.st13 {
  animation-delay: 0.8s
}
.st14 {
  animation-delay: 1.2s
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fill {
  to {
    fill: #fff;
  }
}
</style>
