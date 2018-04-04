<template>

  <div id="box" ref="box">
  <!-- 一级分类 -->
      <div style="animation-duration:.6s;"  class="animated fadeInDown container" ref="mycontainer">
        <h3 class="classify_title">{{titleH}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype(index,item.a,item)"
                    v-for="(item,index) in householddata"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i0==index}">{{item.b}}</a>
                </li>
            </ul>
      </div>
         <div style="animation-duration:.6s;" class="animated rotateInDownRight container"  ref="mycontainer" v-if="childrenType1!=''">
          <h3 class="classify_title">{{title[0]}}</h3>
              <ul class="mui-table-view">
                  <li class="mui-table-view-cell"
                      @click="selectortype1(index,item.a,item,$event)"
                      v-for="(item,index) in childrenType1"
                      :key="index">
                    <a href="javascript:;" :class="{selector:i1==index}">{{item.b}}</a>
                  </li>
              </ul>
        </div>
    <transition name="fade">
 <div class="container" ref="mycontainer" v-if="childrenType2!=''">
        <h3 class="classify_title">{{title[1]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype2(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType2"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i2==index}">{{item.b}}</a>
                </li>
            </ul>
      </div>
    </transition>
    <transition name="fade">
 <div class="container" ref="mycontainer" v-if="childrenType3!=''">
        <h3 class="classify_title">{{title[2]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype3(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType3"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i3==index}">{{item.b}}</a>
                </li>
            </ul>
      </div>
    </transition>
    <transition name="fade">
 <div class="container" ref="mycontainer" v-if="childrenType4!=''">
        <h3 class="classify_title">{{title[3]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype4(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType4"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i4==index}">{{item.b}}</a>
                </li>
            </ul>
      </div>    </transition>    <transition name="fade">
      <div class="container" ref="mycontainer" v-if="childrenType5!=''">
        <h3 class="classify_title">{{title[4]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype5(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType5"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i5==index}">{{item.b}}</a>
                </li>
            </ul>
      </div></transition>
    <transition name="fade">
      <div class="container" ref="mycontainer" v-if="childrenType6!=''">
        <h3 class="classify_title">{{title[5]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype6(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType6"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i6==index}">{{item.b}}</a>
                </li>
            </ul>
      </div></transition>
    <transition name="fade">
      <div class="container" ref="mycontainer" v-if="childrenType7!=''">
        <h3 class="classify_title">{{title[6]}}</h3>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"
                    @click="selectortype7(index,item.a,item,$event)"
                    v-for="(item,index) in childrenType7"
                    :key="index">
                  <a href="javascript:;" :class="{'selector':i7==index}">{{item.b}}</a>
                </li>
            </ul>
      </div>
    </transition>

  <!--
    需求：点击一级分类的某一个选项的时候，下面会接着显示二级分类，样式和结构都是一样的，一直循环下去，
    一直到json数据里面有d并且不为空的时候，就是最后的子节点，再显示高空费和价格配件表
   -->
<!--显示tags-->

    <transition name="fade">
      <tags v-if="isKongtiao&&flagIstarges" :tagsList="tagsList"></tags>
    </transition>
<!--显示tags   end-->

    <!--高空费-->
    <div class="container" v-if="highAltitude">
      <h3 class="classify_title price_title">高空费</h3>
      <ul class="mui-table-view content_view">
        <li class="small_box">
          <div class="title">
            <p>楼层段</p>
            <p>价格</p>
          </div>
        </li>
        <li class="small_box">
          <ul>

            <li class="fittings_list heightKong" v-for="item in highAltitude">
              <div class="center altitude">
                {{item.floorStart}}~{{item.floorEnd}}
                <!--<p>微动开关</p>-->
              </div>

              <div class="right altitude">
                  {{item.price}}
              </div>

            </li>

          </ul>
        </li>
      </ul>
    </div>
  <!-- 服务介绍 -->
            <div ref="saverBox" style="animation-duration:.6s;" class="animated rotateInDownRight container" v-if="dataInfo">
              <!--<h3 class="classify_title price_title">配件价格表</h3>-->
              <div class="box" v-if="dataInfo.imageUrl!==''||dataInfo.imageUrl">
                <img :src="dataInfo.imageUrl" alt="">
              </div>

              <div class="server_describe" v-html="dataInfo.content">

               <!--  <p class="serve_scope">服务范围：<span>深圳</span></p>
                <h4 class="flow_path"> 维修流程：</h4>
                <span>
                  这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，这里是文字介绍，
                </span> -->

              </div>

            </div>
    <div class="container" v-show="isKongtiao" v-if="$route.params.id!='001'&&dataPriceList&&dataPriceList.length>0&&dataPriceList[0].serviceMountings.length!==0">
      <h3 class="classify_title price_title">配件价格表</h3>
      <!--<p class="describe">一口价：含一般配件，特殊配件需另外加收配件费</p>-->
      <ul class="mui-table-view content_view kongtiao">
        <li class="small_box">
          <div class="title">
                <p>维修等级</p>
                <p>配件</p>
                <p>单价</p>
          </div>
        </li>
        <li class="small_box" v-for="(item,index) in dataPriceList" :key="index">
          <ul>
            <li class="fittings_list">
              <div class="left medium">
                <div>
                  {{item.serviceInfo.name}} <br>
                  <del>({{item.serviceInfo.price2}}元)</del>
                  <p>(折扣价/{{item.serviceInfo.price2DiscountFee}}元)</p>
                </div>
              </div>
              <table border="0" class="medium_table">
                <tr v-for="(item,index) in item.serviceMountings" :key="index">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}元</td>
                </tr>
              </table>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--<div class="service_totalCredit_amount" v-if="(isKongtiao||isAdd)&&sum&&dataPriceList[0].serviceInfo.isSecondPayment!=='1'">已优惠 ￥{{amount}}</div>-->
  <div class="footer" v-if="(isKongtiao||isAdd)&&sum">
    <div class="service_totalCredit_amounttwo" v-if="(isKongtiao||isAdd)&&sum&&dataPriceList[0].serviceInfo.isSecondPayment!=='1'">原价: <span style="text-decoration: line-through">￥{{price2Original}}</span></div>
    <span class="pier">
       {{pirText}}
    </span>
    ￥{{sum}}
    <a class="accounts_btn" href="javascript:;" @click="add(tagsList)">加入服务</a>
  </div>
</div>
</template>
<script>
  import { MessageBox } from 'mint-ui';
  import {setCookie,getCookie} from "@/js/cookie"
  import {Toast} from "mint-ui"
  import { Indicator } from 'mint-ui';
  import {getSession,setSession,removerStorage,getLocalStorage,setLocalStorage} from "@/js/session"
  import {priceCount} from "@/js/priceCountFun"
  import tags from "./tags";
  import {thFn,selectorFun} from "./js/selector"

  export default{
    components:{
      tags
    },
        data(){
            return{
              pirText:"",
              amount:"",
              price2Original:"",
              priceText:this.$store.state.priceText,
              tagsList:[],
                isAdd:false,
                flagIstarges:false,
                i0:"-1",
                title:[],
              highAltitude:'',//高空费；
              isHeight:false,
                  //选中的一级分类
              childrenStyleTitle:"",
              styleTypeList:'',
              childrenType1:'',
              childrenType2:'',
              childrenType3:'',
              childrenType4:'',
              childrenType5:'',
              childrenType6:'',
              childrenType7:'',
              childrenType8:'',
              childrenType9:'',
              childrenType10:'',
              childrenType11:'',
              childrenType12:'',
              dataInfo:"",
              sum:0,
              isKongtiao:"",
              // ind:"-1",
              titleH:"",            //一级分类标题
              isPriceList:false,    //空调价格表
              querstion:"-1",       //问题类型显示
              introduce:false,      //服务及价格显示隐藏
              householddata:[],     //一及分类数据列表
              dataPriceList:[],
              jsObjData:'',         //结算后最后一个对象
              faterKey:'',
              sendId:''
            }

        },

        methods:{
          isChildrenType(index){
            for(let i=index;i<20;i++){
              this.$data["childrenType"+i]="";
            }
          },

          selectortype(index,id,key){
            selectorFun.selectorType.call(this,index,id,key);
            this.flagIstarges=false;
          },
          selectortype1(index,id,key){
            this.i1=index;
                  this.flagIstarges=false;
                  this.i2="-1";
                  this.isChildrenType(2);
                  this.isKongtiao=false;
                  this.isNodes(id,key,2)
          },
          selectortype2(index,id,key){
                  this.flagIstarges=false;
                  this.i2=index;
                  this.i3="-1";
                  this.isChildrenType(3);
                  this.isKongtiao=false;
                  this.isNodes(id,key,3)
          },
          selectortype3(index,id,key,eve){

                  this.flagIstarges=false;
                  this.i3=index;
                  this.i4="-1";
                  this.isChildrenType(4);
                  this.isKongtiao=false;
                  this.isNodes(id,key,4)
          },

          selectortype4(index,id,key){
                  this.i4=index;
                  this.i5="-1";
                  this.flagIstarges=false;
                  this.isChildrenType(5);
                  this.isKongtiao=false;
                  this.isNodes(id,key,5)
          },

          selectortype5(index,id,key){
                   this.i5=index;
                   this.i6="-1";
                   this.flagIstarges=false;
                   this.isKongtiao=false;
                   this.isChildrenType(6);
                   this.isNodes(id,key,6)
          },

          selectortype6(index,id,key){
                   this.i6=index;
                   this.i7="-1";
                   this.flagIstarges=false;
                   this.isKongtiao=false;
                   this.isChildrenType(7);
                   this.isNodes(id,key,7)
          },
          selectortype7(index,id,key){
                  this.i7=index;
                  this.i8="-1";
                  this.flagIstarges=false;
                  this.isKongtiao=false;
                  this.isChildrenType(8);
                  this.isNodes(id,key,8)
          },
//          selectortype(index,id,key){
//            if()
//            {
//              this.i5=index;
//              this.i6="-1";
//              this.flagIstarges=false;
//              this.isKongtiao=false;
//              this.isChildrenType(6);
//              this.isNodes(id,key,6);
//             eval("this.selectortype"+index+"(index,id,key[index])")
//            }
//
//          }
          add(d){
            this.$store.commit("changeAddServerPath",this.$route.path);
            if(this.flagIstarges){
              let flag=false,i;
              for(i=0;i<d.length;i++){
                if(d[i].selector){
                  flag=true;
                  break;
                }
              }
              if(!flag){
                return Toast("请选择原因")
              }
            }
            if(!this.sendId){
              return;
            }
          if(getLocalStorage("fullName")!=""){
            if(getLocalStorage("fullName")[0].farterId!==this.$route.params.id){
              removerStorage("fullName");  //如果发现一级分类的id和存储的id 不一致，就清除；
              removerStorage("server");
            }
          }
            removerStorage("title");
            setLocalStorage("title",this.titleH);
            this.dataPriceList[0].serviceInfo.farterId=this.$route.params.id;  //一级分类id
            this.dataPriceList.forEach((e,i)=>{     //设置size个数
              e.serviceInfo.size=1;
            });
            if(this.$store.state.paths==="o"){
              removerStorage("fullName");
              this.$store.commit("changeUserInfoDiscountId","");
              this.$store.commit("changeIsSuperposition",1);
              this.$store.commit("changeDiscountFacevalue",0);
              this.$store.commit("changeCouponText","请选择优惠券");
            }
            this.$store.commit("changePaths","o");
            let tagsNameArr=[];
            this.tagsList.forEach(v=>{
              if(v.selector){
                tagsNameArr.push(v.name)
              }
            });

            let token=getCookie();
               // changLoginPathMessage=`/affirmorder?labelId=${this.sendId}&tagsNameArr=${tagsNameArr}&farterId=${this.$route.params.id}`,
                // faterId=this.dataPriceList[0].serviceInfo;
                // faterId.tagsName=tagsNameArr;
                // setLocalStorage("fullName",faterId);
                // this.$store.commit("changeLoginPath","/affirmorder");
                // this.$store.commit("changeLoginPath",changLoginPathMessage);
//      重新计算折扣后价格； 新版本  start
             let areaId=getSession()[0].id,
                  changLoginPathMessage=`/affirmorder?labelId=${this.sendId}&tagsNameArr=${tagsNameArr}&farterId=${this.$route.params.id}`;
                  Indicator.open({spinnerType: 'fading-circle'});
                   this.$store.commit("changeLoginPath",changLoginPathMessage);
             if(token){
                 this.$http.get(`${this.$common.apidomain}/order/joinService?areaId=${areaId}&labelId=${this.sendId}&token=${token}`).then(res=>{
                     let data=res.data;
                     Indicator.close();
                     if(data.code==="0000"){
                       let faterId=data.result[0].serviceInfo;
                       faterId.tagsName=tagsNameArr;
                       faterId.size=1;
                       faterId.farterId=this.$route.params.id;  //一级分类id
                       setLocalStorage("fullName",faterId);    //设置选中的服务
                       this.$store.state.websiteBusiness?this.$router.push({path:this.$store.state.websiteBusiness}):this.$router.push({path:'/affirmorder'});
                     }else{
                       this.$Toast(data.error);
                     }
                 });
             }else{
               Indicator.close();
               this.$store.commit("changeLoginPath",changLoginPathMessage);
               setTimeout(()=>{
                 this.$router.push({path:"/login"});
               },500)
             }
   //   重新计算折扣后价格  end 暂时隐藏
//             if(token){
//               if(this.$store.state.websiteBusiness){
//                 this.$router.push({path:this.$store.state.websiteBusiness})
//               }else{
//                 this.$router.push({path:'/affirmorder'})  //结算路由跳转
//               }
//             }else{
//           苹果-iPhone5S-后壳问题-边框受损-金色
//               this.$router.push({path:"/login"});
//             }

          },
      getData(id){
            this.sendId=id;
            let areaId=getSession()[0].id,
                url = `${common.apidomain}/articleinfo/findlistserviceinfo?labelId=${id}&areaId=${areaId}&token=${getCookie()?getCookie():''}`;
            this.$http.get(url).then(res=>{
            Indicator.close();
            let data=res.data.result;
            if(res.data.code==="0000"&&data){
                this.dataPriceList=data;
              this.price2Original=data[0].serviceInfo.price2;

            }else{
                this.isKongtiao=false;
                this.sum=0;
                return Toast("该服务已售罄")
              }
            let priceStr=(data[0].serviceInfo.price2-data[0].serviceInfo.price2DiscountFee).toString();
            if(priceStr.indexOf(".")!==-1){
                this.amount=priceStr.substring(0,priceStr.indexOf(".")+3);
              }else{
                this.amount=priceStr;
              }
              if(!priceStr){this.amount=0}
              this.tagsList=[];
            if(data[0].serviceInfo.tags){
              let tas=data[0].serviceInfo.tags.split(",");
              tas.forEach((v)=>{
                let obj={};
                obj.name=v;
                obj.selector=false;
                this.tagsList.push(obj);
              });
            }
              this.flagIstarges=false;
              this.tagsList.forEach(v=>{
                if(v.name){
                  this.flagIstarges=true;
                }
              });
              if(!data)return;
//              价格计算 start
              priceCount(this);
              });
          //价格
      },
          getOpen(id){
            Indicator.open('加载中');
            let urL=common.apidomain+"/articleinfo/findinfobyflabel?id="+id;
            this.$http.get(urL).then(res=>{
              Indicator.close();
              let data=res.data.result;
              if(res.data.code==="0000"&&data){
                this.dataInfo=data;
              }else{
                this.dataInfo="";
              }
            });
          },
          isNodes(id,key,index){
            if(key.d&&key.d!=""){
              this.getData(id);
              if(!this.dataPriceList||this.dataPriceList.length===0){
                this.isKongtiao=true;
              }else{
                this.isKongtiao=true;
              }
              this.jsObjData=key;
              this.isAddFun(key);
              return;
            }
            if( key==undefined || key=="" || key.d || key.beans==""){
              this.isKongtiao=false;
              return  Toast("暂未开通该服务");
            }
            this.$data["childrenType"+index]=key.beans;
            this.title.push(key.c)
          },
          isAddFun(key){
            this.isAdd=false;
            if(key.d==='0')this.isAdd=true;
          },
        },
        created() {
          for(let i=1;i<30;i++){
            this.$data["i"+i]="-1";
          }
          if(getSession().length<=0){
            this.$commonJs.getPosition.call(this);
          }
          thFn(this);
          //数据请求
          Indicator.open('加载中');
          let id=this.$route.params.id;
          let url=common.apidomain+'/articleinfo/findlabelbusinessbyflabel?id='+id;
          this.$http.get(url).then(res=>{
            let data=res.data.result;
            document.title=data.b;
            Indicator.close();
            this.$store.commit('increment',data.b);   //头部导航Title
            this.titleH=data.c;  //1级类标题
            this.householddata=data.beans;//一级分类
//            按照id 分类展开 分类列表 start ；
            let id=false;
             const promise =(data)=>{
               return new Promise( (resolve, reject) =>{
                   resolve(data) // pending ——> resolved 参数将传递给对应的回调方法
               });
             };
            const exp =(res)=>{
              return !res.beans||res.a.length===id.length?false:res.beans;
            }
            const forData=(res,subIndex,selectorIndex="")=>{
                if(id.length<=3)return;                       //判断id 的length 是否小于等于3  如果小于等于3 则停止执行；
                for(let i=0;i<res.length;i++){
                  if(res[i].a.indexOf(id.substring(0,subIndex))!==-1){
                    let selectorFun=`selectortype${selectorIndex}`;
                    this[selectorFun](i,res[i].a,res[i]);
                    return exp(res[i])
                  }
                }
            };
            if(id){
                   promise(data.beans).then(res=>{
                  if(res)return forData(res,6)
                }).then(res=>{
                  if(res)return forData(res,9,1)
                }).then(res=>{
                  if(res)return forData(res,12,2)
                }).then(res=>{
                  if(res)return forData(res,15,3)
                }).then(res=>{
                  if(res)return forData(res,18,4)
                }).then(res=>{
                  if(res) return forData(res,21,5)
                }).then(res=>{
                  if(res)return forData(res,24,6)
                }).then(res=>{
                  if(res)return forData(res,27,7)
                })
            }


//            if(id&&false){
//
//              data.beans.forEach((v,i)=>{
//                if(v.a.indexOf(id.substring(0,6))!==-1){
//                  this.selectortype(i,v.a,v);
//                  if(! v.beans||v.a.length===id.length)return;
//                  v.beans.forEach((v,i)=>{
//                    if(v.a.indexOf(id.substring(0,9))!==-1){
//                      this.selectortype1(i,v.a,v);
//                      if(! v.beans||v.a.length===id.length)return;
//                      v.beans.forEach((v,i)=>{
//                        if(v.a.indexOf(id.substring(0,12))!==-1){
//                          this.selectortype2(i,v.a,v);
//                          if(! v.beans||v.a.length===id.length)return;
//                          v.beans.forEach((v,i)=>{
//                            this.selectortype3(i,v.a,v);
//                            if(! v.beans||v.a.length===id.length)return;
//                            if(v.a.indexOf(id.substring(0,15))!==-1){
//                              v.beans.forEach((v,i)=>{
//                                this.selectortype4(i,v.a,v);
//                                if(! v.beans||v.a.length===id.length)return;
//                                if(v.a.indexOf(id.substring(0,18))!==-1){
//                                  v.beans.forEach((v,i)=>{
//                                    if(v.a.indexOf(id.substring(0,21))!==-1){
//                                      this.selectortype5(i,v.a,v);
//                                      if(! v.beans||v.a.length===id.length)return;
//                                      v.beans.forEach((v,i)=>{
//                                        if(v.a.indexOf(id.substring(0,24))!==-1){
//                                          this.selectortype6(i,v.a,v);
//                                          if(! v.beans||v.a.length===id.length)return;
//                                          v.beans.forEach((v,i)=>{
//                                            this.selectortype7(i,v.a,v);
//                                          })
//                                        }
//                                      })
//                                    }
//                                  })
//                                }
//                              })
//                            }
//                          })
//                        }
//                      })
//                    }
//                  })
//                }
//              })
//            }
//按照id 分类展开 分类列表 end
          });
        }
    }
</script>
<style scoped lang="less">
  .service_totalCredit_amount{
    position:fixed;
    left:32/50rem;
    bottom:.5rem;
    z-index: 999;
    font-family: PingFangSC-Regular;
    font-size:24/50rem;
    color:#9B9B9B;
    font-weight: normal;
  }
  .service_totalCredit_amounttwo{
    position:fixed;
    right:9.6rem;
    z-index: 999;
    font-family: PingFangSC-Regular;
    font-size:26/50rem;
    color:#9B9B9B;
    font-weight: normal;
  }
 .alert{
    width:560/50rem;
    height:500/50rem;
    background:#fff;
    position:fixed;
    top:50%;
    left:50%;
    border-radius: 4px;
    transform:translate(-50%,-50%);
    >.alert_box{
      >p{
        width:100%;

        text-align: right;
        float:right;
      }
      div{
        input{
          width:60%;
          float:right;
          padding:0;
          height:60/50rem;
          margin:0;
        }
      }
    }
  }

.container{
  background: #fff;
  padding:10px;
  padding-top: 0;
  margin:0 4%;
  margin-top:2%;
  .mui-table-view{
      overflow: hidden;
    &::after{
      width:0;
      height:0;
    }
    &::before{
      width:0;
      height:0;
    }
    >.mui-table-view-cell{
      width:50%;
      border:none;
      float:left;
      padding:5px;
      padding-left:0;
      >a{
        display: block;
        margin:8/50rem;
        font-size: 28/50rem;
        color: #FFFFFF;

        background: #FBFBFB;
        color: #4A4A4A;
        border-radius: 5px;
        text-align: center;
        margin-left:0;
      }
      >.selector{
        background:rgba(235,83,18,1);
      }
      &::after{
        width:0;
        background-color:none;
      }
    }
  }
  >.price_title{
    text-align: center;
    border:none;
    padding-top:.9rem;
  }
  >.describe{
    height:1rem;
    width:100%;
    line-height: 1rem;
    font-family:PingFangSC-Regular;
    font-size: 22/50rem;
    margin-bottom: .3rem;
    color: #EB5312;
  }
}
.classify_title{
  border-bottom:1px solid #F4AA89;
  padding:20/50rem 0px;
  font-family: PingFangSC-Regular;
  font-size: 28/50rem;
  font-weight: normal;
  color: #4A4A4A;
  letter-spacing: 0;
}
.content_view{
  border:1px solid #E0E6ED;
}
 .mui-table-view{

  >.small_box{
  display: flex;
  width:100%;
    >ul{
      width:100%;
      font-family: PingFangSC-Regular;
      font-size: 28/50rem;
      color: #4A4A4A;
      letter-spacing: 0;
      .fittings_list{
        display: flex;
        /*border-bottom:1px solid #E0E6ED;*/
        >div{
          flex:1;
          border-right:1px solid #E0E6ED;
          border-bottom:1px solid #E0E6ED;
        }
        >.right{
          border-right:none;
        }
        >.center,.right{
          >p{
            color: #4A4A4A;
            font-family: PingFangSC-Regular;
            font-size: 28/50rem;
            height:60/50rem;
            line-height:60/50rem;
            text-align: center;
            background: #FBFBFB;
          }
          >p:last-of-type{
            background:#fff;
          }
        }
        >.left{
          padding-top:.5rem;
          text-align: center;
          background:#fff;
        }
        .medium{
          padding-top:0;
          display: flex;
          justify-content:center;
          align-items:Center;


          >div{
            /*position:relative;*/
            /*top:50%;*/
            /*-webkit-transform:translateY(-50%);*/
            /*left:0;*/
            >p{
              font-family: PingFangSC-Regular;
              font-size: 22/50rem;
              color: #EB5312;
              letter-spacing: 0;
            }
            del{
              font-size: 22/50rem;
            }
          }

        }
        .medium_table{
          width:8.5rem;
          >tr{
            border-bottom:1px solid #E0E6ED;
            td{
              width:50%;
              text-align: center;
              line-height: 60/50rem;
              border-right:1px solid #E0E6ED;
            }
            >td:nth-of-type(even){
              border-right:none;
            }
          }
          >tr:nth-of-type(odd){
            background: #FBFBFB;

          }
          >tr:last-of-type{
            border:none;
          }
        }
      }

      .fittings_list:last-of-type{
        border:none;
        >div{
          border-bottom:none;
        }
      }


    }
    /////////////////
  >.small_left{
    width:84/50rem;
    height:100%;
    font-size:22/50rem;
    text-align:center;
    background:#FEADB3;
    padding-top:.5rem;
    line-height: .6rem;
 }
  >.small_repair{
    border-radius: .3rem 0 0 0 ;
  }
  >.center_repair{
   background: #D8E8E7;
  }
  >.big_repair{
    background: #FFF5B5;
  }
 >.small_right{
      flex:0;
    >.fittings_name,.cost{
      float:left;
      font-family: PingFangSC-Regular;
      font-size: 28/50rem;
      color: #4A4A4A;
      letter-spacing: 0;
      height:60/50rem;
      width:50%;
      background:#FBFBFB;
      line-height:60/50rem;
      text-align: center;
    }
    >.name,.cost_price{
        background:#fff;

    }
 }
    >.title{
      height:60/50rem;
      line-height:60/50rem;
      background: #D8D8D8;
      width:100%;
      display: flex;
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      >p{
        flex:1;
        font-size: 28/50rem;
        color: #4a4a4a;
        text-align:center;
      }
    }
}
}
// 服务介绍
.box{
  width:100%;
  >img{
    display: block;
    width:100%;
    // height:100%;
  }
  // background-image: linear-gradient(90deg, #6256C8 0%, #AC7EE9 100%);

}
.container{
  >.server_describe{
    padding-left:.4rem;
    > .serve_scope{
    padding:.4rem 0;
    font-family: PingFangSC-Regular;
    color: #4A4A4A;
    letter-spacing: 0;
  > span{
    color: #EB5312;;
  }
 }
 >span{
  font-family: PingFangSC-Regular;
  font-size: 24/50rem;
  color: #9B9B9B;
  letter-spacing: 0;
  line-height: 30/50rem;
 }
 >.flow_path{
    font-weight: normal;
    font-family: PingFangSC-Regular;
    font-size: 28/50rem;
    color: #4A4A4A;
    letter-spacing: 0;
 }
  }

}
 // 底部结算
 .footer{
  width:100%;
   position:fixed;
   bottom:0;
   left:0;
  height:98/50rem;
  text-align: right;
  line-height: 98/50rem;
  background: #FFFFFF;
  font-family: PingFangSC-Medium;
  font-size: 32/50rem;
  color: #EB5312;
  font-weight: 600;
  letter-spacing: 0;
  >.accounts_btn{
    height:100%;
    margin-left:.6rem;
    display: inline-block;
    background: #EB5312;
    width:200/50rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 32/50rem;
    color: #FFFFFF;
    letter-spacing: 0;
  }
   .pier{
     font-size: 28/50rem;
     color: #4A4A4A;
   }

 }
#box{
  margin-bottom:200/50rem;;
  .altitude{
    border:none;
  }
  .selector{
    color:#fff;
  }
  .kongtiao{
    .fittings_list{
        border-bottom:1px solid rgba(0,0,0,.1);
      }
      .fittings_list:last-of-type{
        // border-bottom:none;
      }
      border-bottom:none;
  }
  .heightKong:nth-of-type(even){
    /*>.altitude{*/
      background:rgba(0,0,0,0.1);
  }
  .heightKong{
    .altitude{
      text-align: center;
    }
  }
}

  &.fade-enter-active, &.fade-leave-active{
  transition: all .1s ease
  }

  &.fade-enter, &.fade-leave-active{
   transform:translateX(100px);
  }

  &.scrollTop-enter-active, &.scrollTop-leave-active{
    transition: all .4s ease;
  }
  &.scrollTop-enter, &.scrollTop-leave-active{
   transform:translateY(8000px);
  }

</style>


