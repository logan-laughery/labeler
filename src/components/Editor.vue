<template>
  <default-editor :content="content.template"/>
</template>

<script>
import DefaultEditor from '@/components/DefaultEditor';

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
