<template>
<div class="clear_both box">
    <nav>
      <span>支付{{isShow.pirce}}元</span>
      <i @click="cancel"></i>
    </nav>
    <section class="center" v-if="successAlert">
      <p>{{text}}</p> 
      <img :src="isShow.params.createCodeUrl" alt="" >
      <footer>
            <p @click="changing">
              {{defrayText}}
          </p>
      </footer>
    </section>
    <section  class="center" v-if="!successAlert">
        <h3>订单支付失败!</h3>
        <footer style="text-align:center;border:none;padding-bottom:20px;">
            <p @click="changing" class="fl" style="text-align: right;width:45%;"> 
              重新支付
            </p>
            <p class="fr" style='width:45%;text-align: left'>
                遇到问题？
            </p>
      </footer>
    </section>
 </div>
</template>
<script>
import {session} from "./index"
let isChanging=true;
export default { 
  props:["isShow","payTypeSubmit"],
    data () {
      return {     
        successAlert:true,
        img:"../../../../static/images/icon.png",
        text:"推荐使用微信支付",
        defrayText:"使用支付宝支付"
      }
  },
  methods:{
      cancel(){
       this.isShow.isShow=false;
      },
      changing(){
        if(isChanging){
          // this.img=`../../../../static/images/icon.png`;
          this.defrayText="使用微信支付";
          this.text="欢迎使用支付宝支付"
          let params=JSON.parse(JSON.stringify(this.$store.state.payTypeParams))
              params.payType="2";
              this.payTypeSubmit(params);
        }else{
            this.defrayText="使用支付宝支付"
            this.text="推荐使用微信支付"
             let params=JSON.parse(JSON.stringify(this.$store.state.payTypeParams))
              params.payType="1";
              this.payTypeSubmit(params)
        }
         isChanging=!isChanging;
      }
  },
  watch:{
      "$store.state.callBackOrderData":function(v,o){
            if(!!v){
              this.$router.push({path:"/successOrder"})
            }
      },
     
    },
  created(){
    console.log(this.isShow.params)
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.fl{
  float:left;

}
.fr{
  float:right;
}
  footer{
    overflow: hidden;
    line-height: 59px;
    border-top:1px solid #E5E5E5;
    margin:32px 38px 0 32px;
    p{
       text-decoration:underline;
    font-size:14px;
    cursor: pointer;
    font-family:MicrosoftYaHei;
    color:rgba(144,143,143,1);
    }
  }
i{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  right:19px;
  width:23px;
  cursor:pointer;
  height:23px;
  background:url(../../../../static/images/close.png) center center no-repeat;
  background-size:100% 100%;
}
nav{
  position: relative;
  line-height: 57px;
  border-radius: 5px 5px 0 0 ;
  background:#F4531C;
  padding-left:2em;
  span{
        font-size:20px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1); 

       }
}
  .box{
    width:430px;
    height:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:rgba(255,255,255,1);
    border-radius: 10px;
    .center{
      text-align: center;
      margin-top:29px;
      font-size:18px;
      font-family:MicrosoftYaHei;
      color:rgba(63,63,63,1);
      >h3{
        font-size:30px;
        font-family:MicrosoftYaHei;
        color:rgba(244,83,28,1);
        position:relative;
        &::after{
          content:"";
          position:absolute;
          top:0;
          left:30px;
          vertical-align: middle;
          background:url(../../../../static/images/error.png) center center no-repeat;
          background-size:100% 100% ;
          width:58px;

          height:58px;
        }
      }
    }
    img{
      width:160px;
      height:160px;
      display: block;
      margin:0 auto;
      margin-top:17px;
    }
  }
</style>
