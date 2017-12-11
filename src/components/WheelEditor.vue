<template>
  <md-card>
    <div class="md-toolbar short text-primary-color mid-primary-color">
      <h2 class="md-title">Wheel</h2>
    </div>
    <md-card-content>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head>Color</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(wedge, index) in wheel">
            <md-table-cell>
              <md-input-container md-inline>
                <label>Text</label>
                <md-input v-model="wedge.text" />
              </md-input-container>   
            </md-table-cell>
            <md-table-cell>
              color
              <color-picker/>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-card-content>
  </md-card>
</template>

<script>
import ColorPicker from '@/components/ColorPicker';

export default {
  name: 'wheel-editor',
  props: ['wheel', 'name', 'topText', 'bottomText'],
  components: {
    ColorPicker,
  },
};
</script>

<style scoped>
.md-input-container {
  margin: 0px;
  padding: 0px;
  min-height: initial;
}

.md-input-container input {
  font-size: 13px !important;
  line-height: 18px !important;
}

.md-input-container label {
  font-size: 13px !important;
  line-height: 18px !important;
}
</style>
