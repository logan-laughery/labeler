<template>
  <div id="imager"
    v-on:click="saveAsImage">
    <slot></slot>
    <div id="hidder">
      <div id="hiddenImageHolder">
      </div>
    </div>
  </div>
</template>

<script>
import DomToImage from 'dom-to-image';
// import JsPdf from 'jspdf';

export default {
  name: 'imager',
  methods: {
    saveAsImage() {
      if (document.contains(document.getElementById('hiddenImageHolder'))) {
        while (document.getElementById('hiddenImageHolder').firstChild) {
          document.getElementById('hiddenImageHolder').removeChild(document.getElementById('hiddenImageHolder').firstChild);
        }
      }

      console.log('Handling click'); // eslint-disable-line no-console
      const tester = document.getElementById('imager').cloneNode(true);
      tester.id = 'image-dup';
      tester.style = 'display: inline-block;';


      document.getElementById('hiddenImageHolder').appendChild(tester);

      const scaleAmount = 4;
      tester.style.height = tester.firstElementChild.clientHeight * scaleAmount;
      tester.style.width = tester.firstElementChild.clientWidth * scaleAmount;
      tester.firstElementChild.style = `transform:scale(${scaleAmount}); display: inline-block; transform-origin: top left;`;
      DomToImage.toPng(document.getElementById('image-dup'), { style: { display: 'block' } })
        .then((dataUrl) => {
          const img = new Image();
          img.id = 'test';
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style scoped>
#hidder {
  height: 0px;
  width: 0px;
  overflow: hidden;
  position: absolute;
}
</style>
