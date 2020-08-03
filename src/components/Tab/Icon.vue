<template>
  <div class="level-item has-text-centered">
    <router-link class="tab-icon" :to="path">
      <div>
        <p class="heading">{{iconText}}</p>
        <p class="title">{{textTab}}</p>
      </div>
    </router-link>
  </div>
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
.router-link-active {
  .heading {
    color: #ed4940;
  }
  .title {
    color: orangered;
  }
}
</style>