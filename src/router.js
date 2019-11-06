import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login'	
	Vue.use(Router)
 
	export default new Router({
		routes:[
			{
				path:'/',
				name:'Login',
				component:Login
			},
			{path:'/index',component:()=>import('./pages/index'),children:[
				{path:'/index/account',component:()=>import('./pages/account/account')},
				{path:'/index/addaccount',component:()=>import('./pages/account/Addaccount')},
				{path:'/index/cpassword',component:()=>import('./pages/account/Cpassword')},
				{path:'/index/addgoods',component:()=>import('./pages/commodity/Addgoods')},
				{path:'/index/goodslist',component:()=>import('./pages/commodity/Goodslist')},
				{path:'/index/addmember',component:()=>import('./pages/member/Addmember')},
				{path:'/index/vipmanage',component:()=>import('./pages/member/Vipmanage')},
				{path:'/index/addinventory',component:()=>import('./pages/purchase/Addinventory')},
				{path:'/index/lnventorylist',component:()=>import('./pages/purchase/Lnventorylist')},
				{path:'/index/goodsreturn',component:()=>import('./pages/shipment/Goodsreturn')},
				{path:'/index/outboundgoods',component:()=>import('./pages/shipment/Outboundgoods')},
				{path:'/index/saleslist',component:()=>import('./pages/shipment/Saleslist')},
				{path:'/index/entergoods',component:()=>import('./pages/statistics/Entergoods')},
				{path:'/index/sales',component:()=>import('./pages/statistics/Sales')},
			]},			
			
		]
	})