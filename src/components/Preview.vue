<template>
  <md-layout class="preview">
    <interaction>
      <imager ref="imager">
        <default-template :model="model.template" class="md-whiteframe-2dp"/>
      </imager>
    </interaction>
  </md-layout>
</template>

<script>
import DefaultTemplate from '@/components/DefaultTemplate/Template';
import Interaction from '@/components/Utils/Interaction';
import Imager from '@/components/Utils/Imager';

export default {
  name: 'preview',
  components: {
    DefaultTemplate,
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
  methods: {
    exportPdf() {
      this.$refs.imager.exportPdf();
    },
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
    width: 100%;
    align-items: center;
  }
</style>
