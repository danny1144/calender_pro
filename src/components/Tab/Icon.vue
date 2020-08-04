<template>
  <router-link  :to="path">
    <div>
      <span class="icon is-small"><i class="fas fa-image" aria-hidden="true">{{iconText}}</i></span>
      <span class="title">{{textTab}}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Icon",
  props: {
    path: String,
    iconText: String,
    textTab: String,
  },
};
</script>
<style lang="scss" scoped>
</style>