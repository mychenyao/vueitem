export let date={
	
	changeDate(){
	var day1,yue,ri,s1,day2,s2,day3,s3,day4,s4,day5,s5,
    day6,s6,
    day7,s7,
    day8,s8,
    str="",i=0;
    day1 =new Date();
          this.current=day1;
           yue=day1.getMonth()+1;
           ri=day1.getDate();
           day1=new Date();
          day1.setTime(day1.getTime());
           s1=day1.getFullYear()+"-"
           + (day1.getMonth()+1>9?day1.getMonth()+1:0+""+(day1.getMonth()+1)) +
            "/" + (day1.getDate()>9?day1.getDate():0+""+(day1.getDate()) )
            day2=new Date();

          day2.setTime(day2.getTime()+24*60*60*1000);
         s2=day2.getFullYear()+"-"
           + (day2.getMonth()+1>9?day2.getMonth()+1:0+""+(day2.getMonth()+1)) +
            "/" + (day2.getDate()>9?day2.getDate():0+""+(day2.getDate()) )
           day3=new Date();

          day3.setTime(day3.getTime()+48*60*60*1000);
         s3=day3.getFullYear()+"-"
           + (day3.getMonth()+1>9?day3.getMonth()+1:0+""+(day3.getMonth()+1)) +
            "/" + (day3.getDate()>9?day3.getDate():0+""+(day3.getDate()) )

           day4=new Date();

          day4.setTime(day4.getTime()+72*60*60*1000);
         s4=day4.getFullYear()+"-"
           + (day4.getMonth()+1>9?day4.getMonth()+1:0+""+(day4.getMonth()+1)) +
            "/" + (day4.getDate()>9?day4.getDate():0+""+(day4.getDate()) )

           day5=new Date();

          day5.setTime(day5.getTime()+96*60*60*1000);
     	 s5=day5.getFullYear()+"-"
           + ((day5.getMonth()+1)>9?(day5.getMonth()+1):0+""+(day5.getMonth()+1))+
            "/" + (day5.getDate()>9?day5.getDate():0+""+(day5.getDate()) )

          day6=new Date();
          day6.setTime(day6.getTime()+120*60*60*1000)
          s6=day6.getFullYear()+"-"+((day6.getMonth()+1)>9?(day6.getMonth()+1):0+""+(day6.getMonth()+1))+"/"+ (day6.getDate()>9?day6.getDate():0+""+(day6.getDate()) )


          day7=new Date();
          day7.setTime(day7.getTime()+144*60*60*1000);
          s7=day7.getFullYear()+"-"+((day7.getMonth()+1)>9?(day7.getMonth()+1):0+""+(day7.getMonth()+1))+"/"+ (day7.getDate()>9?day7.getDate():0+""+(day7.getDate()) )

              this.timeList[0].time=s1.substring(5);
              this.timeList[1].time=s2.substring(5);

              this.timeList[2].name=getDat(day3.getDay());
              this.timeList[2].time=s3.substring(5);

              this.timeList[3].name=getDat(day4.getDay());
              this.timeList[3].time=s4.substring(5);

              // this.timeList[4].name=getDat(day5.getDay());
              // this.timeList[4].time=s5.substring(5);

              // this.timeList[5].name=getDat(day6.getDay());
              // this.timeList[5].time=s6.substring(5);

              // this.timeList[6].name=getDat(day7.getDay());
              // this.timeList[6].time=s7.substring(5);

  			function getDat(week){

            if (week == 0) {
	                      str = "周日";
	              } else if (week == 1) {
	                      str = "周一";
	              } else if (week == 2) {
	                      str = "周二";
	              } else if (week == 3) {
	                      str = "周三";
	              } else if (week == 4) {
	                      str = "周四";
	              } else if (week == 5) {
	                      str = "周五";
	              } else if (week == 6) {
	                      str = "周六";
	              }
	              return str;
          }
            this.date.push(s1);
            this.date.push(s2);
            this.date.push(s3);
            this.date.push(s4);
            // this.date.push(s5);
            // this.date.push(s6);
            // this.date.push(s7);
             for(i=0;i<21;i++){
              this.isErr.push(true);
            }
	},
	dateList:[
                "09:00~10:00",
                "10:00~11:00",
                "11:00~12:00",
                "12:00~13:00",
                "13:00~14:00",
                "14:00~15:00",
                "15:00~16:00",
                "16:00~17:00",
                "17:00~18:00",
                "18:00~19:00",
                "19:00~20:00",
              ],
// 选择日期方法start
 		selector(index){
 			this.lastCurrentTime=""
 			this.timeDate=null;
 			this.isSelectorHour=-1
            this.isShowList=[];
            for(var i=0;i<date.dateList.length;i++){
              this.isShowList[i]=false;
            }
           if(index==0){
              for(let i=0;i<this.timeList2.length;i++){
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
// 选择日期方法end
// 选择时间方法 start
    selectHour(index,isErr){
            if(this.isShowList[index]){
              return;
            }
            if(this.isSelector==-1){
              alert("请选择日期")
              return false;
            }
            this.isSelectorHour=index;
            // console.log( this.isSelectorHour)
             // this.selectorTime=''
            this.lastCurrentTime = this.selectorTime+" "+this.timeList2[index]+":00";
          },
     initIsErr(){
     	 	let sta=false;
     		for(let i=0;i<this.timeList2.length;i++){
     			  this.isShowList[i]=false;
     		  }
          	for(let i=0;i<this.isErr.length;i++){
            if(this.isErr[i]){
              sta=this.isErr[i];
              break;
            }
          }
    }
// 选择时间方法 end
}
export let session={
  getSession(key){
      let jsonString = sessionStorage.getItem(key) || false;
      return JSON.parse(jsonString);
  },
  setSession(key,value){
        sessionStorage.setItem(key, JSON.stringify(value));
  },
   removerSession(key) {
      sessionStorage.removeItem(key)
  }
}

export let userInfo={
	identifyingText:"发送验证码",
	phone:session.getSession("userInfo").phoneNum,
  // .phoneNum,
	isSendSuccess:false,
	submit_ode:null,
	tonken:null,
	name:"",
	selectorAddress:null,
	sendIdentifying(phone){
    if(this.login.regularPhone.call(this,phone)){
 			const url=`${affirmOrderApiDomain}/authCodeInfo/getValidationCode?phoneNum=${phone}`;
             if(!this.userInfo.isSendSuccess){
             	this.$http.get(url).then(res=>{
                const code=res.data.code;
                if(code==="0000"){
          					this.userInfo.isSendSuccess=true;
          	             	  let count=60,
          			            pic=setInterval(()=>{
          			                count--;
          			                this.userInfo.identifyingText="已发送"+count+"s";
          			                if(count===0){
          			                  clearInterval(pic);
          			                  this.userInfo.isSendSuccess=false;
          			                  this.userInfo.identifyingText="获取验证码"
          			              }
          			          },1000);
                   }else{
                      successAlert.call(this,res.data.error);
                   }
	             	})
           } 
    	}
	},
	subMitAddPosition(){

	},
	submitCode(code){
		 const url =`${affirmOrderApiDomain}/authCodeInfo/confirmLogin`,
			    param={
			            "phoneNum":this.userInfo.phone,
			            "authCode":code,
			            "cityId":"0101",
		            };
		     this.$http.post(url,param).then(res=>{
              let data=res.data;
                 this.userInfo.submit_ode=null;
              if(data.code==="0000"){
                // let data={}
                  // data.result = {"id":"3596FEEFCCC44A0E8047FEA9700BC1F3","imgUrl":"http://thirdwx.qlogo.cn/mmopen/b2t2uzoYSammV06G8z6jX3X0delACpcYYHl086QVvibuPMnxC6aZPa6W3E3qbLpjn8oKbrMWBe5ibaMgXZGWOOAUlgibzGDPp2x/132","isNew":"false","name":"159728403985","nickName":"5bCn5bm06Iic5pel","phoneNum":"15972840395","sourceType":"0","token":"9AC3413489E74419A621CF1770C46CF0"}
              	  session.setSession("userInfo",data.result);
                	this.userMssage = userInfo;
              		this.user_info_isShow=true;
                  successAlert.call(this,"验证成功","1");
                  this.isInput=session.getSession("userInfo").token;
                  serviceDiscount.call(this);   //重新获取优惠劵
              }else{
                  successAlert.call(this,data.error);
              }
            })          
	}
}

export function regular(){
  if(!session.getSession("userInfo").token){
    successAlert.call(this,"请输入手机号登陆");
    return false;
  }else if(!this.timeDate){
			this.isDateTimeObj.isTimeText=true;
			this.isDateTimeObj.isDateText=true;
      successAlert.call(this,"请选择服务时间")
			return false;
		}else if(!this.userInfo.selectorAddress||!this.userInfo.selectorAddress.id){
			this.isPositionText=true;
      successAlert.call(this,"请选择服务地址");
			return false;
		}
		return true;
}
export let login={
		promptText:"请输入手机号/验证码",
		regularPhone(phone){
			if(phone===null){
				this.login.promptText="请输入手机号";
				 return false;
			}
			if(!(/^1[34578]\d{9}$/.test(phone)))
				{this.login.promptText="手机号格式不正确"; return false;
			}
			return true;
		}
}
window.successAlert = function(text,state){
    if(state==="1"){
      this.$message({
        type: 'success',
        message: text
      });
    }else{
      this.$message({
        type: 'info',
        message: text
      });
    }
  };
  export function serviceDiscount(){    //获取优惠券；
        let newArray=[],token=session.getSession("userInfo").token;
            this.dataLists.forEach(v=>{
              newArray.push(v.id);
            });
          let url=`${affirmOrderApiDomain}/userInfoDiscount/findlistDiscountByServiceId`,
                params={"ids":newArray.join(","),"token":token};
                this.$http.post(url,params).then(res=>{
                  this.selectorCouponList=[];
                  const data=res.data;
                  console.log(data);
                  this.selectorCouponList.push({serviceDiscount:{"discountName":"不使用优惠券","startTime":0,"endTime":0,"discountFacevalue":0}});
                  data.code==="0000"&&data.result.length!==0?this.selectorCouponList=this.selectorCouponList.concat(data.result):this.selectorCouponList.length=0;
         });
  }