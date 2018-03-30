import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(["@/components/Home"], resolve);
const mine = resolve => require(["@/components/newmine/mine"], resolve);
const feedback = resolve => require(["@/components/feedback/feedback"], resolve);
const household_appliance = resolve => require(["@/components/household_appliance/household_appliance"], resolve);

const wash1 = resolve => require(["@/components/wash111/wash"], resolve);

// const wash = resolve => require(["@/components/wash/wash"], resolve);
const wash = resolve => require(["@/components/new_wash/wash"], resolve);   //改版后的手机分类；

const comment = resolve => require(["@/components/comment/comment"], resolve) ;// re评论组件solve
const order = resolve => require(["@/components/neworder/order"], resolve); //订单页面
const address = resolve => require(["@/components/newaddress/address"], resolve) ;//地址管理
// const add_address = resolve => require(["@/components/address/add_address"], resolve); //添加地址
const add_address = resolve => require(["@/components/newaddress/add_address_amap"], resolve); //添加地址

const affirmorder = resolve => require(["@/components/neworder/affirmorder"], resolve); //确认订单
const affirm_order = resolve => require(["@/components/neworder/affirm_order"], resolve); //确认订单

const serve_date = resolve => require(["@/components/neworder/serve_date"], resolve);//服务时间
// const serve_date = resolve => require(["@/components/order/serve_date2"], resolve);//服务时间            设置预约时间 至 02/23 之后 的时间；
const login = resolve => require(["@/components/login/login"], resolve);           //服务时间
const staymoney = resolve => require(["@/components/savertype/staymoney"], resolve) //代付款

const userProtocol = resolve => require(["@/components/login/userProtocol"], resolve) //用户协议
const saverInfo = resolve => require(["@/components/order/saverInfo"], resolve) //用户协议
const orderSuccPages =resolve => require(["@/components/orderSuccess/page"], resolve)
const classify =resolve => require(["@/components/wash/wash1"], resolve)                       //师傅端 安卓 配件表
const wechatDefray =resolve => require(["@/components/wechatDefray/wechatDefray"], resolve)
const share =resolve => require(["@/components/share/share"], resolve)
const userDraw =resolve => require(["@/components/share/userDraw"], resolve)

const coupon =resolve => require(["@/components/coupon/coupon"], resolve)  //优惠券
const successCoupon =resolve => require(["@/components/coupon/successCoupon"], resolve)  //优惠券成功页面
const couponList =resolve => require(["@/components/couponList/couponList"], resolve)  //优惠券列表
const integral =resolve => require(["@/components/integral/integral"], resolve)  //优惠券列表

const warranty=resolve => require(["@/components/warranty/warrantyList"], resolve)  //质保卡
const comment1 = resolve => require(["@/components/comment/comment1"], resolve) // re评论组件solve
const commentdetail= resolve => require(["@/components/comment/commentdetails"], resolve) // re评论详情组件solve

Vue.use(Router);
export default new Router({
  routes: [
      {
        path: '/',
        redirect: '/home',
        },
      {
            path: '/warranty',
            component: warranty
        },
      {
            path: '/couponList',
            component: couponList
        },{
            path: '/integral',
            component: integral
        },{
            path: '/affirm_order',
            component: affirm_order
        },
        {
            path: '/wechatDefray',
            component: wechatDefray
        },{
            path: '/successCoupon/:state',
            component: successCoupon
        },{
            path: '/coupon/:id',
            component: coupon
        },
        {
            path: '/share',
            component: share
        },
        {
            path: '/userDraw',
            component: userDraw
        },
      {
            path: '/wash1/:id',
            component: wash1
        },
      {
            path: '/wash1',
            component: classify
        }, {
            path: '/staymoney',
            component: staymoney
        },{
            path: '/orderSuccPages',
            component: orderSuccPages
        },
        {
            path: '/home',
            component: Home
        },
    {
            path: '/login',
            component: login
        },
        {
            path: '/mine',
            component: mine
        },
        {
            path: '/feedback',
            component: feedback
        },
        {
            path: '/saverInfo',
            component: saverInfo
        },
        {
            path: '/appliance',
            component: household_appliance
        },
        {
            path: '/wash/:id',
            component: wash
        },
        {
            path: '/order',
            component: order
        }, {
            path: '/comment',
            component: comment
        }, {
            path: '/address',
            component: address
        }, {
            path: '/serve_date',
            component: serve_date
        }, {
            path: '/add_address/:index',
            component: add_address
        },
        {
            path: '/affirmorder',
            component: affirmorder
        },
        {
            path: '/userProtocol',
            component: userProtocol
        },
        {
            path: '/orderSuccPages/:status',
            component: orderSuccPages

        },
        {
          path: '/warranty',
          component: warranty
        },
        {
          path: '/couponList',
          component: couponList
        },{
          path: '/integral',
          component: integral
        },{
          path: '/affirm_order',
          component: affirm_order
        },
        {
          path: '/wechatDefray',
          component: wechatDefray
        },{
          path: '/successCoupon/:state',
          component: successCoupon
        },{
          path: '/coupon/:id',
          component: coupon
        },
        {
          path: '/share',
          component: share
        },
        {
          path: '/userDraw',
          component: userDraw
        },
        // {
        //       path: '/affirm_order',
        //       component: affirm_order
        //   },
        {
          path: '/wash1',
          component: classify
        }, {
          path: '/staymoney',
          component: staymoney
        },{
          path: '/orderSuccPages',
          component: orderSuccPages
        },

    {
          path: '/login',
          component: login
        },
        {
          path: '/mine',
          component: mine
        },
        {
          path: '/feedback',
          component: feedback
        },
        {
          path: '/saverInfo',
          component: saverInfo
        },
        {
          path: '/appliance',
          component: household_appliance
        },
        {
          path: '/wash/:id',
          component: wash
        },
        {
          path: '/order',
          component: order
        }, {
          path: '/comment',
          component: comment
        }, {
          path: '/address',
          component: address
        }, {
          path: '/serve_date',
          component: serve_date
        }, {
          path: '/add_address/:index',
          component: add_address
        },
        {
          path: '/affirmorder',
          component: affirmorder
        },
        {
          path: '/userProtocol',
          component: userProtocol
        },
        {
          path: '/orderSuccPages/:status',
          component: orderSuccPages
        },
        {
          path: '/comment1',
          component: comment1
        },
        {
          path:'/commentdetail',
          component:commentdetail
        }
        ]
})


