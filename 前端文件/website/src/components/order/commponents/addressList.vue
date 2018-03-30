<template>
<div class="clear_both" :class="{'animattion_address':!!dataList.length}">
  <div class="user_position cursor" v-for="(item,index) in dataList" :class="isSelector[index]" @click="selector(item,index)">
           <div class="name clear_both">
             <p class="fl" style="width:70px;">{{item.linkmanName}}</p>
             <p class="fl">{{item.linkmanPhoneNum}}</p> 
           </div>
            {{item.linkmanDetails}}
      </div>
    </div>
</template>
<script>
import {session} from "./index"
export default { 
  props:["selectorAddress","userMssage"],
    data () {
      return {     
        dataList:[],
      
        isSelector:[], 
      }
  },
  methods:{
    selector(v,i){
    this.selectorAddress.selectorAddress=v
      this.isSelector=this.isSelector.map((e,v)=>{

        if(v===i)return 'selector_position'
      })
    }
  },
  created(){
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
       const url=`${affirmOrderApiDomain}/userSite/findlistUserSite?token=${session.getSession("userInfo").token}`;
        this.$http.get(url).then(res=>{
        const data=res.data;
        data.result.forEach(v=>{
          this.isSelector.push('');
        })
        if(data.code==="0000") {
          this.dataList=data.result;
          // selectorAddress
         setTimeout(()=>{
             document.body.scrollTop=document.documentElement.scrollTop=(document.body.scrollHeight-1400)
           },1000)
          // if(!!this.selectorAddress.selectorAddress){
          //    this.selectorAddress.selectorAddress.forEach((e,i)=>{
          //       console.log(e);
          //   })
          // }
        }else{
          successAlert.call(this,data.error);
        }
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul,li,p,span,div{
       font-family: MicrosoftYaHei;
}
.odiv{
  height:20px;
  background:red;
  margin-top:10px;
}
.fl{
  float:left;
}
.fr{
  float:right;
}
.cursor{
  cursor: pointer;
  } 

  .clear_both::after{
  width:0;
  clear:both;
  display: block;
  visibility: none;
  content:"";
}
   .user_position{
                    margin-left:20px;
                    margin-bottom:9px;
                    float:left;
                    width:636px;
                    background:rgba(249,249,249,1);
                    border-radius: 10px;
                    border:1px solid #F9F9F9;
                    height:105px;
                    box-sizing: border-box;
                    padding-top:20px;
                    padding-left:30px;
                    color:#585858;
                    font-size:16px;
                  >.name{
                    margin-bottom:10px; 
                    margin-right:30px;
                  }
         }
   .user_position:first-of-type{
          transform:translateX(0);
    }
    .user_position{
         // transform:translateX(100px);
      }
.selector_position{
      border:1px solid red !important;
      position:relative;
      &::after{
        content:"";
        position:absolute;
        bottom:0;
        right:0;
        width:40px;
        height:44px;
        background:url(../../../../static/images/address.png) center center no-repeat;
        background-size:100% 100%;
      }
  }
  .animattion_address{
      animation:myfirst 2s ease-out;
      // animation-delay:1s;
  overflow: hidden;
    }
  @keyframes myfirst{
    0%{
      max-height:0;
    }
    100%{
     max-height:5500px;
    }
  }
</style>
