<template>
  <div :style="{'height':popupheight,'top':popuptop}" class="smallpopup">
  	<div class="close" @click="enable?closepopup():''"></div>
  	<div class="popup-content">
		  <div class="alert-login" v-show="smallpopupMsg.alert"><p class="colorb">{{smallpopupMsg.alert?smallpopupMsg.alert:""}}</p></div>
  	</div>	  	
  </div>
</template>

<script>
export default {
  name: 'smallPopup',
  props:["smallpopupMsg"],
  data () {
    return {
      popupheight: "",
      popuptop: "",
      
    }
  },
  methods: {
  	closepopup: function () {
  		this.$store.dispatch("closesmallpopup");
  		this.$store.dispatch("clearsmallpopup");
  	},
  },
  created () {
    
  	
  },
  mounted () {
    var val = document.documentElement.clientWidth;
    var val2 = document.documentElement.clientHeight;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    /*if(val > 1680){
      this.popupheight = "25%";
      this.popuptop = "40%";
    }else{*/
      this.popupheight = ((val)/ 1920 * 1080)* 0.25 + "px";
      this.popuptop = (val2 - parseInt(this.popupheight) )/2 + scrolltop + "px";
    // }
    var _this = this;
    window.addEventListener("resize",function(){
        // console.log("缩放")
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        /*if(val > 1680){
          _this.popupheight = "25%";
          _this.popuptop = "40%";
        }else{*/
          _this.popupheight = ((val)/ 1920 * 1080)* 0.25 + "px";
          _this.popuptop = (val2 - parseInt(_this.popupheight) )/2 + scrolltop + "px";
        // }
    })
    window.addEventListener("scroll",function(){
      // console.log("滚动");
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      _this.popuptop = (document.documentElement.clientHeight - parseInt(_this.popupheight) )/2 + scrolltop + "px";
    })
    
  },
  computed: {
    enable () {
      return this.$store.state.enableclose
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
	.smallpopup{
		width: 19%;
		margin: 0 40%;
		color: white;
		position: relative;
		background: url("../../../../assets/smallpopup1.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.close{
		position: absolute;
		right: -3%;
		top: -3%;
		width: 8.5%;
		height: 11%;
    background:url("../../../../assets/closebtn.png") center center no-repeat; 
    background-size: contain;
	}
  .close:hover{
    cursor: pointer;
  }
	.popup-content{
		width: 100%;
		height: 37%;
		position: relative;
  	top: 55%;
  	padding: 7% 10%;
  	box-sizing: border-box;
	}
	.colorb {
    text-align: center;
  }
</style>

