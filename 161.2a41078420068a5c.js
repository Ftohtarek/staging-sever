"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[161],{6161:(P,m,a)=>{a.r(m),a.d(m,{OffersComponent:()=>w});var h=a(6814),l=a(6223),d=a(3911),p=a(8312),u=a(3838),t=a(9291);let f=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[h.ez]})}return r})();var x=a(9862),v=a(6800);let c=(()=>{class r{constructor(){this.type="double",this.maxSteps=0,this.minSteps=0,this.min=0,this.max=0}setConfigurations(){this.lineWidth=this.line.clientWidth-this.maxTrigger.clientWidth,"double"==this.type&&this.setDoubleConfig()}setDoubleConfig(){}syncMax(e){this.maxSteps=e,this.setTriggerTranslation(this.maxTrigger,e);const n=this.max-(this.max-this.min)/this.lineWidth*Math.abs(this.maxSteps);this.maxControll.setValue(Math.round(n))}syncMin(e){this.minSteps=e,this.setTriggerTranslation(this.minTrigger,e);const n=(this.max-this.min)/this.lineWidth*Math.abs(this.minSteps)+this.min;this.minControll.setValue(Math.round(n))}setTriggerTranslation(e,i){e.style.transform=`translateX(${i}px)`}static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),C=(()=>{class r{constructor(e,i){this.ele=e,this.controller=i,this.isRtl="ar"==document.body.lang,this.canDrag=(0,t.tdS)(!1),this.swapHolder=0,this.dragStartCoordinates={clientX:0,clientY:0},this.mousedown=n=>this.startDrag(n),this.mouseup=n=>this.stopDrag(n),this.touchstart=n=>this.startDrag(n),this.touchend=n=>this.stopDrag(n),this.stopDrag=n=>{this.canDrag.update(()=>!1),document.removeEventListener("mousemove",this.moveTarget),document.removeEventListener("click",this.stopDrag)},this.moveTarget=n=>{this.canDrag()&&this.syncTrigger(this.calculateTriggerTranslation(n,this.controller.lineWidth,this.trigger))},this.getEventCoordinates=n=>({clientX:n.clientX||n.touches[0].clientX||0,clientY:n.clientY||n.touches[0].clientY||0})}startDrag(e){this.canDrag.update(()=>!0),this.trigger=e.target.closest("[minTrigger]")?"min":"max",this.setInitialValue(e),document.addEventListener("mousemove",this.moveTarget),document.addEventListener("click",this.stopDrag)}setInitialValue(e){this.swapHolder="max"==this.trigger?this.controller.maxSteps:this.controller.minSteps,this.dragStartCoordinates=this.getEventCoordinates(e)}syncTrigger(e){"max"==this.trigger?this.controller.syncMax(e):this.controller.syncMin(e)}calculateTriggerTranslation(e,i,n){return this.swapHolder+=e.clientX-this.dragStartCoordinates.clientX,this.dragStartCoordinates=this.getEventCoordinates(e),"max"==n?this.isRtl?Math.min(0,Math.max(-i+this.controller.minSteps,this.swapHolder)):Math.max(0,Math.min(i+this.controller.minSteps,this.swapHolder)):this.isRtl?Math.max(0,Math.min(i+this.controller.maxSteps,this.swapHolder)):Math.min(0,Math.max(-i+this.controller.maxSteps,this.swapHolder))}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(t.SBq),t.Y36(c))};static#e=this.\u0275dir=t.lG2({type:r,selectors:[["","triggerMove",""]],hostBindings:function(i,n){1&i&&t.NdJ("mousedown",function(s){return n.mousedown(s)})("mouseup",function(s){return n.mouseup(s)})("touchstart",function(s){return n.touchstart(s)})("touchend",function(s){return n.touchend(s)})}})}return r})(),T=(()=>{class r{constructor(e,i){this.controller=e,this.ele=i,this.controller.maxTrigger=this.ele.nativeElement}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(c),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:r,selectors:[["","maxTrigger",""]]})}return r})(),M=(()=>{class r{constructor(e,i){this.controller=e,this.ele=i,this.controller.minTrigger=this.ele.nativeElement}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(c),t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:r,selectors:[["","minTrigger",""]]})}return r})(),_=(()=>{class r{constructor(e){this.controller=e,this.isRtl="ar"==document.body.lang,this.click=i=>this.moveOnClick(i),this.moveOnClick=i=>{i.target.closest("[maxTrigger],[minTrigger]")||(this.trigger=this.isWithinQuarter(i.offsetX,this.controller.line.clientWidth,2)?"max":"min",this.syncTrigger(this.calculateTriggerTranslation(i.offsetX,this.controller.line.clientWidth,this.trigger)))}}isWithinQuarter(e,i,n){return this.isRtl?i/e<n:i/e>n}calculateTriggerTranslation(e,i,n){const o=.5*this.controller.maxTrigger.clientWidth;return"max"==n?this.isRtl?Math.min(0,e+o-i):Math.max(0,e-o):this.isRtl?Math.max(0,e-o):Math.min(0,e+o-i)}syncTrigger(e){"max"==this.trigger?this.controller.syncMax(e):this.controller.syncMin(e)}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(c))};static#e=this.\u0275dir=t.lG2({type:r,selectors:[["","lineTrigger",""]],hostBindings:function(i,n){1&i&&t.NdJ("click",function(s){return n.click(s)})}})}return r})(),b=(()=>{class r{set min(e){this.controller.min=e}set max(e){this.controller.max=e}set minControl(e){this.controller.minControll=e}set maxControl(e){this.controller.maxControll=e}constructor(e,i){this.ele=e,this.controller=i}ngAfterViewInit(){this.controller.line=this.ele.nativeElement.querySelector("*[lineTrigger]"),this.controller.setConfigurations()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(t.SBq),t.Y36(c))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-range"]],inputs:{min:"min",max:"max",minControl:"minControl",maxControl:"maxControl"},decls:4,vars:0,consts:[[1,"range-wrapper"],["lineTrigger","",1,"range-line"],["triggerMove","","maxTrigger","",1,"trigger","max"],["triggerMove","","minTrigger","",1,"trigger","min"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"span",2)(3,"span",3),t.qZA()())},dependencies:[C,T,M,_],styles:["[_nghost-%COMP%]{--range-line-bg: #e6e6e6;--range-line-height: 3px;--trigger-bg: #dc782c;--triger-size: 30px}.range-wrapper[_ngcontent-%COMP%]{position:relative}.range-line[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:pointer;width:100%;height:var(--range-line-height);background-color:var(--range-line-bg);border-radius:2px;display:flex;align-items:center;justify-content:space-between}.trigger[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:inline-block;background-color:var(--trigger-bg);width:var(--triger-size);height:var(--triger-size);border-radius:50%;cursor:pointer}"]})}return r})();function Z(r,g){if(1&r&&(t.TgZ(0,"div",20)(1,"label",21),t._UZ(2,"input",22),t.TgZ(3,"span"),t._uU(4),t.qZA()()()),2&r){const e=g.$implicit;t.xp6(1),t.Q6J("for","destination"+e),t.xp6(1),t.Q6J("id","destination"+e),t.xp6(2),t.hij("destination ",e,"")}}function O(r,g){if(1&r&&(t.TgZ(0,"div",20)(1,"label",21)(2,"span"),t._uU(3),t.qZA(),t._UZ(4,"input",22),t.qZA()()),2&r){const e=g.$implicit;t.xp6(1),t.Q6J("for","destination"+e),t.xp6(2),t.hij("destination ",e,""),t.xp6(1),t.Q6J("id","destination"+e)}}function y(r,g){if(1&r&&(t.TgZ(0,"div",23)(1,"div"),t._UZ(2,"app-card",24),t.qZA()()),2&r){const e=g.$implicit;t.xp6(2),t.Q6J("card",e)}}let w=(()=>{class r{constructor(e){this.route=e,this.distenitionSlice=5,this.countries=[1,2,3,4,5,6,7],this.dateFrom=new Date,this.dateTo=new Date,this.minControl=new l.NI,this.maxControl=new l.NI,this.params=new x.LE,e.data.subscribe(i=>{this.offers=i.data.offer,this.filter=i.data.filter,this.setInitialValue()})}setInitialValue(){this.maxControl.setValue(this.filter.max_price),this.minControl.setValue(this.filter.min_price)}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(v.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-offers"]],standalone:!0,features:[t.jDz],decls:54,vars:38,consts:[[1,"container"],[1,"row"],[1,"col-3"],[1,"chip"],[1,"d-flex","gap-2"],[1,"form-group-horzintal"],["for","maxPrice"],["id","maxPrice","type","text",3,"formControl"],["for","minPrice"],["id","minPrice","type","text",3,"formControl"],[1,"range-slider","my-4"],[3,"min","max","minControl","maxControl"],["class","checkbox-field",4,"ngFor","ngForOf"],[1,"view-more",3,"click"],[1,"d-flex","flex-column","gap-3"],[1,"date-label"],[1,"d-flex","align-items-center","gap-2"],[3,"ngModel","ngModelChange"],[1,"col-9"],["class","col-lg-4 col-md-5 col-6 mb-3",4,"ngFor","ngForOf"],[1,"checkbox-field"],[3,"for"],["type","checkbox","name","destination",3,"id"],[1,"col-lg-4","col-md-5","col-6","mb-3"],[3,"card"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"h6"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",4)(9,"div",5)(10,"label",6),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"div",5)(15,"label",8),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"input",9),t.qZA()(),t.TgZ(19,"div",10),t._UZ(20,"app-range",11),t.qZA()(),t.TgZ(21,"div",3)(22,"h6"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.YNc(25,Z,5,3,"div",12),t.TgZ(26,"div",13),t.NdJ("click",function(){return n.distenitionSlice=n.countries.length}),t._uU(27),t.ALo(28,"translate"),t.qZA()(),t.TgZ(29,"div",3)(30,"h6"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.YNc(33,O,5,3,"div",12),t.TgZ(34,"div",13),t.NdJ("click",function(){return n.distenitionSlice=n.countries.length}),t._uU(35),t.ALo(36,"translate"),t.qZA()(),t.TgZ(37,"div",3)(38,"div",14)(39,"label",15)(40,"span"),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"div",16)(44,"p-calendar",17),t.NdJ("ngModelChange",function(s){return n.dateFrom=s}),t.qZA()()(),t.TgZ(45,"label",15)(46,"span"),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.TgZ(49,"div",16)(50,"p-calendar",17),t.NdJ("ngModelChange",function(s){return n.dateTo=s}),t.qZA()()()()()()(),t.TgZ(51,"div",18)(52,"div",1),t.YNc(53,y,3,1,"div",19),t.qZA()()()()),2&i&&(t.xp6(6),t.Oqu(t.lcZ(7,20,"offerPage.price")),t.xp6(5),t.Oqu(t.lcZ(12,22,"offerPage.maxPrice")),t.xp6(2),t.Q6J("formControl",n.maxControl),t.xp6(3),t.Oqu(t.lcZ(17,24,"offerPage.minPrice")),t.xp6(2),t.Q6J("formControl",n.minControl),t.xp6(2),t.Q6J("min",n.filter.min_price)("max",n.filter.max_price)("minControl",n.minControl)("maxControl",n.maxControl),t.xp6(3),t.Oqu(t.lcZ(24,26,"offerPage.countries")),t.xp6(2),t.Q6J("ngForOf",n.countries.slice(0,n.distenitionSlice)),t.xp6(2),t.Oqu(t.lcZ(28,28,"home.view_more")),t.xp6(4),t.Oqu(t.lcZ(32,30,"offerPage.cities")),t.xp6(2),t.Q6J("ngForOf",n.countries.slice(0,n.distenitionSlice)),t.xp6(2),t.Oqu(t.lcZ(36,32,"home.view_more")),t.xp6(6),t.Oqu(t.lcZ(42,34,"home.from")),t.xp6(3),t.Q6J("ngModel",n.dateFrom),t.xp6(3),t.Oqu(t.lcZ(48,36,"home.to")),t.xp6(3),t.Q6J("ngModel",n.dateTo),t.xp6(3),t.Q6J("ngForOf",n.offers))},dependencies:[h.ez,h.sg,u.A,f,b,d.aw,d.X$,p._8,p.f,l.u5,l.Fj,l.JJ,l.On,l.UX,l.oH],styles:[".chip[_ngcontent-%COMP%]{width:100%;border:solid 1px #ececec;border-radius:10px;box-shadow:0 11px 9px #00000008;padding:15px;background:#fff;margin-bottom:30px}h6[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px;color:rgb(var(--text-color))}.form-group-horzintal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;margin-bottom:5px}.form-group-horzintal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;transition:.5s}.form-group-horzintal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:rgb(var(--accent))}.form-group-horzintal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#000;font-size:12px}.checkbox-field[_ngcontent-%COMP%]{margin-bottom:12px}.checkbox-field[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:15px;height:15px;accent-color:rgb(var(--accent))}.checkbox-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.checkbox-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:15px;color:rgb(var(--text-color-offset));font-size:14px}.view-more[_ngcontent-%COMP%]{cursor:pointer;color:rgb(var(--primary));font-size:15px}.date-label[_ngcontent-%COMP%]{color:rgb(var(--text-color-offset));font-size:14px}"]})}return r})()}}]);