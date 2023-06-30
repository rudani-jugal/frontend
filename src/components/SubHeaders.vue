<template>
  <div class="box">
    <div class="subHeaders">
      <span>
        <span class="name">{{ stockItem.name }}</span>
          <br />
        <span class="tag" :style="{ color: stockItem.color }">{{ stockItem.tag }}</span>
          <br />
      </span>
    </div>
    <span v-if="stockItem.id === 1 || stockItem.id === 2 ">
      <TextOnlyComponent 
      :textOnlyValue="stockItem.criteria"
      />
    </span>
    <span v-if="stockItem.id === 3">
      <OpenHigh 
      :openHighValue="stockItem.criteria"
      :id="stockItem.id"
    />
    </span>
    <span v-if="stockItem.id === 4">
      <CCIReversal
      :reversalValue="stockItem.criteria"
      />
    </span>
    <span v-if="stockItem.id === 5">
      <RSIReversal
      :rsiReversalValue="stockItem.criteria"
      />
    </span>
  </div>
</template>
<script>
import CCIReversal from './CCIReversal.vue';
import OpenHigh from './OpenHigh.vue';
import RSIReversal from './RSIReversal.vue';
import TextOnlyComponent from './TextOnlyComponent.vue';
export default {
  components: {
    OpenHigh,
    TextOnlyComponent,
    CCIReversal,
    RSIReversal
},
  name: 'SubHeaders',
  props: {
    stockItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      item: null
    };
  },
  mounted() {},
  methods: {}
}
</script>
<style>
 /* .subHeaders {
  min-height: 60px;
  background-color: #1686b0;
}
.box {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
  list-style: none;
  background-color: #01131b;
  min-height: 300px;
}
.name {
  font-size: 16px;
  font-family: 'Times New Roman';
  color: white;
  margin-left: 5px;
}
.tag {
  font-size: 10px;
  font-family: 'Times New Roman';
  text-align: left;
  margin-left: 5px;
} */
</style>
