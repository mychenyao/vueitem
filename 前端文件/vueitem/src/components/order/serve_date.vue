<template>
    <div id="box">
      <div class="nav_list">
          <ul ref="ul">
            <li class="daily" :class="{daily_selector:isSelector==index}"  @click="selector(index)" v-if="item.isw"
            v-for="(item,index) in timeList" :key="index">
              <span>{{item.name}}</span>
              <p>{{item.time}}</p>
            </li>
          </ul>
      </div>
      <div class="nav_list time_list">
        <ul>
          <li class="daily" v-for="(item,index) in timeList2" :key="index" @click="selectHour(index,isErr[index])"
          :class="{'selector_hour':isSelectorHour==index,'ccc':isShowList[index]===true}">
                {{item}}
          </li>
        </ul>
      </div>
      <p class="display_none_bar"></p>
      <button @click="submitBtn" class="submit" :class="{sub:isSelectorHour!=-1&&isSelector!=-1}">确认服务时间</button>
    </div>
</template>
<script>
      import {changeDate,dateList} from "@/components/order/js/date_js"
      import {getLocalStorage} from "@/js/session"
    export default {
        data() {
            return {
              isSelector:"-1",
              state:true,
              timeList:[
                {name:"今天",time:"",isw:true},
                {name:"明天",time:"",isw:true},
                {name:"周五",time:"",isw:true},
                {name:"周六",time:"",isw:true},
                {name:"周日",time:"",isw:true}
              ],
              selectorTime:'',
              date:[],
              current:"",
              isErr:[],
              timeList2:dateList,
              lastCurrentTime:'',
              isSelectorHour:"-1",
              isShowList:[]
            }
        },
        methods: {
          selector(index){
          		this.isShowList=[];
          	for(var i=0;i<dateList.length;i++){
              this.isShowList[i]=false;
            }
           if(index==0){
              for(var i=0;i<this.timeList2.length;i++){
                if((this.timeList2[i].replace(/\:/, ""))-0<(this.current.getHours()+""+this.current.getMinutes())-0) {
                    this.isErr[i]=false
                }
              }
           }else{
            this.isErr=[];
             for(let i=0;i<this.timeList2.length;i++){
              this.isErr.push(true);
            }
           }
           if(index===0&&this.state){
           	let timeList=this.timeList2;
           	for(var i=0;i<timeList.length;i++){
           		let h=timeList[i].substring(0,2),
           		    m=timeList[i].substring(3),
           		    sum=h-0,
           		    currH=this.current.getHours();
           		    if(sum-1<=currH){
           		    	this.isShowList[i]=true
           		    }
           	}
           }
            this.isSelector=index;
            this.selectorTime=this.date[index];
            this.isSelectorHour="-1";
          },
          selectHour(index,isErr){
            if(this.isShowList[index]){
            	return;
            }
            if(this.isSelector==-1){
              this.$Toast("请选择日期");
              return false;
            }
            this.isSelectorHour=index;
             // this.selectorTime=''
            this.lastCurrentTime = this.selectorTime+" "+this.timeList2[index]+":00";
          },
          submitBtn(){
              if(this.isSelectorHour!=-1&&this.isSelecto!=-1){
               this.lastCurrentTime =  this.lastCurrentTime.replace(/\//, "-");
//               let url=common.apidomain+"/order/getorders?type=1&token="+getCookie();
               this.$store.commit("yuDatetime",this.lastCurrentTime);
                this.$router.back(-1);
              }else{
                return false;
              }
          }
        },
        created() {
          let fullName=getLocalStorage("fullName"),y,i,index=0;
          for(y=0;y<fullName.length;y++){
            if(fullName[y].labelId.substring(0,6).indexOf("003001")===-1){
                  this.state=false;
                  this.timeList[0].isw=false;
                  index=1;
                  this.$nextTick(function(){
                    this.$refs.ul.style.width=900/50+"rem";
                  });
                  break;
              }
          }
          let sta=false;
          for(i=0;i<dateList.length;i++){
     			  this.isShowList[i]=false;
     		}
          changeDate(this);
          this.selector(index);
          for(let i=0;i<this.isErr.length;i++){
            if(this.isErr[i]){
              sta=this.isErr[i];
              break;
            }
          }
         if(!sta) {
           this.timeList[0].isw=false;
           this.$nextTick(function(){
             this.$refs.ul.style.width=900/50+"rem";
           });
           this.selector(1);
         }
        }
    }
</script>
<style scoped lang="less">
.submit{
  width:100%;
  height:98/50rem;
  background:#ccc;
  position:absolute;
  bottom:0;
  left:0;
  color:#fff;
}
.sub{
  background: #EB5312;;
}
  #position{
    position:relative;
  }
  .nav_list{
      background:#fff;
      padding:.7rem 16/50rem;
      width:100%;
      overflow: auto;
      padding-bottom:1.7rem;
      >ul{
        overflow: hidden;
        width:1100/50rem;
        /*width:910/50rem;*/
        >.daily{
          font-family: PingFangSC-Medium;
          font-size: 24/50rem;
          color: #4A4A4A;
          text-align:center;
          float:left;
          width:4rem;
          margin-left:.3rem;
          border-radius:4px;
          background: #FBFBFB;
          border: 1px solid #ECECEC;
          /*height:1.5rem;*/
          padding:.1rem 0;
          padding-bottom:.2rem;
          >p{
            line-height:.5rem;
            font-family: PingFangSC-Regular;
            font-size: 24/50rem;
            color: #9B9B9B;
          }
        }
        >.daily:nth-of-type(4n){
          margin-right:0;
        }
        >.daily_selector{
           background:url(../../../static/images/select8.png) center center no-repeat;
          background-size:100% 100%;
        }
        >.daily:first-of-type{
          margin:0;
        }
      }
    ul::-webkit-scrollbar{
      display: none;
    }
  }
  .display_none_bar{
    width:100%;
    height:1.3rem;
    background:#eef3f4;
    /*background:red;*/
    position:absolute;
    top:3.2rem;
    left:0;
    z-index:222;
  }
  .time_list{
    padding-left:32/50rem;
    padding-top:0;
    background:transparent;
    position:absolute;
    z-index: 333;
    left:0;
    top:4rem;
    >ul{
      width:100%;
      >.daily{
        margin-bottom:18/50rem;
        padding:0;
        width:158/50rem;
        height:80/50rem;
        margin-right:18/50rem;
        margin-left:0;
        line-height: 80/50rem;
      }
      >.selector_hour{
        background: #EB5312;
        color:#fff;
      }
      >.daily:first-of-type{
        margin-right:20/50rem;
      }
      >.err{
          background:#ccc;
       }
       .ccc{
       	background:#ccc;
       }
    }
  }

</style>
<style>

</style>

