export var _this;
// import common from "../../static/js/baseHttp"
import {removerStorage} from "@/js/session"
export function Fn(v){
  _this=v;
}
export function isWeixin(){
	var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                    return true
                }else{
              			return false
                }
}
export function onBridgeReady(obj){
    //启用微信内置函数 发起支付
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        "appId":obj.appid,     //公众号名称，由商户传入
        "timeStamp":obj.timestamp,         //时间戳，自1970年以来的秒数
        "nonceStr":obj.nonce_str, //随机串
        "package":obj.package,
        "signType":obj.signType,         //微信签名方式：
        "paySign":obj.paySign //微信签名
        // "key": obj.key                 //商户krey;
      },
      function(res){
        removerStorage("fullName");
        if(res.err_msg === "get_brand_wcpay_request:ok") {
           window.location.href= `${common.pathDomain}/#/order`;
          // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }else{
            window.location.href=`${common.pathDomain}/#/order`;
        }
     });
}
//测试版本 支付

export function onBridgeReady2(obj){
    //启用微信内置函数 发起支付
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        "appId":obj.appid,     //公众号名称，由商户传入
        "timeStamp":obj.timestamp,         //时间戳，自1970年以来的秒数
        "nonceStr":obj.nonce_str, //随机串
        "package":obj.package,
        "signType":obj.signType,  //微信签名方式：
        "paySign":obj.paySign //微信签名
        // "key": obj.key                 //商户krey;
      },
      function(res){
        let url = decodeURIComponent(obj.urlPath);
        removerStorage("fullName");
        if(res.err_msg === "get_brand_wcpay_request:ok") {
           window.location.href=`${url}order`;
          // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }else{
            window.location.href=`${url}order`;
        }
     });
}
