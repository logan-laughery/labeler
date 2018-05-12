<template>
  <md-card>
    <div class="md-toolbar short text-primary-color mid-primary-color">
      <h2 class="md-title">General</h2>
    </div>
    <md-card-content>
      <md-layout>
        <md-input-container class="color-input">
          <label>Color</label>
          <md-input v-model="content.color"/>
        </md-input-container>
        <color-picker v-model="content.color" class="color-picker"/>
      </md-layout>
      <md-input-container>
        <label>Title</label>
        <md-textarea v-model="content.title"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Subtitle</label>
        <md-textarea v-model="content.subTitle"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Version</label>
        <md-textarea v-model="content.version"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Alcohol Content</label>
        <md-textarea v-model="content.alcohol"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>IBU</label>
        <md-textarea v-model="content.ibu"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Recipe Title</label>
        <md-textarea v-model="content.recipeTitle"></md-textarea>
      </md-input-container>
    </md-card-content>
  </md-card>
</template>

<script>
import ColorPicker from '@/components/Utils/ColorPicker';

export default {
  name: 'general-editor',
  props: ['content'],
  components: {
    ColorPicker,
  },
};
</script>

<style scoped>
.color-input {
  width: calc(100% - 26px);
}

.color-picker {
  margin-left: 6px;
  margin-top: 28px;
}
</style>
