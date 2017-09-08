<template>
  <div class="star" :class="starType">
    <span class="star" v-for="star in stars" :class="starClass" class="star-item"></span>
  </div>

</template>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .star
    font-size 0px
      .star-item
        display inline-block
        background-repeat no-repeat
    &.star-48
    &.star-36
    &.star-24
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      }
    }
  }
</script>
