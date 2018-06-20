<template>
    <div class="tab-presale">
      <asidebar></asidebar>
      <div class="addbox" v-show="!showheader.showheader" :style="{'height':addheight}"></div>
      <div class="players" :style="{'height':playersheight}">
        <div class="shadow" :style="{'height':'100%'}" v-show="showshadow || showsmallpopup"></div>
        <div class="pretitle hide" :style="{'height':titleheight}"></div>
        <div class="pretitle2"><img class="prelogo" src="../../assets/pre_logo.png"/><div>{{$t("message.home_title_presale")}}</div></div>
        <div class="pretitle3">{{$t("message.home_title_presalehint")}}</div>
        <ul class="preplayer" :style="{'height':playerheight}">
          <li v-for="(carditem,index) in carditems">
            <div class="soldamount">{{$t("message.game_text_sold")}}{{carditem.soldamount}}/{{carditem.totalamount}}</div>
            <div @mouseenter="light($event)" @mouseleave="none($event)" @click="detail(index + 1)"><div></div></div>
            <div class="attack">{{$store.state.captain[index].attack}}</div><div class="defense">{{$store.state.captain[index].defense}}</div>
            <div class="level" v-bind:class="{'level1':carditem.level == 1}"></div>
          </li>
        </ul>
        <ul class="prebtn" :style="{'height':btnheight}">
          <li v-for="(btnitem,index) in btnitems"><div @click="confirmbuycard(index + 1)" :style="{'height':divheight}" v-bind:class="{'clickbg':clicked[index],'disablebtn':disabledbtn[index]}" @mousedown="btndown(index)"><div v-show="!disabledbtn[index]">{{btnitem.price}} ETH</div><div v-show="disabledbtn[index]">{{$t("message.game_text_soldout")}}</div></div></li>
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
        <div class="pots-title"><div class="ghostlogo"></div><p>{{$t("message.home_title_pots")}}</p></div>
        <div class="pot1">{{$t("message.home_text_pots1")}}</div>
        <div class="pot2">{{$t("message.home_text_pots2")}}</div>
        <div class="pot3">{{$t("message.home_text_pots3")}}</div>
      </div>
      <div class="roadmap" :style="{'height':mapheight}">
        <div class="shadow" :style="{'height':mapheight}" v-show="showshadow"></div>
        <div class="maptitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_roadmap")}}</p></div>
        <div class="width100"><div class="date1">{{$t("message.home_title_roadmapdate1")}}</div><div class="date2">{{$t("message.home_title_roadmapdate2")}}</div><div class="date3">{{$t("message.home_title_roadmapdate3")}}</div></div>
        <div class="maptop"><div class="maptop1">{{$t("message.home_title_planname1")}}</div><div class="maptop2">{{$t("message.home_title_planname2")}}</div><div class="maptop3">{{$t("message.home_title_planname3")}}</div></div>
        <div class="maptext">
          <div class="mapbox1"><div class="maptext1">{{$t("message.home_text_plancontext1")}}</div></div>
          <div class="mapbox2"><div class="maptext2" v-html='$t("message.home_text_plancontext2")'></div></div>
          <div class="mapbox3"><div class="maptext3" v-html='$t("message.home_text_plancontext3")'></div></div>
        </div>
        <div class="mapbottom"><div class="mapbottom1">{{$t("message.home_text_roadmapstatus1")}}</div><div class="mapbottom2">{{$t("message.home_text_roadmapstatus2")}}</div><div class="mapbottom3">{{$t("message.home_text_roadmapstatus2")}}</div></div>
      </div>
      <div class="chests" :style="{'height':chestsheight}">
        <div class="cheststitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_chests")}}</p></div>
        <p class="chestsp">{{$t("message.home_text_chestsintro")}}</p>
      </div>
      <div class="crafting" :style="{'height':craftingheight}">
        <div class="craftingtitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_crafting")}}</p></div>
        <p class="craftingp">{{$t("message.home_text_craftingintro")}}</p>
      </div>
      <div class="boat" :style="{'height':boatheight}">
        <div class="boattitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_pirateboat")}}</p></div>
        <p class="boatp">{{$t("message.home_text_pirateboatintro")}}</p>
      </div>
      <div class="king" :style="{'height':kingheight}">
        <div class="kingtitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_kingofpirates")}}</p></div>
        <p class="kingp">{{$t("message.home_text_kingofpirates")}}</p>
      </div>
      <div class="battles" :style="{'height':battlesheight}">
        <div class="battlestitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_battles")}}</p></div>
        <p class="battlesp">{{$t("message.home_text_battles")}}</p>
      </div>
      <div class="ALLIANCES" :style="{'height':ALLIANCESheight}">
        <div class="ALLIANCEStitle"><div class="ghostlogo"></div><p>{{$t("message.home_title_alliances")}}</p></div>
        <p class="ALLIANCESp">{{$t("message.home_text_alliances")}}</p>
      </div>
    </div>
</template>

<script>
import asidebar from './asidebar'

export default {
  name: 'Presale',
  components: {
    asidebar
  },
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
      chestsheight: "",
      craftingheight: "",
      boatheight: "",
      kingheight: "",
      battlesheight: "",
      ALLIANCESheight: "",
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
      if(this.$store.state.disabledbtn[i-1]){
        return;
      }
      this.$store.dispatch("showbigpopup",{confirmbuycard:true,player:i});
      this.$store.state.buymsg.confirmbuycard = true;
      this.$store.state.buymsg.player = i;
    },
    btndown: function (i) {
      if(this.$store.state.disabledbtn[i-1]){
        return;
      }
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
    var screenwidth = document.documentElement.clientWidth;
    screenwidth = screenwidth<1000?1000:screenwidth;
    /*if(document.documentElement.clientWidth > 1680){
      this.addheight = 0;
      this.playersheight = "100%";
      this.titleheight = "24.5%";
      this.playerheight = "63.3%";
      this.btnheight = "12%";
      this.divheight = "76%";
    }else{*/
      this.addheight = ((document.documentElement.clientHeight) - (screenwidth)/ 1920 * 800)/2 + "px";
      this.playersheight = (screenwidth)/ 1920 * 825 + "px";
      this.potsheight = (screenwidth) /1920 * 875 + "px";
      this.mapheight = (screenwidth) /1920 * 715 + "px";
      this.chestsheight = (screenwidth) /1920 * 860 + "px";
      this.craftingheight = (screenwidth) /1920 * 860 + "px";
      this.boatheight = (screenwidth) /1920 * 860 + "px";
      this.kingheight = (screenwidth) /1920 * 860 + "px";
      this.battlesheight = (screenwidth) /1920 * 860 + "px";
      this.ALLIANCESheight = (screenwidth) /1920 * 860 + "px";
    // }

    var _this = this;
    window.addEventListener("resize",function(){
        // console.log("缩放");
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        val = val<1000?1000:val;
        /*if(document.documentElement.clientWidth > 1680){
          _this.addheight = 0;
          _this.playersheight = "100%";
          _this.titleheight = "24.5%";
          _this.playerheight = "63.3%";
          _this.btnheight = "12%";
          _this.divheight = "76%";
        }else{*/
          _this.addheight = ((val2) - (val)/ 1920 * 800)/2 + "px";
          _this.playersheight = (val)/ 1920 * 825 + "px";
          _this.titleheight = "9.44%";
          _this.playerheight = "70%";
          _this.btnheight = "14.5%";
          _this.divheight = "60%";
          _this.potsheight = val /1920 * 875 + "px";
          _this.mapheight = (val) /1920 * 715 + "px";
          _this.chestsheight = (val) /1920 * 860 + "px";
          _this.craftingheight = (val) /1920 * 860 + "px";
          _this.boatheight = (val) /1920 * 860 + "px";
          _this.kingheight = (val) /1920 * 860 + "px";
          _this.battlesheight = (val) /1920 * 860 + "px";
          _this.ALLIANCESheight = (val) /1920 * 860 + "px";
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
    disabledbtn () {
      return this.$store.state.disabledbtn
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
/*.pretitle{
  width: 46.9%;
  height: 22.2%;
  margin: 0 auto;
  background:url("../../assets/pretitle.png") center center no-repeat;
  background-size: 100% 100%; 
}*/
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
  position: relative;
  left: 0.4%;
}
.preplayer li:nth-child(3){
  width: 33%;
  background:url("../../assets/player3.png") center -3px no-repeat;
  background-size: 100% 100%; 
}
.preplayer li div.level{
  width: 100%;
  height: 10%;
  margin: 0;
  position: relative;
  top: -94.5%;
  left: -18.5%;
}
.preplayer li:nth-child(2) div.level,.preplayer li:nth-child(3) div.level{
  left: -20.5%;
}
.preplayer li div.level.level1{
  background:url("../../assets/level1.png") right center no-repeat;
  background-size: 7% 70%; 
}
@media all and (min-width: 900px){
  .preplayer li div.level{
    top: -93.8%;
  }
}
@media all and (min-width: 1000px){
  .preplayer li div.level{
    top: -93%;
  }
}
@media all and (min-width: 1100px){
  .preplayer li div.level{
    top: -92.5%;
  }
}
@media all and (min-width: 1200px){
  .preplayer li div.level{
    top: -91.5%;
  }
}
@media all and (min-width: 1600px){
  .preplayer li div.level{
    top: -91%;
  }
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
  width: 60%;
  height: 60%;
  margin:0 auto;
  text-align: center;
  font-size: 24px;
  color: rgb(254,238,0);
  display: table;
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
  background:url("../../assets/player1b_click.png");
  background-size: 100% 100%; 
}
.prebtn li>div{
  background:url("../../assets/player1b.png");
  background-size: 100% 100%; 
}
.prebtn li>div.disablebtn{
  background:url("../../assets/player1b_gray.png");
  background-size: 100% 100%;
  color: #fff;
}
.prebtn li>div.clickbg{
  background:url("../../assets/player1b_afterclick.png");
  background-size: 100% 100%; 
}
.preplayer li div{
  width: 80%;
  height: 83%;
  font-size: 0.8em;
  margin: 5% 7%;
  position: relative;
  top: -2.7%;
  left: 2.4%;
  z-index: 2;
  background:transparent;
  overflow: hidden; 
}
.preplayer li div:nth-child(2):hover{
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
  font-size:1.05em;
  font-weight: 700;
  color: rgb(255,230,17);
  padding-top: 5%;
  box-sizing: border-box;
}
@media all and (max-width: 1600px){
  .preplayer li div.soldamount{
    font-size: 18px;
  }
  .prebtn>li>div{
    font-size: 22px;
  }
}
@media all and (max-width: 1400px){
  .preplayer li div.soldamount{
    font-size: 17px;
  }
  .prebtn>li>div{
    font-size: 20px;
  }
}
@media all and (max-width: 1300px){
  .preplayer li div.soldamount{
    font-size: 16px;
  }
  .prebtn>li>div{
    font-size: 19px;
  }
}
@media all and (max-width: 1100px){
  .preplayer li div.soldamount{
    font-size: 15px;
  }
  .prebtn>li>div{
    font-size: 17px;
  }
}
@media all and (max-width: 1000px){
  .preplayer li div.soldamount{
    font-size: 14px;
  }
  .prebtn>li>div{
    font-size: 15px;
  }
}
.preplayer li div.attack,.preplayer li div.defense{
  width: 16%;
  height: 4.3%;
  min-width: 55px;
  min-height: 19px;
  margin: 0;
  left: 23%;
  float: left;
  color: rgb(222,178,94);
  font-family: Microsoft Yahei;
}
.preplayer li div.attack{
  width: 20%;
}
.preplayer li div.defense{
  left:42%;
  min-width: 40px;
}
.preplayer li:nth-child(1) div.attack,.preplayer li:nth-child(1) div.defense{
  top: -16.6%;
}
.preplayer li:nth-child(2) div.attack,.preplayer li:nth-child(2) div.defense{
  top: -16.5%;
}
.preplayer li:nth-child(2) div.defense{
  left: 40%;
}
.preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
  top: -16.7%;
}
.preplayer li:nth-child(3) div.attack{
  left: 22%;
}
.preplayer li:nth-child(3) div.defense{
  left: 40%;
}
@media all and (min-width: 800px){
  .preplayer li div{
    font-size: 12px;
  }
  .preplayer li:nth-child(1) div.attack,.preplayer li:nth-child(1) div.defense,.preplayer li:nth-child(2) div.attack,.preplayer li:nth-child(2) div.defense,
  .preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
    top: -16.6%;
  }
  .preplayer li div.defense{
    left:40%;
  }
  .preplayer li:nth-child(2) div.defense{
    left:38%;
  }
  .preplayer li:nth-child(3) div.defense{
    left:36%;
  }
}
@media all and (min-width: 1100px){
  .preplayer li div{
    font-size: 13px;
  }
  .preplayer li:nth-child(1) div.attack,.preplayer li:nth-child(1) div.defense,.preplayer li:nth-child(2) div.attack,.preplayer li:nth-child(2) div.defense,
  .preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
    top: -16.1%;
  }
  .preplayer li div.defense{
    left:45%;
  }
  .preplayer li:nth-child(2) div.defense{
    left:43%;
  }
  .preplayer li:nth-child(3) div.defense{
    left:42%;
  }
}
@media all and (min-width: 1250px){
  .preplayer li div.defense{
    left:47%;
  }
  .preplayer li:nth-child(2) div.defense{
    left:45%;
  }
  .preplayer li:nth-child(3) div.defense{
    left:44%;
  }
}
@media all and (min-width: 1400px){
  .preplayer li:nth-child(1) div.attack{
    top: -16%;
  }
  .preplayer li:nth-child(1) div.defense{
    top:-15.9%;
  }
  .preplayer li:nth-child(2) div.attack,.preplayer li:nth-child(2) div.defense{
    top: -15.8%;
  }
  .preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
    top: -15.9%;
  }
  .preplayer li div.defense{
    left:49%;
  }
  .preplayer li:nth-child(2) div.defense{
    left:48%;
  }
  .preplayer li:nth-child(3) div.defense{
    left:47%;
  }
}
@media all and (min-width: 1800px){
  .preplayer li:nth-child(1) div.attack,.preplayer li:nth-child(1) div.defense{
    top: -15.5%;
  }
  .preplayer li:nth-child(2) div.attack,.preplayer li:nth-child(2) div.defense,.preplayer li:nth-child(3) div.attack,.preplayer li:nth-child(3) div.defense{
    top: -15.3%;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.pots-title .ghostlogo{
  width: 3.6%;
  height: 30%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.pots-title>p{
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.pot1,.pot2,.pot3{
  position: relative;
  text-align: center;
  font-weight: 600;
  line-height: 1.3;
}
.pot1{
  width: 13%;
  min-width: 150px;
  height: 20.8%;
  font-size: 0.9em;
  color: rgb(120,107,99);
  top: 60%;
  left: 23%;
}
.pot2{
  width: 18.2%;
  min-width: 230px;
  height: 11.6%;
  font-size:0.9em;
  color: rgb(69,102,120);
  top: -26%;
  left: 37.7%;
}
.pot3{
  width: 15.9%;
  min-width: 230px;
  height: 23.3%;
  font-size: 0.9em;
  color: rgb(114,48,39);
  top: 27%;
  left: 55.5%;
}
@media all and (min-width:900px){
  .pot2{
    top:-24%;
  }
}
@media all and (min-width:1000px){
  .pot2{
    top:-23%;
  }
}
@media all and (min-width:1100px){
  .pot2{
    top:-22%;
    left: 39%;
  }
  .pot3{
    left: 57%;
  }
}
@media all and (min-width:1300px){
  .pot2{
    top:-21%;
  }
  .pot1,.pot2,.pot3{
    font-size: 0.9em;
  }
  .pot3{
    left: 58%;
  }
}
@media all and (min-width:1500px){
  .pot1,.pot2,.pot3{
    font-size: 1em;
  }
}
.pretitle2{
  width: 100%;
  height: 9.44%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 600;
}
.pretitle2>.prelogo{
  height: 220%;
  display: flex;
}
.pretitle2>div:nth-child(2){
  display: flex;
}
.pretitle3{
  width: 80%;
  height: auto;
  /*color: rgb(211,193,135);*/
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  margin: 0 auto;
  padding-left: 0;
  padding: 1% 0 1% 1%;
  text-align: center;
}
.roadmap{
  width: 100%;
  background:url("../../assets/roadmap.png") center center no-repeat;
  background-size: 100% 100%; 
}
.roadmap .maptitle{
  width: 80%;
  height: 21.7%;
  position: relative;
  left: -2%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.roadmap .maptitle .ghostlogo{
  width: 4.5%;
  height: 100%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.roadmap .maptitle>p{
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.width100{
  height: 11.6%;
}
.date1,.date2,.date3{
  width: 17.34%;
  height: 100%;
  font-weight: 900;
  float: left;
  box-sizing: border-box;
  padding-top: 1%;
  text-align: center;
  min-width: 250px;
}
.date1{
  color: rgb(175,100,0);
  margin-left: 22%;
}
.date2,.date3{
  color: rgb(10,106,132);
  margin-left: 1%;
}
.roadmap{
  min-height: 532px;
}
.maptop{
  width: 100%;
  height: 7%;
}
.maptop1,.maptop2,.maptop3{
  color: #fff;
  font-weight: 600;
  width: 17.5%;
  min-width: 250px;
  height: 100%;
  float: left;
  text-align: center;
  padding-top: .5%;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
}
.maptop1{
  margin-left: 22%;
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
.mapbox1,.mapbox2,.mapbox3{
  width: 17.5%;
  min-width: 250px;
  height: 120%;
  min-height: 245px;
  float: left;
  background:url("../../assets/roadmapbox.png") center center no-repeat; 
  background-size: 100% 100%;
  position: relative;
  top: -11%;
  z-index: 1;
}
.maptext1,.maptext2,.maptext3{
  width: 100%;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 1.8;
  padding-top: 10%;
  box-sizing: border-box;
}
.mapbox1{
  margin-left: 22%;
}
.mapbox2{
  margin-left: 1%;
}
.mapbox3{
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
  padding-top: 0.9%;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  top: -110%;
  min-width: 250px;
}
.mapbottom1{
  margin-left: 22%;
  background:url("../../assets/mapbottom1.png") center center no-repeat;
  background-size: 100%; 
}
.mapbottom2,.mapbottom3{
  margin-left: 1%;
  background:url("../../assets/mapbottom2.png") center center no-repeat;
  background-size: 100%;
}
@media all and (min-width:1000px){
  .date1,.date2,.date3{
    font-size: 1.3em;
  }
  .maptop1,.maptop2,.maptop3{
    font-size: 1em;
  }
  .maptext1,.maptext2,.maptext3{
    font-size: 1em;
  }
  .mapbottom1,.mapbottom2,.mapbottom3{
    font-size: 1.1em;
  }
}
@media all and (min-width:1200px){
  .date1,.date2,.date3{
    font-size: 19px;
  }
  .maptop1,.maptop2,.maptop3{
    font-size: 14px;
  }
  .maptext1,.maptext2,.maptext3{
    font-size: 14px;
  }
  .mapbottom1,.mapbottom2,.mapbottom3{
    font-size: 15px;
  }
}
@media all and (min-width:1400px){
  .date1,.date2,.date3{
    font-size: 21px;
  }
  .maptop1,.maptop2,.maptop3{
    font-size: 15px;
  }
  .maptext1,.maptext2,.maptext3{
    font-size: 15px;
  }
  .mapbottom1,.mapbottom2,.mapbottom3{
    font-size: 16px;
  }
}
@media all and (min-width:1500px){
  .date1,.date2,.date3{
    font-size: 23px;
  }
  .maptop1,.maptop2,.maptop3{
    font-size: 16px;
  }
  .maptext1,.maptext2,.maptext3{
    font-size: 16px;
  }
  .mapbottom1,.mapbottom2,.mapbottom3{
    font-size: 17px;
  }
}
@media all and (min-width:1700px){
  .date1,.date2,.date3{
    font-size: 25px;
  }
  .maptop1,.maptop2,.maptop3{
    font-size: 17px;
  }
  .maptext1,.maptext2,.maptext3{
    font-size: 17px;
  }
  .mapbottom1,.mapbottom2,.mapbottom3{
    font-size: 18px;
  }
}
@media all and (max-width: 1430px){
  .maptop1{
    margin-left: calc(50% - 393px);
  }
  .mapbox1{
    margin-left: calc(50% - 393px);
  }
  .mapbottom1{
    margin-left: calc(50% - 393px);
  }
  .date1{
    margin-left: calc(50% - 393px);
  }
}
.chests{
  width: 100%;
  background:url("../../assets/chests.png") center center no-repeat; 
  background-size: 100% 100%;
  margin-top: -1px;
}
.chests .cheststitle{
  width: 80%;
  height: 21.7%;
  position: relative;
  left: -2%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cheststitle>.ghostlogo{
  width: 4.5%;
  height: 100%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.cheststitle>p:nth-child(2){
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.chestsp{
  width: 500px;
  margin: 0 auto;
  font-size: 1.1em;
  text-align: center;
}
.crafting{
  width: 100%;
  background:url("../../assets/crafting.png") center center no-repeat; 
  background-size: 100% 100%;
}
.crafting .craftingtitle{
  width: 80%;
  height: 21.7%;
  position: relative;
  left: -2%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.crafting .craftingtitle>.ghostlogo{
  width: 4.5%;
  height: 100%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.craftingtitle>p:nth-child(2){
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.craftingp{
  width: 600px;
  margin: 0 auto;
  font-size: 1.1em;
  text-align: center;
} 
.boat{
  width: 100%;
  background:url("../../assets/boat.png") center center no-repeat; 
  background-size: 100% 100%;
}
.boat .boattitle{
  width: 80%;
  height: 21.7%;
  position: relative;
  left: -2%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boat .boattitle>.ghostlogo{
  width: 4.5%;
  height: 100%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.boattitle>p:nth-child(2){
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.boatp{
  width: 600px;
  margin: 0 auto;
  font-size: 1.1em;
  text-align: center;
} 
.king{
  width: 100%;
  background:url("../../assets/king.png") center center no-repeat; 
  background-size: 100% 100%;
}
.battles{
  width: 100%;
  background:url("../../assets/battles.png") center center no-repeat; 
  background-size: 100% 100%;
  margin-top: -1px;
}
.ALLIANCES{
  width: 100%;
  background:url("../../assets/ALLIANCES.png") center center no-repeat; 
  background-size: 100% 100%;
  margin-top: -1px;
}
.king .kingtitle,.battles .battlestitle,.ALLIANCES .ALLIANCEStitle{
  width: 80%;
  height: 21.7%;
  position: relative;
  left: -2%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.king .kingtitle>.ghostlogo,.battles .battlestitle>.ghostlogo,.ALLIANCES .ALLIANCEStitle>.ghostlogo{
  width: 4.5%;
  height: 100%;
  background:url("../../assets/potslogo.png") center center no-repeat; 
  background-size: 100%;
  display: flex;
}
.kingtitle>p,.battlestitle>p,.ALLIANCEStitle>p{
  display: flex;
  font-size: 2em;
  font-weight: 600;
}
.kingp,.battlesp,.ALLIANCESp{
  width: 600px;
  margin: 0 auto;
  font-size: 1em;
  text-align: center;
} 
.ALLIANCESp{
  position: relative;
  top: -3%;
}
@media all and (min-width: 1100px){
  .kingp,.battlesp,.ALLIANCESp{
    font-size: 1.1em;
  } 
}
</style>