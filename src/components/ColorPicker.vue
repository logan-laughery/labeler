<template>
  <div class="color-picker">  
    <chrome-picker class="picker"
      v-model="color"
      v-if="displayPicker"/>
    <div class="swatch"
      :style="{ background: hex }"      
      v-on:click="toggleDisplay">
    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';

export default {
  name: 'color-picker',
  components: {
    'chrome-picker': Chrome,
  },
  props: {
    hex: {
      type: String,
      default: '#00000',
    },
  },
  computed: {
    color() {
      return { hex: this.hex };
    },
  },
  methods: {
    toggleDisplay() {
      this.displayPicker = !this.displayPicker;
    },
  },
  data() {
    return {
      displayPicker: false,
    };
  },
};
</script>

<style>
.color-picker {
  height: 10px;
  width: 10px;
}

.picker {
  position: absolute;
  z-index: 999;
  right: 38px;
  bottom: 0;
}

.swatch {
  border-style: solid;
  border-width: 1px;
  border-color: #455a64;
  height: 10px;
  width: 10px;
}
</style>
