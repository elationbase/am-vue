
<template>
  <section class="hero">
      <header>
        <h1 v-text="heroData.name" class="eb-type-h1"></h1>
        <h2 v-text="heroData.position" class="eb-type-h2-alt"></h2>
        <p v-text="heroData.tag"></p>
      </header>
      <ul class="hero__images">
        <li>
          <svg class="hero__images__camera" x="0px" y="0px" viewBox="0 0 2000 1099.9">
          <path class="st0" d="M104,188.1l-7,3l-18.8,20.5l0.5,2.2l-4.2,6c0,0-1.5,2,1.2,4.5
          	s18.5,18.8,18.5,18.8l-5.2,6c0,0,23.8,17.3,37.8,36l6.5-4.5l46,42.5c0,0,5.2,5.2,9.5,3s43.2-34.2,40.8-55.8s-18-22.3-18-22.3
          	s-9.8,0.5-21,14c0,0-11.2-10.3-4-25l3.5,0.2l7.2-8.5l3.8,0.2l17.2-17l0.8-1.2l6.2-6.2v-2.2l4.5-0.5l18.5-18.5l2.5-8.2
          	c0,0,5.2,5.8,9.2,3.5c4-2.2,21.8-20.5,21.8-20.5s-11.8,4.2-13.8,3.2s1.2-4.8,1.2-4.8s11-25.2,7.8-28.2c-3.2-3-31.7-32-31.7-32
          	s-4.8-1.5-9.8,0.2s-18.8,7.5-18.8,7.5s-9,4.2-6.8-2.2s4.2-11,4.2-11s-1.5-2.2-4.8,1s-14.8,19-14.8,19s-1.8,5.5,0.5,9.2l-4.5,5.2
          	l-4,0.8l-14.8,14l-2.8,7.2l-3.8,0.5l-6,6.2v2.8l-5-0.2L143,166.9l1.8,5.5l-1.2,2.8l-1,3.2l-6.5,4.8l0.2,3.5h-4l-5.3-4
          	c0,0-4-1-5.8,1.2s-7,7.5-7,7.5L104,188.1z"/>
          <path class="st0" d="M195.2,120.1c0,0,46.5,32,55.5,55"/>
          <path class="st0" d="M169.5,147.1c0,0,46.5,32,55.5,55"/>
          <path class="st0" d="M159.5,156.9c0,0,49.8,32.2,58.8,55.2"/>
          <polyline class="st0" points="136.2,186.6 142,190.6 158,187.4 186.5,213.6 186.5,237.1
          	"/>
          <path class="st0" d="M180.2,309.2l-27.8-25.9c-1.5-1.4-1.5-3.6-0.2-5.1L163,267
          	c1.4-1.5,3.6-1.5,5.1-0.2l27.8,25.9c1.5,1.4,1.5,3.6,0.2,5.1L185.3,309C184,310.4,181.7,310.5,180.2,309.2z"/>
          <ellipse class="st0" cx="96.2" cy="217.9" rx="12.6" ry="13.3"/>
          <ellipse class="st0" cx="217.6" cy="262.6" rx="4" ry="6.2"/>
          <path class="st0" d="M111.2,231.7l13.5-5.8c0,0,19.5-26,28.3-30s9.8-4.2,9.8-4.2l20.2,18.5
          	c0,0,2.2,7-3.2,12s-29.5,27.8-29.5,27.8l-4.2,14.8l-8-7l-11.8,6l-12.8-12.3l1.8-9.8l1.5-3.8L111.2,231.7z"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__phone" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M2419.7,459.7l-107.4,107.4c-3.9,3.9-10.3,3.9-14.1,0l-49.8-49.8c-3.9-3.9-3.9-10.3,0-14.1l107.4-107.4
          	c3.9-3.9,10.3-3.9,14.1,0l49.8,49.8C2423.6,449.4,2423.6,455.8,2419.7,459.7z"/>
          <path class="st0" d="M2413.6,459.5L2309,564.1c-0.4,0.4-1,0.4-1.4,0l-56.1-56.1c-0.4-0.4-0.4-1,0-1.4L2356.1,402
          	c0.4-0.4,1-0.4,1.4,0l56.1,56.1C2414,458.5,2414,459.1,2413.6,459.5z"/>
          <line class="st0" x1="2379.9" y1="414.6" x2="2400" y2="434.7"/>
          <line class="st0" x1="2266.2" y1="529.1" x2="2286.3" y2="549.2"/>
          <circle class="st0" cx="2408" cy="442.9" r="2.8"/>
          <path class="st0" d="M2420.1,379.3c0,0-5.8-50.6,19-50.6c24.8,0,44.2,10.4,45.7,23c1.5,12.6-0.3,29.8-10.1,31.9
          	c-9.8,2.1-31.6,9.2-41.1,0s-17.5-35.9-7.4-42.6c10.1-6.7,16.3-19.9,31.6-14.7c15.3,5.2,21.8,11,23.3,25.2
          	c1.5,14.1,2.1,38.1-19.6,41.5c-21.8,3.3-45.7-15.4-45.1-32c0.6-16.6,9.5-39.3,25.8-40.2s34,12.9,33.4,27.6
          	c-0.6,14.7,7.7,28.8-10.1,34.4s-51.3-1.5-42.8-29.4c8.5-28,38.5-38,46.8-28.8c8.3,9.2,21.5,22.1,19,34.7s1.5,35-19,39.6
          	s-59.2-24.9-41.7-49.1c17.5-24.2,46-23.6,50.9,5.2c4.9,28.8-39.6,32.8-48.5,20.2s-4.9-38.3,11.3-43.6c16.3-5.2,45.4,4.4,45.4,23.6
          	c0,19.2-5.8,56.1-54.9,35.3c-49.1-20.9-5.2-62.6,8.3-66.3s31.6-0.3,35.6,1.2c4,1.5,39.6,30.1,39.6,30.1s13.2,13.8,6.4,32.8
          	c-6.7,19-19.6,48.3-23.3,51.9"/>
          <path class="st0" d="M2496.8,438.8l2.8,2.3l-4,3.3l0.8,1.2c0,0-18.7,18.3-21.3,19.8c-2.7,1.5-10.3,5-13,1c-2.7-4-2.3-9.7,1.8-12
          	c4.2-2.3,8.8-2.5,10-0.9c1.2,1.6,1,3.7,0.5,4.9c-0.5,1.2,1,1.3,2.2,0c1.2-1.3,15.8-16.5,15.8-16.5l1,0.9L2496.8,438.8z"/>
          <path class="st0" d="M2486.8,376.1l-0.9,10.7h1.7l-0.8,4.5l-7.3,22c0,0,10.2,2.8,9.7,8c-0.5,5.2-1.8,9.8-9.7,9.8
          	c-7.8,0-8.7-9.3-8.7-9.3s0-5.9,4.3-7.2l9.1-27.8"/>
          <polygon class="st0" points="2417.5,379.4 2421.8,379.4 2422.7,398.9 2422.7,412.8 2420.1,412.8 2418.3,396.9 "/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__cups" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M2531.5,87.9c0,22.2-19.6,40.3-40,40.3s-41-18-41-40.3s19.6-40.3,40-40.3S2531.5,65.7,2531.5,87.9z"/>
          <path class="st0" d="M2460.6,61.8c0,0-20.3,19.5-16.1,36s7,22.1,23.5,30.3c12.2,6.1,31.1-0.8,31.1-0.8"/>
          <path class="st0" d="M2531.5,87.9l17,2.4c0,0,15.8,5.5,2.2,18.8l-26.2,0.9"/>
          <path class="st0" d="M2529.3,100.6c0,0,18.2,0,21.4,8.5"/>
          <path class="st0" d="M2421.3-25.3c0,22.7-20.6,41.2-45.9,41.2c-25.4,0-43-18.4-43-41.2s17.6-41.2,43-41.2
          	C2400.7-66.5,2421.3-48,2421.3-25.3z"/>
          <path class="st0" d="M2332.4-23.7c0,0,4,47.9,30,52.7c26,4.8,39.5,2.9,51.6-10.6c12.9-14.5,7.3-48.7,7.3-48.7"/>
          <ellipse class="st0" cx="2330.1" cy="-39.9" rx="9.9" ry="12.6"/>
          <ellipse class="st0" cx="2350" cy="-16.4" rx="10" ry="8.9"/>
          <circle class="st0" cx="2357.3" cy="-64.7" r="7.3"/>
          <circle class="st0" cx="2372" cy="-83.1" r="9"/>
          <ellipse class="st0" cx="2386.3" cy="-24" rx="5.3" ry="6.2"/>
          <ellipse class="st0" cx="2400.4" cy="-70.3" rx="5.9" ry="7.1"/>
          <ellipse class="st0" cx="2402.8" cy="8.2" rx="6" ry="7.6"/>
          <ellipse class="st0" cx="2403.9" cy="-30.1" rx="4.9" ry="6"/>
          <ellipse class="st0" cx="2324.1" cy="-1.9" rx="6" ry="5.7"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__ipad" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M1176.4,440.5l-156.9,156.9c-2.6,2.6-6.8,2.6-9.4,0
          	L902.3,489.7c-2.6-2.6-2.6-6.8,0-9.4l156.9-156.9c2.6-2.6,6.8-2.6,9.4,0l107.8,107.8C1179,433.7,1179,437.9,1176.4,440.5z"/>
          <path class="st0" d="M1159.6,445.4l-136,136c-1.2,1.2-3.1,1.2-4.2,0
          	l-100-100c-1.2-1.2-1.2-3.1,0-4.2l136-136c1.2-1.2,3.1-1.2,4.2,0l100,100C1160.7,442.3,1160.7,444.3,1159.6,445.4z"/>
          <circle class="st0" cx="963.6" cy="536.8" r="5.3"/>
          <circle class="st0" cx="1114.9" cy="384.8" r="2.3"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__notebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M2331.2,299.6l-166.1-166.1c-0.8-0.8-0.8-2.1,0-2.8L2276.8,19c0.8-0.8,2.1-0.8,2.8,0l166.1,166.1
          	c0.8,0.8,0.8,2.1,0,2.8L2334,299.6C2333.2,300.4,2331.9,300.4,2331.2,299.6z"/>
          <line class="st0" x1="2245.5" y1="213.9" x2="2360.1" y2="99.4"/>
          <line class="st0" x1="2251.3" y1="219.8" x2="2365.9" y2="105.2"/>
          <line class="st0" x1="2245.5" y1="197.6" x2="2264.8" y2="217"/>
          <line class="st0" x1="2256.7" y1="186.5" x2="2276" y2="205.8"/>
          <line class="st0" x1="2266.5" y1="176.6" x2="2285.9" y2="196"/>
          <line class="st0" x1="2276.4" y1="166.7" x2="2295.8" y2="186.1"/>
          <line class="st0" x1="2286.2" y1="156.9" x2="2305.6" y2="176.3"/>
          <line class="st0" x1="2296.3" y1="146.9" x2="2315.6" y2="166.2"/>
          <line class="st0" x1="2306" y1="137.1" x2="2325.4" y2="156.5"/>
          <line class="st0" x1="2315.5" y1="127.6" x2="2334.9" y2="147"/>
          <line class="st0" x1="2325.4" y1="117.7" x2="2344.8" y2="137.1"/>
          <line class="st0" x1="2335.5" y1="107.6" x2="2354.9" y2="127"/>
          <line class="st0" x1="2345.3" y1="97.9" x2="2364.6" y2="117.2"/>
          <path class="st0" d="M2383.6,166.8l-89.6,89.6c-1.3,1.3-3.3,1.3-4.6,0l0,0c-1.3-1.3-1.3-3.3,0-4.6l89.6-89.6l12.7-7.7L2383.6,166.8z
          	"/>
          <path class="st0" d="M2430.2,146.5l-122.7,122.7c-1.3,1.3-3.3,1.3-4.6,0l0,0c-1.3-1.3-1.3-3.3,0-4.6l122.7-122.7l12.7-7.7
          	L2430.2,146.5z"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__laptop" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M1065.3,268.1L835.4,498.2c-4,4-10.7,4.1-14.7,0L666.9,344.5c-4-4-4.1-10.7,0-14.7L896.8,99.7
          	c4-4,10.7-4.1,14.7,0l153.8,153.7C1069.4,257.4,1069.4,264,1065.3,268.1z"/>
          <path class="st0" d="M870.3,278.3c0,0-11.2-2.3-13.2,10.2c0,0-11.5,3.5-10.5,11.8c1,8.3,9,13.3,9,13.3s6.2,5,13.3,4.8
          	c7.2-0.2,7.5-6.8,7.5-6.8s0.3-2.8,3.2-3.3c2.8-0.5,8.5-3,6.8-9.3s-3.3-9.2-3.3-9.2s-5.5,3-10.5-2S870.3,278.3,870.3,278.3z"/>
          <path class="st0" d="M853.3,273.6c0,0-6.5,6.5,1.5,13.7C854.8,287.3,861.3,281.3,853.3,273.6z"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__keyboard" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M1791.5,689.7h-430.8c-3.3,0-6-2.7-6-6V577.8
          	c0-3.3,2.7-6,6-6h430.8c3.3,0,6,2.7,6,6v105.9C1797.5,687,1794.8,689.7,1791.5,689.7z"/>
          <path class="st0" d="M1999.7,684.8h-124.3c-3.3,0-6-2.7-6-6V559
          	c0-3.3,2.7-6,6-6h124.3c3.3,0,6,2.7,6,6v119.8C2005.7,682.1,2003,684.8,1999.7,684.8z"/>
          <line class="st0" x1="1869.4" y1="573.9" x2="2005.7" y2="573.9"/>
          </svg>
        </li>
        <li>
          <svg class="hero__images__mac" x="0px" y="0px" viewBox="604 -243.9 2000 1099.9">
          <path class="st0" d="M1907.7,38.7h-609.9c-6.6,0-14.1-5.3-18-12
          	l-115-153.7c-5.6-8.8,5.4-12,12-12h857.5c6.6,0,14.5,3.7,8.7,11L1926.3,26.7C1920.6,34.3,1914.3,38.7,1907.7,38.7z"/>
          <path class="st0" d="M1163.2-130.9c-4.8-9.6,6.9-15.1,13.5-15.1h857.5
          	c6.6,0,15,6.1,10.4,15.1"/>
          <path class="st0" d="M1516.7,38.7l-5.2,32.4c0,0-3,26.2,31.5,26.2
          	s122,0,122,0s34-5,30.8-27.2s-5.1-31.4-5.1-31.4"/>
          <line class="st0" x1="1275.8" y1="21.4" x2="1929.7" y2="21.4"/>
          <path class="st0" d="M1909.7,12.8h-611c-1.1,0-2.4-0.9-3-2l-91-131.3
          	c0-1.1,0.9-2,2-2l796.7-1c1.1,0,2,0.9,2,2l-92.7,132.3C1911.7,12.1,1910.8,12.8,1909.7,12.8z"/>
          </svg>
        </li>
        <li class="hero__images__txt">
          <svg class="hero__images__hello" xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 2000 1099.9">
          <path class="st-txt st-txt-1" d="M908.13,152.37,921,145.94V148l-8.79,4.37,8.79,4.42v2Z"/>
          <path class="st-txt st-txt-2" d="M927.91,159.37a1.72,1.72,0,0,1-1.71-1.71,1.62,1.62,0,0,1,.5-1.2,1.69,1.69,0,0,1,2.39,0,1.69,1.69,0,0,1,0,2.41A1.64,1.64,0,0,1,927.91,159.37Zm-1-5.79-.54-13.14h2.95l-.54,13.14Z"/>
          <path class="st-txt st-txt-3" d="M936.65,152.29v-1.83h9.19v1.83Z"/>
          <path class="st-txt st-txt-4" d="M950,152.29v-1.83h9.19v1.83Z"/>
          <path class="st-txt st-txt-5" d="M975.47,158.81V140.43h2.39v7.91h6.77v-7.91H987v18.38h-2.39v-8.63h-6.77v8.63Z"/>
          <path class="st-txt st-txt-6" d="M999.65,156.78v2h-9.92V140.43h9.74v1.85h-7.35v6.24h6.62v1.84h-6.62v6.43Z"/>
          <path class="st-txt st-txt-7" d="M1013.16,156.78v2h-9.91V140.43h2.39v16.35Z"/>
          <path class="st-txt st-txt-8" d="M1026.5,156.78v2h-9.91V140.43H1019v16.35Z"/>
          <path class="st-txt st-txt-9" d="M1034.61,159.37a5.31,5.31,0,0,1-4.78-2.64,16.12,16.12,0,0,1,0-14.22,5.65,5.65,0,0,1,9.56,0,16.17,16.17,0,0,1,0,14.22A5.3,5.3,0,0,1,1034.61,159.37Zm0-1.84a3.35,3.35,0,0,0,2.88-2,12,12,0,0,0,1.15-5.95,12,12,0,0,0-1.15-5.95,3.1,3.1,0,0,0-5.77,0,12,12,0,0,0-1.15,5.95,12,12,0,0,0,1.15,5.95A3.35,3.35,0,0,0,1034.61,157.53Z"/>
          <path class="st-txt st-txt-10" d="M1056.7,152.29v-1.83h9.19v1.83Z"/>
          <path class="st-txt st-txt-11" d="M1070,152.29v-1.83h9.19v1.83Z"/>
          <path class="st-txt st-txt-12" d="M1094.39,152.37l-12.86,6.44v-2l8.79-4.38-8.79-4.42v-2Z"/>
          </svg>
        </li>
        <li><img class="hero__images__bg" src="/static/img/hero-bg2.jpg" alt=""></li>
      </ul>
  </section>
</template>

<script>
  export default {
    props: ['heroData'],
  };
</script>

<style lang="scss">
@import "../scss/utilities/base";

.hero {
  background: radial-gradient(ellipse at center, rgba(238,238,238,1) 0%,rgba(223,228,231,1) 100%);
  margin-top: 45px;
  overflow: hidden;
  @include phone {
    min-height: 75vh;
  }
  position: relative;
  @include skew(left);
  &:after {
    content: "";
    @include full('absolute');
    z-index: z-index(hero2);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,0.5) 100%);
  }
  &__images {
    &__txt {
      z-index: z-index(hero1);
    }
    li {
      @include full('absolute');
      max-width: 2000px;
      margin: auto;
      &:last-child {
        position: static;
        opacity: 0;
        animation: opacity 2s linear forwards;
          @include skew(null, 0, -3rem -3em);
      }
    }
    img {
      max-width: 100%;
    }
    @include phone {
      img, svg {
        max-width: none;
        width: 150%;
      }
    }
    .st0 {
      fill: transparent;
      stroke: $color-dark;
      stroke-miterlimit:1;
      will-change: stroke-dashoffset;
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: dashHero 5s linear forwards;
    }
    &__camera .st0 {
      animation-delay: 1s;
    }
    &__phone .st0 {
      animation-delay: 2s;
    }
    &__laptop .st0 {
      animation-delay: 3s;
    }
    &__notebook .st0 {
      animation-delay: 4s;
    }
    &__ipad .st0 {
      animation-delay: 5s;
    }
    &__cups .st0 {
      animation-delay: 6s;
    }
    &__keyboard .st0 {
      animation-delay: 5s;
    }
    &__keyboard .st0 {
      animation-delay: 3s;
    }
    &__bg {
      opacity: 0;
      animation: opacity 2s linear forwards;
      animation-delay: 6s;
    }

    .st-fat {
      fill: transparent;
      stroke: $color-dark;
      stroke-width:2px;
      stroke-miterlimit:1;
      will-change: stroke-dashoffset;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: dashg 0.5s linear forwards;
    }
    $i: 1;
    $add: 0.5;
    $added: 1.5;
    $unit: s;
    @while $i <= 7 {
      .st-fat-#{$i} {
        animation-delay: $added + $add#{$unit};
      }
      $i: $i + 1;
      $added: $added + $add;
    }

    .st-txt {
      fill-opacity: 0;
      animation: show 0.1s linear forwards;
      fill: $color-gray;
    }
    $i2: 1;
    $add2: 0.1;
    $added2: 1.0;
    $unit2: s;
    @while $i2 <= 12 {
      .st-txt-#{$i2} {
        animation-delay: $added2 + $add2#{$unit};
      }
      $i2: $i2 + 1;
      $added2: $added2 + $add2;
    }
  }
  header {
    position: absolute;
    z-index: z-index(hero3);
    left: 50%;
    transform: translate(-50%, 0);
    @include phone {
      bottom: 50px;
      width: 80%;
    }
    @include tablet {
      top: 45%;
      width: 80%;
    }
    @include large {
      top: 45%;
    }
    text-align: center;
    line-height: 1;
    text-transform: uppercase;
    opacity: 0;
    animation: opacity 2s linear forwards;
    animation-delay: 7s;
  }
  p {
    font-size: theme-get(text, size, bigger);
    font-weight: theme-get(space, extra);
    margin: theme-get(space, none);
    color: theme-get(text, color, orange);
  }
}
</style>
