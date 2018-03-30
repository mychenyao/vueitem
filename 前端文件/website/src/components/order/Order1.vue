<template>
  <div class="OrderPage">
  <HeaderTag page="order"></HeaderTag>
      <div class="banner1">
         <div class="banner_content">
          <div class="citydiv">
            <span class="selecity" @click="selecity">{{city}} &or;</span>
          </div>
         </div>
      </div>
  <div class="order_content">
      <div class="order_wrap">
         <div class="service_list">
              <!--<h1>您需要的服务是？</h1>-->
               <ul class="cf" id="cf">
                  <li v-on:click="getFirstLevelData('002')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='002'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/households.png"></div>
                          <div class="two">
                            <h3>家电维修</h3>
                            <p>空调，冰箱，电视,燃气热水器，饮水机等</p>
                          </div>
                      </div>
                  </li>
                  <li v-on:click="getFirstLevelData('003')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='003'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/phones.png" height="86" width="86"></div>
                          <div class="two">
                            <h3>手机维修</h3>
                            <p>手机/电脑维修,电池更换/网络调试等</p>
                          </div>
                      </div>
                  </li>
                  <li v-on:click="getFirstLevelData('004')">
                    <div class="li_wrap cf">
                        <div class="img_left dis" v-bind:style="{display:firstLevelId=='004'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                        <div class="one"><img src="./pict/furnitures.png" height="86" width="86"></div>
                        <div class="two">
                          <h3 >家居维修</h3>
                          <p>门窗家居维修，灯具安装/灯具电路等</p>
                        </div>
                    </div>
                  </li>
                  <li v-on:click="getFirstLevelData('008')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='008'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/bathrooms.png" height="86" width="86"></div>
                          <div class="two">
                            <h3>卫浴洁具</h3>
                            <p>龙头/管件,马桶,浴霸水路管件更换维修等</p>
                          </div>
                      </div>
                  </li>

              </ul>
         </div>
          <div class="repair_content" ref="box1">
               <h1>{{firstLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="firstLevelBeans.length==0">无数据</div> -->
                   <li v-for="(item,index) in firstLevelBeans" v-on:click="getSecondLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:secondLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div>
          </div>
           <div class="repair_content" ref="box2">
               <h1>{{secondLevelTitle?secondLevelTitle:matype}}</h1>
               <div>
                 <ul>
                    <!-- <div v-if="secondLevelBeans.length==0">无数据</div> -->
                    <li v-for="(item,index) in secondLevelBeans" v-on:click="getThreeLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:threeLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                    <li v-show="item.name!=''" v-for="(item,index) in tags" @click="tag(item,index)" :key="index"><div class="img_left dis" v-bind:class="item.selector?'show':'hidden'"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.name}}</span></li>
                 </ul>
               </div>
          </div>
          <div class="repair_content" ref="box3">
               <h1>{{threeLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="threeLevelBeans.length==0">无数据</div> -->
                   <li v-for="(item,index) in threeLevelBeans" v-on:click="getFourLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:fourLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                   <li v-show="item.name!=''" v-for="(item,index) in tags1" @click="tag(item,index)" :key="index"><div class="img_left dis" v-bind:class="item.selector?'show':'hidden'"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.name}}</span></li>
                 </ul>
               </div>
          </div>
          <div class="repair_content" ref="box4">
               <h1>{{fourLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="fourLevelBeans.length==0">无数据</div> -->
                   <li v-for="(item,index) in fourLevelBeans" v-on:click="getFiveLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:fiveLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div>
          </div>
          <div class="repair_content" ref="box5">
               <h1>{{fiveLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="fiveLevelBeans.length==0">无数据</div> -->
                   <li v-for="(item,index) in fiveLevelBeans" v-on:click="getSixLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:sixLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div>
          </div>
          <div class="repair_content" ref="box6">
               <h1>{{sixLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="sixLevelBeans.length==0">无数据</div> -->
                   <li v-for="(item,index) in sixLevelBeans" v-on:click="getSevenLevelData(item.a)" :key="index"><div class="img_left dis" v-bind:style="{display:sevenLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div>
          </div>
          <div class="order_bottom" style="display:block;">
            <!--<h1>{{slogan}}</h1>-->
            <!--<div class="bottom_list" v-html="divstyle">-->
            <!--</div>-->
            <el-dialog
              title="请微信扫描二维码下单"
              :visible.sync="show"
              :modal="false"
              width="30%"
              center>
              <div class="scan_place">
                <div class="price"><p class="span_two">{{pay}}￥{{sum}}</p></div>
                <img :src="codelink" height="188" width="188">
                <p>微信下单,岂止简单</p>
                <p>让您随时关注订单动态</p>
              </div>
            </el-dialog>
            <div class="sure" v-if="sure"  ref="sure">
              <span @click="refer">确定</span>
            </div>

            <!--<div class="scan_place" v-show="show">-->
                <!--<div class="price"><p class="span_one">请微信扫描二维码下单</p><p class="span_two">{{pay}}￥{{sum}}</p></div>-->
                <!--<img :src="codelink" height="188" width="188">-->
                <!--<p>微信下单,岂止简单</p>-->
                <!--<p>让您随时关注订单动态</p>-->
            <!--</div>-->
          </div>
      </div>
  </div>
	<FooterTag></FooterTag>
	<Floating></Floating>
    <el-dialog
      title="请选择城市"
      :visible.sync="dialogVisible"
      :modal="false"
      width="30%"
      :before-close="handleClose"
      >
      <el-radio-group v-model="radio3" size="mini" @change="sele(radio3)">
        <el-radio-button :label=item.name v-for="(item,index) in cityarr" :key="index"></el-radio-button>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'


export default {
  name: 'OrderPage',
  data () {
    return {
      sure:false,
//      显示确认按钮
      show:false,
//      显示二维码
      pay:'',
//      价格前面括号内容
      sum:0,
//      价格
      slogan:'',
//      标语
      divstyle:'',
//      后台获取的HTML内容
      matype:'',
//      显示的标语是家电维修
      tags:[],
//      家电维修的数组
      tags1:[],
      //家电下面还有多选
      qr:{
        areaId:'0101',
        serviceId:'',
        serviceTags:''
      },
//      传后台的对象
      city:"深圳市",
//      默认显示的城市
      dialogVisible:false,
// 控制选择城市的弹窗,
      radio3:'',
//      选择后的城市传值到方法中
      firstLevelId:'',
//     第一次选择之后的id
      secondLevelId:'',
//     第二次选择之后的id
      threeLevelId:'',
//     第三次选择之后的id
      fourLevelId:'',
//     第四次选择之后的id
      fiveLevelId:'',
//     第五次选择之后的id
      sixLevelId:'',
//     第六次选择之后的id
      sevenLevelId:'',
//     第七次选择之后的id
      firstLevelTitle:'',
//     第一次选择之后的title
      secondLevelTitle:'',
//     第二次选择之后的title
      threeLevelTitle:'',
//     第三次选择之后的title
      fourLevelTitle:'',
//     第四次选择之后的title
      fiveLevelTitle:'',
//     第五次选择之后的title
      sixLevelTitle:'',
//     第六次选择之后的title
      sevenLevelTitle:'',
//     第七次选择之后的title
      firstLevelBeans : [],
//     第一次选择之后的数组
      secondLevelBeans:[],
//     第二次选择之后的数组
      threeLevelBeans:[],
//     第三次选择之后的数组
      fourLevelBeans:[],
//     第四次选择之后的数组
      fiveLevelBeans:[],
//     第五次选择之后的数组
      sixLevelBeans:[],
//     第六次选择之后的数组
      sevenLevelBeans:[],
//     第七次选择之后的数组
      cityarr:[],
//      城市数组
      tagid:'',
//      家电维修的id
      codelink:'',
//      二维码图片链接
      clicksone:true,
      clickstwo:true,
      clicksthree:true,
      clicksfour:true,
      clicksfive:true,
      clickssix:true,
      threeshow:false
//      第三次点击判断是否有弹窗,是否显示确认按钮
    }
  },
  created(){

      var _this=this;
//      获取城市
      let cityurl=this.$apidomain+ '/areainfo/findHtmlCityListareaInfo';
      this.$http.get(cityurl).then((r)=>{
//          console.log(r);
          var arr=r.data.result.dataList;
          arr.forEach(function (value) {
            _this.cityarr=value.name;
//            console.log(value.name);
          });
      })
  },
  watch:{
    "qr.serviceTags":function (val,oldval) {
      if(val!=oldval){
        this.show=false;
      }
//      console.log(val);
    }
  },
  methods:{
    handleClose(done) {
//      选择城市弹窗的关闭事件
      done();
    },
    refer(){
//        console.log(document.body.offsetHeight);
//      console.log(this.$refs.sure.offsetTop);
//      this.$refs.sure.scrollTo(0,0);
//      console.log(this.qr);
//      提交到后台的事件
      var _this=this;
      let erurl=_this.$apidomain+"/conversion/createQRcode";
      _this.$http.post(erurl,_this.qr).then((r)=>{
//        console.log(r);
        _this.codelink=r.data.result;
        if(r.data.code=="0000"){
          _this.show=true;
//          _this.sure=true;
        }else{
          alert(r.data.error)
        }
//        console.log(r.data.result);
      }).catch((e)=>{
//          console.log(e);
      })


        var str='';
        for(let i=0;i<_this.tags.length;i++){
          if(_this.tags[i].selector){
            str+=_this.tags[i].name+',';
          }
        }
        str=str.substr(0,str.length-1);
//      console.log(str);
//      后台serviceTage的字段数据

        if(str==''){
          _this.qr.serviceTags="服务";
//        _this.sure=false;
          _this.show=false;
        }else{
          _this.sure=true;
          _this.qr.serviceTags=str;
        }
//      console.log(_this.qr);

        var str3='';
        for(let i=0;i<_this.tags1.length;i++){
          if(_this.tags1[i].selector){
            str3+=_this.tags1[i].name+',';
          }
        }
        str3=str3.substr(0,str3.length-1);

        if(str3==''){
          _this.qr.serviceTags="服务";
//        _this.sure=false;
          _this.show=false;
        }else{
          _this.sure=true;
          _this.qr.serviceTags=str3;
        }

    },
    tag(item,index){
//      家电维修选择是多项选择
      var _this=this;
//      console.log(item);
      item.selector=!item.selector;
//      console.log(this.tags,"1111111");

     if(_this.tags.length>0){
       var str1='';
       for(let i=0;i<_this.tags.length;i++){
         if(_this.tags[i].selector){
           str1+=_this.tags[i].name+',';
         }
       }
       str1=str1.substr(0,str1.length-1);
       if(str1==''){
         this.sure=false;
       }else{
         this.sure=true;
       }
     }else{
       var str2='';
       for(let i=0;i<_this.tags1.length;i++){
         if(_this.tags1[i].selector){
           str2+=_this.tags1[i].name+',';
         }
       }
       str2=str2.substr(0,str2.length-1);
       if(str2==''){
         this.sure=false;
       }else{
         this.sure=true;
       }
     }



//      if(item.selector){
//        _this.sure=true;
//      }else{
//        _this.sure=false;
//      }
//      console.log(item.selector);
    },
    sele(city){
//      选择城市的弹窗绑定数据
//      console.log(city);
      this.city=city;
      var _this=this;
      this.cityarr.forEach(function (val) {
        if(val.name==city){
          _this.qr.areaId=val.id;
//          console.log( _this.qr.areaId);
        }
      })
    },
    selecity(){
//      从后台获取的HTML结构
        this.dialogVisible=true;
    },
    getFirstLevelData:function(parentId){
//      第一次点击选择的服务

//      console.log(1,event.currentTarget.offsetTop);
//      console.log(2,document.documentElement.scrollTop);
      let top= event.currentTarget.offsetTop;
      window.scrollTo(0,top);


      var _this = this;
      this.pay='';
      this.sum=0;
      this.firstLevelId = parentId;
      $.ajax({
       url:"http://app.dingdingkuaixiu.com/articleinfo/findlabelbusinessbyflabel",
       data:{
         id: parentId
       },
       dataType:"json",
       success: function(rs){
         if (rs.code=="0000") {
           if(_this.clicksone){
//             window.scrollTo(0,500);
             _this.clicksone=false;
           };
           _this.sure=false;
           _this.show=false;
           _this.threeshow=false;
           _this.firstLevelTitle = rs.result.c;
           _this.firstLevelBeans = rs.result.beans||[];
           _this.matype='';
           _this.secondLevelId='';
           _this.threeLevelId='';
           _this.fourLevelId='';
           _this.fiveLevelId='';
           _this.sixLevelId='';
           _this.sevenLevelId='';
          _this.secondLevelTitle='';
          _this.threeLevelTitle='';
          _this.fourLevelTitle='';
          _this.fiveLevelTitle='';
          _this.sixLevelTitle='';
          _this.sevenLevelTitle='';
           _this.secondLevelBeans=[];
           _this.threeLevelBeans=[];
           _this.fourLevelBeans=[];
           _this.fiveLevelBeans=[];
           _this.sixLevelBeans=[];
           _this.sevenLevelBeans=[];
           _this.tags=[];
           _this.tags1=[];
           _this.divstyle='';
           _this.matype="";
           _this.slogan="";
         }else{
           alert(rs.error);
         }
       },
       error:function(){
         alert("网络错误")
       }
      })
    },
    getSecondLevelData:function(id){

//      第二次选择的服务
//      let top= event.currentTarget.offsetTop-60;
      let top = this.$refs.box1.offsetTop;
//      console.log(top);
      window.scrollTo(0,top);
      var _this=this;
      if(_this.clickstwo){
//        window.scrollTo(0,700);
        _this.clickstwo=false;
      }
//      window.scrollTo(0,700)
      _this.sure=false;
      _this.show=false;
      for(var x in this.firstLevelBeans){
        if(this.firstLevelBeans[x].a==id){
          this.secondLevelId = this.firstLevelBeans[x].a;
          this.secondLevelTitle = this.firstLevelBeans[x].c;
          this.secondLevelBeans=this.firstLevelBeans[x].beans||[];
          if(!this.firstLevelBeans[x].beans){
//            家电维修和其他的维修不一样,需要判断取值
            _this.sure=false;
            _this.show=false;

            var url=_this.$apidomain+"/articleinfo/findlistserviceinfo?labelId="+id+"&areaId="+_this.qr.areaId;
//            console.log(url);
            _this.$http.get(url).then((r)=>{
               console.log(r,"9999999999999999999999")
              if(r.data.code=="0000"){
                var arr=r.data.result;
//                console.log(arr);
                var str=arr[0].serviceInfo.tags.split(",");
                _this.tags=[];
               if(arr[0].serviceInfo.tags==""){
                 _this.sure=true;
                 _this.qrCode(id);
               }else{
                 str.forEach((v)=>{
                   let obj={};
                   obj.name=v;
                   obj.selector=false;
                   _this.tags.push(obj);
                   if(_this.tags!=""){
                     _this.matype="维修类型";
                   }else{
                     _this.matype="";
                   }
//                console.log(_this.tags,"1111111");
                 });
               }
//              console.log(r.data.result);
              }else{
//                alert(r.data.error+"1111")
              }
            }).catch((e)=>{
//              console.log(e);
            })
          }else{
            _this.tags=[];
          }
          this.threeLevelId='';
          this.fourLevelId='';
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.threeLevelTitle='';
          this.fourLevelTitle='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.threeLevelBeans=[];
          this.fourLevelBeans=[];
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          this.tags=[];
          this.tags1=[];
          this.matype='';

          let divurl=this.$apidomain+'/articleinfo/findinfobyflabel?id='+id;
          this.$http.get(divurl).then((r)=>{
//            console.log(r.data.result.content);
            if(r.data.result.content){
              _this.divstyle=r.data.result.content;
              _this.slogan="根据你的设备问题，给出以下维修方案";
            }else{
              _this.divstyl='';
              _this.slogan='';
            }
          }).catch((e)=>{
//            console.log(e);
          });

          break;
        }
      }
    },
    getThreeLevelData:function(id){
//      第三次选择的服务
      let top = this.$refs.box2.offsetTop;
//      console.log(top);
      window.scrollTo(0,top);
      var _this=this;
      _this.sure=false;
      _this.threeshow=false;
      if(_this.threeshow){
        _this.sure=true;
      }else{
        _this.sure=false;
      }
      for(var x in this.secondLevelBeans){
        if(this.secondLevelBeans[x].a==id){
          this.threeLevelId = this.secondLevelBeans[x].a;
          this.threeLevelTitle =this.secondLevelBeans[x].c;
          this.threeLevelBeans=this.secondLevelBeans[x].beans||[];

          if(!this.secondLevelBeans[x].beans){
//            家电维修和其他的维修不一样,需要判断取值
//            console.log(1111);
            _this.sure=false;
            _this.show=false;
            _this.qrCode(id,"a");
            var url=_this.$apidomain+"/articleinfo/findlistserviceinfo?labelId="+id+"&areaId="+_this.qr.areaId;
//            console.log(url);
            _this.$http.get(url).then((r)=>{
              if(r.data.code=="0000"){
                var arr=r.data.result;
//                console.log(arr);
                var str=arr[0].serviceInfo.tags.split(",");
//                console.log(str,"str");
                _this.tags1=[];
                if(arr[0].serviceInfo.tags==""){
//                  console.log(11166666);
                  _this.sure=true;
                  _this.qrCode(id);
                }else{

                  str.forEach((v)=>{
                    let obj={};
                    obj.name=v;
                    obj.selector=false;
                    _this.tags1.push(obj);
                    if(_this.tags1[0].name!=""){
                      _this.threeLevelTitle="维修类型";
                      _this.threeshow=true;
                    }else{
                      _this.threeLevelTitle="";
                      _this.threeshow=false;
                    }
//                console.log(_this.tags1,"1111111");
                  });
                }

//              console.log(r.data.result);
              }else{
//                alert(r.data.error+"1111")

              }
            }).catch((e)=>{
//              console.log(e);
            })
          }else{
            _this.tags1=[];
          }

//          window.scrollTo(0,900);
          if(_this.clicksthree){
//            window.scrollTo(0,900);
            _this.clicksthree=false;
          }
//          if(!this.secondLevelBeans[x].beans){


//
//          }else{
//            _this.sure=false;
//            _this.show=false;
//          }
          this.fourLevelId='';
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.fourLevelTitle='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.fourLevelBeans=[];
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getFourLevelData:function(id){
//      第四次选择的服务
      let top = this.$refs.box3.offsetTop;
//      console.log(top);
      window.scrollTo(0,top);

      var _this=this;
      _this.sure=false;
      _this.show=false;
      for(var x in this.threeLevelBeans){
        if(this.threeLevelBeans[x].a==id){
          this.fourLevelId = this.threeLevelBeans[x].a;
          this.fourLevelTitle = this.threeLevelBeans[x].c;
          this.fourLevelBeans=this.threeLevelBeans[x].beans||[];
          if(_this.clicksfour){
//            window.scrollTo(0,1100);
            _this.clicksfour=false;
          }

//          window.scrollTo(0,1100);
          if(!this.threeLevelBeans[x].beans){

            this.qrCode(id);
//            _this.sure=true;
          }else{
            _this.sure=false;
            _this.show=false;
          }
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getFiveLevelData:function(id){
//      第五次选择的服务
      let top = this.$refs.box4.offsetTop;
      window.scrollTo(0,top);

      var _this=this;
      _this.sure=false;
      _this.show=false;
      for(var x in this.fourLevelBeans){
        if(this.fourLevelBeans[x].a==id){
          if(_this.clicksfive){
//            window.scrollTo(0,1300);
            _this.clicksfive=false;
          }

//          window.scrollTo(0,1300);
          this.fiveLevelId = this.fourLevelBeans[x].a;
          this.fiveLevelTitle = this.fourLevelBeans[x].c;
          this.fiveLevelBeans=this.fourLevelBeans[x].beans||[];
          if(!this.fourLevelBeans[x].beans){
            this.qrCode(id);
            _this.sure=true;
          }else{
            _this.sure=false;
            _this.show=false;
          }
//          console.log(this.fourLevelBeans[x].beans);
          this.sixLevelId='';
          this.sevenLevelId='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getSixLevelData:function(id){
//      第六次选择的服务
      let top = this.$refs.box5.offsetTop;
      window.scrollTo(0,top);
      var _this=this;
      _this.sure=false;
      _this.show=false;
      this.qrCode(id);
      this.sure=true;
      this.show=false;
      for(var x in this.fiveLevelBeans){
        if(this.fiveLevelBeans[x].a==id){
          if(_this.clickssix){
//            window.scrollTo(0,1500);
            _this.clickssix=false;
          }

          this.sixLevelId = this.fiveLevelBeans[x].a;
          this.sixLevelTitle = this.fiveLevelBeans[x].c;
          this.sixLevelBeans=this.fiveLevelBeans[x].beans||[];
          if(!this.fiveLevelBeans[x].beans){
            this.qrCode(id);
            _this.sure=true;
          }else{
            _this.sure=false;
            _this.show=false;
          }
          this.sevenLevelId='';
          this.sevenLevelTitle='';
          this.sevenLevelBeans=[]
          break;
        }
      }
    },
    getSevenLevelData:function(id){
//      第七次选择的服务
      let top = this.$refs.box6.offsetTop;
      window.scrollTo(0,top);
      this.sevenLevelId = id;
      return;
      for(var x in this.fiveLevelBeans){
        if(this.fiveLevelBeans[x].a==id){
          this.sixLevelId = this.fiveLevelBeans[x].a;
          this.sixLevelTitle = this.fiveLevelBeans[x].c;
          this.sixLevelBeans=this.fiveLevelBeans[x].beans||[];
          break;
        }
      }
    },
    qrCode(id,a){
//      选择到最后一步,向后台请求数据
      var _this=this;
      if(_this.qr.areaId==''){
        alert("请先选择城市")
      }
      let url=this.$apidomain+"/articleinfo/findlistserviceinfo?labelId="+id+"&areaId="+_this.qr.areaId;
      this.$http.get(url).then((r)=>{

//        console.log(r);

        if(r.data.code=="0000"){
          _this.threeshow=true;
          if(a=="a"){

          }else{
            _this.sure=true;
          }
          let list=r.data.result[0].serviceInfo;
          _this.qr.serviceId=list.id;
//          console.log(list);
//        console.log(list.price1);
          if(list.isSecondPayment=="0"){
            _this.pay='(应付款)';
            _this.sum=list.price1+list.price2DiscountFee;
          }else{
            _this.pay='(上门检测)';
            _this.sum=list.price1;
          }
        }else{
          alert("该服务已售罄");
//          _this.threeshow=false;
//          _this.sure=false;

        }


//        console.log(list);
      }).catch((e)=>{
//        console.log(e);
      });



//      console.log(url);
//      console.log(divurl);
    }
  },
  mounted: function() {

    document.title="叮叮快修-全品类家庭维修服务_家电家居维修_维修手机_维修电脑_维修空调"
  },
  components: {
    HeaderTag, FooterTag, Floating
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .citydiv{
    width:1200px;
    height: 64px;
    margin: 0 auto;
    position: relative;
  }
  .sure{
    width:100%;
  }
  .sure span{
    display: block;
    border-radius: 3px;
    margin-left: 90%;
    margin-bottom: 30px;
    width:100px;
    height:50px;
    background: green;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .show{
    display: block !important;
  }
  .hidden{
    display: none !important;
  }
  .selecity{
    position: absolute;
    top: 14px;
    right:0;
    font-size: 14px;
    text-align: center;
    width:100px;
    height:30px;
    line-height: 30px;
    cursor:pointer;
  }
.OrderPage .banner1{
  position: relative;
  width: 100%;
  min-width: 1200px;
  height: 440px;
  margin: 0 auto;}
.OrderPage .banner1 .banner_content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e0e0e0;
    background-image: url(./pict/bannerNew.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}

.OrderPage{
  background-color: #fafafa;
}
.OrderPage .order_content{
  width: 1200px;
  margin: 0 auto;
}
.OrderPage .order_content .service_list ul li{
  float: left;
  width: 281px;
  height: 142px;
  border: 1px solid #dddddd;
  margin-bottom: 23px;
  margin-right: 15px;
  margin-top: 22px;
}
.OrderPage .order_content .service_list ul li .li_wrap{
  border-bottom: 1px solid #ea5514;
  height: 141px;
 /* background: url(./pict/checked.png) no-repeat;*/
}

.OrderPage .order_content .service_list ul li .one,.OrderPage .order_content .service_list ul li .two{float: left;}
.OrderPage .order_content .service_list ul li{
  position: relative;
  cursor: pointer;
}
.OrderPage .order_content .service_list ul li .two{
  width: 140px;
  position: absolute;
  right: 9px;
  top: 42px;
}
.OrderPage .order_content .service_list ul li .one{
  margin-left: 18px;
  margin-top: 32px;
}
.OrderPage .order_content  .dis{
display: none;
position: absolute;
left: 0;top:0;
}
.OrderPage .order_content .service_list ul li h3{
  font-size: 20px;
  color: #333333;
  font-weight: normal;
}
.OrderPage .order_content .service_list ul li p{
  font-size: 14px;
  color: #666666;
}
.OrderPage .order_content .order_wrap h1{
  font-size: 24px;
  color: #333333;
  font-weight: normal;
}
.OrderPage .order_content .order_wrap .repair_content ul li{
  display: inline-block;
  overflow:hidden;
  width: 219px;
  height: 44px;
  margin-right: 14px;
  border: 1px solid  #ddd;
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 44px;
}
.OrderPage .order_content .order_wrap .repair_content ul{margin-bottom: 22px;margin-top: 21px;}
.OrderPage .order_content .order_wrap .repair_content ul li span{
  font-size: 16px;
  color: #333333;
}
.OrderPage .order_content .order_wrap .order_bottom .bottom_list{
  margin-top: 51px;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list td{
  width: 400px;
  text-align: center;
  padding-bottom: 8px;
  height: 33px;
  line-height: 33px;
  font-size: 16px;
  color: #333333;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list .td_spe{
  border-bottom: 1px solid #dddddd;

}
.OrderPage .order_content .order_wrap .order_bottom .bottom_list .td_spe td{
   color: #999999 !important;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list tr input{
  width: 1000px;
  height: 48px;
  border:1px solid #ea5413;
}
.OrderPage .order_content .order_wrap .order_bottom .price .span_one{


  font-size: 16px;
  color: #333;
  padding-bottom: 5px;

}
.OrderPage .order_content .order_wrap .order_bottom .price .span_two{
  font-size: 20px;
  color: #ea5413;
}


.OrderPage .order_content .order_wrap .order_bottom .scan_place{
 width: 188px;
 margin: 0 auto;
 margin-bottom: 100px;
 text-align:center;
}
.OrderPage .order_content .order_wrap .order_bottom .scan_place p{
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #333333;
}

</style>
