"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[395],{5413:(b,p,s)=>{s.d(p,{L:()=>t});const n={desktop:4,tablet:2,mobile:1.2},t=a=>n[a]},1577:(b,p,s)=>{s.d(p,{S:()=>t});var n=s(9291);let t=(()=>{class a{set onDateChange(r){r instanceof Array?this.onInputArr(r):this.onInput(r)}constructor(r){this.el=r,this.dateFormat={day:"2-digit",month:"2-digit",year:"numeric"}}onInput(r){if(!r)return;const m=new Date(r).toLocaleDateString("ar-eg",this.dateFormat);this.el.nativeElement.value=m}onInputArr(r){if(!r)return;const m=new Date(r[0]).toLocaleDateString("ar-eg",this.dateFormat),c=new Date(r[1]).toLocaleDateString("ar-eg",this.dateFormat);this.el.nativeElement.value=m+" - "+c}static#t=this.\u0275fac=function(m){return new(m||a)(n.Y36(n.SBq))};static#e=this.\u0275dir=n.lG2({type:a,selectors:[["","dateInputFormat",""]],inputs:{onDateChange:["dateInputFormat","onDateChange"],dateFormat:"dateFormat"},standalone:!0})}return a})()},6533:(b,p,s)=>{s.d(p,{x:()=>a});var n=s(6814),t=s(9291);let a=(()=>{class v{static#t=this.\u0275fac=function(c){return new(c||v)};static#e=this.\u0275mod=t.oAB({type:v});static#i=this.\u0275inj=t.cJS({imports:[n.ez]})}return v})()},2103:(b,p,s)=>{s.d(p,{m:()=>c});var n=s(9291),t=s(6027),a=s(6814);let v=(()=>{class d{constructor(g,h,w){this.controller=g,this.el=h,this.platformId=w}ngAfterViewInit(){this.calcSlideLayout(),window.addEventListener("resize",()=>{this.calcSlideLayout(),this.controller.move({space:this.controller.spaceToMove(),speed:0})})}calcSlideLayout(){const{slidePerview:g,spaceBetween:h,swipperWidth:w}=this.controller,f=w/g-(g-1)*h/g;this.controller.slideWidth=f,this.el.nativeElement.style.width=`${f}px`}static#t=this.\u0275fac=function(h){return new(h||d)(n.Y36(t.H),n.Y36(n.SBq),n.Y36(n.Lbi))};static#e=this.\u0275dir=n.lG2({type:d,selectors:[["","slidePerview",""]]})}return d})();const r=function(){return{"--cursor":"grabbing"}},m=["*"];let c=(()=>{class d{constructor(g,h){this.controller=g,this.el=h}ngOnInit(){this.controller.swipperSlides+=1,this.el.nativeElement.setAttribute("swipper-slide-index",this.controller.swipperSlides+"")}static#t=this.\u0275fac=function(h){return new(h||d)(n.Y36(t.H),n.Y36(n.SBq))};static#e=this.\u0275cmp=n.Xpm({type:d,selectors:[["swipper-slide"]],ngContentSelectors:m,decls:2,vars:4,consts:[["slidePerview","",1,"swipper-slide",3,"ngStyle"]],template:function(h,w){1&h&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA()),2&h&&(n.ekj("is-grabbing",w.controller.isGrabbing),n.Q6J("ngStyle",n.DdM(3,r)))},dependencies:[a.PC,v],styles:["[_nghost-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.swipper-slide[_ngcontent-%COMP%]{width:100%}.is-grabbing[_ngcontent-%COMP%]{pointer-events:none}"]})}return d})()},6829:(b,p,s)=>{s.d(p,{J:()=>f});var n=s(6814),t=s(9291),a=s(6027);let v=(()=>{class o{constructor(e,l){this.controller=e,this.el=l,this.isDragging=!1,this.dragStartCoordinates={clientX:0,clientY:0},this.mousedown=i=>this.startDrag(i),this.mouseleave=i=>this.stopDrag(i),this.mouseup=i=>this.stopDrag(i),this.touchstart=i=>this.startDrag(i),this.touchend=i=>this.stopDrag(i),this.mousemove=i=>this.moveTarget(i),this.touchmove=i=>this.moveTarget(i),this.getEventCoordinates=i=>({clientX:i.clientX||i.touches[0].clientX||0,clientY:i.clientY||i.touches[0].clientY||0})}startDrag(e){this.hireEvent(e),this.controller.stopAutoPlay()}stopDrag(e){this.isDragging&&(this.isDragging=!1,this.controller.isGrabbing=!1,this.adjustmentView())}hireEvent(e){this.isDragging=!0,this.dragStartCoordinates=this.getEventCoordinates(e)}adjustmentView(){this.controller.currentActiveSlide.update(()=>Math.abs(this.getAdjustmentSlide())),this.controller.move({space:this.controller.spaceToMove(),speed:400})}moveTarget(e){if(this.isDragging){this.controller.isGrabbing=!0;const{clientX:l}=this.getEventCoordinates(e);this.controller.currentPosition+=1==this.controller.dir?l-this.dragStartCoordinates.clientX:this.dragStartCoordinates.clientX-l,this.controller.move({space:this.controller.currentPosition,speed:0}),this.dragStartCoordinates=this.getEventCoordinates(e)}}getAdjustmentSlide(){let e=Math.round(this.controller.currentPosition/this.controller.slideWidth);return Math.abs(e)>=this.controller.lastSlide()&&(e=this.controller.lastSlide()),e<=0&&(e=0),e}static#t=this.\u0275fac=function(l){return new(l||o)(t.Y36(a.H),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:o,selectors:[["","slideMovement",""]],hostBindings:function(l,i){1&l&&t.NdJ("mousedown",function(u){return i.mousedown(u)})("mouseleave",function(u){return i.mouseleave(u)})("mouseup",function(u){return i.mouseup(u)})("touchstart",function(u){return i.touchstart(u)})("touchend",function(u){return i.touchend(u)})("mousemove",function(u){return i.mousemove(u)})("touchmove",function(u){return i.touchmove(u)})}})}return o})();var r=s(5861);let m=(()=>{class o{constructor(e,l){var i=this;this.controller=e,this.el=l,this.activeSlide=(0,r.Z)(function*(){i.controller.currentActiveSlide(),yield setTimeout(()=>{},1);const _=i.el.nativeElement.getAttribute("bullet-index");i.controller.isActive(Number(_))?i.el.nativeElement.classList.add(i.slideActive):i.el.nativeElement.classList.remove(i.slideActive)}),(0,t.cEC)(this.activeSlide)}static#t=this.\u0275fac=function(l){return new(l||o)(t.Y36(a.H),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:o,selectors:[["","slideActive",""]],inputs:{slideActive:"slideActive"}})}return o})();function c(o,C){if(1&o){const e=t.EpF();t.TgZ(0,"span",6),t.NdJ("click",function(){const _=t.CHM(e).index,u=t.oxw(2);return t.KtG(u.controller.slideTo(_))}),t._uU(1),t.qZA()}if(2&o){const e=C.$implicit,l=C.index;t.Q6J("slideActive","active-bullet"),t.uIk("bullet-index",l),t.xp6(1),t.Oqu(e)}}const d=function(){return[]};function P(o,C){if(1&o&&(t.TgZ(0,"div",4),t.YNc(1,c,2,3,"span",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.DdM(1,d).constructor(e.controller.swipperSlides))}}function g(o,C){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"span",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.controller.next())}),t.O4$(),t.TgZ(2,"svg",9),t._UZ(3,"path",10),t.qZA()(),t.kcU(),t.TgZ(4,"span",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.controller.prev())}),t.O4$(),t.TgZ(5,"svg",9),t._UZ(6,"path",12),t.qZA()()()}}const h=[[["swipper-slide"]]],w=function(o){return{gap:o}},S=["swipper-slide"];let f=(()=>{class o{set option(e){this.controller.swipperSlides=0,Object.assign(this.controller,e)}set SlidePerview(e){this.controller.slidePerview=e}set SpaceBetween(e){this.controller.spaceBetween=e}set AutoPlay(e){this.controller.autoPlay=e}set Navigation(e){this.controller.navigation=e}set Pagination(e){this.controller.pagination=e}set Duration(e){this.controller.duration=e}set Speed(e){this.controller.speed=e}constructor(e,l,i){this.controller=e,this.el=l,this.platformId=i,this.visibility=!1}ngOnInit(){(0,n.PM)(this.platformId)?this.controller.swipperWidth=Number(this.el.nativeElement.style.width.replace("px","")):this.browserBehaviour()}browserBehaviour(){this.controller.swipperWidth=Number(this.el.nativeElement.clientWidth),this.visibility=!0,this.controller.fireAutoPlay(),this.controller.swipperEl=this.el.nativeElement.querySelector("#swipper"),window.addEventListener("resize",()=>{this.controller.swipperWidth=Number(this.el.nativeElement.clientWidth),this.controller.move({space:this.controller.spaceToMove(),speed:0})})}static#t=this.\u0275fac=function(l){return new(l||o)(t.Y36(a.H),t.Y36(t.SBq),t.Y36(t.Lbi))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["swipper"]],inputs:{option:"option",SlidePerview:"SlidePerview",SpaceBetween:"SpaceBetween",AutoPlay:"AutoPlay",Navigation:"Navigation",Pagination:"Pagination",Duration:"Duration",Speed:"Speed"},features:[t._Bn([a.H])],ngContentSelectors:S,decls:5,vars:7,consts:[[1,"swipper-container"],["slideMovement","","id","swipper",1,"swipper",3,"ngStyle"],["class","bullet-container",4,"ngIf"],["class","navigation-container",4,"ngIf"],[1,"bullet-container"],["class","bullet ",3,"slideActive","click",4,"ngFor","ngForOf"],[1,"bullet",3,"slideActive","click"],[1,"navigation-container"],[1,"arrow","arrow-right",3,"click"],["width","32","height","32","viewBox","0 0 32 32","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M24.8899 14.7514L10.6495 0.511215C10.3201 0.181592 9.88043 0 9.41162 0C8.94281 0 8.50314 0.181592 8.17378 0.511215L7.12507 1.55966C6.44267 2.24284 6.44267 3.35321 7.12507 4.03535L19.0831 15.9934L7.1118 27.9646C6.78244 28.2943 6.60059 28.7337 6.60059 29.2022C6.60059 29.6713 6.78244 30.1107 7.1118 30.4406L8.16051 31.4888C8.49013 31.8184 8.92954 32 9.39835 32C9.86716 32 10.3068 31.8184 10.6362 31.4888L24.8899 17.2356C25.22 16.905 25.4013 16.4635 25.4003 15.9941C25.4013 15.523 25.22 15.0818 24.8899 14.7514Z","fill","#7195BE"],[1,"arrow","arrow-left",3,"click"],["d","M7.11013 17.2486L21.3505 31.4888C21.6799 31.8184 22.1196 32 22.5884 32C23.0572 32 23.4969 31.8184 23.8262 31.4888L24.8749 30.4403C25.5573 29.7572 25.5573 28.6468 24.8749 27.9647L12.9169 16.0066L24.8882 4.03535C25.2176 3.70573 25.3994 3.26632 25.3994 2.79777C25.3994 2.3287 25.2176 1.88929 24.8882 1.5594L23.8395 0.511215C23.5099 0.181593 23.0705 1.90735e-06 22.6016 1.90735e-06C22.1328 1.90735e-06 21.6932 0.181593 21.3638 0.511215L7.11013 14.7644C6.77999 15.095 6.59866 15.5365 6.5997 16.0059C6.59866 16.477 6.77999 16.9182 7.11013 17.2486Z","fill","#7195BE"]],template:function(l,i){1&l&&(t.F$t(h),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.YNc(3,P,2,2,"div",2),t.YNc(4,g,7,0,"div",3),t.qZA()),2&l&&(t.Udp("opacity",i.visibility?1:0),t.xp6(1),t.Q6J("ngStyle",t.VKq(5,w,i.controller.spaceBetween+"px")),t.xp6(2),t.Q6J("ngIf",i.controller.pagination),t.xp6(1),t.Q6J("ngIf",i.controller.navigation))},dependencies:[n.sg,n.O5,n.PC,v,m],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none;width:100%;height:inherit;display:block;--bullet-bg: rgba(177, 177, 177, 1);--active-bullet-bg: white;--bullet-gap: calc(var(--bullet-size) * 50 / 100);--bullet-postion-bottom: 5px;--bullet-size: 15px;--arrow-size: 50px;--arrow-color: #7195BE;--arrow-space: 5px}.swipper-container[_ngcontent-%COMP%]{position:relative;height:inherit;overflow:hidden}.swipper-container[_ngcontent-%COMP%]   .swipper[_ngcontent-%COMP%]{display:flex}.bullet-container[_ngcontent-%COMP%]{position:absolute;bottom:var(--bullet-postion-bottom);left:0;width:100%;z-index:9;display:flex;justify-content:center;align-items:center;gap:var(--bullet-gap)}.bullet-container[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%]{cursor:pointer;background-color:var(--bullet-bg);width:var(--bullet-size);height:var(--bullet-size);border-radius:50%;display:inline-block}.bullet-container[_ngcontent-%COMP%]   .bullet.active-bullet[_ngcontent-%COMP%]{background-color:var(--active-bullet-bg)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(1){width:calc(var(--bullet-size) - 1px);height:calc(var(--bullet-size) - 1px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(2){width:calc(var(--bullet-size) - 2px);height:calc(var(--bullet-size) - 2px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(3){width:calc(var(--bullet-size) - 3px);height:calc(var(--bullet-size) - 3px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(4){width:calc(var(--bullet-size) - 4px);height:calc(var(--bullet-size) - 4px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(5){width:calc(var(--bullet-size) - 5px);height:calc(var(--bullet-size) - 5px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(6){width:calc(var(--bullet-size) - 6px);height:calc(var(--bullet-size) - 6px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(7){width:calc(var(--bullet-size) - 7px);height:calc(var(--bullet-size) - 7px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(8){width:calc(var(--bullet-size) - 8px);height:calc(var(--bullet-size) - 8px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(9){width:calc(var(--bullet-size) - 9px);height:calc(var(--bullet-size) - 9px)}.bullet-container[_ngcontent-%COMP%]   .bullet.grid[_ngcontent-%COMP%]:nth-child(10){width:calc(var(--bullet-size) - 10px);height:calc(var(--bullet-size) - 10px)}.navigation-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:var(--arrow-size);width:var(--arrow-size);background-color:var(--test)}.navigation-container[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--arrow-color)}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:9}.arrow-right[_ngcontent-%COMP%]{right:var(--arrow-space)}.arrow-left[_ngcontent-%COMP%]{left:var(--arrow-space)}"]})}return o})()},6027:(b,p,s)=>{s.d(p,{H:()=>v});var n=s(9291);class t{constructor(){this.slidePerview=1,this.spaceBetween=0,this.autoPlay=!0,this.navigation=!1,this.pagination=!1,this.duration=2500,this.speed=400}}var a=s(6814);let v=(()=>{class r extends t{constructor(c){super(),this.platformId=c,this.swipperWidth=100,this.swipperSlides=0,this.currentActiveSlide=(0,n.tdS)(0),this.currentPosition=0,this.isGrabbing=!1,this.slideWidth=100,this.dir=-1,this.lastSlide=()=>this.swipperSlides-this.slidePerview,this.dir="ar"==document.body.lang?1:-1}isActive(c){return c===this.currentActiveSlide()}slideTo(c){this.currentActiveSlide.update(()=>c),this.move({space:this.spaceToMove(),speed:this.speed})}spaceToMove(){return this.currentPosition=this.currentActiveSlide()*this.slideWidth+this.spaceBetween*this.currentActiveSlide(),this.currentPosition}move(c){this.swipperEl&&(this.swipperEl.style.transition=`${c.speed}ms`,this.swipperEl.style.transform=`translate(${this.dir*c.space}px, 0)`)}fireAutoPlay(){(0,a.PM)(this.platformId)||!this.autoPlay||(this.autoPlayTimeOut=setTimeout(()=>{if(this.next(),this.currentActiveSlide()<this.lastSlide()&&this.currentActiveSlide()>=0)return this.fireAutoPlay()},this.duration))}stopAutoPlay(){clearTimeout(this.autoPlayTimeOut)}next(){this.currentActiveSlide()<this.lastSlide()&&this.currentActiveSlide.update(c=>++c),this.move({space:this.spaceToMove(),speed:500})}prev(){this.currentActiveSlide()>0&&this.currentActiveSlide.update(c=>--c),this.move({space:this.spaceToMove(),speed:500})}static#t=this.\u0275fac=function(d){return new(d||r)(n.LFG(n.Lbi))};static#e=this.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac})}return r})()},8440:(b,p,s)=>{s.d(p,{M:()=>v});var n=s(6814),t=s(6027),a=s(9291);let v=(()=>{class r{static#t=this.\u0275fac=function(d){return new(d||r)};static#e=this.\u0275mod=a.oAB({type:r});static#i=this.\u0275inj=a.cJS({providers:[t.H],imports:[n.ez]})}return r})()}}]);