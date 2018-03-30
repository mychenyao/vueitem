<template>
  <div class="RecruitPage" ref="master">
  	<HeaderTag page="recruit"></HeaderTag>
  	<div class="banner1">
  	   <div class="banner_content">
       </div>
  	</div>
    <div class="provide">
      <div class="main">
        <div class="cap">
          <div class="provide-one">
            <p class="tip">MAINTENANCE ENGINEER</p>
          </div>
          <div class="provide-two">
            <p>我们为维修工程师提供</p>
          </div>
          <div class="provide-three">
            <div class="pr-top">
              <div class="term">
                <div class="ts">
                  <img src="./img/sr.png" alt="">
                </div>
                <div class="contents">
                  <p class="bt">
                    零成本高收入
                  </p>
                  <p class="wb">
                    科学的奖励机制，完善的福利待遇；海量订单，能者多得。
                  </p>
                </div>
              </div>
              <div class="term">
                <div class="ts">
                  <img src="./img/dw.png" alt="">
                </div>
                <div class="contents">
                  <p class="bt">
                    专业技术支持
                  </p>
                  <p class="wb">
                    GPS定位，智能就近分配工单，上门地址精确易寻，工作更高效。
                  </p>
                </div>
              </div>
              <div class="term">
                <div class="ts">
                  <img src="./img/xz.png" alt="">
                </div>
                <div class="contents">
                  <p class="bt">
                    高效团队协作
                  </p>
                  <p class="wb">“互联网+”运营模式，客服中心服务支持，线上线下协同作业。
                  </p>
                </div>
              </div>
            </div>
            <div class="pr-bot">
              <div class="term">
                <div class="ts">
                  <img src="./img/jd.png" alt="">
                </div>
                <div class="contents">
                  <p class="bt">
                    手机快速接单
                  </p>
                  <p class="wb">
                    颠覆传统接单模式，手机APP移动接单；个人信息、用户订单便捷管理。
                  </p>
                </div>
              </div>
              <div class="term">
                <div class="ts">
                  <img src="./img/wx.png" alt="">
                </div>
                <div class="contents">
                  <p class="bt">
                    职业技能培训
                  </p>
                  <p class="wb">
                    系统性岗前培训，提升职业技能及服务能力，树立专业、可靠的服务形象。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="bannertwo">
      <div class="banner_con">
        <div class="main">
          <div class="banner_contop">
            <p>O2O模式颠覆维修行业传统接单模式</p>
          </div>
          <div class="banner_concon">
            <p>月薪过万很简单</p>
          </div>
          <div class="banner_conbot">

          </div>
        </div>
      </div>
    </div>

    <div class="cooperation">

      <div class="tianjia">
        <div class="radio">
          <span class="personal" @click="show(1)" :class="shows?xuan:''">个人加入</span>
          <span class="team" @click="show(2)" :class="!shows?xuan:''">团队加入</span>
        </div>
        <div class="jjj">
          <RecruitP  v-on:xianshi="a"  v-show="shows"></RecruitP>
          <RecruitT v-on:xianshi="a" v-show="!shows"></RecruitT>
        </div>
        <div class="erw">
          <img src="./img/erer.png" alt="">
          <p>扫码关注 订单享不停</p>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

 	<Floating></Floating>
	<FooterTag></FooterTag>
  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'
import RecruitP from '../../page/RecruitPersonal/RecruitP.vue'
import RecruitT from '../../page/RecruitPersonal/RecruitT.vue'

export default {
	data() {
		return {
      value: '',
      shows:true,
     	xuan:"active",
      xianshi:true
		}
	},
  created(){
    let url1=this.$apidomain+"/findlabelbusinessoptions";
    this.$http.get(url1).then(r=>{
      let data=r.data;
      this.labeloptions2 = this.shallowCopy(data.result);
      this.teamlabeloptions2 = this.shallowCopy(data.result);
    }).catch(function (error) {
//          console.log(error);
        });

    let url=this.$apidomain+"/findcitylistareainfo";
    this.$http.get(url).then(r=>{
      let data=r.data;
      data.result.forEach((v)=>{
        this.city.SourceType.push({"id":v.id,"value":v.name});
        this.teamcity.SourceType.push({"id":v.id,"value":v.name});
      })
    }).catch(function (error) {
//          console.log(error);
        });
  },
  methods:{
    a(el){
      this.xianshi=el;
    },
    show(index) {
      if(index==1){
        this.shows=true;
//        document.querySelector(".el-cascader__label").innerHTML=''
      }else{
        this.shows=false;
      }
    },
    xian(index) {
      this.xianshi=false;
      if(index==0){
        let step=0,tim;
        tim=setInterval(()=>{
          step+=30;
          if(step>=540){
            clearInterval(tim);
          }else{
            window.scrollTo(0,step)
          }
        },15)
      }
//      window.scrollTo(0,540);
    }
  },

	mounted: function() {

		document.title="叮叮快修-全品类家庭维修服务_家电家居维修_维修手机_维修电脑_维修空调"
	},
  	components: {
    	HeaderTag,FooterTag,Floating,RecruitP,RecruitT
  	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jjj{
    float: left;
  }
  .erw{
    float:right;
    width: 177px;
    height: 177px;
    /*margin-top: 60px;*/
    margin-right: 50px;
  }
  .erw img{
    width: 177px;
    height: 177px;
  }
  .erw p{
    width: 177px;
    text-align: center;
    font-size: 18px;
    color: #1c1c1c;
  }
  .clearfix:after{
    visibility:hidden;
    clear:both;
    display:block;
    content:".";
    height:0
  }
  .tianjia{
    text-align: left;
    float: left;
    width: 648px;
  }
  .radio{
    float: right;
    width: 622px;
    display:block;
    border-bottom:1px solid #f4531c;
    background-color: #fff;
    margin-bottom: 47px;
  }
  .radio span{
    display: inline-block;
    width:120px;
    float: left;
    text-align: center;
    height:44px;
    font-size: 16px;
    line-height: 44px;
    cursor: pointer;
    background-color: #bfbfbf;
    color: #000;
  }
  .radio .active{
    color: #fff;
    background:#f4531c;
  }
  .cooperation{
    margin: 0 auto;
    width: 648px;
    background: #fff;
  }
	.RecruitPage .banner1{
	  /*position: relative;*/
	  width: 100%;
    min-width: 1200px;
	  margin: 0 auto;
    /*padding-bottom: 40px;*/
  }
	.RecruitPage .banner1 .banner_content{
	    /*position: absolute;*/
      width: 100%;
      /*padding-top: 40px;*/
      height:468px;
    /*padding-bottom: 40px;*/
	    /*top: 0;*/
	    /*left: 0;*/
	    /*right: 0;*/
	    /*bottom: 0;*/
	    background-color: #e0e0e0;
	    background-image: url('./img/banner.jpg');
	    background-repeat: no-repeat;
	    background-size: cover;
	    background-position: center;
	}
	.join_us{
		height: 440px;
		background-color: #f6f6f6;
	}
	.same_top .mini_width{
		width: 1200px;
		margin:0 auto;
	}
	.same_top .top h1{
		font-family: 'Microsoft YaHei';
		font-size: 24px;
		line-height: 24px;
		padding-top: 20px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.same_top .top p{
		font-family: 'Microsoft YaHei';
		font-size: 16px;
		line-height: 35px;
		color: #666;
		text-align: center;
	}
	.join_us ul{
		margin-top: 30px;
		margin-left:10px;
	}
	.join_us ul li{
		float: left;
		width: 278px;
		height: 239px;
		margin-right: 20px;
		border: 1px solid #ddd;
		background-color: #fff;
	}
	.join_us ul li.last{
		margin-right: 0;
	}
	.join_us ul li img{
		display: block;
		margin: 10px auto;
	}
	.join_us ul li h2{
		font-family: 'Microsoft YaHei';
		font-size: 20px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.join_us ul li p{
		font-family: 'Microsoft YaHei';
		font-size: 14px;
		line-height: 20px;
		color: #666;
		text-align: center;
	}
	.flow{
		height:350px;
		background-color: #fff;
	}
	.flow .qr .step{
		width: 1180px;
		height: 47px;
		margin:40px 10px 20px 10px;
		background: url(img/flow.png) no-repeat;
	}
	.flow .qr h1{
		font-family: 'Microsoft YaHei';
		font-size: 24px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.flow .qr p{
		font-family: 'Microsoft YaHei';
		font-size: 16px;
		color: #333;
		text-align: center;
	}
	.flow .qr .qrpic{
		width: 260px;
		height: 60px;
		margin: 10px auto 10px;
		text-align: center;
    line-height: 60px;
    font-size: 22px;
    color: #fff;
    background: #ea5413;
    border-radius: 10px;
	}
  .cap{
    width: 100%;
    margin-top: 79px;
  }
  .tip{
    font-size: 24px;
    color: #f4531c;
    text-align: center;
    /*font-family:Nunito-Regular;*/
  }
  .provide{
    margin-bottom: 100px;
  }
  .provide-one{
    margin-bottom: 23px;
  }
  .provide-two p{
    font-size: 20px;
    /*font-weight: 600;*/
    color: #4c4c4c;
    text-align: center;
  }
  .provide-two{
    margin-bottom:63px;
  }
  .provide-three{
    width: 100%;
  }
  .term{
    width: 388px;
    box-sizing: border-box;
    padding-top: 50px;
    height: 214px;
    background: url("./img/masterbg.png") no-repeat;
    float: left;
    margin-right: 17px;
  }
  .term:last-child{
    margin-right: 0;
  }
  .term div{
    float: left;
  }
  .term .ts{
    width: 108px;
    height: 100%;
    text-align: center;
  }
  .term .contents{
    width: 238px;
  }
  .term .contents .bt{
    height: 30px;
    line-height: 30px;
    color: #f4531c;
    font-size: 22px;
  }
  .term .contents .wb{
    line-height: 28px;
    color: #5b5b5b;
    font-size: 20px;
  }
  .pr-bot{
    padding-left: 200px;
  }
  .bannertwo{
    /*position: relative;*/
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    padding-bottom: 63px;

  }
  .banner_con{
    box-sizing: border-box;
    padding-top: 55px;
  }
  .bannertwo .banner_con{
    /*position: absolute;*/
    width: 100%;
    /*padding-top: 40px;*/
    height:499px;
    /*padding-bottom: 40px;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    background-color: #e0e0e0;
    background-image: url(./img/jdbj.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .banner_contop p{
    width: 100%;
    text-align: center;
    color: #4c4c4c;
    font-size: 20px;
  }
  .banner_contop{
    margin-bottom: 20px;
  }
  .banner_concon p{
    width: 100%;
    text-align: center;
    color: #1b1b1b;
    font-size: 24px;
   }
  .banner_concon{
    margin-bottom: 60px;
  }
  .banner_conbot{
    width:1083px;
    margin: 0 auto;
    height: 248px;
    background: url("./img/jdlc.png") no-repeat;
  }
</style>
