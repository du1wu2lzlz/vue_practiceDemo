webpackJsonp([1],{0:function(t,e,s){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove"};for(var i in n)n.hasOwnProperty(i)&&(n[i]="http://rapapi.org/mockjsdata/24170"+n[i]);e.a=n},12:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(25),i=s.n(n),a=s(13);s.n(a);e.default={name:"swipe",props:{lists:{required:!0},name:{}},mounted:function(){this.init()},methods:{init:function(){new i.a(".swiper-container",{loop:!0,pagination:".swiper-pagination"})}}}},13:function(t,e){},15:function(t,e){},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return s("div",{staticClass:" swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),s("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},3:function(t,e,s){"use strict";var n={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var s=e.split(".");return s[0]+"."+(s[1]+"0").substr(0,2)}return e+".00"}}};e.a=n},32:function(t,e){},33:function(t,e){},34:function(t,e){},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){},64:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(33),i=(s.n(n),s(34)),a=(s.n(i),s(32)),o=(s.n(a),s(37)),r=(s.n(o),s(35)),c=(s.n(r),s(36)),u=(s.n(c),s(38)),d=(s.n(u),s(1)),l=s(0),f=s(4),h=s.n(f),p=s(3),m=s(6),v=s.n(m),g=s(8),w=s.n(g);console.log(w.a);var k=v.a.parse(location.search.substr(1)),y=k.id,b=["商品详情","本店成交"];new d.default({el:"#app",data:{details:null,detailTab:b,tabIndex:0,dealLists:null,swipeLists:[],showSku:!1,skuType:1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;h.a.post(l.a.details,{id:y}).then(function(e){var s=e.data.data;s.skuList.forEach(function(t){var e=[];t.lists.forEach(function(t){e.push({active:!1,tag:t})}),t.lists=e}),t.details=s,t.details.imgs.forEach(function(e){t.swipeLists.push({clickUrl:"",image:e})})})},changeTabIndex:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;h.a.post(l.a.deal,{id:y}).then(function(e){t.dealLists=e.data.data.lists})},chooseSku:function(t){this.showSku=!0,this.skuType=t},chooseTag:function(t,e,s){t.active?t.active=!1:s.forEach(function(t,s){t.active=s===e})},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;h()(l.a.cartAdd,{id:y,number:this.skuNum}).then(function(e){200===e.data.status&&(t.isAddCart=!0,t.showSku=!1,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1e3))})}},components:{Swipe:w.a},watch:{showSku:function(t){document.body.style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[p.a]})},8:function(t,e,s){function n(t){s(15)}var i=s(9)(s(12),s(17),n,null,null);t.exports=i.exports}},[64]);
//# sourceMappingURL=goods.f0a5e19d373443fbdfcc.js.map