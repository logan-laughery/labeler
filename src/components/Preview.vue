<template>
  <div>
    <default-template/>
    <default-html-template/>
    <div v-html="svgContentComputed" id="hidden">
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import defaultSvg from 'raw-loader!./../assets/test.svg';
import LabelTemplate from '@/components/LabelTemplate';
import DefaultTemplate from '@/components/DefaultTemplate';
import DefaultHtmlTemplate from '@/components/DefaultHtmlTemplate';

export default {
  name: 'preview',
  components: {
    LabelTemplate,
    DefaultTemplate,
    DefaultHtmlTemplate,
  },
  data() {
    return {
      svgContent: '',
      editedContent: '',
    };
  },
  computed: {
    svgContentComputed() {
      return this.svgContent;
    },
    editedContentComputed() {
      return this.editedContent;
    },
  },
  methods: {
    loadDefault() {
      this.svgContent = 'test';
      const imageData = defaultSvg.split(',')[1]
        .split('"')[0];
      this.svgContent = window.atob(imageData);
    },
  },
  created() {
    this.loadDefault();
  },
};
</script>

<style>
  #hidden {
    display: none; 
  }
</style>
