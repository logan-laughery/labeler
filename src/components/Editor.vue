<template>
  <default-editor :content="content.template"/>
</template>

<script>
import DefaultEditor from '@/components/DefaultTemplate/DefaultEditor';

export default {
  name: 'editor',
  components: {
    DefaultEditor,
  },
  props: ['content'],
};
</script>

<style>
.md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator {
    background-color: #f57a2b;
}

.md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active, 
.md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus {
    color: #f57a2b;
}
</style>
