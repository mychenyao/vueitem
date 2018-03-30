$(function () {
    //地图
    var mapImg={mapImg:'data:image/png;base64,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'}

    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }

    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.963226,22.544777);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        map.panBy(305,165);
        window.map = map;//将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }

    //标注点数组
    var markerArr = [{title:"深圳叮叮科技有限公司",content:"深圳市南山区科技南十二路28号康佳研发大厦B座7楼",point:"113.96381|22.545236",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
    ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor:"#808080",
                color:"#333",
                cursor:"pointer"
            });

            (function(){
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close",function(){
                    _marker.getLabel().show();
                })
                label.addEventListener("click",function(){
                    _marker.openInfoWindow(_iw);
                })
                if(!!json.isOpen){
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon(mapImg.mapImg, new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }

    initMap();//创建和初始化地图


    // 公司介绍
    $("#company_introduction").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".introduce").removeClass("active-none");
        $(".introduce").siblings('div').addClass("active-none")
    });
    // 加入我们
    $("#join_us").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".join").removeClass("active-none");
        $(".join").siblings('div').addClass("active-none")
    });
    // 联系我们
    $("#contact_us").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".contact-b").removeClass("active-none");
        $(".contact-b").siblings('div').addClass("active-none")
    });
    // 新闻咨询
    $("#company_news").on("click",function () {
        $(this).parent().siblings('li').children("a").removeClass('active-a');
        $(this).addClass('active-a');
        $(".new").removeClass("active-none");
        $(".new").siblings('div').addClass("active-none")
    });

    //招聘详情页
    $("#recruit>ul>li").on("click",function () {
        $(".join-three-one").addClass("active-none");
        $(".join-three-two").removeClass("active-none");
    });
    //返回招聘列表
    $("#back").on("click",function () {
        $(".join-three-two").addClass("active-none");
        $(".join-three-one").removeClass("active-none");
    });

    //公司新闻
    $("#new-li").on("click",function () {
        $(this).addClass("active-bbb");
        $("#new-wa").removeClass("active-bbb");
        $(".newcompany").removeClass("active-none");
        $(".newindustry").addClass("active-none");
    });

    //行业资讯
    $("#new-wa").on("click",function () {
        $(this).addClass("active-bbb");
        $("#new-li").removeClass("active-bbb");
        $(".newindustry").removeClass("active-none");
        $(".newcompany").addClass("active-none");
    });

    //点击新闻弹出详情页面
    $(".newcompany>ul>li").on("click",function () {
        $(".news").addClass("active-none");
        $(".newdetail").removeClass("active-none");
    });

    $(".newindustry>ul>li").on("click",function () {
        $(".news").addClass("active-none");
        $(".newdetail").removeClass("active-none");
    });

    //点击返回新闻列表
    $("#back-b").on("click",function () {
        $(".newdetail").addClass("active-none");
        $(".news").removeClass("active-none");
    });


});