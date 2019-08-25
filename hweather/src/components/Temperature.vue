<template>
    <div class="temper">
      <div class="max">{{max}}°</div>
      <div class="min">{{min}}°</div>
    </div>
</template>

<script>
    export default {
        name: "Temper",
        props: {
            max: {
                type: String,
                default: "0"
            },
            min: {
                type: String,
                default: "0"
            },
        }
    }
</script>

<style scoped lang="scss">
  .temper {
    width: 11rem;
    height: 11.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .max {
      text-align: center;
      width: 7rem;
      font-size: 4rem;
      font-weight: bold;
      color: #ffffff;
      border-bottom: 1px solid #00000019;
    }

    .min {
      text-align: center;
      width: 7rem;
      font-size: 4rem;
      font-weight: bold;
      color: #ffffff7f;
    }
  }
</style>
