<template>
  <div>
    <span class="name" v-if="openHighValue.length > 0">
      <div v-for="element in openHighValue" :key="element.id">
        <span v-html="formatText(element.text)" @click="goToArrayList(element)"  style="cursor: pointer"></span>
        <br />
      </div>
    </span>
  </div>
</template>

<script>
import '../assets/common.css';

export default {
  name: 'OpenHigh',
  props: {
    openHighValue: {
      type: Array,
      default: () => ([]),
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    formatText(text) {
      const regex = /\$1/g;
      const value = this.openHighValue[0].variable.$1.values[0];
      const formattedText = text.replace(regex, `<a>(${value})</a>`);
      return formattedText;
    },
    goToArrayList() {
      const openHighDataObj = {
        // check CCI reversal.
        value: this.openHighValue[0].variable.$1.values,
        id: this.id,
        sortDirection: 'desc',
      }
      this.$router.push({ name: 'ArrayList', params: { values: openHighDataObj } });
    },
  }
};
</script>

<style>
/* .name {
  font-size: 16px;
  font-family: 'Times New Roman';
  color: white;
  margin-left: 5px;
} */
</style>
