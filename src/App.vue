<template>
  <my-header>{{headerTitle}}</my-header>
  <search-wrap :placeholder="placeholder" :maxlength="maxlength"></search-wrap>
  <tab></tab>
  <router-view></router-view>
</template>

<script>
import MyHeader from "/@/components/Header/index.vue";
import Tab from "./components/Tab/index.vue";
import SearchWrap from "/@/components/SearchInput/index.vue";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    MyHeader,
    Tab,
    SearchWrap,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    router.push("/");
    watch(
      () => {
        console.log(router.currentRoute.value.name);
        return router.currentRoute.value.name;
      },
      (value) => {
        store.commit("setHeaderTitle", value);
        store.commit("setPlaceholder", value);
        store.commit("setMaxlength", value);
      }
    );
    return computed(() => state).value;
  },
};
</script>