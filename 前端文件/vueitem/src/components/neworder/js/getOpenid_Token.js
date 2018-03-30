import {setCookie,getCookie,getOpenID,setOpenID} from "@/js/cookie"
import common from "@/js/baseHttp"
import {getLocalStorage,setLocalStorage,getSession,setIsOpenId,getIsOpenId,removerStorage} from "@/js/session";
import {isWeixin,onBridgeReady} from "@/js/isWeixin"
export function getToken(_this){
  let url=`${common.apidomain}/authCodeInfo/confirmIsLogin`,params,openUrl=common.apidomain+"/authCodeInfo/gettoken?openid="+getOpenID();
  _this.$http.get(openUrl).then(res=>{
    let data=res.data;

    setCookie("");
    if(data.code==="0000"){
//验证 token start
      params={"openId":getOpenID(),"token":data.result.token};
      _this.$http.post(url,params).then(r=>{
        let data=r.data;
        if(data.code==='0000'){
          setCookie(data.result.token);
        }
      })
//验证 token end
    }
  })
}
export function getOpenIdToken(_this){
  if(isWeixin()&&(getOpenID()===""||getOpenID()===undefined)){
    if(!_this.GetQueryString("code")) {
      let appId="wxb5b451d85729641a";
      let hrefPath=window.location.href,
        url=UrlEncode(hrefPath);
      setIsOpenId("isOpenKey",true);
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
      return;
    }
    if(_this.GetQueryString("code")&&getIsOpenId("isOpenKey")){
      let state=_this.GetQueryString("state"),code=_this.GetQueryString("code"),
        url=common.apidomain+"/authCodeInfo/getopenidbycode?code="+code+"&state="+state;
      _this.$http.get(url).then(res=>{
        let data=res.data;
        setOpenID(data.result);
        //通过openID 拿到token   start
        getToken(_this);
        //通过openID 拿到token   end
      });
    }
    return;
  }
  if(isWeixin()&&getOpenID()){
    //通过openID 拿到token   start
    getToken(_this);
    //通过openID 拿到token   end
  }
}


export function UrlSearch(){
  let name,value,str=location.href,num=str.indexOf("?"); //取得整个地址栏
  str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
  var arr=str.split("&"); //各个参数放到数组里
  for(var i=0;i < arr.length;i++){
    num=arr[i].indexOf("=");
    if(num>0){
      name=arr[i].substring(0,num);
      value=arr[i].substr(num+1);
      this[name]=value;
    }
  }
}
function str2asc(strstr){
  return ("0"+strstr.charCodeAt(0).toString(16)).slice(-2);
}
function UrlEncode(str){
  var ret="";
  var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
  var tt= "";

  for(var i=0;i<str.length;i++){
    var chr = str.charAt(i);
    var c=str2asc(chr);
    tt += chr+":"+c+"n";
    if(parseInt("0x"+c) > 0x7f){
      ret+="%"+c.slice(0,2)+"%"+c.slice(-2);
    }else{
      if(chr==" ")
        ret+="+";
      else if(strSpecial.indexOf(chr)!=-1)
        ret+="%"+c.toString(16);
      else
        ret+=chr;
    }
  }
  return ret;
}
