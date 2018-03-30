<template>
  <div class="LtdInfoPage">
	<div class="company_infor">
	    <div class="bg_pict"></div>
	    <div class="letter_wrap">
	        <div class="letter_list">
		    	<ul>
		    		<li>
		    			<h1>平台简介</h1>
		    			<p>叮叮快修是以互联网思维和商业模式，汇集中国城市居民日常维修服务需求，整合线下零散维修资源，为用户提供一站式上门维修服务，为师傅提供线上接单创造收益，为社区居民提供解决日常家居维修的信息服务平台。</p>
		                <p>在叮叮快修，用户可以随时随地下单预约家居维修师傅；而专业的师傅入驻后也可以接到更多的订单，为用户提供便捷满意的服务的同时还能增加收入。叮叮快修现已与华侨城物业、华润物业等众多品牌物业达成战略合作，致力为业主、租房客及商业地产客户提供更加优质、高效、放心的上门维修服务。</p>
		    		</li>
		    		<li>
		    			<h1>经营理念</h1>
		    			<p>送高品质服务上门，让便捷与安全同行，诚信负责，追求卓越</p>
		    		</li>
		    		<li>
		    			<h1>使命</h1>
		    			<p>标准的服务，合理的价格，专业的技能，诚恳的态度，为所有家庭提供上门安装维修一条龙服务</p>
		    		</li>
		    		<li>
		    			<h1>愿景</h1>
		    			<p>服务每个家庭，让生活更舒心</p>
		    		</li>
		    		<li>
		    			<h1>价值观</h1>
		    			<p>至诚至信，客户为先，创新发展，合作共赢</p>
		    		</li>
		    		<li>
		    			<h1>我们的合作伙伴</h1>
		    			<div class="parter_list cf">
		    				<span><img src="./picture/vanke.png"></span>
		    				<span><img src="./picture/super.png"></span>
		    				<span><img src="./picture/town.png"></span>
                <span><img src="./picture/wanke.png"></span>
<!-- 		    				<span><img src="./picture/vanke.png"></span>
		    				<span><img src="./picture/super.png"></span>
		    				<span><img src="./picture/town.png"></span> -->
		    			</div>
		    		</li>
		    	</ul>
	    </div>

	   </div>

	</div>
  </div>
</template>

<script>
export default {
  name: 'LtdInfoPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to
 this component only -->
<style scoped>
.LtdInfoPage .company_infor .bg_pict{
	height: 260px;
	margin:0 auto;
	background: url(./picture/pc.jpg) no-repeat;
    background-position: 50%;
}
.LtdInfoPage .company_infor .letter_list ul li h1{
	height: 60px;
	line-height: 60px;
	font-size: 24px;
	font-family: 'Microsoft YaHei';
	color: #333;font-weight: normal;
	background: url(picture/line.png) no-repeat;padding-left: 15px;}
.LtdInfoPage .company_infor .letter_list ul li p{
	font-size: 14px;
	font-family: 'Microsoft YaHei';
	color: #333;
	line-height: 30px;
}
.LtdInfoPage .company_infor .letter_wrap {
    width: 100%;
    margin-bottom: 40px;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list {
    width: 1200px;
    margin: 0 auto;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list ul {
	margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list ul p {
    margin-left: 17px;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list ul li {
    margin-bottom: 10px;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list ul li .parter_list {
    margin-top: 18px;
}

.LtdInfoPage .company_infor .letter_wrap .letter_list ul li .parter_list span {
    display: block;
    float: left;
    margin-right: 10px;
}
</style>
