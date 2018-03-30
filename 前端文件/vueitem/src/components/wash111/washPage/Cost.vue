<template>
   <div id="cost">
      <div id="cost1" >
       <div class="costBox">
            <ul id="cost_list">
              <li v-for="(item,index) in costList"
              @click="cost_listClick(item.beans,index)"
              :class="{cost_listActive:cost_listIndex==index}">{{item.b}}</li>
          </ul>
       </div>

       <ul class="costBox1">
          <li v-for="(item1,index1) in costTable"
           @click="costBoxClick(item1,index1)"
           :class="{liAction:cost_listIndex1 == index1}">{{item1.b}}</li>
       </ul>
       <div id="cost_box">
          <p>家具安装维修</p>
          <p>服务费及配件价格表</p>
          <p>具体以师傅检修后确认维修金额</p>
          <p>如多个维修项目，服务费只收取最高的一项</p>
       </div>
       <table>
         <tr>
            <th>维修内容</th>
            <th>配件价格</br>(预计)</th>
            <th>服务费</th>
          </tr>
         <tr v-for="(item2,index2) in moneyOne">

           <td v-for="(item,index) in item2.serviceMountings">{{item.name?item.name:"其他"}}</td>
           <td v-for="(item,index) in item2.serviceMountings"> {{item.price?item.price:0}}</td>
           <td>{{item2.serviceInfo.price2}}</td>
         </tr>


       </table>
      </div>
   </div>
</template>
<script>
import {setCookie,getCookie} from "@/js/cookie"
//import common from "@/js/baseHttp"
import {getSession,setSession,removerStorage,getLocalStorage,setLocalStorage} from "@/js/session"
export default {
  data(){
      return{
         costList:[], //费用说明列表
         cost_listIndex:0, //选中的初始化下标第一级
         cost_listIndex1:0, //选中的初始化下标第二级
         costTable:[] ,//table里面的服务小点
         moneyOne:[],  //服务费
      }
  },
  created(){
      //获取数据
      let url=this.$common.apidomain+'/articleinfo/findlabelbusinessbyflabel?id='+this.$route.params.id;
      this.$http.get(url).then(res=>{
          this.costList = res.data.result.beans;
          this.cost_listClick(res.data.result.beans[0].beans,0);
          // console.log(res.data.result.beans)
      })
  },
  methods:{
    cost_listClick(item,index){//第一级
      this.cost_listIndex = index;
      this.costTable =item;
      this.costTable.splice(this.costTable.length-1,1) //把其他截取了
      this.costBoxClick(this.costTable[0],0)
      //  console.log(item.length)
    },
    costBoxClick(item1,index1){ //第二级
       this.cost_listIndex1 = index1;
       let areaId=getSession()[0].id,
        url2= `${this.$common.apidomain}/articleinfo/findlistserviceinfo?labelId=${item1.a}&areaId=${areaId}&token=${getCookie()?getCookie():''}`;
        this.$http.get(url2).then(res=>{
             this.moneyOne=[];
            this.moneyOne.push(res.data.result[0]);
        })

    }
  }
}
</script>
<style scoped lang="less">
  body {overflow-x: hidden}
 #cost{
   width: 750/50rem;

   position: absolute;
   left: 0;
   right: 0;
   top:163/50rem;
   bottom: 126/50rem;
   overflow: auto;
    #cost1{
      width:100%;
      min-height: 105vh;
      background: #FFFFFF;
      .costBox{
        /*overflow:hidden;*/
        width: 680/50rem;
        height: 100/50rem;
        overflow-x: auto;
        margin-left: 35/50rem;
        ul{
          width: 1250/50rem;
          height: 100/50rem;
          background:#f1f1f1;
          li{
            height: 100/50rem;
            float: left;
            font-family:PingFangSC-Light;
            font-size:32/50rem;
            color:#000000;
            letter-spacing:0/50rem;
            text-align:center;
            line-height: 100/50rem;
            padding:0 32/50rem;
            background:#ffffff;
          }
          .cost_listActive{
            color:#ea5413;
            height: 84/50rem;
            border-bottom: 2/50rem solid #ea5413;
          }
        }
      }
      .costBox1{
        width: 680/50rem;
        margin: 35/50rem;
        overflow: hidden;
        li{
          font-family:PingFangSC-Light;
          font-size:26/50rem;
          color:#000000;
          letter-spacing:0/50rem;
          text-align:center;
          height: 60/50rem;
          padding: 0 16/50rem;
          border: 1/50rem solid #c7c7cc;
          border-radius: 100/50rem;
          float: left;
          margin: 16/50rem;
          line-height: 60/50rem;
        }
        .liAction{
          background:#ea5413;
          border-radius:100/50rem;
          color: #ffffff;
        }
      }

      #cost_box{
        width: 750/50rem;
        text-align: center;
        p{
          font-family:PingFangSC-Medium;
          font-size:36/50rem;
          color:#000000;
          letter-spacing:0/50rem;
          height: 50/50rem;
          line-height: 1rem;
        }
        p:nth-child(3),p:nth-child(4){
          font-family:PingFangSC-Light;
          font-size:26/50rem;
          color:#4a4a4a;
          letter-spacing:0/50rem;
        }
      }
      table{
        width: 665/50rem;
        margin: 42/50rem;
        /*margin-bottom:3rem;*/
        tr{
          height: 60/50rem;
          th{
            height: 50/50rem;
            margin-top: 10/50rem;
            border: 1/50rem solid #c7c7cc;
            font-size: 24/50rem;
          }
          th:nth-child(1){
            width: 200/50rem;
          }
          td{
            height: 60/50rem;
            line-height: 60/50rem;
            text-align: center;
            margin-top: 10/50rem;
            border: 1/50rem solid #c7c7cc;
            font-size: 24/50rem;
          }
          td:nth-child(1){
            text-align: left;
          }
        }

      }
    }




 }
</style>
