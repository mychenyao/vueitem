$(function () {
    // header 跳转

    // 首页
    $("#home").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
        window.location.href="index.html"
    });

    // 关于叮叮
    $("#about").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
        window.location.href="about.html"
    });

    // 帮助
    $("#help").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
        window.location.href="help.html"
    });

    // 工程师招募
    $("#enlist").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
        window.location.href="http://www.pre.dingdingkuaixiu.com:85/recruit";
    });

    // 预约维修
    $("#subscribe").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        window.location.href="http://www.pre.dingdingkuaixiu.com:85/order";
    });

    // 加盟合作
    $("#league").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
        window.location.href="http://www.pre.dingdingkuaixiu.com:85/login";
    });

    //我们的服务
    $("#service").on("click",function (e) {
        //跳转首页 再跳到指定位置
        window.location.href="index.html#two";
        $(this).parent().siblings('li').children("a").removeClass('active');
        $(this).addClass('active');
    });

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

    //返回顶部
    $("#backtop").on("click",function () {
        window.scrollTo(0,0);
    })

    // --------------------------------------------------------------------------
    // fotter 跳转

    // // 首页
    // $("#home-footer").on("click",function () {
    //     window.location.href="index.html"
    // });
    //
    // // 关于叮叮
    // $("#about-footer").on("click",function () {
    //     window.location.href="about.html"
    // });
    //
    // // 帮助
    // $("#help-footer").on("click",function () {
    //     window.location.href="help.html"
    // });
    //
    // // 工程师招募
    // $("#enlist-footer").on("click",function () {
    //     window.location.href="http://www.testdist.dingdingkuaixiu.com/#/recruit";
    // });
    //
    // // 预约维修
    // $("#subscribe-footer").on("click",function () {
    //     window.location.href="http://www.testdist.dingdingkuaixiu.com/#/order";
    // });
    //
    // // 加盟合作
    // $("#league-footer").on("click",function () {
    //     window.location.href="http://www.testdist.dingdingkuaixiu.com/#/Login";
    // });





});