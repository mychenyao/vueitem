<template>
  <div class="OrderPage" style="background:#F1F0F0;">
    <HeaderTag page="order"></HeaderTag>
     <div id="box">
            <div id="OrderBox">
        <dl>
              <div>
                  <dt><img src="/static/images/1.png" /></dt>
                  <dd>在线预约</dd>
              </div>
              <div>
                  <dt><img src="/static/images/2.png" /></dt>
                  <dd>专业服务</dd>
              </div>
              <div>
                  <dt><img src="/static/images/3.png" /></dt>
                  <dd>原厂品质</dd>
              </div>
              <div>
                  <dt><img src="/static/images/4.png" /></dt>
                  <dd>费用透明</dd>
              </div>
              <div>
                  <dt><img src="/static/images/5.png" /></dt>
                  <dd>超长质保</dd>
              </div>
          </dl>
     </div>
     <!--  <ul id="OrderList">
         <li v-for="(item,index) in orderList"
          @click="orderListClick(item,index)"
          :class="{OrderListActive:orderListIndex==index}">{{item}}<div></div></li>
      </ul> -->
      <div class="OrderBoxDetail">
         <ul id="OrderList">
            <li v-for="(item,index) in orderList"
              @click="orderListClick(item,index)"
              :class="{OrderListActive:orderListIndex==index}">{{item.name}}<div></div></li>
          </ul>

          <div id="OrderDetail">
              <div id="OrderDetail1">
                   <ul>
                      <li v-for="(item1,index1) in shangpingList" @click="shangpingList1(item1,index1)">
                          <img :src="item1.f">
                          <span>{{item1.b}}</span>
                      </li>
                  </ul>
              </div>
             <div id="OrderDetai2" @click="detailClick">
                <span></span>
                <span></span>
                <span></span>
                <p>更多</p>
             </div>

          </div>
          <div id="OrderLiuCheng">
             <p><img src="/static/images/fuwu.png" alt="服务流程">服务流程</p>
              <div>
                <img src="/static/images/zu.png" alt="服务流程">
              </div>

          </div>

      </div>

     </div>
    <FooterTag></FooterTag>
    <Floating></Floating>

  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'


export default {
  name: 'OrderPage',
  data () {
    return {
      orderList:[{name:"手机维修",id:"003"},{name:"家电维修",id:"002"},{name:"家具维修",id:"004"},{name:"卫浴洁具",id:"008"}],
      orderListIndex : 0 , //维修类型
      shangpingList:null , //商品类型列表
      itemId:"003"
    }

  },
  components: {
    HeaderTag, FooterTag, Floating
  },
  created(){
    //初始化商品数据显示
     this.getData("003");

  },
  methods:{

    // 获取商品列表数据
    getData(id){
      console.log(id)
        this.$http.get(`${affirmOrderApiDomain}/articleinfo/findlabelbusinessbyflabel?id=${id}`).then((res)=>{
         this.shangpingList = res.data.result.beans
       })
    },
    //点击前几张图片
    shangpingList1(item1,index1){
        this.$router.push({path:"/SingleProcess/"+this.itemId+"?id="+item1.a})

    },
    orderListClick(item,index){ //点击当前维修类型
      console.log(item.id)
       this.orderListIndex = index;
       this.itemId =item.id;
       this.getData(this.itemId);
    },
    //更多
    detailClick(){
       this.$router.push({path:"/SingleProcess/"+this.itemId})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @media(max-width:960px) {
    /* 网页全屏显示 */
    body {
      width: 100%;
    }

    /* 正文全屏显示 */
    .OrderPage {
      width: 100%
    }
  }
    .OrderPage{
    min-width: 1200px;
    margin: 0 auto;
  }
  #box{
    width:1200px;
    background:#F6F6F6;
    margin: 0 auto;
  }

  #OrderBox{
    width: 1200px;
     margin: 0 auto;
    height: 194px;
    background: #ffffff;
    margin-bottom: 50px;
    dl{
        width: 1200px;
        background: #fafafa;
        margin: 0 auto;

      div{
        margin-top: 65px;
          width: 80px;
          float: left;
          text-align: center;
          margin-left: 136px;
          dt{
              margin-bottom: 17px;
              img{
                width: 40px;
                height: 40px;
              }
          }
          dd{
            color: #717171;
            font-size: 16px;

          }
      }

    }

  }
  .OrderBoxDetail{
        width:1200px;
        height: 756px;
        background:#F6F6F6;
        margin:0 auto;
      #OrderList{
        width: 1200px;
        margin: 0 auto;
        height: 63px;
        display: -webkit-flex;
        border-bottom: 1px solid #f4531c;

      li{
        flex: 1;
        line-height: 63px;
        text-align: center;
        color: #4c4c4c;
        font-size: 22px;
        font-family: "微软雅黑";
        cursor:pointer;
        position: relative;
        background: #ffffff;
        div{
          position: absolute;
          width:1px;
          height: 20px;
          right: 0px;
          top:21px;
          background: #cccccc;
        }

      }
        li:last-child>{
          div{
            background:none;
          }
        }
        .OrderListActive{
          background: #f4531c;
          color: #ffffff;
          font-size: 22px;
        }

    }
      #OrderDetail{
        width:1200px;
        margin-top: 11px;
        height: 335px;
        position: relative;
        #OrderDetail1{
            width: 956px;
            height: 335px;
            overflow: hidden;
              ul{
                width: 10000px;
                height: 335px;
                border: none;
                  li{
                    width:233px;
                    height: 335px;
                    margin-right: 8px;
                    float: left;
                    position: relative;
                     img{
                       display: block;
                       width: 233px;
                       height: 335px;
                       border: none;
                     }
                     span{
                        display: block;
                        width:100%;
                        height:21px;
                        font-size:22px;
                        font-family:"微软雅黑";
                        color:rgba(76,76,76,1);
                        line-height:30px;
                        position: absolute;
                        left:0;
                        top: 276px;
                        text-align: center;
                     }
                  }
                  li:last-child{
                    margin-right:0px;
                  }
            }

        }

         #OrderDetai2{
              width:233px;
              height: 335px;
              position: absolute;
              right: 0;
              top: 0;
              background: #ffffff;
              cursor: pointer;
            span{
              display: block;
              width: 9px;
              height: 9px;
              border-radius: 100%;
              background: rgba(191,191,191,1);
              float: left;
            }
            span:nth-child(1){
              position: absolute;
              left: 90px;
              top:159px;
            }
            span:nth-child(2){
              position: absolute;
              left: 104px;
              top:159px;
              background:rgba(112,112,112,1);
            }
            span:nth-child(3){
              position: absolute;
              left: 118px;
              top:159px;
              background:rgba(49,49,49,1);
            }
            p{
              width:51px;
              height:21px;
              font-size:22px;
              font-family:MicrosoftYaHei;
              color:rgba(76,76,76,1);
              line-height:30px;
              position: absolute;
              top:276px;
              left: 90px;
            }
         }
      }
      #OrderLiuCheng{
        width:1200px;
        height: 289px;
        p{
          width: 122px;
          height: 21px;
          font-size:20px;
          font-family:MicrosoftYaHei;
          color:rgba(244,83,28,1);
          line-height:30px;
          margin-top: 32px;
          img{
            width: 22px;
            height: 21px;
            margin:8px 10px 0 10px;
          }
        }
        div{
          width: 821px;
          height: 124px;
          margin:44px 0 0 187px;
          img{
            width: 824px;
            height: 124px;
          }
        }
      }
  }


</style>
