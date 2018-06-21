<template>
	<div class="topnav" :style="{'top':topnavtop}">
		<div class="topleft">
			<p class="faq" @click="showfaq">FAQ</p>
		    <a class="facebook" href="https://www.facebook.com/pirateconquest" target="_Blank"></a>
        <a class="twitter" href="https://twitter.com/pirateconquest" target="_Blank"></a>
		    <a class="discord" href="https://discord.gg/PPaBZ9c" target="_Blank"></a>
		    <a class="telegram" href="https://t.me/pirateconquest" target="_Blank"></a>
		    <div class="wechat" @mouseover="showwechatimg" @mouseout="hidewechatimg"><div class="wechatimg" v-show="showwechat"></div></div>
		    <div class="qq" @mouseover="showqqimg" @mouseout="hideqqimg"><div class="qqtext" v-show="showqq"></div></div>
		</div>
		<div class="topright">
			<div class="row">
          <div class="col-50" @click="login"><p class="text-center" v-bind:title="mytitlename">{{username.username}}</p></div>
          <div class="col-50"><p class="text-center"  @click="myassets">{{$t("message.game_title_myassets")}}</p></div>
      </div>
	    <ul class="language" v-bind:class="{'open':selectlan}" @click="openlanbox">
	        <li></li>
	        <li class="en" @click="changeLocale('en')" v-show="selectlan&&!lan_en"></li>
	        <li class="zh" @click="changeLocale('zh-ch')" v-show="selectlan&&!lan_zh"></li>
          <!-- <li class="ko" @click="changeLocale('ko')" v-show="selectlan&&!lan_ko"></li>
          <li class="ja" @click="changeLocale('ja')" v-show="selectlan&&!lan_ja"></li>
          <li class="ru" @click="changeLocale('ru')" v-show="selectlan&&!lan_ru"></li> -->
          
	    </ul>
      <div class="invite" @click="showinvite"><p>{{$t("message.home_button_invite")}}</p></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'topnav',
  data () {
    return {
      showFAQ: false,
      showwechat: false,
      showqq: false,
      selectlan: false,
      topnavtop: "",
    }
  },
  methods: {
  	showfaq: function () {
      this.$store.dispatch("showPOPUP");
      this.$store.dispatch("showfaq");
      this.$store.dispatch("showshadow");
    },
    showwechatimg: function () {
      this.showwechat = true;
    },
    hidewechatimg: function () {
      this.showwechat = false;
    },
    showqqimg: function () {
      this.showqq = true;
    },
    hideqqimg: function () {
      this.showqq = false;
    },
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
    myassets: function () {
      this.service.myassets();
    },
    openlanbox: function () {
      this.selectlan = this.selectlan?false:true;
    },
    closeFAQ: function () {
      this.$store.dispatch("hidefaq");
      this.$store.dispatch("hideshadow");
    },
    showinvite: function () {
      this.$store.dispatch("showbigpopup",{invite:true});
      this.$store.state.buymsg.invite = true;
    }
  },
  created () {
    
  	
  },
  mounted () {
    
    
  },
  computed: {
  	username () {
      return {
        username:this.$store.state.username
      }
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
    
  },
  destroyed () {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topnav{
	width: 100%;
  min-width: 1000px;
	height: 5%;
	position: fixed;
	top: 20px;
	background:rgba(0,0,0,0.5); 
  z-index: 100;
}
.topleft{
	width: 50%;
	height: 100%;
	position: absolute;
	left: 0;
}
.faq,.twitter,.facebook,.discord,.telegram,.wechat,.qq{
  display: block;
  float: left;
  margin-top: 1%;
}
.faq:hover,.twitter:hover,.facebook:hover,.discord:hover,.telegram:hover,.wechat:hover,.qq:hover{
  cursor: pointer;
}
.faq{
  font-size: 0.9em;
  font-weight: 700;
  color: #fff;
  margin-left: 41.3%;
  margin-top: 2.2%;
}
@media all and (max-width: 1500px){
  .faq{
    margin-left: 38%;
    margin-top: 2.4%;
  }
}
@media all and (max-width: 1300px){
  .faq{
    margin-left: 35%;
    margin-top: 2.6%;
  }
}
@media all and (max-width: 1200px){
  .faq{
    margin-left: 31%;
    margin-top: 2.8%;
  }
}
.twitter,.facebook,.discord,.telegram,.wechat,.qq{
  width: 3%;
  height: 74%;
  margin-left: 0.6%;
}
.twitter{
  background:url("../../assets/top3.png") center center no-repeat; 
  background-size: 100%;
}
.facebook{
  margin-left: 0.5%;
  background:url("../../assets/top2.png") center center no-repeat; 
  background-size: 100%;
}
.discord{
  margin-left: 0.4%;
  background:url("../../assets/top4.png") center center no-repeat; 
  background-size: 100%;
}
.telegram{
  margin-left: 0.4%;
  background:url("../../assets/top5.png") center center no-repeat; 
  background-size: 100%;
}
.wechat{
  margin-left: 0.4%;
  background:url("../../assets/top6.png") center center no-repeat; 
  background-size: 100%;
}
.qq{
  margin-left: 0.4%;
  background:url("../../assets/top7.png") center center no-repeat; 
  background-size: 100%;
}
.copyright{
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  color: rgb(81,86,96);
  text-align: center;
  margin-top: 3%;
}
.wechatimg{
  width: 400%;
  height: 460%;
  background:transparent; 
  position: relative;
  z-index: 10;
  top: 120%;
  left: 15%;
  background:url("../../assets/wechatimg.png") left top no-repeat; 
  background-size:100%;
}
.wechatimg:hover{
  cursor: default;
}
.qqtext{
  width: 400%;
  height: 460%;
  position: relative;
  z-index: 10;
  top: 120%;
  left: 15%;
  background:url("../../assets/qq.png") left top no-repeat; 
  background-size:100%;
}
.qqtext:hover{
  cursor: text;
}
.topright{
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
}
.invite{
  width: 22%;
  min-width: 145px;
  height: 80%;
  background:url("../../assets/invite.png") center center no-repeat; 
  background-size: 100%;
  position: relative;
  top: 10%;
  right: 2%;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  display: table;
  float: right;
}
.invite:hover{
  cursor: pointer;
}
.invite p{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-left: 14%;
}
.topright ul{
    width: 6%;
    min-width: 0;
    height: 73%;
    min-height: 0;
    float: right;
    background:url("../../assets/arrow.png") right center no-repeat;
    background-size: contain;
    border-radius: 10px;
    position: relative;
    z-index: 12;
    top: 18%;
  }
  .topright ul.open{
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .topright ul>li{
    height: 80%;
    background-color: rgba(0,0,0,.5);
    position: relative;
    left: -9%;
  }
  .topright ul>li:nth-child(1){
    height: 100%;
    background-color: transparent;
    margin-bottom: 10%;
  }
  .enapp .topright ul>li:nth-child(1){
    background:url("../../assets/USA.png") center center no-repeat;
    background-size: 100% 110%; 
  }
  .zhapp .topright ul>li:nth-child(1){
    background:url("../../assets/CHINA.png") center center no-repeat;
    background-size: 100% 110%; 
  }
  .koapp .topright ul>li:nth-child(1){
    background:url("../../assets/korea.png") center center no-repeat;
    background-size: 100% 110%;
  }
  .jaapp .topright ul>li:nth-child(1){
    background:url("../../assets/japan.png") center center no-repeat;
    background-size: 100% 110%;
  }
  .ruapp .topright ul>li:nth-child(1){
    background:url("../../assets/russion.png") center center no-repeat;
    background-size: 100% 110%;
  }
  .topright ul>li:hover{
    cursor: pointer;
  }
  .topright ul>li:last-child{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .topright .en{
    background:url("../../assets/USA.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(0,0,0,0.5);
  }
  .topright .zh{
    background:url("../../assets/CHINA.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(0,0,0,0.5);
  }
  .topright .ko{
    background:url("../../assets/korea.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(0,0,0,0.5);
  }
  .topright .ja{
    background:url("../../assets/japan.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(0,0,0,0.5);
  }
  .topright .ru{
    background:url("../../assets/russion.png") center center no-repeat;
    background-size: 100% 130%; 
    background-color: rgba(0,0,0,0.5);
  }
  .topright .row{
    width: 20%;
    min-width: 110px;
    height: 100%;
    float: right;
    margin-right: 20%;
    align-items: center;
    justify-content: center;
  }
  .topright div>div:hover{
    cursor: pointer;
  }
  .topright div>div>p{
    width: 100%;
    font-size: 13px;
    color: rgb(255,245,153);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .topright div>div:nth-child(1)>p{
    color: #fff;
  }
  @media all and (min-width: 1200px){
    .topright div>div>p{
      font-size: 15px;
    }
  }
  @media all and (min-width: 1600px){
    .topright div>div>p{
      font-size: 16px;
    }
  }
  @media all and (min-width: 1800px){
    .topright div>div>p{
      font-size: 17px;
    }
  }

</style>