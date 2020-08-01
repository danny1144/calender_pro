<template>
  <div class="search-wrap">
    <input class="input is-primary" 
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @click="searchData($event)"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchInput",
  props: {
    placeholder: String,
    maxlength: Number,
  },
  setup() {
    const inputValue = ref("");
    const searchData = (e) => {


    };
    return {
      searchData,
      inputValue,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>