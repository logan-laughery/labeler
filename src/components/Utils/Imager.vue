<template>
  <div id="imager"
    v-on:click="saveAsImage"
  >
    <slot></slot> 
    <div id="hidder">    
      <div id="hiddenImageHolder">
      </div>
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
    sendToServer(pngUrl) {
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
    },
    saveAsImage() {
      const that = this;
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
      tester.firstElementChild.style.backgroundColor = 'white';
      DomToImage.toPng(document.getElementById('image-dup'), { style: { display: 'block' } })
        .then((dataUrl) => {
          const img = new Image();
          img.id = 'test';
          img.src = dataUrl;
          // document.body.appendChild(img); // eslint-disable-line no-console
          that.sendToServer(dataUrl);
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
    saveAsImage2() {
      const that = this;
      console.log('Handling click'); // eslint-disable-line no-console
      DomToImage.toSvg(document.getElementById('imager').firstElementChild)
        .then((dataUrl) => {
          that.svg = dataUrl;
          DomToImage.toPng(document.getElementById('svg-holder'), { style: { display: 'block' } })
          .then((pngUrl) => {
            that.sendToServer(pngUrl);
          });
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
