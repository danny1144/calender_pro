<template>
  <div class="tabs is-toggle is-fullwidth">
    <ul>
      <li v-for="(item,index) of tabData" :key="index">
        <tab-icon :iconText="item.iconText" :path="item.path" :textTab="item.textTab"></tab-icon>
      </li>
    </ul>
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
</style>