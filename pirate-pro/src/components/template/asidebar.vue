<template>
	<div>
		<div :style="{'top':asidebartop,'right':asidebarright,'height':asidebarheight}" class="asidebar">
			<div class="cat">
				<div class="catk"></div>
				<div class="btn"><div @click="claimKitties">CLAIM KITTIES</div></div>
				<div class="catnumbox"><img src="../../assets/catnum.png" class="catnum"/><p>{{$store.state.CaptainKittyCount}}</p></div>
			</div>
			<ul :style="{'height':ulheight}">
				<li v-bind:class="{'top1':top1}" @click="gotop1"><p>{{$t("message.home_title_presale")}}</p></li>
				<li v-bind:class="{'top2':top2}" @click="gotop2"><p>{{$t("message.home_title_prizepool")}}</p></li>
				<li v-bind:class="{'top3':top3}" @click="gotop3"><p>{{$t("message.home_title_roadmap")}}</p></li>
				<li v-bind:class="{'top4':top4}" @click="gotop4"><p>{{$t("message.home_title_introduction")}}</p></li>
			</ul>
			<div class="backtop" @click="backtop"></div>	  	
		</div>
	</div>
</template>

<script>
export default {
  name: 'asidebar',
  data () {
    return {
      asidebartop: "",
      asidebarright: 0,
      asidebarheight: "",
      ulheight: "",
      top1: true,
      top2: false,
      top3: false,
      top4: false,

    }
  },
  methods: {
  	clear: function(){
  		this.top1 = false;
  		this.top2 = false;
  		this.top3 = false;
  		this.top4 = false;
  	},
  	backtop: function(){
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
  		var asidebarheight = (val)/1920 * 436 + "px";
  		this.asidebartop = parseInt(topheight) + parseInt(asidebarheight)*0.22 + "px";
  		this.clear();
  		this.top1 = true;
  		document.documentElement.scrollTop =0; 
  		document.body.scrollTop = 0;
  		
  	},
  	gotop1: function(){
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
  		var asidebarheight = (val)/1920 * 436 + "px";
  		this.asidebartop = parseInt(topheight) + parseInt(asidebarheight)*0.22 + "px";
  		this.clear();
  		this.top1 = true;
  		document.documentElement.scrollTop =0; 
  		document.body.scrollTop = 0;
  		
  	},
  	gotop2: function(){
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
		var playersheight = (val)/ 1920 * 825 + "px";
  		document.documentElement.scrollTop = parseInt(topheight) + parseInt(playersheight) ; 
  		document.body.scrollTop = parseInt(topheight) + parseInt(playersheight) ;
  		this.clear();
  	},
  	gotop3: function(){
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
		var playersheight = (val)/ 1920 * 825 + "px";
		var potsheight = (val) /1920 * 875 + "px";
  		document.documentElement.scrollTop = parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight); 
  		document.body.scrollTop =  parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight);
  		this.clear();
  	},
  	gotop4: function(){
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
		var playersheight = (val)/ 1920 * 825 + "px";
		var potsheight = (val) /1920 * 875 + "px";
		var mapheight = (val) /1920 * 715 + "px";
  		document.documentElement.scrollTop = parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)+parseInt(mapheight); 
  		document.body.scrollTop = parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)+parseInt(mapheight) ;
  		this.clear();
  	},
  	claimKitties: function(){
  		this.$store.dispatch("showbigpopup");
        this.$store.state.buymsg.claimKitties = true;
  	}
  },
  created () {
    
  	
  },
  mounted () {
  	var val = document.documentElement.clientWidth;
  	val = val<1000?1000:val;
    var val2 = document.documentElement.clientHeight || document.body.clientHeight;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    this.asidebarheight = (val)/1920 * 436 + "px";
    var topheight = val/1920*975 + "px";
	var playersheight = (val)/ 1920 * 825 + "px";
    var potsheight = (val) /1920 * 875 + "px";
    var mapheight = (val) /1920 * 715 + "px";
    this.asidebartop = parseInt(topheight) + parseInt(this.asidebarheight)*0.22 + "px";
    
	if(parseInt(this.asidebartop) <= parseInt(topheight) + parseInt(playersheight)){
		this.clear();
		this.top1 = true;
	}else if(parseInt(this.asidebartop)>parseInt(topheight) + parseInt(playersheight) && parseInt(this.asidebartop)<=parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)){
		this.clear();
		this.top2 = true;
	}else if(parseInt(this.asidebartop)>parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight) && parseInt(this.asidebartop)<=parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)+parseInt(mapheight)){
		this.clear();
		this.top3 = true;
	}else{
		this.clear();
		this.top4 = true;
	}
    
    var _this = this;
    window.addEventListener("resize",function(){
    	var val = document.documentElement.clientWidth;
    	val = val<1000?1000:val;
        var val2 = document.documentElement.clientHeight;
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        _this.asidebarheight = (val)/1920 * 436 + "px";
        if(scrolltop){
        	_this.asidebartop = _this.asidebartop = (val2 - parseInt(_this.asidebarheight))/2 + parseInt(_this.asidebarheight)*0.22 +scrolltop +"px";
        }else{
        	var topheight = val/1920*975 + "px";
        	_this.asidebartop =parseInt(topheight) + parseInt(_this.asidebarheight)*0.22 + "px";
        }
    })
    window.addEventListener("scroll",function(){
    	var val = document.documentElement.clientWidth;
    	val = val<1000?1000:val;
    	var topheight = val/1920*975 + "px";
		var playersheight = (val)/ 1920 * 825 + "px";
        var potsheight = (val) /1920 * 875 + "px";
        var mapheight = (val) /1920 * 715 + "px";

		var val2 = document.documentElement.clientHeight;
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
		var asidebarheight = (val)/1920 * 436 + "px";

		console.log("1111",scrolltop)
		if(scrolltop == 0){
			_this.asidebartop = parseInt(topheight) + parseInt(asidebarheight)*0.22+"px";
			console.log("1111",scrolltop)
		}else if(scrolltop <= parseInt(topheight)/2){
			_this.asidebartop = parseInt(topheight) - scrolltop/4 + parseInt(asidebarheight)*0.22 +"px";
			console.log("1111",scrolltop)

		}else{
			_this.asidebartop = (val2 - parseInt(_this.asidebarheight))/2 + scrolltop + parseInt(asidebarheight)*0.22  +"px";
			console.log("1111",scrolltop,_this.asidebartop)
		}
		
		_this.asidebarright = -scrollleft + "px";

        
		if(parseInt(_this.asidebartop) <= parseInt(topheight) + parseInt(playersheight)){
			_this.clear();
			_this.top1 = true;
		}else if(parseInt(_this.asidebartop)>parseInt(topheight) + parseInt(playersheight) && parseInt(_this.asidebartop)<=parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)){
			_this.clear();
			_this.top2 = true;
		}else if(parseInt(_this.asidebartop)>parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight) && parseInt(_this.asidebartop)<=parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)+parseInt(mapheight)){
			_this.clear();
			_this.top3 = true;
		}else if(parseInt(_this.asidebartop)>parseInt(topheight)+parseInt(playersheight)+parseInt(potsheight)+ parseInt(mapheight)){
			_this.clear();
			_this.top4 = true;
		}
      
    })
    
  },
  computed: {

  },
  destroyed () {
    window.removeEventListener("resize");
    window.removeEventListener("scroll");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.asidebar{
		width: 12.8%;
		min-width: 168px;
		min-height: 300px;
		position: absolute;
		right: 0;
		background:url("../../assets/asidebar.png") center center no-repeat; 
		background-size: 100% 100%;
		z-index: 50;
		
	}
	.asidebar ul{
		width: 55%;
		height: 46%;
	    position: relative;
	    top: 24.1%;
	    left: -3px;
	    margin: 0 auto;
	}
	.asidebar ul li{
		width: 100%;
		height: 25%;
		color: #fff;
		display: table;
	}
	.asidebar ul li:hover{
		cursor: pointer;
	}
	.asidebar ul li p{
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		font-size: 0.75em;
	}
	.asidebar ul li.top1,.asidebar ul li.top2,.asidebar ul li.top3,.asidebar ul li.top4{
		background:rgb(175,100,0); 
	}
	.asidebar ul li.top1>p,.asidebar ul li.top2>p,.asidebar ul li.top3>p,.asidebar ul li.top4>p{
		color: rgb(245,238,0);
	}
	.backtop{
		width: 16.3%;
		height: 10%;
		margin: 52% auto;
	}
	.backtop:hover{
		cursor: pointer;
	}
	.cat .catk{
		width: 50%;
		height: 33%;
		background:url("../../assets/cat.png") center center no-repeat;
		background-size: 100%;
		position: absolute;
		left: 25%;
		top: -44%;
		z-index: 100;
	}
	.cat div.btn{
		font-size: 0.8rem;
	    position: absolute;
	    z-index: 0;
	    text-align: center;
	    top: -15%;
	    left: 12%;
	    background: url('../../assets/catbtn.png') center center no-repeat;
	    background-size: 100%;
	    width: 72%;
	    height: 12%;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    display: table;
	}
	.cat div.btn>div{
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		position: relative;
	}
	.cat div.btn>div:hover{
		cursor: pointer;
	}
	.cat .catnumbox{
		width: 27%;
	    position: absolute;
	    top: -25%;
	    left: 21%;
		display: table;
		z-index: 100;
	}
	.cat .catnum{
		width: 100%;
	    
	    display: table-cell;
	}
	.cat .catnumbox p{
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		position: relative;
		left: -50%;
	}
</style>