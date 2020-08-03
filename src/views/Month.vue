<template>
  <div class="container">
    <div v-for="(item,index) of monthData" :key="index">
      <month-card :name="item.name" :festival="item.festival" :desc="item.desc"></month-card>
    </div>
  </div>
</template>
<script  >
import getData from "../service";
import MonthCard from "/@/components/MonthCard/index.vue";
import { getNowDate } from "/@/libs/utils";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MonthPage",
  components: {
    MonthCard,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "month", getNowDate("month"));
    });

    return {
      monthData: computed(() => state.monthData),
    };
  },
};
</script>