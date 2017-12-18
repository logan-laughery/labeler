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
</style>
