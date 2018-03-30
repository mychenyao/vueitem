<template>
  <div class="HeaderPage">
    <div class="top">
      <div class="main">
        <div class="nav">
          <div class="l-rel">
            <h1>
              <a href="http://www.testdist.dingdingkuaixiu.com" title="叮叮快修">叮叮快修</a>
            </h1>
          </div>
          <div class="r-rel">
            <ul>
              <li>
                <a href="javascript:;" class="bottom-border" v-bind:class="[pagetwo=='home'&&'active']" @click="home">
                  首页
                </a>
              </li>
              <li>
                <a id="service" class="bottom-border" v-bind:class="[pagetwo=='about'&&'active']" @click="service">
                我们的服务
                </a>
              </li>
              <li>
                <a href="javascript:;" class="bottom-border" v-bind:class="[pagetwo=='about'&&'active']" @click="about">
                  关于叮叮
                </a>
              </li>
              <li>
                <a href="javascript:;" class="bottom-border" v-bind:class="[pagetwo=='recruit'&&'active']" @click="recruit">
                  工程师招募
                </a>
              </li>
              <li>
                <a href="javascript:;" class="bottom-border" v-bind:class="[pagetwo=='login'&&'active']" @click="login">
                  加盟合作
                </a>
              </li>
              <li>
                <a href="javascript:;" class="bottom-border" v-bind:class="[pagetwo=='help'&&'active']" @click="help">
                  帮助中心
                </a>
              </li>
              <li style="line-height: 78px;height: 78px;position: relative;" >
                <router-link to="/order" class="border-q">
                  预约维修
                  <!--<span id="span" :style="borderBottom"></span>-->
                </router-link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data () {
    return {
     pagetwo:"",
     borderBottom:{display:"none"}
    }
  },
  methods:{
    home(){
//      this.borderBottom = {display:"none"}
      this.pagetwo="home";
//      this.page="home";
      window.location.href=this.$homeApi;
    },
    service(){
//      this.borderBottom = {display:"none"}
      this.pagetwo="service";
//      this.page="about";
      window.location.href=this.$homeApi+"#two";
    },
    about(){
//      this.borderBottom = {display:"none"}
//      this.page="about";
      window.location.href=this.$aboutApi;
    },
    help(){
//      this.borderBottom = {display:"none"}
      this.pagetwo="help";
//      this.page="help";
      window.location.href=this.$helpApi;
    },
    recruit(){
//      this.borderBottom = {display:"none"}
      this.pagetwo="recruit";
      this.$router.push('/recruit')
    },
    login(){
//      this.borderBottom = {display:"none"}
      this.pagetwo="login";
      this.$router.push('/login')
    },
//    borderActive(){
////        this.borderBottom = {display:"block"}
//
//    }
},
  props:["page"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    width:100%;
    height: 100%;
  }
  .top{
    height: 78px;
    width: 100%;
    min-width: 1200px;
    background: #fff;
  }
  .main{
    width:1200px;
    margin:0 auto;
  }
  /*nav  start*/
  .top .nav{
    width: 100%;
  }
  .top .nav .l-rel{
    float: left;
  }
  .top .nav .l-rel h1{
    float:left;
  }
  .top .nav .l-rel h1 a{
    display: block;
    width:189px;
    height:41px;
    font-size: 0;
    margin: 22px 0 12px 5px;
    background:url("./img/logo.png");
    background-position: 0 0;
    text-indent: -9999px;
  }
  .top .nav .r-rel{
    float: right;
  }
  .top .nav .r-rel ul li{
    float: left;
    /*line-height: 78px;*/

  }
  .top .nav .r-rel ul li .bottom-border{
    display: block;
    padding: 26px 0 24px 0;
    margin: 0 18px;
    height: 78px;
    box-sizing: border-box;
    /*font-family:SourceHanSansCN-Bold;*/
    /*font-weight: 600;*/
    border-bottom: 2px solid #fff;
    font-size: 20px;
    color: #4c4c4c;
  }
  .top .nav .r-rel ul li .active{
    display: block;
    padding: 26px 0 24px 0;
    margin: 0 18px;
    height: 78px;
    box-sizing: border-box;
    /*font-family:SourceHanSansCN-Bold;*/
    /*font-weight: 600;*/
    border-bottom: 2px solid #f4531c;
    font-size: 20px;
    color: #f4531c;
  }

  .top .nav .r-rel ul li .bottom-border:hover{
    /*font-family:SourceHanSansCN-Bold;*/
    border-bottom: 2px solid #f4531c;
    color: #f4531c;
  }
  .top .nav .r-rel ul li .border-q{
    /*font-family:SourceHanSansCN-Bold;*/
    display: block;
    width: 106px;
    height: 78px;
    text-align: center;
    background: #f4531c;
    /*padding: 5px;*/
    font-size: 20px;
    /*color: #f4531c;*/
    color: #fff;
    /*border: 2px solid #f4531c;*/
    /*border-radius: 10px;*/
    margin-left: 16px;
    margin-right:20px;
  }
  .top .nav .r-rel ul li .border-q #span{
    position: absolute;
    left: 25px;
    display: block;
    width: 90px;
    height: 2px;
    bottom: 12px;
    background: #ffffff;
  }


</style>
