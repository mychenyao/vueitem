
$(function(){

	var banner_i = 0;
    var banner_temp ;
    
    $("#place-order").on("click",function () {
        window.location.href="http://www.pre.dingdingkuaixiu.com/#/order";
        // window.location.href="http://www.dingdingkuaixiu.com/#/order";
    });

    // 招募
    $("#recruit").on("click",function () {
        window.location.href="http://www.pre.dingdingkuaixiu.com/#/recruit";
        // window.location.href="http://www.dingdingkuaixiu.com/#/recruit";
    });
    $(".join").on("click",function () {
        window.location.href="http://www.pre.dingdingkuaixiu.com/#/recruit";
        // window.location.href="http://www.dingdingkuaixiu.com/#/recruit";
    });

    // 新闻切换
    $("#new-li").on("click",function () {
        $(".img-two").addClass("yc");
        $(".img-one").removeClass("yc");
        $(".news-one").css("display","block");
        $(".news-two").css("display","none");
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $("#new-wa").on("click",function () {
        $(".img-one").addClass("yc");
        $(".img-two").removeClass("yc");
        $(".news-one").css("display","none");
        $(".news-two").css("display","block");
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    //banner 轮播
    
    //开始显示第一张
    $(".banner-list li").eq(0).show().siblings(".banner-list li").hide();
    //调轮播的方法
    showbanner();
    
    //轮播的方法
	function showbanner(){
		banner_temp = setInterval(function(){
			showBnt();
			banner_i++;
			if(banner_i == $(".banner-list li").size()){
				banner_i = 0;
			}
		},3000)
	};
	
	//点击下面的小点轮播跟着变换
	function showBnt(){
		$('.banner-list li').eq(banner_i).fadeIn(300).siblings('.banner-list li').fadeOut(300);
		
//		$('.banner-bnt li').eq(banner_i).addClass('banner-bntActive').siblings('.banner-bnt li').removeClass('banner-bntActive');
	}
    
	//  轮播的小点
	//  $('.banner-bnt li').hover(function(){
	//  	banner_i  = $(this).index();
	//  	showBnt();
	//  	clearInterval(banner_temp);
	//  },function(){
	//  	 showbanner();
	//  });
    
	//鼠标点击左侧的箭头
	$('.banner-leftImg').on("click",function(){
        clearInterval(banner_temp );
	    if(banner_i  == 0){
	       banner_i  = $(".banner-list li").size();
	    }
	    banner_i--;
	    showBnt();
	    showbanner();
	});
	   
	//鼠标点击右侧的箭头
	$('.banner-rightImg').on("click",function(){
	    clearInterval(banner_temp );
	    if(banner_i == $(".banner-list li").size()-1){
	       banner_i  = -1;
	    }
	    banner_i++;
	    showBnt();
	    showbanner();
	});

    
    
}) 
    // 下单
    

    // $("#home").on("click",function () {
    //     $(this).parent().siblings('li').children("a").removeClass('active');
    //     $(this).addClass('active');
    //     // var height=$(".one").offset().top;
    //     var step=0,tim;
    //     tim=setInterval(function () {
    //         step-=30;
    //         if(step<=0){
    //             clearInterval(tim);
    //         }else{
    //             window.scrollTo(0,step)
    //         }
    //     },15)
    // });

// nav滚动到相应的位置
//     我们的服务
//     $("#service").on("click",function () {
//         $(this).parent().siblings('li').children("a").removeClass('active');
//         $(this).addClass('active');
//         var height=$(".one").offset().top;
//         var step=0,tim;
//         tim=setInterval(function () {
//             step+=30;
//             if(step>=height){
//                 window.scrollTo(0,height);
//                 clearInterval(tim);
//             }else{
//                 window.scrollTo(0,step)
//             }
//         },15)
//     });

//     关于叮叮
//     $("#about").on("click",function () {
//         $(this).parent().siblings('li').children("a").removeClass('active');
//         $(this).addClass('active');
//         var height=$(".four").offset().top;
//         var step=0,tim;
//         tim=setInterval(function () {
//             step+=30;
//             if(step>=height){
//                 window.scrollTo(0,height);
//                 clearInterval(tim);
//             }else{
//                 window.scrollTo(0,step)
//             }
//         },15)
//     });
//     工程师招募
//     $("#enlist").on("click",function () {
//         $(this).parent().siblings('li').children("a").removeClass('active');
//         $(this).addClass('active');
//         var height=$(".repair-three").offset().top;
//         var step=0,tim;
//         tim=setInterval(function () {
//             step+=30;
//             if(step>=height){
//                 window.scrollTo(0,height);
//                 clearInterval(tim);
//             }else{
//                 window.scrollTo(0,step)
//             }
//         },15)
//     });
//     预约维修
//     $("#subscribe").on("click",function () {
//         $(this).parent().siblings('li').children("a").removeClass('active');
//         var height=$(".two").offset().top;
//         var step=0,tim;
//         tim=setInterval(function () {
//             step+=30;
//             if(step>=height){
//                 window.scrollTo(0,height);
//                 clearInterval(tim);
//             }else{
//                 window.scrollTo(0,step)
//             }
//         },15)
//     });

//footer 滚动到相应的位置
    //     我们的服务
    // $("#service-footer").on("click",function () {
    //     var height=$(".one").offset().top;
    //     var wheight=$(document).scrollTop();
    //     // console.log(wheight);
    //     var step=0,tim;
    //     tim=setInterval(function () {
    //         wheight-=30;
    //         if(wheight<=height){
    //             window.scrollTo(0,height);
    //             clearInterval(tim);
    //         }else{
    //             window.scrollTo(0,wheight)
    //         }
    //     },15)
    // });

    //     关于叮叮
    // $("#about-footer").on("click",function () {
    //     var height=$(".four").offset().top;
    //     var wheight=$(document).scrollTop();
    //     // console.log(wheight);
    //     var step=0,tim;
    //     tim=setInterval(function () {
    //         wheight-=30;
    //         if(wheight<=height){
    //             window.scrollTo(0,height);
    //             clearInterval(tim);
    //         }else{
    //             window.scrollTo(0,wheight)
    //         }
    //     },15)
    // });

    //     工程师招募
    // $("#enlist-footer").on("click",function () {
    //     var height=$(".repair-three").offset().top;
    //     var wheight=$(document).scrollTop();
    //     var step=0,tim;
    //     tim=setInterval(function () {
    //         wheight-=30;
    //         if(wheight<=height){
    //             window.scrollTo(0,height);
    //             clearInterval(tim);
    //         }else{
    //             window.scrollTo(0,wheight)
    //         }
    //     },15)
    // });
//     预约维修
//     $("#subscribe-footer").on("click",function () {
//         var height=$(".two").offset().top;
//         var wheight=$(document).scrollTop();
//         var step=0,tim;
//         tim=setInterval(function () {
//             wheight-=30;
//             if(wheight<=height){
//                 window.scrollTo(0,height);
//                 clearInterval(tim);
//             }else{
//                 window.scrollTo(0,wheight)
//             }
//         },15)
//     });


