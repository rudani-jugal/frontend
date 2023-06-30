<template>
  <div>
    <span class="name" v-if="(rsiReversalValue || []).length > 0">
      Max of last 5 days close > Max of last 120 days close by 
      <span @click="goToArrayList(1)" style="cursor: pointer">
        ({{this.arrList1[0] || 2}}) %</span>
        <br>
        <br>
      <span class="tag"> and </span>
      <br>
      <br>
      Today's Volume > prev 
        <span @click="goToArrayList(2)" style="cursor: pointer">
          ({{this.arrList2[0] || 10}}) %
        </span> 
      Vol SMA by
        <span @click="goToArrayList(3)" style="cursor: pointer">
          ({{this.arrList3[0] || 1.5}}) %
        </span> x
        <br>
        <br>
      <span class="tag"> and </span>
      <br>
      <br>
      RSI 
      <span @click="goToTextFieldComponent()" style="cursor: pointer">
        ({{this.textValue.default_value || 14}}) %
      </span>
      greater than 20
    </span>
  </div>
</template>
<script>
import '../assets/common.css';

export default {
  name: 'RSIReversal',
  props: {
    rsiReversalValue: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      arrList1: '',
      arrList2: '',
      arrList3: '',
      textValue: ''
    };
  },
  mounted() {
    this.initiRsi();
  },
  methods: {
    initiRsi() {
      this.arrList1 = this.rsiReversalValue[0].variable.$1.values;
      this.arrList2 = this.rsiReversalValue[1].variable.$2.values;
      this.arrList3 = this.rsiReversalValue[1].variable.$3.values;
      this.textValue = this.rsiReversalValue[2].variable.$4;
    },
    goToTextFieldComponent() {
      const textFieldhDataObj = {
        value: this.textValue,
        id: this.id,
      }
      this.$router.push({ name: 'PrefilledText', params: { values: textFieldhDataObj } });
    },
    goToArrayList(number) {
      let arrListData = [];
      if (number === 1 ) {
        arrListData = this.arrList1;
      } else if(number === 2) {
        arrListData = this.arrList2;
      } else if(number === 3) {
        arrListData = this.arrList3;
      }

      const arrListDataObj = {
        value: arrListData,
        id: this.id,
        sortDirection: 'asc',
      }
      this.$router.push({ name: 'ArrayList', params: { values: arrListDataObj } });
    },

  }
}
</script>

