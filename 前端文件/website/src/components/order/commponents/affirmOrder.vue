<template>
  <div class="OrderPage" :class="{'ovfol_height':isOrderAlert.isShow||isUserAgreement.isShow}" style="background:#F1F0F0;">
    <HeaderTag page="order"></HeaderTag>
    <div id="header">
                <dl>
                    <li>
                        <div></div>
                        <dt>服务品类选择</dt>
                        <dd><img src="/static/images/yuanWC.png"></dd>
                    </li>
                    <li>
                        <div></div>
                        <dt>故障选择</dt>
                        <dd><img src="/static/images/yuanWC.png"></dd>
                    </li>
                    <li>
                        <div></div>
                        <dt>确认订单</dt>
                        <dd><img src="/static/images/yuanWC.png"></dd>
                    </li>
                    <li>
                        <div></div>
                        <span class="line"> </span>
                        <dt>支付完成</dt>
                        <dd><img src="/static/images/yuan.png"></dd>
                    </li>

                </dl>
            </div>
        <div id="page_box">
          <nav class="clear_both">
            <h3 class="nav_title">
              下单列表
            </h3>
            <span class="add_saver" @click="addSaver" > +添加服务</span> 
          </nav>
          <!-- 产品列表 -->
         <section class="product">
                <ul class="product_center">
                  <li v-for="(item,index) in dataLists" class="clear_both">
                      <span>{{item.fullName}}</span>
                      <span v-if="!!item.tags">{{item.tags}}</span>
                      <span class="product_center_price">
                        ¥ {{item.isSecondPayment==="1"?item.price1:item.price2DiscountFee}}
                      </span> 
                      <!--判断是否是二次付款 并且 折扣后价格是否与服务费相同 如果相同 不显示 else 则显示  -->
                      <del class="product_center_originalPrice" v-if="originalService(item.isSecondPayment,item.price2,item.price2DiscountFee)">
                        ¥{{item.price2}}
                      </del>
                      <div class="product_right_operate clear_both fr">
                          <div class="countsum_containter clear_both fl">
                            <span  @click="subtract(index)"></span>&nbsp;&nbsp;
                               {{item.size}}
                              &nbsp;&nbsp;
                            <span @click="add(index,item)"> </span>
                          </div>
                          <!-- 编辑删除  -->
                          <div class="edit_delete fr">
                          <!-- tag="i" :to="'/SingleProcess/'+item.labelId.substring(0,3)+'?id='item.id" -->
                            <i class="edit_icon" @click="editTo(item,index)">
                            </i>
                            <i class="delete_icon" @click="deleteItem(item,index)">
                            </i>
                          </div>
                      </div>
                  </li>
                </ul>
         </section> 
         <!-- 备注信息 start  -->
         <section class="remarks_container clear_both">
            <p class="info_title">
              备注信息 :
            </p>
            <textarea placeholder="备注 ：" rows="5" cols="80"  v-model="orderRemark"
                  class="remarks_container_content">
             </textarea>
         </section>
         <!-- 预约时间 -->
         <nav class="clear_both"><h3 class="nav_title">预约服务时间 </h3></nav>
          <!-- 预约时间列表 -->
          <section class="time_container">
              <div class="time_content clear_both">
              <!-- 选择日期  -->
                  <p class="fl info_title">
                    选择日期 :
                  </p>
                  <div class="time_content_list fl cursor"  
                         v-for="(item,index) in timeList" :key="index" :class="{'selector_date':isSelector==index}" @click="selector(index)">
                      <p>
                        {{item.time}}
                        <br>
                        {{item.name}}
                      </p>
                  </div> 
                  <span class="prompt_text" v-if="!!isDateTimeObj.isTimeText">请选择服务日期</span>
              </div>
              <!-- 选择时间 -->
              <div class="date_content clear_both">
                  <p class="fl info_title">
                    选择时间 :
                  </p>
                  <div class="date_content_box clear_both fl">
                     <div class="date_content_list fl cursor" v-for="(item,index) in timeList2" :key="index" 
                          @click="selectHour(index,isErr[index])" :class="{'selector_date':isSelectorHour===index,'abate':!!isShowList[index]}">
                        {{item}}{{!!isShowList[index]?'已约满':""}}
                      </div>
                  </div>
                     <span class="prompt_text" v-if="!!isDateTimeObj.isDateText">请选择服务时间</span>
              </div>
          </section>
          <!-- 个人信息 start -->
           <nav class="clear_both">
            <h3 class="nav_title">
              个人信息
            </h3>
          </nav>
           <section class="user_info"> 
                <ul>
                  <li class="clear_both user_item">
                    <p class="fl info_title">
                      手机号码 :
                    </p>
                    <div class="input_container clear_both fl">
                         <input type="text" class="fl user_phone" 
                         v-model="userInfo.phone" 
                         placeholder="请输入手机号"
                            @focus="hoverStyle"
                            @blur="isSendCodeBorder=false"
                            :class="{'border_style':isSendCodeBorder}"
                            >
                         <button class="send_identifying fl"
                          ref="sendCodeBorder"
                          @click="sendIdentifying(userInfo.phone)" 
                          style="min-height:40px;"
                          :class="{'send_code':userInfo.isSendSuccess,'border_style_code':isSendCodeBorder}">
                          {{!!isInput?'':userInfo.identifyingText}}</button>
                         <input type="text" class="fl user_identifying" placeholder="短信验证码" v-model="userInfo.submit_ode" 
                          v-show="!isInput">
                         <button   v-if="!isInput"
                           class="submit_code" @click="submitCode(userInfo.submit_ode)" :style="!userInfo.submit_ode?'backgroundColor:#ccc':''">验 证</button> 
                           <button v-else
                           class="submit_code"  style="background:#fff;"></button>
                         <span class="prompt_text" style="line-height:30px;"  v-if="!!login.promptText&&!userMssage">
                         {{login.promptText}}
                         </span>
                         <!-- <br> -->
                    </div>
                    <button class="user_address" @click="addressListFun" v-if="!isAddPosition&&!!userMssage">返回</button>
                  </li>
                  <li class="clear_both user_item" v-if="(!!userMssage||user_info_isShow)&&!isAddPosition">
                         <p class="fl info_title" style="height:100%;">
                      联系人 :
                    </p>
                    <div class="input_container clear_both fl">
                        <input  type="text" class="fl user_phone user_name" v-model="userInfo.name" placeholder="请输入联系人姓名">
                    </div>  
                  </li>
<!-- 地址 start -->
                   <li class="clear_both user_item" v-if="!!userMssage||user_info_isShow">
                    <p class="fl info_title" style="height:100%;">
                      服务地址 :
                    </p>
                      <component :is="positionComoponentName" 
                                  :selectorAddress="userInfo" 
                                  :userMssage="userMssage" 
                                  :userInfo="userInfo"
                                  :isSubmitAdd="isSubmitAdd"
                                  :paramsObj="paramsObj"
                                  ></component> 
                      <!-- <span class="prompt_text fr" style="transform:translate(-180%,-90%);" v-if="isPositionText">请输入地址</span> -->
                     <button class="user_address" @click="addressListFun" v-if="isAddPosition&&!!userMssage">+新建地址</button>
                  </li>
<!-- 优惠券 start  -->
                </ul>
                <div class="user_item clear_both" style="margin-top:21px;" >
                   <p class="info_title fl" style="margin-top:5px">
                            优惠券 : 
                   </p>
                        <p  class="coupon_select cursor fl" style="margin-left:15px" @click="isCouponList=!isCouponList"> 
                            {{!!selectorCouponList.length&&isSecondPaymentText?selectorIndex.name:'已无可用优惠券'}}   
                        <i class="coupon_icon"></i></p> 
                        <div class="clear_both fl" style="width:100%;margin-left:115px;">
                            <ul class="coupon_select_container " v-if="isCouponList&&selectorCouponList.length&&isSecondPaymentText">
                            <li class="cursor" v-for="(item,index) in selectorCouponList" :key="index" @click="selectorCoupon(item,index)">
                                {{item.serviceDiscount.discountName}} &nbsp;&nbsp;&nbsp;
                                <span v-if="item.serviceDiscount.discountFacevalue!=0" class="alert_price">省￥{{item.serviceDiscount.discountFacevalue}}元</span>
                                <p class="coupon_select_date"
                                 v-if="item.serviceDiscount.startTime&&item.serviceDiscount.endTime">
                                  {{item.serviceDiscount.startTime|moment('YYYY/MM/DD')}}-{{item.serviceDiscount.endTime|moment('YYYY/MM/DD')}}
                                 </p>
                                <b class="radio" :class="{'selector_coupon':selectorIndex.index===index}"></b>
                                <!-- <p v-if="item.serviceDiscount.discountFacevalue==0">使用{{dataList[0].price2Discount*10}}折优惠</p> -->
                              </li>
                          </ul>
                        </div>
                        <div class="price_box fr clear_both">
                          <div class="dd_protocol clear_both fr">
                          <i class="dd_protocol_icon" :class="{'selector_dd_protocol':!selector_dd_protocol}" @click="selector_dd_protocol=!selector_dd_protocol"></i>
                          <a href="javascript:;" @click="isUserAgreement.isShow=true">已同意叮叮快修维修服务协议</a>
                          </div>
                          <div class="price_box_sum ">
                              <p class="fl text">{{isSecondPaymentText?"应付款":"检测费"}}</p>
                              <div class="sum fl">
                                <span class="reality_sum">¥{{discountFacevalue?pirce():sumpric}} </span>
                                <!--原服务费 start-->
                                  <del class="customary_sum" v-if="isSecondPaymentText&&originalSum>pirce()"> 
                                    ￥{{originalSum}}
                                  </del>
                                <!--原服务费 end  -->
                              </div>
                              <button class="submit_sum fr" @click="submit">确认付款</button>
                          </div>
                        </div>
                </div>
           </section>
        </div>
    <FooterTag></FooterTag>
    <Floating></Floating>
    <div class="alert" v-if="isOrderAlert.isShow">
      <order-alert :isShow="isOrderAlert" :payTypeSubmit="payTypeSubmit"> </order-alert>
    </div>
    <div class="alert agreement" v-if="isUserAgreement.isShow">
        <user-agreement :isUserAgreement="isUserAgreement"></user-agreement>
    </div>
  </div>
</template>
<script>
// this.$store.state.discountFacevalue
import HeaderTag from '../../common/Header.vue'
import FooterTag from '../../common/Footer.vue'
import Floating from '../../common/Floating.vue'
import addressList from './addressList'
import createdRess from './createdRess'
import orderAlert from './orderAlert'
import userAgreement from './userAgreement'
import {date,userInfo,session,regular,login,serviceDiscount} from "./index"
const KEY="fullName",fullNameIndex="fullNameIndex";
let isAddress=false;
// let userInfo_data={
//   id:"C0E012875D894692BEE54D80D536DF36",
//   isNew:"false",
//   phoneNum:"15972840395",
//   sourceType:"0",
//   token:"F4DE5CE4C41541E58EADEC79114E87E7",
// }
//  session.setSession("userInfo",userInfo_data)

export default {
  name: 'OrderPage',
    components: {
        HeaderTag,
        FooterTag,
        userAgreement,
        orderAlert,
        Floating,
        addressList,
        createdRess,
    },
    data () {
      return {
        login,
        originalSum:0,//原服务费总计
        isInput:session.getSession("userInfo").token,
        isSendCodeBorder:false,
        isSubmitAdd:false,
        isUserAgreement:{
          isShow:false,
        },
        user_info_isShow:false,
        isOrderAlert:{
          isShow:false,
          params:{},
          pirce: 0
        },
        userMssage:session.getSession("userInfo"),   //用户登录信息
        dataLists:session.getSession(KEY),
        isPositionText:false,
        paramsObj:{
          params:""
        },
        isDateTimeObj:{
          isDateText:false,
          isTimeText:false
        }, 
        orderRemark:"",   
 // 预约时间模块 start
              isSelector:"-1",
              positionComoponentName:"created-ress",
              state:true,
              timeList:[
                {name:"今天",time:"",isw:true},
                {name:"明天",time:"",isw:true},
                {name:"周五",time:"",isw:true},
                {name:"周六",time:"",isw:true},
              ],
              selectorTime:'',
              date:[],
              current:"",
              isErr:[],
              timeList2:date.dateList,
              lastCurrentTime:'',
              isSelectorHour:"-1",
              isShowList:[],
// 预约时间模块 end  
              //用户信息模块start    
              userInfo:userInfo,   
              isAddPosition:this.positionComoponentName==="created-ress"?true:false,   
              selector_dd_protocol:false,
              //用户信息模块end    
              //优惠券
              selectorCouponList:[],
              selectorIndex:{
                index:-1,
                name:""
              },
              isCouponList:false,
              discountFacevalue:this.$store.state.discountFacevalue,
              userInfoDiscountId:"",
             isSecondPaymentText:false,
              isSuperposition:this.$store.state.isSuperposition,
              // token:"41EBBE6F531F4495BBAB90C1FCF7F4E1",
              timeDate:"",
              sumpric:0,
              price2DiscountFavorableFee:0,
      }
  },
  watch:{
    "userInfo.phone":function(v,o){
      if(v.length>3){
        login.promptText=false;
      }
    },
    "user_info_isShow":function(v,o){
      if(v){
         const url=`${affirmOrderApiDomain}/userSite/findlistUserSite?token=${session.getSession("userInfo").token}`;
          this.$http.get(url).then(res=>{
              const data=res.data;
              if(data.code==="0000"&&!!data.result&&data.result.length) this.addressListFun();
        })
      }
    },
    "isOrderAlert.isShow":function(o,v){
      if(o){
          document.body.scrollTop=document.documentElement.scrollTop=0;
      }
    },
     "isUserAgreement.isShow":function(o,v){
          document.body.scrollTop=document.documentElement.scrollTop=0;
      }
  },
  methods:{
    originalService(isSecondPayment,price2,price2DiscountFee){
            //判断是否是一口价产品 原服务费是否大于 折扣费用；
            return isSecondPayment==="0"&&price2>price2DiscountFee?true:false;
    },
    hoverStyle(event){
      const e=event.target,
            borderStyle=`border:1px solid #F4531C;`
            e.style=borderStyle;
            e.style="";
            this.isSendCodeBorder=true;
    },
    addSaver(){
      let goPath=session.getSession("goPath")
      this.$router.push({path:goPath});
      this.$store.commit("changeIsAddSaver",true);
      // this.$router.push({path:"/SingleProcess"})
    },
    editTo(e,i){
      session.setSession(fullNameIndex,i)
      let id =e.id.substring(0,3),
          ids=e.id,
          path=`SingleProcess/${id}?id=${ids}`;
          this.$router.push({path:path})
    },
    // 删除 每一项 数据列表 start
    deleteItem(item,index){
        this.dataLists.splice(index,1);
        session.setSession(KEY,this.dataLists);
        if(!this.dataLists.length){
           this.$router.push({path:session.getSession("goPath")})
        }
        this.sumpir();
    },
      // 删除 每一项 数据列表 end  
    orderListClick(item,index){ //点击当前维修类型
       this.orderListIndex = index;
    },
//     // 日期时间 start
        selector(index){
          this.isDateTimeObj.isTimeText=false;
           date.selector.call(this,index);
        },
    selectHour(index,isErr){
        date.selectHour.call(this,index,isErr);
        this.isDateTimeObj.isDateText=false;
        if(this.isSelectorHour!=-1&&this.isSelecto!=-1){
            this.lastCurrentTime =  this.lastCurrentTime.replace(/\//, "-");
            this.timeDate=this.lastCurrentTime.substring(0,this.lastCurrentTime.indexOf("~"))+":00";
         }
     },
//   // 日期时间 end
        sendIdentifying(phone){
          if(!session.getSession("userInfo").token){
            userInfo.sendIdentifying.call(this,phone)
          }
        },
        submitCode(code){
          if(!!code)userInfo.submitCode.call(this,code)
        },
      addressListFun(){
        if(isAddress){
            this.positionComoponentName = "createdRess"
            this.userInfo.selectorAddress=null;
            console.log(this.userInfo.selectorAddress)
           isAddress=false
        }else{
             this.positionComoponentName = "address-list"
             isAddress=true;
        }   
        this.isAddPosition=isAddress;
      },
      selectorCoupon(item,index){
        this.selectorIndex.name =  item.serviceDiscount.discountName
        this.selectorIndex.index=index;
        this.isCouponList=false;
            this.$store.commit("changeDiscountFacevalue",item.serviceDiscount.discountFacevalue);
            this.$store.commit("changeCouponText",item.serviceDiscount.discountName);
            this.discountFacevalue=item.serviceDiscount.discountFacevalue;
            if(item.userInfoDiscount){
              this.$store.commit("changeIsSuperposition",item.serviceDiscount.isSuperposition);
              this.$store.commit("changeUserInfoDiscountId",item.userInfoDiscount.id);
              this.userInfoDiscountId=item.userInfoDiscount.id;
              this.isSuperposition=item.serviceDiscount.isSuperposition
            }else{
              this.$store.commit("changeUserInfoDiscountId","");
              this.$store.commit("changeIsSuperposition",1);
              this.isSuperposition=1;
              this.userInfoDiscountId="";
            }
       this.sumpir();

      },
      // 减减
       subtract(index){
            if(this.dataLists[index].size<=1){
              // this.productIndex=index;
                successAlert.call(this,"删除");
                return;
            }
            let sizeO=this.dataLists[index];
              sizeO.size--;
              this.$set(this.dataLists,index,sizeO);
              session.setSession(KEY,this.dataLists);
              this.sumpir();
          },
 // 加加
      add(index,item){
            let sizeO=this.dataLists[index];
            if(this.dataLists[index].size>20 || item.isSecondPayment==='1'){
              return;
            }
            sizeO.size++;
            this.$set(this.dataLists,index,sizeO);
            session.setSession(KEY,this.dataLists);
            this.sumpir();
          },
        pirce(){
                   let sum=this.sumpric-this.discountFacevalue;
            return (Math.round(sum*10)/10)<0?0:Math.round(sum*10)/10;
          },
          // changePhone(n){
          // },
// 确认订单 
      submit(){
      // 正则匹配   start
      // 提交订单封装：
          if(!this.paramsObj.params&&!this.userInfo.selectorAddress){
                this.isSubmitAdd=!this.isSubmitAdd;
            };
          const initSunmit=()=>{
              const token=session.getSession("userInfo").token;
              if(!token)return successAlert.call(this,"未登录");
                    let sendId=[];
                    this.dataLists.forEach((e,i)=>{
                      let obj={};
                      obj.id=e.id;
                      obj.size=JSON.stringify(e.size);
                      obj.serviceTags=!!e.tags.length?e.tags:'';
                      sendId.push(obj);
                    });
                    if(!this.userInfo.selectorAddress||!this.userInfo.selectorAddress.id){
                      return  successAlert.call(this,"请选择地址！")
                    }
                    let positionID=this.userInfo.selectorAddress.id;
                    // if(!positionID)return alert("请选择服务地址");
                    let params={
                          token:token,
                          appointmentDatetime: this.timeDate,
                          serviceRemark:'服务说明测试', //提交提交订单
                          serviceIdsJson:JSON.stringify(sendId),
                          serviceAreaId:positionID,
                          userInfoDiscountId:this.userInfoDiscountId,
                          orderRemark:this.orderRemark,
                          source:"5"
                      };
                       // return;
                //创建订单 start 
                  const url= `${affirmOrderApiDomain}/order/submit`;
                  this.$http.post(url,params).then(res=>{
                    const data=res.data;
                    if(data.code==="0000"){
                        this.isOrderAlert.pirce=this.discountFacevalue?this.pirce():this.sumpric;
                        let str= returnCitySN["cip"]+','+returnCitySN["cname"],   //本机ip
                              param={
                                openId:"",
                                orderId:data.result.orderid,     //订单id
                                payType:"1",
                                paymentChannel: "2",
                                token:token,
                                payType:this.$store.state.payType,  //支付方式
                                userIp:str.split(",")[0]
                              };   
                                //调支付接口
                              this.$store.commit('pushPayTypeParams',param);
                              this.payTypeSubmit(param);
                    }else{
                       successAlert.call(this,data.error);
                    }
                  })
                      
          },
// 提交订单封装：end
          submitData=()=>{
// 新建地址；
           console.log(this.paramsObj.params);
            if(!!this.paramsObj.params&&!this.userInfo.selectorAddress){
              let params=this.paramsObj.params,
              url=`${affirmOrderApiDomain}/userSite/saveUserSite`
              this.$http.post(url,params).then(res=>{
                const data=res.data;
                if(data.code==="0000"){
                this.userInfo.selectorAddress=data.result;
// 调用获取地址列表；
       // this.userInfo.selectorAddress.id= data.result.id;
// 地址结束；
                    if(!regular.call(this))return false;
                      initSunmit();//调用提交订单；
                    }else{
                     return alert(data.error);
                    }
                  })
                  }else{
                    if(!regular.call(this))return false;
                      initSunmit();//调用提交订单；
                  }
             };
              setTimeout(()=>{
                submitData();
            },1)
       // 正则匹配  end
          },
          payTypeSubmit(param){
            const url=`${affirmOrderApiDomain}/fapayjournalaccount/payorder`;
            if(this.selector_dd_protocol)return successAlert.call(this,"请勾选服务协议");
            return this.$http.post(url,param).then(res=>{
                    if(!this.isOrderAlert.isShow)this.isOrderAlert.isShow=true;
                         const data=res.data,token=session.getSession('userInfo').token;
                         if(data.code==="0000"){
                            this.isOrderAlert.params=data.result;
                            let url=`${affirmOrderApiDomain}/order/getorder?token=${token}&mainOrderId=${this.$store.state.payTypeParams.orderId}`,
                                flag=true,pic=null,
                                orderId=this.$store.state.payTypeParams.orderId;
                            const getOrder =()=>{
                              if(flag&&this.isOrderAlert.isShow){
                                  this.$http.get(url).then(res=>{
                                        const data=res.data;
                                if(data.code==="0000"&&!!data.result&&data.result.order.state==="03"){     
                                          this.$store.commit("callBack",data.result.order.state) 
                                           flag=false;
                                        }                      
                                  })
                                }else{
                                   window.clearInterval(pic)  
                                }
                            }
                          pic= setInterval(getOrder,8000)
                           return data.result;
                         }else{
                            successAlert.call(this,data.error);
                         }
                   })
          },
 // 价格  整理 
          sumpir(){
               let price=0,newArrPier=[],originalSum=0,price2DiscountFavorableFee=0,
                  computeOriginalSum=e=>originalSum+=(e.price2-0)*(e.size-0);     //计算总服务费
             if(this.dataLists.length===0)return this.sumpric=0;
             this.dataLists.forEach((e,i)=>{
                   if(e.isSecondPayment==="0"){  //一次付款；       1二次付款   0一次付款
                    if(this.isSuperposition===1){
                        price+=e.price2DiscountFee*(e.size-0);
                          console.log(price)
                        price2DiscountFavorableFee+=e.price2DiscountFavorableFee*(e.size-0);
                        computeOriginalSum(e)   //计算总服务费
                    }else{
                        // price+=e.price2DiscountFee*(e.size-0);
                      
                            price+=(e.price2-0)*(e.size-0);
                            
                            computeOriginalSum(e)  //计算总服务费
                      }
                     }else if(e.isSecondPayment==="1"){
                       newArrPier.push(e.price1);
                     }
             });

            let isSecondPayment=false,  //是否含有一次付款；
                    price1Array=[],     //存储二次付款上门费；
                    price1Max=0;
             for(let i=0;i<this.dataLists.length;i++){
               if(this.dataLists[i].isSecondPayment==="0"){
                 isSecondPayment=true;
               }else{
                 price1Array.push(this.dataLists[i].price1);
               }
             }
            this.isSecondPaymentText=isSecondPayment;
            price1Max=Math.max.apply(null, price1Array);
              if(isSecondPayment){   //一次付款计算价格
                price +=price1Array.length?price1Max:0;
                this.originalSum=originalSum;
                this.price2DiscountFavorableFee=price2DiscountFavorableFee //折扣
              }else{
                price=price1Max
              }
             if(JSON.stringify(price).indexOf(".")!==-1){
               let s=JSON.stringify(price).indexOf(".")+3,priceSum=0,price1Array=[];
               this.sumpric=JSON.stringify(price).substring(0,s)  //价格
               this.sumpric=this.sumpric<0?0:this.sumpric
             }else{
               this.sumpric=price;
             }
          },
          /*
初始化数据；
          */
 initGetData(){                           //初始化 数据
            this.orderRemark= this.$store.state.orderRemark;//订单备注
            this.sumpir();
            const token=session.getSession("userInfo").token;
            session.removerSession("fullNameIndex");
            if(token){
              serviceDiscount.call(this);   //获取优惠券
            }else{
              this.userInfoDiscountId="";
            }
          }
  },
  created(){
    //  this.prototype.priceDecide=priceDecide
    //  console.log(this.priceDecide)
     this.$store.commit("changeIsAddSaver",false);
    if(!!session.getSession("userInfo"))this.userMssage=session.getSession("userInfo");
      date.changeDate.call(this);
      date.initIsErr.call(this);
      this.initGetData();
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul,li,p,span,div,button{
       font-family: MicrosoftYaHei;
       border:none;
       outline: none;
}
i,b{
  display: block;
}
#page_box{
  // input:focus {
    // border:1px solid #F4531C !important;
  // }
  .info_title{
        width:5.5em !important;
        text-align: right;
        color:#585858;
        font-size: 18px;

        // margin-right:20px; 
  }
  .prompt_text{
    color:#F4531C;
    font-size:14px;
    line-height: 55px;
    position: relative;
    padding-left:24px;
    margin-left:20px; 
    &::after{
      content:"";
      background:url(../../../../static/images/caution.png) center center no-repeat;
      background-size:100% 100%;
      width:18px;
      height:18px;
      position: absolute;
      top:50%;
      transform:translateY(-50%);
      left:0;
    }
  }
  max-width:1200px;
  background:#fff;
  padding-top:60px;
  // border:1px solid #ccc;
  margin:0 auto;
  padding-bottom:100px;
  // margin-top:153px;
  // height:600px;
  padding-left:82px;
  padding-right: 100px;
  margin-bottom:43px;
  >nav{
    margin-top:60px;
    width:100%;
    display: block;
    margin-bottom:30px;
    >.nav_title{
      font-family: MicrosoftYaHei;
      float:left;
      line-height: 38px;
      font-size: 20px;
      border-bottom:1px solid #F4531C;
      color:#F4531C;
    }
    >.add_saver{
     border:1px solid #B1B1B0;
      color: #A0A0A0;
      font-size:16px;
      cursor: pointer;
      float:right;
       border-radius: 4px;
      width:114px;
      height:38px;
      line-height: 38px;
      text-align:center;
      &:hover{
        border:1px solid rgb(244, 83, 28);
          color:  rgb(244, 83, 28);
      }
    }
  }
  >.product{
    .product_center{
      >li{
          font-family: MicrosoftYaHei;
          border-bottom:1px solid #eee;
          color:#585858;
          font-size:20px;
          position: relative;
          line-height: 70px;
          padding-left:37px;
          &::after{
            content:"";
            position:absolute;
            left:0;
            top:50%;
            width:10px;
            height:10px;
            transform:translateY(-50%);
            border:1px solid #B1B1B0;
            border-radius: 50%;
          }
         >.product_center_price, >.product_center_originalPrice{
                 display: inline-block;
         }
          >.product_center_price{
            margin-left:30px;
            color:#F4531C;
             font-size: 20px;
             margin-right:5px;
          }
          >.product_center_originalPrice{
              color:#A0A0A0;
              font-size: 18px;
          }
          >.product_right_operate{
            float:right;
            // width:500px;
            // height:100%;
            >.countsum_containter{
                  color:#6D6D6D;
                  font-size:20px;
                  margin-right:75px;
                  >span{
                    cursor: pointer;
                    display: inline-block;
                    width:20px;
                    height:20px;
                    background:url(../../../../static/images/addsaver.png) center center no-repeat;
                    background-size:100% 100%;
                    vertical-align: middle;
                  }
                  >span:first-of-type{
                      vertical-align: middle;
                    background:url(../../../../static/images/reduce.png) center center no-repeat;
                    background-size:100% 100%;
                  }
            }
            >.edit_delete{
              position:relative;
              width:70px;
              height:70px;
              >i{
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                right:0;
                cursor: pointer;
              }
              >.edit_icon{
                  width:21px;
                  height:21px;
                  left:0;
                   margin-right:30px;
                   background:url(../../../../static/images/edit.png) center center no-repeat;
                   background-size:100% 100%;
                   &:hover{
                        background:url(../../../../static/images/hover_icon.png) center center no-repeat;
                        background-size:100% 100%;
                   }
              }
              >.delete_icon{
                  width:22px;
                  height:22px;
                   background:url(../../../../static/images/del.png) center center no-repeat;
                   background-size:100% 100%;
                   &:hover{
                        background:url(../../../../static/images/hover_del.png) center center no-repeat;
                        background-size:100% 100%;
                   }
              }
            }

          }
        
      }
    }
  }
  >.remarks_container{
    margin-top:20px;
    >p{
      float:left;
      // width:auto;
      color:#585858;
      font-size: 18px;
      margin-right:20px; 
    }
    >.remarks_container_content{
        float:left;
       color:#585858;
       border-radius: 4px;
       padding:10px;
      font-size: 18px;
      &:focus{
        border:1px solid #F4531C;
      }
    }
  }
  >.time_container{
    >.date_content, >.time_content{
      position: relative;
      >p{
        width:auto;
        color:#585858;
        font-size: 18px;
        margin-right:20px; 
      }
    }
    >.time_content{
      >.time_content_list{
        width:166px;
        height:56px;
        border-radius:5px;
        margin-right:7.8px;
        border:1px solid #B1B1B0;
        >p{
          cloor: #585858;
          font-size: 16px;
          text-align: center;
          transform:translateY(-50%);
          position:relative;
          top:50%;
        }
      }
    }
    >.date_content{
      margin-top:34px;
      >.date_content_box{
        max-width: 704px;
            >.date_content_list{
              width:166px;
              line-height:38px;
              margin-right:7.9px;
              margin-bottom:9px;
              text-align: center;
              color:#585858;
              border:1px solid #B1B1B0;
              border-radius:5px;
           }
      }
  
    }
  }
  >.user_info{
    ul{
      padding-bottom: 30px;
   
      border-bottom:2px solid rgba(170,170,170,1);
    
      >.user_item{
        margin-bottom:30px;
        .input_container{
          padding-left:20px;
          input{
              border:1px solid #B1B1B0;
              border-radius: 5px;
              padding:10px;
            }
          .user_phone{
             width:253px;
             border-right:none;
             border-radius:5px 0px 0px 5px; 
            
          }
          .user_name{
            width:380px;
            border:1px solid #B1B1B0;
            border-radius: 5px;
             &:focus{
                border:1px solid #F4531C;
             }
          }
          .user_identifying{
            margin-left:8px;
            &:focus{
              border: 1px solid #F4531C;
            }
          }
          >.send_identifying{
            padding:8.5px;
            border:1px solid #B1B1B0;
            border-left:none;
            border-radius: 0px 5px 5px 0px;
            color:#F4531C;
            font-size: 14px;
            // padding-right: 22px;
            width:130px;
            outline: none;
          }
          >.send_code{
             color:#B1B1B0;
          }
          >.submit_code{
            color:#fff;
            width:90px;
            height:38px; 
            border:none;
            outline:none;
            background:rgba(244,83,28,1);
            border-radius: 5px;
            margin-left:7px;
          }
        }
        .user_address{
              width:636px;
              margin-top:27px;
              transform:translateX(118px);
              line-height:38px; 
              color:#585858;
              font-size:16px;
              background:rgba(229,229,229,1);
              border-radius: 5px 
        }
           
          
      }
    }
  }
}
      .user_item{
        margin-bottom:30px;
        .coupon_icon{
            position:absolute;
            top:50%;
            right:10px;
            transform:translateY(-50%);
            width:15px;
            height:9px;
            background:url(../../../../static/images/openButtom.png) center center no-repeat;
            background-size:100% 100%;
        }
          input{
              border:1px solid #B1B1B0;
              border-radius: 5px;
              padding:10px;
            }
        
        .user_address{
              width:636px;
              margin-top:27px;
              transform:translateX(118px);
              line-height:38px; 
              color:#585858;
              font-size:16px;
              background:rgba(229,229,229,1);
              border-radius: 5px 
        }
            .coupon_select{
              border:1px solid #B1B1B0;
              border-radius: 5px;
                width:313px;
                 appearance:none;
                  position:relative;
                line-height: 50px;
                line-height: 38px;
                height:38px;
                display: block;
                 text-indent:1em;
                 font-size:14px;
                margin-bottom:6px;
                &:hover{
                    border:1px solid #F4531C;
                }
            }
            .coupon_select_container{
              border:1px solid #F4531C !important;
              padding:0 16px;
              position: absolute;
              box-sizing: border-box;
              float:left;
              max-height:330px;
              overflow: auto;
              border-radius: 5px;
              width:313px;
              >li{
                padding:13px 0;
                color:#585858;
                position:relative;
                font-size:16px;
                border-bottom:1px solid rgba(229,229,229,1);
                .coupon_select_date{
                  color:#979797;
                  font-size:12px;
                  margin-top:5px;
                }
                .alert_price{
                  float:right;
                  color:#F4531C;
                  font-size:16px;
                  margin-right:20px;
                  position:absolute;
                  right:11px;
                  top:50%;
                  transform:translateY(-50%);
                }
                .radio{
                  width: 16px;
                  height: 16px;
                  position: absolute;
                  right: 0;
                  background:url(../../../../static/images/notselector.png) center center no-repeat;
                  background-size:100% 100%;
                  top: 50%;
                  transform:translateY(-50%);
                }
                .selector_coupon{
                    background:url(../../../../static/images/selector.png) center center no-repeat;
                   background-size:100% 100%;
                }
              }
            }
      }


.price_box{
  width:39%;
  height:200px;
  // background:pink;
  transform:translateY(-30px);
  .dd_protocol{
    text-align: right;
    // width:50%;
    color:#6D6D6D;
    font-size:14px;
    width:auto;
    .dd_protocol_icon{
      width:12px;
      vertical-align: middle;
      float:left;
      transform:translateY(3px);
      margin-right:10px;
      height:12px;
      background:url(../../../../static/images/Noagree.png) center center no-repeat;
      background-size:100% 100%;
      cursor: pointer;
    }
    .dd_protocol_icon.selector_dd_protocol{
       background:url(../../../../static/images/agree.png) center center no-repeat;
        background-size:100% 100%;
        border:1px solid #ccc;
    }
  }
  .price_box_sum{
    wdith:100%;
    height:150px;
    transform:translateY(50px);
    .text{
      font-weight: bold;
      color:#6D6D6D;
      font-size:20px;
    }
    .sum{
      min-width: 100px;
      span{
        display: block;
      }
      margin-left:20px;
      .reality_sum{
         font-weight: bold;
        font-size:24px;
        color:rgba(244,83,28,1);
      }
      .customary_sum{
        color:#989898;
        font-size:18px;
      }
    }
     .submit_sum{
        font-size:22px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
        background:#F4531C;
        border-radius: 10px ;
        width:169px;
        line-height: 44px;
      }
  }
}
.alert{
  width:100vw;
  height:100vh;
  position:absolute;
  top:0;
  z-index: 999;
  left:0;
  background:rgba(0,0,0,.5);
}
.ovfol_height{
  overflow: hidden;
  width:100vw;
  height:100vh;
}
.selector_date{
  background:#F4531C;
  border:1px solid #F4531C !important;
  color:#fff !important;
}
.abate{
  color:#949494 !important;
  background:#DCDCDC;
}
.clear_both::after{
  width:0;
  clear:both;
  display: block;
  visibility: none;
  content:"";
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
.selector_position{
      border:1px solid #F4531C !important;
  }
  .border_style{
    border:1px solid #F4531C !important;
    border-right:none !important;
  }
  .border_style_code{
      border:1px solid #F4531C !important;
      border-left:none !important;
  }
  .animainer_component{
    overflow: hidden;
    animation:myfirst 3s ease;
  }
  @keyframes myfirst{
    0%{
      hieght:0;
    }
    100%{
      hieght:50px;
    }
  }
      #header{
       min-width: 1366px;
        height: 153px;
        // max-width:1980px;
        dl{
           display: inline-block;
            height: 153px;
            margin-top: 61px;
            position:relative;
            left:50%;
            transform:translateX(-65%);
            li{
                float: left;
                position: relative;

                dt{
                    height:17px;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    color:rgba(113,113,113,1);
                    line-height:30px;
                    margin-left:292px;
                    margin-bottom:15px;
                }
                dd{
                    width:23px;
                    height:23px;
                    margin-left:328px;
                    img{
                       width:23px;
                       height:23px;
                    }
                }
            }
            li:nth-child(1) div{
                width:140px;
                height:2px;
                background:rgba(244,83,28,1);
                position: absolute;
                left: 351px;
                top:42px;
            }
             li:nth-child(2) div{
                width:150px;
                height:2px;
               background:rgba(244,83,28,1);
                position: absolute;
                left: 101px;
                top:42px;
            }
             li:nth-child(3) div{
                width:283px;
                height:2px;
                background:rgba(244,83,28,1);
                position: absolute;
                left: -23px;
                top:42px;
            }
            li:nth-child(4) div{
                width:150px;
                height:2px;
                background:rgba(244,83,28,1);
                position: absolute;
                left: -23px;
                top:42px;
            }
            .line{
                  position:absolute;
                  top:42px;
                  left:100px;
                  background:rgba(191,191,191,1);
                  width:140px;
                  height:2px;
                }
            
            li:nth-child(2) dt{
                 margin-left:232px;
            }
            li:nth-child(3) dt{
                 margin-left:240px;
            }
             li:nth-child(4) dt{
                 margin-left:215px;
            }
              li:nth-child(2) dd{
                 margin-left:251px;
            }
              li:nth-child(3) dd{
                 margin-left:260px;
            }
              li:nth-child(4) dd{
                 margin-left:240px;
            }
        }
    }
</style>
