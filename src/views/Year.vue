<template>
  <div class="container">
    <div v-for="(item,index) of yearData" :key="index">
      <year-card :name="item.name" :startday="item.startday"></year-card>
    </div>
  </div>
</template>

<script  >
import getData from "../service";
import YearCard from "/@/components/YearCard/index.vue";
import { getNowDate } from "/@/libs/utils";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import { onMounted } from "vue";
export default {
  name: "YearPage",
  components: {
    YearCard,
  },
  setup() {
    const store = useStore(),
      state = store.state;
      alert(state.yearData)
    onMounted(() => {
      getData(store, "year", getNowDate("year"));
    });
    return {
      yearData: computed(() => state.yearData),
    };
  },
};
</script>

<style  >
</style>