<template>
  <md-layout md-row id="workspace"> 
    <md-layout md-flex="50">
      <preview :model="content"/>
    </md-layout>
    <md-layout md-flex="50" id="right-panel" class="md-whiteframe-6dp">
      <editor :content="content"/>
    </md-layout>
  </md-layout>
</template>

<script>
import Preview from '@/components/Preview';
import Editor from '@/components/Editor';
import DefaultTemplateData from '../assets/DefaultTemplate';

export default {
  name: 'workspace',
  components: {
    Preview,
    Editor,
  },
  data() {
    return {
      content: DefaultTemplateData,
    };
  },
  // Holds Preview / Editor panes
  // Handle File Loads / Exports
};
</script>

<style>
#workspace {
  margin-top: -66px;
  padding-top: 64px;
  height: 100%;
}

#right-panel {
  margin-bottom: -2px; 
  overflow-y: hidden;
  flex-wrap: initial;
}
</style>
