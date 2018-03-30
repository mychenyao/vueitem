<template>
<div class="clear_both">
      <div class="address_box fl">
           <input class="search" id="tipinput" type="text" placeholder="小区/大厦/街道" style="width:205px;" ref="tipinput">
           <input type="text" placeholder="详细地址"   v-model="addressDetailed" style="width:410px;">
      </div>
 </div>
</template>
<script>
import {session} from "./index"
// 201803272010410011814625
export default { 
  props:["isSubmitAdd","userInfo","paramsObj"],
    data () {
      return {     
          iframe_address:'',  //lee 显示地址文字
          iframe_show:false, //lee iframe不显示
          addressDetailed:"",
          currentPosition:null,
          getCurrentPosition:null,
      }
  },
  methods:{
    chan(){
      this.iframe_backward(res=>{
          if(res.addressComponent.citycode==="0755"){
             this.getCurrentPosition=res;
           }else{
              this.getCurrentPosition={};
              this.$refs.tipinput.value=""
              successAlert.call(this,"不是深圳地区");
           }
      })
    },
     iframe_getItem(){ //lee 取storage的dd_poi对象
        if(!!this.currentPosition){
          return this.currentPosition
        }
      },
     iframe_backward(callback){                            //lee 逆向地理查询
        let _this=this,url=null,url_northSouthLine=null; // url=逆向地理请求地址， url_northSouthLine=南北线
        if(_this.iframe_getItem()){
          url_northSouthLine=_this.iframe_getItem().location.lng+','+_this.iframe_getItem().location.lat; //拿东经和北纬
          url=`http://restapi.amap.com/v3/geocode/regeo?location=${url_northSouthLine}&key=6f7abd3e0d62ca6affa0e32b55138d1a`;
          _this.$http.get(url).then(data=>{
            if(data.data.infocode=='10000'){ //info=ok或者infocode=10000表示请求成功，data.data.regeocode=地理数据集合
              callback(data.data.regeocode); //回调取数据
            }
          });
        }
      },
    submitAdd(){
        if(!this.getCurrentPosition){
            return successAlert.call(this,"请选择地址！")
        }else if(!this.addressDetailed){
          return successAlert.call(this,"请输入详细地址！")
        }else if(!this.userInfo.name){
             return successAlert.call(this,"请输入姓名！")
        }
       this.paramsObj.params={
                "linkmanName":this.userInfo.name,
                "linkmanPhoneNum":!!this.userInfo.phone?this.userInfo.phone:session.getSession("userInfo").phoneNum,
                "linkmanAddress":this.addressDetailed,
                "citycode":this.getCurrentPosition?this.getCurrentPosition.addressComponent.citycode:"",
                "township":this.getCurrentPosition&&this.getCurrentPosition.addressComponent.township.length?this.getCurrentPosition.addressComponent.township:"",
                "adcode":this.getCurrentPosition.addressComponent.adcode,
                "towncode":typeof this.getCurrentPosition.addressComponent.towncode==="object"?"":this.getCurrentPosition.addressComponent.towncode,
                "lon":this.currentPosition.location.lng,
                "lat":this.currentPosition.location.lat,
                "linkmanBuilding":this.currentPosition.name,
                "token":session.getSession("userInfo").token,
              }; 
              console.log(this.paramsObj);
        }
  },
  watch:{

  },
  mounted(){
    var _this=window;
    let _thi=this;
//    注释地图显示  需要地图将zhushiditu 替换成 container  再改写下样式
  var map = new AMap.Map("zhushiditu", {//地图加载
    resizeEnable: true
  });
  var autoOptions = {//输入提示
    input: "tipinput"
  };
  var auto = new AMap.Autocomplete(autoOptions);
  var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
    map: map
  });
  AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发

  function select(e) {
    placeSearch.setCity(e.poi.adcode);
    placeSearch.search(e.poi.name);  //关键字查询查询
    if(e.poi){
        var get_dd_poi=JSON.parse(sessionStorage.getItem("dd_poi")) || '';
        _thi.currentPosition=e.poi
      if(e.poi.id==get_dd_poi.id){
          sessionStorage.removeItem("dd_poi")
          sessionStorage.setItem("dd_poi",JSON.stringify(e.poi))
      }else{
          sessionStorage.setItem("dd_poi",JSON.stringify(e.poi))
      }
      _thi.chan();
    }
  }
  var dd_tipinput=document.querySelector("#tipinput");

  dd_tipinput.focus(); //获取焦点
  dd_tipinput.oninput=function(){
      if(dd_tipinput.value.length>25){
          alert("只能输入25位字数以内")
      }
  };
  //触发下拉框不消失，点击才消失
  var dd_click_show=document.querySelector(".amap-sug-result");
  var dd_clickFn=function (el,event) {
      el.addEventListener(event,function (e) {
          e.stopPropagation();
          if(event=='click'){
              dd_click_show.style.display='none';
          }else{
              dd_click_show.style.display='block';
          }
      })
  };
  dd_clickFn(dd_click_show,'click');
  },
  watch:{
      "isSubmitAdd":function(v,o){
         this.submitAdd();
      }
    },
  created(){
      
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul,li,p,span,div{
       font-family: MicrosoftYaHei;
}
.button{
  visibility: none;
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
.address_box{
  width:734px;
  margin-left:20px;
}
      input{
          color: #000;
          border:1px solid #B1B1B0;
          border-radius: 5px;
          padding:10px;
          width:253px;
          &:focus{
              border:1px solid #F4531C;
          }
               
      }
</style>
