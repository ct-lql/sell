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
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
  </div>
</template>
<style lang="stylus" type="text/stylus" >

  @import "../../common/stylus/mixin.stylus";
  @import "../../common/stylus/incon-style.styl"

  .header{
    background-color: rgba(7,17,27,0.5);
  }
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width:90%;
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
    /*margin-left: 10px;*/
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
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 8px;
    color: rgb(255,255,255);
    line-height: 28px;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>
