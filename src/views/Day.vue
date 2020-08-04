<template>
  <div class="container">
    <day-card :data="dayData"></day-card>
  </div>
</template>
<script>
import getData from "../service";
import DayCard from "/@/components/DayCard/index.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { getNowDate } from "/@/libs/utils";
export default {
  name: "DayPage",
  components: {
    DayCard,
  },
  setup() {
    const store = useStore();
    const state = store.state;
    onMounted(() => {
      getData(store, "day", getNowDate("day"));
    });
    return {
      dayData: computed(() => state.dayData),
    };
  },
};
</script>

<style lang='scss' scoped>
</style>