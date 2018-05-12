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
import fileDownload from 'js-file-download';

function createFileName(title, version) {
  const segments = title.toLowerCase().split(' ');
  const cameled = segments.map((segment) => {
    const firstLetter = segment.charAt(0);
    return `${firstLetter.toUpperCase()}${segment.slice(1)}`;
  }).join('');

  return `${cameled}_${version}`;
}

export default {
  name: 'workspace',
  components: {
    Preview,
    Editor,
  },
  data() {
    return {
      previewing: false,
      content: JSON.parse(JSON.stringify(DefaultTemplateData)),
    };
  },
  methods: {
    togglePreview() {
      document.getElementById('workspace').click();
      this.previewing = !this.previewing;
    },
    exportPdf() {
      const fileName = createFileName(this.content.template.title,
        this.content.template.version);

      this.$refs.preview.exportPdf(`${fileName}.pdf`);
    },
    exportJson() {
      const fileName = createFileName(this.content.template.title,
        this.content.template.version);

      fileDownload(JSON.stringify(this.content), `${fileName}.json`);
    },
    loadJson(json) {
      this.content = JSON.parse(json);
    },
    newTemplate() {
      this.content = JSON.parse(JSON.stringify(DefaultTemplateData));
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
      height: 0px;
      visibility: hidden;
      position: absolute;
  }
  .showSm {
      display: initial;
  }
}

#toggle-preview {
  background-color: #f57a2b;
}
</style>
