<template>
    <div class="cloud">
      <img class="cloud-icon" :src="require('../assets/svg/'+iconType+'.svg')">
      <div class="cloud-text">{{cloudText}}</div>
    </div>
</template>

<script>
    export default {
        name: "Cloud",
        props: {
            iconType: {
                type: String,
                default: "100"
            },
            cloudText: {
                type: String,
                default: ""
            },
        }
    }
</script>

<style scoped lang="scss">
  .cloud {
    width: 11rem;
    height: 11.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    .cloud-icon {
      width: 8rem;
      height: 6.5rem;
    }

    .cloud-text {
      margin-top: 1.6rem;
      font-size: 2.8rem;
      color: #ffffff;
    }
  }
</style>
