<template>
  <div class="box">
    <span class="name prefilled"> {{ studyType }} </span>
    <br>
    <br>
    <span class="name"> Set Parameters </span>
    <br>
    <br>
    <div class="periodBox">
      Period <input type="text" v-model="inputValue" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PrefilledText',
  props: {
    defaultValue: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      inputValue: '',
      studyType: '',
    };
  },
  mounted() {
    const paramsReceived = this.$route.params.values.value;
    this.initializePreFilledComponent(paramsReceived);
  },
  methods: {
    initializePreFilledComponent(params) {
      this.inputValue = params.default_value;
      this.studyType = (params.study_type || '').toUpperCase();
    }
  }
}
</script>
<style>

.periodBox {
  display: flex;
  padding: 10px;
  text-align: left;
  margin-left: 5px;
  background-color: #ffffff;
  min-height: 60px;
  justify-content: space-between;
  align-items: start;
}

.prefilled { 
  margin-bottom: 10px;
}
</style>
