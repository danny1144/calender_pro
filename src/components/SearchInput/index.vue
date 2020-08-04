<template>
  <div class="search-wrap">
    <input
      class="input is-primary"
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
import { useStore } from "vuex";
export default {
  name: "SearchInput",
  props: {
    placeholder: String,
    maxlength: Number,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      inputValue = ref("");
    const searchData = (e) => {
      console.log(e.target.value);
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