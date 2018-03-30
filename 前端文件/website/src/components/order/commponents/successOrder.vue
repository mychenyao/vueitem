<template>
<div class="box">
<HeaderTag page="order"></HeaderTag>
    <div class="container">
        <div class="content">
            <h3> 订单提交成功！</h3>
            <img src="../../../../static/images/0369E6E9-2FD7-4c05-9CCA-07D5A1DD24F9.png" alt="">
            <div class="text">
              <p>
                扫码关注叮叮快修微信公众号<br>
            查看订单进度<br>
            手机下单更方便
              </p>
              <p class="button"> 叮叮快修</p>
            </div>
        </div>
    </div>
      <FooterTag></FooterTag>
      <Floating></Floating>
 </div>
</template>
<script>
import {session} from "./index"
import HeaderTag from '../../common/Header.vue'
import FooterTag from '../../common/Footer.vue'
import Floating from '../../common/Floating.vue'
export default { 
  props:["isShow"],
  components:{
    HeaderTag,
    FooterTag,
    Floating
  },
    data () {
      return {     
     
  }
  },
  methods:{
     
  },
  watch:{
      
    },
  created(){
   
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img{
  width:148px;
  height:148px;
  margin-top:100px;
}
.text{
  margin-top:100px;
  display: inline-block;
  margin-left:20px;
  p{
    color:#7A7A7A;
    font-size:18px;
  }
  .button{
    width:131px;
    color:#656565;
    border: 1px solid #707070;
    font-size:16px;
    text-align: center;
    margin-top:25px;
      height:38px; 
      line-height: 38px;
      background:rgba(255,255,255,1);
      border-radius: 5px 
  }
}
.fl{
  float:left;
}
.fr{
  float:right;
}
 .container{

    min-width: 1200px;
    width:1200px;
    background:#fff;
    height:513px;
    margin:0 auto;
    overflow: hidden;
    position:relative;
    margin-top:50px;
    margin-bottom:50px;
    .content{
      
      width:500px;
      height:400px;
      padding:30px;
      box-sizing: border-box;
      position:absolute;
      left:50%;
      transform:translate(-50%,-50%);
      top:50%;
     h3{
      font-size:36px;
      font-family:MicrosoftYaHei;
      color:rgba(244,83,28,1);
      position:relative;
      line-height:30px;
      text-align: center;
      &::after{
        content:"";
        position:absolute;
        top:50%;
        left:20px;
        width:61px;
        height:61px;
        transform:translateY(-50%);
        background:url(../../../../static/images/success.png) center center no-repeat;

      }
     }
    }
 }
 .box{
  width:100%;
  background:#DCDCDC;
 }
</style>
