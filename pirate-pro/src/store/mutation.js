const mutations = {
	change (state,params) {
		state.locale = params.lan ;
		i18n.locale = state.locale ;
		sessionStorage.setItem("lang",state.locale);
	},
	initLang (state) {
		//判断浏览器设置的默认语言ie\opera,firefox\chrome
		console.log("IE浏览器默认语言",navigator.browserLanguage);
		console.log("google浏览器默认语言",navigator.language);
		var browserLang = navigator.browserLanguage || navigator.language;
		if(sessionStorage.getItem("lang")){
			state.locale = sessionStorage.getItem("lang");
			i18n.locale = sessionStorage.getItem("lang");
			console.log("用户已经设置过语种：",sessionStorage.getItem("lang"));
			return;
		}
		if(browserLang.indexOf("en") > -1){
			state.locale = "en";
			i18n.locale = "en";
			console.log("浏览器初始化后改变语种",state.locale,i18n.locale);
		}else{
			
		}
	},
	showheader (state) {
		//显示头部底部
		state.showheader = true;
		state.showfooter = true;
	},
	hideheader (state) {
		//隐藏头部底部
		state.showheader = false;
		state.showfooter = false;
	},
	showShadow (state) {
		state.showshadow = true;
	},
	hideShadow (state) {
		state.showshadow = false;
	},
	showbigpopup (state,params) {
		state.showbigpopup = true;
		state.showshadow = true;
	},
	showsmallpopup (state,params) {
		state.showsmallpopup = true;
		state.showshadow = true;
		if(params){
			state.enableclose = params.enable;
		}
		
	},
	closebigpopup (state) {
		state.showbigpopup = false;
		state.buymsg.myassets = "";
		state.buymsg.setnickname = "";
		state.buymsg.confirmbuycard = "";
		state.buymsg.player = "";
		state.buymsg.buycard = "";
		state.btnclicked[0] = false;
		state.btnclicked[1] = false;
		state.btnclicked[2] = false;
		state.showshadow = false;
	},
	closesmallpopup (state) {
		state.showsmallpopup = false;
	},
	clearsmallpopup (state) {
		state.alertmsg.alert = "";
	},
	clearbigpopup (state) {
		state.buymsg.myassets = "";
		state.buymsg.setnickname = "";
		state.buymsg.confirmbuycard = "";
		state.buymsg.buycard = "";
		state.buymsg.player = "";
	},
	clearmycaptain (state) {
		state.mycaptain1 = [];
		state.mycaptain2 = [];
		state.mycaptain3 = [];
	}
}
export default mutations