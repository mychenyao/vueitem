<template>
  <div>
    <div>
      <C_header left_show="true" right_show="true" center_text="服务清单"></C_header>
    </div>
    <div class="service_list_main">
      <div class="service_list_main_one">
        <div>
          <span>工单号：</span>
          <span>{{order_service_list.order.id}}</span>
        </div>
        <div>
          {{order_service_list.order.fLabelBusiness}}
        </div>
      </div>
      <div class="service_list_main_two">
        <div style="padding-left: .2rem;">上传服务凭证</div>
        <div>

          <div>
            <!--<div class="upload">-->
              <!--<div class="upload_warp_text">-->
                <!--相关资格证书&nbsp;&nbsp;&nbsp;选中{{imgList.length}}张图片，共{{bytesToSize(this.size)}}-->
              <!--</div>-->
              <!--<input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>-->
              <!--<div class="upload_warp_img">-->
                <!--<div class="upload_warp_img_div" v-for="(item,index) of imgList"  v-show="imgList.length!=0">-->
                  <!--<div class="upload_warp_img_div_top">-->
                    <!--&lt;!&ndash;<div class="upload_warp_img_div_text">&ndash;&gt;-->
                      <!--&lt;!&ndash;{{item.file.name}}&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--<img src="../../../../static/img/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">-->
                  <!--</div>-->
                  <!--<img :src="item.file.src">-->
                <!--</div>-->

                <!--<div class="upload_warp_left" @click="fileClick">-->
                  <!--<div>-->
                    <!--<div class="bottom_img_sample">-->
                      <!--<div class="bottom_img_sample_one">-->
                        <!--<i class="iconfont icon-xiangji"></i>-->
                      <!--</div>-->
                      <!--<div class="bottom_img_sample_two">-->
                        <!--{{imgList.length}}/8-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->

              <!--</div>-->
            <!--</div>-->

            <div class="img_box">
                <div class="img_show">
                  <div class="img_show_for" v-for="(item,index) in img_file_arr" v-if="img_file_arr.length != 0">
                    <img :src="item" alt="">

                    <span class="img_show_for_close"  @click="traditional_file_close(index)">×</span>
                  </div>

                  <div class="img_upload">
                    <div class="img_upload_file" v-if="isWeiXinClick" >
                      <input type="file"ref="file"  id="file" v-on:change="traditional_file($event)"  :disabled="disabled_file"  accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
                    </div>
                    <div class="img_upload_icon" @click.stop="isWeiXinPaoZhao" >
                      <div>
                        <i data-v-05ed9505="" class="iconfont icon-xiangji"></i>
                      </div>
                      <div>
                        <span>{{img_file_arr_length}}/8</span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div class="buy_now_price" v-if="order_service_list.services[0].isSecondPayment == '0'">
          <div v-for="(item,index) in order_service_list.services" class="buy_now_price_son">
            <div>
              {{item.serviceFullName}}
            </div>
            <div style="width: 100%;">
              <div style="overflow: hidden;width: 90%;height:1.6rem;margin: 0 auto;">
                <textarea name="" id="" v-model="textarea_buy_now_price" style="width: 100%;height: 96%;font-size:.3rem;" maxlength="100"></textarea>
              </div>
            </div>
          </div>
        </div>
        <!--isSecondPayment-->
        <div class="service_list_main_three" v-for="(item,index) in service_list"   v-if="service_price_list.services[0].isSecondPayment == '1'">
          <div>
            <div class="service_list_main_three_title">{{item[index].serviceInfo.fullName}}</div>
            <div class="">
              <div class="three_list" @click="main_show_click(item,index)">
                <div>维修费</div>
                <div>{{repair_value_text['repair_value_text'+ index]}}/{{repair_value_num['repair_value_num'+ index]}}元</div>
                <div>〉</div>
              </div>
              <!--维修费弹出框开始-->
              <!--<transition name="fade">-->
              <div class="repair_main" v-if="accessories_show_none[index]"  @click.stop="repair_none_click(item,index)">
                <div class="repair_main_box"    v-for=""  @click.stop="repair_maintenanceCost_show(item,index)">
                  <div class="repair_main_title">维修费</div>
                  <div>
                    <mt-radio
                      align="right"
                      v-model="repair_value"
                      :options="options">
                    </mt-radio>
                  </div>
                  <div class="repair_main_bottom">
                    <button @click.stop="maintenance_click(item,index)">确定</button>
                  </div>
                </div>
              </div>
              <!--</transition>-->
              <!--维修费弹出框结束-->
            </div>

            <div>
              <div class="three_list"   @click="high_show_click(item,index)" v-if="service_price_list.services[0].isHighFees == '1'">
                <div>高空费</div>
                <!--<div>{{high_value_text['high_value_text'+ index]}}/{{high_value_num['high_value_num'+ index]}}元</div>-->
                <div>{{high_value_text['high_value_text'+ index]}}</div>
                <div>〉</div>
              </div>
              <!--高空费弹出框开始-->
              <!--<transition name="fade">-->
              <div class="repair_main" v-if="hign_show_none[index]"  @click="high_none_click(item,index)">
                <div class="repair_main_box" v-for=""  @click.stop="high_maintenanceCost_show(item,index)">
                  <div class="repair_main_title">高空费</div>
                  <div>
                    <mt-radio
                      align="right"
                      v-model="high_value"
                      :options="highFee">
                    </mt-radio>
                  </div>
                  <div class="repair_main_bottom">
                    <button @click.stop="high_fees_click(item,index)">确定</button>
                  </div>
                </div>
              </div>
              <!--</transition>-->
              <!--高空费弹出框结束-->
            </div>

            <div>
              <!--<div class="three_list"  @click="parts_show_click(item,index)"  v-if="service_price_list.order.cashbackAmount == '1'">-->
              <div class="three_list"  @click="parts_show_click(item,index)"  v-if="">
                <div>配件费</div>
                <div class="select_parts">请选择配件</div>
                <div>〉</div>
              </div>
              <!--配件费弹出框结束-->
              <!--<transition name="fade">-->
              <div class="repair_main" v-if="repair_show_none[index]"  @click="parts_none_click(item,index)">
                <div class="parts_main_box"  @click.stop="parts_maintenanceCost_show(item,index)">
                  <div class="parts_main_title">配件费</div>
                  <div class="parts_main_content">
                    <div class="parts_main_content_list" v-for="(item1,index1) in item[repair_num[index]].serviceMountings">
                      <div>{{item1.name}}</div>
                      <div>￥{{item1.price}}</div>
                      <div class="parts_number_click">
                        <span @click="parts_price_click_reduction(item1,index,index1)">-</span>
                        <span>{{item1.num}}</span>
                        <span @click="parts_price_click_add(item1,index,index1)">+</span>
                      </div>
                    </div>

                    <div class="parts_main_content_list">
                      <div class="parts_main_content_list_input">
                        <input type="text" placeholder="输入配件名">
                      </div>
                      <div class="parts_main_content_list_input">
                        <input type="text" placeholder="输入价格">
                      </div>
                      <div class="parts_number_click">
                        <span>-</span>
                        <span>11</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div class="parts_button_totai">
                      <!--<div>新增其他配件</div>-->
                      <div></div>
                      <div>
                        <span>小计：</span>
                        <span>{{service_total_price_num.toFixed(2)}}</span>
                      </div>
                      <div>
                        <button  @click.stop="serviceMountings_click(item,index)">确定</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--</transition>-->
              <!--配件费弹出框结束-->
            </div>
          </div>

          <!--备注s-->
          <div style="width: 100%;margin-top: .18rem;padding-bottom: .1rem">
            <div style="overflow: hidden;width: 100%;height:1.6rem;margin: 0 auto;">
              <textarea name="" id="on_the_price" v-model="textarea_no_one['textarea_no_one'+ index]"  style="width: 100%;height: 96%;font-size:.32rem;background-color:#ECECEC;" maxlength="100"></textarea>
            </div>
          </div>
          <!--备注e-->

        </div>
      </div>


      <!--添加服务 s-->
      <!--<div class="service_list_main_four">-->
        <!--<div @click="add_service_click">-->
          <!--<span>＋</span>-->
          <!--<span>添加服务</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--添加服务 e-->

      <div class="service_list_main_five">
        <div>
          <span>合计</span>
          <!--<span>￥{{service_list_total.toFixed(2)}}</span>-->
          <span>￥{{service_list_total.toFixed(2)}}</span>
        </div>
        <div>
          <span>已收款</span>
          <span>￥{{service_list_total_preferential.toFixed(2)}}元</span>
        </div>
        <div>
          <span>待收款</span>
          <span>￥{{service_list_total_collection.toFixed(2)}}元</span>
        </div>
      </div>

      <div class="service_list_main_six" @click="service_list_click" style="background:yellow;">
        <!--<C_button  :btn_disabled="btn_disabled_num" btn_text="确认账单" @callback_c_btn="service_list_click"></C_button>-->
        <C_button   btn_text="确认账单"></C_button>
      </div>
    </div>

  </div>
</template>
<script>
  import common from '../../../assets/js/common'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default{
      data(){
          return{
            service_list:[], //服务清单的价格列表数据
            service_price_list:[], //服务清单的数据

            service_list_total:0,//合计总计价格
            service_list_total_preferential:0,//优惠价
            service_list_total_collection:0,//待收款

            service_total_price_num:0,//最终合计的配件费
            service_total_price_arr:[],//存放配件费的id名称之类的集合
            service_high_total_price_num:0,//最终合计的高空费
            service_high_total_price_arr:[],//存放高空费的id名称之类的集合
            service_high_total_price_arr_id:[],//高空费的ID信息集合
            service_repair_total_price_num:0,//最终合计的维修费
            service_repair_total_price_arr:[],//维修费集合
            service_repair_total_price_arr_id:[],//维修费ID信息集合

            options:[  //维修费
              {label: '小修：100元', value: '小修'},
              {label: '中修：150元', value: '中修'},
              {label: '大修：200元',value: '大修'},
            ],
            repair_value:'小修',//单选的值
            repair_value_text:{}, //维修默认价格文字集合
            repair_value_num:{}, //维修默认价格集合

            highFee:[ //高空费
              {label: '高空费：100元', value: '高空费'},
              {label: '特高空：200元', value: '特高空'},
            ],
            high_value:'高空费',//单选的值
            high_value_text:{}, //高空默认价格文字集合
            high_value_num:{}, //高空费默认价格集合

            accessories_show_none:[], //维修费是否显示集合
            hign_show_none:[], //高空费是否显示集合
            repair_show_none:[], //配件费是否显示集合

            repair_num_confirm:null,//每次配件费确定的时候去判断是第几个订单
            repair_num:[], //配件费的位数点击第几个就是第几位

            show_buy_now_price:false,//一口价就显示一口价的标题

            //base64图片格式
//            imgList: [],
//            imgListDataReq:[], //发送给后台的base64
//            size: 0,
            //file图片
            img_file_arr:[],//存储发送后返回的链接保存
            img_file_arr_length:0,//存储发送后返回的链接的长度
            disabled_file:false,//控制上传图片能否点击
            btn_disabled_num:'1',//可点击

            textarea_buy_now_price:'',//一口价的备注

            textarea_no_one:{},//非一口价的备注

            serviceId_data:[],//存剪切的serviceId
            linkmanAreaId_data:[],//存剪切的linkmanAreaId

            isWeiXinClick:true,//是否是给微信的去点击
          }
      },
      watch:{
        textarea_buy_now_price(newVal,oldVal){
          console.log(newVal);
        },
//        imgList(newVal,oldVal){
//          if(this.imgList.length!=0){  //少于0张图片不能点击提交按钮
//            this.c_disabled=2;
//          }else{
//            this.c_disabled=1;
//          }
//          if(this.imgList.length>8){ //只能传八张图片
//            this.imgList.pop(1)
//          }
//        },
        img_file_arr(newVal,oldVal){//检测图片数量
          let _this=this;
          _this.img_file_arr_length=_this.img_file_arr.length;
          if(_this.img_file_arr.length >0){
            _this.btn_disabled_num='2';
          }
          if(_this.img_file_arr.length>8){
            _this.img_file_arr.pop(1);
          }
        },
      },
      computed:{
        ...mapGetters([  //首页订单的数据
          "order_service_list", //获取清单的数据
          "order_service_price_list",//获取清单里的价格列表
        ])
      },
      created(){
        let _this=this;

          _this.service_price_list=_this.$store.getters.order_service_list; //服务清单
          _this.service_list=_this.$store.getters.order_service_price_list;//服务清单价格列表

        //判断是否是微信浏览器
        if(common.isWeiXin()){
          _this.isWeiXinClick=false;//若是微信就让input去隐藏

          //拿微信的appid相关参数
          let dataReq_location_href={url:window.location.href.split('#')[0]};
          common.weixinAppid(_this,dataReq_location_href,_this.weixin_config);//微信
        }

      },
      mounted(){
          let _this=this;

            if (_this.$store.getters.order_service_price_list.length > 0){//服务清单是否有多个
              _this.repair_show();//维修费的显示都给false

              _this.$store.getters.order_service_price_list.map((arr,index)=>{ //动态添加非一口价的备注输入框
                  _this.textarea_no_one['textarea_no_one'+index]='';
              });
            }

            //一口价 s
            let order_service = _this.$store.getters.order_service_list;
//            order_service.services.map((arr,index)=>{
//                if(arr.cashbackAmount != '1'){//order_service.services[0].isSecondPayment != '1' || order_service.services[0].isHighFees != '1' || order_service.order.cashbackAmount != '1'
                  // isSecondPayment 维修   .services[0].isSecondPayment
                  //isHighFees 高空
                  //Checkmountings 配件

              if (order_service.services[0].isSecondPayment == '0') {//一口价
                _this.show_buy_now_price = true;//如果是一口价的订单就显示一口价的标题

                let unreceivableFee,
                  receivablesFee,
                  unreceivable_receivables_fee;

                unreceivableFee = order_service.serviceTotalWaitPay;//一口价单价
                receivablesFee = order_service.serviceTotalPay;//已收款
                if (order_service.order.discountPrice && order_service.order.discountPrice != null &&
                  order_service.order.discountPrice > 0) {//判断有没有平台优惠，有就添加
                  receivablesFee = receivablesFee + order_service.order.discountPrice;
                }

                //计算总价
                unreceivable_receivables_fee = receivablesFee * 1 + unreceivableFee *1;

                _this.service_list_total_preferential = receivablesFee;//优惠价
                _this.service_list_total = unreceivable_receivables_fee;//合计
                _this.service_list_total_collection = unreceivable_receivables_fee - receivablesFee;//待收款
              }

              if (order_service.services[0].isSecondPayment == '1') {//二口价
                _this.show_buy_now_price = false;//如果是一口价的订单就显示一口价的标题

                let unreceivableFee,
                  receivablesFee,
                  unreceivable_receivables_fee;

                unreceivableFee = order_service.serviceTotalWaitPay;//一口价单价
                receivablesFee = order_service.serviceTotalPay;//已收款
                if (order_service.order.discountPrice && order_service.order.discountPrice != null &&
                  order_service.order.discountPrice > 0) {//判断有没有平台优惠，有就添加
                  receivablesFee = receivablesFee + order_service.order.discountPrice;
                }

                //计算总价
                unreceivable_receivables_fee = receivablesFee + unreceivableFee;

                _this.service_list_total_preferential = receivablesFee;//优惠价
                _this.service_list_total = unreceivable_receivables_fee;//合计
                _this.service_list_total_collection = unreceivable_receivables_fee - receivablesFee;//待收款
              }

              _this.dai_shou_kuan();//代收款计算
//          }
//            });
            //一口价 e

      },
      methods:{
        dai_shou_kuan(){//代收款计算
          let _this=this;
          let order_service = _this.$store.getters.order_service_list;
          if (order_service.services[0].isSecondPayment == '0') {//一口价
            _this.show_buy_now_price = true;//如果是一口价的订单就显示一口价的标题

            let unreceivableFee,
              receivablesFee,
              unreceivable_receivables_fee;

            unreceivableFee = order_service.serviceTotalWaitPay;//一口价单价
            receivablesFee = order_service.serviceTotalPay;//已收款
            if (order_service.order.discountPrice && order_service.order.discountPrice != null &&
              order_service.order.discountPrice > 0) {//判断有没有平台优惠，有就添加
              receivablesFee = receivablesFee + order_service.order.discountPrice;
            }

            //计算总价
            unreceivable_receivables_fee = receivablesFee * 1 + unreceivableFee *1;

            _this.service_list_total_preferential = receivablesFee;//优惠价
            _this.service_list_total = unreceivable_receivables_fee;//合计
            _this.service_list_total_collection = unreceivable_receivables_fee - receivablesFee;//待收款
          }

          if (order_service.services[0].isSecondPayment == '1') {//二口价
            _this.show_buy_now_price = false;//如果是一口价的订单就显示一口价的标题

            let unreceivableFee,
              receivablesFee,
              unreceivable_receivables_fee;

            unreceivableFee = order_service.serviceTotalWaitPay;//一口价单价
            receivablesFee = order_service.serviceTotalPay;//已收款
            if (order_service.order.discountPrice && order_service.order.discountPrice != null &&
              order_service.order.discountPrice > 0) {//判断有没有平台优惠，有就添加
              receivablesFee = receivablesFee + order_service.order.discountPrice;
            }

            //计算总价
            unreceivable_receivables_fee = receivablesFee + unreceivableFee;

            _this.service_list_total_preferential = receivablesFee;//优惠价
            _this.service_list_total = unreceivable_receivables_fee;//合计
            _this.service_list_total_collection = unreceivable_receivables_fee - receivablesFee;//待收款
          }
        },

        repair_show(el_index){
            let _this=this;
          _this.service_list.map((arr,index)=>{
            _this.accessories_show_none.push(false);//维修费
            _this.service_repair_total_price_arr.push([]);//维修费集合
            _this.service_repair_total_price_arr_id.push([]);//维修费ID信息集合
            _this.hign_show_none.push(false);//高空费
            _this.service_high_total_price_arr.push([]);//高空费集合
            _this.service_high_total_price_arr_id.push([]);//高空费ID信息集合
            _this.repair_show_none.push(false);//配件费
            _this.service_total_price_arr.push([]);//配件费集合
            _this.repair_num.push(0);//配件费的位数

            _this.repair_value_num['repair_value_num'+ index]=0;
            _this.repair_value_text['repair_value_text'+ index]='请选择';
            _this.high_value_num['high_value_num'+ index]=0;
            _this.high_value_text['high_value_text'+ index]='请选择';
          });
        },
        add_service_click(){
          console.log("添加服务");
          this.$router.push({name:'addService'});
        },
        main_show_click(item,index){ //维修费弹出框遮罩层点击为true
          let _this=this;
          _this.$set(_this.accessories_show_none,index,true);
        },
        repair_none_click(item,index){//维修费弹出框点击点击遮罩层隐藏
          let _this=this;
          _this.$set(_this.accessories_show_none,index,false);
        },
        repair_maintenanceCost_show(item,index){ //维修费弹出框点击始终为true
          let _this=this;
          _this.$set(_this.accessories_show_none,index,true);
        },
        maintenance_click(item,index){ //维修费确定按钮
          let _this=this;

          _this.repair_num_confirm=index;//给配件费判断是第几个按钮
          _this.$set(_this.accessories_show_none,index,false);
          _this.service_list[index].map((arr1,index1)=>{
            if(_this.repair_value==arr1.serviceInfo.name){
                  _this.repair_num[index]=index1; //看是配件费里的数组的第几个
                  if(arr1.serviceInfo.name=='小修'){
                    _this.service_repair_total_price_arr[index]=100; //维修费用集合
                    _this.service_repair_total_price_arr_id[index]=arr1.serviceInfo;//维修ID信息集合
                    _this.repair_value_num['repair_value_num'+ index]=100;
                    _this.repair_value_text['repair_value_text'+ index]='小修';
                  }
                  if(arr1.serviceInfo.name=='中修'){
                    _this.service_repair_total_price_arr[index]=150; //维修费用集合
                    _this.service_repair_total_price_arr_id[index]=arr1.serviceInfo;//维修ID信息集合
                    _this.repair_value_num['repair_value_num'+ index]=150;
                    _this.repair_value_text['repair_value_text'+ index]='中修';
                  }
                  if(arr1.serviceInfo.name=='大修'){
                    _this.service_repair_total_price_arr[index]=200; //维修费用集合
                    _this.service_repair_total_price_arr_id[index]=arr1.serviceInfo;//维修ID信息集合
                    _this.repair_value_num['repair_value_num'+ index]=200;
                    _this.repair_value_text['repair_value_text'+ index]='大修';
                  }
                }
          });

          _this.dai_shou_kuan();//代收款计算

          _this.total_value();//所有的总数合计

          console.log('点击第几个维修费',_this.repair_num_confirm);
        },
        parts_show_click(item,index){ //配件费弹出层遮罩层点击为true
          let _this=this;
          if(_this.service_repair_total_price_arr[index] == 0){ //点击配件费前先判断维修费是否选择
            _this.$toast('请选择维修费');
              return
          }

          _this.$set(_this.repair_show_none,index,true);
          //每次弹出的时候去计算配件费的合计
          let count=0;
          _this.service_list[index][_this.repair_num[index]].serviceMountings.map((arr,index)=>{
            count+=arr.total_price;
          });
          _this.service_total_price_num=count;//当前的配件合计
        },
        parts_none_click(item,index){ //点击透明遮罩层隐藏配件弹出框false
            let _this=this;
            _this.$set(_this.repair_show_none,index,false);
        },
        parts_maintenanceCost_show(item,index){//配件费弹出框自身点击始终为true
          let _this=this;
          _this.$set(_this.repair_show_none,index,true);
        },
        parts_price_click_add(item,index,index1){//配件费数量加 //.toFixed(2) 四舍五入取两位
          let _this=this;
          _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num +=1;
          _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].total_price = //每单个的总价 = 数量乘以价格
            _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num * item.price;

          let count=0;
          _this.service_list[index][_this.repair_num[index]].serviceMountings.map((arr,index)=>{
            count+=arr.total_price;
          });
          _this.service_total_price_num=count;//当前的配件合计
          _this.total_value();//所有的总数合计
        },
        parts_price_click_reduction(item,index,index1){//配件费数量减
          let _this=this;
          if(_this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num <=0){
            _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num =0;
            _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].total_price = //每单个的总价 = 数量乘以价格
              _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num * item.price;
          }else{
            _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num -=1;
            _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].total_price = //每单个的总价 = 数量乘以价格
              _this.service_list[index][_this.repair_num[index]].serviceMountings[index1].num * item.price;
          }

          let count=0;
          _this.service_list[index][_this.repair_num[index]].serviceMountings.map((arr,index)=>{
            count+=arr.total_price;
          });
          _this.service_total_price_num=count;//当前的配件合计
        },
        serviceMountings_click(item,index){//配件费确定按钮
          let _this=this;
          _this.$set(_this.repair_show_none,index,false);
          if(_this.repair_num_confirm !=null){
              _this.service_total_price_arr[index]=[];//清空service_total_price_arr数组里的第几个菜单
              _this.service_list[_this.repair_num_confirm][_this.repair_num].serviceMountings.map((arr,index1)=>{
                  if(arr.total_price != 0){
                    _this.service_total_price_arr[index].push(arr);//往第几个菜单里添加有数量的配件
                  }
              });
            }

          //点击配件
          if(_this.service_total_price_arr[index].total_price !=0){
            document.getElementsByClassName("select_parts")[index].innerHTML='已选择配件';
          }else{
            document.getElementsByClassName("select_parts")[index].innerHTML='请选择配件';
          }

          _this.dai_shou_kuan();//代收款计算

          _this.total_value();//所有的总数合计
        },
        total_value(){//所有的总数合计
            let _this=this;
            let service_repair=0;//维修
            let hign_num=0;//高空
            let repair_num=0;//配件

          _this.service_repair_total_price_arr.map((arr,index)=>{ //维修
            console.log(arr);
            if(arr != 0){
              service_repair += arr;
              }
          });
          _this.service_repair_total_price_num=service_repair * 1;//维修费总计
//          console.log("维修费合计1",_this.service_repair_total_price_num);

          _this.service_high_total_price_arr.map((arr,index)=>{//高空
            if(arr){
              hign_num += arr;
            }
          });
          _this.service_high_total_price_num=hign_num * 1;//高空费总计
//          console.log("高空费合计1",_this.service_high_total_price_num);

          _this.service_total_price_arr.map((arr,index)=>{//配件
            arr.map((arr1,index1)=>{
                repair_num += arr1.total_price;
            });
          });
          _this.service_total_price_num=repair_num * 1;//配件费总计
//          console.log("配件费合计1",_this.service_total_price_num);

          console.log("维-高-配1",_this.service_repair_total_price_num,_this.service_high_total_price_num,_this.service_total_price_num);
          _this.service_list_total=(_this.service_repair_total_price_num * 1 )+ (_this.service_high_total_price_num * 1) + (_this.service_total_price_num * 1);//总计
          console.log("总计1",_this.service_list_total);
//          console.log("维修费",_this.service_repair_total_price_arr);
//          console.log("高空费",_this.service_high_total_price_arr);
//          console.log("配件费",_this.service_total_price_arr);
//          console.log('--------------------------------------');
          console.log('******************************');
          console.log('****************************');

        },
        high_show_click(item,index){ //高空费弹出层遮罩层点击为true
          let _this=this;
          _this.$set(_this.hign_show_none,index,true);
        },
        high_none_click(item,index){//点击透明遮罩层隐藏高空费弹出框
          let _this=this;
          _this.$set(_this.hign_show_none,index,false);
        },
        high_maintenanceCost_show(item,index){//高空费弹出框自身点击始终为true
          let _this=this;
          _this.$set(_this.hign_show_none,index,true);
        },
        high_fees_click(item,index){ //高空费确定按钮
          let _this=this;
          let hign_data=null;

          _this.$set(_this.hign_show_none,index,false);
          if(_this.high_value=='高空费'){
            _this.service_list[index][0].highAltitudeSettings.map((arr,index1)=>{
              if(arr.floorStart==3){
                hign_data=arr.price;
                _this.service_high_total_price_arr_id[index]=arr;//高空ID信息集合
              }
            });
            _this.high_value_num['high_value_num'+ index]=100;
            _this.high_value_text['high_value_text'+ index]='高空费';
            }
            if(_this.high_value=='特高空'){
              _this.service_list[index][0].highAltitudeSettings.map((arr,index1)=>{
                if(arr.floorStart==5){
                  hign_data=arr.price;
                  _this.service_high_total_price_arr_id[index]=arr;//高空ID信息集合
                }
              });
              _this.high_value_num['high_value_num'+ index]=200;
              _this.high_value_text['high_value_text'+ index]='特高空';
            }
          _this.service_high_total_price_arr[index]=hign_data; //把id和价格集合存放到高空费数组里

          _this.dai_shou_kuan();//代收款计算

          _this.total_value();//所有的总数合计
        },
        service_list_click(data){//提交按钮
          let _this=this;
          if(_this.img_file_arr.length <= 0){
            _this.$toast('请上传服务凭证');
            return false;
          }

          _this.$router.push({name:'serviceList'});//跳转服务清单页面

          console.log('点击提交按钮isSecondPayment',_this.service_price_list.services[0].isSecondPayment);
              if(_this.service_price_list.services[0].isSecondPayment == '1'){ //二口价

                console.log('非一口价点击');
                  if(_this.img_file_arr.length <= 0){
                    _this.$toast('请上传服务凭证');
                    return false;
                  }else{
                    console.log('高空费集合--id',_this.service_high_total_price_arr_id);

                    console.log("维修费集合",_this.service_repair_total_price_arr);
                    console.log("维修ID信息集合",_this.service_repair_total_price_arr_id);
                    console.log("维修费集合的store",_this.$store.getters.order_service_price_list);
                    console.log("高空费集合",_this.service_high_total_price_arr);
                    console.log("配件费集合",_this.service_total_price_arr);
                    console.log("非一口价清单的reamk",_this.textarea_no_one);

                    let coreMainOrder=_this.$store.getters.order_service_list.order;
                    coreMainOrder['idPhotos']=_this.img_file_arr.join(',');//照片路径 逗号分隔
                    coreMainOrder['idPhotosTime']='';//照片时间 逗号分隔 必须要有
                    coreMainOrder['idPhotosAdress']='';//照片地址 图片共用一个地址 地址唯一

                    let submitServiceMap=[];//服务配件集合[{a:1},{a:2}]
                    //维修费id，遍历给serviceList.serviceInfoId
                    _this.$store.getters.order_service_list.services.map((arr,index)=>{
                      let service_list={ //服务集合
                        serviceInfoId:[],//维修费id
                        serviceMountings:[],//配件费id
                        serviceId:[],//原服务id
                        remark:_this.textarea_buy_now_price//备注
                      };
                      service_list.serviceInfoId.push(_this.service_repair_total_price_arr_id[index].id);//维修费id

                      if(_this.service_high_total_price_arr_id.length > 0){ //如果有选高空费就去创建高空费的对象名，然后往里面添加高空费id
                        service_list['highAltitudeSettingId']=[];//高空费id
                        service_list.highAltitudeSettingId.push(_this.service_high_total_price_arr_id[index].id);//高空费id
                      }

                      if(_this.service_total_price_arr.length > 0){//如果配件费集合不小于0就去遍历给后台
                        _this.service_total_price_arr.map((arr1,index1)=>{
                          arr1.map((arr2,index2)=>{
                            _this.service_total_price_arr[index1][index2]['size']=arr2.num; //有几个价格列表就添加当前的价格列表
                          });
                        });
                        service_list.serviceMountings=_this.service_total_price_arr[index];
                      }

                      service_list.serviceId.push(arr.id);//原服务id

                      submitServiceMap.push(service_list);
                    });

                    //去掉数组的中括号[]
                    submitServiceMap.map((arr,index)=>{
                      submitServiceMap[index].serviceInfoId=submitServiceMap[index].serviceInfoId.join(',');//维修费ID去掉数组
                      submitServiceMap[index].highAltitudeSettingId=submitServiceMap[index].highAltitudeSettingId.join(',');//高空费ID去掉数组
                      submitServiceMap[index].serviceId=submitServiceMap[index].serviceId.join(',');//原服务ID去掉数组
                    });
                    console.log('去掉括号',submitServiceMap);

                    let dataReq={
                      coreMainOrderJson:JSON.stringify(coreMainOrder),
                      serviceListJson:JSON.stringify(submitServiceMap),
                      token:common.token()
                    };

                    common.confirm_the_bill(_this,dataReq,_this.confirm_callback,'1');//非一口价确认账单
                  }

                }
              if(_this.service_price_list.services[0].isSecondPayment == '0'){ //一口价
                  if(_this.img_file_arr.length <= 0){
                    _this.$toast('请上传服务凭证');
                    return false;
                  }else{
//                      let imgData;
//                      _this.imgList.map((arr,index)=>{
//                        imgData=arr.file.src.split(',');//切割字符串
//                        _this.imgListDataReq.push(imgData[1]);//把base64图片给后台
//                        console.log(_this.imgListDataReq);
//                      });
                    let coreMainOrder=_this.$store.getters.order_service_list.order;
                    coreMainOrder['idPhotos']=_this.img_file_arr.join(',');//照片路径 逗号分隔
                    coreMainOrder['idPhotosTime']='';//照片时间 逗号分隔 必须要有
                    coreMainOrder['idPhotosAdress']='';//照片地址 图片共用一个地址 地址唯一

                    console.log('order_service_list',coreMainOrder);
                    let submitServiceMap=[];//服务配件集合[{a:1},{a:2}]
                    //维修费id，遍历给serviceList.serviceInfoId
                    _this.$store.getters.order_service_list.services.map((arr,index)=>{
                        let service_list={ //服务集合
                          serviceInfoId:[],//维修费id
                          serviceId:[],//原服务id
                          remark:_this.textarea_buy_now_price//备注
                        };
                      service_list.serviceInfoId.push(arr.serviceId);//维修费id
                      service_list.serviceId.push(arr.id);//原服务id
                      submitServiceMap.push(service_list);
                    });
                    //去掉数组的中括号[]
                    submitServiceMap.map((arr,index)=>{
                      submitServiceMap[index].serviceInfoId=submitServiceMap[index].serviceInfoId.join(',');//维修费ID去掉数组
                      submitServiceMap[index].serviceId=submitServiceMap[index].serviceId.join(',');//原服务ID去掉数组
                    });
//                    console.log('去掉括号',submitServiceMap);

                    let dataReq={
                      coreMainOrderJson:JSON.stringify(coreMainOrder),
                      serviceListJson:JSON.stringify(submitServiceMap),
                      token:common.token()
                    };
//                    console.log("一口价清单",dataReq);

                    let service_bill={
                      idPhotos:coreMainOrder.idPhotos,//照片
                      service_list_total:_this.service_list_total,//合计总计价格
                      service_list_total_preferential:_this.service_list_total_preferential,//优惠价
                      service_list_total_collection:_this.service_list_total_collection,//待收款
                    };
                    _this.$store.dispatch('order_service_bill_one',service_bill);
                    common.confirm_the_bill(_this,dataReq,_this.confirm_callback,'0');//确认账单  最后一个参数是一口价price
                  }
              }
        },
        confirm_callback(self,res,price_str){ //提交服务清单是否成功的回调
          let _this=self;
          let id=res.result.id;
          console.log('确认账单的回调',res.result);
//          if(price_str == '0'){
//            _this.$router.push({name:'serviceSuccess'}); //一口价就跳到服务完成
//          }
//          if(price_str == '1'){
//            _this.$router.push({name:'serviceaBill'}); //非一口价就跳到清单
//          }

          let loginStore=_this.$store.getters.login
          common.d_plate_order(_this,common,loginStore,_this.again_home_data);//首页订单 res.data.result->login

          let order_service_list_link=_this.$store.getters.order_service_list.serviceTotalWaitPay;
          if(order_service_list_link == 0){ //等于0就是一口价
            _this.$router.push({name:'serviceSuccess'}); //一口价就跳到服务完成
          }else{
            _this.$router.push({name:'serviceaBill'}); //非一口价就跳到清单
          }

        },
        testHomeOrder(){

        },
        traditional_file(event){ //inout的file
          let _this=this;
          if(_this.img_file_arr.length>8){
              _this.disabled_file=true;
              return
          }else{
            _this.disabled_file=false;
          }
          let filesObj=event.target.files[0];
          let filesName=event.target.files[0].name;
          let param = new FormData(); // 创建form对象
          param.append('file',filesObj, filesName);  // 通过append向form对象添加数据
          let dataReq=param;
          common.file_img_req(_this,dataReq,_this.file_callback);
        },

        isWeiXinPaoZhao(){//上传点击按钮
          console.log('微信按钮点击上传');
          let _this=this;
          if(_this.isWeiXinClick){ //如果为true说明不是微信浏览器
              return
          }
          if(_this.img_file_arr.length>8){//返回来的图片
            return
          }
          _this.weixin_click();//调取相机
        },
        weixin_config(self){
          let _this=self;
          //微信的config s
          let data=_this.$store.getters.weiXinAppid;
          data.timestamp=data.timestamp+'';
          console.log('微信的config',data);
          wx.config({
            debug: false,
            appId: data.appId,
            timestamp:data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['chooseImage', 'uploadImage','downloadImage']
          });
          //微信的config e
        },
        weixin_click(){
          let _this=this;
          //拍照s
          wx.chooseImage({
            count: 1,//默认9
            sizeType: ['original', 'compressed'],//可以指定是原图还是压缩图，默认二者都有
            sourceType: ['camera'],//可以指定来源是相册还是相机，默认二者都有 ['album', 'camera']
            success: function (res) {
              console.log('11111');
              var localIds = res.localIds;//返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              _this.img_file_arr.push(localIds);//给数组去渲染图片 lee
              _this.weixin_click_shang_chuan(localIds.toString());
            }
          });
          //拍照e
        },
        weixin_click_shang_chuan(localIds){
          let _this=this;
          //上传图片到服务器s
          wx.uploadImage({
            //localId: localIds.toString(),
            localId: localIds,
            // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
              var serverId = res.serverId;// 返回图片的服务器端ID
              _this.weixin_click_xia_zai(serverId.toString());
            },
            fail:function () {
              alert('拍照失败，请刷新重试');
              return false;
            }
          });
          //上传图片到服务器e
        },
        weixin_click_xia_zai(serverId){
          console.log('微信下载img',serverId);
          let _this=this;
          //下载图片到本地服务器s
          //let filesObj=event.target.files[0];
          //let filesName=event.target.files[0].name;
          let filesObj=serverId;
          let filesName='';
          let param = new FormData(); // 创建form对象
          param.append('file',filesObj, filesName);  // 通过append向form对象添加数据
          let dataReq=param;
          common.file_img_req(_this,dataReq,_this.file_callback);
          //下载图片到本地服务器e
        },
        file_callback(res){ //图片发送成功后的回调
          console.log(res);
          let _this=this;
          if(_this.isWeiXinClick){ //如果为true说明不是微信浏览器
            _this.img_file_arr.push(res); //往图片数组里添加
          }
        },
        traditional_file_close(index){//图片关闭按钮
          let _this=this;
          _this.img_file_arr.splice(index, 1);//点击关闭就删除数组里的图片地址
        },
//        upload_img(){
//          let files=this.files[0];
//          console.log(files);
//        },
//        fileClick() {
//          document.getElementById('upload_file').click()
//        },
//        fileChange(el) {
//          if (!el.target.files[0].size) return;
//          this.fileList(el.target);
//          el.target.value = ''
//        },
//        fileList(fileList) {
//          let files = fileList.files;
//          for (let i = 0; i < files.length; i++) {
//            //判断是否为文件夹
//            if (files[i].type != '') {
//              this.fileAdd(files[i]);
//            } else {
//              //文件夹处理
//              this.folders(fileList.items[i]);
//            }
//          }
//        },
//        //文件夹处理
//        folders(files) {
//          let _this = this;
//          //判断是否为原生file
//          if (files.kind) {
//            files = files.webkitGetAsEntry();
//          }
//          files.createReader().readEntries(function (file) {
//            for (let i = 0; i < file.length; i++) {
//              if (file[i].isFile) {
//                _this.foldersAdd(file[i]);
//              } else {
//                _this.folders(file[i]);
//              }
//            }
//          })
//        },
//        foldersAdd(entry) {
//          let _this = this;
//          entry.file(function (file) {
//            _this.fileAdd(file)
//          })
//        },
//        fileAdd(file) {
//          //总大小
//          this.size = this.size + file.size;
//          //判断是否为图片文件
//          if (file.type.indexOf('image') == -1) {
//            file.src = 'wenjian.png';
//            this.imgList.push({
//              file
//            });
//          } else {
//            let reader = new FileReader();
//            reader.vue = this;
//            reader.readAsDataURL(file);
//            reader.onload = function () {
//              file.src = this.result;
//              this.vue.imgList.push({
//                file
//              });
//            }
//          }
//        },
//        fileDel(index) {
//          this.size = this.size - this.imgList[index].file.size;//总大小
//          this.imgList.splice(index, 1);
//        },
//        bytesToSize(bytes) {
//          if (bytes === 0) return '0 B';
//          let k = 1000, // or 1024
//            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
//            i = Math.floor(Math.log(bytes) / Math.log(k));
//          return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
//        },
      }
  }
</script>
<style scoped lang="scss">

  /* .box::-webkit-scrollbar {display:none} 隐藏滚动条*/

  /*配件费选择框开始*/
  .parts_main_box{
    background-color:#fff;
    width: 100%;
    min-height: 7rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  /*配件费底部的小计和确定按钮开始*/
  .parts_main_box  .parts_button_totai{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    background-color: #fff;
    /*justify-content: space-between;*/
  }
  .parts_main_box  .parts_button_totai  div:nth-of-type(1){
    flex: 1;
    color: #498FEF;
  }
  .parts_main_box  .parts_button_totai div:nth-of-type(2){
    flex: 1;
    /*background-color:yellow;*/
    padding-left: .8rem;
    text-align: left;
  }
  .parts_main_box  .parts_button_totai div:nth-of-type(2) span:nth-of-type(2){
    color:#498FEF;
  }
  .parts_main_box  .parts_button_totai  div:nth-of-type(3){
    flex: 1;
    text-align: right;
  }
  .parts_main_box  .parts_button_totai  div:nth-of-type(3) button{
    width: 60%;
    height: 100%;
    color: #fff;
    background-color:#2F80ED;
  }
  /*配件费底部的小计和确定按钮结束*/
  .parts_main_box  .parts_main_title{
    height: .9rem;
    line-height: .9rem;
    font-weight: 600;
    text-align: center;
  }
  .parts_main_box   .parts_main_content{
    max-height: 6rem;
    overflow-y: auto;
    background-color:azure;
  }
  .parts_main_box   .parts_main_content::-webkit-scrollbar {
    display:none
  }
  .parts_main_box   .parts_main_content_list{
    display: flex;
    /*justify-content: space-between;*/
    width: 94%;
    margin: 0 auto;
    height: .8rem;
    line-height: .8rem;
    border-bottom: .01rem solid #ECECEC;
  }
  .parts_main_box   .parts_main_content_list  div:nth-of-type(1){
    flex: 4;
    text-align: left;
    overflow: hidden;
  }
  .parts_main_box   .parts_main_content_list  div:nth-of-type(2){
    /*text-align: center;*/
    flex: 1.4;
    /*padding-left: .8rem;*/
    /*background-color:red;*/
  }
  .parts_main_box   .parts_main_content_list  div:nth-of-type(3){
    text-align: right;
    flex: 3;
  }
  .parts_main_box   .parts_main_content_list  .parts_main_content_list_input{
      width: 33%;
  }
  .parts_main_box   .parts_main_content_list  .parts_main_content_list_input input{
      width: 50%;
      height: 96%;
      margin: 0 auto;
  }
  /*右边圆点击按钮*/
  .parts_main_box   .parts_main_content_list  .parts_number_click span:nth-of-type(1),
  .parts_main_box   .parts_main_content_list  .parts_number_click span:nth-of-type(3){
    display: inline-block;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border-radius: 50%;
  }
  .parts_main_box   .parts_main_content_list .parts_number_click span:nth-of-type(1){
    background-color:#C8C8CB;
    color: #fff;
  }
  .parts_main_box   .parts_main_content_list .parts_number_click span:nth-of-type(2){
    display: inline-block;
    width: .6rem;
    text-align: center;
  }
  .parts_main_box   .parts_main_content_list .parts_number_click span:nth-of-type(3){
    background-color:#2F80ED;
    color: #fff;
  }
  /*配件选择框结束*/

  /*维修费选择框开始*/
  .repair_main{
    width: 100%;
    height: 100%;
    /*height:17.6rem;*/
    background:rgba(60,63,65,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    overflow-y: hidden;
  }
  .repair_main .repair_main_box{
    background-color:#fff;
    min-height: 7rem;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .repair_main .repair_main_box .repair_main_title{
    height: .9rem;
    line-height: .9rem;
    font-weight: 600;
    text-align: center;
  }
  .repair_main .repair_main_box .repair_main_bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .repair_main .repair_main_box .repair_main_bottom button{
    width: 100%;
    height: .8rem;
    background-color:#26A2FF;
    color: #fff;
  }
  /*维修费选择框结束*/


  /*transition的样式开始*/
  .fade-enter-active, .fade-leave-active {
    transform-style: preserve-3d;
    transition: all 1s ease-out;
  }
  /*.fade-enter, .fade-leave-active {*/
  /*!*transition:all 1s ease;*!*/
  /*opacity: 0;*/
  /*}*/

  /*进入*/
  .fade-enter {
    -webkit-transform:perspective(200px) translateY(500px);
    -moz-transform: perspective(200px) translateY(500px);
    -ms-transform: perspective(200px) translateY(500px);
    -o-transform: perspective(200px) translateY(500px);
    transform: perspective(200px) translateY(500px);
  }
  /*离开*/
  .fade-leave-active{
    -webkit-transform:perspective(200px)  translateY(500px);
    -moz-transform:perspective(200px)  translateY(500px);
    -ms-transform:perspective(200px)  translateY(500px);
    -o-transform:perspective(200px)  translateY(500px);
    transform:perspective(200px)  translateY(500px);
  }
  /*transition的样式结束*/


  .service_list_main{
    background-color:#ECECEC;
    width: 100%;
    overflow-x: hidden;
  }
  .service_list_main_one{
    padding:0 .2rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height:.6rem;
    line-height: .6rem;
  }

  .service_list_main_two{
    /*padding: 0 .2rem;*/
    /*height: 4rem;*/
    background-color: #fff;
    margin-top: .2rem;
  }
  .service_list_main_two div:nth-of-type(1){
    /*height: .6rem;*/
    /*line-height: .6rem;*/
  }
  .service_list_main_two div:nth-of-type(2){
    /*height: 3rem;*/
    /*background-color:red;*/
  }

  /*input的file样式 s*/
  .service_list_main_two{
    .img_box{
      width: 100%;
      /*height: 1rem;*/
      display: flex;
      /*flex-direction: column ;*/
      /*justify-content: flex-start;*/
      box-sizing: border-box;

      .img_show{
        display: flex;
        width:100%;
        flex-wrap: wrap;

        .img_show_for{
            margin-top: .2rem;
            margin-left: .2rem;
            width: 1.6rem;
            height: 1.6rem;
            /*overflow: hidden;*/
            position: relative;
            background-color:yellow;

            img{
              width: 100%;
              height: 100%;
            }

          .img_show_for_close{
            display: inline-block;
            width:.4rem;
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            color: #fff;
            position: absolute;
            right: -.15rem;
            top: -.15rem;
            z-index: 3;
            border-radius:50%;
            font-size: .32rem;
            background-color:green;
          }
        }

      }

      .img_upload{
        margin-top: .2rem;
        margin-bottom: .2rem;
        margin-left: .2rem;
        width: 1.6rem;
        height: 1.6rem;
        overflow: hidden;
        position: relative;
        border: .01rem dotted #C8C8CB;

        .img_upload_file{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            z-index: 2;

            #file{
              width: 100%;
              height: 100%;
            }
        }
        .img_upload_icon{
            width: 100%;
            height: 100%;
            /*background-color:darkgreen;*/
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            text-align: center;

            div:nth-of-type(1){
              margin-top: .2rem;
              height: .6rem;
              line-height: .6rem;
            }
            div:nth-of-type(2){
              height: .4rem;
              line-height: .4rem;
            }
        }
      }
    }
  }
  /*input的file样式 e*/


  .service_list_main .buy_now_price{
    margin-top: .2rem;
    /*padding:0 .2rem;*/
    width: 100%;
    /*height: .6rem;*/
    line-height: .6rem;
    font-size: .26rem;
  }
  .service_list_main .buy_now_price .buy_now_price_son{
    color: #2E7FEC;
  }

  .service_list_main_three{
    margin-top: .2rem;
    padding:0 .2rem;
    background-color:#fff;
  }
  .service_list_main_three .service_list_main_three_title{
    height: .6rem;
    line-height: .6rem;
    font-size: .26rem;
    color: #2E7FEC;
  }
  .service_list_main_three .three_list{
     display: flex;
    height: .6rem;
    line-height: .6rem;
   }
  .service_list_main_three .three_list div:nth-of-type(1){
    flex: 8;
    text-align: left;
   }
  .service_list_main_three .three_list div:nth-of-type(2){
    flex: 4;
    text-align: right;
   }
  .service_list_main_three .three_list div:nth-of-type(3){
    flex: 1;
    text-align: right;
   }

  .service_list_main_four{
    padding:0 .2rem;
    background-color:#ECECEC;
    margin:.1rem 0;
  }
  .service_list_main_four div{
    width: 2rem;
    height: .6rem;
    line-height: .6rem;
  }
  .service_list_main_four div span:nth-of-type(1){
    display: inline-block;
    width:.4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border-radius: 50%;
    border: .01rem solid #2E2E2E;
  }

  .service_list_main_five{
    padding:0 .2rem;
    background-color: #fff;
  }
  .service_list_main_five div{
    display: flex;
    justify-content: space-between;
    height: .6rem;
    line-height: .6rem;
  }

  .service_list_main_six{
    padding:0 .2rem;
    margin-top: 1.6rem;
  }


  /*上传插件*/
  .upload_warp_img_div_del {
    position: absolute;
    top: .07rem;
    width: .26rem;
    height: .26rem;
    right: .04rem;
  }

  .upload_warp_img_div_top {
    margin-top: 0 !important;
    position: absolute;
    top: 0;
    width: 100%;
    /*font-size: .12rem;*/
    height: .4rem;
    line-height: .4rem;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: left;
    color: #fff;
    text-indent: .04rem;
  }

  .upload_warp_img_div_text {
    margin-top: 0 !important;
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    background-color:red;

  }

  .upload_warp_img_div {
    position: relative;
    height: 1.6rem;
    width: 1.6rem;
    line-height: 1.6rem;
    border: .01rem solid #ccc;
    margin:.2rem 0 0 .2rem;
    float: left;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    width: 100%;
    padding-bottom: .2rem;
    overflow: hidden
  }

  .upload_warp_text {
    font-size:  .26rem;
  }

  .upload_warp_left{
    float: left;
    border-radius:.04rem;
    cursor: pointer;
  }

  .upload_warp_left img {
    width: 100%;
    height:100%;
  }

  .upload {
    width: 100%;
  }


  .bottom_img_sample{
    margin:.2rem 0 0 .2rem;
    width: 1.6rem;
    height: 1.6rem;
    text-align: center;
    border:.01rem dotted #CFCFD1;
    color:#CFCFD1;

  .bottom_img_sample_one{
     margin-top: .3rem;
     width: 100%;
     height: .5rem;
     line-height: .5rem;

    i{
      font-size: .34rem;
    }
  }
  .bottom_img_sample_two{
     width: 100%;
     height:.5rem;
     line-height: .5rem;
     font-size: .29rem;
   }
  }
</style>
