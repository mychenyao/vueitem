<template>
  <div class="FloatingPage">
    <div class="floating">
        <ul>
              <li class="kfr">
                <a href="http://177dd.udesk.cn/im_client/?web_plugin_id=38935" target="_blank">
                  <img src="./img/kefu.png"/>
                  <p>在线咨询</p>
                </a>
              </li>
              <li class="spe">
                  <a href="javascript:;">
                      <p id="weiXin">微信下单</p>
                      <p class="scan" style="display:none;">
                        <img src="./img/weixin_gz.png">
                      </p>
                  </a>
              </li>
              <li class="weibo">
                  <a href="javascript:;">
                      <p id="weiBo">企业微博</p>
                      <p class="wbcan" style="display:none;">
                        <img src="./img/weibo_gz.png">
                      </p>
                  </a>
              </li>
              <li id="backtop">
                <a href="javascript:;"  @click="backtop">
                  <img src="./img/hhtop.png">
                </a>
              </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingPage',
  data () {
    return {
      msg: 'Welcome to DingDingKuaiXiu theOfficialWebsite'
    }
  },
  mounted: function(){
        //显示二维码
      $("#weiXin").hover(function(){
        $("#weiXin").css({background:"#f4531c",color:"#ffffff"});
          $(".scan").css("display","block");
      },function(){
          $(".scan").css("display","none");
          $("#weiXin").css({background:"none",color:"#626262"});
      });
      //显示微博二维码
      $("#weiBo").hover(function(){
        $("#weiBo").css({background:"#f4531c",color:"#ffffff"});
          $(".wbcan").css("display","block");
      },function(){
        $("#weiBo").css({background:"none",color:"#626262"});
          $(".wbcan").css("display","none");
      });
  },
  methods:{
      backtop(){
        window.scrollTo(0,0);
      }
  }

}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.floating{
    position: fixed;
    right: 0;
    top: 60%;
    z-index: 10;
    width: 100px;
    border: 1px solid #dcdcdc;
    background: #ffffff;
}
.floating ul .kfr a{
	display: block;
	background: none;
	width: 100px;
	height: 110px;
	overflow: hidden;
}
.floating ul .kfr a img{
	display: block;
	width: 54px;
	height: 48px;
	margin: 18px 20px 9px 20px;
}
.floating ul .kfr a p{
	text-align: center;
	font-family: "微软雅黑";
	color: #f4531c;
	font-size: 14px;
}
/*微信*/
.floating ul .spe,.weibo a{
   display: block;
   background: none;
   width: 100%;
   text-align: center;
   position: relative;
}
.floating ul .spe,.weibo a p{
	width: 80px;
	margin-left: 10px;
	height: 28px;
	line-height: 28px;
	color: #626262;
	font-size:14px ;
	font-family: "微软雅黑";
}
.floating ul .spe a .scan{
	position: absolute;
	left:-126px;
	top:-58px;
}
.floating ul .weibo a .wbcan{
	position: absolute;
	left:-126px;
	top:-58px;
}
.floating ul .spe a p{
	margin-bottom:17px;
}
.floating ul .weibo a p{
	height: 31px;
	line-height: 31px;
}
.floating ul #backtop{
	width: 80px;
	margin: 0 10px;
}
.floating ul #backtop a{
	display: block;
	width: 100%;
	height: 44px;
	border-top:1px solid #dcdcdc;
	padding-top: 12px;
}
.floating ul #backtop a img{
	display: block;
	width: 35px;
	height: 28px;
	margin-left: 27px;
}

</style>
