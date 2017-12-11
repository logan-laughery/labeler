<template>
  <div class="circle-container">
    <aroma-wedge v-for="(wedge, index) in wedges"
                 :key="index"
                 :flipText="index < 6"
                 :fillColor="wedge.color"
                 :text="wedge.text"
                 class="wedge"/>
    <div id="center"> 
      <span class="center-text">{{ topText }}</span>
      <span class="center-text">{{ bottomText }}</span>
    </div>
  </div>
</template>

<script>
import AromaWedge from '@/components/AromaWedge';

export default {
  name: 'aroma-wheel',
  components: {
    AromaWedge,
  },
  props: {
    wedges: {
      type: Array,
      default() {
        return [
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
          { color: '#ffcd08', text: 'Test' },
        ];
      },
    },
    topText: {
      type: String,
      default: 'Top',
    },
    bottomText: {
      type: String,
      default: 'Bottom',
    },
  },
};
</script>

<style lang="scss">
@mixin on-circle($item-count, $circle-size) {
  > .wedge {
    display: block;
    position: absolute;
    margin-left: 58px;
    margin-top: 52px;

    $angle: (360 / $item-count);
    $rot: -60;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg) translate($circle-size / 2) 
          rotate(-90deg);
      }

      $rot: $rot + $angle;
    }
  }
}

.circle-container {
  height: 144px;
  width: 144px;

  @include on-circle($item-count: 12, $circle-size: 7em);
}

.center-text {
  font-size: 10px;
  line-height: 110%;
  font-family: Oswald;
}

#center {
  display: flex;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  left: 47px;
  top: 47px;
  position: absolute;
  flex-direction: column;
}
</style>
