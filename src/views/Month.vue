<template>
  <div class="container">
    <month-card></month-card>
  </div>
</template>

<script  >
import getData from "../service";
import MonthCard from "/@/components/MonthCard/index.vue";
import { onMounted } from "vue";
export default {
  name: "MonthPage",
  components: {
    MonthCard,
  },
  setup() {
    onMounted(() => {
      getData("month", "2020-7");
    });
  },
};
</script>