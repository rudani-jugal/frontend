
<template>
  <div class="box">
    <div v-for="item in result" :key="item.id" @click="openComponent(item)"> 
      <ul>
        <li style="list-style-type: disc;">
          <span class="name" style="color: white">
            {{ item.name }}
          </span>
          <br />
        <span class="tag" :style="{ color: item.color }">{{ item.tag }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    result: [],
  }),
  mounted() {
    this.getApiData();
  },
  methods: {
    getApiData() {
      const url = 'http://localhost:9999/api/data';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.result = data;
        });
    },
    openComponent(item) {
      this.$router.push({ name: 'SubHeaders', params: { stockItem: item } });
    },
  },
};
</script>
<style>

.box {
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
}
.tag {
  font-size: 10px;
  font-family: 'Times New Roman'
}
</style>
