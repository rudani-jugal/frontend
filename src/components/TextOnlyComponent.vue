<template>
  <div>
    <span class="name" v-if="(textOnlyValue || []).length > 0">
      <div v-for="(textValue, index) in textOnlyValue" :key="textValue.id">
        {{ textValue.text }}
        <br />
        <span class="tag" v-if="index !== textOnlyValue.length - 1">and</span>
        <br v-if="index !== textOnlyValue.length - 1" />
        <br />
      </div>
    </span>
  </div>
</template>
<script>
import '../assets/common.css';

export default {
  name: 'TextOnly',
  props: {
    textOnlyValue: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
