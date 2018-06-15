import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'
import CaptainGameConfig from '../util/contracts/CaptainGameConfig'
// import i18n from '../i18n/index.js'


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
	//合约参数
	CaptainGameConfig_abiarray: CaptainGameConfig.abi,
	CaptainGameConfig_address4: "0xff48deaf17b23842f91c204dca547e2107f2c751",
	CaptainSell_abiarray: CaptainSell.abi,
	CaptainSell_address4: "0xc1d7ccd7b13218d1bb3b3ee5a01f11215b1cfbd6",
	CaptainToken_abiarray: CaptainToken.abi,
	CaptainToken_address4: "0x1753a67ad313e149ca25daafc393b182f8c67a2c",
}

export default state