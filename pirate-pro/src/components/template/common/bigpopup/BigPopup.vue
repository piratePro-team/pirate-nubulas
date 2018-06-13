<template>
  <div :style="{'height':popupheight,'top':popuptop}" class="bigpopup">
  	<div class="close" @click="closepopup"></div>
  	<div v-show="bigpopupBuymsg.buycard" class="buycard">
			<div class="role" :class="{'role1':role1,'role2':role2,'role3':role3}"></div>
		<div class="introduce">
		  	<div class="name"><p class="colorb">{{bigpopupBuymsg.buycard?((bigpopupBuymsg.player == 1)?$t('message.name1'):((bigpopupBuymsg.player == 2)?$t('message.name2'):$t('message.name3'))):""}}</p></div>
		  	<div class="moredetail colorb">{{bigpopupBuymsg.buycard?((bigpopupBuymsg.player == 1)?$t('message.detail1'):((bigpopupBuymsg.player == 2)?$t('message.detail2'):$t('message.detail3'))):""}}</div>
		  	<div class="ability">
		  		<div class="row"><div class="col-70">{{$t("message.attack")}}</div><div class="col-30">{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].attack:""}}</div></div>
		  		<div class="row"><div class="col-70">{{$t("message.defense")}}</div><div class="col-30">{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].defense:""}}</div></div>
		  	</div>
		  	<div class="btn" @click="buycard"><div>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].price:""}}ETH</div></div>
		</div>
  	</div>
	<div v-show="bigpopupBuymsg.confirmbuycard" class="confirmbuycard">
		<div class="known">{{bigpopupBuymsg.player == 1?$t("message.confirm1"):(bigpopupBuymsg.player == 2?$t("message.confirm2"):$t("message.confirm3"))}}<br/>{{$t("message.confirmbuy")}}</div>
		<div class="price"><div>{{confirm_price}}ETH</div></div>
		<div class="cancelbtn" @click="closepopup"></div>
		<div class="nextbtn" @click="buycard"></div>
	</div>
	<div v-show="bigpopupBuymsg.myassets" class="myassets">
		<div class="captain1" v-bind:class="{'hidemycard':!mycaptain1.length}"><div><div>{{mycaptain1.length}}</div></div></div>
		<div class="captain2" v-bind:class="{'hidemycard':!mycaptain2.length}"><div><div>{{mycaptain2.length}}</div></div></div>
		<div class="captain3" v-bind:class="{'hidemycard':!mycaptain3.length}"><div><div>{{mycaptain3.length}}</div></div></div>
	</div>
	<div v-show="bigpopupBuymsg.setnickname" class="setnickname">
		<input class="inputname" type="text" maxlength="16" v-bind:placeholder="alertplaceholder" ref="inputname" @focus="clearplace"/>
		<div class="cancelbtn" @click="closepopup"></div>
		<div class="nextbtn" @click="changenickname"></div>
	</div>	  	
  </div>
</template>

<script>
export default {
  name: 'bigPopup',
  props:["bigpopupBuymsg"],
  data () {
    return {
      popupheight: "",
      popuptop: "",
      showbuypopup: "",
      showconfirmpopup: "",
      alertplaceholder: "",
      
    }
  },
  methods: {
  	closepopup: function () {
  		this.$refs.inputname.value = "";
  		this.alertplaceholder = "";
  		this.$store.dispatch("closebigpopup");
  		this.$store.dispatch("clearbigpopup");
  		
  	},
  	buycard: function () {
  		var i = this.bigpopupBuymsg.player;
  		this.service.buycard(i);
  		this.$store.dispatch("closebigpopup");
  		this.$store.dispatch("clearbigpopup");
  	},
  	changenickname: function () {
  		var name = this.$refs.inputname.value;
  		console.log("设置新昵称名是：",name);
  		if(name){
  			var data = {name:name}
	  		this.service.changenickname(data);
	  		this.closepopup();
  		}else{
  			this.alertplaceholder = "请输入新的昵称";
  		}
  	},
  	clearplace: function () {
  		this.alertplaceholder = "";
  	}
  },
  created () {
  	
  },
  mounted () {
    
    var _this = this;
    window.addEventListener("resize",function(){
        // console.log("缩放")
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        // if(val > 1680){
          // _this.popupheight = "58%";
          // _this.popuptop = "21%";
        // }else{
          _this.popupheight = ((val)/ 1920 * 1080)* 0.58 + "px";
          _this.popuptop = (val2 - parseInt(_this.popupheight) )/2 + document.documentElement.scrollTop + "px";
        // }
    })

    window.addEventListener("scroll",function(){
      // console.log("滚动");
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      _this.popuptop = (document.documentElement.clientHeight - parseInt(_this.popupheight) )/2 + scrolltop + "px";
    })

    var val = document.documentElement.clientWidth;
    var val2 = document.documentElement.clientHeight;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    /*if(val > 1680){
      this.popupheight = "58%";
      this.popuptop = "21%";
    }else{*/
      this.popupheight = ((val)/ 1920 * 1080)* 0.58 + "px";
      this.popuptop = (val2 - parseInt(this.popupheight) )/2 + scrolltop + "px";
    // }
  },
  computed: {
    confirm_price () {
    	if(this.bigpopupBuymsg.player){
    		var index = parseInt(this.bigpopupBuymsg.player - 1);
    		return this.$store.state.captain[index].price;
    	}else{
    		return "-";
    	}
    	
    },
    mycaptain1 () {
    	return this.$store.state.mycaptain1;
    },
    mycaptain2 () {
    	return this.$store.state.mycaptain2;
    },
    mycaptain3 () {
    	return this.$store.state.mycaptain3;
    },
    role1 () {
    	if(this.bigpopupBuymsg.player == 1){
    		return true
    	}else{
    		return false
    	}
    },
    role2 () {
    	if(this.bigpopupBuymsg.player == 2){
    		return true
    	}else{
    		return false
    	}
    },
    role3 () {
    	if(this.bigpopupBuymsg.player == 3){
    		return true
    	}else{
    		return false
    	}
    },
  },
  destroyed () {
  	window.removeEventListener("resize");
  	window.removeEventListener("scroll");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hidemycard{
		display: none;
	}
	.bigpopup{
		width: 42%;
		margin: 0 29%;
		color: rgb(76,38,2);
		position: absolute;
	}
	.close{
		position: absolute;
		right: 0;
		top: 0;
		width: 8.5%;
		height: 11%;
	}
	.close:hover{
		cursor: pointer;
	}
	.buycard{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.role{
		width: 34.4%;
		height: 67.4%;
		position: relative;
		top: 14.2%;
		left: 10%;
	}
	.role.role1{
		background:url("../../../../assets/player1.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.role.role2{
		background:url("../../../../assets/player2.png") center center no-repeat;
		background-size: 107% 100%;
	}
	.role.role3{
		background:url("../../../../assets/player3.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.introduce{
		width: 44.8%;
		height: 74.6%;
		position: absolute;
		top: 14.2%;
		left: 44.4%;
	}
	.name{
		width: 67.5%;
		height: 8.5%;
		position: absolute;
		left: 20%;
	}
	.moredetail{
		width: 100%;
		height: 4em;
		font-size:1em;
		position: absolute;
		top: 8.5%;
		padding: 0 13.7%;
		box-sizing: border-box;
		overflow: hidden;
		word-break: break-all;
		line-height: 1em;
	}
	.moredetail::after{
		content: "...";
		color: rgb(76,38,2);
		position: absolute;
    	bottom: 0;
    	right: 10%;
	}
	
	@media all and (min-width: 1080px){
		.moredetail{
			height: 3.4em;
			font-size:0.9em;
			line-height: 0.9em;
		}
		.moredetail::after{
	    	bottom: 2%;
		}
	}
	@media all and (min-width: 1150px){
		.moredetail{
			height: 3.75em;
			font-size:0.95em;
			line-height: 0.95em;
		}
		.moredetail::after{
	    	bottom: 2%;
		}
	}
	@media all and (min-width: 1270px){
		.moredetail{
			height: 4em;
			font-size:1em;
			line-height: 1em;
		}
		.moredetail::after{
	    	bottom: 2%;
		}
	}
	@media all and (min-width: 1350px){
		.moredetail{
			height: 4.4em;
			font-size:1.1em;
			line-height: 1.1em;
		}
		.moredetail::after{
	    	bottom: 2%;
		}
	}
	@media all and (min-width: 1400px){
		.moredetail{
			height: 4.4em;
			font-size:1.1em;
			line-height: 1.1em;
		}
		.moredetail::after{
	    	bottom: 1%;
		}
	}
	@media all and (min-width: 1520px){
		.moredetail{
			height: 4.6em;
			font-size:1.15em;
			line-height: 1.15em;
		}
		.moredetail::after{
	    	bottom: 1%;
		}
	}
	@media all and (min-width: 1660px){
		.moredetail{
			height: 4.8em;
			font-size:1.2em;
			line-height: 1.2em;
		}
		.moredetail::after{
	    	bottom: 1%;
		}
	}
	.ability{
		width: 100%;
		height: 51%;
		position: absolute;
		top: 29.8%;
	}
	.ability>.row{
		align-items: center;
		width: 60%;
		position: relative;
		left: 26%;
	}
	.ability>.row:nth-child(1){
		height: 14.6%;
		margin-top: 5%;
	}
	.ability>.row:nth-child(2){
		height: 15.9%;
	}
	.ability>.row>.col-30,.ability>.row>.col-70{
		width: auto;
		height: 80%;
		overflow-x: visible;
	}
	.ability>.row>.col-30{
		width: auto;
		position: relative;
		padding: 0 10px;
		background-color: rgb(107,62,19);
		border-radius: 5px;
		color: #fff;
	}
	.btn{
		width: 60.3%;
		height: 18%;
		position: absolute;
		top: 61%;
		left: 14.1%;
		font-size: 24px;
	    color: rgb(135,45,0);
	    text-align: center;
	    display: table;
	    background: url("../../../../assets/price2.png") center center no-repeat;
	    background-size: contain;
	}
	.btn:hover{
		cursor: pointer;
	}
	.btn>div{
		display: table-cell;
		vertical-align: middle;
	}
	/*确认购买卡牌弹窗样式*/
	.confirmbuycard{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.known{
		width: 100%;
		height: 27.4%;
		position: relative;
		top: 20%;
		padding: 4% 16% 6% 14%;
		box-sizing: border-box;
	}
	.price{
		width: 21.7%;
		height: 10.5%;
		margin: 0 auto;
		background:url("../../../../assets/price1.png") center center no-repeat; 
		background-size: 100% 100%;
		position: relative;
		top: 20%;
		display: table;
	}
	.price>div{
		width: 100%;
		height: 100%;
		display: table-cell;
		font-size: 26px;
		color: #fff;
		text-align: center;
		vertical-align: middle;
	}
	.cancelbtn,.nextbtn{
		width: 23.6%;
		height: 9.7%;
		float: left;
		position: relative;
		top: 37.4%;
	}
	.cancelbtn{
		margin: 0 10% 0 19.9%;
	}
	.cancelbtn:hover,.nextbtn:hover{
		cursor: pointer;
	}
	/*我的卡牌弹窗样式*/
	.myassets{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup3.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.captain1,.captain2,.captain3{
		width: 29%;
		height:56%;
		float: left;
		background-color: red;
		position: relative;
		top: 20%;
		left: 5%;
		background: url("../../../../assets/player1.png") center 0 no-repeat;
		background-size: 100% 100%;
	}
	.captain2{
		background: url("../../../../assets/player2.png") center 0 no-repeat;
		background-size: 107% 100%;
	}
	.captain3{
		background: url("../../../../assets/player3.png") -5px 0 no-repeat;
		background-size: 100% 100%;
	}
	.captain1>div,.captain2>div,.captain3>div{
		width: 100%;
		height: 5%;
		position: absolute;
		bottom: -7%;
		display: table;
	}
	.captain1>div>div,.captain2>div>div,.captain3>div>div{
		width: 100%;
		height: 100%;
		diaplay:table-cell;
		vertical-align: middle;
		text-align: center;
		font-size: 16px;
		color: rgb(119,93,71);
	}
	/*设置昵称弹窗样式*/
	.setnickname{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup4.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.inputname{
		width: 51%;
	    height: 8%;
	    display: block;
	    margin: 0 auto;
	    position: relative;
	    top: 32.4%;
	    left: -1.2%;
	    outline: none;
	    border: 0;
	    background: transparent;
	    color: rgb(119,93,71);
	}
	.setnickname .cancelbtn,.setnickname .nextbtn{
		position: relative;
		top: 66.5%;
	}
</style>

