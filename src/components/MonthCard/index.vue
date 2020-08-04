<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">{{name}}</p>
            <p class="subtitle">{{festival}}</p>
            <div class="content">
              <p>假期描述：{{desc}}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthCard",
  props: {
    name: String,
    festival: String,
    desc: String,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
</style>