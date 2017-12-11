<template>
  <div id="insruction-editor">
    <md-card v-for="(column, index) in instructions" :key="index">
      <div class="md-toolbar short text-primary-color mid-primary-color">
        <h2 class="md-title">Column {{index + 1}}</h2>
      </div>
      <md-card-content>
        <div v-for="(section, subindex) in column" :key="subindex"
          class="section">
          <md-button v-on:click="removeSection(column, subindex)" 
              class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
          <md-input-container class="condensed">
            <label>Section Header</label>
            <md-textarea v-model="section.title"></md-textarea>
          </md-input-container>
          <md-input-container>
            <label>Section Content</label>
            <md-textarea v-model="section.content"></md-textarea>
          </md-input-container>
        </div>
        <md-button v-on:click="addSection(column)" class="md-raised md-dense">
          Add Section
        </md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'instruction-editor',
  props: ['instructions'],
  methods: {
    addSection(column) {
      column.push({ title: '', content: '' });
    },
    removeSection(column, subindex) {
      column.splice(subindex, 1);
    },
  },
};
</script>

<style scoped>
.instruction-editor {
  background: #f1f1f1;
}

.condensed {
  margin-bottom: 5px;
}

.md-card {
  margin-bottom: 20px;
}

.md-dense {
  margin-left: 0px;
}

.section {
  margin-right: 30px;
}

.section .md-icon-button {
  position: absolute;
  right: 0;
}
</style>
