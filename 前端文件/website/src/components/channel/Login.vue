<script src="../../../dist/static/js/urlApi.js"></script>
<template>
    <div class="LoginPage">
      <HeaderTag page="login"></HeaderTag>
      <div class="banner">
        <div class="banner_content">
          <div class="citydiv">
            <div class="login">
              <div id="businessLogin">
                <p>合作商登录</p>
              </div>
              <div class="login_content">
                <iframe id="ifra" :src="src" frameborder="0"></iframe>
                <!--<div class="user"><span class="fon">账号:</span><el-input v-model="user" placeholder="请输入内容" style="width: 233px"></el-input></div>-->
                <!--<div class="pasd"><span class="fon">密码:</span><el-input type="password" v-model="pasd" placeholder="请输入内容" style="width: 233px"></el-input></div>-->
                <!--<div class="btn"><div class="but" :class="{'active':dj}" @click="sub()">登陆</div></div>-->
                <!--<div class="zc"><div class="zcc"><span>没有账号,</span><span>立即注册</span></div></div>-->
              </div>
              <!-- 还没连接，暂时注释 -->
              <!-- <div id="loginA">
                <a href="javascript;;" id="businessLogin">没有账号,立即注册</a>
              </div> -->
            </div>
          </div>

        </div>
      </div>
      <!--footer-b start-->
        <div class="footer-b">
          <div class="main">
            <p>版权所有 © 深圳叮叮科技有限公司 粤ICP备17117017号-1</p>
          </div>
        </div>
      <!--footer-b end-->
      <Floating></Floating>
    </div>


</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'
import { setSession,
  getSession,
  setLocalStorageUserInfo,
  getLocalStorage,
  getLocalStorageUserInfo
} from "../../../static/js/session";
let urlApi = window.urlApi;

export default {

  data(){
    return{
      user:'',
      pasd:'',
      dj:false,
      src:""
      //本地
//      src:"http://localhost:8080/#/login1",
      //测试
//      src:"http://channel.testdist.dingdingkuaixiu.com/#/login1",
      //正式
//      src:"http://manage.dingdingkuaixiu.com/#/login1"
    }
  },
  methods:{
    sub(){
      if(this.user==""){
        alert("请输入账号")
      }else if(this.pasd==""){
        alert("请输入密码")
      }else if(this.user!=""&&this.pasd!=""){
        this.dj=true;
//        window.location.href=this.src+"/login?username="+this.user+"&password="+md5(this.pasd);
//        let url ="http://admin.dingdingkuaixiu.com/login/login";
//        let params={"username":this.user,"password":md5(this.pasd),"type":"3"};
//        this.$http.post(url,params).then(res=>{
//          let data=res.data;
//          console.log(data);
//          if(data.code==="0000"){
//            setSession("userInfo",data.result);
//            sessionStorage.setItem('access-user', JSON.stringify(data.result));
//            setLocalStorageUserInfo("enrolleeinfo",data.result);
//            setSession("fle",true);
////            window.location.href="http://channel.testdist.dingdingkuaixiu.com/#/dashboard";
//
//            history.go(0)
//          }else{
//            alert(data.error);
//          }
//        })
      }
    }
  },
  created(){
//    if(getLocalStorageUserInfo("enrolleeinfo")[0]&&getLocalStorageUserInfo("enrolleeinfo")[0].token){
////        setLocalStorage("enrolleeinfo",JSON.stringify(getLocalStorage("enrolleeinfo")[0]));
//      sessionStorage.setItem('access-user', JSON.stringify(getLocalStorageUserInfo("enrolleeinfo")[0]));
//      this.$router.push({ path: '/Login' });
//    }
//    this.$router.push({ path: '/Login' });
    this.src=this.$channelApi;
//    console.log(this.src);
  },
  components: {
    HeaderTag, FooterTag,Floating
  },
  mounted: function() {

    document.title="叮叮快修-全品类家庭维修服务_家电家居维修_维修手机_维修电脑_维修空调"
  },
}




</script>


<style scoped>
  .zcc{
    margin-left:180px ;
  }
  .zcc span{
    font-size: 12px;
    color: #6a8996;
  }
  .btn{
    margin-bottom:10px;
  }
  .but{
    /*position: absolute;*/
    /*right:20px;*/
    margin-left: 48px;
    width: 232px;
    height: 24px;
    background: url("./img/zc.png");
    line-height: 24px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .but:hover{
    /*position: absolute;*/
    /*right:20px;*/
    margin-left: 48px;
    width: 232px;
    height: 24px;
    background: url("./img/xt.png");
    /*background: red;*/
    line-height: 24px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .but.active{
    margin-left: 48px;
    width: 232px;
    height: 24px;
    background: url("./img/dj.png");
    /*background: red;*/
    line-height: 24px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .user{
    margin-bottom:20px;
  }
  .pasd{
    margin-bottom:20px;
  }
  .fon{
    font-size: 14px;
    color: #6a8996;
    padding-right:15px ;
  }
  .login_content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    height: 150px;
  }
  .citydiv{
    width:1200px;
    height: 64px;
    margin: 0 auto;
    position: relative;
  }
.LoginPage .banner{
  position: relative;
  width: 100%;
  min-width: 1200px;
  height: 773px;
  margin: 0 auto;
}
.LoginPage .banner .banner_content{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e0e0e0;
  background-image: url(./img/banner.jpg);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
}
.LoginPage .banner .banner_content .login{
  width: 400px;
  height: 360px;
  background: url("./img/loginBJ.png");
  position: absolute;
  top:160px;
  right:100px;
  }
#businessLogin p{
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-family: "微软雅黑";
  margin-top: 59px;
  height: 24px;
  line-height: 24px;
  color: #F4531C;
}
#ifra{
    height: 200px;
}
.footer-b{
    width: 100%;
    min-width: 1200px;
    background: #F4531C;
  }
  .footer-b p{
    padding: 11px 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
  .erwm div{
    height: 100%;
    width: 217px;
    float: left;
    text-align: center;
  }
  .erwm div img{
    /*display: block;*/
    width: 102px;
    height: 102px;
  }
  .erwm div p{
    color: #000;
    font-size: 18px;
    margin-top: 18px;
  }
  #loginA{
    width: 100%;
  }
  #loginA a{
    display: block;
    height: 16px;
    font-size: 16px;
    font-family: "微软雅黑";
    line-height: 16px;
    position: absolute;
    bottom: 30px;
    right: 20px;
    color: #626262;
  }

</style>
