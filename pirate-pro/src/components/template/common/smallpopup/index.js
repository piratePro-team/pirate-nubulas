import SmallPopup from "./SmallPopup.vue"

const smallPopup = {
	install:function(Vue){
		Vue.component("smallPopup",SmallPopup);
	}
}

export default smallPopup