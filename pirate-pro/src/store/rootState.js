import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'
import CaptainGameConfig from '../util/contracts/CaptainGameConfig'
// import i18n from '../i18n/index.js'


const state = {
	// 全局变量
	showshadow: false,
	locale: "zh-ch",
	username: "Login",
	titlename: this.username,
	myaccount: "",
	showheader: true,
	showfooter: true,
	showbigpopup: false,
	showsmallpopup: false,
	enableclose: true,
	btnclicked: [false,false,false],
	pricearr: [{price:"-"},{price:"-"},{price:"-"}],
	cardarr: [{soldamount:"-",totalamount:"-",level:"1"},{soldamount:"-",totalamount:"-",level:"1"},{soldamount:"-",totalamount:"-",level:"1"}],
	buymsg: {
		myassets: "",
		setnickname: "",
		confirmbuycard: "",
		player: "",
		buycard: "",
	},
	alertmsg: {
		alert: ""
	},
	captain: [
		{
			name: "JACK",
			detail: "",
			color: "-",
			attack: "-",
			strength: "-",
			defense: "-",
			price: "-",
			unitSellable: "-",
			totalcount: "-"
		},
		{
			name: "JOANNA",
			detail: "",
			color: "-",
			attack: "-",
			strength: "-",
			defense: "-",
			price: "-",
			unitSellable: "-",
			totalcount: "-"
		},
		{
			name: "CLOB",
			detail: "",
			color: "-",
			attack: "-",
			strength: "-",
			defense: "-",
			price: "-",
			unitSellable: "-",
			totalcount: "-"
		},
	],
	mycaptain1: [],
	mycaptain2: [],
	mycaptain3: [],
	confirm_price: "-",
	//合约参数
	CaptainGameConfig_abiarray: CaptainGameConfig.abi,
	CaptainGameConfig_address4: "0xf1fa3476ea6d6d62b706cf5daadd6fcbc8044990",
	CaptainSell_abiarray: CaptainSell.abi,
	CaptainSell_address4: "0xb5bcf6e7c205a756bbd9010202123007988df6a8",
	CaptainToken_abiarray: CaptainToken.abi,
	CaptainToken_address4: "0xa59ca2dd38bc85804de1d31a2e55c26d97edcde3",
}

export default state