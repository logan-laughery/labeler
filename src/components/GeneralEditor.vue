<template>
  <md-card>
    <div class="md-toolbar short text-primary-color mid-primary-color">
      <h2 class="md-title">General</h2>
    </div>
    <md-card-content>
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
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'general-editor',
  props: ['content'],
};
</script>

<style>
</style>
