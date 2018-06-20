<template>
	<div>
		<div :style="{'top':asidebartop,'right':asidebarright,'height':asidebarheight}" class="asidebar">
			<div class="cat"><p>CLAIM KITTIES</p><p>{{$store.state.CaptainKittyCount}}</p></div>
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
  		document.documentElement.scrollTop =0; 
  		document.body.scrollTop = 0;
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
  		this.asidebartop = topheight ;
  		this.clear();
  		this.top1 = true;
  	},
  	gotop1: function(){
  		document.documentElement.scrollTop =0; 
  		document.body.scrollTop = 0;
  		var val = document.documentElement.clientWidth;
  		var topheight = val/1920*975 + "px";
  		this.asidebartop = topheight ;
  		this.clear();
  		this.top1 = true;
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
    this.asidebartop = topheight ;
    
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
        	_this.asidebartop = _this.asidebartop = (val2 - parseInt(_this.asidebarheight))/2 + scrolltop +"px";
        }else{
        	var topheight = val/1920*975 + "px";
        	_this.asidebartop = topheight;
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

		console.log("1111",scrolltop)
		if(scrolltop == 0){
			_this.asidebartop = topheight;
		}else if(scrolltop <= parseInt(topheight)/2){
			_this.asidebartop = parseInt(topheight) - scrolltop/4 + "px";

		}else{
			_this.asidebartop = (val2 - parseInt(_this.asidebarheight))/2 + scrolltop +"px";
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
	.cat{
		width: 80%;
		height: 50%;
		margin: 0 auto;
		background:url("../../assets/cat.png") center center no-repeat;
		background-size: 100%;
		position: absolute;
		left: 0;
		top: -30%;
	}
	.cat p:nth-child(1){
		font-size: 0.9rem;
		position: relative;
		text-align: center;
		top: 141px;
	}
</style>