import configData from "./configData"
import store from '../store/store'
import CaptainSell from './contracts/CaptainSell'
import CaptainToken from './contracts/CaptainToken'
import CaptainGameConfig from './contracts/CaptainGameConfig'
// const md5 = require("md5-node");
import md5 from "md5-node"
import BigNumber from "bignumber.js"

let service = {};

//添加参数控制改昵称提示弹窗次数
if(!localStorage.getItem("j")){
	localStorage.setItem("j","1");
}
//添加数组控制弹窗提示交易成功
var arrhash = [];


service.init = function(){
	
    

	console.log("初始化海盗网站==cookie:",document.cookie);
	console.log("初始化海盗网站==昵称：",localStorage.getItem("昵称"));
	console.log("初始化海盗网站==以太坊：",sessionStorage.getItem("我的以太坊账户"));
	console.log("初始化海盗网站==刷新：",sessionStorage.getItem("F5"));
	console.log("用户已经设置过语种：",sessionStorage.getItem("lang"));
	
	//初始化web3对象
	if (typeof web3 !== 'undefined') {
	    web3 = new Web3(web3.currentProvider);
	    
	} else {
		//判断是否在支持metamask的google浏览器上运行
	    if(typeof web3 == 'undefined'){
			return;
		}
	    // set the provider you want from Web3.providers
	    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8080"));
	}

	//判断以太坊的网络线路
	var version = web3.version.network;
	store.state.network = version;
	
	var CaptainGameConfig = web3.eth.contract(store.state.CaptainGameConfig_abiarray);
	var CaptainGameConfigInstance = "";
	//获取当前各种卡牌已卖出的数量
	var CaptainSell = web3.eth.contract(store.state.CaptainSell_abiarray);
	var CaptainSellInstance = "";

	//add by Anna @2018/6/20
	var KittyCore = web3.eth.contract(store.state.KittyCore_abiarray);
	var KittyCoreInstance = "";
	var CaptainKitty = web3.eth.contract(store.state.CaptainKitty_abiarray);
	var CaptainKittyInstance = "";
	
	if(version == 4){
		CaptainGameConfigInstance = CaptainGameConfig.at(store.state.CaptainGameConfig_address4);
		CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
		//add by Anna @2018/6/20
		store.state.KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		store.state.CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}else{
		CaptainGameConfigInstance = CaptainGameConfig.at(store.state.CaptainGameConfig_address4);
		CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
		//add by Anna @2018/6/20
		store.state.KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		store.state.CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}
	console.log("以太坊初始化后metamask账户：",web3.eth.accounts[0]);
	if(web3.eth.accounts[0]){
		sessionStorage.setItem("我的以太坊账户",web3.eth.accounts[0]);
	}
	
	//获取角色卡牌信息
	CaptainGameConfigInstance.getCardInfo(3,function(error,result){
		if(!error){
			console.log("result3",result);
			store.state.captain[0].color = result[0].toString();
			store.state.captain[0].attack = result[1].toString();
			store.state.captain[0].attack1 = result[2].toString();
			store.state.captain[0].attack2 = result[3].toString();
			store.state.captain[0].defense = result[4].toString();
			store.state.captain[0].price = web3.fromWei(parseFloat(result[5]),"ether");
			store.state.captain[0].totalcount = result[6].toString();
			store.state.pricearr[0].price = store.state.captain[0].price;
			store.state.cardarr[0].totalamount =  store.state.captain[0].totalcount;
			CaptainSellInstance.getCaptainCount(3,function(error,result){
				if(!error){
					console.log("售出结果3",result);
					store.state.cardarr[0].soldamount = store.state.cardarr[0].totalamount - result.toString();
					if(store.state.cardarr[0].soldamount == 0){
						store.state.disabledbtn[0] = true;
					}
				}else{
					console.log(error);
				}
			})
		}else{
			console.log(error);
		}
	})
	CaptainGameConfigInstance.getCardInfo(5,function(error,result){
		if(!error){
			console.log("result5",result);
			store.state.captain[1].color = result[0].toString();
			store.state.captain[1].attack = result[1].toString();
			store.state.captain[1].attack1 = result[2].toString();
			store.state.captain[1].attack2 = result[3].toString();
			store.state.captain[1].defense = result[4].toString();
			store.state.captain[1].price = web3.fromWei(parseFloat(result[5]),"ether");
			store.state.captain[1].totalcount = result[6].toString();
			store.state.pricearr[1].price = store.state.captain[1].price;
			store.state.cardarr[1].totalamount =  store.state.captain[1].totalcount;
			CaptainSellInstance.getCaptainCount(5,function(error,result){
				if(!error){
					console.log("售出结果5",result);
					store.state.cardarr[1].soldamount = store.state.cardarr[1].totalamount - result.toString();
					if(store.state.cardarr[1].soldamount == 0){
						store.state.disabledbtn[1] = true;
					}
				}else{
					console.log(error);
				}
			})
		}else{
			console.log(error);
		}
	})
	CaptainGameConfigInstance.getCardInfo(6,function(error,result){
		if(!error){
			console.log("result6",result);
			store.state.captain[2].color = result[0].toString();
			store.state.captain[2].attack = result[1].toString();
			store.state.captain[2].attack1 = result[2].toString();
			store.state.captain[2].attack2 = result[3].toString();
			store.state.captain[2].defense = result[4].toString();
			store.state.captain[2].price = web3.fromWei(parseFloat(result[5]),"ether");
			store.state.captain[2].totalcount = result[6].toString();
			store.state.pricearr[2].price = store.state.captain[2].price;
			store.state.cardarr[2].totalamount =  store.state.captain[2].totalcount;
			CaptainSellInstance.getCaptainCount(6,function(error,result){
				if(!error){
					console.log("售出结果6",result);
					store.state.cardarr[2].soldamount = store.state.cardarr[2].totalamount - result.toString();
					if(store.state.cardarr[2].soldamount == 0){
						store.state.disabledbtn[0] = true;
					}
				}else{
					console.log(error);
				}
			})
		}else{
			console.log(error);
		}
	})

	//获取当前区块GAS价格
	web3.eth.getGasPrice(function(error,result){
		if(!error){
			console.log(result);
			console.log("当前GAS价格是：",web3.fromWei(parseFloat(result),'microether')+"microether");
		}else{
			console.log(error)
		}
	})

	//判断用户是否已经登录过
	service.confirmlogin();

	//如果登录了metamask就获取用户卡牌数量
	service.getmycards();

	//获取kitty猫 add by Anna @2018/6/20
	service.getKitties();

	//注册用户

	if(document.cookie.indexOf("invite_uid") > -1){
		console.log("本地已有cookie",document.cookie);
	}else{
		var registerurl = configData.base_url+configData.register;
		var getregisterurl = configData.base_url+configData.get_myinvitecode;
		var account;
		if(store.state.myaccount){
			account = store.state.myaccount;
		}else if(sessionStorage.getItem("我的以太坊账户")){
			account = sessionStorage.getItem("我的以太坊账户");
		}
		if(window.location.href.indexOf("?")>-1){
			var id = window.location.href.split("?")[1];
			var postData = {
				token:account,
				invite_uid:id
			}
		}else{
			var postData = {
				token:account
			}
		}
		axios.post(registerurl,postData).then(function(response){
			console.log("注册成功",response);
			//获取注册码
			axios.post(getregisterurl,{token:account}).then(function(response){
				console.log("获取注册码成功",response);
				var invite_uid = response.data.data.invite_code;
				document.cookie = "invite_uid="+invite_uid;
				console.log("打印注册码",document.cookie);
			}).catch(function(error){
				console.log("获取注册码失败",error);
			})
			
		}).catch(function(error){
			console.log("注册失败",error);
		})
	}
	
}

service.confirmlogin = function(){
	console.log("11")
    //判断用户是否已经登录过
	if(localStorage.getItem("昵称")){
		console.log("用户已经登录过",localStorage.getItem("昵称"));
		if(web3.eth.accounts[0]){
			var arr = localStorage.getItem("昵称");
			for(var i=0;i<arr.length;i++){
				if(arr[i].meta.indexOf(web3.eth.accounts[0]) >-1){
					store.state.username = arr[i].name;
				}else{
					store.state.username = web3.eth.accounts[0];
				}
			}
			console.log("强制刷新",sessionStorage.getItem("F5"));
		}else{
			console.log("11")
			if(sessionStorage.getItem("F5") != "f"){
				var arr = localStorage.getItem("昵称");
				var ethaccount = sessionStorage.getItem("我的以太坊账户");
				for(var i=0;i<arr.length;i++){
					if(arr[i].meta == ethaccount){
						store.state.username = arr[i].name;
						console.log("F5刷新：",sessionStorage.getItem("F5"));
					}else{
						store.state.username = ethaccount?ethaccount:"Login";
					}
				}
			}else{
				store.state.username = "Login";
				console.log("网页刷新",sessionStorage.getItem("F5"));
			}
		}
		
	}else{
		if(web3.eth.accounts[0]){
			store.state.username = web3.eth.accounts[0];
			var j = localStorage.getItem("j");
			if(j==1){
				store.dispatch("showsmallpopup",{enable:true});
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_logged;
				service.login();
				localStorage.setItem("j","2");
			}
		}else{
			if(sessionStorage.getItem("我的以太坊账户")){
				store.state.username = sessionStorage.getItem("我的以太坊账户");
				var j = localStorage.getItem("j");
				if(j==1){
					store.dispatch("showsmallpopup",{enable:true});
					store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_logged;
					service.login();
					localStorage.setItem("j","2");
				}
		   }else{
		   		store.state.username = "Login";
		   }
		} 
	}
}

service.login = function(){
	var j = localStorage.getItem("j");
	if(j==1){
		++j;
		localStorage.setItem("j",j);
	}
	//判断是否在支持metamask的google浏览器上运行
    if(typeof web3 == 'undefined'){
		store.dispatch("showsmallpopup",{enable:true});
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
		return;
	}
	//获取以太账户
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
		sessionStorage.setItem("我的以太坊账户",store.state.myaccount);
		console.log("本地以太账户地址是：",store.state.myaccount);//0xf3e01b7b5961d6ffa0ef6521556e3aa7141622b0
	}else{														//0x81d892Dc906f55E2E3Af7FC3BAdddfbdC7C310A6
		store.state.myaccount = "";								//0x56702418A78defB3d856e300e95df9384b5aB184
	}
	
	
	//登录海盗游戏用户
	if(store.state.myaccount){
		
		var url=configData.base_url+configData.get_username;
		var tokenstr = store.state.myaccount.toString();
		axios.post(url, {token: tokenstr}).then(function(result){
			console.log("登录成功：",result);
			if(!result.data.data.name){
				store.state.username = tokenstr;
				console.log("用户名是：",store.state.username);
			}else{
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_logged;
				store.state.username = result.data.data.name;
				console.log("我的昵称是：",result.data.data.name);
			}
			var meta = {"meta":store.state.myaccount,"name":store.state.username};
			var arr = JSON.parse(localStorage.getItem("昵称"));
			arr = arr?arr:[];
			arr.push(meta);
			localStorage.setItem("昵称",JSON.stringify(arr));
			for(var i=0;i<arr.length;i++){
				if(arr[i].meta.indexOf(store.state.myaccount) >-1){
					arr[i].name = store.state.username;
					localStorage.setItem("昵称",JSON.stringify(arr));
				}
			}
			console.log("我的昵称在缓存中：",localStorage.getItem("昵称"));
			//存储登录日志
			var setlogurl = configData.base_url+configData.setlog;
			var logdata = {address:store.state.myaccount};
			var logstr = JSON.stringify(logdata);
			axios.post(setlogurl,{type:4,data:logstr}).then(function(result){
				console.log("登录日志存储成功",result,setlogurl);
			}).catch(function(err){
				console.log(err);
			})
		}).catch(function(err){
			console.log("失败",err);
		})
	}else{
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
	}
}

service.buycard = function(i){
	console.log(i);
	if(i==1){
		i=3;
	}else if(i==2){
		i=5;
	}else if(i==3){
		i=6;
	}
	//判断是否在支持metamask的google浏览器上运行
    if(typeof web3 == 'undefined'){
		store.dispatch("showsmallpopup",{enable:true});
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
	}
	
	
	//获取以太账户
	if(typeof web3 !== 'undefined'){
		store.state.myaccount = web3.eth.accounts[0];
	}

	if(!store.state.myaccount){
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
	}else{
		//已登录metamask购买卡牌
		var namearr = JSON.parse(localStorage.getItem("昵称"));
		for(var n=0;n<namearr.length;n++){
			if(namearr[n].meta == store.state.myaccount){
				store.state.username = namearr[n].name;
			}else{
				store.state.username = store.state.myaccount;
			}
		}
		var j = localStorage.getItem("j");
		if(!namearr){
			if(j == 1){
				console.log("判断是否第一次登录购买：",j);
				++j;
				localStorage.setItem("j",j);
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_logged;
				return;
			}
		}
		//判断以太坊的网络线路
		var version = web3.version.network;
		var CaptainSell = web3.eth.contract(store.state.CaptainSell_abiarray);
		var CaptainSellInstance = "";
		var CaptainToken = web3.eth.contract(store.state.CaptainToken_abiarray);
		var CaptainTokenInstance = "";
		let transaction = {
		    from: store.state.myaccount,
		    to: store.state.CaptainSell_address4, 
		    value: web3.toWei(store.state.captain[0].price,"ether")
		};
		if(i == 5){
			transaction.value = web3.toWei(store.state.captain[1].price,"ether");
		}else if(i == 6){
			transaction.value = web3.toWei(store.state.captain[2].price,"ether");
		}
		if(version == 4){
			CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
			CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
		}else{
			CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
			CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
		}
		CaptainSellInstance.prepurchase(i,transaction,function(error,result){
			if(!error){
				console.log("购买结果是：",result);
				if(localStorage.getItem("购买哈希")){
					console.log("本地存储的购买哈希",JSON.parse(localStorage.getItem("购买哈希")));
					arrhash = JSON.parse(localStorage.getItem("购买哈希"));
				}
				arrhash.push(result);
				localStorage.setItem("购买哈希",JSON.stringify(arrhash));
				console.log("购买哈希",localStorage.getItem("购买哈希"));
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_tradeprocessing;
			}else{
				console.log(error);
			}
		})
		//监听购买事件
		CaptainSellInstance.BuyToken(store.state.myaccount).watch(function(error,result){
			if(!error){
				console.log("购买成功后返回的结果是：",result);
				var id = result.args.tokenId.toString();
				console.log("id",id);
				//刷新卡牌卖出数量
				CaptainSellInstance.getCaptainCount(id,function(error,result){
					if(!error){
						console.log("售出该种卡牌数量：",result,id);
						if(id == 3){
							id = 0;
						}else if(id == 5){
							id = 1;
						}else{
							id = 2;
						}
						store.state.cardarr[id].soldamount = store.state.cardarr[id].totalamount - result.toString();
						//判断是否可以购买
						if(store.state.cardarr[id].soldamount == 0){
							store.state.disabledbtn[id] = true;
						}
					}else{
						console.log(error);
					}
				})
				
				if(localStorage.getItem("购买哈希")){
					if(localStorage.getItem("购买哈希").indexOf(result.transactionHash) == -1 ){
						return;
					}else{
						var index = JSON.parse(localStorage.getItem("购买哈希")).indexOf(result.transactionHash);
						var newarrhash = JSON.parse(localStorage.getItem("购买哈希"));
						newarrhash.splice(index,1);
						localStorage.setItem("购买哈希",JSON.stringify(newarrhash));
						console.log("购买成功，存储日志！",localStorage.getItem("购买哈希"));
						store.dispatch("showsmallpopup");
						store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_tradedone;
						
						//重新获取我的卡牌列表
						service.getmycards();
						//存储玩家购买卡牌日志
						var buyurl = configData.base_url+configData.setlog;
						var buydata = {
							transaction_id: result.transactionHash,
							from_address: store.state.myaccount,
							to_address: store.state.CaptainSell_address4,
							item_type: 1,
							item_id: i,
							transaction_by: 1,
							item_num: 1,
							ether_num: web3.fromWei(transaction.value,"ether"),
							coin_type: 1
						};
						var buystr = JSON.stringify(buydata);
						axios.post(buyurl,{type:1,data:buystr}).then(function(result){
							console.log(result);
						}).catch(function(err){
							console.log(err);
						})
					}
				}
				
			}else{
				console.log(error);
			}
		})

		/*//获取某种卡牌的token列表
		CaptainTokenInstance.tokensOfCaptain(i,function(error,result){
			if(!error){
				console.log("该种卡牌的token列表是：",result);
			}else{
				console.log(error);
			}
		})*/
	}
}

service.myassets = function(){
	//判断是否在支持metamask的google浏览器上运行
    if(typeof web3 == 'undefined'){
		store.dispatch("showsmallpopup",{enable:true});
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
		return;
	}

	if(store.state.username.indexOf("Login")>-1){
		if(!web3.eth.accounts[0]){
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
			store.state.username = "Login";
			sessionStorage.setItem("F5","f");
			return;
		}else{
			// store.dispatch("showsmallpopup");
			// store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_login;
			var arr = localStorage.getItem("昵称");
			for(var i=0;i<arr.length;i++){
				if(arr[i].meta == web3.eth.accounts[0]){
					store.state.username = arr[i].name;
				}
			}
		}
	}else{
		if(!web3.eth.accounts[0]){
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
			store.state.username = "Login";
			sessionStorage.setItem("F5","f");
			return;
		}else{
			var namearr = JSON.parse(localStorage.getItem("昵称"));
			for(var i=0;i<namearr.length;i++){
				if(namearr[i].meta == web3.eth.accounts[0]){
					store.state.username = namearr[i].name;
				}else{
					store.state.username = web3.eth.accounts[0];
				}
			}
		}
	}
	//账户地址拥有的卡牌数
	service.showbigpopup();
	service.getmycards();
}

service.getmycards = function(){
	
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
	}else{
		if(sessionStorage.getItem("我的以太坊账户")){
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}else{
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}
	}
	
	//账户地址拥有的卡牌数组
	var CaptainToken = web3.eth.contract(store.state.CaptainToken_abiarray);
	var CaptainTokenInstance = "";
	var version = web3.version.network;
	if(version == 4){
		CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
	}else{
		CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
	}
	CaptainTokenInstance.tokensOfOwner(store.state.myaccount,function(error,result){
		if(!error){
			console.log("该地址拥有的卡牌数组是：",result);
			store.dispatch("clearmycaptain");
			for(var i=0;i<result[1].length;i++){
				if(result[1][i].toString() == 3){
					store.state.mycaptain1.push("1");
				}else if(result[1][i].toString() == 5){
					store.state.mycaptain2.push("1");
				}else if(result[1][i].toString() == 6){
					store.state.mycaptain3.push("1");
				}

			}
		}else{
			console.log(error);
		}
	})
	console.log("我的船长3数组：",store.state.mycaptain1);
	console.log("我的船长5数组：",store.state.mycaptain2);
	console.log("我的船长6数组：",store.state.mycaptain3);
}

service.showbigpopup = function(){
	//展示我的卡牌列表
	store.dispatch("showbigpopup");
	store.state.buymsg.myassets = true; 
}

service.setnickname = function(){
	var j = localStorage.getItem("j");
	if(j==1){
		++j;
		localStorage.setItem("j",j);
	}
	//获取以太账户
	store.state.myaccount = web3.eth.accounts[0];
	if(!store.state.myaccount){
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_walletlogout;
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
		return;
	}
	//设置新的用户昵称
	store.dispatch("showbigpopup");
    store.state.buymsg.verifyemail = true;
}

service.changenickname = function(nameObj){
	var username = nameObj.name.toString();
	var tokenstr = store.state.myaccount;
	/*var newsignature = web3.toHex("pirate_change_name:"+username);
	console.log("十六进制",username,tokenstr,newsignature);*/
	var url = configData.base_url + configData.set_username;
	var address = store.state.myaccount;
	var nowtime = new Date().getTime();
	var secstr = "name="+username+"&time="+nowtime+"&token="+address+"&"+"09acE6EbXWdHWAjCQBqgU6GfKg7PgQza";
	console.log("签名：",secstr);
	secstr = encodeURI(secstr);
	secstr = md5(secstr);
	var postData = {
		name: username,
		token: address,
		time: nowtime,
		signature: secstr
	};
	/*web3.currentProvider.sendAsync({
		id: 1,
		method: 'personal_sign',
		params: [
		address,
			web3.toHex('pirate_change_name:' + username)
		]
	}, function(err, result) {
		if(!result.error){
		  let postData = {name: username,token: tokenstr,signature:result.result};
		  console.info(postData);*/
		  axios.post(url, postData).then(function (response) {
			console.log("设置用户名",response);
			if(response.data.state == 200){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.successsetname;
				store.state.username = username;
				var meta = {"meta":store.state.myaccount,"name":store.state.username};
				var arr = JSON.parse(localStorage.getItem("昵称"));
				arr = arr?arr:[];
				arr.push(meta);
				localStorage.setItem("昵称",JSON.stringify(arr));
				for(var i=0;i<arr.length;i++){
					if(arr[i].meta.indexOf(store.state.myaccount) >-1){
						arr[i].name = username;
						localStorage.setItem("昵称",JSON.stringify(arr));
					}
				}
				console.log("我的昵称在缓存中：",localStorage.getItem("昵称"));
			}else if(response.data.state == 10003){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.nametoolong;
			}else if(response.data.state == 10004){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.game_hint_nameexist;
			}else if(response.data.state == 500){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.game_hint_nameerror;
			}
			
		  }).catch(function (error) {
		    console.log(error);
		  });
		/*}
	});*/
}


service.verifyEmail = function(m,a){

	var emailaddress = m;
	var account = a;
	var postData = {
		email: emailaddress,
		token: account,
		signature: ""
	};
	localStorage.setItem("验证邮箱",emailaddress);
	var url = configData.base_url + configData.verifyemail;
	web3.currentProvider.sendAsync({
		id: 1,
		method: 'personal_sign',
		params: [
		account,
			web3.toHex('pirate_verify_email:' + emailaddress)
		]
	}, function(err, result) {
		if(!result.error){
		  let postData = {email: emailaddress,token: account,signature:result.result};

		  console.info(postData);
		  axios.post(url,postData).then(function(response){
		  	console.log("验证邮箱：",response);
		  	if(response.data.state == 200){
		  		alert("验证成功")
		  		localStorage.setItem("验证邮箱",emailaddress);
		  	}else if(response.data.state == 10010){
		  		alert("该邮箱已经验证过")
		  	}else if(response.data.state == 10011){
		  		alert("验证请求太过频繁")
		  	}else if(response.data.state == 500){
		  		alert("服务器错误")
		  	}
		  }).catch(function(error){
		  	console.log("验证邮箱失败：",error);
		  })
		}
	})

}

service.getKitties = function () {
	//add by Anna @2018/6/20
	var KittyCore = web3.eth.contract(store.state.KittyCore_abiarray);
	var KittyCoreInstance = "";
	var CaptainKitty = web3.eth.contract(store.state.CaptainKitty_abiarray);
	var CaptainKittyInstance = "";

	if(store.state.network == 4){
		console.log("network", store.state.network);
		KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}else{
		KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}
	
	
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
	}else{
		if(sessionStorage.getItem("我的以太坊账户")){
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}else{
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}
	}


	function getKitties () {   //获取本海盗网站上的kitties数量
		
		CaptainKittyInstance.getKitties({from: store.state.myaccount},function(error, result){
			if(!error){
				store.state.KittyCount = parseInt(result[0].toString());
				store.state.CaptainKittyCount = parseInt(result[1].toString());
				store.state.isGetKitty = result[2];  //是否领取过海盗猫
				console.log("getKitties", result);
			}else{
				console.log("error");
			}
		});
	}

	getKitties();

}

service.createKitties = function () {   //领取海盗猫
	//add by Anna @2018/6/20
	var KittyCore = web3.eth.contract(store.state.KittyCore_abiarray);
	var KittyCoreInstance = "";
	var CaptainKitty = web3.eth.contract(store.state.CaptainKitty_abiarray);
	var CaptainKittyInstance = "";

	if(store.state.network == 4){
		console.log("network", store.state.network);
		KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}else{
		KittyCoreInstance = KittyCore.at(store.state.KittyCore_address4);
		CaptainKittyInstance = CaptainKitty.at(store.state.CaptainKitty_address4);
	}
	
	
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
	}else{
		if(sessionStorage.getItem("我的以太坊账户")){
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}else{
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}
	}

	CaptainKittyInstance.createKitties(function(error, result){
		if (!error) {
			console.log(result);
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_tradeprocessing;
			createKittiesEvent();  //监听领取成功事件
		} else {
			
		}
	});

	function createKittiesEvent () {
		CaptainKittyInstance.CreateKitty(store.state.KittyCount, store.state.myaccount).watch(function(error, result){
			if (!error) {
				console.log(result);
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = i18n.messages[i18n.locale].message.general_hint_getkittysuccess;
				service.getKitties();
			} 
		});
	}
}


export default service
