import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'
import CaptainGameConfig from '../util/contracts/CaptainGameConfig'
//add by Anna
import CaptainKitty from '../util/contracts/CaptainKitty'
import KittyCore from '../util/contracts/KittyCore'


const state = {
	// 全局变量
	showshadow: false,
	locale: "zh-ch",
	username: "Login",
	myaccount: "",
	showheader: true,
	showfooter: true,
	showbigpopup: false,
	showsmallpopup: false,
	enableclose: true,
	btnclicked: [false,false,false],
	disabledbtn: [false,false,false],
	pricearr: [{price:"-"},{price:"-"},{price:"-"}],
	cardarr: [{soldamount:"-",totalamount:"-",level:"1"},{soldamount:"-",totalamount:"-",level:"1"},{soldamount:"-",totalamount:"-",level:"1"}],
	CaptainKittyCount: "-",
	buymsg: {
		myassets: "",
		confirmbuycard: "",
		player: "",
		buycard: "",
		verifyemail: "",
		invite: "",
		claimKitties: ""
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
			attack1: "-",
			attack2: "-",
			defense: "-",
			price: "-",
			totalcount: "-"
		},
		{
			name: "JOANNA",
			detail: "",
			color: "-",
			attack: "-",
			attack1: "-",
			attack2: "-",
			defense: "-",
			price: "-",
			totalcount: "-"
		},
		{
			name: "CLOB",
			detail: "",
			color: "-",
			attack: "-",
			attack1: "-",
			attack2: "-",
			defense: "-",
			price: "-",
			totalcount: "-"
		},
	],
	mycaptain1: [],
	mycaptain2: [],
	mycaptain3: [],
	confirm_price: "-",
	showFAQ: false,
	//合约参数
	CaptainGameConfig_abiarray: CaptainGameConfig.abi,
	CaptainGameConfig_address4: "0xff48deaf17b23842f91c204dca547e2107f2c751",
	CaptainSell_abiarray: CaptainSell.abi,
	CaptainSell_address4: "0xc1d7ccd7b13218d1bb3b3ee5a01f11215b1cfbd6",
	CaptainToken_abiarray: CaptainToken.abi,
	CaptainToken_address4: "0x1753a67ad313e149ca25daafc393b182f8c67a2c",
	//add by Anna
	KittyCore_abiarray: KittyCore.abi,
	KittyCore_address4: "0x1513a3319992a46e724f0926c31bba9751a15740",
	CaptainKitty_abiarray: CaptainKitty.abi,
	CaptainKitty_address4: "0xf6052acf2d8ee25269da62fc721fd6e90772e328",
	KittyCoreInstance: "",
	CaptainKittyInstance: "",
	isGetKitty: false,
	KittyCount: 0,			//kitty猫
	CaptainKittyCount: 0,	//海盗猫
	network: 0
}

export default state