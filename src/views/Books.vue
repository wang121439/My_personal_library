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
              style="height: 140px; position: relative; top: 52px"
            >
              <van-swipe-item v-for="(item, i) of booksDeta" :key="i">
                <img v-lazy="item.body_imgb" style="height: 140px" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 轮播图 -->
          <!-- 导航 -->
          <div class="booksRow">
            <van-row type="flex" justify="space-around">
              <van-col span="4">
                <router-link to="#">
                  <img src="../assets/img/page/books_active.png" alt="畅销榜" />
                  <b>畅销榜</b>
                </router-link>
              </van-col>
              <van-col span="4">
                <router-link to="#">
                  <img src="../assets/img/page/books_weed.png" alt="淘书团" />
                  <b>淘书团</b></router-link
                ></van-col
              >
              <van-col span="4">
                <router-link to="#">
                  <img src="../assets/img/page/books_mail.png" alt="9.9包邮" />
                  <b>9.9包邮</b></router-link
                ></van-col
              >
              <van-col span="4">
                <router-link to="#">
                  <img src="../assets/img/page/books_new.png" alt="新上架" />
                  <b>新上架</b></router-link
                ></van-col
              >
              <van-col span="4">
                <router-link to="#">
                  <img
                    src="../assets/img/page/books_publish.png"
                    alt="出版社"
                  />
                  <b>出版社</b></router-link
                ></van-col
              >
            </van-row>
          </div>
          <!-- 导航 -->

          <!-- 资讯内容 -->
          <div
            style="height: 80px; position: relative; top: 38px; margin-top: 5px"
          >
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
                  style="color: red; background-color: #fff; right: 24px"
                >
                  <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="3000"
                    :show-indicators="false"
                  >
                    <van-swipe-item class="ellipsis">
                      <router-link to="#"
                        >辛丑年新春书市|每满79减30（附送手帐本1个）</router-link
                      >
                    </van-swipe-item>
                    <van-swipe-item class="ellipsis">
                      <router-link to="#"
                        >疫情期间发货公告</router-link
                      ></van-swipe-item
                    >
                    <van-swipe-item class="ellipsis">
                      <router-link to="#"
                        >新用户注册即送10元!</router-link
                      ></van-swipe-item
                    >
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
              id="indicators">
              <van-swipe-item
                v-for="(image, index) in books_images"
                :key="index">
                <router-link to=""><img v-lazy="image" style="width: 100%"
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
  <van-grid-item  v-for="(item,i) of booksimg" :key='i' >
    <van-image :src=item.img_imgs style="width:100%" />
  <van-grid-item>{{}}</van-grid-item>
  </van-grid-item>
</van-grid>


      </div>
    </div>
    <!-- 面板区域结束 -->

    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="booksTab" fixed class="booksTab">
      <mt-tab-item id="home" href="/">
        <img
          src="../assets/img/base/home_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'home'"
        />
        <img
          src="../assets/img/base/home_disable.png"
          slot="icon"
          alt=""
          v-else
        />
        <b>首页</b></mt-tab-item
      >
      <mt-tab-item id="classify" href="/classify">
        <img
          src="../assets/img/base/classify_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'classify'"
        />
        <img
          src="../assets/img/base/classify_disable.png"
          slot="icon"
          alt=""
          v-else
        />
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
        <b>购物车</b></mt-tab-item
      >

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
      
    };
  },

  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
  },
  computed: {},

  methods: {


  },


  mounted() {

    
    this.axios.get("/body").then((res) => {
      let results = res.data.results;
      this.booksDeta = results;
    });
    this.axios.get("/img").then((res) => {
      let results = res.data.results;
      this.booksimg = results;
      console.log(this.booksimg)
  let [{img_subhead},{img_imgs},{img_pric}]=this.booksimg;
  let img_subhead=[];

for (let index = 0; index < img_subhead.length; index++) {
  let subhead=img_subhead;
 console.log(img_subhead);
  let [bh,bb]=subhead.split('/');
  console.log(bh);
  //  console.log(bb);

  
}


 
 



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
</style>
