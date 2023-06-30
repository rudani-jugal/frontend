<template>
  <div>
    <span class="name" v-if="(reversalValue || []).length > 0">
      CCI <span @click="goToTextFieldComponent()" style="cursor: pointer">
        ({{this.defaultValue1}})</span>
          crosses below
          <span @click="goToArrayList()" style="cursor: pointer"
            >({{this.defaultValue2}})</span
          >
    </span>
  </div>
</template>
<script>
import '../assets/common.css';

export default {
  name: 'CCIReversal',
  props: {
    reversalValue: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      defaultValue1: null,
      defaultValue2: null,
    };
  },
  mounted() {
    this.defaultValue1 = this.reversalValue[0].variable.$1.default_value || 20;
    this.defaultValue2 = this.reversalValue[0].variable.$2.values[0] || 100;
  },
  methods: {
    formatText(text) {
      const regex1 = /\$1/g;
      const regex2 = /\$2/g;
      const value1 = this.defaultValue1;
      const value2 = this.defaultValue2;
      const formattedText = text.replace(regex1, `<a @click="handleClick(20, '${value1}')">(${value1})</a>`)
        .replace(regex2, `<a @click="handleClick(100, '${value2}')">(${value2})</a>`);
      return formattedText;
    },
    goToTextFieldComponent() {
      const textFieldhDataObj = {
        value: this.reversalValue[0].variable.$1,
        id: this.id,
      }
      this.$router.push({ name: 'PrefilledText', params: { values: textFieldhDataObj } });
    },
    goToArrayList() {
      const arrListDataObj = {
        value: this.reversalValue[0].variable.$2.values,
        id: this.id,
      }
      this.$router.push({ name: 'ArrayList', params: { values: arrListDataObj } });
    },

  }
}
</script>
