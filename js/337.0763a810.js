"use strict";(self["webpackChunkselldish"]=self["webpackChunkselldish"]||[]).push([[337],{8920:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var i=s(6252),d=s(3577);const n={class:"mainSection"},c={class:"bg"},l={class:"slide__text"},r={class:"slide__title"},a={class:"slide__descript"},o={class:"link__block"},u=(0,i.Uk)("Перейти к рецепту");function _(e,t,_,p,m,P){const f=(0,i.up)("VPreloader"),w=(0,i.up)("TheHeader"),D=(0,i.up)("router-link"),h=(0,i.up)("swiper-slide"),v=(0,i.up)("swiper"),S=(0,i.up)("ProductsOfDay");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(f),(0,i._)("section",n,[(0,i.Wm)(w),(0,i.Wm)(v,{"slides-per-view":1,"space-between":0,modules:p.modules,speed:1e3,pagination:{clickable:!0},loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},class:"main__slider"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.SliderProducts,(e=>((0,i.wg)(),(0,i.j4)(h,{key:e.id,class:"slide",style:(0,d.j5)({backgroundImage:"url("+s(5565)("./"+e.image)+")"})},{default:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("h1",r,(0,d.zw)(e.title),1),(0,i._)("p",a,(0,d.zw)(e.description),1),(0,i._)("div",o,[(0,i.Wm)(D,{to:{name:"ProductPage",params:{id:e.id}},class:"slide__link"},{default:(0,i.w5)((()=>[u])),_:2},1032,["to"])])])])])),_:2},1032,["style"])))),128))])),_:1},8,["modules"])]),(0,i.Wm)(S)])}var p=s(3907),m=s(8014),P=s(1911),f=s(2929),w=s(2378);const D=e=>((0,i.dD)("data-v-0c5a481a"),e=e(),(0,i.Cn)(),e),h={class:"dayProduct"},v={class:"container"},S=D((()=>(0,i._)("h2",{class:"section__title"},"Рецепты дня",-1)));function k(e,t,s,d,n,c){const l=(0,i.up)("VProductblockItem");return(0,i.wg)(),(0,i.iD)("section",h,[(0,i._)("div",v,[S,(0,i.Wm)(l,{Products:this.ProductsItem},null,8,["Products"])])])}var O=s(5842),b={name:"ProductsOfDay",computed:{...(0,p.Se)(["PRODUCTS"]),ProductsItem:function(){return this.PRODUCTS.filter((function(e){return e.ProductOfDay}))}},components:{VProductblockItem:O.Z}},g=s(3744);const y=(0,g.Z)(b,[["render",k],["__scopeId","data-v-0c5a481a"]]);var T=y,C={name:"MainPage",methods:{...(0,p.nv)(["GET_PRODCUTS_FROM_DB"])},computed:{...(0,p.Se)(["PRODUCTS"]),SliderProducts:function(){return this.PRODUCTS.filter((function(e){return e.MainSlider}))}},components:{VPreloader:f.Z,TheHeader:w.Z,Swiper:m.tq,SwiperSlide:m.o5,ProductsOfDay:T},setup(){return{modules:[P.tl,P.pt]}},mounted(){this.GET_PRODCUTS_FROM_DB()}};const I=(0,g.Z)(C,[["render",_],["__scopeId","data-v-b954421c"]]);var R=I}}]);
//# sourceMappingURL=337.0763a810.js.map