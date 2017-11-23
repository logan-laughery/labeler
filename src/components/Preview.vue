<template>
  <md-layout class="preview">
    <interaction>
      <imager>
        <default-html-template class="md-whiteframe-2dp"/>
      </imager>
    </interaction>
  </md-layout>
</template>

<script>
// eslint-disable-next-line
import defaultSvg from 'raw-loader!./../assets/test.svg';
import LabelTemplate from '@/components/LabelTemplate';
import DefaultTemplate from '@/components/DefaultTemplate';
import DefaultHtmlTemplate from '@/components/DefaultHtmlTemplate';
import Interaction from '@/components/Interaction';
import Imager from '@/components/Imager';

export default {
  name: 'preview',
  components: {
    LabelTemplate,
    DefaultTemplate,
    DefaultHtmlTemplate,
    Interaction,
    Imager,
  },
  props: {
    model: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      svgContent: '',
      editedContent: '',
    };
  },
};
</script>

<style>
  #hidden {
    display: none; 
  }

  .preview {
    justify-content: center;
    height: 100%;
    align-items: center;
    margin-top: -66px;
    padding-top: 64px;
  }
</style>
