<template>
  <div class="level is-mobile myTab">
    <div v-for="(item,index) of tabData" :key="index">
      <tab-icon :iconText="item.iconText" :path="item.path" :textTab="item.textTab"></tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from "./Icon.vue";
import tabData from "/@/data/tab";
import { reactive } from "vue";
export default {
  name: "Tab",
  components: {
    TabIcon,
  },
  data() {
    return {
      active: 0,
    };
  },
  setup() {
    console.log(tabData);
    const state = reactive({
      tabData,
    });
    return {
      ...state,
    };
  },
};
</script>

<style lang="scss">
.myTab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}
</style>