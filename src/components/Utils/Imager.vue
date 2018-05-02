<template>
  <div id="imager">
    <slot></slot> 
    <div id="hidder">    
      <div id="hiddenImageHolder">
      </div>
    </div>
    <md-snackbar md-position="bottom center" ref="snackbar" md-duration="4000">
      <span>An error occurred</span>
      <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Dismiss</md-button>
    </md-snackbar>
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
        this.$refs.snackbar.open();
        console.log(error); // eslint-disable-line no-console
      });
    },
    exportPdf() {
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
