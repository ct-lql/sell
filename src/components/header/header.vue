<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img width="100%" height="100%" :src="seller.avatar">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <v-star :size = "48" :score="4.2"></v-star>
        </div>
      </div>
      <div class="detail-close">
        <span class="icon-close">×</span>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" type="text/stylus" >

  @import "../../common/stylus/mixin.styl";
  /*@import "../../common/stylus/incon-style.styl"*/

  .header
    position relative
    background-color: rgba(7,17,27,0.5)
    overflow hidden
    .background
      z-index: -1
      position absolute
      top: 0
      left 0px
      width 100%
      height 100%
      -webkit-filter : blur(10px)
    .detail
      position fixed
      z-index 100
      top: 0px
      left 0px
      width 100%
      height 100%
      overflow auto
      background rgba(7,17,27,0.8)
      .clearfix
        display :inline-block
        :after
          display block
          content :"."
          height: 0px
          line-height : 0px
          clear:both
          visibility :hidden
      .detail-wrapper
        min-height: 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .name
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
      .detail-close
        position relative
        text-align center
        margin -64px auto 0 auto
        width 32px
        height 32px
        clear: both
        font-size 32px






  .content-wrapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0px;
  }
  .avatar{
    display: inline-block;
    vertical-align: top;
  }
  .avatar > img{
    border-radius: 2px;
  }
  .content{
    display: inline-block;
    margin-left: 16px;
  }
  .title{
    margin: 2px 0 8px 0;
  }
  .name{
    font-size: 16px;
    color: rgb(255,255,255);
    font-weight: bold;
    line-height: 18px;
    margin-left: 6px;
  }
  .description{
    font-size: 12px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 12px;
    margin-bottom: 10px;
  }
  .text{
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 12px;
  }
  .brand{
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    bg-image('brand');
    /*background-image: url('./brand@2x.png');*/
    background-size: 30px 18px;
  }
  .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
  }
  .decrease{
    bg-image('decrease_1')
    /*background-image: url('./brand@2x.png');*/
  }
  .discount{
    bg-image('discount_1')
  }
  .special{
    bg-image('special_1')
  }
  .invoice{
    bg-image('invoice_1')
  }
  .guarantee{
    bg-image('guarantee_1')
  }

  .support-count{
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    width: 40px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    text-align: center;
  }
  .count{
    font-size: 10px;
  }
  .icon-keyboard_arrow_right{
    font-size: 10px;
    margin-left: 4px;
    line-height: 24px;
  }

  .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    background-color: rgba(7,17,27,0.2);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .bulletin-title{
    display: inline-block;
    margin-left: 10px;
    margin-top: 9px;
    height: 12px;
    width: 22px;
    bg-image('bulletin');
    background-size:22px 12px;
    background-repeat:no-repeat;

  }
  .bulletin-text{
    display: inline-block;
    vertical-align: top;
    font-size: 10px;
    color: rgb(255,255,255);
    line-height: 28px;
    margin-left: 4px;
  }
  .bulletin-wrapper > .icon-keyboard_arrow_right{
    display inline-block
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 8px;
    color: rgb(255,255,255);
    line-height: 28px;
  }
</style>
<script type="text/ecmascript-6">
  import star from '../star/star.vue'
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail () {
        this.detailShow = true
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    components: {
      'v-star': star
    }
  }
</script>
