<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">{{name}}</p>
            <p class="subtitle">{{startday}}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearCard",
  props: {
    name: String,
    startday: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>