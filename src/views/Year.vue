<template>
  <div class="container">
    <year-card></year-card>
  </div>
</template>

<script  >
import getData from "../service";
import YearCard from "/@/components/YearCard/index.vue";

import { onMounted } from "vue";
export default {
  name: "YearPage",
  components: {
    YearCard,
  },
  setup() {
    onMounted(() => {
      getData("year", "2020");
    });
  },
};
</script>

<style  >
</style>