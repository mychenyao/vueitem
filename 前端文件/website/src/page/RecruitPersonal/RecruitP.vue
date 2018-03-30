<template>
      <div class="fromCont" id="fromCont">
        <div class="block">
          <el-input v-model="selectorBehindObj.name" placeholder="姓名" style="width: 266px;height:46px;margin-left: 20px"></el-input>
        </div>

        <div class="block">
          <el-select v-model="city.SourceTypeValue" placeholder="选择城市" style="width: 266px;height:46px;margin-left: 20px;font-size: 16px;" @change="selectorArea(city,city.SourceType,city.SourceTypeValue)">
            <el-option
              v-for="items in city.SourceType"
              :key="items.value"
              :value="items.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="block">
          <el-cascader id="cascader" style="width: 266px;height:46px;margin-left: 20px"
                       @change="changeSelector"
                       :options="areaoptions1"
                       placeholder="选择区域"
                       change-on-select
                       @active-item-change="handleItemChange"
                       :props="props">
          </el-cascader>
          <el-tag
            v-for="tag in areas"
            :key="tag.id"
            :closable="true"
            :type="primary"
            @close="handleClose1(tag)"
          >
            {{tag.label}}
          </el-tag>
        </div>

        <div class="block">
          <el-cascader id="cascader2" style="width: 266px;height:46px;margin-left: 20px"
                       @change="changeSelector2"
                       :options="labeloptions2"
                       change-on-select
                       placeholder="服务工种"
                       @active-item-change="handleItemChange"
                       :props="props">
          </el-cascader>
          <el-tag
            v-for="tag in skills"
            :key="tag.id"
            :closable="true"
            :type="primary"
            @close="handleClose2(tag)"
          >
            {{tag.label}}
          </el-tag>
        </div>

        <div class="block">
          <el-input v-model="selectorBehindObj.phoneNum" placeholder="请输入手机号" style="width:140px;height:46px;margin-left: 20px;margin-right: 7px;"  @blur="telblur"></el-input>
          <span class="masterBtn" style="text-align: center" v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
          <span class="masterBtn1" style="text-align: center" v-if="!sendMsgDisabled" @click="sendyzm">{{send}}</span>
          <span class="tel" v-show="telshow"><b class="tip"></b>请输入正确手机号</span>
        </div>

        <div class="block">
          <el-input v-model="selectorBehindObj.authCode" placeholder="填写验证码" style="width: 266px;height:46px;margin-left: 20px;" @blur="yzmblur"></el-input>
          <span class="tel" v-show="yzmshow"><b class="tip"></b>请输入正确验证码</span>
        </div>
        <button type="submit" id="siteButton" class="btn" @click="submit">提 交</button>
      </div>

</template>

<script>

export default {
	data() {
		return {
      telshow:false,
      yzmshow:false,
      xianshi:true,
      xianshi1:'111',
      time:60,
      sendMsgDisabled:false,
		  send:'发送验证码',
			selectorBehindObj:{
        phoneNum:'',
        authCode:'',
        name:''
      },
			primary:"primary",
      areas:[],
      skills:[],
      labeloptions2: [],
      areaoptions1: [],
      props: {
        value: 'label',
        children: 'cities',
      },
      value: '',
      selectedOptions: [],
      city: {
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
      this.labeloptions2 = this.shallowCopy(data.result);
    }).catch(function (error) {
//          console.log(error);
        });

    let url=this.$apidomain+"/findcitylistareainfo";
    this.$http.get(url).then(r=>{
      let data=r.data;
      data.result.forEach((v)=>{
        this.city.SourceType.push({"id":v.id,"value":v.name});

      })
    }).catch(function (error) {
//          console.log(error);
        });
  },
  methods:{
    yzmblur(){
      if(!(/^\d{4}$/.test(this.selectorBehindObj.authCode))){
        this.yzmshow=true;
      }else{
        this.yzmshow=false;
      }
    },
    telblur(){
      if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.selectorBehindObj.phoneNum))){
        this.telshow=true;
      }else {
        this.telshow=false;
      }
    },
    submit(){
//      this.$emit('xianshi',this.xianshi);
      var _this=this;
      if(this.selectorBehindObj.name!=''&&this.selectorBehindObj.phoneNum!=""&&this.selectorBehindObj.authCode!=''){

        let urlP=this.$apidomain+"/masterinfo/submit";
        this.$http.post(urlP,this.selectorBehindObj).then(function (response) {
//          console.log(response);
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
//          console.log(error);
        })
      }else{

      }

//        console.log(this.selectorBehindObj)
    },
    sendyzm(){
      var _this=this;
      if(!this.telshow&&this.selectorBehindObj.phoneNum!=''){
        let me=this;
        this.sendMsgDisabled = true;
        let interval = window.setInterval(function() {
          if ((me.time--) <= 1) {
            me.time = 60;
            me.sendMsgDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
        let  phoneNum=this.selectorBehindObj.phoneNum;
//        console.log(phoneNum);
        let telurl=this.$apidomain+"/authCodeInfo/getValidationCode?phoneNum="+phoneNum;
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
    handleClose1(tag) {

	      	this.areas.forEach((e,i)=>{
	        if(e.id===tag.id){
	          this.areas.splice(i,1);
	          this.selectorBehindObj.areaIds=this.getIds(this.areas);
	          return;
	        }
      });



    },
    handleClose2(tag) {

	      	this.skills.forEach((e,i)=>{
	        if(e.id===tag.id){
	          this.skills.splice(i,1);
	          this.selectorBehindObj.skillIds=this.getIds(this.skills);
	          return;
	        }
	      });

    },
    changeSelector(value){

	      	this.areaoptions1.forEach((v,i)=>{
	        if(value[0]===v.label){
	          v.cities.forEach((e,i)=>{
	            if(e.label===value[1]){
	              if(this.checkIdIn(this.areas,e.id)){
	                this.areas.push({"id":e.id,"label":v.label+"-"+e.label});
	                this.selectorBehindObj.areaIds=this.getIds(this.areas);
	              }
	              return;
	            }
	          })
	        }
	      });

    },

    changeSelector2(value){



	      	this.labeloptions2.forEach((v,i)=>{

	        if(value[0]===v.label){
	          v.cities.forEach((e,i)=>{
	            if(e.label===value[1]){
	              if(this.checkIdIn(this.skills,e.id)){
	                this.skills.push({"id":e.id,"label":v.label+"-"+e.label});
	                this.selectorBehindObj.skillIds=this.getIds(this.skills);

	              }
	              return;
	            }
	          })
	        }
	      });




    },
    selectorArea(item,values,SourceTypeValue){

	      var key=item.key;
	      values.forEach((v,i)=>{
	        if(v.value===SourceTypeValue){
	          this.selectorBehindObj[key]=v.id;
	          this.selectorBehindObj.city=v.value;
	        }
	      });
	      this.areas = [];
	      this.selectorBehindObj.areaIds="";
//	      console.log(this.selectorBehindObj.cityId);
	      let url=this.$apidomain+"/findareaandstreetoptions?cityId="+this.selectorBehindObj.cityId;
	      this.$http.get(url).then(r=>{
	        let data=r.data;
	        this.areaoptions1 = data.result;
//	        console.log(this.areaoptions1);
	      })

    },
    handleChange(value) {
//      console.log(value);
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
  .fromCont,.fromContSite{
    width: 290px;
    /*margin: 0 auto;*/
    background: #fff;
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
    width: 114px;
    /*box-sizing: border-box;*/
    height: 38px;
    color: #f4531c;
    font-size: 16px;
    border:1px solid #f4531c;
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
