<template>
	<div class="POPUP" v-show="showPOPUP" :style="{'top':faqtop,'left':faqleft,'height':faqheight}">
    <div class="faq top90" v-show="showfaq">
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
    <div class="terms top90" v-show="showterms">
        
    </div>
    <div class="policy top90" v-show="showpolicy">
        <h1>Privacy Policy</h1>
        <p>We at Livestar Ltd. (“Livestar,” “we,” or “us”) believe that your privacy is a fundamental right. We have written this privacy policy (this “Policy”) to reflect our values, and to clearly describe what information we collect from you when you use our specially-developed smart contracts to own, transfer, and discover unique equipment (“Equipment”), which can then be visualized on a website (PirateConquest.com) that users can interact with (the “Site”), as well as how we protect and use that information. The smart contracts and the Site are collectively referred to in this Policy as the “App”. By using the App, you agree that we can collect, use, disclose, and process your information as described in this Policy. This Policy only applies to the App, and not to any other websites, products or services you may be able to access or link to via the App. We encourage you to read the privacy policies of any other websites you visit before providing your information to them.</p>
        <h3></h3>
    </div>
    <div class="closefaq" @click="closePOPUP"><p>{{$t("message.general_button_ok")}}</p></div>  
  </div>
</template>

<script>
export default {
  name: 'faq',
  data () {
    return {
      faqtop: "",
      faqleft: "",
      faqheight: "",
      imgarr: [require("../../assets/step1.png"),require("../../assets/step2.png"),require("../../assets/step3.png"),require("../../assets/step4.png"),require("../../assets/step5.png"),require("../../assets/step6.png")],
      
    }
  },
  methods: {
  	closePOPUP: function () {
      this.$store.dispatch("hidePOPUP");
      this.$store.dispatch("hidefaq");
      this.$store.dispatch("hideterms");
      this.$store.dispatch("hidepolicy");
      this.$store.dispatch("hideshadow");
    },

  },
  created () {
    
  	
  },
  mounted () {
    //缩放浏览器时改变头部top,faq位置
    var screenheight = document.documentElement.clientHeight;
    var screenwidth = document.documentElement.clientWidth;
    screenwidth = screenwidth<1000?1000:screenwidth;
    
    this.faqheight = screenheight/10 * 9 + "px";
    this.faqtop = screenheight/10 * 1/2 -17 + "px";
    this.faqleft = (screenwidth )/4 -10 -17 + "px";

    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      val = val<1000?1000:val;
      var screenheight = document.documentElement.clientHeight;
      
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
      _this.faqheight = screenheight/10 * 9 + "px";
    })
    window.addEventListener("scroll",function(){
      var scrolltop = document.documentElement.scrollTop;
      var scrollleft = document.documentElement.scrollLeft;
      var screenheight = document.documentElement.clientHeight;
      var screenwidth = document.documentElement.clientWidth;
      screenwidth = screenwidth<1000?1000:screenwidth;
      _this.faqheight = screenheight/10 * 9 + "px";
      _this.faqtop = screenheight/10 * 1/2 -17 + scrolltop + "px";
      _this.faqleft = (screenwidth )/4 -10-17 + scrollleft + "px";
    })
    
  },
  computed: {
  	showPOPUP () {
      return this.$store.state.showPOPUP
    },
    showfaq () {
      return this.$store.state.showFAQ
    },
    showterms () {
      return this.$store.state.showTerms
    },
    showpolicy () {
      return this.$store.state.showPolicy
    }
    
  },
  destroyed () {
    window.removeEventListener("resize");
    window.removeEventListener("scroll");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .POPUP{
    width: 50%;
    height: 90vh;
    background-color: #fff;
    overflow-y: scroll;
    position: absolute;
    top: 5vh;
    z-index: 120;
    text-align: left;
    line-height: 1.5;
    font-size: 14px;
    border-radius: 10px;
    color:rgb(41,55,98);
    font-family: sans-serif;
    font-variant: none;
    overflow-y: hidden;
  }
  .faq,.terms,.policy{
    width: 100%;
  }
  .faq p,.terms p,.policy p{
    color: rgb(41,55,98);
  }
  .top90{
    padding: 20px 30px;
    width: 100%;
    height: 94%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .faq .step1,.faq .step2,.faq .step3,.faq .step4,.faq .step5,.faq .step6{
    width: 60%;
    height: auto;
  }
  .closefaq{
    width: 100%;
    height: 6%;
    border-top: 1px solid #eee;
    display: table;
  }
  .closefaq p{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 1.2em;
    color: rgb(41,55,98);
  }
  .closefaq:hover{
    cursor: pointer;
  }
  ::-webkit-scrollbar-track-piece {  
    background-color:rgb(213,207,215);  
    border-left:0;
    border-top-right-radius: 10px;
    border-radius: 10px;   
  }  
  ::-webkit-scrollbar {  
      width:17px;  
      height:5px;
      border-radius: 10px;
  }  
  ::-webkit-scrollbar-thumb {  
      background-color:rgb(183,177,185);    
      background-clip:padding-box;  
      border:0;  
      min-height:28px;
      border-radius: 10px;  
  }  
  .faq h1{
    text-align: center;
  }
</style>