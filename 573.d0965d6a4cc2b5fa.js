"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[573],{2573:(w,v,s)=>{s.r(v),s.d(v,{DetailsComponent:()=>K});var a=s(6814),f=s(3911),m=s(5413),d=s(3838),t=s(9291);class p{constructor(){this.slidePerview=1,this.spaceBetween=0,this.autoPlay=!0,this.navigation=!1,this.pagination=!1,this.duration=2500,this.speed=400}}let c=(()=>{class n extends p{constructor(e){super(),this.platformId=e,this.swipperWidth=100,this.swipperSlides=0,this.currentActiveSlide=(0,t.tdS)(0),this.currentPosition=0,this.isGrabbing=!1,this.slideWidth=100,this.dir=-1,this.lastSlide=()=>this.swipperSlides-this.slidePerview,this.dir="ar"==document.body.lang?1:-1}isActive(e){return e===this.currentActiveSlide()}slideTo(e){this.currentActiveSlide.update(()=>e),this.move({space:this.spaceToMove(),speed:this.speed})}spaceToMove(){return this.currentPosition=this.currentActiveSlide()*this.slideWidth+this.spaceBetween*this.currentActiveSlide(),this.currentPosition}move(e){this.swipperEl&&(this.swipperEl.style.transition=`${e.speed}ms`,this.swipperEl.style.transform=`translate(${this.dir*e.space}px, 0)`)}fireAutoPlay(){(0,a.PM)(this.platformId)||!this.autoPlay||(this.autoPlayTimeOut=setTimeout(()=>{if(this.next(),this.currentActiveSlide()<this.lastSlide()&&this.currentActiveSlide()>=0)return this.fireAutoPlay()},this.duration))}stopAutoPlay(){clearTimeout(this.autoPlayTimeOut)}next(){this.currentActiveSlide()<this.lastSlide()&&this.currentActiveSlide.update(e=>++e),this.move({space:this.spaceToMove(),speed:500})}prev(){this.currentActiveSlide()>0&&this.currentActiveSlide.update(e=>--e),this.move({space:this.spaceToMove(),speed:500})}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(t.Lbi))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})(),u=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({providers:[c],imports:[a.ez]})}return n})(),C=(()=>{class n{set formCtl(e){this.control=e,this.quantity=this.control.value||0}constructor(){this.quantity=0}increment(){this.quantity+=1,this.sync()}decrement(){0!=this.quantity&&(this.quantity-=1,this.sync())}sync(){this.control.patchValue(this.quantity)}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-quantity"]],inputs:{formCtl:"formCtl"},standalone:!0,features:[t.jDz],decls:11,vars:1,consts:[[1,"q-card"],[1,"increment",3,"click"],["width","28px","height","28px","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"],["d","M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"],[1,"quantity"],[1,"decrement",3,"click"],["d","M15 12H9","stroke","#1C274C","stroke-width","1.5","stroke-linecap","round"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.increment()}),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"path",4),t.qZA()(),t.kcU(),t.TgZ(5,"p",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6),t.NdJ("click",function(){return i.decrement()}),t.O4$(),t.TgZ(8,"svg",2),t._UZ(9,"path",7)(10,"path",4),t.qZA()()()),2&o&&(t.xp6(6),t.Oqu(i.quantity))},dependencies:[a.ez],styles:["svg[_ngcontent-%COMP%]{cursor:pointer}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:rgb(var(--text-color))}.q-card[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.quantity[_ngcontent-%COMP%]{font-weight:600;font-size:16px;width:20px;text-align:center}"]})}return n})();var h=s(6223),_=s(8312),x=s(1577),y=s(5431),O=s(6533),S=s(3774),A=s(319),Z=s(7699),M=s(9795),T=s(3959),D=s(9376),E=s(2669);let k=(()=>{class n{constructor(e,o){this.controller=e,this.el=o,this.isDragging=!1,this.dragStartCoordinates={clientX:0,clientY:0},this.mousedown=i=>this.startDrag(i),this.mouseleave=i=>this.stopDrag(i),this.mouseup=i=>this.stopDrag(i),this.touchstart=i=>this.startDrag(i),this.touchend=i=>this.stopDrag(i),this.mousemove=i=>this.moveTarget(i),this.touchmove=i=>this.moveTarget(i),this.getEventCoordinates=i=>({clientX:i.clientX||i.touches[0].clientX||0,clientY:i.clientY||i.touches[0].clientY||0})}startDrag(e){this.hireEvent(e),this.controller.stopAutoPlay()}stopDrag(e){this.isDragging&&(this.isDragging=!1,this.controller.isGrabbing=!1,this.adjustmentView())}hireEvent(e){this.isDragging=!0,this.dragStartCoordinates=this.getEventCoordinates(e)}adjustmentView(){this.controller.currentActiveSlide.update(()=>Math.abs(this.getAdjustmentSlide())),this.controller.move({space:this.controller.spaceToMove(),speed:400})}moveTarget(e){if(this.isDragging){this.controller.isGrabbing=!0;const{clientX:o}=this.getEventCoordinates(e);this.controller.currentPosition+=1==this.controller.dir?o-this.dragStartCoordinates.clientX:this.dragStartCoordinates.clientX-o,this.controller.move({space:this.controller.currentPosition,speed:0}),this.dragStartCoordinates=this.getEventCoordinates(e)}}getAdjustmentSlide(){let e=Math.round(this.controller.currentPosition/this.controller.slideWidth);return Math.abs(e)>=this.controller.lastSlide()&&(e=this.controller.lastSlide()),e<=0&&(e=0),e}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["","slideMovement",""]],hostBindings:function(o,i){1&o&&t.NdJ("mousedown",function(l){return i.mousedown(l)})("mouseleave",function(l){return i.mouseleave(l)})("mouseup",function(l){return i.mouseup(l)})("touchstart",function(l){return i.touchstart(l)})("touchend",function(l){return i.touchend(l)})("mousemove",function(l){return i.mousemove(l)})("touchmove",function(l){return i.touchmove(l)})}})}return n})();var L=s(5861);let z=(()=>{class n{constructor(e,o){var i=this;this.controller=e,this.el=o,this.activeSlide=(0,L.Z)(function*(){i.controller.currentActiveSlide(),yield setTimeout(()=>{},1);const r=i.el.nativeElement.getAttribute("bullet-index");i.controller.isActive(Number(r))?i.el.nativeElement.classList.add(i.slideActive):i.el.nativeElement.classList.remove(i.slideActive)}),(0,t.cEC)(this.activeSlide)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["","slideActive",""]],inputs:{slideActive:"slideActive"}})}return n})();function B(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"span",6),t.NdJ("click",function(){const r=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.controller.slideTo(r))}),t._uU(1),t.qZA()}if(2&n){const e=g.$implicit,o=g.index;t.Q6J("slideActive","active-bullet"),t.uIk("bullet-index",o),t.xp6(1),t.Oqu(e)}}const q=function(){return[]};function Y(n,g){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,B,2,3,"span",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.DdM(1,q).constructor(e.controller.swipperSlides))}}function J(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"span",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.controller.next())}),t.O4$(),t.TgZ(2,"svg",9),t._UZ(3,"path",10),t.qZA()(),t.kcU(),t.TgZ(4,"span",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.controller.prev())}),t.O4$(),t.TgZ(5,"svg",9),t._UZ(6,"path",12),t.qZA()()()}}const F=[[["swipper-slide"]]],N=function(n){return{gap:n}},U=["swipper-slide"];let I=(()=>{class n{set option(e){this.controller.swipperSlides=0,Object.assign(this.controller,e)}set SlidePerview(e){this.controller.slidePerview=e}set SpaceBetween(e){this.controller.spaceBetween=e}set AutoPlay(e){this.controller.autoPlay=e}set Navigation(e){this.controller.navigation=e}set Pagination(e){this.controller.pagination=e}set Duration(e){this.controller.duration=e}set Speed(e){this.controller.speed=e}constructor(e,o,i){this.controller=e,this.el=o,this.platformId=i,this.visibility=!1}ngOnInit(){(0,a.PM)(this.platformId)?this.controller.swipperWidth=Number(this.el.nativeElement.style.width.replace("px","")):this.browserBehaviour()}browserBehaviour(){this.controller.swipperWidth=Number(this.el.nativeElement.clientWidth),this.visibility=!0,this.controller.fireAutoPlay(),this.controller.swipperEl=this.el.nativeElement.querySelector("#swipper"),window.addEventListener("resize",()=>{this.controller.swipperWidth=Number(this.el.nativeElement.clientWidth),this.controller.move({space:this.controller.spaceToMove(),speed:0})})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c),t.Y36(t.SBq),t.Y36(t.Lbi))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["swipper"]],inputs:{option:"option",SlidePerview:"SlidePerview",SpaceBetween:"SpaceBetween",AutoPlay:"AutoPlay",Navigation:"Navigation",Pagination:"Pagination",Duration:"Duration",Speed:"Speed"},features:[t._Bn([c])],ngContentSelectors:U,decls:5,vars:7,consts:[[1,"swipper-container"],["slideMovement","","id","swipper",1,"swipper",3,"ngStyle"],["class","bullet-container",4,"ngIf"],["class","navigation-container",4,"ngIf"],[1,"bullet-container"],["class","bullet ",3,"slideActive","click",4,"ngFor","ngForOf"],[1,"bullet",3,"slideActive","click"],[1,"navigation-container"],[1,"arrow","arrow-right",3,"click"],["width","32","height","32","viewBox","0 0 32 32","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M24.8899 14.7514L10.6495 0.511215C10.3201 0.181592 9.88043 0 9.41162 0C8.94281 0 8.50314 0.181592 8.17378 0.511215L7.12507 1.55966C6.44267 2.24284 6.44267 3.35321 7.12507 4.03535L19.0831 15.9934L7.1118 27.9646C6.78244 28.2943 6.60059 28.7337 6.60059 29.2022C6.60059 29.6713 6.78244 30.1107 7.1118 30.4406L8.16051 31.4888C8.49013 31.8184 8.92954 32 9.39835 32C9.86716 32 10.3068 31.8184 10.6362 31.4888L24.8899 17.2356C25.22 16.905 25.4013 16.4635 25.4003 15.9941C25.4013 15.523 25.22 15.0818 24.8899 14.7514Z","fill","#7195BE"],[1,"arrow","arrow-left",3,"click"],["d","M7.11013 17.2486L21.3505 31.4888C21.6799 31.8184 22.1196 32 22.5884 32C23.0572 32 23.4969 31.8184 23.8262 31.4888L24.8749 30.4403C25.5573 29.7572 25.5573 28.6468 24.8749 27.9647L12.9169 16.0066L24.8882 4.03535C25.2176 3.70573 25.3994 3.26632 25.3994 2.79777C25.3994 2.3287 25.2176 1.88929 24.8882 1.5594L23.8395 0.511215C23.5099 0.181593 23.0705 1.90735e-06 22.6016 1.90735e-06C22.1328 1.90735e-06 21.6932 0.181593 21.3638 0.511215L7.11013 14.7644C6.77999 15.095 6.59866 15.5365 6.5997 16.0059C6.59866 16.477 6.77999 16.9182 7.11013 17.2486Z","fill","#7195BE"]],template:function(o,i){1&o&&(t.F$t(F),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.YNc(3,Y,2,2,"div",2),t.YNc(4,J,7,0,"div",3),t.qZA()),2&o&&(t.Udp("opacity",i.visibility?1:0),t.xp6(1),t.Q6J("ngStyle",t.VKq(5,N,i.controller.spaceBetween+"px")),t.xp6(2),t.Q6J("ngIf",i.controller.pagination),t.xp6(1),t.Q6J("ngIf",i.controller.navigation))},dependencies:[a.sg,a.O5,a.PC,k,z],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none;width:100%;height:inherit;display:block;--bullet-bg: rgba(177, 177, 177, 1);--active-bullet-bg: white;--bullet-gap: calc(var(--bullet-size) * 50 / 100);--bullet-postion-bottom: 5px;--bullet-size: 15px;--arrow-size: 50px;--arrow-color: #7195BE;--arrow-space: 5px}.swipper-container[_ngcontent-%COMP%]{position:relative;height:inherit;overflow:hidden}.swipper-container[_ngcontent-%COMP%]   .swipper[_ngcontent-%COMP%]{display:flex}.bullet-container[_ngcontent-%COMP%]{position:absolute;bottom:var(--bullet-postion-bottom);left:0;width:100%;z-index:9;display:flex;justify-content:center;align-items:center;gap:var(--bullet-gap)}.bullet-container[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{cursor:pointer;background-color:var(--bullet-bg);width:var(--bullet-size);height:var(--bullet-size);border-radius:50%;display:inline-block}.bullet-container[_ngcontent-%COMP%]   .bullet.active-bullet[_ngcontent-%COMP%]{background-color:var(--active-bullet-bg)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(1){width:calc(var(--bullet-size) - 1px);height:calc(var(--bullet-size) - 1px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(2){width:calc(var(--bullet-size) - 2px);height:calc(var(--bullet-size) - 2px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(3){width:calc(var(--bullet-size) - 3px);height:calc(var(--bullet-size) - 3px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(4){width:calc(var(--bullet-size) - 4px);height:calc(var(--bullet-size) - 4px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(5){width:calc(var(--bullet-size) - 5px);height:calc(var(--bullet-size) - 5px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(6){width:calc(var(--bullet-size) - 6px);height:calc(var(--bullet-size) - 6px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(7){width:calc(var(--bullet-size) - 7px);height:calc(var(--bullet-size) - 7px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(8){width:calc(var(--bullet-size) - 8px);height:calc(var(--bullet-size) - 8px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(9){width:calc(var(--bullet-size) - 9px);height:calc(var(--bullet-size) - 9px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(10){width:calc(var(--bullet-size) - 10px);height:calc(var(--bullet-size) - 10px)}.navigation-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:var(--arrow-size);width:var(--arrow-size);background-color:var(--test)}.navigation-container[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--arrow-color)}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:9}.arrow-right[_ngcontent-%COMP%]{right:var(--arrow-space)}.arrow-left[_ngcontent-%COMP%]{left:var(--arrow-space)}"]})}return n})(),H=(()=>{class n{constructor(e,o,i){this.controller=e,this.el=o,this.platformId=i}ngAfterViewInit(){this.calcSlideLayout(),window.addEventListener("resize",()=>{this.calcSlideLayout(),this.controller.move({space:this.controller.spaceToMove(),speed:0})})}calcSlideLayout(){const{slidePerview:e,spaceBetween:o,swipperWidth:i}=this.controller,l=i/e-(e-1)*o/e;this.controller.slideWidth=l,this.el.nativeElement.style.width=`${l}px`}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c),t.Y36(t.SBq),t.Y36(t.Lbi))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["","slidePerview",""]]})}return n})();const Q=function(){return{"--cursor":"grabbing"}},j=["*"];let W=(()=>{class n{constructor(e,o){this.controller=e,this.el=o}ngOnInit(){this.controller.swipperSlides+=1,this.el.nativeElement.setAttribute("swipper-slide-index",this.controller.swipperSlides+"")}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c),t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["swipper-slide"]],ngContentSelectors:j,decls:2,vars:4,consts:[["slidePerview","",1,"swipper-slide",3,"ngStyle"]],template:function(o,i){1&o&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&o&&(t.ekj("is-grabbing",i.controller.isGrabbing),t.Q6J("ngStyle",t.DdM(3,Q)))},dependencies:[a.PC,H],styles:["[_nghost-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.swipper-slide[_ngcontent-%COMP%]{width:100%}.is-grabbing[_ngcontent-%COMP%]{pointer-events:none}"]})}return n})();const $=function(){return{width:"150px"}};function G(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"div",19)(1,"p-calendar",20),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.date=i)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.date)("inline",!0)("inputStyle",t.DdM(3,$))}}function X(n,g){if(1&n&&(t.TgZ(0,"swipper-slide"),t._UZ(1,"app-card",21),t.qZA()),2&n){const e=g.$implicit;t.xp6(1),t.Q6J("card",e)}}let K=(()=>{class n{constructor(e,o,i,r,l,P,R){this.reservationService=e,this.deviceMode=o,this.auth=i,this.route=r,this.authView=l,this.router=P,this.toasterService=R,this.adult=new h.NI(1),this.children=new h.NI(0),this.isCalenderOpend=!1,this.openReservation=!1,this.slidePerview=()=>(0,m.L)(this.deviceMode.mode()),this.closeCalenderEvent=b=>{b.target.closest(".sticky-calender")||this.closeCalender()},r.data.subscribe(b=>this.offer=b.data),setTimeout(()=>{console.log(P.routerState.snapshot.url),console.log(this.route.snapshot),console.log(this.route.snapshot.routeConfig?.path)},1e3)}openCalender(){this.isCalenderOpend=!0,setTimeout(()=>{document.addEventListener("click",this.closeCalenderEvent)},1)}closeCalender(){this.isCalenderOpend=!1,document.removeEventListener("click",this.closeCalenderEvent)}reserve(){this.auth.isLoggedIn()?this.reservationService.patchReservation({adults_count:this.adult.value,children_count:this.children.value,start_date:this.date?.[0],end_date:this.date?.[1],office_id:this.offer.offer_details.office_id,type:"offer",payment_type:this.offer.offer_details.payment_type}).subscribe({next:e=>{200==e.status&&this.toasterService.success(e.msg)}}):this.authView.login(this.router.routerState.snapshot.url)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(S.D),t.Y36(A.Q),t.Y36(Z.V),t.Y36(M.gz),t.Y36(T.w),t.Y36(M.F0),t.Y36(D.M))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:44,vars:47,consts:[["bindingLayout","",1,"container","py-4"],[1,"grid-sm"],[1,"align-items-lg-start","gap-lg-4",3,"ngClass"],[3,"card","moreDetails"],[1,"text-primary"],[1,"description"],[1,"reservation","grid-sm"],[1,"app-btn","app-btn-primary","w-100","mt-3","reservation-button",3,"click"],[1,"reservation-details"],[1,"text"],[1,"row-sm","justify-content-between"],[3,"formCtl"],[1,"calender-field","mt-2"],[1,"d-flex","gap-2"],["type","button",1,"app-btn","app-btn-accent-outline",3,"value","dateInputFormat","click"],["type","button",1,"app-btn","app-btn-primary",3,"value","click"],["class","sticky-calender",4,"ngIf"],[1,"swipper",3,"SlidePerview","SpaceBetween","AutoPlay"],[4,"ngFor","ngForOf"],[1,"sticky-calender"],["selectionMode","range",3,"ngModel","inline","inputStyle","ngModelChange"],[3,"card"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t._UZ(4,"app-card",3),t.qZA(),t.TgZ(5,"div")(6,"h5",4),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",5),t._uU(10),t.qZA(),t.TgZ(11,"div",6)(12,"button",7),t.NdJ("click",function(){return i.openReservation=!0}),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",8)(16,"h5",9),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"div",10)(20,"p"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"app-quantity",11),t.qZA(),t.TgZ(24,"div",10)(25,"p"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._UZ(28,"app-quantity",11),t.qZA(),t.TgZ(29,"h5",4),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"div",12)(33,"div",13)(34,"input",14),t.NdJ("click",function(){return i.openCalender()}),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"input",15),t.NdJ("click",function(){return i.reserve()}),t.ALo(37,"translate"),t.qZA()(),t.YNc(38,G,2,4,"div",16),t.qZA()()()()(),t.TgZ(39,"h5",9),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"swipper",17),t.YNc(43,X,2,1,"swipper-slide",18),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("ngClass",i.deviceMode.isDesktop()?"row-sm":"grid-sm"),t.xp6(1),t.ekj("w-400px",i.deviceMode.isDesktop()),t.xp6(1),t.Q6J("card",i.offer.offer_details)("moreDetails",!1),t.xp6(1),t.ekj("w-50",i.deviceMode.isDesktop()),t.xp6(2),t.Oqu(t.lcZ(8,29,"offerDetails.details")),t.xp6(3),t.hij(" ",i.offer.offer_details.description," "),t.xp6(3),t.Oqu(t.lcZ(14,31,"offerDetails.reserveNow")),t.xp6(2),t.ekj("open",i.openReservation),t.xp6(2),t.Oqu(t.lcZ(18,33,"offerDetails.peopleNo")),t.xp6(4),t.Oqu(t.lcZ(22,35,"offerDetails.adult")),t.xp6(2),t.Q6J("formCtl",i.adult),t.xp6(3),t.Oqu(t.lcZ(27,37,"offerDetails.children")),t.xp6(2),t.Q6J("formCtl",i.children),t.xp6(2),t.Oqu(t.lcZ(31,39,"offerDetails.selectDate")),t.xp6(3),t.ekj("flex-column",!i.deviceMode.isDesktop()),t.xp6(1),t.Q6J("value",t.lcZ(35,41,"offerDetails.selectDate"))("dateInputFormat",i.date),t.xp6(2),t.Q6J("value",t.lcZ(37,43,"offerDetails.confirm")),t.xp6(2),t.Q6J("ngIf",i.isCalenderOpend),t.xp6(2),t.Oqu(t.lcZ(41,45,"offerDetails.checkMore")),t.xp6(2),t.Q6J("SlidePerview",i.slidePerview())("SpaceBetween",10)("AutoPlay",!0),t.xp6(1),t.Q6J("ngForOf",i.offer.related_offers))},dependencies:[a.ez,a.mk,a.sg,a.O5,O.x,E.A,x.S,y.$,d.A,f.aw,f.X$,u,I,W,h.u5,h.JJ,h.On,C,_._8,_.f],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-accent-outline[_ngcontent-%COMP%]{background-color:#fff!important;color:rgb(var(--accent));border:1px solid rgb(var(--accent))}.app-btn-accent-outline[_ngcontent-%COMP%]:focus, .app-btn-accent-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}.description[_ngcontent-%COMP%]{padding:8px 5px;background-color:rgb(var(--bg-offset-1));border-radius:7px;font-size:14px;line-height:21px}.swipper[_ngcontent-%COMP%]{width:100%}.w-400px[_ngcontent-%COMP%]{width:400px}.calender-field[_ngcontent-%COMP%]{position:relative}.calender-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;font-size:16px}.sticky-calender[_ngcontent-%COMP%]{position:absolute;z-index:999;top:40px}.reservation-details[_ngcontent-%COMP%]{height:0px;overflow:hidden}.reservation-details.open[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_toggle 1.5s forwards}@keyframes _ngcontent-%COMP%_toggle{0%{height:0px}to{height:230px;overflow:visible}}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .sticky-calender[_ngcontent-%COMP%]{left:0;right:0;position:absolute;bottom:100px;top:unset;display:flex;justify-content:center}"]})}return n})()},5431:(w,v,s)=>{s.d(v,{$:()=>d});var a=s(6814),f=s(6197),m=s(9291);let d=(()=>{class t{static#t=this.\u0275fac=function(u){return new(u||t)};static#e=this.\u0275mod=m.oAB({type:t});static#i=this.\u0275inj=m.cJS({providers:[f.K],imports:[a.ez]})}return t})()},6197:(w,v,s)=>{s.d(v,{K:()=>m});var a=s(9291),f=s(9907);let m=(()=>{class d{constructor(p){this.lang=p,this.state=!1,this.useDefaultElementStyle=!0,this.closedEvent=c=>{c.target.closest(".ng-menu")||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(p){this.state?this.close():this.open(),this.setMenu(p)}setMenu(p){const{bottom:c,width:u,right:C}=p.getBoundingClientRect();let h=0;if(h=Math.max(u,p.offsetLeft),this.menuEl.style.top=`${c}px`,this.lang.isAr()&&(this.menuEl.style.right="unset",this.menuEl.style.left=`${h}px`,this.menuEl.style.transform=`translateX(-${u/2}px)`),this.lang.isEn()){const _=document.documentElement.clientWidth-C;this.menuEl.style.left="unset",this.menuEl.style.right=`${Math.max(_+u,_)}px`,this.menuEl.style.transform=`translateX(${u/2}px)`}}static#t=this.\u0275fac=function(c){return new(c||d)(a.LFG(f.C))};static#e=this.\u0275prov=a.Yz7({token:d,factory:d.\u0275fac})}return d})()}}]);