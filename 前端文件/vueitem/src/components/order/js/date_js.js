export function changeDate(_this){
	var day1,yue,ri,s1,day2,s2,day3,s3,day4,s4,day5,s5,str="",i=0;
    day1 =new Date();
          _this.current=day1;
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
              _this.timeList[0].time=s1.substring(5);
              _this.timeList[1].time=s2.substring(5);
              _this.timeList[2].name=getDat(day3.getDay());
              _this.timeList[2].time=s3.substring(5);
              _this.timeList[3].name=getDat(day4.getDay());
              _this.timeList[3].time=s4.substring(5);
              _this.timeList[4].name=getDat(day5.getDay());
              _this.timeList[4].time=s5.substring(5);

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
            _this.date.push(s1);
            _this.date.push(s2);
            _this.date.push(s3);
            _this.date.push(s4);
            _this.date.push(s5);
             for(i=0;i<21;i++){
              _this.isErr.push(true);
            }

}
export let dateList=[
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30",
                "18:00",
                "18:30",
                "19:00",
                "19:30",
                "20:00",
                "20:30",
                "21:00",
              ];
export function computePrice(_this){
  let price=0,newArrPier=[];
  if(_this.dataList.length===0)return _this.sumpric=0;
  _this.dataList.forEach((e,i)=>{

    if(e.isSecondPayment==="0"){  //一次付款；       1二次付款   0一次付款
      price+=(e.price2-0)*e.price2Discount*(e.size-0)
    }else if(e.isSecondPayment==="1"){
      newArrPier.push(e.price1);
    }
  });
  if(_this.dataList[0].isSecondPayment==='0'){
    price+=_this.dataList[0].price1;
  }
  if(_this.dataList[0].isSecondPayment==="1"){
    Array.max = function( array ){
      return Math.max.apply( Math, array);
    };
    price=Array.max(newArrPier);
  }
  if(JSON.stringify(price).indexOf(".")!==-1){
    let s=JSON.stringify(price).indexOf(".")+3;
    _this.sumpric=JSON.stringify(price).substring(0,s)  //价格
  }else{
    _this.sumpric=price
  }
}
