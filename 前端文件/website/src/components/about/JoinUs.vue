<template>
  <div class="JoinUsPage">
	<div class="joinus"></div>
	<div class="target"><a href="http://jobs.51job.com/all/co4633567.html" target="_blank">前往招聘首页</a></div>
  </div>
</template>

<script>
export default {
  name: 'JoinUsPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.JoinUsPage .joinus{
	height: 400px;
	background: url(./picture/joinus.png) no-repeat;
	margin: 0 auto;
	background-size: cover;
    background-position: 50%;
}
.JoinUsPage .target a{display: block;
	background: url(./picture/submit.png) no-repeat;
	width: 280px;
	height: 80px;
	margin:0 auto;
	margin-top: 40px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	line-height: 80px;
	margin-bottom: 40px;
}
</style>
