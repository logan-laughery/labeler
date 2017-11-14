<template>
  <div class="circle-container">
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
    <aroma-wedge/>
  </div>
</template>

<script>
import AromaWedge from '@/components/AromaWedge';

export default {
  name: 'aroma-wheel',
  components: {
    AromaWedge,
  },
};
</script>

<style lang="scss">
@mixin on-circle($item-count, $circle-size, $item-size) {
  > * {
    display: block;
    position: absolute;
    top:  50%;
    left: 50%;
    margin: -($item-size / 2);
    width:  $item-size;
    height: $item-size;
    
    $angle: (360 / $item-count);
    $rot: 0;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg) translate($circle-size / 2) rotate(-60deg);
      }

      $rot: $rot + $angle;
    }
  }
}

.circle-container {
  @include on-circle($item-count: 12, $circle-size: 16.5em, $item-size: 10.2em);
}
</style>
