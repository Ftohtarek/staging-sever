"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[580],{4580:(h,g,a)=>{a.r(g),a.d(g,{FavoriteComponent:()=>s});var d=a(6814),l=a(3838),e=a(9291),t=a(3052),p=a(7398),_=a(4069),m=a(9862);let i=(()=>{class o{constructor(c){this.http=c,this.baseUrl=t.N.baseUrl}getFavouriteList(){return this.http.get(`${this.baseUrl}v1/listFavourites`).pipe((0,p.U)(c=>c.data.map(r=>new _.Z(r))))}addFavouriteItem(c){return this.http.get(`${this.baseUrl}/v1/favouriteAction/${c}`)}static#t=this.\u0275fac=function(r){return new(r||o)(e.LFG(m.eN))};static#n=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function C(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"div"),e._UZ(2,"app-card",3),e.qZA()()),2&o){const c=n.$implicit;e.xp6(2),e.Q6J("card",c)}}let s=(()=>{class o{constructor(c){this.favouriteService=c,c.getFavouriteList().subscribe(r=>{this.items=r})}static#t=this.\u0275fac=function(r){return new(r||o)(e.Y36(i))};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-favorite"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[1,"row"],["class","col-lg-4 col-2",4,"ngFor","ngForOf"],[1,"col-lg-4","col-2"],[3,"card"]],template:function(r,O){1&r&&(e.TgZ(0,"div",0),e.YNc(1,C,3,1,"div",1),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngForOf",O.items))},dependencies:[d.ez,d.sg,l.A],styles:["[_nghost-%COMP%]{width:100%}"]})}return o})()},3838:(h,g,a)=>{a.d(g,{A:()=>m});var d=a(6814),l=a(2669),e=a(3911),t=a(9291),p=a(9907);function _(i,C){if(1&i&&(t.TgZ(0,"span",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i){const s=t.oxw();t.xp6(1),t.AsE("",s.card.price_before," ",t.lcZ(2,2,"home.currency"),"")}}let m=(()=>{class i{constructor(s){this.lang=s}Number(s){return Number(s)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.C))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-card"]],inputs:{card:"card"},standalone:!0,features:[t.jDz],decls:26,vars:25,consts:[["bindingLayout","",1,"card"],[1,"header"],[1,"img-container"],["alt","card-image",1,"img-cover",3,"src"],[1,"sticky-content"],[1,"sales"],[1,"favorite"],["width","14","height","14","viewBox","0 0 13 13","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.90189 6.23274C0.224104 3.99921 1.01622 1.4463 3.23782 0.690899C4.40642 0.292862 5.69632 0.52755 6.66783 1.29896C7.58692 0.548886 8.92417 0.295529 10.0915 0.690899C12.3131 1.4463 13.1103 3.99921 12.4331 6.23274C11.3782 9.77308 6.66783 12.5 6.66783 12.5C6.66783 12.5 1.99216 9.81441 0.90189 6.23274Z"],[1,"content","grid-sm","mt-1"],[1,"short-desc","text"],[1,"cost","d-flex","gap-md-2","gap-1"],["class","text-special price del",4,"ngIf"],[1,"text","price"],[1,"text-special","price","del"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div")(6,"div",5),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"div",6),t.O4$(),t.TgZ(10,"svg",7),t._UZ(11,"path",8),t.qZA()()()(),t.kcU(),t.TgZ(12,"div",9)(13,"h4"),t._uU(14),t.qZA(),t.TgZ(15,"div",10),t._uU(16),t.ALo(17,"translate"),t.ALo(18,"translate"),t.ALo(19,"translate"),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"div",11),t.YNc(22,_,3,4,"span",12),t.TgZ(23,"span",13),t._uU(24),t.ALo(25,"translate"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("src",n.card.image,t.LSH),t.xp6(4),t.AsE(" ",t.lcZ(8,13,"card.sale")," ",n.card.getDiscount().toFixed(1)," %"),t.xp6(4),t.uIk("fill",n.card.is_favourite?"red":" transparent")("stroke",n.card.is_favourite?"red":"black"),t.xp6(3),t.Oqu(n.lang.isEn()?n.card.name_en:n.card.name_ar),t.xp6(2),t.HOy(" ",n.card.num_of_days," ",n.Number(n.card.num_of_days)>10?t.lcZ(17,15,"card.day"):t.lcZ(18,17,"card.days")," ",n.card.num_of_nights," ",n.Number(n.card.num_of_days)>10?t.lcZ(19,19,"card.night"):t.lcZ(20,21,"card.nights")," "),t.xp6(6),t.Q6J("ngIf",n.card.price_before),t.xp6(2),t.AsE("",n.card.price_before?n.card.price_after:n.card.price_before," ",t.lcZ(25,23,"home.currency"),""))},dependencies:[d.ez,d.O5,l.A,e.aw,e.X$],styles:['.header[_ngcontent-%COMP%]{position:relative}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{aspect-ratio:10/8;border-radius:5px;overflow:hidden;max-width:400px}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]{position:absolute;z-index:9;top:8px;width:100%;left:0;right:0;display:flex;justify-content:space-between}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]{background-color:rgb(var(--accent));padding:7px 12px;border-radius:0 6px 6px 0;font-size:13px;font-weight:600;color:#fff}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]:lang(ar){border-radius:6px 0 0 6px}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin:auto 5px;background-color:#fff;border-radius:100%;width:25px;height:25px;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:auto}.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:rgb(var(--text-color));font-size:15px;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:2em;overflow:hidden;text-overflow:ellipsis}.content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:15px}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-weight:100}.del[_ngcontent-%COMP%]{position:relative}.del[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:1px;background-color:red}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]{position:relative}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]:after{inset:-2px 0 0}']})}return i})()}}]);