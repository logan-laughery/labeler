<template>
  <div class="interaction-container"
    v-on:mousewheel="zoom"
    v-on:mousedown="startDrag"
    v-on:mouseup="stopDrag"
    v-on:mousemove="mouseMove">
    <div id="interaction" 
      :style="{ transform: 'scale(' + zoomLevel + ') translate(' + currentPosition.x + 'px, ' + currentPosition.y + 'px)' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interaction',
  data() {
    return {
      zoomLevel: 1,
      dragging: false,
      lastOffset: null,
      startPosition: null,
      currentPosition: { x: 0, y: 0 },
    };
  },
  methods: {
    zoom(e) {
      const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      if (delta > 0 && this.zoomLevel < 2) {
        // Zoom in
        this.zoomLevel = this.zoomLevel * 1.1;
      } else if (delta < 0 && this.zoomLevel > 0.5) {
        // Zoom out
        this.zoomLevel = this.zoomLevel * 0.9;
      }
    },
    startDrag(e) {
      // console.log('start drag'); // eslint-disable-line no-console
      // console.log(`{${e.pageX} , ${e.pageY})`);// eslint-disable-line no-console
      if (!this.lastOffset) {
        this.lastOffset = { x: 0, y: 0 };
      }
      this.startPosition = {};
      this.startPosition.x = (e.pageX / this.zoomLevel) - this.lastOffset.x;
      this.startPosition.y = (e.pageY / this.zoomLevel) - this.lastOffset.y;
      this.dragging = true;
    },
    stopDrag() {
      // console.log('stop drag');// eslint-disable-line no-console
      this.dragging = false;
    },
    mouseMove(e) {
      if (this.dragging) {
        // console.log('mouse move');// eslint-disable-line no-console
        const newX = (e.pageX / this.zoomLevel) - this.startPosition.x;
        const newY = (e.pageY / this.zoomLevel) - this.startPosition.y;
        this.currentPosition = { x: newX, y: newY };
        this.lastOffset = this.currentPosition;
      }
    },
  },
};
</script>

<style>
  .interaction-container {
    justify-content: center;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    overflow: hidden;
    cursor: default;
  }
</style>
