 <template>
  <div class="box">
    <div v-for="element in arrData" :key="element" @click="openComponent(item)"> 
      <ul style="list-style-type:none;">
        <li>
          <span class="name"> {{ element }} </span>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrData: null,
      stockId: null,
      sortElementsDir: '',
    };
  },
  mounted() {
    const paramsReceived = this.$route.params.values;
    this.initalizeArrListComponent(paramsReceived);
    
  },
  methods: {
    initalizeArrListComponent(params) {
      this.stockId = params.id || 0;
      this.arrData = params.value || [];
      this.sortElementsDir = params.sortDirection;
      if (this.sortElementsDir === 'desc') {
        this.arrData.sort((a, b) => b - a);
      } else if (this.sortElementsDir === 'asc') {
        this.arrData.sort((a, b) => a - b);
      }
    }
  }
};
</script>

