<template>
  <div style="overflow-x:hidden;">
    <!-- 顶部导航开始 -->
    <mt-header
      title="登录"
      style="
        background-color: #fff;
        color: #000;
        font-size: 1.2rem;
        height: 52px;
        border-bottom: 1px solid #F6F4F5;"
      class="npm"
      fixed>
      <div slot="left">
        <router-link to="/">
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
    <div style="background-color: #f6f4f5">
      <div class="booksLogin">
        <div class="username">
          <span class="name"></span>
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

        <div class="password">
          <span class="lock"></span>
          <div class="measure word">
            <mt-field
              id="userpassword"
              style="height:54px;"
              type="password"
              placeholder="请输入密码"
              v-model="password"
              required="required"
              @blur.native.capture="checkPassword"
              :state="passwordState"
            >
            </mt-field>
          </div>

          <div class="userword" id="userpass"></div>
        </div>
        <div style="display: flex; justify-content: space-around;">
          <mt-field
            style="width:233px;height:54px;magin-left:10px"
            type="text"
            maxlength="11"
            placeholder="请输入图形验证码"
          >
          </mt-field>
          <img
            class="get_verification"
            src="http://127.0.0.1:4000/captcha"
            alt="captcha"/>

         <!-- <img src="../assets/img/books_verification.jpg" style="width:108px;height:54px;margin-right:5px"   alt=""/> -->
        </div>
        <button class="button" size="large" @click="handle">登录</button>
        <div class="newpassword">
        <router-link to="/retrieve">忘记密码</router-link>
        <router-link to="/register">新用户注册</router-link>
      </div>
      </div>
      
      <div class="booksElse" style=""> —————其他方式登录—————</div>

      <div
        style="display: flex; justify-content: space-evenly; padding-top: 40px;"
      >
        <router-link to="" class="booksLogn">
          <img src="../assets/img/enter/books_qq.png" alt="" />
          <span>QQ登录</span>
        </router-link>

        <router-link to=" " class="booksLogn">
          <img src="../assets/img/enter/books_wx.png" alt="" />
          <span> 微信登录</span>
        </router-link>

        <router-link to="" class="booksLogn">
          <img src="../assets/img/enter/books_Baidu.png" alt="" />
          <span> 百度登录</span>
        </router-link>
      </div>
      <div
        style="display: flex; justify-content: space-around;margin-top: 75px;padding: 10px 0px;">
        <router-link to="" style="color:#666666;"
          >如何绑定微博和老王图书账户?</router-link
        >
      </div>
    </div>
    <!-- 用户登录 -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      //用户名、密码
      username: "",
      password: "",
      //用户名、密码的状态
      usernameState: "",
      passwordState: "",
      isDisplay: false,
      captcha:'',
      showPwd:false
    };
  },

  mounted() {
    var password = document.getElementById("userpassword");
    var anniu = document.getElementById("userpass");
    anniu.addEventListener("click", function() {
      if (password.type === "password") {
        password.setAttribute("type", "text");
        anniu.classList.add("yincang");
      } else {
        password.setAttribute("type", "password");
        anniu.classList.remove("yincang");
      }
    });
    
  },

  methods: {
    


    // 显示隐藏菜单
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
    // 校验密码
    checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{8,16}$/;
      if (passwordRegExp.test(this.password)) {
        // this.passwordState = "success";
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 2500,
        });
        return false;
      }
    },

    // 校验验证码

    //用户注册
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
  },
};
</script>
<style>
.booksUl {
  padding: 0 0.1rem;
}

.booksUl a {
  color: #fff;
  padding-left: 16px;
  font-size: 0.95rem;
}

.conceal {
  width: 38%;
  height: 32%;
  background-color: #000;
  opacity: 0.8;
  position: absolute;
  top: 3.4rem;
  right: 0.4rem;
  border-radius: 0.4rem;
  z-index: 1;
  display: block;
}

/* 登录按钮定位 */
.button {
  width: 351px;
  margin-top: 1.5rem;
  height: 3.8rem;
  border-radius: 5px;
  text-align: center;
  line-height: 1.2rem;
  background: #666a6b;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  outline: none;
  margin-left: 10px;
}
/* 登录按钮定位 */

.conceal img {
  width: 26px;
  vertical-align: middle;
}

.booksLogin {
  position: relative;
  top: 78px;
  width: 375px;
  height: 370px;
  padding: 0 0.2rem 0.2rem;
}

.conceal li {
  height: 1.7rem;
  margin: 0px 8px;
  border-top: 1px solid #5a5a5a;
  padding: 8px 5px 4px 6px;
  display: block;
}

.newpassword > a {
  font-size: 1.1rem;
  color: #666666;
}
.newpassword {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin-top: 10px;
}
.sharp {
  width: 1.36rem;
  position: absolute;
  top: 42px;
  right: 8px;
  z-index: 1;
}

#ellipsis {
  width: 50px;
  position: absolute;
  top: 25px;
  right: 2px;
}

.booksName {
}

.password {
  padding: 15px 0px;
}

/* 用户名密码定位 */
.username,
.password {
  display: flex;
  justify-content: start;
  position: relative;
  top: -8px;
  margin-left: 18px;
}

/* 文本框大小 */
.measure {
  width: 270px;
  height: 54px;
}

/* 密码定位 */
.word i {
  margin-right: 38px;
}

/* 删除图标修改大小 */
.measure i {
  font-size: 25px;
}

/* 背景图片设置 */
.name,
.lock {
  width: 54px;
}
.name {
  background: #e3e3e3 url("../assets/img/enter/books_name.png") no-repeat center;
  background-size: 28px 28px;
}
.lock {
  background: #e3e3e3 url("../assets/img/enter/books_lock.png") no-repeat center;
  background-size: 28px 28px;
}
/* 背景图片设置 */

/* 眼睛切换 */
.userword {
  position: relative;
  top: 12px;
  right: 40px;
  width: 30px;
  height: 30px;
  background-image: url(../assets/img/enter/books_hide.png);
  background-size: 100% 100%;
  cursor: pointer;
}
.userword.yincang {
  background-image: url(../assets/img/enter/books_show.png);
  background-size: 100% 100%;
}
/* 眼睛切换 */

/* 其他方式登录 */
.booksElse {
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  color: #666666;
  margin-top: 40px;
}
/* 其他方式登录 */

/* 登录图标定位 */
.booksLogn {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80px;
}

.booksLogn span {
  color: #666;
  padding-top: 10px;
  padding-left: 2px;
}
/* 登录图标定位 */
</style>
