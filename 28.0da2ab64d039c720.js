"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[28],{28:(v,g,s)=>{s.r(g),s.d(g,{NavbarComponent:()=>k});var r=s(6814),p=s(9068),u=s(3911),i=s(5431),m=s(6026),t=s(9291),l=s(9907),c=s(7699),d=s(3959),f=s(6197);function _(e,h){if(1&e&&(t.TgZ(0,"div",2),t.Hsn(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("ngStyle",o.style)}}const b=[[["ng-menu-item"]]],C=["ng-menu-item"];let M=(()=>{class e{set useDefaultElementStyle(o){this.controller.useDefaultElementStyle=o}constructor(o,a){this.controller=o,this.el=a}ngAfterViewInit(){this.controller.menuEl=this.el.nativeElement.querySelector(".ng-menu-overlay")}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(f.K),t.Y36(t.SBq))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-menu"]],inputs:{useDefaultElementStyle:"useDefaultElementStyle",style:"style"},features:[t._Bn([f.K])],ngContentSelectors:C,decls:2,vars:1,consts:[[1,"ng-menu-overlay"],["class","ng-menu",3,"ngStyle",4,"ngIf"],[1,"ng-menu",3,"ngStyle"]],template:function(a,n){1&a&&(t.F$t(b),t.TgZ(0,"div",0),t.YNc(1,_,2,1,"div",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",n.controller.state))},dependencies:[r.O5,r.PC],styles:[".ng-menu-overlay[_ngcontent-%COMP%]{position:absolute;z-index:999}.ng-menu-overlay[_ngcontent-%COMP%]   .ng-menu[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;min-width:100px;box-shadow:0 0 5px #0003,0 0 5px #0003;max-height:250px;overflow:auto;background-color:#fff}"]})}return e})();const Z=["*"];let O=(()=>{class e{constructor(o){this.controller=o}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(f.K))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-menu-item"]],ngContentSelectors:Z,decls:2,vars:2,consts:[[3,"click"]],template:function(a,n){1&a&&(t.F$t(),t.TgZ(0,"li",0),t.NdJ("click",function(){return n.controller.close()}),t.Hsn(1),t.qZA()),2&a&&t.ekj("menu-item",n.controller.useDefaultElementStyle)},styles:["li.menu-item[_ngcontent-%COMP%]{transition:.5s;padding:10px;color:var(--text-color);cursor:pointer;width:inherit;display:block;text-wrap:nowrap}li.menu-item[_ngcontent-%COMP%]:hover{background-color:rgb(var(--bg-offset))}"]})}return e})();function P(e,h){if(1&e){const o=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.lang.changeLanguage("en"))}),t.TgZ(1,"span",18),t._uU(2,"English"),t.qZA(),t.TgZ(3,"span",19),t._uU(4,"|"),t.qZA(),t.TgZ(5,"span",20),t._uU(6,"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"),t.qZA()()}}function A(e,h){if(1&e){const o=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.lang.changeLanguage("ar"))}),t.TgZ(1,"span",20),t._uU(2,"English"),t.qZA(),t.TgZ(3,"span",19),t._uU(4,"|"),t.qZA(),t.TgZ(5,"span",18),t._uU(6,"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"),t.qZA()()}}function y(e,h){if(1&e){const o=t.EpF();t.TgZ(0,"a",21),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.authViewController.login())}),t.TgZ(1,"button",22),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"auth.loginRegister")))}function E(e,h){if(1&e){const o=t.EpF();t.TgZ(0,"a",21,23),t.NdJ("click",function(){t.CHM(o);const n=t.MAs(1);t.oxw();const x=t.MAs(33);return t.KtG(x.controller.toggle(n))}),t._UZ(2,"img",24),t.qZA()}if(2&e){const o=t.oxw();t.xp6(2),t.s9C("src",null==o.auth.user?null:o.auth.user.image,t.LSH)}}const T=function(){return{"border-radius":"3px",padding:"14px 5px"}};let k=(()=>{class e{constructor(o,a,n){this.lang=o,this.auth=a,this.authViewController=n,this.appRoutes=m.VP}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(l.C),t.Y36(c.V),t.Y36(d.w))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["navbar"]],standalone:!0,features:[t.jDz],decls:59,vars:45,consts:[[1,"container-fluid","h-100"],[1,"d-flex","align-items-center","gap-3"],[1,"px-4",3,"routerLink"],["src","assets/images/icon/sama-logo.svg","alt","sama"],[1,"d-flex","align-items-center","gap-4"],[3,"routerLink"],[1,"app-btn","app-btn-accent",2,"padding","0.8em 1.5em 0.6em",3,"routerLink"],[1,"lang-select","pointer"],["class","d-flex align-items-center",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"useDefaultElementStyle"],["menu",""],["src","assets/images/svg/profile.svg","alt","profile","width","22","height","22"],["src","assets/images/svg/save.svg","alt","reservation","width","22","height","22"],["src","assets/images/svg/save-offer.svg","alt","profile","width","22","height","22"],["src","assets/images/svg/wallet.svg","alt","wallet","width","22","height","22"],["src","assets/images/svg/heart.svg","alt","favourites","width","22","height","22"],[1,"d-flex","align-items-center",3,"click"],[1,"text"],[1,"vertical-line","text-offset"],[1,"fw-bold","text-offset"],[3,"click"],[1,"app-btn","app-btn-primary","login-btn"],["trigger",""],["width","34","height","34",3,"src"]],template:function(a,n){1&a&&(t.TgZ(0,"nav")(1,"div",0)(2,"ul")(3,"div",1)(4,"li")(5,"a",2),t._UZ(6,"img",3),t.qZA()(),t.TgZ(7,"div",4)(8,"li")(9,"a",5),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"li")(13,"a",5),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"li")(17,"a",5),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"li")(21,"a",6),t._uU(22),t.ALo(23,"translate"),t.qZA()()()(),t.TgZ(24,"div",1)(25,"li")(26,"div",7),t.YNc(27,P,7,0,"button",8),t.YNc(28,A,7,0,"button",8),t.qZA()(),t.TgZ(29,"li"),t.YNc(30,y,4,3,"a",9),t.YNc(31,E,3,1,"a",9),t.TgZ(32,"ng-menu",10,11)(34,"ng-menu-item")(35,"a",5),t._UZ(36,"img",12),t._uU(37),t.ALo(38,"translate"),t.qZA()(),t.TgZ(39,"ng-menu-item")(40,"a",5),t._UZ(41,"img",13),t._uU(42),t.ALo(43,"translate"),t.qZA()(),t.TgZ(44,"ng-menu-item")(45,"a",5),t._UZ(46,"img",14),t._uU(47),t.ALo(48,"translate"),t.qZA()(),t.TgZ(49,"ng-menu-item")(50,"a",5),t._UZ(51,"img",15),t._uU(52),t.ALo(53,"translate"),t.qZA()(),t.TgZ(54,"ng-menu-item")(55,"a",5),t._UZ(56,"img",16),t._uU(57),t.ALo(58,"translate"),t.qZA()()()()()()()()),2&a&&(t.xp6(5),t.Q6J("routerLink",n.appRoutes.home),t.xp6(4),t.Q6J("routerLink",n.appRoutes.home),t.xp6(1),t.Oqu(t.lcZ(11,26,"screen.home")),t.xp6(3),t.Q6J("routerLink",n.appRoutes.offers),t.xp6(1),t.Oqu(t.lcZ(15,28,"screen.travalPackages")),t.xp6(3),t.Q6J("routerLink",n.appRoutes.aboutUs),t.xp6(1),t.Oqu(t.lcZ(19,30,"screen.aboutUs")),t.xp6(3),t.Q6J("routerLink",n.appRoutes.joinUs),t.xp6(1),t.Oqu(t.lcZ(23,32,"screen.joinUs")),t.xp6(5),t.Q6J("ngIf",n.lang.isAr()),t.xp6(1),t.Q6J("ngIf",n.lang.isEn()),t.xp6(2),t.Q6J("ngIf",!n.auth.isLoggedIn()),t.xp6(1),t.Q6J("ngIf",n.auth.isLoggedIn()),t.xp6(1),t.Akn(t.DdM(44,T)),t.Q6J("useDefaultElementStyle",!1),t.xp6(3),t.Q6J("routerLink",n.appRoutes.userAccount.profile),t.xp6(2),t.hij(" ",t.lcZ(38,34,"userAccount.profile")," "),t.xp6(3),t.Q6J("routerLink",n.appRoutes.userAccount.reservation),t.xp6(2),t.hij(" ",t.lcZ(43,36,"userAccount.reservation")," "),t.xp6(3),t.Q6J("routerLink",n.appRoutes.userAccount.bookingOffer),t.xp6(2),t.hij(" ",t.lcZ(48,38,"userAccount.offerBooking")," "),t.xp6(3),t.Q6J("routerLink",n.appRoutes.userAccount.wallet),t.xp6(2),t.hij(" ",t.lcZ(53,40,"userAccount.walletBalance")," "),t.xp6(3),t.Q6J("routerLink",n.appRoutes.userAccount.favorite),t.xp6(2),t.hij(" ",t.lcZ(58,42,"userAccount.favourites")," "))},dependencies:[r.ez,r.O5,p.Bz,p.rH,i.$,M,O,u.aw,u.X$],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}nav[_ngcontent-%COMP%]{height:60px;background-color:#fff;position:sticky;z-index:9999;box-shadow:0 0 30px #00000017;top:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100%}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:rgb(var(--text-color))}.login-btn[_ngcontent-%COMP%]{font-size:16px;border-radius:16px;padding:10px 25px}.linkable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:20px;cursor:pointer}.linkable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;object-fit:contain}.lang-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;color:rgb(var(--primary));font-size:14px}.vertical-line[_ngcontent-%COMP%]{font-weight:700;margin:auto 5px}.text-offset[_ngcontent-%COMP%]{color:#858585}ng-menu-item[_ngcontent-%COMP%]{padding:8px 5px;cursor:pointer;width:150px;font-size:13px;font-weight:500}ng-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}ng-menu-item[_ngcontent-%COMP%]:hover{background-color:rgba(var(--primary),.9)}ng-menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#fff!important}"]})}return e})()},5431:(v,g,s)=>{s.d(g,{$:()=>i});var r=s(6814),p=s(6197),u=s(9291);let i=(()=>{class m{static#t=this.\u0275fac=function(c){return new(c||m)};static#n=this.\u0275mod=u.oAB({type:m});static#e=this.\u0275inj=u.cJS({providers:[p.K],imports:[r.ez]})}return m})()},6197:(v,g,s)=>{s.d(g,{K:()=>u});var r=s(9291),p=s(9907);let u=(()=>{class i{constructor(t){this.lang=t,this.state=!1,this.useDefaultElementStyle=!0,this.closedEvent=l=>{l.target.closest(".ng-menu")||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(t){this.state?this.close():this.open(),this.setMenu(t)}setMenu(t){const{bottom:l,width:c,right:d}=t.getBoundingClientRect();let f=0;if(f=Math.max(c,t.offsetLeft),this.menuEl.style.top=`${l}px`,this.lang.isAr()&&(this.menuEl.style.right="unset",this.menuEl.style.left=`${f}px`,this.menuEl.style.transform=`translateX(-${c/2}px)`),this.lang.isEn()){const _=document.documentElement.clientWidth-d;this.menuEl.style.left="unset",this.menuEl.style.right=`${Math.max(_+c,_)}px`,this.menuEl.style.transform=`translateX(${c/2}px)`}}static#t=this.\u0275fac=function(l){return new(l||i)(r.LFG(p.C))};static#n=this.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac})}return i})()}}]);