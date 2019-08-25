<template>
    <div class="air-quality">
      <img :class="'icon-'+type" :src="require('../assets/img/ic_weather_'+type+'.png')" />
      <div class="text">{{text}}</div>
      <div class="value">{{value}}</div>
    </div>
</template>

<script>
    export default {
        name: "Quality",
        props: {
            type: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            value:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
  .air-quality {
    width: 20.5rem;
    height: 22rem;
    background-color: #00000026;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    .icon-wind {
      width: 5.08rem;
      height: 5.26rem;
    }

    .icon-sun {
      width: 5.3rem;
      height: 5.26rem;
    }

    .icon-humidity {
      width: 3.97rem;
      height: 5.04rem;
    }

    .text {
      font-size: 2.6rem;
      color: #ffffff7f;
      margin-top: 2.34rem;
    }

    .value {
      margin-top: 0.8rem;
      font-size: 3.2rem;
      color: #ffffff;
    }
  }
</style>
