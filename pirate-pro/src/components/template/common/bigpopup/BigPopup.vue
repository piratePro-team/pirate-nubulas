<template>
  <div :style="{'height':popupheight,'top':popuptop}" class="bigpopup">
  	<div class="close" @click="closepopup"></div>
  	<div v-show="bigpopupBuymsg.buycard" class="buycard">
		<div class="role" :class="{'role1':role1,'role2':role2,'role3':role3}"></div>
		<div class="introduce">
		  	<div class="name"><p class="colorb">{{bigpopupBuymsg.buycard?((bigpopupBuymsg.player == 1)?$t("message.game_text_piratename3"):((bigpopupBuymsg.player == 2)?$t("message.game_text_piratename5"):$t("message.game_text_piratename6"))):""}}</p></div>
		  	<div class="moredetail colorb">{{bigpopupBuymsg.buycard?((bigpopupBuymsg.player == 1)?$t('message.game_text_story3'):((bigpopupBuymsg.player == 2)?$t('message.game_text_story5'):$t('message.game_text_story6'))):""}}</div>
		  	<div class="ability">
		  		<div class="row"><div class="col-30">{{$t("message.game_text_attack")}}</div><div class="col-30 colorw">{{bigpopupBuymsg.buycard?($store.state.captain[bigpopupBuymsg.player - 1].attack1+" - "+$store.state.captain[bigpopupBuymsg.player - 1].attack2):""}}</div></div>
		  		<div class="row"><div class="col-30">{{$t("message.game_text_defense")}}</div><div class="col-30 colorw">{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].defense:""}}</div></div>
		  	</div>
		  	<div class="btn bold" @click="buycard" v-bind:class="{'disabled':disabledbtn}"><div>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].price:""}} ETH</div></div>
		</div>
  	</div>
	<div v-show="bigpopupBuymsg.confirmbuycard" class="confirmbuycard">
		<div class="confirmtitle"><div class="ghost"></div><div>{{$t("message.game_title_confirmpurchase")}}</div></div>
		<div class="known">{{$t("message.game_text_confirmpurchase")}}"CAPTAIN {{bigpopupBuymsg.player == 1?$t("message.game_text_piratename3"):(bigpopupBuymsg.player == 2?$t("message.game_text_piratename5"):$t("message.game_text_piratename6"))}}"<br/>{{$t("message.game_hint_blockchain")}}</div>
		<div class="price"><div>{{confirm_price}} ETH</div></div>
		<div class="cancelbtn bold" @click="closepopup"><p>{{$t("message.general_button_cancel")}}</p></div>
		<div class="nextbtn bold" @click="buycard"><p>{{$t("message.general_button_ok")}}</p></div>
	</div>
	<div v-show="bigpopupBuymsg.myassets" class="myassets">
		<div class="myassetstitle"><div class="ghost"></div><div>{{$t("message.game_title_myassets")}}</div></div>
		<div class="captain1 bold" v-bind:class="{'hidemycard':!mycaptain1.length}"><div><div>{{$t("message.game_title_owned")}}{{mycaptain1.length}}</div></div></div>
		<div class="captain2 bold" v-bind:class="{'hidemycard':!mycaptain2.length}"><div><div>{{$t("message.game_title_owned")}}{{mycaptain2.length}}</div></div></div>
		<div class="captain3 bold" v-bind:class="{'hidemycard':!mycaptain3.length}"><div><div>{{$t("message.game_title_owned")}}{{mycaptain3.length}}</div></div></div>
	</div>
	<div v-show="bigpopupBuymsg.setnickname" class="setnickname">
		<div class="setnicktitle"><div class="ghost"></div><div>{{$t("message.game_text_setname")}}</div></div>
		<input class="inputname" type="text" maxlength="16" v-bind:placeholder="alertplaceholder" ref="inputname" @focus="clearplace"/>
		<div class="cancelbtn bold" @click="closepopup"><p>{{$t("message.general_button_cancel")}}</p></div>
		<div class="nextbtn bold" @click="changenickname"><p>{{$t("message.general_button_ok")}}</p></div>
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
  		if(this.$store.state.disabledbtn[i-1]){
  			return;
  		}
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
    disabledbtn () {
    	if(this.$store.state.disabledbtn[this.bigpopupBuymsg.player-1]){
    		return true;
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
		/*min-width: 440px;
		min-height: 343px;*/
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
		background:url("../../../../assets/myplayer1.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.role.role2{
		background:url("../../../../assets/myplayer2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.role.role3{
		background:url("../../../../assets/myplayer3.png") center center no-repeat;
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
		position: relative;
		left: 20%;
	}
	.name>p{
		margin-top: -1%;
		margin-left: 2%;
	}
	.moredetail{
		width: 100%;
		font-size:12px;
		position: relative;
		top: 2.5%;
		padding: 0 7%;
		box-sizing: border-box;
	}
	@media all and (min-width: 1080px){
		.name>p{
			font-size: 14px;
		}
	}
	@media all and (min-width: 1150px){
		.name>p{
			font-size: 16px;
		}
	}
	@media all and (min-width: 1270px){
		.moredetail{
			font-size:13px;
		}
		.name>p{
			font-size: 18px;
		}
	}
	@media all and (min-width: 1350px){
		.moredetail{
			font-size:14px;
		}
		.name>p{
			font-size: 20px;
		}
	}
	@media all and (min-width: 1400px){
		.name>p{
			font-size: 22px;
		}
	}
	@media all and (min-width: 1520px){
		.moredetail{
			font-size:15px;
		}
		.name>p{
			font-size: 24px;
		}
	}
	@media all and (min-width: 1660px){
		.name>p{
			font-size: 26px;
		}
	}
	@media all and (min-width: 1750px){
		.moredetail{
			font-size:20px;
		}
		.name>p{
			font-size: 28px;
		}
	}
	.ability{
		width: 100%;
		padding: 0 7%;
		position: relative;
    	top: 2%;
    	background: url("../../../../assets/ability.png") 21% 20% no-repeat;
    	background-size: 70% 140%;
	}
	.ability>.row{
		align-items: center;
		width: 60%;
		position: relative;
		left: 12%;
	}
	.ability>.row:nth-child(1){
		margin-top: 5%;
	}
	.ability>.row:nth-child(2){
		margin-top: 0;
	}
	.ability>.row>.col-30{
		overflow-x: visible;
		font-size: 12px;
		line-height: 16px;
		padding: 2.5% 0;
		width: auto;
		min-width: 48px;
	}
	.ability>.row>.col-30:nth-child(2){
		background-color: rgb(107,62,19);
		border-radius: 5px;
		padding: 1% 5%;
		width: 40%;
		min-width: 61px;
		justify-content: center;
		margin-left: 2%;
	}
	.btn{
		width: 53%;
		height: 18%;
		position: relative;
		top: 4%;
		left: 11%;
		font-size: 12px;
	    color: rgb(135,45,0);
	    text-align: center;
	    display: table;
	    background: url("../../../../assets/okbtn.png") center center no-repeat;
	    background-size: contain;
	}
	.btn:hover{
		cursor: pointer;
		background: url("../../../../assets/okbtn_click.png") center center no-repeat;
	    background-size: contain;
	}
	.btn.disabled{
		background: url("../../../../assets/cancelbtn.png") center center no-repeat;
	    background-size: contain;
	    color: #fff;
	}
	.btn>div{
		display: table-cell;
		vertical-align: middle;
	}
	@media all and (min-width: 1000px){
		.btn{
			font-size:14px;
		}
		.ability>.row:nth-child(1){
			margin-top: 6%;
		}
	}
	@media all and (min-width: 1100px){
		.btn{
			font-size:16px;
		}
		.ability>.row:nth-child(2){
			margin-top: 0.5%;
		}
	}
	@media all and (min-width: 1150px){
		.ability>.row:nth-child(2){
			margin-top: 1%;
		}
	}
	@media all and (min-width: 1200px){
		.btn{
			font-size:18px;
		}
		.ability>.row>.col-30{
			font-size:13px;
		}
		.ability>.row:nth-child(2){
			margin-top: 1.6%;
		}
	}
	@media all and (min-width: 1300px){
		.btn{
			font-size:20px;
		}
		.ability>.row:nth-child(2){
			margin-top: 2%;
		}
	}
	@media all and (min-width: 1400px){
		.ability>.row:nth-child(2){
			margin-top: 2.6%;
		}
	}
	@media all and (min-width: 1500px){
		.btn{
			font-size:22px;
		}
		.ability>.row>.col-30{
			font-size:14px;
		}
		.ability>.row:nth-child(1){
			margin-top: 6.5%;
		}
		.ability>.row:nth-child(2){
			margin-top: 3%;
		}
	}
	@media all and (min-width: 1700px){
		.btn{
			font-size:24px;
		}
		.ability>.row>.col-30{
			font-size:16px;
		}
		.ability>.row:nth-child(1){
			margin-top: 7%;
		}
		.ability>.row:nth-child(2){
			margin-top: 4%;
		}
	}
	/*确认购买卡牌弹窗样式*/
	.confirmbuycard{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.confirmtitle{
		width: 100%;
		height: 26px;
		font-size: 15px;
		color: rgb(76,38,2);
    	position: relative;
    	top: 13%;
    	display: flex;
    	justify-content: center;
    	align-items: center;
	}
	.ghost{
		width: 5%;
		height: 100%;
		background:url("../../../../assets/ghost.png") center center no-repeat;
		background-size: contain; 
		float: left;
		display: flex;
	}
	.ghost+div{
		float: left;
		display: flex;
	}
	.ghost,.ghost+div{
		position: relative;
		left: -2%;
	}
	.known{
		width: 100%;
		height: 27.4%;
		position: relative;
		top: 20%;
		padding: 0 16% 0 14%;
		box-sizing: border-box;
		font-size: 12px;
		line-height: 1.3;
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
		font-size: 12px;
		color: #fff;
		text-align: center;
		vertical-align: middle;
	}
	.cancelbtn,.nextbtn{
		width: 23.6%;
		height: 9.7%;
		float: left;
		position: relative;
		top: 33%;
		font-size:14px;
		color: #fff;
		text-align: center;
		display: table;
	}
	@media all and (min-width: 1000px){
		.cancelbtn,.nextbtn{
			font-size: 14px;
		}
		.price>div{
			font-size: 14px;
		}
		.known{
			font-size: 13px;
		}
		.confirmtitle{
			font-size: 16px;
		}
	}
	@media all and (min-width: 1100px){
		.cancelbtn,.nextbtn{
			font-size: 16px;
		}
		.price>div{
			font-size: 16px;
		}
		.known{
			font-size: 14px;
		}
		.confirmtitle{
			font-size: 18px;
		}
	}
	@media all and (min-width: 1200px){
		.cancelbtn,.nextbtn{
			font-size: 18px;
		}
		.price>div{
			font-size: 18px;
		}
		.known{
			font-size: 15px;
		}
		.confirmtitle{
			font-size: 20px;
		}
	}
	@media all and (min-width: 1400px){
		.cancelbtn,.nextbtn{
			font-size: 20px;
		}
		.price>div{
			font-size: 20px;
		}
		.known{
			font-size: 16px;
		}
		.confirmtitle{
			font-size: 22px;
		}
	}
	@media all and (min-width: 1600px){
		.price>div{
			font-size: 23px;
		}
		.known{
			font-size: 17px;
		}
		.confirmtitle{
			font-size: 24px;
		}
	}
	@media all and (min-width: 1800px){
		.price>div{
			font-size: 26px;
		}
		.known{
			font-size: 18px;
		}
		.confirmtitle{
			font-size: 26px;
		}
	}
	.cancelbtn>p,.nextbtn>p{
		display: table-cell;
		vertical-align: middle;
	}
	.cancelbtn{
		margin: 0 10% 0 19.9%;
		background:url("../../../../assets/cancelbtn.png") center center no-repeat;
		background-size: contain; 
	}
	.cancelbtn:hover,.nextbtn:hover{
		cursor: pointer;
	}
	.nextbtn{
		background:url("../../../../assets/okbtn.png") center center no-repeat;
		background-size: contain; 
	}
	.nextbtn:hover{
		background:url("../../../../assets/okbtn_click.png") center center no-repeat;
		background-size: contain; 
	}
	.nextbtn>p{
		color: rgb(135,45,0);
	}
	/*我的卡牌弹窗样式*/
	.myassets{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.myassetstitle{
		width: 100%;
		height: 26px;
		font-size: 26px;
		color: rgb(76,38,2);
    	position: relative;
    	top: 13%;
    	display: flex;
    	justify-content: center;
	}
	.captain1,.captain2,.captain3{
		width: 29%;
		height:56%;
		float: left;
		background-color: red;
		position: relative;
		top: 20%;
		left: 5.6%;
		background: url("../../../../assets/myplayer1.png") center 0 no-repeat;
		background-size: 100% 100%;
	}
	.captain2{
		background: url("../../../../assets/myplayer2.png") center 0 no-repeat;
		background-size: 107% 100%;
	}
	.captain3{
		background: url("../../../../assets/myplayer3.png") -5px 0 no-repeat;
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
		font-size: 12px;
		color: rgb(119,93,71);
	}
	@media all and (min-width: 1250px){
		.captain1>div>div,.captain2>div>div,.captain3>div>div{
			font-size: 14px;
		}
	}
	@media all and (min-width: 1350px){
		.captain1>div>div,.captain2>div>div,.captain3>div>div{
			font-size: 15px;
		}
	}
	@media all and (min-width: 1450px){
		.captain1>div>div,.captain2>div>div,.captain3>div>div{
			font-size: 16px;
		}
	}
	/*设置昵称弹窗样式*/
	.setnickname{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/bigpopup2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.setnicktitle{
		width: 100%;
		height: 26px;
		font-size: 26px;
		color: rgb(76,38,2);
    	position: relative;
    	top: 13%;
    	display: flex;
    	justify-content: center;
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
	    background:url("../../../../assets/input.png") center center no-repeat;
	    background-size: 100% 100%;
	    color: rgb(119,93,71);
	    padding-left: 2px;
	}
	.setnickname .cancelbtn,.setnickname .nextbtn{
		position: relative;
		top: 60%;
	}

</style>

