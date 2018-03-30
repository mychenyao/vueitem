<template>

      <div class="fromContSite" id="fromContSite">

        <div class="block">
          <el-input v-model="teamselectorBehindObj.linkmanName" placeholder="姓名" style="width: 266px;height:46px;margin-left: 20px"></el-input>
        </div>

        <div class="block">
          <el-select v-model="teamcity.SourceTypeValue" placeholder="选择城市" style="width: 266px;height:46px;margin-left: 20px;font-size: 16px;" @change="selectorArea(teamcity,teamcity.SourceType,teamcity.SourceTypeValue)">
            <el-option
              v-for="items in teamcity.SourceType"
              :key="items.value"
              :value="items.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="block">
         <el-select placeholder="选择区域" @change="changeSelector(value)" v-model="value" style="width: 266px;height:46px;margin-left: 20px;font-size: 16px;">
           <el-option
             v-for="items in teamareaoptions1"
             :key="items.value"
             :value="items.label"
           >
           </el-option>
         </el-select>
          <el-tag
            v-for="tag in teamareas"
            :key="tag.id"
            :closable="true"
            :type="teamprimary"
            @close="handleClose1(tag)"
          >
            {{tag.label}}
          </el-tag>
        </div>

        <div class="block">
          <el-select placeholder="服务工种" @change="changeSelector3(value1)" v-model="value1" style="width: 266px;height:46px;margin-left: 20px;font-size: 16px;">
            <el-option
              v-for="items in teamlabeloptions2"
              :key="items.value"
              :value="items.label"
            >
            </el-option>
          </el-select>
          <el-tag
            v-for="tag in teamskills"
            :key="tag.id"
            :closable="true"
            :type="teamprimary"
            @close="handleClose2(tag)"
          >
            {{tag.label}}
          </el-tag>
        </div>

        <div class="block">
          <el-input v-model="teamselectorBehindObj.name" placeholder="公司名称" style="width: 266px;height:46px;margin-left: 20px" :maxlength="20"></el-input>
        </div>

        <div class="block">
          <el-input v-model="teamselectorBehindObj.peopleNum" placeholder="团队人数" style="width: 266px;height:46px;margin-left: 20px" @blur="teamcuontblur"></el-input>
          <span class="tel" v-show="teamcuont"><b class="tip"></b>请输入数字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>

        <div class="block">
          <el-input v-model="teamselectorBehindObj.linkmanPhoneNum" placeholder="手机号" style="width:140px;height:46px;margin-left: 20px;margin-right: 7px;"  @blur="telblur"></el-input>
          <span class="masterBtn" style="text-align: center" v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
          <span class="masterBtn1" style="text-align: center" v-if="!sendMsgDisabled" @click="sendyzm">{{send}}</span>
          <span class="tel" v-show="telshow"><b class="tip"></b>请输入正确手机号</span>
        </div>

        <div class="block">
          <el-input v-model="teamselectorBehindObj.authCode" placeholder="验证码" style="width: 266px;height:46px;margin-left: 20px" @blur="yzmblur"></el-input>
          <span class="tel" v-show="yzmshow"><b class="tip"></b>请输入正确验证码</span>
        </div>
        <button  id="siteButton" class="btn" @click="submit">提 交</button>
      </div>

</template>

<script>

export default {
	data() {
		return {
		  value:"",
      value1:"",
		  telshow:false,
      yzmshow:false,
      teamcuont:false,
      xianshi:true,
      time:60,
      sendMsgDisabled:false,
      send:'发送验证码',
      teamselectorBehindObj:{
        authCode:'',//验证码
        linkmanName:'',//姓名
        name:'',//公司名字
        peopleNum:'',//公司人数
        linkmanPhoneNum:''//电话号码
	    },
	    teamprimary:"primary",
      teamareas:[],
      teamskills:[],
      teamlabeloptions2: [],
      teamareaoptions1: [],
      teamprops: {
        value: 'label',
        children: 'cities',
      },
      teamselectedOptions: [],
      teamcity: {
        name: "所属城市",
        key: "cityId",
        SourceTypeValue: '', //选中后的
        SourceType: [],
      }
		}
	},
  created(){
    let url1=this.$apidomain+"/findlabelbusinessoptions";
    this.$http.get(url1).then(r=>{
      let data=r.data;
      this.teamlabeloptions2 = this.shallowCopy(data.result);
    }).catch(function (error) {
//          console.log(error);
        });

    let url=this.$apidomain+"/findcitylistareainfo";
    this.$http.get(url).then(r=>{
      let data=r.data;
      data.result.forEach((v)=>{
        this.teamcity.SourceType.push({"id":v.id,"value":v.name});
      })
    }).catch(function (error) {
//          console.log(error);
        });
  },
  methods:{
    teamcuontblur(){
      if(!/^[+]{0,1}(\d+)$/.test(this.teamselectorBehindObj.peopleNum)||this.teamselectorBehindObj.peopleNum==''){
//      if(!IsNum(this.teamselectorBehindObj.peopleNum)){
          this.teamcuont=true;
      }else{
        this.teamcuont=false;
      }
    },
    yzmblur(){
      if(!(/^\d{4}$/.test(this.teamselectorBehindObj.authCode))){
        this.yzmshow=true;
      }else{
        this.yzmshow=false;
      }
    },
    telblur(){
//      console.log(this.teamselectorBehindObj.teamtel);
      if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.teamselectorBehindObj.linkmanPhoneNum))){
          this.telshow=true;
      }else {
        this.telshow=false;
      }

    },
    submit(){
      var _this=this;

//     判断 linkmanName   linkmanPhoneNum  authCode  name  peopleNum  手机号码正则

      if(this.teamselectorBehindObj.linkmanName!=''&&this.teamselectorBehindObj.linkmanPhoneNum!=""&&this.teamselectorBehindObj.authCode!=""&&this.teamselectorBehindObj.name!=""&&this.teamselectorBehindObj.peopleNum!=""&&(/^1(3|4|5|7|8)\d{9}$/.test(this.teamselectorBehindObj.linkmanPhoneNum))){
//        console.log(2);
        let urlT=this.$apidomain+"/siteInfo/submit"
        this.$http.post(urlT,this.teamselectorBehindObj).then(function (response) {
          console.log(response);
          if(response.data.code=="0000"){
            _this.$alert("注册成功", '提示', {
              confirmButtonText: '确定',
              callback: action => {
                _this.$emit('xianshi',_this.xianshi);
                //          this.$message({
                //            type: 'info',
                //            message: `action: ${ action }`
                //          });
              }
            });
          }else{
//            console.log(response.data.error)
            _this.$alert(response.data.error, '提示', {
                confirmButtonText: '确定',
                callback: action => {
  //          this.$message({
  //            type: 'info',
  //            message: `action: ${ action }`
  //          });
                }
            });
          }
        }).catch(function (error) {
          console.log(error);
        })
      }else{

      }
//      console.log(this.teamselectorBehindObj)
    },
    sendyzm(){
      var _this=this;
      if((/^1(3|4|5|7|8)\d{9}$/.test(this.teamselectorBehindObj.linkmanPhoneNum))&&this.teamselectorBehindObj.phoneNum!=''){
        let me=this;
        this.sendMsgDisabled = true;
        let interval = window.setInterval(function() {
          if ((me.time--) <= 1) {
            me.time = 60;
            me.sendMsgDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
        let  phoneNum=this.teamselectorBehindObj.phoneNum;
        let telurl=this.$apidomain+"/authCodeInfo/getValidationCode?phoneNum="+this.teamselectorBehindObj.linkmanPhoneNum;
        this.$http.get(telurl).then(function (response) {
          if(response.data.code=="0000"){
            _this.$alert(response.data.result, '提示', {
              confirmButtonText: '确定',
              callback: action => {
//          this.$message({
//            type: 'info',
//            message: `action: ${ action }`
//          });
              }
            });

          }else{
//            console.log(response.data.error)
            _this.$alert(response.data.error, '提示', {
              confirmButtonText: '确定',
              callback: action => {
//          this.$message({
//            type: 'info',
//            message: `action: ${ action }`
//          });
              }
            });
          }
        }).catch(function (error) {
//          console.log(error)
        })
      }
    },
    handleItemChange(val) {
//    	console.log(val)
    },
    shallowCopy(src) {
    	var arr = [];
    	for (var i=0;i<src.length;i++){
    		var row =src[i];
    		var dst = {};
			  for (var prop in row) {
		      dst[prop] = row[prop];
			  }
			  arr.push(dst);
    	}

		  return arr;
		},
    teamhandleItemChange(val) {
//    	console.log(val)
    },
    handleClose1(tag) {
	      	this.teamareas.forEach((e,i)=>{
	        if(e.id===tag.id){
	          this.teamareas.splice(i,1);
	          this.teamselectorBehindObj.areaIds=this.getIds(this.teamareas);
	          return;
	        }
	      });
    },
    handleClose2(tag) {
	      	this.teamskills.forEach((e,i)=>{
	        if(e.id===tag.id){
	          this.teamskills.splice(i,1);
	          this.teamselectorBehindObj.skillIds=this.getIds(this.teamskills);
	          return;
	        }
	      });

    },
    changeSelector(value){
//      console.log(this.teamareaoptions1,"00000");
//      console.log(value,"111");
      this.teamareaoptions1.forEach((v,i)=>{
        if(value===v.label){
          if(this.checkIdIn(this.teamareas,v.id)){
            this.teamareas.push({"id":v.id,"label":value});
            this.teamselectorBehindObj.areaIds=this.getIds(this.teamareas);
          }
          return;
        }
      });


//      this.teamareaoptions1.forEach((v,i)=>{
//	        if(value[0]===v.label){
//	          v.cities.forEach((e,i)=>{
//	            if(e.label===value[1]){
//	              if(this.checkIdIn(this.teamareas,e.id)){
//	                this.teamareas.push({"id":e.id,"label":v.label+"-"+e.label});
//	                this.teamselectorBehindObj.areaIds=this.getIds(this.teamareas);
//	              }
//	              return;
//	            }
//	          })
//	        }
//	      });

    },
    changeSelector3(value){
      this.teamlabeloptions2.forEach((v,i)=>{
        if(value===v.label){
          if(this.checkIdIn(this.teamskills,v.id)){
            this.teamskills.push({"id":v.id,"label":value});
            this.teamselectorBehindObj.skillIds=this.getIds(this.teamskills);
          }
          return;
        }
      });



//    	this.teamlabeloptions2.forEach((v,i)=>{
//	        if(value[0]===v.label){
//	          v.cities.forEach((e,i)=>{
//	            if(e.label===value[1]){
//	              if(this.checkIdIn(this.teamskills,e.id)){
//	                this.teamskills.push({"id":e.id,"label":v.label+"-"+e.label});
//	                this.teamselectorBehindObj.skillIds=this.getIds(this.teamskills);
//	              }
//	              return;
//	            }
//	          })
//	        }
//	      });
    },
    selectorArea(item,values,SourceTypeValue){
      	var key=item.key;
	      values.forEach((v,i)=>{
	        if(v.value===SourceTypeValue){
	          this.teamselectorBehindObj[key]=v.id;
	          this.teamselectorBehindObj.city=v.value;
	        }
	      });
	      this.teamareas = [];
	      this.teamselectorBehindObj.areaIds="";
//	      console.log(this.teamselectorBehindObj.cityId);
	      let url=this.$apidomain+"/findareaandstreetoptions?cityId="+this.teamselectorBehindObj.cityId;
	      this.$http.get(url).then(r=>{
	        let data=r.data;
	        this.teamareaoptions1 = data.result;
//	        console.log(this.teamareaoptions1);
	      })

    },
    handleChange(value) {
//      console.log(value);
    },
    teamsubmit(){
//    	console.log(this.teamselectorBehindObj)
    },
     checkIdIn(obj,id){
        let isin = true;
        obj.forEach((e)=>{
          if(e.id==id){
            isin = false;
          }
        })
        return isin;
      },
      getIds(obj){
        let k = "";
        obj.forEach((e,i)=>{
          k += e.id+",";
        });
        k = k.substring(0,k.length-1);
        return k;
      },
      getLabel(obj,id){
        let value = "";
        obj.forEach((e,i)=>{
          if(e.id==id){
            value = e.value;
          }
        });
        return value;
      },
      closeMove(){
        this.isAdd.isShow=false;
      },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .block{
    position: relative;
  }
  .tel{
    position: absolute;
    font-size: 14px;
    color: #a1a1a1;
    width:164px;
    height: 22px;
    line-height: 22px;
    top:10px;
    right:-164px;

  }
  .tel .tip{
    position: absolute;
    left:12px;
    display:inline-block;
    width: 22px;
    height: 22px;
    background: url("./img/tip.png") no-repeat;

  }
  #fromCont .block,#fromContSite .block{
    padding-bottom:10px;
    text-align: right;
  }
  #fromCont .block .demonstration,#fromContSite .block .demonstration{
    font-size: 16px;
  }
  .banner_content .join{
    display: block;
    width:280px;
    height:60px;
    position: absolute;
    left:49%;
    top:51%;
    margin-top:30px;
    margin-left: -140px;
    cursor: pointer;
  }
  .radio span{
    display: inline-block;
    width:150px;
    height:44px;
    text-align: center;
    border:1px solid #ddd;
    font-size: 16px;
    line-height: 44px;
    background-color: #ddd;
  }
  .radio .active{
    background: url("./img/selected.png") no-repeat;
    background-color: #fff;
  }
  .cooperation{
    text-align: center;
  }
  .cooperation h2{
    margin:20px 0;
    font-size: 24px;
  }
	.RecruitPage .banner1{
	  position: relative;
	  width: 100%;
	  height: 600px;
	  margin: 0 auto;}
	.RecruitPage .banner1 .banner_content{
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background-color: #e0e0e0;
	    /*background-image: url(./img/banner2.png);*/
	    background-repeat: no-repeat;
	    background-size: auto 100%;
	    background-position: center;
	}
  .fromCont,.fromContSite{
    width: 290px;
    /*margin: 0 auto;*/
    background:#fff ;
  }
  .masterBtn{
    display:inline-block;
    width: 114px;
    height: 38px;
    color: #fff;
    font-size: 16px;
    background: url("./img/send.png") no-repeat;
    border-radius: 3px;
    line-height: 38px;
  }
  .masterBtn1{
    display:inline-block;
    /*box-sizing: border-box;*/
    width: 114px;
    height: 38px;
    color: #f4531c;
    border:1px solid #f4531c;
    font-size: 16px;
    /*background-color: green;*/
    border-radius: 3px;
    line-height: 38px;
    cursor: pointer;
  }
  #masterButton,#siteButton{
    width:120px;
    height:52px;
    background: #ea5413;
    color:#fff;
    margin-bottom:40px;
    border-radius: 5px;
    border:none;
    outline-style: none;
    font-size: 18px;
    margin-left: 100px;
  }

</style>
