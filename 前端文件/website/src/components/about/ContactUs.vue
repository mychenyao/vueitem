<template>
  <div class="ContactUsPage">
  	<div class="contact_wrap">
  		<div class="map">
  			<div style="width:100%;height:401px;border:#ccc solid 1px;" id="dituContent"></div>
  		</div>
  	    <div class="com_infor">
  	    	<ul>
  	    		<li>
  	    			<h1 class="one">公司地址</h1>
  	    			<p>深圳市南山区科技南十二路28号康佳研发大厦B座7楼</p>
  	    		</li>
  	    		<li>
  	    			<h1 class="two">联系电话</h1>
  	    			<p>0755-36529881</p>
  	    		</li>
  	    		<li class="special_infor">
  	    			<h1 class="three">合作联系</h1>
  	    			<div class="infor_one">
  	    				<h2>企业合作</h2>
  	    				<ul>
                      <li>联系电话：4009991891</li>
                      <li>E-mail：yunying@177dd.cn</li>
  	    				</ul>
  	    			</div>
  	    		</li>
  	    	</ul>
  	    </div>
  	</div>


  </div>
</template>

<script>
import mapImg from "./picture/map.js"
export default {
  name: 'ContactUsPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App.'
    }
  },
  mounted:function(){
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContactUsPage{
  width: 100%;
	background-color: #fafafa;
}
.ContactUsPage .contact_wrap{
	width: 1200px;
	margin: 0 auto;
    padding-bottom: 40px;
}
.map{
	width: 1200px;
	height: 401px;
	margin: 0 auto;
}
.ContactUsPage .contact_wrap .com_infor{
	margin-top: 23px;
}
.ContactUsPage .contact_wrap .com_infor ul li h1{
	 font-size: 24px;
    color: #333;
    font-family: 'Microsoft YaHei';
    font-weight: normal;
   }
.ContactUsPage .contact_wrap .com_infor ul li .one{
	background: url(./picture/place.png) no-repeat;
	padding-left: 42px;
	background-position-y: 3px;
}
.ContactUsPage .contact_wrap .com_infor ul li .two{
	background: url(./picture/ph.png) no-repeat;
	padding-left: 42px;
	background-position-y: 3px;
}
.ContactUsPage .contact_wrap .com_infor ul li .three{
	background: url(./picture/cooperation.png) no-repeat;
	padding-left: 42px;
	background-position-y: 3px;
}
.ContactUsPage .contact_wrap .com_infor ul li p{
	  font-size: 20px;
    color: #666666;
    font-family: 'Microsoft YaHei';
    margin-left: 44px;
    margin-bottom: 25px;

}
.ContactUsPage .contact_wrap .com_infor .special_infor div{
display: inline-block; width: 350px;
margin-top: 5px;
}
.infor_one{margin-left: 50px;}
.ContactUsPage .contact_wrap .com_infor .special_infor h2{
	font-size: 20px;
    color: #333;
    font-family: 'Microsoft YaHei';
    font-weight: normal;
}
.ContactUsPage .contact_wrap .com_infor .special_infor ul li{
	   font-size: 20px;
    color: #666;
    font-family: 'Microsoft YaHei';
    font-weight: normal;
    line-height: 37px;
}
/*.ContactUsPage .contact_wrap .com_infor .special_infor{margin-left: 50px;}*/
</style>
