<template>
  <div>
  <svg width="27.58" height="39.84" style="transform: scale(1.25)">
    <g>
      <path 
        d="m 17.82717,0
          a 19.604721,19.604721 0 0 1 -8.06942,0.0118
          l -9.75775,36.42046
          a 57.321428,57.321428 0 0 0 27.58286,-0.0288
          l -9.75569,-36.40342 z" 
        class="aroma-wedge"
        :style="{ fill: fillColor }">
      </path>
      <text x="0" y="0"
        class="aroma-wedge-text" 
        :class="{ flip: flipText }" 
        :transform="textTransform">
        <tspan>
          {{ text }}  
        </tspan>
      </text>
    </g>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'aroma-wedge',
  props: {
    flipText: Boolean,
    text: {
      type: String,
      default: 'Default',
    },
    fillColor: {
      type: String,
      default: '#8aacdf',
    },
  },
  computed: {
    textTransform() {
      if (this.flipText) {
        return 'rotate(90) translate(35,-11)';
      }
      return 'rotate(270) translate(-35,15.9)';
    },
  },
};
</script>

<style lang="scss">
.aroma-wedge-text {
  font-style: normal; 
  font-variant-ligatures: normal;
  font-weight: 300;
  font-size: 7.5px;
  font-family: Oswald;
  letter-spacing: 0px;
  word-spacing: 0px;
  fill: rgb(0, 0, 0);
  fill-opacity: 1;
}

.aroma-wedge-text.flip {
  text-anchor: end;
}

.aroma-wedge {
  opacity: 0.97;
  fill: rgb(211, 141, 95);
  fill-opacity: 1;
  stroke-width: 1.9;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
}
</style>
