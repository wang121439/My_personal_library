<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header class="Header" style="height: 52px" fixed>
      <div slot="left">
        <img
          src="../assets/img/books_logo.png"
          alt="懒人书柜"
          style="width: 85px; display: inherit"
          slot="icon"
        />
      </div>
      <div slot="right">
        <router-link to="/seek">
          <input
            type="text"
            placeholder="中日恩怨两千年:日出日落"
            class="books_input"
        /></router-link>
        <router-link to="/seek"
          ><img src="../assets/img/books_seek_01.png" class="books_seek" alt=""
        /></router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->

    <!-- 面板区域开始 -->
    <div class="swiper">
      <mt-tab-container>
        <mt-tab-container-item>
          <!-- 轮播图 -->
          <div>
            <van-swipe
              :autoplay="4000"
              style="height: 140px; position: relative; top: 52px">
              <van-swipe-item v-for="(item, i) of booksDeta" :key="i">
                <img v-lazy="item.body_imgb" style="height: 100%;max-width: 100%;" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 轮播图 -->
          <!-- 导航 -->
          <div class="booksRow">
           <van-row type="flex" justify="space-around">
          <van-col span="4"  v-for="(item,index) in navigation" :key="index">
                <router-link to="#">
                  <img :src="item.navigImg" alt="畅销榜" />
                  <b>{{item.name}}</b>
                </router-link>
              </van-col></van-row>
          </div>
          <!-- 导航 -->

          <!-- 资讯内容 -->
          <div
            style="height: 80px; position: relative; top: 38px; margin-top: 5px">
            <van-row>
              <van-col span="6">
                <img
                  src="../assets/img/books_message.png"
                  alt=""
                  style="width: 60px; border-radius: 5px; margin: 8px 6px"
                />
              </van-col>
              <van-col span="18">
                <van-notice-bar
                  left-icon="volume-o"
                  :scrollable="false"
                  style="color: red; background-color: #fff; right: 24px">
                  <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="3000"
                    :show-indicators="false">
                    <van-swipe-item class="ellipsis">
                      <router-link to="#"
                        >辛丑年新春书市|每满79减30（附送手帐本1个）</router-link>
                    </van-swipe-item>
                    <van-swipe-item class="ellipsis">
                      <router-link to="#">疫情期间发货公告</router-link></van-swipe-item>
                    <van-swipe-item class="ellipsis">
                      <router-link to="#">新用户注册即送10元!</router-link></van-swipe-item>
                  </van-swipe>
                </van-notice-bar>
              </van-col>
            </van-row>
            <!-- 资讯内容 -->
          </div>
          <!-- 广告轮播 -->
          <div>
            <van-swipe
              :autoplay="3000"
              style="position: initial"
              id="indicators"
            >
              <van-swipe-item
                v-for="(image, index) in books_images"
                :key="index"
              >
                <router-link to=""
                  ><img v-lazy="image" style="width: 100%"
                /></router-link>
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 广告轮播 -->
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="books_subhead">
        <span style="margin-left: 10px">今日值得买</span>
        <router-link to="">更多»</router-link>
      </div>
      <div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(item, i) of booksimg.slice(0, 6)" :key="i">
            <router-link to="">
              <van-image :src="item.img_imgs" style="width: 100%" />
              <van-grid-item
                style="color: #000; font-size: 0.9rem"
                class="basis">
                {{ item.img_subhead.slice(0, 5) }}…</van-grid-item>
              <van-grid-item style="color: red; padding: 0" class="books_font">
                ￥{{ item.img_pric }}
                <!-- ￥{{((5-10)*Math.random() + 10).toFixed(2)}}  -->
                <s style="color: #999999"
                  >￥{{ ((55 - 50) * Math.random() + 50).toFixed(2) }}
                </s>
              </van-grid-item>
            </router-link>
          </van-grid-item>
        </van-grid>
        <div class="bookAgent">
          <router-link to="">
            <img
              src="http://image31.bookschina.com/pro-images/sbanner/700185.jpg?id=2"
              alt=""
              style="width: 100%"/>
          </router-link>
        </div>

        <div
          style="height: 40px; display: flex; justify-content: space-between"
          class="dumpling">
          <span>
            <img
              src="../assets/img/bookmark.png"
              style="height: 30px; vertical-align: middle; margin-top: 5px"
              alt=""/> </span
          ><router-link to="">更多»</router-link>
        </div>

        <div>
          <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item, i) of booksgroup.slice(0, 6)" :key="i">
              <router-link to="">        
                  <van-image :src="item.group_imges_01" style="width: 100%" />
                <van-grid-item
                  style="color: #000; font-size: 0.9rem; line-height: 18px"
                  class="pling">
                  {{ item.group_minut.slice(0, 30) }}…
                </van-grid-item>
                <van-grid-item
                  style="color: red; font-size: 0.8rem; display: flex"
                  class="books_save">
                  团购价格:￥{{ item.group_save }}</van-grid-item>
                <van-grid-item
                  style="
                    color: #999;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;"
                  class="books_font">
                  <s style="font-size: 0.85rem">原价￥{{ item.group_original }}
                  </s>
                  <span class="discount">
                    <router-link to="">{{item.group_discount}}</router-link></span>
                </van-grid-item>
              </router-link>
            </van-grid-item>
          </van-grid>
        </div>
        <div style="height:40px;" class="dumpling">
          <h3>
            <img
              src="../assets/img/books_buzz.png"
              style="height: 30px; margin-top: 5px;"
              alt=""/> </h3>
        </div>
        <div>
          <div v-for="(item, i) of booksdeta.slice(0,1)" :key="i" style="display: flex;">
            <div>
              <router-link to="">
            <van-image :src="item.deta_deimg" style="width:132px;height:132px;" />
           </router-link>  
            </div> 

           <div>  
        
           </div>

          </div>
          <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item, i) of booksdeta.slice(1,3)" :key="i">
            <router-link to="">
              <van-image :src="item.deta_deimg" style="width: 100%" />
              <van-grid-item
                style="color: #000; font-size: 0.9rem"
                class="basis">
                {{ item.deta_details.slice(0, 5) }}…</van-grid-item>
              <van-grid-item style="color: red; padding: 0" class="books_font">
                ￥{{ item.deta_price }}
                <!-- ￥{{((5-10)*Math.random() + 10).toFixed(2)}}  -->
                <s style="color: #999999"
                  >￥{{ ((55 - 50) * Math.random() + 50).toFixed(2) }}
                </s>
              </van-grid-item>
            </router-link>
          </van-grid-item>
        </van-grid></div>

        <div style="height: 40px;background-color: #efbf41;
      position: relative;display: flex;align-items: center;justify-content: center;">
             <router-link to="" style=" color: #5f1a1a;">查看五星书>> </router-link>
           </div>
            <div >
          <h3 style="height:40px;padding: 5px 0px;" class="dumpling">
            <img
              src="../assets/img/books_recommend.png"
              style="height: 30px; margin: 5px 0px;"
              alt=""/> </h3>
        </div>
        <div v-for="(item,i) in recommendImg" :key="i" style="">
          <img :src=item.recommend alt="" style="width:48%;height:50%;float: left;margin: 3px;"/>
        </div>
          <div>
            <img
              src="../assets/img/books_newbooks.png"
              style="height: 30px; margin: 5px 0px;"
              alt=""/> 
        </div>
        <div >
          <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(item, i) of booksImgp.slice(3,6)" :key="i">
            <router-link to="">
              <van-image :src="item.imgp_imgp" style="width: 100%" />
              <van-grid-item
                style="color: #000; font-size: 0.9rem"
                class="basis">
                {{ item.imgp_name.slice(0, 5) }}…</van-grid-item>
              <van-grid-item style="color: red; padding: 0" class="books_font">
                ￥{{ item.imgp_pric }}
                <!-- ￥{{((5-10)*Math.random() + 10).toFixed(2)}}  -->
                <s style="color: #999999"
                  >￥{{ ((55 - 40) * Math.random() + 40).toFixed(2) }}
                </s>
              </van-grid-item>
            </router-link>
          </van-grid-item>
        </van-grid>
        </div>
        <div style="display: flex;justify-content: center;margin: 5px 0px;">
         <img src="../assets/img/books_parting.png" alt="" style="width: 150px;height: 40px;"/>
        </div>
        <div style="position: relative;top: 0px;" >
          <van-sticky >
 <van-tabs animated >
  <van-tab title="总榜" ><router-link to=""> 
    <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item, i) of booksImgp.slice(0,12)" :key="i">
            <router-link to="">
              <van-image :src="item.imgp_imgp" style="width: 100%" />  
              <van-grid-item
                style="color: #000; font-size: 0.9rem"
                class="basis">
                {{ item.imgp_name.slice(0, 5) }}…</van-grid-item>
              <van-grid-item style="color: red; padding: 0" class="books_font">
                ￥{{ item.imgp_pric }}
                <!-- ￥{{((5-10)*Math.random() + 10).toFixed(2)}}  -->
                <s style="color: #999999"
                  >￥{{ ((55 - 40) * Math.random() + 40).toFixed(2) }}
                </s>
              </van-grid-item>
            </router-link>
          </van-grid-item>
        </van-grid>
    </router-link></van-tab>
  <van-tab title="文学" > <router-link to=""></router-link> 内容 2</van-tab>
  <van-tab title="社科" > <router-link to=""></router-link> 内容 3</van-tab>
  <van-tab title="少儿" > <router-link to=""></router-link> 内容 4</van-tab>
  <van-tab title="艺术" > <router-link to=""></router-link> 内容 5</van-tab>
  <van-tab title="生活" > <router-link to=""></router-link> 内容 6</van-tab>
  <van-tab title="文教" > <router-link to=""></router-link> 内容 7</van-tab>
</van-tabs></van-sticky>

        </div>
      </div>

       <div style="position: relative;
    z-index: 99;"> 
          <div style="height:48px;background-color:#F3F3F3;
      position: relative;display: flex;align-items: center;justify-content: center;">
             <router-link to="" style=" color: #969799;">进入畅销榜 >> </router-link>
           </div>
           <div style="height:69px;display: flex;
    justify-content: space-evenly;" >
             <van-button  style="width:50px;"  url="/vant/mobile.html">登陆</van-button>
              <van-button style="width:50px;"   to="index">注册</van-button>
           </div>
           <div style="height:36px;display: flex;
    justify-content: space-evenly;">
           <router-link to="" style="color:#646566;" >触屏版</router-link>
           <router-link to="" style="color:#646566;" >电脑版</router-link>
           <router-link to="" style="color:#646566;" >帮助</router-link>
           </div>
           <div style="
    height: 95px;
    display: flex;
    color: #969799;
    justify-content: center;
    font-size: 0.88rem;">
             Copyright 懒人书柜网©2018 m.wbookfair.com
           </div></div>

    </div>
    <!-- 面板区域结束 -->

    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="booksTab" fixed style="z-index: 100;" >
      <mt-tab-item id="home" href="/">
        <img
          src="../assets/img/base/home_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'home'"/>
        <img
          src="../assets/img/base/home_disable.png"
          slot="icon"
          alt=""
          v-else/>
        <b>首页</b></mt-tab-item>
      <mt-tab-item id="classify" href="/classify">
        <img
          src="../assets/img/base/classify_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'classify'"/>
        <img
          src="../assets/img/base/classify_disable.png"
          slot="icon"
          alt=""
          v-else/>
        <b>分类</b>
      </mt-tab-item>
      <mt-tab-item id="service" href="#">
        <img
          src="../assets/img/base/service_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'service'"
        />
        <img
          src="../assets/img/base/service_disable.png"
          slot="icon"
          alt=""
          v-else
        />
        <b> 客服</b>
      </mt-tab-item>
      <mt-tab-item id="cart" href="/cart">
        <img
          src="../assets/img/base/cart_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'cart'"
        />
        <img
          src="../assets/img/base/cart_disable.png"
          slot="icon"
          alt=""
          v-else
        />
        <b>购物车</b></mt-tab-item>
      <mt-tab-item id="my" href="/login">
        <img
          src="../assets/img/base/my_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'my'"
        />
        <img
          src="../assets/img/base/my_disable.png"
          slot="icon"
          alt=""
          v-else
        />
        <b>我的 </b>
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
import {VanCard} from "vant"

export default {
  name: "Swiper",
  data() {
    return {
      booksTab: "home",
      booksDeta: [],
      books_images: [
        "http://image31.bookschina.com/pro-images/spic/fzp700185.jpg",
        "http://image31.bookschina.com/pro-images/201230bg/700185.jpg?=2",
        "http://image31.bookschina.com/pro-images/201230wz/700185.jpg?=2",
      ],
      booksimg: [],
      booksgroup: [],
      booksdeta:[],
      recommendImg:[
        {recommend:'http://image31.bookschina.com/pro-images/sbanner/305417.jpg'},
        {recommend:'http://image31.bookschina.com/pro-images/sbanner/305197.jpg'},
        {recommend:'http://image31.bookschina.com/pro-images/spic/wc305212.jpg?id=2'}
      ],
      booksImgp:[],
      navigation:[
        {navigImg:require('../assets/img/page/books_active.png'),name:'畅销榜'},
        {navigImg:require('../assets/img/page/books_weed.png'),name:'淘书团'},
        {navigImg:require('../assets/img/page/books_mail.png'),name:'9.9包邮'},
        {navigImg:require('../assets/img/page/books_new.png'),name:'新上架'},
        {navigImg:require('../assets/img/page/books_publish.png'),name:'出版社'},
      ]
    };
  },

  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
    'van-card':VanCard,
    
  },
  computed: {},

  methods: {},

  mounted() {
   
    this.axios.get("/body").then((res) => {
      let results = res.data.results;
      this.booksDeta = results;
    });
    this.axios.get("/img").then((res) => {
      let results = res.data.results;
      this.booksimg = results;
      console.log(this.booksimg);
    });
    this.axios.get("/group").then((res) => {
      let results = res.data.results;
      this.booksgroup = results;
      console.log(this.booksgroup);
    });
     this.axios.get("/deta").then((res) => {
      let results = res.data.results;
      this.booksdeta= results;
      console.log(this.booksdeta);
    });
    this.axios.get("/imgp").then((res) => {
      let results = res.data.results;
      this.booksImgp= results;
      console.log(this.booksImgp);
    });
  },
};
</script>
<style>
/* 头部渐变色 */
.Header {
  padding: 0px 5px;
  background-color: #e70002;
  background: -moz-linear-gradient(top, #fe2828 0%, #e60000 100%);
  background: -webkit-linear-gradient(top, #fe2828 0%, #e60000 100%);
  background: -o-linear-gradient(top, #fe2828 0%, #e60000 100%);
  background: linear-gradient(to bottom, #fe2828 0%, #e60000 100%);
}
/* 头部渐变色 */

/* 输入框定位 */
.books_input {
  width: 210px;
  height: 28px;
  border-radius: 15px;
  padding-left: 28px;
  font-size: 0.9rem;
  margin-right: 5px;
  border: none;
  text-shadow: none;
  outline-color: transparent;
  box-shadow: none;
}
/* 输入框定位 */

.books_seek {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0px 8px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.mint-tab-item b {
  color: rgb(138, 138, 138);
}

.mint-swipe-indicators {
  height: 18px;
  position: relative;
  top: 122px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(50%);
}
.mint-swipe-indicators div {
  color: rgb(206, 47, 81);
}
.van-swipe__indicators--active {
  background-color: #ee290f;
  opacity: 1;
}

.van-swipe {
  top: 95px;
}

/* 导航 */
.booksRow {
  height: 90px;
  position: relative;
  top: 52px;
  padding: 0px 12px;
  margin-top: 10px;
}

.booksRow img {
  width: 48px;
  padding-bottom: 2px;
}
.booksRow b {
  font-size: 0.9rem;
  margin-left: 4px;
  color: #000;
}
/* 导航 */

/* 资讯 */

.ellipsis {
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice-swipe a {
  color: #000;
}
/* 资讯 */

/* 副标题 */
.books_subhead {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9bd00;
  margin-top: 8px;
}
.books_subhead span,
a {
  color: #fff;
}

.books_subhead a {
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 5px 10px;
  font-size: 0.5rem;
  line-height: 0.28rem;
  overflow: hidden;
}
/* 副标题 */
.basis div {
  padding: 10px;
}

.books_font {
  font-size: 1rem;
}

.books_font div {
  height: 20px;
  display: contents;
}
.dumpling a {
  color: #666;
  border: 1px solid #666;
  border-radius: 0.8rem;
  padding: 2px 10px;
  font-size: 0.5rem;
  height: 16px;
  margin: 10px 10px;
}
.pling ::before {
  content: "团";
  background-color: #e60000;
  color: #fff;
}
.pling > div {
  display: contents;
}
.books_save > div {
  padding: 10px 0px;
}
.discount {
  color: #fff;
  background-color: #efb64d;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  font-size: 16px;
  margin-left: 10px;
}
.van-tabs__line{
  width: 122px !important;
  top:0px  !important;
  bottom: 0px !important;
  
}
.van-tab--active{
  color: #EE0A24 !important;
}
.van-tabs--line .van-tabs__wrap {
    height: 52px !important;
}
.van-tabs__wrap--scrollable .van-tab {
    border-right: solid #e8dede 0.06rem !important;
    border-bottom: solid #e8dede 0.06rem !important;
    padding: 0px 47px !important;
}
.van-button--normal {
    padding: 0 !important;
}
.van-button--default {
    color: #323233 !important;
    background-color: #fff  !important;
}
</style>
