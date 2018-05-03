<template>
  <div class="color-picker">
    <chrome-picker class="picker"
      :value="color"
      @input="updateValue"
      v-if="displayPicker"
      v-click-outside="clickOutside"/>
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
    value: {
      type: String,
      default: '#00000',
    },
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.hex = newValue;
      }
    },
  },
  computed: {
    color() {
      return { hex: this.hex };
    },
  },
  methods: {
    clickOutside() {
      if (this.displayPicker) {
        this.displayPicker = false;
      }
    },
    toggleDisplay() {
      this.displayPicker = !this.displayPicker;
    },
    updateValue(value) {
      this.hex = value.hex;
      this.$emit('input', this.hex);
    },
  },
  data() {
    return {
      displayPicker: false,
      hex: this.value,
    };
  },
  directives: {
    'click-outside': {
      bind: (el, binding, vnode) => {
        el.event = (event) => { // eslint-disable-line no-param-reassign
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.event);
      },
      unbind: (el) => {
        document.body.removeEventListener('click', el.event);
      },
    },
  },
};
</script>

<style>
.color-picker {
  margin-top: 11px;
  margin-right: 6px;
  height: 14px;
  width: 14px;
  position: relative;
}

.picker {
  position: absolute;
  z-index: 999;
  right: 12px;
  top: 0;
  margin-bottom: 10px;
}

.picker.vc-chrome {
  width: 175px;
}

.swatch {
  border-style: solid;
  border-width: 1px;
  border-color: #455a64;
  height: 14px;
  width: 14px;
}
</style>
