<template>
  <div>
      <!-- 顶部导航开始 -->
<mt-header class='Header' style='height:52px;' fixed>
      <div slot="left">
       <router-link to="/"> 
        <img src="../assets/img/books_return.png" alt="" class="return" style="width:25px">
       </router-link>
        <!-- <span class="seek"><img src="../assets/img/books_seek.png" alt="" class="icon "> </span>  -->
      </div>
      <div slot="right">
       <router-link to="/seek"> 


        <div >


       




  <mt-search v-model="value"  
    style="width: 280px;
    height: 80px;
    position: relative;
    top: 20px;
    right: 41px;">
    <mt-cell
    v-for="(item,i) of booksName"
    :title="item.imgp_name"
    :value="item.value" :key="i">
  </mt-cell>
</mt-search>


          <!-- <van-search
    v-model="value"
    shape="round"
    style=""
    class="seek_input"
    placeholder="请输入搜索关键词"/> -->
          <!-- <mt-field
             class="seek_input"
             style=""
              type="text"
              placeholder="中日恩怨两千年:日出日落">
            </mt-field> -->

          </div>

       <!-- <img src="../assets/img/books_delete.png" alt="" class="icon delete"> -->
        <router-link to="" class="seeks">搜索</router-link>
       </router-link> 
      </div>
    </mt-header>
<!-- 顶部导航结束 -->
<!-- 面板区域开始 -->
 
       <div style="display: block;">  <h2 style="color:#000"> 最近搜索  </h2>   </div>
      
      
    <!-- 面板区域结束 -->

  </div>

</template>

<script>

export default {
  data () {
    return {
      value:'',
      booksName:[],
    };
  },

  components: {},

  computed: {},

  methods: {},
  mounted(){
     this.axios.get("/imgp").then((res) => {
      let results = res.data.results;
      this.booksName= results;
    });

  }
}

</script>
<style>

.seek_input{
   width:270px; 
   
   padding-left: 25px;
   position: relative;
   top: 6px;
   right: 45px;
  min-height: 10px;
  border-radius: 15px;
  padding-left: 28px;
  font-size: 0.9rem;
  margin-right: 5px;
  border: none;
  text-shadow: none;
  outline-color: transparent;
  box-shadow: none;
}

.van-search {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 12px;
    background-color:#ffffff00;
}



.seek{
  width: 18px;
  position: relative;
  right: -10px;
  z-index: 1;
}
.delete{
position: relative;
 right: 30px;

}
.icon,.return{
width: 18px;  
vertical-align: middle;
}
.seeks{
  margin-left: -18px;
  color: #FFFFFF;
  position: relative;
  top: -20px;
  right: 8px;
}
.books_input i{
  font-size: 25px;

}
</style>