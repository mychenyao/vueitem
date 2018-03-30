<template>
  <div id="box">
   <mt-navbar v-model="selected">
		  <mt-tab-item id="1"><span style="font-size:.64rem">未使用</span></mt-tab-item>
		  <mt-tab-item id="2"><span style="font-size:.64rem">已使用</span></mt-tab-item>
		  <mt-tab-item id="3"><span style="font-size:.64rem">已过期</span></mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected" :swipeable="bool">
  <mt-tab-container-item id="1">
    <!--待付款-->
   	<div class="keep_container">
   		<ul>
		    <router-link tag="li" to="/" v-for="(item,index) in dataList" :key="index">
						<div class="left">
								<div class="price">￥<span>{{item.serviceDiscount.discountFacevalue}}</span></div>
								<div class="text_content">
                  <p>{{item.serviceDiscount.discountName}}满{{item.serviceDiscount.minimum}}使用</p>
										<p>限期：{{item.serviceDiscount.startTime| moment('YYYY-MM-DD')}}-{{item.serviceDiscount.endTime | moment('YYYY-MM-DD')}}</p>
										<p>范围：{{item.serviceDiscount.areaName}}</p>
								</div>
						</div>
						<div class="right">
							立即使用
						</div>
		    </router-link>
		</ul>
   	</div>
    <div class="alert" v-if="isAlert.isShow1">
      <img src="../../assets/images/wuyouhuij.png" alt="">
      <p>你现在没有可用优惠券哦！</p>
    </div>
  </mt-tab-container-item>

  <mt-tab-container-item id="2">
    <accomplish :isLodow="lodow" v-if="isShow" :isAlert="isAlert"></accomplish>
    <div class="alert" v-if="isAlert.isShow2">
      <img src="../../assets/images/wuyouhuij.png" alt="">
      <p>你现在没有已使用优惠券哦！</p>

    </div>
  </mt-tab-container-item>


  <mt-tab-container-item id="3" v-if="isShow" >
    <cancel :isAlert="isAlert"></cancel>
    <div class="alert" v-if="isAlert.isShow3">
      <img src="../../assets/images/wuyouhuij.png" alt="">
      <p>你现在没有已过期优惠券哦！</p>

    </div>
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>
<script>
 import {setCookie,getCookie} from "@/js/cookie"
 import {setLocalStorage,removerStorage} from "@/js/session"
 const accomplish = resolve =>require(["./accomplish"],resolve);
 const cancel = resolve =>require(["./cancel"],resolve);
// import common from "@/js/baseHttp"
 import {Toast} from "mint-ui";
 import { Indicator } from 'mint-ui';
 import {AFFIRM} from "@/components/savertype/js/isStatus"

export default {
  components:{
    accomplish,
    cancel
  },
  data () {
    return {
      bool:true,
      j:true,
      isAlert:{
        isShow1:true,
        isShow2:true,
        isShow3:true
      },
      value:"",
      isShow:true,
    	selected:"1",
      dataList:[],
      lodow:false,
//      sendHttpData:"",
    }
  },
  methods:{
    isAffirm(input){
     return AFFIRM(input);
    },
    active(){

    },
    sendDetailed(item,index){
      removerStorage("orderDetails");
      setLocalStorage("orderDetails",item);
      this.$store.commit("changeOrder",item);
      this.$router.push({path:"/staymoney"});
    },
    getData(){
      this.isAlert.isShow1=false;
      if(!this.dataList.length){
        this.isAlert.isShow1=true;
      }
      let token=getCookie();
      if(token){
          let url=`${common.apidomain}/userInfoDiscount/findUserInfoDiscount`;
          this.$http.post(url,{"token":token,"state":"0"}).then(res=>{
            let data=res.data;
            if(data.code==="0000"){
              this.dataList=data.result;
              Indicator.close();
              this.isShow=true;
              this.isAlert.isShow1=false;
              if(this.dataList.length===0){
                this.isAlert.isShow1=true;
              }
            }else if(data.code!=="3049"){
              Toast(res.data.error);
            }
            Indicator.close();
          });
        }else{
          Indicator.close();
          this.$store.commit("changeLoginPath",this.$route.path);
          setTimeout(()=>{
            this.$router.push({path:"/login"});
          },1000)
        }
    }
  },
  watch:{

  },
   mounted(){
     document.title="优惠券";
    },
    created(){
     if(window.location.href.indexOf(common.pathDomain)!==-1){
       this.getData();
     }else{
       setTimeout(()=>{
         this.getData();
       },1000)
     }

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .alert{

    width:100vw;
    height:85vh;
    text-align: center;

    >img{
      transform:translateY(50%);
      width:380/50rem;
      height: 380/50rem;
    }
    >.accounts{
      font-family: PingFangSC-Regular;
      font-size: 32/50rem;
      color: #FFFFFF;
      letter-spacing: 0;
      transform:translateY(5.2rem);
      background: #EB5312;
      margin:0 auto;
      border-radius: 4px;
      width:280/50rem;
      line-height: 88/50rem;
      height: 88/50rem;
    }
    >p{
      font-family: PingFangSC-Regular;
      font-size: 28/50rem;
      color: #4A4A4A;
      transform:translateY(4.5rem);
    }
  }

a{
	color:#000;
}
#box{
  font-family: PingFangSC-Regular;
  margin-bottom:1.96rem;
.mint-tab-item{
	font-family: PingFangSC-Regular;
	font-size: 32/50rem;
	padding-top:.7rem;
	letter-spacing: 0;
}
>.mint-navbar{
	height:100/50rem;
}
}
.mint-navbar {
	.mint-tab-item.is-selected{
		border-bottom: 3px solid #EB5312;
		color:#EB5312;
	}
}
.mint-tab-item-label{
	font-family: PingFangSC-Regular;
	font-size: 32/50rem;
	letter-spacing: 0;
}
.keep_container{
	margin-top:.5rem;
  >ul{
  	padding:0 20/50rem;
    >li{
    	margin:20/50rem 0;
      background:url(../../assets/images/youhuiback.png)center center no-repeat;
      background-size:100% 100%;
      width:100%;
   		display: flex;
   		>.left{
   			flex:5;
   			padding-left:43/50rem;
   			>.price{
   				font-family: PingFangSC-Regular;
					font-size: 28/50rem;
					color: #FFFFFF;
					margin-top:40/50rem;
					letter-spacing: 0;
					>span{
						font-size:90/50rem;
					}
   			}
   			>.text_content{
   				margin-top:.2rem;
   				>p:first-of-type{
   					font-size:24/50rem;
   				}
   				>p{
   					color:#fff;
   					line-height:.7rem;
   					font-family: PingFangSC-Regular;
						font-size: 22/50rem;
						color: #FFFFFF;
						letter-spacing: 0;
   				}
   			}
   		}
   		>.right{
   				flex:2;
	   			font-family: PingFangSC-Regular;
					font-size: 32/50rem;
					color: #FFFFFF;
					line-height: 4.6rem;
					letter-spacing: 0;
   		}
    }
  }
}
.mui-table-view-cell:after{
  background:none;
}
.mui-table-view-cell:last-of-type{
  border-bottom:none;
}

  /*支付*/
.defray_content{
  width:100%;
  overflow: hidden;
  padding:14/50rem;
  padding-right:.6rem;
  >.defray_right{
    float:right;
   overflow: hidden;
    position:relative;
    width:12rem;
    >p{
      font-size:22/50rem;
      color:#9B9B9B;
      text-align: right;
      >.defray_price{
        font-size: 28/50rem;
        color: #000;
        letter-spacing: 0;
      }
      >.defray_describe{
        color:#000;
      }

      >.final{
        font-size: 28/50rem;
        color: #EB5312;
        letter-spacing: 0;
      }
    }

   >.defray_bottom{
      background: #EB5312;
      border: 1px solid #EB5312;
     position:absolute;
     right:0;
     bottom:.1rem;
     font-size: 24/50rem;
     color: #FFFFFF;
     letter-spacing: 0;
      border-radius: 28/50rem;
      width:150/50rem;
      text-align: center;
      margin-left:1.2rem;
      float: right;
      line-height: 55/50rem;
      height:56/50rem;
    }
  }
  >.defray_right_Btn{height:120/50rem}
.open_price{
  height:auto;
}
}
  /*&.fade-enter-active, &.fade-leave-active{*/
    /*transition: all 2s ease*/
  /*}*/

 /*&.fade-enter, &.fade-leave-active{*/
   /*transform:translateX(100px);*/
  /*}*/


</style>
