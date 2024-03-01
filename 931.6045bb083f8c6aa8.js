"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[931],{6931:(_,u,e)=>{e.r(u),e.d(u,{DetailsComponent:()=>E});var r=e(6814),f=e(3911),h=e(5413),c=e(3838),t=e(9291);let p=(()=>{class i{set formCtl(o){this.control=o,this.quantity=this.control.value||0}constructor(){this.quantity=0}increment(){this.quantity+=1,this.sync()}decrement(){0!=this.quantity&&(this.quantity-=1,this.sync())}sync(){this.control.patchValue(this.quantity)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-quantity"]],inputs:{formCtl:"formCtl"},standalone:!0,features:[t.jDz],decls:11,vars:1,consts:[[1,"q-card"],[1,"increment",3,"click"],["width","28px","height","28px","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"],["d","M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"],[1,"quantity"],[1,"decrement",3,"click"],["d","M15 12H9","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return n.increment()}),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"path",4),t.qZA()(),t.kcU(),t.TgZ(5,"p",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6),t.NdJ("click",function(){return n.decrement()}),t.O4$(),t.TgZ(8,"svg",2),t._UZ(9,"path",7)(10,"path",4),t.qZA()()()),2&a&&(t.xp6(6),t.Oqu(n.quantity))},dependencies:[r.ez],styles:["svg[_ngcontent-%COMP%]{cursor:pointer}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:rgb(var(--text-color))}.q-card[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.quantity[_ngcontent-%COMP%]{font-weight:600;font-size:16px;width:20px;text-align:center}"]})}return i})();var s=e(6223),l=e(8312),m=e(1577),g=e(5431),v=e(6533),O=e(3774),b=e(319),Z=e(7699),M=e(9795),P=e(3959),w=e(9376),D=e(2669);const A=function(){return{width:"150px"}};function T(i,x){if(1&i){const o=t.EpF();t.TgZ(0,"div",19)(1,"p-calendar",20),t.NdJ("ngModelChange",function(n){t.CHM(o);const d=t.oxw();return t.KtG(d.date=n)}),t.qZA()()}if(2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngModel",o.date)("inline",!0)("inputStyle",t.DdM(3,A))}}function k(i,x){if(1&i&&(t.TgZ(0,"swipper-slide"),t._UZ(1,"app-card",21),t.qZA()),2&i){const o=x.$implicit;t.xp6(1),t.Q6J("card",o)}}let E=(()=>{class i{constructor(o,a,n,d,L,y,U){this.reservationService=o,this.deviceMode=a,this.auth=n,this.route=d,this.authView=L,this.router=y,this.toasterService=U,this.adult=new s.NI(1),this.children=new s.NI(0),this.isCalenderOpend=!1,this.openReservation=!1,this.slidePerview=()=>(0,h.L)(this.deviceMode.mode()),this.closeCalenderEvent=C=>{C.target.closest(".sticky-calender")||this.closeCalender()},d.data.subscribe(C=>this.offer=C.data),setTimeout(()=>{console.log(y.routerState.snapshot.url),console.log(this.route.snapshot),console.log(this.route.snapshot.routeConfig?.path)},1e3)}openCalender(){this.isCalenderOpend=!0,setTimeout(()=>{document.addEventListener("click",this.closeCalenderEvent)},1)}closeCalender(){this.isCalenderOpend=!1,document.removeEventListener("click",this.closeCalenderEvent)}reserve(){this.auth.isLoggedIn()?this.reservationService.patchReservation({adults_count:this.adult.value,children_count:this.children.value,start_date:this.date?.[0],end_date:this.date?.[1],office_id:this.offer.offer_details.office_id,type:"offer",payment_type:this.offer.offer_details.payment_type}).subscribe({next:o=>{200==o.status&&this.toasterService.success(o.msg)}}):this.authView.login(this.router.routerState.snapshot.url)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(O.D),t.Y36(b.Q),t.Y36(Z.V),t.Y36(M.gz),t.Y36(P.w),t.Y36(M.F0),t.Y36(w.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:44,vars:47,consts:[["bindingLayout","",1,"container","py-4"],[1,"grid-sm"],[1,"align-items-lg-start","gap-lg-4",3,"ngClass"],[3,"card","moreDetails"],[1,"text-primary"],[1,"description"],[1,"reservation","grid-sm"],[1,"app-btn","app-btn-primary","w-100","mt-3","reservation-button",3,"click"],[1,"reservation-details"],[1,"text"],[1,"row-sm","justify-content-between"],[3,"formCtl"],[1,"calender-field","mt-2"],[1,"d-flex","gap-2"],["type","button",1,"app-btn","app-btn-accent-outline",3,"value","dateInputFormat","click"],["type","button",1,"app-btn","app-btn-primary",3,"value","click"],["class","sticky-calender",4,"ngIf"],[1,"swipper",3,"SlidePerview","SpaceBetween","AutoPlay"],[4,"ngFor","ngForOf"],[1,"sticky-calender"],["selectionMode","range",3,"ngModel","inline","inputStyle","ngModelChange"],[3,"card"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t._UZ(4,"app-card",3),t.qZA(),t.TgZ(5,"div")(6,"h5",4),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",5),t._uU(10),t.qZA(),t.TgZ(11,"div",6)(12,"button",7),t.NdJ("click",function(){return n.openReservation=!0}),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",8)(16,"h5",9),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"div",10)(20,"p"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"app-quantity",11),t.qZA(),t.TgZ(24,"div",10)(25,"p"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._UZ(28,"app-quantity",11),t.qZA(),t.TgZ(29,"h5",4),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"div",12)(33,"div",13)(34,"input",14),t.NdJ("click",function(){return n.openCalender()}),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"input",15),t.NdJ("click",function(){return n.reserve()}),t.ALo(37,"translate"),t.qZA()(),t.YNc(38,T,2,4,"div",16),t.qZA()()()()(),t.TgZ(39,"h5",9),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"swiper-container",17),t.YNc(43,k,2,1,"swipper-slide",18),t.qZA()()()),2&a&&(t.xp6(2),t.Q6J("ngClass",n.deviceMode.isDesktop()?"row-sm":"grid-sm"),t.xp6(1),t.ekj("w-400px",n.deviceMode.isDesktop()),t.xp6(1),t.Q6J("card",n.offer.offer_details)("moreDetails",!1),t.xp6(1),t.ekj("w-50",n.deviceMode.isDesktop()),t.xp6(2),t.Oqu(t.lcZ(8,29,"offerDetails.details")),t.xp6(3),t.hij(" ",n.offer.offer_details.description," "),t.xp6(3),t.Oqu(t.lcZ(14,31,"offerDetails.reserveNow")),t.xp6(2),t.ekj("open",n.openReservation),t.xp6(2),t.Oqu(t.lcZ(18,33,"offerDetails.peopleNo")),t.xp6(4),t.Oqu(t.lcZ(22,35,"offerDetails.adult")),t.xp6(2),t.Q6J("formCtl",n.adult),t.xp6(3),t.Oqu(t.lcZ(27,37,"offerDetails.children")),t.xp6(2),t.Q6J("formCtl",n.children),t.xp6(2),t.Oqu(t.lcZ(31,39,"offerDetails.selectDate")),t.xp6(3),t.ekj("flex-column",!n.deviceMode.isDesktop()),t.xp6(1),t.Q6J("value",t.lcZ(35,41,"offerDetails.selectDate"))("dateInputFormat",n.date),t.xp6(2),t.Q6J("value",t.lcZ(37,43,"offerDetails.confirm")),t.xp6(2),t.Q6J("ngIf",n.isCalenderOpend),t.xp6(2),t.Oqu(t.lcZ(41,45,"offerDetails.checkMore")),t.xp6(2),t.Q6J("SlidePerview",n.slidePerview())("SpaceBetween",10)("AutoPlay",!0),t.xp6(1),t.Q6J("ngForOf",n.offer.related_offers))},dependencies:[r.ez,r.mk,r.sg,r.O5,v.x,D.A,m.S,g.$,c.A,f.aw,f.X$,s.u5,s.JJ,s.On,p,l._8,l.f],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-accent-outline[_ngcontent-%COMP%]{background-color:#fff!important;color:rgb(var(--accent));border:1px solid rgb(var(--accent))}.app-btn-accent-outline[_ngcontent-%COMP%]:focus, .app-btn-accent-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}.description[_ngcontent-%COMP%]{padding:8px 5px;background-color:rgb(var(--bg-offset-1));border-radius:7px;font-size:14px;line-height:21px}.swipper[_ngcontent-%COMP%]{width:100%}.w-400px[_ngcontent-%COMP%]{width:400px}.calender-field[_ngcontent-%COMP%]{position:relative}.calender-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;font-size:16px}.sticky-calender[_ngcontent-%COMP%]{position:absolute;z-index:999;top:40px}.reservation-details[_ngcontent-%COMP%]{height:0px;overflow:hidden}.reservation-details.open[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_toggle 1.5s forwards}@keyframes _ngcontent-%COMP%_toggle{0%{height:0px}to{height:230px;overflow:visible}}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .sticky-calender[_ngcontent-%COMP%]{left:0;right:0;position:absolute;bottom:100px;top:unset;display:flex;justify-content:center}"]})}return i})()},5431:(_,u,e)=>{e.d(u,{$:()=>c});var r=e(6814),f=e(6197),h=e(9291);let c=(()=>{class t{static#t=this.\u0275fac=function(l){return new(l||t)};static#e=this.\u0275mod=h.oAB({type:t});static#n=this.\u0275inj=h.cJS({providers:[f.K],imports:[r.ez]})}return t})()},6197:(_,u,e)=>{e.d(u,{K:()=>h});var r=e(9291),f=e(9907);let h=(()=>{class c{constructor(p){this.lang=p,this.state=!1,this.useDefaultElementStyle=!0,this.closedEvent=s=>{s.target.closest(".ng-menu")||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(p){this.state?this.close():this.open(),this.setMenu(p)}setMenu(p){const{bottom:s,width:l,right:m}=p.getBoundingClientRect();let g=0;if(g=Math.max(l,p.offsetLeft),this.menuEl.style.top=`${s}px`,this.lang.isAr()&&(this.menuEl.style.right="unset",this.menuEl.style.left=`${g}px`,this.menuEl.style.transform=`translateX(-${l/2}px)`),this.lang.isEn()){const v=document.documentElement.clientWidth-m;this.menuEl.style.left="unset",this.menuEl.style.right=`${Math.max(v+l,v)}px`,this.menuEl.style.transform=`translateX(${l/2}px)`}}static#t=this.\u0275fac=function(s){return new(s||c)(r.LFG(f.C))};static#e=this.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac})}return c})()}}]);