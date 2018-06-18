<template>
  <div class="header-banner" :style="{'height':topheight}">
    <div class="shadow" :style="{'height':topheight}" v-show="showshadow || showsmallpopup"></div>
    <div class="topright">
      <ul class="language" v-bind:class="{'open':selectlan}" @click="openlanbox">
        <li></li>
        <li class="en" @click="changeLocale('en')" v-show="selectlan&&!lan_en"></li>
        <li class="zh" @click="changeLocale('zh-ch')" v-show="selectlan&&!lan_zh"></li>
      </ul>
      <div class="row">
        <div class="col-50" @click="login"><p class="text-center" v-bind:title="mytitlename">{{username.username}}</p></div>
        <div class="col-50"><p class="text-center"  @click="myassets">{{$t("message.game_title_myassets")}}</p></div>
      </div>
    </div>
    <!-- <div class="language"  @click="changeLocale()">{{$t("message.changeLocale")}}</div> -->
    <div class="startbtn hide">
      <div class="btnanimation"></div>
      <div class="btntitle" @mouseover="quicklight($event)" @mouseout="normallight($event)" @click="buycard" :class="{'btntitlebg1':btnlocale1,'btntitlebg2':btnlocale2}"></div>
    </div>
    <div class="topnav hidden" :style="{'height':topnavheight}">
      <ul class="navul">
        <li><router-link to="presale"></router-link></li>
        <li><router-link to="introduction"></router-link></li>           
      </ul>
    </div>
    <div class="logo"></div>
    <div class="myassets" v-show="showbigpopup">
      <bigPopup :bigpopup-buymsg="buymsg"></bigPopup>
    </div>
    <div class="alert" v-show="showsmallpopup">
      <smallPopup :smallpopup-msg="alertmsg"></smallPopup>
    </div>
    <div class="faq" v-show="showfaq" :style="{'top':faqtop,'left':faqleft,'height':faqheight}">
      <div class="closefaq" @click="closeFAQ"></div>
      <h1>{{$t("message.home_title_faq1")}}</h1>
      <h2>{{$t("message.home_title_question1")}}</h2>
      <p>{{$t("message.home_text_answer1")}}</p>

      <h2>{{$t("message.home_title_faq2")}}</h2>
      <h3>{{$t("message.home_title_question2")}}</h3>
      <p>{{$t("message.home_text_answer2")}}</p>
      <h3>{{$t("message.home_title_question3")}}</h3>
      <p>{{$t("message.home_text_answer3")}}</p>
      <h4>{{$t("message.home_title_question4")}}</h4>
      <p v-html='$t("message.home_text_answer4")'></p>
      <br/><img class="step1" :src="imgarr[0]"/><br/>
      <p v-html='$t("message.home_text_answer5")'></p>
      <br/><img class="step2" :src="imgarr[1]"/><br/>
      <h4>{{$t("message.home_title_question6")}}</h4>
      <p>{{$t("message.home_text_answer6")}}</p>
      <br/><img class="step3" :src="imgarr[2]"/><br/>
      <h4>{{$t("message.home_title_question7")}}</h4>
      <p>{{$t("message.home_text_answer7")}}</p>
      <br/><img class="step4" :src="imgarr[3]"/><br/>
      <h4>{{$t("message.home_title_question8")}}</h4>
      <p>{{$t("message.home_text_answer8")}}</p>
      <br/><img class="step5" :src="imgarr[4]"/><br/>
      <h4>{{$t("message.home_title_question9")}}</h4>
      <p>{{$t("message.home_text_answer9")}}</p>
      <br/><img class="step6" :src="imgarr[5]"/><br/>

      <h2>{{$t("message.home_title_faq3")}}</h2>
      <h3>{{$t("message.home_title_question10")}}</h3>
      <p>{{$t("message.home_text_answer10")}}</p>
      <h3>{{$t("message.home_title_question11")}}</h3>
      <p>{{$t("message.home_text_answer11")}}</p>
      <h3>{{$t("message.home_title_question12")}}</h3>
      <p>{{$t("message.home_text_answer12")}}</p>
      <h3>{{$t("message.home_title_question13")}}</h3>
      <p>{{$t("message.home_text_answer13")}}</p>

      <h2>{{$t("message.home_title_faq4")}}</h2>
      <h3>{{$t("message.home_title_question14")}}</h3>
      <p>{{$t("message.home_text_answer14")}}</p>
      <h3>{{$t("message.home_title_question15")}}</h3>
      <p>{{$t("message.home_text_answer15")}}</p>
      <h3>{{$t("message.home_title_question16")}}</h3>
      <p>{{$t("message.home_text_answer16")}}</p>
      <h3>{{$t("message.home_title_question17")}}</h3>
      <p>{{$t("message.home_text_answer17")}}</p>

      <h2>{{$t("message.home_title_faq5")}}</h2>
      <h3>{{$t("message.home_title_question18")}}</h3>
      <p>{{$t("message.home_text_answer18")}}</p>
      <h3>{{$t("message.home_title_question19")}}</h3>
      <p>{{$t("message.home_text_answer19")}}</p>
      <h3>{{$t("message.home_title_question20")}}</h3>
      <p>{{$t("message.home_text_answer20")}}</p>
      <h3>{{$t("message.home_title_question21")}}</h3>
      <p>{{$t("message.home_text_answer21")}}</p>

      <h2>{{$t("message.home_title_faq6")}}</h2>
      <h3>{{$t("message.home_title_question22")}}</h3>
      <p>{{$t("message.home_text_answer22")}}</p>
      <h3>{{$t("message.home_title_question23")}}</h3>
      <p>{{$t("message.home_text_answer23")}}</p>
      
      <h2>{{$t("message.home_title_faq7")}}</h2>
      <h3>{{$t("message.home_title_question24")}}</h3>
      <p>{{$t("message.home_text_answer24")}}</p>
      <h3>{{$t("message.home_title_question25")}}</h3>
      <p>{{$t("message.home_text_answer25")}}</p>
      <h3>{{$t("message.home_title_question26")}}</h3>
      <p>{{$t("message.home_text_answer26")}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  // props:['lang'],
  data () {
    return {
      topheight: document.documentElement.clientWidth/1920*975 + "px",
      topnavheight: document.documentElement.clientWidth/1920*118 + "px",
      screenwidth: document.documentElement.clientWidth,
      buymsg: this.$store.state.buymsg,
      alertmsg: this.$store.state.alertmsg,
      selectlan: false,
      imgarr: [require("../../assets/step1.png"),require("../../assets/step2.png"),require("../../assets/step3.png"),require("../../assets/step4.png"),require("../../assets/step5.png"),require("../../assets/step6.png")],
      faqtop: "",
      faqleft: "",
      faqheight: "",

    }
  },
  methods: {
    changeLocale: function (lan) {
      this.$store.dispatch("change",{"lan":lan});
      console.log(this.$i18n.locale,this.$store.state.locale);
    },
    login: function () {
      if(this.$store.state.username.indexOf("Login") > -1){
        this.service.login();
      }else{
        this.service.setnickname();
      }
    },
    quicklight: function (e) {
      e.target.previousElementSibling.classList.add("quicklight");
    },
    normallight: function(e){
      e.target.previousElementSibling.classList.remove("quicklight");
    },
    buycard: function(){
      this.$store.dispatch("hideheader");
      this.$router.push("/presale");
    },
    myassets: function () {
      this.service.myassets();
    },
    openlanbox: function () {
      this.selectlan = this.selectlan?false:true;
    },
    closeFAQ: function () {
      this.$store.dispatch("hidefaq");
      this.$store.dispatch("hideshadow");
    }
  },
  mounted:function(){
    //缩放浏览器时改变头部top,faq位置
    var screenheight = document.documentElement.clientHeight;
    var screenwidth = document.documentElement.clientWidth;
    this.faqheight = screenheight/10 * 8 + "px";
    this.faqtop = screenheight/10 * 1 -17 + "px";
    this.faqleft = (screenwidth )/10 * 1 - 10 -17 + "px";

    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      var screenheight = document.documentElement.clientHeight;
      _this.topheight = parseInt(val) / 1920 * 975 + "px";
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
      _this.faqheight = screenheight/10 * 8 + "px";
    })
    window.onscroll = function(){
      var scrolltop = document.documentElement.scrollTop;
      var scrollleft = document.documentElement.scrollLeft;
      var screenheight = document.documentElement.clientHeight;
      var screenwidth = document.documentElement.clientWidth;
      _this.faqheight = screenheight/10 * 8 + "px";
      _this.faqtop = screenheight/10 * 1 -17 + scrolltop + "px";
      _this.faqleft = (screenwidth )/10 * 1 - 10 -17 + scrollleft + "px";
    }
  },
  destroyed () {
    window.removeEventListener("resize");
  },
  watch: {
    
  },
  computed: {
    username () {
      return {
        username:this.$store.state.username
      }
    },
    showbigpopup () {
      return this.$store.state.showbigpopup
    },
    showsmallpopup () {
      return this.$store.state.showsmallpopup
    },
    btnlocale1 () {
      if(this.$store.state.locale == "en"){
        return true
      }else if(this.$store.state.locale == "zh-ch"){
        return false
      }
    },
    btnlocale2 () {
      if(this.$store.state.locale == "en"){
        return false
      }else if(this.$store.state.locale == "zh-ch"){
        return true
      }
    },
    showshadow () {
      return this.$store.state.showshadow
    },
    mytitlename () {
      return this.$store.state.username
    }, 
    lan_en () {
      if(this.$store.state.locale == "en"){
        return true
      }else if(this.$store.state.locale == "zh-ch"){
        return false
      }
    },
    lan_zh () {
      if(this.$store.state.locale == "en"){
        return false
      }else if(this.$store.state.locale == "zh-ch"){
        return true
      }
    },
    showfaq () {
        return this.$store.state.showFAQ
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myassets,.alert{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
  }
  .header-banner{
    width: 100%;
    color: #000;
    background:url("../../assets/topbanner.png") center center no-repeat;
    background-size: 100% 100%;
  }
  .logo{
    width: 30%;
    height: 44.6%;
    background:url("../../assets/logo.png") center center no-repeat;
    background-size: contain;
    margin: 0 auto;
    position: relative;
    top: 43%; 
  }
  .language{
    width: 15.89%;
    height: 9%;
    float: right;
    text-align: center;
  }
  .language:hover{
    cursor: pointer;
  }
  .topright{
    width: 16.75%;
    min-width: 205px;
    height: 5.1%;
    min-height: 26px;
    float: right;
    margin-top: 4%;
    margin-right: 9%;
    font-weight: 600;
  }
  .topright>ul{
    width: 26%;
    min-width: 60px;
    height: 100%;
    min-height: 35px;
    float: left;
    background:url("../../assets/arrow.png") 80% center no-repeat;
    background-size: contain;
    background-color: rgba(19,31,51,.7);
    border-radius: 10px;
    position: relative;
    z-index: 12;
  }
  .topright>ul.open{
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .topright>ul>li{
    height: 80%;
    background-color: rgba(19,31,51,.7);
  }
  .topright>ul>li:nth-child(1){
    height: 100%;
    background-color: transparent;
  }
  .enapp .topright>ul>li:nth-child(1){
    background:url("../../assets/USA.png") center center no-repeat;
    background-size: 100% 110%; 
  }
  .zhapp .topright>ul>li:nth-child(1){
    background:url("../../assets/CHINA.png") center center no-repeat;
    background-size: 100% 110%; 
  }
  .topright>ul>li:hover{
    cursor: pointer;
  }
  .topright>ul>li{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .topright .en{
    background:url("../../assets/USA.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(19,31,51,.7);
  }
  .topright .zh{
    background:url("../../assets/CHINA.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(19,31,51,.7);
  }
  .topright>div:nth-child(2){
    width: 70%;
    height:100%;
    min-height: 35px;
    padding: 0 5%;
    box-sizing: border-box;
    margin-left: 33%;
    background:rgba(19,31,51,.7);
    border-radius: 10px;
  }
  .topright>div:nth-child(2)>div:hover{
    cursor: pointer;
  }
  .topright>div>div>p{
    width: 100%;
    font-size: 13px;
    color: rgb(255,245,153);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .topright>div>div:nth-child(1)>p{
    color: #fff;
  }
  @media all and (min-width: 1200px){
    .topright>div>div>p{
      font-size: 15px;
    }
  }
  @media all and (min-width: 1600px){
    .topright>div>div>p{
      font-size: 16px;
    }
  }
  @media all and (min-width: 1800px){
    .topright>div>div>p{
      font-size: 17px;
    }
  }
  .startbtn{
    width: 13.54%;
    height: 9.67%;
    margin: 0 auto;
    position: relative;
    top: 69.74%;
    background: url("../../assets/topbtn.png") center center no-repeat;
    background-size: 100% 100%;
    z-index: 0;
  }
  .btntitle{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    animation: bigger .5s infinite alternate;
    text-align: center;
    position: relative;
    left: 0;
    transition: left .5s;
  }
  .btntitle.btntitlebg1{
    background:url("../../assets/topbtntitle.png") center center no-repeat; 
    background-size: cover;
  }
  .btntitle.btntitlebg2{
    background:url("") center center no-repeat; 
    background-size: cover;
  }
  @keyframes bigger{
    from {left: 0;}
    to {left:-1.5%;}
  }
  .btntitle:hover{
    cursor: pointer;
    animation: none;
  }
  .btnanimation{
    width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: btnlight 1.6s infinite normal;
  }
  @keyframes btnlight{
    0% {background:repeating-linear-gradient(to left top,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    30% {background:repeating-linear-gradient(to left top,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    60% {background:repeating-linear-gradient(to left top,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    64% {background:repeating-linear-gradient(to left top,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    68% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    72% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    76% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    80% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    84% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    88% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    92% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    96% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5)); }
    100% {background:repeating-linear-gradient(to left top,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4)); }

  }
  .btnanimation.quicklight{
    animation: quicklight .3s infinite alternate;
  }
  @keyframes quicklight{
    from {background:rgba(135,62,26,.4); }
    to {background:rgba(255,155,90,.4); }
  }
  .quick{
    width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: none .2s infinite alternate;
  }
  @keyframes none{
    from {background:rgba(155,62,26,.4); }
    to {background:rgba(230,170,100,.4); }
  }
  .topnav{ 
    width:76.88%;
    margin: 0 auto;   
    background: url("../../assets/topnav.png") left top no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 81%;
  }
  .navul{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;      
  }
  .navul li{
    float: left;
    width: 50%;
    height: 100%;
  }
  .navul li>a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .faq{
    width: 80%;
    height: 80vh;
    background-color: #fff;
    overflow-y: scroll;
    position: absolute;
    left: 10%;
    top: 10vh;
    z-index: 12;
    text-align: center;
    padding: 20px 30px;
    line-height: 1.5;
    font-size: 14px;
    background: rgba(151,199,228);
  }
  .faq>p{
    color: #000;
  }
  .faq>.step1,.faq>.step2,.faq>.step3,.faq>.step4,.faq>.step5,.faq>.step6{
    width: 60%;
    height: auto;
  }
  ::-webkit-scrollbar-track-piece {
    width: 10px;
    height: 100%;  
    background-color:rgb(31,45,64);  
    border-left:0;
    border-radius: 7px;   
  }  
  ::-webkit-scrollbar {  
      width:10px;  
      height:5px;
      border-radius: 7px;
  }  
  ::-webkit-scrollbar-thumb {  
      background-color:rgb(61,98,165);  
      background-clip:padding-box;  
      border:0;  
      min-height:28px;
      border-radius: 7px;  
  }  
  ::-webkit-scrollbar-thumb:hover {  
      border:0;  
      background-color:rgb(61,98,165);  
  } 
  .closefaq{
    width: 20px;
    height: 20px;
    background:rgb(61,98,165);
    position: fixed;
    top: 10%;
    left: 10%; 
  }
  .closefaq:hover{
    cursor: pointer;
  }
</style>
