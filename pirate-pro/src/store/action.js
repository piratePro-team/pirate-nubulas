const actions = {
	change(context,params){
		context.commit("change",params);
	},
	initLang(context){
		context.commit("initLang");
	},
	showheader(context){
		context.commit("showheader");
	},
	hideheader(context){
		context.commit("hideheader");
	},
	showshadow(context){
		context.commit("showShadow");
	},
	hideshadow(context){
		context.commit("hideShadow");
	},
	showbigpopup(context,params){
		context.commit("showbigpopup",params);
	},
	showsmallpopup(context,params){
		context.commit("showsmallpopup",params);
		context.commit("closebigpopup");
		context.commit("showShadow");
	},
	closebigpopup(context){
		context.commit("closebigpopup");
	},
	closesmallpopup(context){
		context.commit("closesmallpopup");
		context.commit("hideShadow");
	},
	clearsmallpopup(context){
		context.commit("clearsmallpopup");
	},
	clearbigpopup(context){
		context.commit("clearbigpopup");
	},
	clearmycaptain(context){
		context.commit("clearmycaptain");
	},
	showPOPUP(context){
		context.commit("showPOPUP");
	},
	hidePOPUP(context){
		context.commit("hidePOPUP");
	},
	showfaq(context){
		context.commit("showfaq");
	},
	hidefaq(context){
		context.commit("hidefaq");
	},
	showterms(context){
		context.commit("showterms");
	},
	hideterms(context){
		context.commit("hideterms");
	},
	showpolicy(context){
		context.commit("showpolicy");
	},
	hidepolicy(context){
		context.commit("hidepolicy");
	},
}

export default actions