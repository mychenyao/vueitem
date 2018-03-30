<template>
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="(item, index) in imgObj" :key="item">
          <div class="banner" v-bind:class="index"><a v-bind:href="item"></a></div>
        </el-carousel-item>
      </el-carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: '1',
                imgObj:{
                    banner1:'javascript:;',
                    banner2:'javascript:;'
                }
            }
        }
    }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .banner{
     position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e0e0e0;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
  .banner1{
    background-image: url(img/banner1.png);
  }
  .banner2{
    background-image: url(img/banner2.png);
  }
</style>