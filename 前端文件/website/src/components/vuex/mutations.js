
export let mutations={
  changeDiscountFacevalue(state,data){
    state.discountFacevalue=data
  },
    changeCouponText(state,data){
         state.couponText=data
  },
   changeIsSuperposition(state,data){
        state.isSuperposition=data;
  },
    changeUserInfoDiscountId(state,data){
        state.userInfoDiscountId=data
  },
    changeIsSuperposition(state,data){
        state.isSuperposition=data;
  },
  changeIsAddSaver(state,data){
    state.isAddSaver=data;
  },
  selectorPayType(state,data){
    state.payType=data;
  },
  pushPayTypeParams(state,data){
    state.payTypeParams=data;
  },
  callBack(state,data){
    state.callBackOrderData=data;
  }
}
 