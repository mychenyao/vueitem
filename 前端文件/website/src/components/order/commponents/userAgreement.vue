<template>
<div class="box">
     <section>
        <h4>叮叮快修手机维修服务协议</h4>
        <p class="point">【特别提示】</p>
        <div class="dirion">
        <h5>欢迎您选择叮叮快修！</h5>
            <p> 叮叮快修在此特别提醒您（用户）在预约维修服务之前，请认真阅读本《服务协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权使用本协议所涉服务。您的预约、查询、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。
                   如果您未满18周岁，请在法定监护人的陪同下阅读本协议。
            </p>
            <h5>一、【协议的范围】</h5>
            <h6 style="text-indent:2.5em;">
               1.1 【协议适用主体范围】
            </h6>
        <p style="text-indent:0;">
           本协议是您与叮叮快修之间关于用户使用叮叮快修相关服务所订立的协议。“叮叮快修”是指叮叮快修网站及其相关服务可能存在的运营关联单位。“用户”是指使用叮叮快修相关服务的使用人，在本协议中更多地称为“您”。
        </p>
        </div>
        <i class="close" @click="isUserAgreement.isShow=false"></i>
    </section>
 </div>
</template>
<script>
import {session} from "./index"
export default { 
  props:["isUserAgreement"],
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
.box{
  .close{
    position:absolute;
    right:35px;
    top:35px;
    width:23px;
    height:23px;
    background:url(../../../../static/images/clo2se.png) center center no-repeat;
    background-size:100% 100%;
    cursor: pointer;
  }
  width:40%;
  height:80%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background:#fff;
  h4{
    font-size:18px;
    font-family:MicrosoftYaHei;
    color:rgba(244,83,28,1);
    text-align: center;
    margin-top:44px;
  }
  .point{

    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(83,83,83,1);
    margin-top:15px;
    text-align: center;
  }
  .dirion{
    font-size:14px;
   padding:0 66px;
    font-family:MicrosoftYaHei;
    color:rgba(83,83,83,1);
    line-height:30px;
    p{
       text-indent: 2.5em;
    }
  }
}
.fl{
  float:left;

}
.fr{
  float:right;
}
 
</style>
