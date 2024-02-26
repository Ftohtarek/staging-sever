"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[580],{4580:(h,s,o)=>{o.r(s),o.d(s,{FavoriteComponent:()=>f});var a=o(6814),l=o(3838),r=o(9291),d=o(3052),p=o(7398),t=o(4069),_=o(9862);let m=(()=>{class n{constructor(e){this.http=e,this.baseUrl=d.N.baseUrl}getFavouriteList(){return this.http.get(`${this.baseUrl}v1/listFavourites`).pipe((0,p.U)(e=>e.data.map(c=>new t.Z(c))))}addFavouriteItem(e){return this.http.get(`${this.baseUrl}/v1/favouriteAction/${e}`)}static#t=this.\u0275fac=function(c){return new(c||n)(r.LFG(_.eN))};static#n=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function C(n,g){if(1&n&&(r.TgZ(0,"div",2)(1,"div"),r._UZ(2,"app-card",3),r.qZA()()),2&n){const e=g.$implicit;r.xp6(2),r.Q6J("card",e)}}let f=(()=>{class n{constructor(e){this.favouriteService=e,e.getFavouriteList().subscribe(c=>{this.items=c})}static#t=this.\u0275fac=function(c){return new(c||n)(r.Y36(m))};static#n=this.\u0275cmp=r.Xpm({type:n,selectors:[["app-favorite"]],standalone:!0,features:[r.jDz],decls:2,vars:1,consts:[[1,"row"],["class","col-lg-4 col-2",4,"ngFor","ngForOf"],[1,"col-lg-4","col-2"],[3,"card"]],template:function(c,i){1&c&&(r.TgZ(0,"div",0),r.YNc(1,C,3,1,"div",1),r.qZA()),2&c&&(r.xp6(1),r.Q6J("ngForOf",i.items))},dependencies:[a.ez,a.sg,l.A],styles:["[_nghost-%COMP%]{width:100%}"]})}return n})()},3838:(h,s,o)=>{o.d(s,{A:()=>f});var a=o(6814),l=o(2669),r=o(3911),d=o(9068),p=o(6026),t=o(9291),_=o(9907);function m(n,g){if(1&n&&(t.TgZ(0,"span",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE("",e.card.price_before," ",t.lcZ(2,2,"home.currency"),"")}}const C=function(n,g){return[n,g]};let f=(()=>{class n{constructor(e){this.lang=e,this.appRoutes=p.VP}Number(e){return Number(e)}static#t=this.\u0275fac=function(c){return new(c||n)(t.Y36(_.C))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{card:"card"},standalone:!0,features:[t.jDz],decls:29,vars:26,consts:[["bindingLayout","",1,"card",3,"routerLink"],[1,"header"],[1,"img-container"],["alt","card-image",1,"img-cover",3,"src"],[1,"sticky-content"],[1,"d-flex","gap-1"],[1,"sales"],[1,"sales","text-white","bg-primary"],[1,"favorite"],["width","14","height","14","viewBox","0 0 13 13","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.90189 6.23274C0.224104 3.99921 1.01622 1.4463 3.23782 0.690899C4.40642 0.292862 5.69632 0.52755 6.66783 1.29896C7.58692 0.548886 8.92417 0.295529 10.0915 0.690899C12.3131 1.4463 13.1103 3.99921 12.4331 6.23274C11.3782 9.77308 6.66783 12.5 6.66783 12.5C6.66783 12.5 1.99216 9.81441 0.90189 6.23274Z"],[1,"content","grid-sm","mt-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"cost","d-flex","gap-md-2","gap-1"],["class","text-special price del",4,"ngIf"],[1,"text","price"],[1,"more-info"],[1,"chip"],[1,"text-special","price","del"]],template:function(c,i){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",7),t._uU(10),t.ALo(11,"translate"),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",8),t.O4$(),t.TgZ(14,"svg",9),t._UZ(15,"path",10),t.qZA()()()(),t.kcU(),t.TgZ(16,"div",11)(17,"h4"),t._uU(18),t.qZA(),t.TgZ(19,"div",12)(20,"div",13),t.YNc(21,m,3,4,"span",14),t.TgZ(22,"span",15),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"div",16)(26,"div",17),t._uU(27),t.ALo(28,"translate"),t.qZA()()()()()),2&c&&(t.Q6J("routerLink",t.WLB(23,C,i.appRoutes.details,i.card.id)),t.xp6(3),t.Q6J("src",i.card.image,t.LSH),t.xp6(4),t.AsE(" ",t.lcZ(8,13,"card.sale")," ",i.card.getDiscount().toFixed(1)," %"),t.xp6(3),t.AsE(" ",i.card.num_of_nights," ",i.Number(i.card.num_of_days)>10?t.lcZ(11,15,"card.night"):t.lcZ(12,17,"card.nights")," "),t.xp6(5),t.uIk("fill",i.card.is_favourite?"red":" transparent")("stroke",i.card.is_favourite?"red":"black"),t.xp6(3),t.Oqu(i.lang.isEn()?i.card.name_en:i.card.name_ar),t.xp6(3),t.Q6J("ngIf",i.card.price_before),t.xp6(2),t.AsE("",i.card.price_before?i.card.price_after:i.card.price_before," ",t.lcZ(24,19,"home.currency"),""),t.xp6(4),t.hij(" ",t.lcZ(28,21,"home.moreInfo")," "))},dependencies:[a.ez,a.O5,l.A,r.aw,r.X$,d.Bz,d.rH],styles:['.header[_ngcontent-%COMP%]{position:relative}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{aspect-ratio:10/8;border-radius:5px;overflow:hidden;max-width:400px}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]{position:absolute;padding:0 5px;z-index:9;top:8px;width:100%;left:0;right:0;display:flex;justify-content:space-between}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]{background-color:rgb(var(--accent));padding:7px 12px;border-radius:6px;font-size:13px;font-weight:600;color:#fff}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin:auto 5px;background-color:#fff;border-radius:100%;width:25px;height:25px;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:auto}.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:rgb(var(--text-color));font-size:15px;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:2em;overflow:hidden;text-overflow:ellipsis}.content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:15px}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-weight:100}.del[_ngcontent-%COMP%]{position:relative}.del[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:1px;background-color:red}.more-info[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{font-size:12px;padding:4px 6px;border-radius:4px;border:1px solid rgba(var(--text-color),.5)}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{aspect-ratio:10/6}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]{position:relative}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]:after{inset:-2px 0 0}']})}return n})()}}]);