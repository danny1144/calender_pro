<template>
  <div class="container">
      <day-card></day-card>
  </div>
</template>
<script>
import getData from "../service";
import DayCard from "/@/components/Card/index.vue"
import { onMounted} from "vue";
import {useStore} from 'vuex'
export default {
  name: "DayPage",
  components:{
    DayCard
  },
  setup() {

    onMounted(() => {
      const store=useStore()
      getData("day", "2020-7-7");
    });
  },
};
</script>

<style lang='scss' scoped>
      
</style>