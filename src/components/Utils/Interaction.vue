<template>
  <div class="interaction-container"
    v-on:mousewheel="zoom"
    v-on:mousedown="startDrag"
    v-on:mouseup="stopDrag"
    v-on:mousemove="mouseMove"
    v-on:touchstart.prevent="startTouchDrag"
    v-on:touchend.prevent="stopTouchDrag"
    v-on:touchmove.prevent="touchMove"
    v-hammer:pinch="onPinch"
    v-hammer:pinchend="onPinchEnd">
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
      width: 0,
      containerWidth: 0,
      lastZoomLevel: 1,
      startingZoomLevel: 1,
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
      if (!this.lastOffset) {
        this.lastOffset = { x: 0, y: 0 };
      }
      this.startPosition = {};
      this.startPosition.x = (e.pageX / this.zoomLevel) - this.lastOffset.x;
      this.startPosition.y = (e.pageY / this.zoomLevel) - this.lastOffset.y;
      this.dragging = true;
    },
    stopDrag() {
      this.dragging = false;
    },
    mouseMove(e) {
      if (this.dragging) {
        const newX = (e.pageX / this.zoomLevel) - this.startPosition.x;
        const newY = (e.pageY / this.zoomLevel) - this.startPosition.y;
        this.currentPosition = { x: newX, y: newY };
        this.lastOffset = this.currentPosition;
      }
    },
    startTouchDrag(e) {
      if (e.touches.length === 1) {
        this.startDrag(e.touches[0]);
      }
    },
    stopTouchDrag(e) {
      this.touches = e.touches.length;
      this.stopDrag(e.touches[0]);
    },
    touchMove(e) {
      if (e.touches.length === 1) {
        this.mouseMove(e.touches[0]);
      }
    },
    onPinch(e) {
      this.zoomLevel = Math.max(this.startingZoomLevel,
        Math.min(this.lastZoomLevel * (e.scale), 4));
    },
    onPinchEnd() {
      this.lastZoomLevel = this.zoomLevel;
    },
  },
  mounted() {
    // Set default zoom on mobile
    if (document.body.offsetWidth < 1264) {
      const tester = document.getElementById('interaction').parentNode.cloneNode(true);
      tester.id = 'image-dup';
      tester.style = 'visibility: hidden;';
      document.body.appendChild(tester);
      this.width = tester.firstElementChild.offsetWidth;
      this.containerWidth = tester.offsetWidth;
      document.body.removeChild(tester);
    // Set default zoom on desktop
    } else {
      this.width = document.getElementById('interaction').offsetWidth;
      this.containerWidth = document.getElementById('interaction').parentNode.offsetWidth;
    }

    const fullWidth = (this.containerWidth / this.width) || 1.2;

    this.zoomLevel = fullWidth - 0.2;
    this.startingZoomLevel = this.zoomLevel;
    this.lastZoomLevel = this.zoomLevel;
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
