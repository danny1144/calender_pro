<template>
  <div class="container">Month</div>
</template>

<script  >
import getData from "../service";
import { onMounted } from "vue";
export default {
  name: "MonthPage",
  setup() {
    onMounted(() => {
      getData("month", "2020-7");
    });
  },
};
</script>