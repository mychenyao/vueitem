<template>
  <div class="FQAPage">
	<div class="fqa_content">
		<h1>问叮叮？</h1>
		<div class="question_content">
			<ul>
				<li>
					<div class="one_wrap"><p  class="one_p">维修后的电脑有保障吗？</p></div>
					<div class="two_wrap">
						<p>答：叮叮维修对维修设备均有质保承诺，即维修之日起三个月内，叮叮维修对所修设备都将提供免费维修。</p>
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">下完单又不想修了要收费吗？</p></div>
					<div class="two_wrap">
						<p>答：师傅上门前一小时，您随时可取消订单；师傅上门后，非师傅
                        技能原因用户取消订单的，则需收取30元的上门费。</p>
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">微信支付余额不足时，如何进行支付？</p></div>
					<div  class="two_wrap">
						<p>答：目前平台不支持微信支付+第三方组合支付的方式支付，如当
                        零钱余额不足时，请您先进行余额充值后再进行下一步支付。</p>
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">高空作业费如何收取？</p></div>
					<div class="two_wrap">
						<p>答：四层及以上楼层，高空作业时需要在墙外吊人、吊车时悬空操作
                        的，需要收取高空费100元/台；施工点在阳台、平台上，安全条件好、
                        施工难度较小的情况下无需收费；</p>
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">下单后师傅多久会与我取得联系？</p></div>
					<div class="two_wrap">
						<p>答：下单后师傅会在接收订单后半个小时以内与您联系，并确认
                        订单信息。</p>
					</div>
				</li>
			</ul>
		<!-- 	<div class="bottom"><a href="">下单流程体验不佳？反馈给我们&gt;&gt;&gt;</a></div> -->
		</div>

	</div>
  </div>
</template>

<script>
export default {
  name: 'FQAPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
  	// $(".question_content li").unbind();
  	$(".question_content li").click(function(){
  		$(this).find(".one_p").addClass("active")
  	    $(this).find(".two_wrap p").show();
  	    $(this).siblings().find(".two_wrap p").hide();
  	    $(this).siblings().find(".one_p").removeClass("active");
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FQAPage{
	background-color: #fafafa;
}
.FQAPage .fqa_content{
	width: 1200px;margin: 0 auto;
}
.FQAPage .fqa_content h1{
	text-align: center;
	font-weight: normal;
	font-size: 24px;
	line-height: 24px;
	padding:22px 0;
    color: #ea5413;
}
.FQAPage .fqa_content .question_content .one_p{
	font-size: 14px;
	color: #333333;
	background:url(./picture/blue.png) no-repeat;
	width: 520px;
	height: 32px;line-height: 32px;
	padding-left: 34px;
	margin-left: 25px;
    background-position: 2px;
    cursor: pointer;
}
.FQAPage .fqa_content .question_content .one_p.active{
	background:url(./picture/orange.png) no-repeat;
    background-position-y: 5px;
}
.FQAPage .fqa_content .question_content .one_wrap{
	background-color: #dddddd;
	width: 520px;
	margin-bottom: 10px;
}
.FQAPage .fqa_content .question_content .two_wrap p{
	display: none;
	width: 498px;
    line-height: 30px;
    font-size: 16px;
    color:#333;
    margin: 12px 0;
    padding-left: 22px;

}
.FQAPage .fqa_content .question_content {
	margin-left: 340px;
	padding-bottom: 40px;
}
.FQAPage .fqa_content .question_content .bottom a{
	color: #5db8d8;
	font-size: 14px;
	width: 520px;
	text-align: right;
    display: block;
}

</style>
