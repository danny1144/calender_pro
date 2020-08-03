<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">{{data.weekday}}</p>
            <p class="subtitle">{{data.lunar}} {{data.date}}</p>
            <div class="content">
              <p>当前年月：{{data.yearMonth}}</p>
              <p>今年属相：{{data.animalsYear}}</p>
              <p>农历年名：{{data.lunarYear}}</p>
              <p>适宜事件： {{data.suit}}</p>
              <p>避免{{ data.avoid}}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayCard",
  props: {
    data: Object,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>