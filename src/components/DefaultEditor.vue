<template>
  <div id="default-editor">
    <md-tabs id="tabs" class="md-transparent" 
      md-sync-route 
      md-fixed>
      <md-tab id="tab-general" md-label="General">
        <general-editor :content="content"/>
      </md-tab>
      <md-tab id="tab-instruction" md-label="Instructions">
        <instruction-editor :instructions="content.instructions"/> 
      </md-tab>
      <md-tab id="tab-top-wheel" md-label="Top Wheel">
        <wheel-editor :wheel="content.topWheel.wheel"/> 
      </md-tab>
      <md-tab id="tab-bottom-wheel" md-label="Bottom Wheel">
        <wheel-editor :wheel="content.bottomWheel.wheel"/> 
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import GeneralEditor from '@/components/GeneralEditor';
import InstructionEditor from '@/components/InstructionEditor';
import WheelEditor from '@/components/WheelEditor';

export default {
  name: 'default-editor',
  props: ['content'],
  components: {
    GeneralEditor,
    InstructionEditor,
    WheelEditor,
  },
};
</script>

<style>
#tabs {
  height: 100%;
}

.md-tabs-content {
  height: 100% !important;
}

.md-tab {
  height: 100%; 
  overflow-x: none;
  overflow-y: auto;
}

#default-editor {
  width: 100%;
}

.short {
  min-height: 40px;
}
</style>
