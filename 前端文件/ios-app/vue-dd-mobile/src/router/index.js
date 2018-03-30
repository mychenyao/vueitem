import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'

// import Login from '@/components/components_father/Login'  //登录
// import loginManagement from '@/components/components_son/login/teacher_management'  //登录
// import JumpAuthen from '@/components/components_son/jumpAuthen/fatherJumpAuthen'  //跳转认证
// import Authen from '@/components/components_son/authen/authen' //认证
// import serviceComplete from '@/components/components_son/authen/serviceComplete' //认证上传照片
// import uploadCertificate from '@/components/components_son/authen/uploadCertificate' //认证完成
// import auditSubmission from '@/components/components_son/authen/auditSubmission' //认证完成等待
// import ServiceCity from '@/components/components_son/serviceCity/servicecity' //城市
// import ServiceArea from '@/components/components_son/serviceArea/servicearea' //区域
// import ServiceSkill from '@/components/components_son/serviceSkill/serviceskill' //技能
// import orderDetails from '@/components/components_son/orderDetails/orderDetails' //订单详情
// import serviceList from '@/components/components_son/serviceList/serviceList' //服务清单
// import addService from '@/components/components_son/serviceList/addService' //服务清单页面的添加服务
// import serviceaBill from '@/components/components_son/serviceList/serviceaBill' //服务清单页面的服务账单
// import serviceSuccess from '@/components/components_son/serviceSuccess/serviceSuccess' //服务清单页面的完成账单页面
//
// import MainMenu from '@/components/components_father/MainMenu' //主菜单
// import d_plate from '@/components/components_son/d_main_menu/d_plate' //主菜单，叮板
// import d_order from '@/components/components_son/d_main_menu/d_order' //主菜单，订单
// import d_my from '@/components/components_son/d_main_menu/d_my' //主菜单，我的
// import equipmentPrice from '@/components/components_son/d_main_menu/userList/equipmentPrice' //主菜单叮板，配件价格表
// import equipmentPriceIframe from '@/components/components_son/d_main_menu/userList/equipmentPriceIframe/equipmentPriceIframe' //主菜单叮板，配件价格表iframe
// import report from '@/components/components_son/d_main_menu/userList/report' //主菜单订单中心，报备
// import UserList from '@/components/components_son/d_main_menu/userList/UserList' //个人页面的列表
// import personalData from '@/components/components_son/d_main_menu/userList/personalData' //个人页面的个人资料
// import leave from '@/components/components_son/d_main_menu/userList/leave' //个人页面的请假
// import historyOrder from '@/components/components_son/d_main_menu/userList/historyOrder' //个人页面的历史订单
// import commonProblem from '@/components/components_son/d_main_menu/userList/commonProblem' //个人页面的常见问题
// import commonProblemSon from '@/components/components_son/d_main_menu/userList/commonProblemSon/commonProblemSon' //个人页面的常见问题 收费标准
//
// import feedback from '@/components/components_son/d_main_menu/userList/feedback' //个人页面的意见反馈
// import aboutSystem from '@/components/components_son/d_main_menu/userList/about_system' //个人页面的关于我们
//
// import uploadImg from '@/components/components_son/authen/upload_img' //test img上传
//
// import systemNews from '@/components/components_son/systemNews/systemNews' //系统消息


Vue.use(Mint)
Vue.use(Router)

export default new Router({
  // mode:'history',  //去除路径的#
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      // path: '/', name: 'login',redirect:'/mainMenu/d_my',component: Login
      // path: '/', name: 'login',redirect:'/mainMenu/d_order',component: Login
      path: '/login',
      name: 'login',
      // component: Login
      component:resolve => require(['@/components/components_father/Login'], resolve)
    },
  { //师傅管理条例

    path: '/loginManagement',
    name: 'loginManagement',
    component: resolve => require(['@/components/components_son/login/teacher_management'], resolve),
    },
  { //认证跳板
      path: '/jumpauthen', name: 'JumpAuthen', component: resolve => require(['@/components/components_son/jumpAuthen/fatherJumpAuthen'], resolve),
    },
  { //认证信息
      path: '/authen', name: 'authen',component: resolve => require(['@/components/components_son/authen/authen'], resolve),
    },
  { //认证上传照片
      path: '/uploadCertificate', name: 'uploadCertificate',component: resolve => require(['@/components/components_son/authen/uploadCertificate'], resolve),
    },
  { //认证完成
      path: '/serviceComplete', name: 'serviceComplete',component: resolve => require(['@/components/components_son/authen/serviceComplete'], resolve),
    },
  { //认证完成等待
      path: '/auditSubmission', name: 'auditSubmission', component: resolve => require(['@/components/components_son/authen/auditSubmission'], resolve),
    },
  { //城市
      path: '/serviceCity', name: 'serviceCity', component: resolve => require(['@/components/components_son/serviceCity/servicecity'], resolve),
    },
  { //区域
      path: '/serviceArea', name: 'serviceArea', component: resolve => require(['@/components/components_son/serviceArea/servicearea'], resolve),
    },
  { //服务技能
      path: '/serviceSkill', name: 'serviceSkill', component: resolve => require(['@/components/components_son/serviceSkill/serviceskill'], resolve),
  },
  { //main主菜单
      path: '/mainMenu', name: 'MainMenu', component: resolve => require(['@/components/components_father/MainMenu'], resolve),
      children:[
        { //叮板
          path:'d_plate', name:'d_plate', component:resolve => require(['@/components/components_son/d_main_menu/d_plate'], resolve)
        },
        { //订单
          path:'d_order', name:'d_order', component:resolve => require(['@/components/components_son/d_main_menu/d_order'], resolve)
        },
        { //我的
          path:'d_my', name:'d_my', component:resolve => require(['@/components/components_son/d_main_menu/d_my'], resolve)
        },
      ]
    },
    { //个人页面的列表
      path:'/userList', name:'userList', component:resolve => require(['@/components/components_son/d_main_menu/userList/UserList'], resolve),
      children:[
        { //个人资料
          path:'personalData', name:'personalData', component:resolve => require(['@/components/components_son/d_main_menu/userList/personalData'], resolve)
        },
        { //请假
          path:'leave', name:'leave', component:resolve => require(['@/components/components_son/d_main_menu/userList/leave'], resolve)
        },
        { //历史订单
          path:'historyOrder', name:'historyOrder', component:resolve => require(['@/components/components_son/d_main_menu/userList/historyOrder'], resolve)
        },
        { //常见问题
          path:'commonProblem', name:'commonProblem', component:resolve => require(['@/components/components_son/d_main_menu/userList/commonProblem'], resolve)
        },
        { //常见问题  收费标准 高空问题 配件问题 质保期
          path:'commonProblemSon', name:'commonProblemSon', component:resolve => require(['@/components/components_son/d_main_menu/userList/commonProblemSon/commonProblemSon'], resolve)
        },
        { //意见反馈
          path:'feedback', name:'feedback', component:resolve => require(['@/components/components_son/d_main_menu/userList/feedback'], resolve)
        },
        { //关于我们
          path:'aboutSystem', name:'aboutSystem', component:resolve => require(['@/components/components_son/d_main_menu/userList/about_system'], resolve)
        }
      ]
    },
    {//配件价格表
      path:'/equipmentPrice', name:'equipmentPrice', component:resolve => require(['@/components/components_son/d_main_menu/userList/equipmentPrice'], resolve)
    },
    {//配件价格表的iframe
      path:'/equipmentPriceIframe', name:'equipmentPriceIframe', component:resolve => require(['@/components/components_son/d_main_menu/userList/equipmentPriceIframe/equipmentPriceIframe'], resolve)
    },
    {//异常报备
      path:'/report',name:'report',component:resolve => require(['@/components/components_son/d_main_menu/userList/report'], resolve)
    },
    {//订单详情
      path:'/orderDetails',name:'orderDetails',component:resolve => require(['@/components/components_son/orderDetails/orderDetails'], resolve)
    },
    {//服务清单
      path:'/serviceList', name:'serviceList', component:resolve => require(['@/components/components_son/serviceList/serviceList'], resolve)
    },
    {//添加服务
      path:'/addService', name:'addService', component:resolve => require(['@/components/components_son/serviceList/addService'], resolve)
    },
    {//服务账单
      path:'/serviceaBill', name:'serviceaBill', component:resolve => require(['@/components/components_son/serviceList/serviceaBill'], resolve)
    },
    {//服务完成
      path:'/serviceSuccess', name:'serviceSuccess', component:resolve => require(['@/components/components_son/serviceSuccess/serviceSuccess'], resolve)
    },
    {//test img上传
      path:'/uploadImg',name:'uploadImg',component:resolve => require(['@/components/components_son/authen/upload_img'], resolve)
    },
    {//系统消息
      path:'/systemNews',name:'systemNews',component:resolve => require(['@/components/components_son/systemNews/systemNews'], resolve)
    },
  ]
})
