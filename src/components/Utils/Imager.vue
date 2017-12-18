<template>
  <div id="imager"
    v-on:click="saveAsImage">
    <slot></slot> 
  </div>
</template>

<script>
import DomToImage from 'dom-to-image';

export default {
  name: 'imager',
  methods: {
    saveAsImage() {
      console.log('Handling click'); // eslint-disable-line no-console
      DomToImage.toSvg(document.getElementById('imager').firstElementChild)
        .then((dataUrl) => {
          const img = new Image();
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

<style>
</style>
