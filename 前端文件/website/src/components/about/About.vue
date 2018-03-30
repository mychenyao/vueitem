<template>
  <div class="AboutPage">
  	  	<HeaderTag page="about"></HeaderTag>
<!--   		<Focus></Focus> -->
      <div class="banner1">
         <div class="banner_content"></div>
      </div>
		<div class="tab">
			<div class="tab_title">
				<ul class="cf">
					<li v-bind:class="[value===0&&'cur']" v-on:click="value=0"><a href="javascript:;">企业介绍</a></li>
					<li v-bind:class="[value===1&&'cur']" v-on:click="value=1"><a href="javascript:;">加入我们</a></li>
					<li v-bind:class="[value===2&&'cur']" v-on:click="value=2"><a href="javascript:;">联系我们</a></li>
					<!-- <li v-bind:class="[value===3&&'cur']" v-on:click="value=3"><a href="javascript:;">留言建议</a></li> -->
					<li v-bind:class="[value===4&&'cur']" v-on:click="value=4"><a href="javascript:;">常见问题</a></li>
				</ul>
			</div>
			<div class="tab_box">
				<div v-if="value === 0">
					<LtdInfo></LtdInfo>
				</div>
				<div v-if="value === 1">
					<JoinUs></JoinUs>
				</div>
				<div v-if="value === 2">
					<ContactUs></ContactUs>
				</div>
				<div v-if="value === 3">
					<Message></Message>
				</div>
				<div v-if="value === 4">
					<FQA></FQA>
				</div>
			</div>
		</div>
	<!-- 	<Floating></Floating> -->
		<FooterTag></FooterTag>
  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
// import Focus from '../common/Focus.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'

import LtdInfo from './LtdInfo.vue'
import JoinUs from './JoinUs.vue'
import ContactUs from './ContactUs.vue'
import Message from './Message.vue'
import FQA from './FQA.vue'
export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:0
    }
  },
  mounted:function(){
  	document.title="关于叮叮 | 叮叮快修 全品类家庭维修互联网服务平台"
  },
  components: {
    HeaderTag,FooterTag,LtdInfo, JoinUs, ContactUs, Message, FQA,Floating
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.AboutPage .banner1{
  	position: relative;
  	height: 600px;
  	margin: 0 auto;
  }
.AboutPage .banner1 .banner_content{
	position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e0e0e0;
  	background-image: url(./picture/bn.png);
  	background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}
.tab .tab_title{
	border-bottom: 1px solid #fafafa;
}
.tab ul{
	/*width: 610px;*/
	width: 488px;
	margin: 0 auto;
}
.tab .tab_title li{
	float: left;
	width: 122px;
	height: 66px;
	line-height: 66px;
	color: #333;
	text-align: center;
}
.tab .tab_title a{
	font-family: 'Microsoft YaHei';
	font-size: 14px;
	color: #333;
}
.tab .tab_title .cur a{
	color: #ea5413;
}
</style>
