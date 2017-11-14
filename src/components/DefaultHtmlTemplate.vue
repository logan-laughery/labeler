<template> 
  <div class="label-container">
    <div class="title">
      HEFEWEIZEN
    </div>
    <div id="sub-header">
    <div class="sub-title">
      Traditional German Wheat 
    </div>
    <div class="sub-title">
      v1.0.0
    </div>
    </div>
    <div id="info">
    <div class="sub-title">
      ALC 5.2% 
    </div>
    <div class="sub-title">
      IBU 10.7 
    </div>
    </div>
    <svg id="bar1" width="323px" height="24px">
      <rect class="bar" width="323" height="24"/>
    </svg>
    <svg id="bar2" width="24px" height="400px">
      <rect class="bar" width="24" height="400"/>
    </svg>
    <aroma-wheel/>
  </div>
</template>
<script>
import AromaWheel from '@/components/AromaWheel';

export default {
  name: 'default-html-template',
  components: {
    AromaWheel,
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
</style>
