<template>
  <div class="container">Year</div>
</template>

<script  >
import getData from "../service";
import { onMounted } from "vue";
export default {
  name: "YearPage",
  setup() {
    onMounted(() => {
      getData("year", "2020");
    });
  },
};
</script>

<style  >
</style>