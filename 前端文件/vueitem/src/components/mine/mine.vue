<template>
  <div id="box">
    <div class="picture_back">
      <img src="../../../static/images/userImg.png" alt="">
    </div>
    <mine-lists :dataList="dataList"></mine-lists>
    <div class="picture_list">
      <ul>
        <router-link v-for="(item,index) in linkDataList" :key="index" tag="li" :to="item.path">
          <i class="icon" :class="item.clas"></i>&nbsp;&nbsp;{{item.name}}
          <i class="icon right_Icon" ></i>
        </router-link>
        <li @click="tel">
          <i class="icon service"></i>&nbsp;&nbsp;客服热线
          <i class="icon right_Icon" ></i>
        </li>
        <li @click="onLine" style="border:none">
          <i class="icon on_line"></i>&nbsp;&nbsp;在线客服
          <i class="icon right_Icon" ></i>
        </li>
      </ul>
      </div>
  </div>
</template>
<script>
  import {MessageBox} from "mint-ui"
  import mineLists from "./mineLists"
  import {getCookie} from "@/js/cookie"
  export default{
    components:{
      mineLists
    },
        data(){
            return{
              dataList:[
                {
                  name:"积分",
                  sum:0,
                  unit:"分",
                  path:"/integral"
                }, {
                  name:"优惠券",
                  sum:0,
                  unit:"张",
                  path:"/couponList"
                },
                {
                  name:"质保卡",
                  sum:0,
                  unit:"张",
                  path:'/warranty'
                },
              ],
              linkDataList:[
                {
                  name:"推荐有奖",
                  path:"/share",
                  clas:"coupon",
                },
                {
                  name:"地址管理",
                  path:"/address",
                  clas:"address",
                },  {
                  name:"意见反馈",
                  path:"/feedback",
                  clas:"feedback",
                },
//                {
//                  name:"优惠券",
//                  path:"/couponList",
//                  clas:"couponList",
//                },
//                {
//                  name:"我的积分",
//                  path:"/integral",
//                  clas:"integral",
//                }
              ],
            }
        },
        methods:{
          onLine(){
            window.location.href = "http://177dd.udesk.cn/im_client/?web_plugin_id=38935";
          },
          tel(){
            window.location.href = "tel:4009991891";
          },
          targetLogin(){
            this.$store.commit("changeLoginPath",this.$route.path);
            this.$router.push({path:"/login"})
          },
        },
        created() {
          let token=getCookie();
          if(token){
            let url= `${this.$common.apidomain}/userUserFriendsShareRecord/findOne?token=${token}`,
                url1=`${this.$common.apidomain}/userInfoDiscount/findUserInfoDiscount`,
                url2= `${this.$common.apidomain}/order/serviceCard/findPage?token=${token}`;
            this.$http.get(url).then(res=>{
              let data=res.data;
              if(data.code==="0000"){
                this.dataList.forEach((v,i)=>{
                  if(v.path==="/integral")return this.dataList[i].sum=data.result.totalCommission||0;
                })
              }else if(data.code==="1001"){
                this.$Toast(data.error);
                this.targetLogin();
              }
            });
            this.$http.post(url1,{"token":token,"state":"0"}).then(res=>{
              let data=res.data;
              if(data.code==="0000"){
                this.dataList.forEach((v,i)=>{
                  if(v.path==="/couponList")return this.dataList[i].sum=data.result.length||0;
                })
              }else if(data.code==="1001"){
                this.$Toast(res.data.error);
                this.targetLogin();
              }
            });
            this.$http.get(url2).then(res=>{
              let data=res.data;
              if(data.code==="0000"){
                this.dataList.forEach((v,i)=>{
                  if(v.path==='/warranty'&&data.result.notExpiredList.coreMainOrderServiceCards){return this.dataList[i].sum=data.result.notExpiredList.coreMainOrderServiceCards.length;}
                });
              }else{
                this.$Toast(data.error)
              }
            })
          }else{
            this.targetLogin();
          }
        }
    }
</script>
<style scoped lang="less">
  .picture_back{
    width:100%;
    height:400/50rem;
    background:url(../../../static/images/bg1.png)center no-repeat;
    background-size:100% 100%;
    position:relative;
    >img{
      display: block;
      width:200/50rem;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
    }
  }
  .picture_list{
    width:100%;
    display: flex;
     flex-wrap:wrap;
    margin-top:20/50rem;
    margin-bottom:2rem;
    >ul{
      width:100%;
      li{
        padding-left:20/50rem;
        position:relative;
        font-family: PingFangSC-Regular;
        font-size: 32/50rem;
        color: #4A4A4A;
        border-bottom:1px solid #eeeeee;
        background:#fff;
        width:100%;
        height:88/50rem;
        line-height:88/50rem ;
       >.order{
          background:url(../../assets/images/order1.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.address{
          background:url(../../assets/images/address.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.feedback{
          background:url(../../assets/images/feedback.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.coupon{
          background:url(../../assets/images/order.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.couponList{
          background:url(../../assets/images/coupon_icon.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.integral{
          background:url(../../assets/images/integral.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.service{
          background:url(../../assets/images/service.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.on_line{
          background:url(../../assets/images/on_line.png) center center no-repeat;
          background-size:100% 100%;
        }
      }
      >li:active{
        background: #F8F8F8;
      }
    }
    >.category_info{
      width:50%;
      background:#FFF;
      height:300/50rem;
      border:1px solid #e6e6e6;
      border-left:none;
      border-top:none;
      >.text_info{
        display: block;
        width:100%;
        line-height:320/50rem;
        text-align:center;
        height:100%;
        color:rgba(74,74,74,1);
        font-family: PingFangSC-Regula;
        font-size: 32/50rem;

      }
    }
    >.category_info:nth-of-type(even){
      border-right:none;
    }
  }
  .icon{
    display: inline-block;
    width:40/50rem;
    height:40/50rem;
    margin:0 auto;
    vertical-align: middle;
  }
  .right_Icon{
    display: block;
    float:right;
    width:10px;
    height:15px;
    position:absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
    background:url(../../../static/images/right.png)center center no-repeat;
    background-size:100% 100%;
  }
</style>


