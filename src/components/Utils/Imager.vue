<template>
  <div id="imager"
    v-on:click="saveAsImage"
  >
    <slot></slot> 
    <div id="svg-hider">    
      <img id="svg-holder" v-bind:src="svgData"></img>
    </div>
  </div>
</template>

<script>
import DomToImage from 'dom-to-image';
import fileDownload from 'js-file-download';
import axios from 'axios';

// https://github.com/axios/axios/issues/448
function saveFile(res) {
  const disposition = res.headers['content-disposition'];
  const filename = decodeURI(disposition.match(/filename=(.*)/)[1]);

  fileDownload(res.data, filename);
}

export default {
  name: 'imager',
  computed: {
    svgData() {
      return this.svg;
    },
  },
  data() {
    return {
      svg: '',
    };
  },
  methods: {
    saveAsImage() {
      const that = this;
      console.log('Handling click'); // eslint-disable-line no-console
      DomToImage.toSvg(document.getElementById('imager').firstElementChild)
        .then((dataUrl) => {
          that.svg = dataUrl;
          // (/height="[0-9]*"/, 'height="100%"')
          // .replace(/width="[0-9]*"/, 'width="100k"');
          // const img = new Image();
          // img.src = dataUrl;
          // img.style.width = '2000px';
          // document.body.appendChild(img);
          DomToImage.toPng(document.getElementById('svg-holder'), { style: { display: 'block' } })
          .then((pngUrl) => {
            const headers = {
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
              'Content-Type': 'application/json',
              responseType: 'arraybuffer',
            };

            axios.post(process.env.PDF_GENERATOR_URL, {
              image: pngUrl,
            }, headers)
            .then((response) => {
              saveFile(response);
            })
            .catch((error) => {
              console.log(error); // eslint-disable-line no-console
            });
          });
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style>
#svg-hider {
  height: 0px;
  overflow: hidden;
  position: absolute;
}

#svg-holder {
}
</style>
