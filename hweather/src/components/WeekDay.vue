<template>
    <div class="weekday">
      <div class="day">{{day}}</div>
      <div class="date">{{date}}</div>
    </div>
</template>

<script>
    export default {
        name: "WeekDay",
        props: {
            day: {
                type: String,
                default: "昨天"
            },
            date: {
                type: String,
                default: "03/01"
            }
        },
    }
</script>

<style scoped lang="scss">
  .weekday {
    width: 11rem;
    height: 10.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    .day {
      font-size: 3.2rem;
      color: #ffffff;
      font-weight: 400;
    }

    .date {
      margin-top: 2.4rem;
      color: #ffffff7f;
      font-size: 2.8rem;
      background-color: #00000019;
      border-radius: 2.4rem;
    }
  }
</style>
