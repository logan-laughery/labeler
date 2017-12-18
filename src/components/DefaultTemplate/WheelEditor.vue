<template>
  <md-card>
    <div class="md-toolbar short text-primary-color mid-primary-color">
      <h2 class="md-title">Wheel</h2>
    </div>
    <md-card-content>
        <md-layout md-row v-for="(wedge, index) in wheel"
          class="editor-row">
          <md-layout class="left-col">
            <md-input-container md-inline>
              <label>Text</label>
              <md-input v-model="wedge.text" />
            </md-input-container>
          </md-layout>
          <md-layout class="right-col">
            <color-picker v-model="wedge.color"/>
            <md-input-container md-inline>
              <label>Color</label>
              <md-input v-model="wedge.color" />
            </md-input-container>
          </md-layout>
        </md-layout>
    </md-card-content>
  </md-card>
</template>

<script>
import ColorPicker from '@/components/Utils/ColorPicker';

export default {
  name: 'wheel-editor',
  props: ['wheel', 'name', 'topText', 'bottomText'],
  components: {
    ColorPicker,
  },
};
</script>

<style scoped>
.editor-row {
  margin-bottom: 5px;
}

.left-col {
  min-width: 180px;
  max-width: 50%;
}

.left-col .md-input-container {
  margin-right: 20px;
}

.right-col .md-input-container {
  width: calc(100% - 20px);
}

.right-col {
  flex: 1;
}

.md-input-container {
  margin: 0px;
  padding: 0px;
  min-height: initial;
}

.md-input-container input {
  font-size: 13px !important;
  line-height: 18px !important;
}

.md-input-container label {
  font-size: 13px !important;
  line-height: 18px !important;
}

.md-card {
  overflow: visible;
}
</style>
