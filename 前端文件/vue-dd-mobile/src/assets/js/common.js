/**
 * Created by Administrator on 2018/1/8.
 */
export default {
  token:function(){ //获取token
    let token;
    token=JSON.parse(sessionStorage.getItem("dd_token"));
    return token
  },
  get_storage:function(key){ //获取token
    let data;
    data=JSON.parse(sessionStorage.getItem(key));
    return data
  },

  isWeiXin(){//识别微信
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger'){
      return true;
    }else{
      return false;
    }
  },

  order_history:function (param){ //1今日待办，2全部待办，3已完成，4遗留，5历史订单
    let query;
    if(typeof param == 'string'){
      if(param=='1'){
        query=param
      }else if(param=='2'){
        query=param
      }else if(param=='3'){
        query=param
      }else if(param=='4'){
        query=param
      }else if(param=='5'){
        query=param
      }
      return query
    }else{
      throw new Error("订单的type参数类型不是字符串")
    }
  },

  order_history_request_dataReq:function (com,str,page_no,page_size) {//common=commonjs,str=type类型,page_no=页数，pageSize_pam=这一页要多少数据
    let dataReq, //return值
      order_history_pam=com.order_history(str), //12345的type,1今日待办，2全部待办，3已完成，4遗留，5历史订单
      token_pam=com.token(),//获取token
      pageNo_pam=page_no,//页数
      pageSize_pam=page_size;//页数的数据量
    dataReq={
      type:order_history_pam, //1今日待办，2全部待办，3已完成，4遗留，5历史订单
      token:token_pam,
      pageNo:pageNo_pam,
      pageSize:pageSize_pam,
    };
    return dataReq
  },

  order_history_request1:function (self,dataReq1) {//1今日待办
    let _this=self;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_fen_ye,dataReq1).then(function (res){
      console.log("1今日待办",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_type1',res.data.result);   //把数据挂载到store上面
      }
    });
  },
  order_history_request2:function (self,dataReq2) {//2全部待办
    let _this=self;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_fen_ye,dataReq2).then(function (res){
      console.log("2全部待办",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_type2',res.data.result);   //把数据挂载到store上面
      }
    });
  },
  order_history_request3:function (self,dataReq3) {//3已完成
    let _this=self;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_fen_ye,dataReq3).then(function (res){
      console.log("3已完成",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_type3',res.data.result);   //把数据挂载到store上面
      }
    });
  },
  order_history_request4:function (self,dataReq4) {//4遗留
    let _this=self;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_fen_ye,dataReq4).then(function (res){
      console.log("4遗留",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_type4',res.data.result);   //把数据挂载到store上面
      }
    });
  },
  order_history_request5:function (self,dataReq5) {//5历史订单
    let _this=self;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_fen_ye,dataReq5).then(function (res){
      console.log("5历史订单",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_type5',res.data.result);   //把数据挂载到store上面
      }
    });
  },

  personal_data:function (self,com) { //个人资料
    let _this=self;
    let dataReq={token:com.token()};
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ge_ren_zi_liao,dataReq).then(function (res){
      console.log("个人资料",res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('personal_data1',res.data.result);   //把数据挂载到store上面

      }
    });
  },

  d_plate_order:function (self,com,res1,callback) { //首页订单
    let _this=self;
    let login_res=res1; //登录的请求数据也传过来
    let dataReq={token:com.token()};//取token
      _this.$axios.post(_this.$addressUrl+_this.$allUrl.shou_ye_ding_dan,dataReq).then(function(res) { //首页信息
      console.log("0首页订单",res);
      if(res.data.code=='0000'){
        // if(_this.$store.getters.home_data){
        //   _this.$store.dispatch('home_data',null);   //把数据挂载到store上面
        //   _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        // }else{
        //   _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        // }
        _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        console.log("首页订单getters",_this.$store.getters.home_data);

        callback(_this,res,login_res); //首页订单的回调
      }
      if(!res.data.result.coremainorder){ //表示没有订单
        console.log("没有订单");
      }
    });
  },
  d_plate_order_report:function (self,com,callback){ //报备后的首页订单
    let _this=self;
    let dataReq={token:com.token()};//取token
      _this.$axios.post(_this.$addressUrl+_this.$allUrl.shou_ye_ding_dan,dataReq).then(function(res) { //首页信息
      console.log("1首页订单",res);
      if(res.data.code=='0000'){
        // if(_this.$store.getters.home_data){
        //   _this.$store.dispatch('home_data',null);   //把数据挂载到store上面
        //   _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        // }else{
        //   _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        // }
        _this.$store.dispatch('home_data',res.data.result);   //把数据挂载到store上面
        console.log("首页订单getters",_this.$store.getters.home_data);
        callback(_this,res);//报备后的首页回调
      }else{
        callback(_this,res);//报备后的首页回调
      }
    });
  },


  authen_req:function (self,data) { //提交认证
    let _this=self;
    let dataReq=data;
      _this.$axios.post(_this.$addressUrl+_this.$allUrl.ti_jiao_ren_zheng,dataReq).then(function(res) { //提交认证
      console.log("11提交认证",res);
      if(res.data.code=='0000'){
        _this.$router.push({name:'d_plate'});//跳到叮板
        // _this.$store.dispatch('home_data',res.data.result)   //把数据挂载到store上面
      }
    });
  },

  file_img_req:function(self,data,callback){//提交input的file
    let _this=self;
    let dataReq=data;
    _this.$axios.post(_this.$allUrl.shang_chuan_img,dataReq,{headers: {'Content-Type': 'multipart/form-data'}}).then(function (res) {
      console.log("07提交照片", res);
        callback(res.data.url); //回调
    });
  },

  get_service_order:function (self,data,callback) { //获取清单
    let _this=self;
    let dataReq=data;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.huo_qu_fu_wu_qing_dan,dataReq).then(function (res) {
      console.log("获取清单", res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('order_service_list',res.data.result)   //把数据挂载到store上面

        callback(_this);
      }
    });
  },
  get_service_order_list:function (self,data,callback){ //获取清单里的价格列表
    let _this=self;
    let dataReq=data;
    let order_service_price_list_array=[];

    let reqNum=[1,2];
    // reqNum.map((arr,index)=>{
      _this.$axios.post(_this.$addressUrl+_this.$allUrl.fu_wu_qing_dan_wei_xiu,dataReq).then(function (res){
        console.log("获取清单里的价格列表", res);
        if(res.data.code=='0000'){
          let dataStore=res.data.result;
          dataStore.map((arr,index)=>{
            arr.serviceMountings.map((arr1,index1)=>{ //配件费加字段
              arr1.num=0;
              arr1.total_price=0;
            });
            arr.serviceInfo.toltal_price=0; //维修费加字段
            arr.serviceInfo.alter_name=''; //维修费加字段
            if(dataStore[0].highAltitudeSettings && (dataStore[0].highAltitudeSettings[0].floorStart != null ||
              dataStore[0].highAltitudeSettings[0].floorStart != '')){//判断第一个是否有高空费，有就跟每个都创建
              dataStore.map((arr,index)=>{
                dataStore[index].highAltitudeSettings=dataStore[0].highAltitudeSettings;
                dataStore[index]['serviceMountings']['total_price']=0;
              });
            }
          });
          //请求多次就push进去数组，然后数组去给vuex
          order_service_price_list_array.push(dataStore);
          _this.$store.dispatch('order_service_price_list',order_service_price_list_array);  //把数据挂载到store上面

          callback(_this);//根据状态实现跳转
        }
      });
    // });
  },

  req_order_state:function (self,data,callback){ //首页订单状态点击 05 06 07 10 11开始上工 待抵达 拍照 完成服务
    console.log("首页订单状态点击", data);
    let _this=self;
    let dataReq=data;

    _this.$axios.post(_this.$addressUrl+_this.$allUrl.shou_ye_ding_dan_zhuang_tai,dataReq).then(function (res){
      if(res.data.code=='0000'){

          callback(_this,res.data.result.state);//状态显示文字的回调
          console.log("叮板状态的首页订单store.home_data:",_this.$store.getters.home_data,'res:',res.data);
      }else{
          _this.$toast(res.data.error);
      }
    });
  },

  confirm_the_bill(self,data,callback,price_str){//确认账单
    let _this=self;
    let dataReq=data;
    let price_str1=price_str;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.que_ren_zhang_dan,dataReq).then(function (res){
      console.log("确定帐单",res);
      if(res.data.code=='0000'){
        callback(_this,res.data,price_str1);
      }
    });
  },

  req_order_report:function (self,data,callback){ //订单报备
    let _this=self;
    let dataReq=data;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_bao_beo,dataReq).then(function (res){
      console.log("发送订单报备", res);
      if(res.data.code=='0000'){
          callback(_this,res);//回调
      }else{
          callback(_this,res);//回调
      }
    });
  },
  req_order_report_offline:function (self,data,callback){ //订单报备线下结款
    let _this=self;
    let dataReq=data;
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.ding_dan_bao_beo_xian_xia,dataReq).then(function (res){
      console.log("发送订单报备线下结款", res);
      if(res.data.code=='0000'){
          callback(_this,res);//回调
      }else{
          callback(_this,res);//回调
      }
    });
  },

  weixinAppid(self,data,callback){//去拿微信appid
    let _this=self;
    let dataReq=data;
    _this.$axios.post(_this.$ALL.weixinConfig,dataReq).then(function (res) {
      if(res.data.code=='0000'){
        console.log('微信公众号的appid',res);
        _this.$store.dispatch('weiXinAppid',res.data.result);  //把数据挂载到store上面

        callback(_this);
      }
    });
  },

  sysmsgNewData:function (self,data){
    let _this=self;
    let dataReq={token:data};
    _this.$axios.post(_this.$addressUrl+_this.$allUrl.xi_tong_xiao_xi,dataReq).then(function (res){
      console.log('消息通知',res);
      if(res.data.code=='0000'){
        _this.$store.dispatch('systemMsg',res.data.result);  //把数据挂载到store上面

      }
    });
  }

}
