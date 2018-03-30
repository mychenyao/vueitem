$(function () {

    // 服务流程
    $("#process").on("click",function (e) {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".service-flow-one").siblings().addClass('active-x');
        $(".service-flow-one").removeClass('active-x');
    });
    // 费用标准
    $("#standard").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".service-flow-two").siblings().addClass('active-x');
        $(".service-flow-two").removeClass('active-x');
    });
    // 常见问题
    $("#faq").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".service-flow-three").siblings().addClass('active-x');
        $(".service-flow-three").removeClass('active-x');

    });
    // 服务区域
    $("#area").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');

    });



    // 手机维修
    $("#one-l").on("click",function () {
        $(this).parent().siblings('li').children("p").removeClass('active-b');
        $(this).addClass('active-b');
        $(".ser-three-con").eq(0).removeClass("active-x");
        $(".ser-three-con").eq(0).siblings(".ser-three-con").addClass("active-x")
    });
    // 家电维修
    $("#two-l").on("click",function () {
        $(this).parent().siblings('li').children("p").removeClass('active-b');
        $(this).addClass('active-b');
        $(".ser-three-con").eq(1).removeClass("active-x");
        $(".ser-three-con").eq(1).siblings(".ser-three-con").addClass("active-x")
    });
    // 家具维修
    $("#three-l").on("click",function () {
        $(this).parent().siblings('li').children("p").removeClass('active-b');
        $(this).addClass('active-b');
    });
    //卫浴洁具
    $("#four-l").on("click",function () {
        $(this).parent().siblings('li').children("p").removeClass('active-b');
        $(this).addClass('active-b');
    });
});