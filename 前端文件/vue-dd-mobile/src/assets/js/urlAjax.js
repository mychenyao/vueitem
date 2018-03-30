export default{
  addressUrl:'http://master.test.dingdingkuaixiu.com', //测试环境
  // addressUrl:'http://192.168.20.106:8021', //测试环境
  // addressUrl:'http://192.168.20.106:891', //测试环境
  url:{
      yan_zheng:'/authCodeInfo/getValidationCodeIOS', //获取验证码
      deng_lu:'/authCodeInfo/confirmmasterIsloginIOS', //登录
      //地址放着测试地址 s
      cheng_shi:'http://master.test.dingdingkuaixiu.com/areainfo/findListareaInfo?', //城市
      qu_yu:'http://master.test.dingdingkuaixiu.com/areainfo/findListareaInfo?id=', //区域
    //地址放着测试地址 e

      ping_lei:'/getFLabelBusinessTypeIOS', //品类
      wei_xiu_ming_chen:'/getFLabelBusinessTypeSecondIOS',//维修民称
      ti_jiao_ren_zheng:'/masterinfo/authenticationIOS', //提交认证信息
      shang_chuan_img:'http://admin.test.dingdingkuaixiu.com/upload/kindeditorjsonIOS', //上传照片kindeditorjson
      //eshang_chuan_img:'http://192.168.20.36:801/upload/kindeditorjsonIOS', //上传照片kindeditorjson
      huo_qu_fu_wu_qing_dan:'/order/getMasterOrderIOS',//获取服务清单
      fu_wu_qing_dan_wei_xiu:'/articleinfo/findMasterListServiceInfoIOS',//服务清单去拿服务列表findListServiceInfoIOS
      tian_jia_fu_wu:'/articleinfo/findMasterListServiceInfo',   //添加服务
      que_ren_zhang_dan:'/order/submitServiceListIOS',//确认账单

      shou_ye_ding_dan:"/order/findHomeDataIOS",  //首页订单
      shou_ye_ding_dan_zhuang_tai:"/order/updateOrderStateIOS",  //发送首页订单状态1
      ding_dan_bao_beo:'/exceptionrecord/saveExceptionRecordIOS',//报备1
      ding_dan_bao_beo_xian_xia:'/exceptionrecord/savePayOfflineIOS',//线下结款报备1
      dian_ji_gong_dan:'/order/getMasterOrderIOS',  //点击单个工单去获取详情
      ding_dan_fen_ye:'/order/findPageIOS', //订单列表查询分页

      //我的
      qing_jia:'/masterleaveapplyfor/saveMasterLeaveApplyForIOS', //请假
      yi_jian_fan_kui:'/feedback/savemasterfeedbackIOS', //意见反馈
      xi_tong_xiao_xi:'/sysMessage/findMasterNewListIOS',//系统消息
      ge_ren_zi_liao:'/masterinfo/findmasterAreaAndSkillIOS',//个人资料
  },

  // weixinConfig:'http://192.168.20.106:891/userInfo/accessSharingSign',//微信公众号的appId
  weixinConfig:'http://app.test.dingdingkuaixiu.com/userInfo/accessSharingSign',//微信公众号的appId
  equipmentPrice_iframe:'http://wechat.test.dingdingkuaixiu.com',//价格列表跳转到微信公众号的地址
}
