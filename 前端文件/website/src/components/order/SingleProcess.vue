<template>
     <div class="SingleProcess">
         <HeaderTag> </HeaderTag>
        <div id="SingleProcess-box">
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
                        <dd><img src="/static/images/yuan.png"></dd>
                    </li>
                    <li>
                        <div></div>
                        <dt>支付完成</dt>
                        <dd><img src="/static/images/yuan.png"></dd>
                    </li>
                </dl>
            </div>
            <div id="center">
                  <!-- 选择品牌 -->
                  <div class="center-box1 clearfix">
                      <div><span></span><p>选择品牌</p></div>
                      <ul>
                         <li v-for="(item,index) in shangpingData1"
                         @click="boxClick1(item,index)"
                         :class="{activeBJ:BJColor == index}">{{item.b}}</li>
                      </ul>
                  </div>
                  <!-- 选择型号 -->
                  <div class="center-box2 clearfix" v-if="isShow1">
                      <div><span :class="{active:isStyle1}"></span><p :class="{activeOne:isStyle1}">选择型号</p></div>
                       <ul>
                         <li v-for="(item1,index1) in twoData"
                         @click="boxClick2(item1,index1)"
                         :class="{activeBJ1:BJColor1 == index1}">{{item1.b}}</li>
                      </ul>
                  </div>
                  <!-- 层故障类型 -->
                  <div class="center-box3 clearfix" v-if="isShow2">
                       <div><span :class="{active:isStyle2}" ></span><p :class="{activeOne:isStyle2}">屏幕故障类型</p></div>
                        <ul>
                            <li v-for="(item2,index2) in threeData"
                            @click="boxClick3(item2,index2)"
                            :class="{activeBJ2:BJColor2 == index2}">{{item2.b}}</li>
                       </ul>

                  </div>
                  <!-- 故障原因 -->
                  <div class="center-box4 clearfix" v-if="isShow3">
                      <div><span :class="{active:isStyle3}" ></span><p :class="{activeOne:isStyle3}">故障原因</p></div>
                      <ul>
                            <li v-for="(item3,index3) in fourData"
                            @click="boxClick4(item3,index3)"
                            :class="{activeBJ3:BJColor3 == index3}">{{item3.b}}</li>
                       </ul>
                  </div>
                  <!-- 颜色 -->
                  <div class="center-box5 clearfix" v-if="isShow4">
                      <div><span :class="{active:isStyle4}"></span><p :class="{activeOne:isStyle4}">颜色</p></div>
                        <ul>
                                <li v-for="(item4,index4) in fiveData"
                                @click="boxClick5(item4,index4)"
                                :class="{activeBJ4:BJColor4 == index4}">{{item4.b}}</li>

                        </ul>
                  </div>
                  <div class="center-box6 clearfix" v-show="biaoqian.length>0">
                          <div><span :class="{active:isStyle5}"></span><p :class="{activeOne:isStyle5}">故障描述</p></div>
                            <ul>
                                    <li v-for="(item5,index) in biaoqian"
                                    @click="boxClick6(item5,index)"
                                    :class="{activeBJ5:index5[index]}">{{item5}}</li>
                            </ul>
                      </div>
                 <div class="foot">
                     <span>￥{{price}}</span>
                   <div v-show="yuanPriceIshow" >原价：￥{{yuanPrice}}<span></span></div>
                     <p v-show="fontIsShow">{{font}}</p>
                     <button :style="nextStyle" @click="nextClick">下一步</button>
                 </div>
            </div>
        </div>
        <FooterTag></FooterTag>
        <Floating></Floating>
    </div>
</template>
<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'
import {session} from "./commponents/index"
const fullNameIndex="fullNameIndex"
export default {
    name: 'SingleProcess',
    data () {
        return {
            index5:[],
            isTarget:false,
            shangpingID:"", //商品ID
            shangpingData1:"", //一级商品数据
            BJColor:0,  //背景色
            BJColor1:0,  //背景色1
            BJColor2:0,  //背景色2
            BJColor3:0,  //背景色3
            BJColor4:0,  //背景色3
            BJColor5:0,  //背景色5
            isShow1:false,   //是否显示1
            isShow2:false,   //是否显示2
            isShow3:false,   //是否显示3
            isShow4:false,   //是否显示4
            isShow5:false,   //是否显示5
            isShow6:false,   //是否显示
            price:0,     //价格
            isStyle1:false,   //是否改变选择型号字体色
            isStyle2:false,   //是否改变选择型号字体色
            isStyle3:false,   //是否改变选择型号字体色
            isStyle4:false,   //是否改变选择型号字体色
            isStyle5:false,   //是否改变选择型号字体色
            twoData:"" , //二级商品数据
            threeData:"" , //三级商品数据
            fourData:"" , //四级商品数据
            fiveData:""  ,//五级商品数据
            moziID:"" ,     //末子id
            nextStyle:false,
            contPrice:null, //价格数据
            biaoqian:[], //标签
            font : "检测费",
            yuanPrice:"",//原价
           yuanPriceIshow:false, //优惠价格显示
          fontIsShow : false,
        }
    },
    components: {
        HeaderTag, FooterTag, Floating
    },
    created(){
        //初始化数据
         this.shangpingID =this.$router.history.current.params.id;
         this.shangpingDaTa(this.shangpingID);
    },

    methods:{
        // 获取商品数据
        shangpingDaTa(id){
            this.$http.get(`${affirmOrderApiDomain}/articleinfo/findlabelbusinessbyflabel?id=${id}`).then((res)=>{
//                this.shangpingData1 = res.data.result.beans; //初始数据
                if(res.data.code==="0000"){
                  this.shangpingData1 = res.data.result.beans
                  let data=res.data.result;
                  const promise =data=>{
                    return new Promise( (resolve, reject) =>{
                      resolve(data) // pending ——> resolved 参数将传递给对应的回调方法
                    });
                  };
                 let id = !!this.$route.query.id?this.$route.query.id:this.shangpingID+"001";
                  const exp =(res)=>{
                    return !res.beans||res.a.length===id.length?false:res.beans;
                  };
                  const forData=(res,subIndex,selectorIndex=null)=>{
                    if(id.length<=3)return;                       //判断id 的length 是否小于等于3  如果小于等于3 则停止执行；
                    for(let i=0;i<res.length;i++){
                      if(res[i].a.indexOf(id.substring(0,subIndex))!==-1){
  //                        let selectorFun=`selectortype${selectorIndex}`;
                      this["boxClick"+selectorIndex](res[i],i)
                        return exp(res[i])
                      }
                    }
                  };
                  if(!!id){
                    promise(data.beans).then(res=>{
                      if(res)return forData(res,6,1)
                    }).then(res=>{
                      if(res)return forData(res,9,2)
                    }).then(res=>{
                      if(res)return forData(res,12,3)
                    }).then(res=>{
                      if(res)return forData(res,15,4)
                    }).then(res=>{
                      if(res)return forData(res,18,5)
                    }).then(res=>{
                      if(res) return forData(res,21,6)
                    })
                  }
                }else{
                  this.$Toast(data.error);
                }
//
            })
        },
        boxClick1(item,index){
             this.fontIsShow = false;
              this.nextStyle = {background:"#b1b1b0"} //改变下一步背景
               this.price = 0;
               this.BJColor = index; //背景色显示
               this.twoData = item.beans;  //二级商品数据
               this.isShow2 = false; //是否显示2
               this.isShow3 = false; //是否显示3
               this.isShow4 = false; //是否显示4
               this.isShow5 = false; //是否显示5
               this.isStyle1 = false; //是否改变选择型号字体色
               this.isStyle2 = false; //是否改变选择型号字体色
               this.isStyle3 = false; //是否改变选择型号字体色
               this.isStyle4 = false; //是否改变选择型号字体色
               this.BJColor1 = 999999999999; //背景消失
                this.biaoqian = [];
           if(item.beans && item.beans.length>0){
                this.isShow1 = true; //是否显示1
            }else{
                this.nextStyle = {background:"#f4531c"} //改变下一步背景
                this.isShow1 = false;  //是否显示1
                this.moziID = item.a;   //末子级id
                this.priceData(this.moziID); //根据末子级id请求数据方法
             this.fontIsShow = true;
            }
        },
        boxClick2(item1,index1){
                this.fontIsShow = false;
                this.nextStyle = {background:"#b1b1b0"} //改变下一步背景
                this.isStyle5 = false;
                this.price = 0;
                this.isStyle1 = true;  //是否改变选择型号字体色
                this.isShow3 = false; //是否显示3
                this.isShow4 = false; //是否显示4
                this.isShow5 = false; //是否显示5
                this.BJColor2 = 999999999999; //背景消失
                this.isStyle2 = false;  ////是否改变选择型号字体色
                this.isStyle3 = false;  //是否改变选择型号字体色
                this.isStyle4 = false;  //是否改变选择型号字体色
                this.BJColor1 = index1; //背景色显示
                this.threeData = item1.beans; //三级商品数据
                this.biaoqian = [];
            if(item1.beans && item1.beans.length>0){
                this.isShow2 = true;  //是否显示2
            }else{
               this.nextStyle = {background:"#f4531c"} //改变下一步背景
                this.isShow2 = false; //是否显示2
                this.moziID = item1.a; //末子级id
                this.priceData(this.moziID); //根据末子级id请求数据方法
              this.fontIsShow = true;

            }
        },
        boxClick3(item2,index2){
              this.fontIsShow = false;
               this.nextStyle = {background:"#b1b1b0"} //改变下一步背景
               this.isStyle5 = false;
                this.price = 0;
                this.isStyle2 = true;  //是否改变选择型号字体色
                this.isShow4 = false; //是否显示4
                this.isShow5 = false; //是否显示5
                this.BJColor3 = 999999999999; //背景消失
                this.isStyle3 = false;  //是否改变选择型号字体色
                this.isStyle4 = false;  //是否改变选择型号字体色
                this.BJColor2 = index2; //背景色显示
                this.fourData = item2.beans; //四级商品数据
                this.biaoqian = [];
            if(item2.beans && item2.beans.length>0){
                this.isShow3 = true; //是否显示3
            }else{
               this.nextStyle = {background:"#f4531c"} //改变下一步背景
                this.isShow3 = false; //是否显示2
                this.moziID = item2.a; //末子级id
                this.priceData(this.moziID); //根据末子级id请求数据方法
              this.fontIsShow = true;
            }

        },
        boxClick4(item3,index3){
              this.fontIsShow = false;
               this.nextStyle = {background:"#b1b1b0"} //改变下一步背景
                 this.isStyle5 = false;
                 this.price = 0;
                this.isStyle3 = true;  //是否改变选择型号字体色
                this.isShow5 = false; //是否显示5
                this.BJColor4 = 999999999999; //背景消失
                this.isStyle4 = false; //是否改变选择型号字体色
                this.BJColor3 = index3; //背景色显示
                this.fiveData = item3.beans; //五级商品数据
                this.isShow4 = true;
                this.biaoqian = [];
            if(item3.beans && item3.beans.length>0){
                this.isShow4 = true; //是否显示4
            }else{
               this.nextStyle = {background:"#f4531c"} //改变下一步背景
                this.isShow4 = false; //是否显示4
                this.moziID = item3.a; //末子级id
                this.priceData(this.moziID); //根据末子级id请求数据方法
              this.fontIsShow = true;
            }
        },
        boxClick5(item4,index4){
                this.fontIsShow = false;
                this.nextStyle = {background:"#b1b1b0"} //改变下一步背景
                this.isStyle4 = true; //是否改变选择型号字体色
                this.price = 0;
                this.BJColor5 = 999999999999; //背景消失
                this.BJColor4 = index4; //背景色显示
                this.biaoqian = [];
            if(item4.beans && item4.beans.length>0){
                this.isShow5 = true; //是否显示5
            }else{
               this.nextStyle = {background:"#f4531c"} //改变下一步背景
                this.isShow5 = false; //是否显示5
                this.moziID = item4.a; //末子级id
                this.priceData(this.moziID); //根据末子级id请求数据方法
              this.fontIsShow = true;
            }
        },
        boxClick6(item5,i){
          this.nextStyle = {background:"#f4531c"} //改变下一步背景
          this.isStyle5 = true;
          this.$set(this.index5,i,!this.index5[i])

        },

        nextClick(){ //下一步
          //其他故障多选==============================
             if(this.price <= 0)return;
                const getTaget=()=>{
                    let newArray= this.biaoqian.filter((v,i)=>{
                     if(this.index5[i])return v;
                   })
                    return newArray;
              };
                const isTargetFun=()=>{//是否有标签
                      if(this.isTarget){

                        this.contPrice.tags=getTaget().join(",")

                        let flag=false;
                        for(let i=0;i<this.index5.length;i++){
                          if(this.index5[i]){
                            flag=true;

                            break;
                          }
                        }

                        return flag;
                      }else{

                        return true;
                      }
                };
                  if(!isTargetFun())return alert("请选择标签");


       // ==============================
          const paramsId=this.$route.query.id;
          session.setSession("goPath",this.$route.path)
            if(this.price > 0){

                 if(this.$store.state.isAddSaver&&!paramsId){  //判断是不是添加服务
                 let data = JSON.parse(sessionStorage.getItem("fullName"));
                      data.push(this.contPrice);
                       sessionStorage.setItem("fullName",JSON.stringify(data));

                    this.$router.push({path:"/affirmOrder"}) //跳到下个页面

              }else if(!!paramsId&&(!!session.getSession(fullNameIndex)||session.getSession(fullNameIndex)===0)){
                  let index=session.getSession(fullNameIndex),
                      fullName=session.getSession("fullName");
                      fullName.splice(index,1,this.contPrice)
                      session.setSession("fullName",fullName)
                      this.$router.push({path:"/affirmOrder"}) //跳到下个页面
                      this.nextStyle = false; //改回背景
              }else{
                    sessionStorage.removeItem("fullName")
                    let newArray=[];
                    newArray.push(this.contPrice)
                    sessionStorage.setItem("fullName",JSON.stringify(newArray));
                    let that = this;

                     that.$router.push({path:"/affirmOrder"}) //跳到下个页面


                 }
            }else {
               alert("你还没购买服务，请选择服务")
            }
        },
        //价格数据
        priceData(id){
            this.$http.get(`${affirmOrderApiDomain}/articleinfo/findlistserviceinfo?labelId=${id}&areaId=${"0101"}`).then((res)=>{
               res.data.result[0].serviceInfo.size = 1;
                 if(res.data.result[0].serviceInfo.isSecondPayment == "0"){
                     this.price = res.data.result[0].serviceInfo.price2DiscountFee
                     this.font = "应付款";
                     this.yuanPrice = res.data.result[0].serviceInfo.price2
                     if(res.data.result[0].serviceInfo.price2DiscountFee ==res.data.result[0].serviceInfo.price2){
                        this.yuanPriceIshow = false;
                     }else{
                       this.yuanPriceIshow = true;
                     }

                 }else if(res.data.result[0].serviceInfo.isSecondPayment == "1"){
                   this.price = res.data.result[0].serviceInfo.price1;
                   this.yuanPriceIshow = false;
                   this.font = "检测费";
                 }else{
                   this.price = 0;
                   this.font = "应付款";
                 }
                 this.contPrice = res.data.result[0].serviceInfo
               if(res.data.result[0].serviceInfo.tags){
                     this.nextStyle = {background:"#cccccc"} //改变下一步背景
                      this.index5=[];
                      this.isTarget=true;
                       this.biaoqian = res.data.result[0].serviceInfo.tags.split(",")
                        this.biaoqian.forEach((v,i)=>{
                          this.index5.push(false)
                        })
                }else{
                        this.biaoqian = [];
                        this.isTarget=false;

               }
            })
        }

    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.active{
  background: rgba(244,83,28,1) !important;
}
.activeOne{
  color: rgba(244,83,28,1) !important;
}
@media(max-width:960px) {
  /* 网页全屏显示 */
  body {
    width: 100%;
  }

  /* 正文全屏显示 */
  .SingleProcess {
    width: 100%
  }
}
.SingleProcess{
    min-width:1200px;
    margin: 0 auto;
    background: #F1F0F0;
}
#SingleProcess-box{
    width:1200px;
    margin: 0 auto;
    background: #F1F0F0;
    #header{
        width: 100%;
        height: 153px;
        dl{
            width: 100%;
            height: 153px;
            margin-top: 61px;
            li{
                float: left;
                position: relative;
                cursor: pointer;
                dt{
                    height:17px;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    color:rgba(113,113,113,1);
                    line-height:30px;
                    margin-left:112px;
                    margin-bottom:15px;
                }
                dd{
                    width:23px;
                    height:23px;
                    margin-left:148px;
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
                left: 171px;
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
                background:rgba(191,191,191,1);
                position: absolute;
                left: -23px;
                top:42px;
            }
            li:nth-child(4) div{
                width:263px;
                height:2px;
                background:rgba(191,191,191,1);
                position: absolute;
                left: -23px;
                top:42px;
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
    #center{
       width:1064px;
        background:rgba(255,255,255,1);
        margin: 0 auto;
        padding: 52px 105px 0 56px;
        margin-bottom:56px;
        .clearfix:after{
          content:"";
          display:block;
          clear:both;
          height:0;
        }

        .center-box1{

            width: 100%;
            padding-bottom:58px;
             /*overflow: hidden;*/
            div{
                width: 100%;
                height: 20px;
                span{
                        width: 14px;
                        display: inline-block;
                        height:14px;
                        margin-right: 8px;
                        background:rgba(244,83,28,1);
                    }
                p{
                        display: inline-block;
                        height:20px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                         color:rgba(244,83,28,1);
                        line-height:20px;
                    }

            }
            ul{
                width: 100%;
                margin-top: 31px;
                li{
                    width: 166px;
                    height: 38px;
                    background:rgba(255,255,255,1);
                    border-radius: 5px ;
                    margin-right:9px;
                  /*float: left;*/
                   display: inline-block;
                    font-size:16px;
                    border:1px solid #B1B1B0;
                    color: #B1B1B0;
                    margin-bottom: 12px;
                    text-align: center;
                    line-height: 38px;
                    cursor: pointer;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                li.activeBJ{
                    background:rgba(244,83,28,1);
                    color: #ffffff;
                    border: 0;
                }

            }

        }
        .center-box2{
            width: 100%;
            padding-bottom:58px;
            div{
                width: 100%;
                span{
                        width: 14px;
                        display: inline-block;
                        height:14px;
                        margin-right: 8px;
                        background:rgba(109,109,109,1);
                    }
                p{
                        display: inline-block;
                        height:20px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                        color:rgba(109,109,109,1);
                        line-height:20px;
                    }

            }
            ul{
                width: 100%;
                margin-top: 31px;

                li{
                    width: 166px;
                    height: 38px;
                    background:rgba(255,255,255,1);
                    border-radius: 5px ;
                    margin-right:9px;
                    /*float: left;*/
                   display: inline-block;
                    font-size:16px;
                    border:1px solid #B1B1B0;
                    color: #B1B1B0;
                    text-align: center;
                    line-height: 38px;
                    margin-bottom: 12px;
                   cursor: pointer;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                li.activeBJ1{
                    background:rgba(244,83,28,1);
                    color: #ffffff;
                    border: 0;
                }

            }

        }
        .center-box3{
            width: 100%;
            padding-bottom:58px;
            /*overflow: hidden;*/
            div{
                width: 100%;
                span{
                        width: 14px;
                        display: inline-block;
                        height:14px;
                        margin-right: 8px;
                        background:rgba(109,109,109,1);
                    }
                p{
                        display: inline-block;
                        height:20px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                        color:rgba(109,109,109,1);
                        line-height:0px;
                    }

            }
            ul{
                width: 100%;
                margin-top: 31px;
                li{
                    width: 166px;
                    height: 38px;
                    background:rgba(255,255,255,1);
                    border-radius: 5px ;
                    margin-right:9px;
                    /*float: left;*/
                    font-size:16px;
                    display: inline-block;
                    border:1px solid #B1B1B0;
                    color: #B1B1B0;
                    text-align: center;
                    line-height: 38px;
                    margin-bottom: 12px;
                    cursor: pointer;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                li.activeBJ2{
                    background:rgba(244,83,28,1);
                    color: #ffffff;
                    border: 0;
                }

            }

        }
        .center-box4{
            width: 100%;
            padding-bottom:58px;
            /*overflow: hidden;*/
          div{
                width: 100%;
                span{
                        width: 14px;
                        display: inline-block;
                        height:14px;
                        margin-right: 8px;
                        background:rgba(109,109,109,1);
                    }
                p{
                        display: inline-block;
                        height:20px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                        color:rgba(109,109,109,1);
                        line-height:0px;
                    }

            }
            ul{
                width: 100%;
                margin-top: 31px;
                li{
                    width: 166px;
                    height: 38px;
                    background:rgba(255,255,255,1);
                    border-radius: 5px ;
                    margin-right:9px;
                    /*float: left;*/
                    font-size:16px;
                   display: inline-block;
                    border:1px solid #B1B1B0;
                    color: #B1B1B0;
                    text-align: center;
                    line-height: 38px;
                    margin-bottom: 12px;
                    cursor: pointer;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                li.activeBJ3{
                    background:rgba(244,83,28,1);
                    color: #ffffff;
                    border: 0;
                }

            }

        }
        .center-box5{
            width: 100%;
            padding-bottom:58px;
            /*overflow: hidden;*/
            div{
                width: 100%;
                span{
                        width: 14px;
                        display: inline-block;
                        height:14px;
                        margin-right: 8px;
                        background:rgba(109,109,109,1);
                    }
                p{
                        display: inline-block;
                        height:20px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                        color:rgba(109,109,109,1);
                        line-height:0px;
                    }

            }
            ul{
                width: 100%;
                margin-top: 31px;


                li{
                    width: 166px;
                    height: 38px;
                    background:rgba(255,255,255,1);
                    border-radius: 5px ;
                    margin-right:9px;
                    /*float: left;*/
                    display: inline-block;
                    font-size:16px;
                    border:1px solid #B1B1B0;
                    color: #B1B1B0;
                    text-align: center;
                    line-height: 38px;
                    margin-bottom: 12px;
                    cursor: pointer;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                li.activeBJ4{
                    background:rgba(244,83,28,1);
                    color: #ffffff;
                    border: 0;
                }

            }

        }
      .center-box6{
        width: 100%;
        padding-bottom:58px;
        /*overflow: hidden;*/
        div{
          width: 100%;
          span{
            width: 14px;
            display: inline-block;
            height:14px;
            margin-right: 8px;
            background:rgba(109,109,109,1);
          }
          p{
            display: inline-block;
            height:20px;
            font-size:20px;
            font-family:MicrosoftYaHei;
            color:rgba(109,109,109,1);
            line-height:0px;
          }

        }
        ul{
          width: 100%;
          margin-top: 31px;

          li{
            width: 166px;
            height: 38px;
            background:rgba(255,255,255,1);
            border-radius: 5px ;
            margin-right:9px;
            /*float: left;*/
            font-size:16px;
            display: inline-block;
            border:1px solid #B1B1B0;
            color: #B1B1B0;
            text-align: center;
            line-height: 38px;
            margin-bottom: 12px;
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          li.activeBJ5{
            background:rgba(244,83,28,1);
            color: #ffffff;
            border: 0;
          }

        }

      }
        .foot{
            width: 100%;
            border-top:1px solid rgba(191,191,191,1);
            height: 183px;
             position: relative;
            span{
                display: inline-block;
                height:18px;
                font-size:24px;
                font-family:MicrosoftYaHei-Bold;
                color:rgba(244,83,28,1);
                line-height:18px;
                margin-top: 42px;



            }
            div{
              position: relative;
              display: inline-block;
              height:18px;
              font-size:16px;
              font-family:MicrosoftYaHei-Bold;
              color:#cccccc;
              line-height:18px;
              margin: 42px 0 0 20px;
              position: relative;
              span{
                display: block;
                width: 100%;
                height: 1px;
                background: #cccccc;
                position: absolute;
                top:-35px;
                left: 0;
              }
            }
            p{
                height:17px;
                font-size:16px;
                font-family:MicrosoftYaHei;
                color:rgba(70,70,70,1);
                line-height:17px;
                margin-top:9px;
            }
            button{
                display: block;
                border: 0;
                background: none;
                width:169px;
                height:44px;
                background:rgba(177,177,176,1);
                border-radius: 10px ;
                color:rgba(255,255,255,1);
                font-size:22px;
                right: 30px;
                bottom:50px;
                position: absolute;
                cursor: pointer;
                .nthActive{
                  background: #f4531c;
                }
            }

        }
    }
}


</style>
