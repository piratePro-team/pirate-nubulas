<template>
    <div class="tab-presale">
      <div class="addbox" v-show="!showheader.showheader" :style="{'height':addheight}"></div>
      <div class="players" :style="{'height':playersheight}">
        <div class="shadow" :style="{'height':playersheight}" v-show="showshadow || showsmallpopup"></div>
        <!-- <div class="topright">
          <div class="row">
            <div class="col-40" @click="login"><p class="text-left">{{username.username}}</p></div>
            <div class="col-60"><p class="text-right" @click="myassets">My Assets</p></div>
          </div>
        </div> -->
        <div class="pretitle hide" :style="{'height':titleheight}"></div>
        <div class="pretitle2"></div>
        <div class="pretitle3">{{$t("message.notmiss")}}</div>
        <ul class="preplayer" :style="{'height':playerheight}">
          <li v-for="(carditem,index) in carditems">
            <div class="soldamount">{{$t("message.left")}} : {{carditem.soldamount}}/{{carditem.totalamount}}</div>
            <div @mouseenter="light($event)" @mouseleave="none($event)" @click="detail(index + 1)"><div></div></div>
            <div class="attack">{{$store.state.captain[index].attack}}</div><div class="defense">{{$store.state.captain[index].defense}}</div>
          </li>
        </ul>
        <ul class="prebtn" :style="{'height':btnheight}">
          <li v-for="(btnitem,index) in btnitems"><div @click="confirmbuycard(index + 1)" :style="{'height':divheight}" v-bind:class="{'clickbg':clicked[index]}" @mousedown="btndown(index)"><div>{{btnitem.price}}ETH</div></div></li>
        </ul>
        <div class="sale" v-show="showbigpopup">
          <bigPopup :bigpopup-buymsg="buymsg"></bigPopup>
        </div>
        <div class="alert" v-show="showsmallpopup">
          <smallPopup :smallpopup-msg="alertmsg"></smallPopup>
        </div>
      </div>
      <div class="addbox" v-show="!showfooter.showfooter" :style="{'height':addheight}"></div>
      <div class="introduce-pots" :style="{'height':potsheight}">
        <div class="shadow" :style="{'height':potsheight}" v-show="showshadow"></div>
        <div class="pots-title"></div>
        <div class="pot1">{{$t("message.pot1")}}</div>
        <div class="pot2">{{$t("message.pot2")}}</div>
        <div class="pot3">{{$t("message.pot3")}}</div>
      </div>
      <div class="roadmap" :style="{'height':mapheight}">
        <div class="shadow" :style="{'height':mapheight}" v-show="showshadow"></div>
        <div class="maptitle"></div>
        <div class="width100"><div class="date1">{{$t("message.date1")}}</div><div class="date2">{{$t("message.date2")}}</div><div class="date3">{{$t("message.date3")}}</div></div>
        <div class="maptop"><div class="maptop1">{{$t("message.plan1")}}</div><div class="maptop2">{{$t("message.plan2")}}</div><div class="maptop3">{{$t("message.plan3")}}</div></div>
        <div class="maptext">
          <div class="maptext1">{{$t("message.plancontext1")}}</div>
          <div class="maptext2">
            {{$t("message.plancontext2line1")}}<br/>
            {{$t("message.plancontext2line2")}}<br/>
            {{$t("message.plancontext2line3")}}<br/>
            {{$t("message.plancontext2line4")}}<br/>
          </div>
          <div class="maptext3">
            {{$t("message.plancontext3line1")}}<br/>
            {{$t("message.plancontext3line2")}}<br/>
            {{$t("message.plancontext3line3")}}<br/>
            {{$t("message.plancontext3line4")}}<br/>
            {{$t("message.plancontext3line5")}}<br/>
          </div>
        </div>
        <div class="mapbottom"><div class="mapbottom1">{{$t("message.live")}}</div><div class="mapbottom2">{{$t("message.next")}}</div><div class="mapbottom3">{{$t("message.next")}}</div></div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Presale',
  data () {
    return {
      screenwidth: document.documentElement.clientWidth,
      addheight: "",
      playersheight: "",
      titleheight: "",
      playerheight: "",
      btnheight: "",
      divheight: "",
      buymsg: this.$store.state.buymsg,
      alertmsg: this.$store.state.alertmsg,
      btnitems: this.$store.state.pricearr,
      carditems: this.$store.state.cardarr,
      clicked: this.$store.state.btnclicked,
      potsheight: "",
      mapheight: "",
    }
  },
  methods: {
    light: function (e) {
      var div = e.target;
      div.getElementsByTagName("div")[0].classList.add("light");
    },
    none: function (e) {
      var div = e.target;
      div.getElementsByTagName("div")[0].classList.remove("light");
    },
    confirmbuycard: function (i) {
      this.$store.dispatch("showbigpopup",{confirmbuycard:true,player:i});
      this.$store.state.buymsg.confirmbuycard = true;
      this.$store.state.buymsg.player = i;
    },
    btndown: function (i) {
      this.$store.state.btnclicked[0] = false;
      this.$store.state.btnclicked[1] = false;
      this.$store.state.btnclicked[2] = false;
      this.$store.state.btnclicked[i] = true;
    },
    login: function () {
      if(this.$store.state.username.indexOf("Login") > -1){
        this.service.login();
      }else{
        this.service.setnickname();
      }
    },
    detail: function (i) {
      this.$store.dispatch("showbigpopup",{buycard:true,player:i});
      this.$store.state.buymsg.buycard = true;
      this.$store.state.buymsg.player = i;
    },
    myassets: function () {
      this.service.myassets();
    }
  },
  created:function(){
    console.log("预售栏目的高度是：",this.playersheight);
  },
  mounted:function(){

    /*if(document.documentElement.clientWidth > 1680){
      this.addheight = 0;
      this.playersheight = "100%";
      this.titleheight = "24.5%";
      this.playerheight = "63.3%";
      this.btnheight = "12%";
      this.divheight = "76%";
    }else{*/
      this.addheight = ((document.documentElement.clientHeight) - (document.documentElement.clientWidth)/ 1920 * 800)/2 + "px";
      this.playersheight = (document.documentElement.clientWidth)/ 1920 * 825 + "px";
      this.potsheight = (document.documentElement.clientWidth) /1920 * 860 + "px";
      this.mapheight = (document.documentElement.clientWidth) /1920 * 715 + "px";
    // }

    var _this = this;
    window.addEventListener("resize",function(){
        console.log("缩放");
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        /*if(document.documentElement.clientWidth > 1680){
          _this.addheight = 0;
          _this.playersheight = "100%";
          _this.titleheight = "24.5%";
          _this.playerheight = "63.3%";
          _this.btnheight = "12%";
          _this.divheight = "76%";
        }else{*/
          _this.addheight = ((document.documentElement.clientHeight) - (document.documentElement.clientWidth)/ 1920 * 800)/2 + "px";
          _this.playersheight = (document.documentElement.clientWidth)/ 1920 * 825 + "px";
          _this.titleheight = "9.44%";
          _this.playerheight = "70%";
          _this.btnheight = "14.5%";
          _this.divheight = "62%";
          _this.potsheight = document.documentElement.clientWidth /1920 * 860 + "px";
          _this.mapheight = (document.documentElement.clientWidth) /1920 * 715 + "px";
        // }
        
    })
  },
  computed: {
    showheader () {
      return {
        showheader:this.$store.state.showheader
      }
    },
    showfooter () {
      return {
        showfooter:this.$store.state.showfooter
      }
    },
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
    showshadow () {
      return this.$store.state.showshadow
    },
  },
  destroyed () {
    window.removeEventListener("resize");
  },
  watch: {
    screenwidth () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sale,.alert{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
}
.tab-presale{
  width: 100%;
  height: auto;
  color: #fff;
  background: black;
}
@media all and (min-width: 1680px){
  .tab-presale{
    /*height: 100%;*/
  }
}
.players{
  width: 100%;
  background: url("../../assets/presale.png") center center no-repeat;
  background-size: 100% 100%;
}
.pretitle{
  width: 46.9%;
  height: 22.2%;
  margin: 0 auto;
  background:url("../../assets/pretitle.png") center center no-repeat;
  background-size: 100% 100%; 
}
.topright{
  width: 11.2%;
  min-width: 156px;
  height: 5.6%;
  float: right;
  background:url("../../assets/moresetting.png") center center no-repeat;
  background-size: 100%;
  margin-top: 1.3%;
  margin-right: 5.2%;
}
.topright>div{
  width: 81.4%;
  min-width: 126px;
  height:100%;
  padding: 0 7%;
  box-sizing: border-box;
}
.topright>div>div:hover{
  cursor: pointer;
}
.topright>div>div>p{
  width: 100%;
  font-size: 13px;
  color: rgb(149,139,114);
}
@media all and (min-width: 1200px){
  .topright>div>div>p{
    font-size: 14px;
  }
}
@media all and (min-width: 1600px){
  .topright>div>div>p{
    font-size: 15px;
  }
}
@media all and (min-width: 1800px){
  .topright>div>div>p{
    font-size: 16px;
  }
}
.preplayer,.prebtn{
  width:60%;
  height: 70%;
  margin: 0 auto; 
}
.preplayer li,.prebtn li{
  height: 100%;
  float: left;
}
.preplayer li:nth-child(1){
  width: 33.8%;
  background:url("../../assets/player1.png") center center no-repeat;
  background-size: 100% 100%; 
}
.preplayer li:nth-child(2){
  width: 33%;
  background:url("../../assets/player2.png") center center no-repeat;
  background-size: 100% 100%; 
}
.preplayer li:nth-child(3){
  width: 33%;
  background:url("../../assets/player3.png") center -3px no-repeat;
  background-size: 100% 100%; 
}
.prebtn{
  height: 14.5%;
}
.prebtn>li{
  width: 33.33%;
  padding-left: 1.8%;
  box-sizing: border-box;
}
.prebtn>li>div{
  width: 100%;
  height: 80%;
  margin:0 auto;
  text-align: center;
  font-size: 24px;
  color: rgb(254,238,0);
  display: table;
  padding-top: 3%;
  box-sizing: border-box;
}
.prebtn>li>div>div{
  display: table-cell;
  vertical-align: middle;
  position: relative;
  left: -4%;
}
.prebtn>li>div:hover{
  cursor: pointer;
}
.prebtn li:nth-child(1)>div{
  background:url("../../assets/player1b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(1)>div.clickbg{
  background:url("../../assets/player1b_click.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2)>div{
  background:url("../../assets/player2b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2)>div.clickbg{
  background:url("../../assets/player2b_click.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3)>div{
  background:url("../../assets/player3b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3)>div.clickbg{
  background:url("../../assets/player3b_click.png");
  background-size: 100% 100%; 
}
.preplayer li div{
  width: 80%;
  height: 83%;
  margin: 5% 7%;
  position: relative;
  top: -2.7%;
  left: 2.4%;
  z-index: 2;
  background:transparent;
  overflow: hidden; 
}
.preplayer li div:hover{
  cursor: pointer;
}
.preplayer li div div{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: -3.1%;
  left: 6.2%;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
}
.preplayer li div div.light{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: 110%;
  left: -120%;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
  transition: all .5s linear;
}
.preplayer li div.soldamount{
  width: 70%;
  height: 10%;
  margin: 0 9%;
  top: -2%;
  text-align: center;
  font-size:19px;
  color: rgb(255,186,123);
  padding-top: 5%;
  box-sizing: border-box;
}
.preplayer li div.attack,.preplayer li div.defense{
  width: 16%;
  height: 4.3%;
  margin: 0;
  top: -16.5%;
  left: 23%;
  float: left;
  color: rgb(222,178,94);
}
.preplayer li div.defense{
  left:51%;
}
.preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
  top: -17%;
}
.preplayer li:nth-child(3) div.attack{
  left: 22%;
}
.preplayer li:nth-child(3) div.defense{
  left: 50%;
}
.introduce-pots{
  width: 100%;
  background:url("../../assets/pots.png") center center no-repeat;
  background-size: 100% 100%;
}
.pots-title{
  width: 100%;
  height: 23.3%;
  margin: 0 auto;
  background: url("../../assets/pots-title.png") center center no-repeat;
  background-size: 100%;
}
.pot1,.pot2,.pot3{
  position: relative;
  text-align: center;
  font-weight: 600;
  line-height: 15px;
}
.pot1{
  width: 13%;
  height: 20.8%;
  font-size: 12px;
  color: rgb(120,107,99);
  top: 54%;
  left: 21.8%;
}
.pot2{
  width: 18.2%;
  height: 11.6%;
  font-size:12px;
  color: rgb(69,102,120);
  top: -16%;
  left: 39%;
}
.pot3{
  width: 15.9%;
  height: 23.3%;
  font-size: 12px;
  color: rgb(114,48,39);
  top: 23%;
  left: 60.5%;
}
.pretitle2{
  width: 34.4%;
  height: 9.44%;
  margin: 0 auto;
  background:url("../../assets/pretitle2.png") center center no-repeat;
  background-size: 100%; 
}
.pretitle3{
  width: 37%;
  height: auto;
  color: rgb(211,193,135);
  font-size: 15px;
  margin: 0 auto;
  padding-left: 0;
  padding-bottom: 1%;
  text-align: center;
}
.roadmap{
  width: 100%;
  background:url("../../assets/roadmap.png") center center no-repeat;
  background-size: 100% 100%; 
}
.roadmap .maptitle{
  width: 100%;
  height: 21.7%;
  background:url("../../assets/maptitle.png") center center no-repeat;
  background-size: 100%; 
}
.width100{
  height: 11.6%;
}
.date1,.date2,.date3{
  width: 17.34%;
  height: 100%;
  font-size: 20px;
  font-weight: 900;
  float: left;
  box-sizing: border-box;
  padding-top: 1%;
}
.date1{
  color: rgb(175,100,0);
  margin-left: 27%;
}
.date2,.date3{
  color: rgb(10,106,132);
  margin-left: 1%;
}
.maptop{
  width: 100%;
  height: 7%;
}
.maptop1,.maptop2,.maptop3{
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  width: 17.5%;
  height: 100%;
  float: left;
  text-align: center;
  padding-top: .5%;
  box-sizing: border-box;
}
.maptop1{
  margin-left: 20.3%;
  background:url("../../assets/maptop1.png") center center no-repeat;
  background-size: 100%; 
}
.maptop2,.maptop3{
  margin-left: 1%;
  background:url("../../assets/maptop2.png") center center no-repeat;
  background-size: 100%;
}
.maptext{
  width: 100%;
  height: 38%;
}
.maptext1,.maptext2,.maptext3{
  width: 17.5%;
  height: 100%;
  float: left;
  text-align: center;
}
.maptext1{
  margin-left: 20.5%;
}
.maptext2{
  margin-left: 1%;
}
.maptext3{
  margin-left: 1%;
}
.mapbottom{
  width: 100%;
  height: 7.7%;
}
.mapbottom1,.mapbottom2,.mapbottom3{
  width: 17.5%;
  height: 100%;
  float: left;
  text-align: center;
  padding-top: 0.8%;
  box-sizing: border-box;
}
.mapbottom1{
  margin-left: 20.5%;
  background:url("../../assets/mapbottom1.png") center center no-repeat;
  background-size: 100%; 
}
.mapbottom2,.mapbottom3{
  margin-left: 1%;
  background:url("../../assets/mapbottom2.png") center center no-repeat;
  background-size: 100%;
}
</style>