<template>
  <div class="MessagePage">
	<div class="message">
		<div class="message_wrap">
			<p>找不到自己想要的信息？操作不够人性化？没有找到想要的维修服务？有更好的想法及建议？欢迎您随时提出，我们会不断优化和改善努力为您呈现更好的产品及服务，您的宝贵建议将是我们不断前进的宝贵财富，感谢您的支持</p>
			<div class="nd_center">
				<form>
					 <table>
					 	<tr>
					 		<td class="special">姓名：</td><td><input type="text" name=""></td>
					 	</tr>
					 	<tr>
					 		<td class="special">电话：</td><td><input type="text" name=""></td>
					 	</tr>
					 	<tr>
					 		<td class="special">邮箱：</td><td><input type="text" name=""></td>
					 	</tr>
					 	<tr>
					 		<td class="special content">内容：</td><td><textarea placeholder="请留下您宝贵意见，以便为您提供更好的服务（0/1000）"></textarea></td>
					 	</tr>
					 	<tr>
					 		<td></td><td><input type="submit" name="" class="sub"></td>
					 	</tr>
					 </table>
				</form>
			</div>
           
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'MessagePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MessagePage{
	width: 100%;
	background-color: #fafafa;
	padding-bottom: 40px;
}
.message {width: 1200px;
	margin: 0 auto;
}
.message .message_wrap p{
	font-size: 12px;
	color: #333333;
	font-family: 'Microsoft Yahei';
	text-align: center;
	width: 775px;
	margin: 0 auto;
	line-height: 24px;
	padding-top: 15px;
}
.message .message_wrap tr td{

font-size: 12px;
color: #333333;
font-family: 'Microsoft Yahei';
}
.message .message_wrap tr td input{
	width: 388px;
	height: 27px;
	border: 1px solid #cfcfcf;
	margin-bottom: 13px;
	background-color: #fafafa;
	padding-left: 6px;
}
.message .message_wrap tr .special{
	padding-bottom: 13px;
	padding-right: 10px;
}
.message .message_wrap tr .content{
    vertical-align: sub;
}
.message .message_wrap tr td  textarea{
	width: 388px !important;
	height: 166px;	
	margin-bottom: 16px;
	padding: 6px;
	background-color: #fafafa;					
}
.message .message_wrap tr td .sub{
	width: 100px;
	height: 32px;
	border: none;
	background-color: #f4ba1c;
	font-size: 12px;
	color: #ffffff;
	font-family: 'Microsoft Yahei'
}
.message .message_wrap .nd_center{margin-left: 380px;margin-top: 34px;}


</style>
