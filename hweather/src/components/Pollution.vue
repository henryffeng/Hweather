<template>
    <div class="air-pollution">
      <div class="type">{{type}}</div>
      <div class="value">{{value}}</div>
      <div class="unit">({{unit}})</div>
    </div>
</template>

<script>
    export default {
        name: "Pollution",
        props: {
            type: {
                type: String,
                default: ""
            },
            value: {
                type: String,
                default: ""
            },
            unit:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
  .air-pollution {
    width: 20.5rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    .type {
      width: 12rem;
      height: 4.7rem;
      font-size: 4rem;
      color: #ffffff7f;
    }

    .value {
      width: 12rem;
      height: 4.7rem;
      font-size: 4rem;
      color: #ffffff;
      font-weight: bold;
      margin-top: 0.6rem;
    }

    .unit {
      width: 12rem;
      height: 3rem;
      font-size: 2.6rem;
      color: #ffffff7f;
      margin-top: 0.6rem;
    }
  }

</style>
