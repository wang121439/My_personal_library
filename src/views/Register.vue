<template>
  <div style="overflow-x:hidden;" >
      <!-- 顶部导航开始 -->
    <mt-header
      title="注册"
      style="
        background-color: #fff;
        color: #000;
        font-size: 1.2rem;
        height: 52px;
        border-bottom: 1px solid #F6F4F5;"
      class="npm"
      fixed
    >
      <div slot="left">
        <router-link to="/login">
          <img
            src="../assets/img/books_return.png"
            alt=""
            style="color: #000;
            width:26px;
            "
          />
        </router-link>
      </div>
      <div slot="right">
        <img
          src="../assets/img/books_ellipsis.png"
          alt=""
          id="ellipsis"
          @click="booksDisplay"
        />
        <img
          src="../assets/img/books_sharp.png"
          alt=""
          class="sharp"
         
          v-if="isDisplay == false"
        />
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->

    <!-- 隐藏菜单 -->
    <div class="conceal" v-if="isDisplay == false">
      <ul class="booksUl">
        <li>
          <img src="../assets/img/base/home_disable.png" slot="icon" alt="" />
          <router-link to="/"> 首页 </router-link>
        </li>

        <li>
          <img src="../assets/img/books_roll.png" slot="icon" alt="" />
          <router-link to="">团购</router-link>
        </li>

        <li>
          <img src="../assets/img/base/classify_disable.png" slot="icon" alt="" />
          <router-link to="">分类 </router-link>
        </li>

        <li>
          <img src="../assets/img/base/cart_disable.png" slot="icon" alt="" />
          <router-link to=""> 购物车</router-link>
        </li>

        <li>
          <img src="../assets/img/base/my_disable.png" slot="icon" alt="" />
          <router-link to="/register"> 我的账户</router-link>
        </li>
      </ul>
    </div>
    <!-- 隐藏菜单 -->
   
   <!-- 用户登录 -->
   <div  style="background-color: rgb(246, 244, 245); width: 100%;height: 700px;"> 
   <div class="booksLogin" >
    <div class="username" style="margin-top: 10px;">
          <span class="name" ></span>
          <div class="measure">
            <mt-field
              style="height:54px;"
              type="text"
              placeholder="用户名/邮箱/手机号"
              v-model="username"
              @blur.native.capture="checkUsername"
              :state="usernameState">
              
            </mt-field>
          </div>
        </div>
        
        <!-- 图形验证码 -->
        <div style="display: flex; justify-content: space-around; margin-top: 10px;">
          <mt-field
            style="width:200px;height:54px;magin-left:10px"
            type="text"
            maxlength="11"
            placeholder="请输入图形验证码">
          </mt-field>
          <!-- <img
            class="get_verification"
            src="http://127.0.0.1:3000/captcha"
            alt="captcha"/> -->
         <img src="../assets/img/books_verification.jpg" style="width:108px;height:54px;margin-right:5px"   alt=""/>
        </div>
        <!-- 图形验证码 -->
           <button class="button" size="large" @click="handle">下一步</button>

      </div>
  
      <!-- 用户登录 -->

  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username: "",
            usernameState: "",
            isDisplay: false,
        }
    },
    methods:{
         booksDisplay() {
      this.isDisplay = !this.isDisplay;
    },
    // 校验用户名
    checkUsername() {
      let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
      if (usernameRegExp.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.$toast({
          message: "用户名错误",
          position: "middle",
          duration: 2500,
        });
        return false;
      }
    },

    handle() {
      if (this.checkUsername() && this.checkPassword()) {
        //此时需要将用户名、密码等信息的提交到WEB服务器
        this.axios
          .post(
            "/login",
            "username=" + this.username + "&password=" + this.password
          )
          .then((res) => {
            //登录失败
            if (res.data.code == 201) {
              this.$messagebox
                .confirm("登录失败,是否注册新用户", "提示信息")
                .then(() => {
                  this.$router.push("/register");
                })
                .catch((error) => {});
            }
            // 登录成功 -- 后续还需要继续调整
            if (res.data.code == 200) {
              this.$router.push("/");
            }
          });
      }
    },

    }
}
</script>

<style>

</style>