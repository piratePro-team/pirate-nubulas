<template>
  <div class="footer-bar" :style="{'height':footerHeight}">
    <div class="shadow" :style="{'height':footerHeight}" v-show="showshadow || showsmallpopup"></div>
    <!-- <div class="topfooter">
      <ul class="list1">
        <li></li>
        <li v-for="(item,index) in items1"><a v-bind:href="item.href" target="_Blank">{{item.title}}</a></li>
      </ul>
      <ul class="list2">
        <li></li>
        <li v-for="(item,index) in items2"><a v-bind:href="item.href" target="_Blank">{{item.title}}</a></li>
      </ul>
      <ul class="list3">
        <li v-for="(item,index) in items3"><a v-bind:href="item.href" target="_Blank">{{item.title}}</a></li>
      </ul>
      <ul class="list4">
        <li v-for="(item,index) in items4"><a v-bind:href="item.href" target="_Blank">{{item.title}}</a></li>
      </ul>
    </div>
    <div class="botfooter"></div> -->
    <p class="faq" @click="showfaq">FAQ</p>
    <a class="twitter" v-bind:href="items3[1].href" target="_Blank"></a>
    <a class="facebook" v-bind:href="items3[0].href" target="_Blank"></a>
    <a class="bitguild"></a>
    <p class="copyright">All rights reserved. 2018 Pirate Conquest</p>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'FooterBar',
      showFAQ: false,
      footerHeight: document.documentElement.clientWidth / 1920 * 145 + "px",
      items1: [{title:"Home",href:this.configData.foot_ul1.foot_ul1_1},{title:"How it works",href:this.configData.foot_ul1.foot_ul1_2},{title:"FAQ",href:this.configData.foot_ul1.foot_ul1_3},{title:"TOS",href:this.configData.foot_ul1.foot_ul1_4},{title:"Pravacy Policy",href:this.configData.foot_ul1.foot_ul1_5}],
      items2: [{title:"Marketplace",href:this.configData.foot_ul2.foot_ul2_1},{title:"My Contacts",href:this.configData.foot_ul2.foot_ul2_2}],
      items3: [{title:"FACEBOOK",href:this.configData.foot_ul3.foot_ul3_1},{title:"TWITTER",href:this.configData.foot_ul3.foot_ul3_2}],
      items4: [{title:"METAMASK",href:this.configData.foot_ul4.foot_ul4_1},{title:"ETHERRUM",href:this.configData.foot_ul4.foot_ul4_2},{title:"BITGUILD",href:this.configData.foot_ul4.foot_ul4_3}]
    }
  },
  methods: {
    lineHeight: function () {
      
    },
    showfaq: function () {
      this.$store.dispatch("showfaq");
      this.$store.dispatch("showshadow");
    },
    
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      // console.log("footerHeight",val/1920*145);
      _this.footerHeight = val / 1920 * 145 + "px";
    })

  },
  computed: {
    showshadow () {
      return this.$store.state.showshadow
    },
    showsmallpopup () {
      return this.$store.state.showsmallpopup
    },
  },
  watch: {
    footerHeight () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faqpopup{
  width: 60%;
  height: 200%;
  background:#fff; 
  position: absolute;
  left: 20%;
  top: -200%;
  overflow-y: scroll;
}
.footer-bar{
  width: 100%;
  background:url("../../assets/footer.png") center center no-repeat;
  background-size: cover;
  border-top: 1px solid transparent;
  position: relative;
  top: -1px;
}
.topfooter{
  width: 100%;
  height: 72.22%;
}
.botfooter{
  width: 100%;
  height: 27.78%;
}
ul{
  height: 100%;
  float: left;
  box-sizing: border-box;
}
ul>li{
  box-sizing: border-box;
  width: 100%;
  display: table;
}
ul>li>a{
  font-family: Windlass,Georgia,"serif";
  font-weight: 400;
  font-size: 15px;
  font-variant: small-caps;
  color: rgb(67,63,52);
  display: table-cell;
  vertical-align: middle;
}

@media all and (max-width:1300px){
  ul>li>a{
    font-size: 13px;
  }
}
@media all and (max-width:1100px){
  ul>li>a{
    font-size: 11px;
  }
}
@media all and (max-width:900px){
  ul>li>a{
    font-size: 10px;
  }
}
@media all and (max-width:800px){
  ul>li>a{
    font-size: 9px;
  }
}
@media all and (max-width:700px){
  ul>li>a{
    font-size: 7px;
  }
}
@media all and (max-width:600px){
  ul>li>a{
    font-size: 5px;
  }
}
.list1{
  width: 9.2%; 
  margin-left: 19.95%;
  display: table;
  align-items: center;
}
.list1 li:nth-child(1){
  height: 30.8%;
  padding-left: 0;
  background:url("../../assets/footer1-1.png") center center no-repeat;
}
.list1 li:nth-child(2){
  height: 10.8%;
  padding-left: 4%;
}
.list1 li:nth-child(3){
  height: 13.1%;
  padding-left: 4%;
}
.list1 li:nth-child(4){
  height: 13.1%;
  padding-left: 4%;
}
.list1 li:nth-child(5){
  height: 11.5%;
  padding-left: 4%;
}
.list1 li:nth-child(6){
  height: 12.3%;
  padding-left: 4%;
}
.list2{
  width: 9.4%;
  margin-left:3.4%;
}
.list2 li:nth-child(1){
  height: 30.8%;
  background:url("../../assets/footer2-1.png") center center no-repeat;
}
.list2 li:nth-child(2){
  height: 10.8%;
  padding-left: 4%;
}
.list2 li:nth-child(3){
  height: 13.1%;
  padding-left: 4%;
}
.list3{
  width: 9%;
  margin-left:9.5%; 
  padding-top: 0.5%;
}
.list3 li:nth-child(1){
  height: 35.8%;
  background:url("../../assets/footer3-1.png") center center no-repeat;
  padding-left: 24%;
}
.list3 li:nth-child(2){
  height: 18.8%;
  background:url("../../assets/footer3-2.png") center center no-repeat;
  padding-left: 24%;
}
.list4{
  width: 10.4%;
  margin-left:12.3%;
  padding-top: 0.5%;
}
.list4 li:nth-child(1){
  height: 35.8%;
  background:url("../../assets/footer4-1.png") center center no-repeat;
  padding-left: 30%;
}
.list4 li:nth-child(2){
  height: 33.8%;
  background:url("../../assets/footer4-2.png") center center no-repeat;
  padding-left: 30%;
}
.list4 li:nth-child(3){
  height: 28.5%;
  background:url("../../assets/footer4-3.png") center center no-repeat;
  padding-left: 30%;
}
.list1 li:nth-child(1),.list2 li:nth-child(1){
  background-size: 100%;
}
.list3 li:nth-child(1),.list3 li:nth-child(2),.list4 li:nth-child(1),.list4 li:nth-child(2),.list4 li:nth-child(3){
  background-size: 100%;
}
.list1,.list2,.list3,.list4{
  box-sizing: border-box;
}
.botfooter{
  width: 100%;
  height: 27.77%;
  background:url("../../assets/footer5.png") center center no-repeat;
  background-size: contain; 
}
.faq,.twitter,.facebook,.bitguild{
  display: block;
  float: left;
  margin-top: 1%;
}
.faq:hover,.twitter:hover,.facebook:hover,.bitguild:hover{
  cursor: pointer;
}
.faq{
  font-size: 13px;
  font-weight: 700;
  color: rgb(81,86,96);
  margin-left: 46.5%;
  margin-top: 1.2%;
}
@media all and (max-width: 1350px){
  .faq{
    margin-left: 46%;
    margin-top: 1.2%;
  }
}
@media all and (max-width: 1150px){
  .faq{
    margin-left: 45.5%;
    margin-top: 1.1%;
  }
}
@media all and (max-width: 1050px){
  .faq{
    margin-left: 45%;
    margin-top: 1%;
  }
}
.twitter,.facebook,.bitguild{
  width: 1.3%;
  height: 16.5%;
  margin-left: .8%;
}
.facebook{
  margin-left: 0.7%;
}
.bitguild{
  margin-left: 0.5%;
}
.copyright{
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  color: rgb(81,86,96);
  text-align: center;
  margin-top: 3%;
}
</style>