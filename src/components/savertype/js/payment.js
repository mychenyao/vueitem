import { Indicator } from 'mint-ui';
import { onBridgeReady2,onBridgeReady} from '@/js/isWeixin';
// import common from "@/js/baseHttp";
//其他环境支付 start
      export function getPaymentParams(obj,_this,getOpenID){
        Indicator.open('正在请求支付请稍后');
        let url1=common.predictDomain+"/fapayjournalaccount/payorder",
          str= returnCitySN["cip"]+','+returnCitySN["cname"],
          param={openId:getOpenID,orderId:obj.orderID,payType:"1",token:obj.token,userIp:str.split(",")[0],userInfoDiscountId:obj.userInfoDiscountId};

          _this.$http.post(url1,param).then(res=>{
          Indicator.close();
            let data = res.data;
          if(data.code==="0000"){
              Indicator.close();
              let re=data.result;
              onBridgeReady2({urlPath:obj.urlPath,appid:re.appid,timestamp:JSON.stringify(re.timestamp),nonce_str: re.nonce_str,package:re.package, signType:re.signType,paySign:re.paySign});
          }else{
            Indicator.close();
            Toast(data.error);
          }
      });
      }
//其他环境支付 end

//正式环境支付 start
export function formalDefray(obj,_this){
  Indicator.open('正在请求支付请稍后');
  _this.$http.post(obj.url1, obj.param).then(res => {
    Indicator.close();
    let data = res.data;
    if (data.code === "0000") {
        Indicator.close();
        let re = data.result;
        Indicator.close();
        onBridgeReady({
          appid: re.appid,
          timestamp: JSON.stringify(re.timestamp),
          nonce_str: re.nonce_str,
          package: re.package,
          signType: re.signType,
          paySign: re.paySign
        })
    } else {
      Indicator.close();
      Toast(data.error);
    }
  })
}
//正式环境支付  end
