<template>
  <div class="FooterPage">
    <div class="footer">
      <div class="main">
        <div class="footer-top">
          <div class="erwm">
            <div class="ewm-one">
              <img src="./img/wxewm.png" alt="">
              <p>微信下单更方便</p>
            </div>
            <div class="ewm-two">
              <img src="./img/wbewm.png" alt="">
              <p>企业微博</p>
            </div>
          </div>
          <div class="contact">
            <div class="portrait">
              <img src="./img/kfr.png" alt="">
            </div>
            <div class="telnum">
              <p class="phone">400-999-1891</p>
              <p class="serivcetime">服务时间：周一至周日 9:00-21:00</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <p>
            <span>网址：www.dingdingkuaixiu.com</span>
            <span>公司地址：深圳市南山区科技南十二路28号  康佳研发大厦B座7层</span>
          </p>
        </div>
      </div>
    </div>
    <!--footer end-->

    <!--footer-b start-->
    <div class="footer-b">
      <div class="main">
        <p>版权所有 © 深圳叮叮科技有限公司 粤ICP备17117017号-1</p>
      </div>
    </div>
    <!--footer-b end-->
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    home(){
      window.location.href=this.$homeApi;
    },
    about(){
      window.location.href=this.$aboutApi;
    },
    help(){
      window.location.href=this.$helpApi;
    },
    recruit(){
      this.$router.push('/recruit')
    },
    login(){
      this.$router.push('/login')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style soped>
  html,body{
    width:100%;
    height: 100%;
  }
  .main{
    width:1200px;
    margin:0 auto;
  }
  .footer{
    width: 100%;
    min-width: 1200px;
    height: 313px;
    background: #ffffff;
    box-sizing: border-box;
    padding-top: 60px;
  }
  .footer .footer-top{
    height:184px ;
    width: 1010px;
    margin: 0 auto;
  }
  .footer .bottom{
    height:68px ;
    width: 100%;
    text-align: center;
  }
  .footer .bottom p{
    height:68px;
    box-sizing:border-box ;
    line-height: 68px;
    width: 1050px;
    text-align: center;
    margin: 0 auto;
    border-top: 1px solid #f4531c;
  }
  .footer .bottom p span{
    color: #f4531c;
    font-size: 18px;
    margin-right: 46px;
  }
  .erwm{
    width: 434px;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding-top: 24px;
  }
  .contact{
    width: 576px;
    padding-top: 60px;
    padding-left: 80px;
    height: 100%;
    float: left;
    box-sizing: border-box;
    /*border:1px solid #f4531c;*/
    border-bottom: none;
  }
  .contact div{
    float: left;
  }
  .portrait{
    width: 87px;
    height: 77px;
  }
  .portrait img{
    display: block;
    width: 87px;
    height: 77px;
  }
  .telnum{
    margin-left: 40px;
  }
  .phone{
    font-size: 48px;
    color: #f4531c;
    font-family: tahoma regular;
  }
  .serivcetime{
    font-size: 18px;
    color: #f4531c;
  }
  /*footer end*/

  /*footer-b start*/
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
</style>
