<template>
  <md-layout md-row id="workspace"> 
    <md-layout md-flex-medium="100" md-flex="50"  v-bind:class="{ showSm: previewing, hideSm: !previewing }">
      <preview :model="content" ref="preview"/>
    </md-layout>
    <md-layout md-flex-medium="100" md-flex="50" id="right-panel" class="md-whiteframe-6dp" v-bind:class="{ hideSm: previewing }">
      <editor :content="content"/>
    </md-layout>
      <md-button class="md-fab-bottom-right md-fab hide showSm" id="toggle-preview" md-fab-trigger v-on:click="togglePreview">
        <md-icon v-if="previewing">close</md-icon>
        <md-icon v-if="!previewing">search</md-icon>
      </md-button>
  </md-layout>
</template>

<script>
import Preview from '@/components/Preview';
import Editor from '@/components/Editor';
import DefaultTemplateData from '@/components/DefaultTemplate/assets/Demo';

export default {
  name: 'workspace',
  components: {
    Preview,
    Editor,
  },
  data() {
    return {
      previewing: false,
      content: DefaultTemplateData,
    };
  },
  methods: {
    togglePreview() {
      this.previewing = !this.previewing;
    },
    exportPdf() {
      this.$refs.preview.exportPdf();
    },
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

.hide {
  display: none;
}

@media (max-width: 1264px) {
  .hideSm {
      display: none;
  }
  .showSm {
      display: initial;
  }
}

#toggle-preview {
  background-color: #f57a2b;
}
</style>
