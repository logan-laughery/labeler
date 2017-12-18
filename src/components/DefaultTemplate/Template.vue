<template> 
  <div class="label-container">
    <div class="title">
      {{model.title}}
    </div>
    <div id="sub-header">
      <div class="sub-title">
        {{model.subTitle}} 
      </div>
      <div class="sub-title">
        {{model.version}} 
      </div>
    </div>
    <div id="info">
    <div class="sub-title">
      {{model.alcohol}} 
    </div>
    <div class="sub-title">
      {{model.ibu}} 
    </div>
    </div>
    <svg id="bar1" width="323px" height="24px">
      <rect class="bar" width="323" height="24"
        :style="{ fill: model.color }"/>
    </svg>
    <svg id="bar2" width="24px" height="400px">
      <rect class="bar" width="24" height="400"
        :style="{ fill: model.color }"/>
    </svg>
    <aroma-wheel id="top-wheel" 
      :wedges="model.topWheel.wheel"
      :topText="model.topWheel.topText"
      :bottomText="model.topWheel.bottomText"/>
    <aroma-wheel id="bottom-wheel" :wedges="model.bottomWheel.wheel"
      :topText="model.bottomWheel.topText"
      :bottomText="model.bottomWheel.bottomText"/>
    <instructions id="instructions" :size="model.size"
      :columns="model.instructions"/>
  </div>
</template>
<script>
import AromaWheel from '@/components/DefaultTemplate/AromaWheel';
import Instructions from '@/components/DefaultTemplate/Instructions';

export default {
  name: 'default-template',
  components: {
    AromaWheel,
    Instructions,
  },
  props: {
    model: {
      type: Object,
      default() {
        return {
          title: 'DEFAULT STYLE',
          subTitle: 'DESCRIPTOR',
          version: 'v1.0.0',
          alcohol: 'ALC 9.0%',
          ibu: 'IBU 90',
          color: '#ffcd08',
          topWheel: {
            topText: 'Top',
            bottomText: 'Bottom',
            wheel: [
              { color: '#ffcd08', text: 'Flavor1' },
              { color: '#ffcd08', text: 'Flavor2' },
              { color: '#ffcd08', text: 'Flavor3' },
              { color: '#ffcd08', text: 'Flavor4' },
              { color: '#ffcd08', text: 'Flavor5' },
              { color: '#ffcd08', text: 'Flavor6' },
              { color: '#ffcd08', text: 'Flavor7' },
              { color: '#ffcd08', text: 'Flavor8' },
              { color: '#ffcd08', text: 'Flavor9' },
              { color: '#ffcd08', text: 'Flavor10' },
              { color: '#ffcd08', text: 'Flavor11' },
              { color: '#ffcd08', text: 'Flavor12' },
            ],
          },
          bottomWheel: {
            topText: 'Top',
            bottomText: 'Bottom',
            wheel: [
              { color: '#ffcd08', text: 'Aroma1' },
              { color: '#ffcd08', text: 'Aroma2' },
              { color: '#ffcd08', text: 'Aroma3' },
              { color: '#ffcd08', text: 'Aroma4' },
              { color: '#ffcd08', text: 'Aroma5' },
              { color: '#ffcd08', text: 'Aroma6' },
              { color: '#ffcd08', text: 'Aroma7' },
              { color: '#ffcd08', text: 'Aroma8' },
              { color: '#ffcd08', text: 'Aroma9' },
              { color: '#ffcd08', text: 'Aroma10' },
              { color: '#ffcd08', text: 'Aroma11' },
              { color: '#ffcd08', text: 'Aroma12' },
            ],
          },
          instructions: [
            [
              { title: 'SECTION', content: 'Content' },
            ],
          ],
          size: 'RECIPE | 5.5 GAL',
        };
      },
    },
  },
};
</script>

<style>
.label-container {
  width:534px;
  height:400px;
  position:relative;
  padding-left:5px;
}

.title {
  font-size:50px;
  line-height:125%;
  font-family:'Fjalla One';
}

.sub-title {
  font-weight:300;
  font-size:20px;
  line-height:125%;
  font-family:Oswald;
  padding-left:3px;
}

.bar {
  opacity:0.97000002;
  fill:#ffde5a;
  fill-opacity:1;
  stroke-width:1.89999998;
  stroke-miterlimit:4;
  stroke-dasharray:none;
}

#bar1 {
  position: absolute;
  top: 235px; 
  left: 0px;
}

#bar2 {
  position: absolute;
  top: 0px;
  right: 0px;
}

#sub-header {
  position: absolute;
  top: 54px;
}

#info {
  position: absolute;
  top: 180px;
}

#top-wheel {
  position: absolute;
  right: 45px;
  top: 20px;
}

#bottom-wheel {
  position: absolute;
  right: 45px;
  bottom: 20px;
}

#instructions {
  position: absolute;
  bottom: 0px;
  height: 138px;
  width: 317px;
  overflow: hidden;
}
</style>
