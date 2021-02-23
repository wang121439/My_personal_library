<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header  class='Header' style="height: 52px;" fixed>
      <div slot="left">
        <img
          src="../assets/img/books_logo.png"
          alt=""
          style="width: 85px; display: inherit;"
          slot="icon"/>
      </div>
      <div slot="right">
        <router-link to="/seek">
          <input
            type="text"
            placeholder="中日恩怨两千年:日出日落"
            class="books_input"
        /></router-link>
        <router-link to="/seek"><img src="../assets/img/books_seek_01.png" class="books_seek" alt=""
        /></router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->

    <!-- 面板区域开始 -->
    <div>
      <mt-tab-container> </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->

    <!-- 底部选项卡开始 -->
    <mt-tabbar fixed v-model="booksTab" style="color:#000">
      <mt-tab-item id="home"   >
        <img
          src="../assets/img/base/home_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'home'"/>
        <img src="../assets/img/base/home_disable.png" slot="icon" alt="" v-else />
        <b> 首页</b></mt-tab-item>
      <mt-tab-item id="classify"  href="#">
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
      <mt-tab-item id="service"  href="#" >
        <img
          src="../assets/img/base/service_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'service'"/>
        <img
          src="../assets/img/base/service_disable.png"
          slot="icon"
          alt=""
          v-else/>
       <b>客服</b></mt-tab-item>
      <mt-tab-item id="cart"  href="#" >
        <img
          src="../assets/img/base/cart_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'cart'"
        />
        <img src="../assets/img/base/cart_disable.png" slot="icon" alt="" v-else />
        <b>购物车</b></mt-tab-item>
      <mt-tab-item id="my" href="/login" >
        <img
          src="../assets/img/base/my_enable.png"
          slot="icon"
          alt=""
          v-if="booksTab == 'my'"/>
        <img src="../assets/img/base/my_disable.png" slot="icon" alt="" v-else />
        <b>我的 </b> </mt-tab-item>

    </mt-tabbar>
    <!-- 底部选项卡结束 -->

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      booksTab:"home",
    };
  },

  components: {},
  computed: {},

  methods: {},
  mounted() {
    this.axios.get("/deta").then((res) => {
      let results = res.data.results;
      this.data = results;
    });
  },
};
</script>
<style>
 #home::selection {
    background:red; color:blue;} 

.books_input {
  width: 200px;
  height: 35px;
  border-radius: 25px;
  padding-left: 28px;
  font-size: 0.8rem;
  margin-right: 5px;
  color: #a1a1a1;
  outline-style: none;
}
.books_seek {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0px 8px;
}

.mint-tab-item b{
  color: rgb(138,138,138);

}
</style>
