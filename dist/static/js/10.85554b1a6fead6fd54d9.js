webpackJsonp([10],{"0Uuw":function(A,t,e){A.exports=e.p+"static/img/error_alert.d220786.png"},"3suI":function(A,t,e){"use strict";var n=e("wSez"),a=(e.n(n),e("SeI2")),r=e("aMgD"),o=window.location.href,i=o.substring(o.indexOf("phoneNum=")+"phoneNum=".length);t.a={data:function(){return{tel:"",test:"",sendText:"获取验证码",RecommendContent:{},isSendTo:!1,successAlert:{isShow:!1},isAlert:{isShow:!1}}},watch:{"isAlert.isShow":function(A,t){A?(this.$refs.box.style.height="100vh",this.$refs.box.style.overflow="hidden"):this.$refs.box.style.height="auto"}},methods:{sendCode:function(){var A=this,t=void 0,e=60;if(!this.isSendTo){if(!this.tel.trim())return this.$Toast("请输入手机号");if(11!==this.tel.trim().length||this.tel.trim().length>=11&&!/^1[34578]\d{9}$/.test(this.tel))return void this.$Toast("手机号格式不正确");var n=this.$common.apidomain+"/authCodeInfo/getValidationCode?phoneNum="+this.tel;this.$http.get(n).then(function(n){"0000"===n.data.code?(A.$Toast(n.data.result),A.isSendTo=!0,clearInterval(t),t=setInterval(function(){e--,A.sendText=e+"秒后重新发送",0===e&&(clearInterval(t),A.isSendTo=!1,A.sendText="获取验证码")},1e3)):A.$Toast(n.data.error)})}},getDraw:function(A,t){var n=this,o=e.i(r.k)()[0].id;if(A||this.$Toast("请输入手机号码"),this.test){var s=this.$common.apidomain+"/authCodeInfo/confirmLogin",C={phoneNum:this.tel,authCode:this.test,cityId:o,openId:e.i(a.b)(),relevanceType:"2",relevanceKey:i};this.$http.post(s,C).then(function(A){var e=A.data;n.$store.state.loginPath;if("0000"===e.code){var a=e.result.isNew;!0===a||"true"===a?n.successAlert.isShow=!0:t.isShow=!0}else n.test="",n.$Toast(e.error)})}else this.$Toast("短信验证码错误")}},mounted:function(){document.title="领取积分",this.isAlert.isShow&&(this.$refs.box.style.height="100vh",this.$refs.box.style.overflow="hidden")},created:function(){var A=this,t=this.$common.apidomain+"/discount/getRecommendContent";this.$http.get(t).then(function(t){var e=t.data;"0000"===e.code?(A.RecommendContent=e.result,"0"==A.RecommendContent.available&&(A.$Toast("该活动已结束"),A.$router.push({path:"/"}))):A.$Toast(e.error)})}}},"4JX7":function(A,t){A.exports="data:image/png;base64,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"},"6uMU":function(A,t,e){A.exports=e.p+"static/img/bakcBox.2a552f0.png"},AstX:function(A,t,e){var n=e("L4zZ");t=A.exports=e("UTlt")(!0),t.push([A.i,".alert[data-v-36b63170]{width:100vw;position:absolute;top:0;left:0;height:100vh;overflow:hidden;background:rgba(0,0,0,.5)}.error_alert[data-v-36b63170]{width:12rem;height:7.42rem;background:url("+n(e("0Uuw"))+") 50% no-repeat;margin:0 auto;background-size:100% 100%;margin-top:5rem;overflow:hidden}.error_alert>.del_icon[data-v-36b63170]{width:1.02rem;height:1.02rem;background:url("+n(e("4JX7"))+") 50% no-repeat;background-size:100% 100%;position:absolute;right:0;top:1.5rem}.error_alert>h3[data-v-36b63170]{margin-top:3.2rem;color:#4e1416;font-size:1.08rem;text-align:center}.error_alert>p[data-v-36b63170]{margin-top:.5rem;color:#4e1416;text-align:center;font-size:.76rem}.box[data-v-36b63170]{height:auto}#box2[data-v-36b63170]{background:url("+n(e("6uMU"))+") 50% no-repeat;background-size:100% 100%;width:100vw}#box2>.icon_box[data-v-36b63170]{width:100%;overflow:hidden}#box2>.icon_box>.log_icon[data-v-36b63170]{display:block;float:left;background:url("+n(e("Z2Ou"))+") 50% no-repeat;background-size:100% 100%;width:3.2rem;height:.68rem;margin-left:.24rem;margin-top:.54rem}#box2>.icon_box>.right_icon[data-v-36b63170]{float:right;margin-top:0;margin-right:.6rem;width:1.78rem;height:2.1rem;background:url("+n(e("v2QF"))+") 50% no-repeat;background-size:100% 100%}#box2>.banner_box[data-v-36b63170]{-webkit-transform:translateY(-2.1rem);transform:translateY(-2.1rem);width:15rem;height:33.38rem;background:url("+n(e("PBb2"))+") 50% no-repeat;background-size:100% 100%}#box2>.banner_box>h3[data-v-36b63170]{top:5.6rem;color:#fff}#box2>.banner_box>.tel_input[data-v-36b63170],#box2>.banner_box>h3[data-v-36b63170]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-family:STYuanti-SC-Bold;font-size:.6rem}#box2>.banner_box>.tel_input[data-v-36b63170]{width:10.56rem;outline:none;border:none;border-radius:.2rem;height:1.6rem;top:9.34rem;color:gray;background:#fff}#box2>.banner_box>.tel_input2[data-v-36b63170]{top:11.34rem;width:6rem;left:5.2rem;background:#fff}#box2>.banner_box>.getCode[data-v-36b63170]{width:4.2rem;padding:0;left:10.68rem;color:#fd6255;font-size:.48rem;text-align:center;background:#fff}#box2>.banner_box>.active_code[data-v-36b63170]{background:#ccc;color:#858585}#box2>.banner_box>.tel_input[data-v-36b63170]::-webkit-input-placeholder{font-size:.6rem}#box2>.banner_box>.tel_input[data-v-36b63170]:-ms-input-placeholder,#box2>.banner_box>.tel_input[data-v-36b63170]::-ms-input-placeholder{font-size:.6rem}#box2>.banner_box>.tel_input[data-v-36b63170]::placeholder{font-size:.6rem}#box2>.banner_box>.button[data-v-36b63170]{width:5.6rem;height:1.6rem;background:url("+n(e("tpzH"))+") 50% no-repeat;text-align:center;line-height:1.6rem;font-family:STYuanti-SC-Bold;font-size:.72rem;color:#fff;border-radius:5px;top:13.4rem}#box2>.banner_box>.button[data-v-36b63170],#box2>.banner_box>.content[data-v-36b63170]{-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;left:50%}#box2>.banner_box>.content[data-v-36b63170]{width:11.76rem;background:#c43238;height:17.46rem;top:15.5rem;border-radius:.7rem;padding:.8rem .6rem 0 .4rem}#box2>.banner_box>.content>h3[data-v-36b63170]{font-size:.68rem;color:#fff}#box2>.banner_box>.content>h3[data-v-36b63170]:last-of-type{margin-top:1.2rem;margin-bottom:.4rem}#box2>.banner_box>.content>p[data-v-36b63170]{margin:.2rem 0;color:#fff;line-height:1.6em;font-size:.48rem;font-family:PingFangSC-Regular}#box2>.success_box[data-v-36b63170]{width:100%;height:100vh}#box2>.success_box>.success_img[data-v-36b63170]{background:url("+n(e("o5Ge"))+") 50% no-repeat;margin:0 auto;background-size:100% 100%;width:14.32rem;height:12.04rem;position:relative;top:-1rem}#box2>.success_box>.success_img>.text[data-v-36b63170]{position:absolute;top:65%;font-family:PingFangSC-Regular;color:#fff;left:50%;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#box2>.success_box>.success_img>.text>h2[data-v-36b63170]{font-size:1rem}#box2>.success_box>.success_img>.text>p[data-v-36b63170]{color:#fff;font-size:.56rem}#box2>.success_box>.success_img>.text .integral_text[data-v-36b63170]{position:absolute;left:2.3rem;top:-3.4rem}#box2>.success_box>.success_img>.text .integral_text>.right_text[data-v-36b63170]{padding-left:.8rem;margin-top:.5rem;-webkit-transform:translate(.3rem,-.8rem);transform:translate(.3rem,-.8rem)}#box2>.success_box>.success_img>.text .integral_text>.right_text>p[data-v-36b63170]{-webkit-transform:rotate(-31deg);transform:rotate(-31deg);font-size:.66rem;font-weight:700;color:#d18f2a;vertical-align:middle}#box2>.success_box>.success_img>.text .integral_text>.right_text>p>span[data-v-36b63170]{font-weight:400;font-size:.44rem}#box2>.success_box>.success_img>.text .integral_text>.left_text>p[data-v-36b63170]{-webkit-transform:translateY(.5rem);transform:translateY(.5rem);font-size:.4rem;color:#d18f2a}#box2>.success_box>.order_submit[data-v-36b63170]{margin:0 auto;display:block;width:12rem;padding:0;outline:none;font-family:PingFangSC-Regular;border:none;font-size:.72rem;color:#fefefe;background:url("+n(e("HjyN"))+") 50% no-repeat;background-size:100% 100%;height:1.8rem;line-height:1.6rem}#box2>.success_box>.share_button[data-v-36b63170]{width:6.4rem;height:1.8rem;line-height:1.8rem;text-align:center;border:2px solid #fe9105;border-radius:.9rem;font-size:.72rem;color:#fe9105;font-family:STYuanti-SC-Bold;margin:0 auto;margin-top:6.14rem}#box2>.success_box>.footer_text[data-v-36b63170]{text-align:center;line-height:5rem;color:#f5b9b9;font-size:.48rem}.fl[data-v-36b63170]{float:left}.fr[data-v-36b63170]{float:right}.fade-enter-active[data-v-36b63170],.fade-leave-active[data-v-36b63170]{-webkit-transition:all 1s ease;transition:all 1s ease}.fade-enter[data-v-36b63170],.fade-leave-active[data-v-36b63170]{-webkit-transform:translateX(100px);transform:translateX(100px)}.left_text[data-v-36b63170]{-webkit-transform:rotate(-31deg);transform:rotate(-31deg);margin-left:-.9rem}","",{version:3,sources:["D:/workspase/dingdingItem/vueitem/src/components/share/userDraw.vue"],names:[],mappings:"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",file:"userDraw.vue",sourcesContent:['\n.alert[data-v-36b63170] {\n  /*color:#fd6255;*/\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.5);\n}\n.error_alert[data-v-36b63170] {\n  width: 12rem;\n  height: 7.42rem;\n  background: url(../../../static/images/error_alert.png) center center no-repeat;\n  margin: 0 auto;\n  background-size: 100% 100%;\n  margin-top: 5rem;\n  overflow: hidden;\n}\n.error_alert > .del_icon[data-v-36b63170] {\n  width: 1.02rem;\n  height: 1.02rem;\n  background: url(../../../static/images/del5.png) center no-repeat;\n  background-size: 100% 100%;\n  position: absolute;\n  right: 0;\n  top: 1.5rem;\n}\n.error_alert > h3[data-v-36b63170] {\n  margin-top: 3.2rem;\n  color: #4e1416;\n  font-size: 1.08rem;\n  text-align: center;\n}\n.error_alert > p[data-v-36b63170] {\n  margin-top: .5rem;\n  color: #4e1416;\n  text-align: center;\n  font-size: 0.76rem;\n}\n.box[data-v-36b63170] {\n  height: auto;\n}\n#box2[data-v-36b63170] {\n  background: url("../../../static/images/bakcBox.png") center center no-repeat;\n  background-size: 100% 100%;\n  width: 100vw;\n}\n#box2 > .icon_box[data-v-36b63170] {\n  width: 100%;\n  overflow: hidden;\n}\n#box2 > .icon_box > .log_icon[data-v-36b63170] {\n  display: block;\n  float: left;\n  background: url("../../../static/images/logo.png") center center no-repeat;\n  background-size: 100% 100%;\n  width: 3.2rem;\n  height: 0.68rem;\n  margin-left: 0.24rem;\n  margin-top: 0.54rem;\n}\n#box2 > .icon_box > .right_icon[data-v-36b63170] {\n  float: right;\n  margin-top: 0;\n  margin-right: 0.6rem;\n  width: 1.78rem;\n  height: 2.1rem;\n  background: url("../../../static/images/shuoming.png") center center no-repeat;\n  background-size: 100% 100%;\n}\n#box2 > .banner_box[data-v-36b63170] {\n  -webkit-transform: translateY(-2.1rem);\n          transform: translateY(-2.1rem);\n  width: 15rem;\n  height: 33.38rem;\n  background: url("../../../static/images/linequjifen.png") center center no-repeat;\n  background-size: 100% 100%;\n  /*>.getCode-active{*/\n  /**/\n  /*}*/\n}\n#box2 > .banner_box > h3[data-v-36b63170] {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: 5.6rem;\n  color: #fff;\n  font-family: STYuanti-SC-Bold;\n  font-size: 0.6rem;\n}\n#box2 > .banner_box > .tel_input[data-v-36b63170] {\n  width: 10.56rem;\n  position: absolute;\n  left: 50%;\n  outline: none;\n  font-family: STYuanti-SC-Bold;\n  border: none;\n  font-size: 0.6rem;\n  border-radius: .2rem;\n  height: 1.6rem;\n  top: 9.34rem;\n  color: #808080;\n  background: #fff;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#box2 > .banner_box > .tel_input2[data-v-36b63170] {\n  top: 11.34rem;\n  width: 6rem;\n  left: 5.2rem;\n  background: #fff;\n}\n#box2 > .banner_box > .getCode[data-v-36b63170] {\n  width: 4.2rem;\n  padding: 0;\n  left: 10.68rem;\n  color: #fd6255;\n  font-size: 0.48rem;\n  text-align: center;\n  background: #fff;\n}\n#box2 > .banner_box > .active_code[data-v-36b63170] {\n  background: #ccc;\n  color: #858585;\n}\n#box2 > .banner_box > .tel_input[data-v-36b63170]::-webkit-input-placeholder {\n  font-size: 0.6rem;\n}\n#box2 > .banner_box > .tel_input[data-v-36b63170]:-ms-input-placeholder {\n  font-size: 0.6rem;\n}\n#box2 > .banner_box > .tel_input[data-v-36b63170]::-ms-input-placeholder {\n  font-size: 0.6rem;\n}\n#box2 > .banner_box > .tel_input[data-v-36b63170]::placeholder {\n  font-size: 0.6rem;\n}\n#box2 > .banner_box > .button[data-v-36b63170] {\n  width: 5.6rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 1.6rem;\n  background: url(../../../static/images/submitBtn.png) center no-repeat;\n  text-align: center;\n  line-height: 1.6rem;\n  position: absolute;\n  left: 50%;\n  font-family: STYuanti-SC-Bold;\n  font-size: 0.72rem;\n  color: #fff;\n  border-radius: 5px;\n  top: 13.4rem;\n}\n#box2 > .banner_box > .content[data-v-36b63170] {\n  width: 11.76rem;\n  background: #c43238;\n  height: 17.46rem;\n  position: absolute;\n  top: 15.5rem;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-radius: .7rem;\n  padding: 0.8rem 0.6rem 0 0.4rem;\n}\n#box2 > .banner_box > .content > h3[data-v-36b63170] {\n  font-size: 0.68rem;\n  color: #fff;\n}\n#box2 > .banner_box > .content > h3[data-v-36b63170]:last-of-type {\n  margin-top: 1.2rem;\n  margin-bottom: .4rem;\n}\n#box2 > .banner_box > .content > p[data-v-36b63170] {\n  margin: .2rem 0;\n  color: #fff;\n  line-height: 1.6em;\n  font-size: 0.48rem;\n  font-family: PingFangSC-Regular;\n}\n#box2 > .success_box[data-v-36b63170] {\n  width: 100%;\n  height: 100vh;\n}\n#box2 > .success_box > .success_img[data-v-36b63170] {\n  background: url(../../../static/images/hongbao.png) center no-repeat;\n  margin: 0 auto;\n  background-size: 100% 100%;\n  width: 14.32rem;\n  height: 12.04rem;\n  position: relative;\n  top: -1rem;\n}\n#box2 > .success_box > .success_img > .text[data-v-36b63170] {\n  position: absolute;\n  top: 65%;\n  font-family: PingFangSC-Regular;\n  color: #fff;\n  left: 50%;\n  text-align: center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#box2 > .success_box > .success_img > .text > h2[data-v-36b63170] {\n  /*font-weight:normal ;*/\n  font-size: 1rem;\n}\n#box2 > .success_box > .success_img > .text > p[data-v-36b63170] {\n  color: #fff;\n  font-size: 0.56rem;\n}\n#box2 > .success_box > .success_img > .text .integral_text[data-v-36b63170] {\n  position: absolute;\n  left: 2.3rem;\n  top: -3.4rem;\n}\n#box2 > .success_box > .success_img > .text .integral_text > .right_text[data-v-36b63170] {\n  padding-left: .8rem;\n  margin-top: .5rem;\n  -webkit-transform: translate(0.3rem, -0.8rem);\n          transform: translate(0.3rem, -0.8rem);\n}\n#box2 > .success_box > .success_img > .text .integral_text > .right_text > p[data-v-36b63170] {\n  -webkit-transform: rotate(-31deg);\n          transform: rotate(-31deg);\n  font-size: 0.66rem;\n  font-weight: bold;\n  color: #d18f2a;\n  vertical-align: middle;\n}\n#box2 > .success_box > .success_img > .text .integral_text > .right_text > p > span[data-v-36b63170] {\n  font-weight: normal;\n  font-size: 0.44rem;\n}\n#box2 > .success_box > .success_img > .text .integral_text > .left_text > p[data-v-36b63170] {\n  -webkit-transform: translateY(0.5rem);\n          transform: translateY(0.5rem);\n  font-size: 0.4rem;\n  color: #d18f2a;\n}\n#box2 > .success_box > .order_submit[data-v-36b63170] {\n  margin: 0 auto;\n  display: block;\n  width: 12rem;\n  padding: 0;\n  outline: none;\n  font-family: PingFangSC-Regular;\n  border: none;\n  font-size: 0.72rem;\n  color: #fefefe;\n  background: url(../../../static/images/xiadanorder.png) center no-repeat;\n  background-size: 100% 100%;\n  height: 1.8rem;\n  line-height: 1.6rem;\n}\n#box2 > .success_box > .share_button[data-v-36b63170] {\n  width: 6.4rem;\n  height: 1.8rem;\n  line-height: 1.8rem;\n  text-align: center;\n  border: 2px solid #fe9105;\n  border-radius: 0.9rem;\n  font-size: 0.72rem;\n  color: #fe9105;\n  font-family: STYuanti-SC-Bold;\n  margin: 0 auto;\n  margin-top: 6.14rem;\n}\n#box2 > .success_box > .footer_text[data-v-36b63170] {\n  text-align: center;\n  line-height: 5rem;\n  color: #f5b9b9;\n  font-size: 0.48rem;\n}\n.fl[data-v-36b63170] {\n  float: left;\n}\n.fr[data-v-36b63170] {\n  float: right;\n}\n.fade-enter-active[data-v-36b63170],\n.fade-leave-active[data-v-36b63170] {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.fade-enter[data-v-36b63170],\n.fade-leave-active[data-v-36b63170] {\n  -webkit-transform: translateX(100px);\n          transform: translateX(100px);\n}\n.left_text[data-v-36b63170] {\n  -webkit-transform: rotate(-31deg);\n          transform: rotate(-31deg);\n  margin-left: -0.9rem;\n}\n'],sourceRoot:""}])},GUrv:function(A,t,e){"use strict";function n(A){e("ytWN")}Object.defineProperty(t,"__esModule",{value:!0});var a=e("3suI"),r=e("ppoa"),o=e("Z0/y"),i=n,s=o(a.a,r.a,!1,i,"data-v-36b63170",null);t.default=s.exports},HjyN:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABfCAYAAAA0/LlNAAAEb0lEQVR4nO3dz25cZx2A4denOBVsGiQ3FRKrWtB9pV4CyT6L0lsorUpvACFxBUnVppdAxYJ9wyVUsK4U0QViAU2q/CFxYhuPWRw7OJGTVORLRjM8j+TFfOfM+Ld8dfTpOxuLy5t9D5vVheoX1TvVm9XZ6tXv82UAgBW0W92qvqm+qv5UfVntP+uLG88IrLPVx9Wvqtefe0wAgNV2o/qsutQcX6eanvID71VfV79NXAEAVG01t9HXza10qtMC65XqSvX76o0XMhoAwGp7o7mVrjS30yMeD6xXqj9U77/4uQAAVt77ze30SGQ9HliXqosvayIAgDVwsbp8cuFkYP2y+vCljgMAsB4+aG6p6r+Bdbb6ZCnjAACsh0+am+phYH1cnVvaOAAAq+9cc1O1sbi8eab6e45iAAB4Xtern07V+cQVAMAIr1fnjwMLAIAxLkzV28ueAgBgjbw9VT9f9hQAAGvkZ1P12rKnAABYI69N1ZllTwEAsEbOnPayZwAAnoPAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAwmsAAABhNYAACDCSwAgMEEFgDAYAILAGAwgQUAMJjAAgAYTGABAAw2HS57AgCANXJYTYvFsscAAFgfi0VN+wfLHgMAYH3sH9S0++9ljwEAsD52D2ra2V/2GAAA6+P+Xk3399o7sNMdAOC5HSxqZ6+96bBu37m/7HEAAFbfnQd1WLen6tqt+3NxAQDwvzlY1K35odW1qfrz4rBu3FvuUAAAq+zGvVrM267+MlVXq+7u1u0HyxwLAGA13X4wt9SRq8eB9V3Vjbt1b29JkwEArKB7e3NDHblefTltb7VXfXq8+o878wYtAACe7s6DuZ1OuLK91d7xy54vVd8eX7l+t/75LxvfAQBOc7CYW+n63UeWrzc3VVPV9la3qo9O3nF3t/52s27ulHOyAADmJrq5MzfSiT1Xxz46aqo2Fpc3H67+9UafVh88fvdG9cMz9aPNenWzNqeapnkdAGAdHTa/uHl/Ubv7tbM/n9L+hOdOn21v9eHxhx88dvHX1U+qi4//g529+Q8AgEf8sbmhHppOftje6qB6t/r8JQ4FALCqPq/ePWqohzau/WbzCff3XnW5OveCBwMAWDXfNj+1+uK0i9Npi0e+qN6qftfROVkAAP/nvmtuo7d6QlzV059gnbRZXajOV+9Ub1Y/PloHAFhH+9XN6pvqq+bD2a9Wz9yV/h/OO8ZffNH4xQAAAABJRU5ErkJggg=="},PBb2:function(A,t,e){A.exports=e.p+"static/img/linequjifen.49f6391.png"},Z2Ou:function(A,t){A.exports="data:image/png;base64,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"},o5Ge:function(A,t,e){A.exports=e.p+"static/img/hongbao.9da9b07.png"},ppoa:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{ref:"box",staticClass:"box"},[e("div",{attrs:{id:"box2"}},[A._m(0),A._v(" "),A.successAlert.isShow?A._e():e("div",{staticClass:"banner_box"},[e("h3",[A._v("新用户奖励")]),A._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:A.tel,expression:"tel"}],staticClass:"tel_input",attrs:{placeholder:"请输入手机号码",type:"text"},domProps:{value:A.tel},on:{input:function(t){t.target.composing||(A.tel=t.target.value)}}}),A._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:A.test,expression:"test"}],staticClass:"tel_input tel_input2",attrs:{placeholder:"请输入验证码",type:"text"},domProps:{value:A.test},on:{input:function(t){t.target.composing||(A.test=t.target.value)}}}),A._v(" "),e("button",{staticClass:"tel_input tel_input2 getCode",class:{active_code:A.isSendTo},on:{click:A.sendCode}},[A._v(A._s(A.sendText))]),A._v(" "),e("div",{staticClass:"button",on:{click:function(t){A.getDraw(A.tel,A.isAlert)}}},[A._v("领取积分")]),A._v(" "),A._m(1)]),A._v(" "),A.successAlert.isShow?e("div",{staticClass:"success_box"},[e("div",{ref:"success_img",staticClass:"animated flip success_img"},[e("div",{staticClass:"text"},[A._m(2),A._v(" "),e("h2",{staticClass:"animated bounceIn",staticStyle:{"animation-delay":"1s"}},[A._v("恭喜您！")]),A._v(" "),e("p",{staticClass:"animated bounceInUp",staticStyle:{"animation-delay":"1.5s"}},[A._v(A._s(A.RecommendContent.presentee)+"积分成功收入囊中！")])])]),A._v(" "),e("router-link",{staticClass:"order_submit",attrs:{tag:"button",to:"/home"}},[A._v("立即下单")]),A._v(" "),e("p",{staticClass:"footer_text"},[A._v("关注“叮叮快修”公众号，进入个人中心查看积分")])],1):A._e()]),A._v(" "),A.isAlert.isShow?e("div",{staticClass:"alert"},[e("div",{staticClass:"animated swing error_alert"},[e("div",{staticClass:"del_icon",on:{click:function(t){A.isAlert.isShow=!1}}}),A._v(" "),e("h3",[A._v("抱歉")]),A._v(" "),e("p",[A._v("只有新用户才能领取积分红包哟！")])])]):A._e()])},a=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"icon_box"},[e("i",{staticClass:"log_icon"}),A._v(" "),e("i",{staticClass:"log_icon right_icon"})])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"content"},[e("h3",[A._v("\n\t\t\t\t\t活动说明\n\t\t\t\t")]),A._v(" "),e("p",[A._v("\n\t\t\t\t\t即日起用通过邀请奖励页面邀请好友成为叮叮快修注册用户，每邀请一位好友成功注册，\n\t\t\t\t\t您将获得叮叮快修积分奖励100分，邀请越多，奖励越多。\n\t\t\t\t")]),A._v(" "),e("p",[A._v("\n\t\t\t\t\t受邀好友成功注册同时也能获取积分奖励（1000分）；\n\t\t\t\t")]),A._v(" "),e("p",[A._v("受邀用户必须为叮叮快修首次注册用户；")]),A._v(" "),e("p",[A._v("\n\t\t\t\t\t如果发现任何违规套取奖励行为，视情节严重程度进行判罚：不予发放奖励、封停推荐有奖功能、冻结所有通过推荐有奖渠道获得的奖励、\n\t\t\t\t\t依法追究法律责任；\n\t\t\t\t")]),A._v(" "),e("h3",[A._v("\n\t\t\t\t\t积分使用说明\n\t\t\t\t")]),A._v(" "),e("p",[A._v("积分仅限于用户叮叮快修下单抵扣现金使用，\n\t\t\t\t100积分抵用1元")]),A._v(" "),e("p",[A._v("积分不可用于转增、兑现、交换商品等；")]),A._v(" "),e("p",[A._v("积分使用使用有效期为一年，期限年满一年将自动清除；")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"integral_text"},[e("div",{staticClass:"left_text fl"},[e("p",[A._v("新用户\n                    "),e("br"),A._v("\n                    注册奖励\n                  ")])]),A._v(" "),e("div",{staticClass:"right_text fr"},[e("p",[A._v("1000"),e("span",[A._v("分")])])])])}],r={render:n,staticRenderFns:a};t.a=r},tpzH:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABVCAYAAACSP/uKAAADuklEQVR4nO3cz04bVxhA8eMLhqWp1BBX6ipSm32kLLss7FmkeYU0VZo3qJQngKghj1DaRfehjxC160iRsqqiKiQqUGTsMcztYjC1Lf5V+MNlen47ZnxHH5uj67HHjXKtyQU0gWXgS+AucAtYAOYvsljStdYDtoE3wEvgF+AF0D9vYeOcwCwAj4GvgRuXHlNSXbwHngGrVPE5UTrjAveBV8B3GBdJoz6masMrqlac6KTAzADrwA/AzZDRJNXFTapWrFO1Y8R4YGaAn4AH8XNJqpEHVO0Yicx4YFaBlauaSFKtrABrwweGA/MV8M2VjiOpbh5StQT4JzALwNOpjCOpbp5SNeU4MI+BxamNI6lOFqmaQqNca84Bv+NH0ZImZwv4NAFLGBdJk3UDWBoERpImbTkBd6Y9haRaupOAz6c9haRa+iwBrWlPIamWWgmYm/YUkmpp7qynqSXpUgyMpDAGRlIYAyMpjIGRFMbASApjYCSFMTCSwhgYSWEMjKQwBkZSGAMjKYyBkRTGwEgKY2AkhTEwksIYGElhDIykMAZGUhgDIymMgZEUxsBICmNgJIUxMJLCGBhJYQyMpDAGRlIYAyMpjIGRFMbASApjYCSFMTCSwhgYSWEMjKQwBkZSGAMjKYyBkRTGwEgKY2AkhTEwksIYGElhDIykMAZGUhgDIymMgZEUxsBICmNgJIUxMJLCGBhJYVKe9gSSaikDKVsYSQFyhnRYTnsMSXV0WELqH7qFkTR5/cNM6vWnPYakOuodQCoOclG6iZE0QWWGop+LlGGnU1gYSZPTKTIZdhLwutPLuIuRNAllhk4vA7xOwK9lht19CyPp8nb3jzcsvyVgE6Dbz/hWSdJldIpMt3/ckc1BYD5AVZ6hk5J0Yd1+Hn4ntAW8SO1WKoDvB0e3O+5kJP07nSKz3Rnpxnq7lYrBw46rwLvBmd396sXe+JV0ljJXm5Kxe7hbVE2pnqZut9I28Gj4Fd1+5v1fJXt+wiRpTJlhr1c14oTbKo+OmsLs4Ei7lX78Y6f8Ang4cpFuZq+bmZ9tMN+E5kyDmQSpcSX/h6T/gDJXzxb1DzO9PhQHmVP2Hc/arbQx+GN27OS3wCfAyviq3kGmdwCcdllJ/3c/UzXk2MgPTrVb6RC4Bzy/wqEkXX/PgXtHDTnWePtk5rQF94E1YDF4MEnX1zuqXcvGSSfP+snMDeA28ISj78lI0pEPVG24zSlxgbN3MMOawDKwBNwFbgEfHR2XVG994E/gDfCS6su5m0Bx3sK/AZST8QUCpao5AAAAAElFTkSuQmCC"},v2QF:function(A,t){A.exports="data:image/png;base64,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"},ytWN:function(A,t,e){var n=e("AstX");"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);e("FIqI")("acd332ac",n,!0,{})}});
//# sourceMappingURL=10.85554b1a6fead6fd54d9.js.map