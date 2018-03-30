<template>
  <div class="HomePage">
  	<HeaderTag page="home"></HeaderTag>
    <div class="product_wp">
      <!-- 换屏区域 -->
      <div class="page_wp">
        <div class="page_box show">
          <div class="content img1">
            <div class="miniBox spe">
              <h1 class="desc animated" v-bind:class="[index===0&&'bounceInLeft']">全品类家庭维修互联网服务平台</h1>
              <h1 class="desc animated" v-bind:class="[index===0&&'bounceInRight']">一键享受专业维修上门服务</h1>
            </div>
          </div>
        </div>
        <div class="page_box">
          <div class="content img2">
              <h1 class="desc animated spe_two" v-bind:class="[index===1&&'zoomIn']">用专业的技术解决家庭维修疑难杂症</h1>
          </div>
        </div>
        <div class="page_box">
          <div class="content img3">
              <h1 class="desc animated spe_two" v-bind:class="[index===2&&'zoomIn']">三个月内无限次免费为您提供售后服务</h1>
          </div>
        </div>
        <div class="page_box">
          <div class="content img4">
              <h1 class="desc animated spe_four" v-bind:class="[index===3&&'bounceIn']">每一位师傅都采用严格的五星标准评级</h1>
            <div class="footerBox">
              <FooterTag></FooterTag>
            </div>
          </div>

        </div>


      </div>

      <!-- 换屏按钮 -->
      <div class="page_btns" style="display:none">
        <div class="btns_box">
          <a href="javascript:;" class="cur"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
    <Floating></Floating>
  </div>

</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import './js/carousel.js'
import Floating from '../common/Floating.vue'

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:0
    }
  },
  components: {
    HeaderTag, FooterTag,Floating
  },
  mounted:function(){
    document.title="首页 | 叮叮快修 全品类家庭维修互联网服务平台"
    var _this =this;
    /*换屏*/
    var $pages = $(".page_box");
    var $pageBtns = $(".page_btns a");
    var pageLen = $pages.length;
    var pageCur = 0;
    var changeTime = 500;
    var isChanging = false;
    var aniClass = "top_to_mid mid_to_top bot_to_mid mid_to_bot";

    function isCss3() {
      var style = document.createElement("div").style;
      for (var k in style) {
        if (k.toLowerCase().indexOf("animation") != -1) {
          return true;
        }
      }
      return false;
    };

    function changeCallback(idx) {
      $pages.eq(pageCur).removeClass("show");
      pageCur = idx;
      isChanging = false;
      _this.index = pageCur;
    }

    function pageChange(idx) {
      if (idx == pageCur) return;
      if (!isChanging) {
        isChanging = true;
        $pages.eq(idx).addClass("show");
        $pageBtns.removeClass("cur").eq(idx).addClass("cur");
        if (isCss3) {
          $pages.eq(idx).removeClass(aniClass);
          $pages.eq(pageCur).removeClass(aniClass);
          if (idx < pageCur) {
            $pages.eq(idx).addClass("top_to_mid");
            $pages.eq(pageCur).addClass("mid_to_bot");
          } else if (idx > pageCur) {
            $pages.eq(idx).addClass("bot_to_mid");
            $pages.eq(pageCur).addClass("mid_to_top");
          }
        } else {
          if (idx < pageCur) {
            $pages.eq(idx).css("top", "-100%").animate({
              top: "0"
            }, changeTime);
            $pages.eq(pageCur).css("top", "0").animate({
              top: "100%"
            }, changeTime);
          } else if (idx > pageCur) {
            $pages.eq(idx).css("top", "100%").animate({
              top: "0"
            }, changeTime);
            $pages.eq(pageCur).css("top", "0").animate({
              top: "-50%"
            }, changeTime);
          }
        }
        setTimeout(function(idx) {
          return function() {
            changeCallback(idx)
          };
        }(idx), changeTime);
      }
    }
    $(document).on("mousewheel DOMMouseScroll", function(event) {
      var sd = event.originalEvent.wheelDelta || event.originalEvent.detail * -1;
      if (sd > 0) {
        if (pageCur > 0) {
          pageChange((pageCur + pageLen - 1) % pageLen);
        }
      } else {
        pageChange((pageCur + 1) % pageLen);
      }
    });
    $(".pop_feedback").on("mousewheel DOMMouseScroll", function(event) {
      event.stopPropagation();
    });

    $pageBtns.on("mouseenter", function() {
      pageChange($pageBtns.index($(this)));
    });

    $(".ic_pagearr").click(function() {
        pageChange(1);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .HomePage{
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .product_wp,.page_wp {
      height: 100%;
      position: relative;
      overflow: hidden;
  }
  .page_box {
      position: absolute;
      top: 0;
      left: -9999px;
      width: 100%;
      height: 100%;
  }
  .page_box .content {
      position: absolute;
      top: 0;
      left: -9999px;
      width: 100%;
      height: 100%;
      background-color: #e0e0e0;
 /*     background-size: cover;*/
      background-size:cover;
      background-position: 50%;
      background-repeat:no-repeat;

  }
  .page_box.show {
      left: 0;
  }
  .page_box.show .content {
      left: 0;
  }
  .page_box .img1{
    /*padding-top: 200px;*/
    background-image: url('./images/z.png')
  }
  .page_box .img2{
    /*padding-top: 200px;*/
    background-image: url('./images/banner2.png')
  }
  .page_box .img3{
    /*padding-top: 200px;*/
    background-image: url('./images/y.png')
  }
  .page_box .img4{
    background-image: url('./images/banner4.png');
  }
  .page_box .img1 .desc,.page_box .img2 .desc,.page_box .img3 .desc{
    font-family: 'Microsoft YaHei';
    font-size: 30px;
    color:#333252;
    text-align: center;
    font-weight: 500;
  }

  .page_box .miniBox{
    width: 1180px;
    margin: 340px auto;
  }
  .page_box .spe{
    margin: 280px -180px;
  }
  .page_box .spe_two{
    margin-top: 120px;
  }
  .page_box .spe_four{
    margin-top: 200px;
    margin-left:50px;
  }
  .page_box .footerBox{
    position: absolute;
    bottom: 0;
    width: 100%;

  }
  .page_box .img4 .desc{
    font-family: 'Microsoft YaHei';
    font-size: 30px;
    color:#333252;
    font-weight: 500;
  }
  .page_btns {
      position: absolute;
      top: 0;
      right: 50px;
      height: 100%;
      z-index: 10;
  }

  .page_btns .btns_box {
      position: absolute;
      top: 50%;
      margin-top: -82px;
  }

  .page_btns .btns_box a {
      display: block;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      border-radius: 12px;
      margin-bottom: 25px;
  }

  .page_btns .btns_box a:hover,.page_btns .btns_box a.cur {
      background: #fff;
      box-shadow: 0 0 4px rgba(0,0,0,.5);
  }
  /*page change effect*/
  .top_to_mid{animation: top_to_mid .5s both;-webkit-animation: top_to_mid .5s both;}
  @keyframes top_to_mid{
    0%{transform: translate3d(0,-100%,0);}
    100%{transform: translate3d(0,0,0);}
  }
  @-webkit-keyframes top_to_mid{
    0%{-webkit-transform: translate3d(0,-100%,0);}
    100%{-webkit-transform: translate3d(0,0,0);}
  }
  .mid_to_top{animation: mid_to_top .5s both;-webkit-animation: mid_to_top .5s both;}
  @keyframes mid_to_top{
    0%{transform: translate3d(0,0,0);}
    100%{transform: translate3d(0,-100%,0);}
  }
  @-webkit-keyframes mid_to_top{
    0%{-webkit-transform: translate3d(0,0,0);}
    100%{-webkit-transform: translate3d(0,-100%,0);}
  }
  .bot_to_mid{animation: bot_to_mid .5s both;-webkit-animation: bot_to_mid .5s both;}
  @keyframes bot_to_mid{
    0%{transform: translate3d(0,100%,0);}
    100%{transform: translate3d(0,0,0);}
  }
  @-webkit-keyframes bot_to_mid{
    0%{-webkit-transform: translate3d(0,100%,0);}
    100%{-webkit-transform: translate3d(0,0,0);}
  }
  .mid_to_bot{animation: mid_to_bot .5s both;-webkit-animation: mid_to_bot .5s both;}
  @keyframes mid_to_bot{
    0%{transform: translate3d(0,0,0);}
    100%{transform: translate3d(0,100%,0);}
  }
  @-webkit-keyframes mid_to_bot{
    0%{-webkit-transform: translate3d(0,0,0);}
    100%{-webkit-transform: translate3d(0,100%,0);}
  }
  /*page change effect end*/

</style>
