"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[558],{3632:(_,d,r)=>{r.d(d,{i:()=>C});var l=r(9291),h=r(9397),g=r(3052),c=r(9862),t=r(7699);let C=(()=>{class p{constructor(u,m){this.http=u,this.authState=m,this.baseUrl=g.N.baseUrl,this.userProfile=(0,l.tdS)({})}profile(){return this.http.get(`${this.baseUrl}v1/profile`)}updateProfile(u){return this.http.post(`${this.baseUrl}v1/update-profile`,u).pipe((0,h.b)(m=>this.authState.updateUser(m.data)))}sync(){this.profile().subscribe(u=>this.userProfile.update(()=>u.data))}static#t=this.\u0275fac=function(m){return new(m||p)(l.LFG(c.eN),l.LFG(t.V))};static#e=this.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},1558:(_,d,r)=>{r.r(d),r.d(d,{UserAccountModule:()=>J});var l=r(6814),h=r(3911),g=r(9068),c=r(6026),t=r(9291);const C=["imageElement"];let p=(()=>{class n{constructor(o){this.el=o,this.lang=document.body.lang,this.imageUrl=null,this.save=new t.vpe,this.cancel=new t.vpe,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.imagePosition={x:0,y:0}}hireEvent(o){this.isDragging=!0;const{clientX:i,clientY:e}=this.getEventCoordinates(o);this.dragStartX=i,this.dragStartY=e}removeEvent(){this.isDragging=!1}startDrag(o){o.preventDefault(),this.hireEvent(o)}stopDrag(){this.removeEvent()}moveImage(o){if(this.isDragging){const{clientX:i,clientY:e}=this.getEventCoordinates(o);this.imagePosition.x+=i-this.dragStartX,this.imagePosition.y+=e-this.dragStartY,this.dragStartX=i,this.dragStartY=e}}getImageStyle(){return{transform:`translate(${this.imagePosition.x}px, ${this.imagePosition.y}px)`}}getEventCoordinates(o){return o instanceof MouseEvent?{clientX:o.clientX,clientY:o.clientY}:o instanceof TouchEvent&&o.touches.length>0?{clientX:o.touches[0].clientX,clientY:o.touches[0].clientY}:{clientX:0,clientY:0}}crop(){const o=this.imageElement.nativeElement,e=document.getElementById("crop-box").getBoundingClientRect(),a=e.width,s=e.height,f=o.getBoundingClientRect(),O=o.naturalWidth/f.width,Z=o.naturalHeight/f.height,w=(e.left-f.left)*O,H=(e.top-f.top)*Z,P=a*O,U=s*Z,v=document.createElement("canvas");v.width=P,v.height=U,v.getContext("2d")?.drawImage(o,w,H,P,U,0,0,P,U);const x=v.toDataURL("image/png");this.save.emit(x),console.log(x)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["image-cropper"]],viewQuery:function(i,e){if(1&i&&t.Gf(C,5),2&i){let a;t.iGM(a=t.CRH())&&(e.imageElement=a.first)}},inputs:{imageUrl:"imageUrl"},outputs:{save:"save",cancel:"cancel"},standalone:!0,features:[t.jDz],decls:10,vars:4,consts:[[1,"cropper-container",3,"mousedown","touchstart","mouseleave","mouseup","touchend","mousemove","touchmove"],["id","uploadProfileImage","alt","Selected Image","draggable","false",3,"src","ngStyle"],["imageElement",""],[1,"crop-box-overlay"],["id","crop-box",1,"crop-box"],[1,"d-flex","align-items-center","gap-2","my-1"],[1,"w-100","cancel-btn",3,"click"],[1,"w-100","save-btn",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.NdJ("mousedown",function(s){return e.startDrag(s)})("touchstart",function(s){return e.startDrag(s)})("mouseleave",function(){return e.stopDrag()})("mouseup",function(){return e.stopDrag()})("touchend",function(){return e.stopDrag()})("mousemove",function(s){return e.moveImage(s)})("touchmove",function(s){return e.moveImage(s)}),t._UZ(1,"img",1,2)(3,"div",3)(4,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"button",6),t.NdJ("click",function(){return e.cancel.emit(!1)}),t._uU(7),t.qZA(),t.TgZ(8,"button",7),t.NdJ("click",function(){return e.crop()}),t._uU(9),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("src",e.imageUrl,t.LSH)("ngStyle",e.getImageStyle()),t.xp6(6),t.Oqu("en"==e.lang?"cancel":"\u0625\u0644\u063a\u0627\u0621"),t.xp6(2),t.Oqu("en"==e.lang?"save":"\u062d\u0641\u0638"))},dependencies:[l.ez,l.PC],styles:["[_nghost-%COMP%]{display:block;width:100%}img[_ngcontent-%COMP%]{width:100%;object-fit:cover;position:absolute;cursor:pointer}.cropper-container[_ngcontent-%COMP%]{height:60vh;position:relative;overflow:hidden;width:100%;max-height:350px;background-color:#00000080}.crop-box[_ngcontent-%COMP%], .crop-box-overlay[_ngcontent-%COMP%]{width:200px;height:200px;position:absolute;inset:0;margin:auto;z-index:99;border-radius:100%}.crop-box-overlay[_ngcontent-%COMP%]{border-radius:0;width:100%;height:100%;background:radial-gradient(circle at center,transparent 100px,rgba(5,16,54,.245) 101px)}button[_ngcontent-%COMP%]{font-size:16px;background-color:transparent;outline:none;border:none;padding:8px 12px;cursor:pointer;border-radius:4px}.save-btn[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.cancel-btn[_ngcontent-%COMP%]{background-color:rgb(var(--cancel))}"]})}return n})();class A{loadImage(y){return new Promise(o=>{y.length<=0&&o(null);const i=new FileReader;i.onload=e=>{o(e.target.result)},i.readAsDataURL(y[0])})}}let u=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({providers:[A],imports:[l.ez,p]})}return n})();var m=r(439),T=r(7699),b=r(3632);let I=(()=>{class n{constructor(o){this.uploadController=o,this.onLoad=new t.vpe}onUpload(o){this.uploadController.loadImage(o.target.files).then(e=>{this.onLoad.emit(e)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(A))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["input","ngUpload",""]],hostBindings:function(i,e){1&i&&t.NdJ("change",function(s){return e.onUpload(s)})},outputs:{onLoad:"onLoad"},standalone:!0})}return n})();var L=r(9521),E=r(7732);let M=(()=>{class n{constructor(o,i){this.auth=o,this.profileService=i,this.cropperVisibility=!1}onUpload(o){this.imgSrc=o,this.cropperVisibility=!0}cancel(){this.cropperVisibility=!1}save(o){this.imgSrc=o,this.cropperVisibility=!1}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(T.V),t.Y36(b.i))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-profile-image"]],standalone:!0,features:[t.jDz],decls:13,vars:5,consts:[[1,"profile-meta-info","grid-sm","align-items-center","mb-2"],[1,"sticky-upload"],[1,"profile-img"],[1,"img-contain",3,"src","alt"],["for","upload",1,"upload-image"],["src","assets/images/svg/upload.svg","alt","uplaod","width","22","height","22"],["id","upload","type","file","accept","image/*","ngUpload","",3,"onLoad"],[3,"visible","visibleChange"],[1,"img-cropper-container"],[3,"imageUrl","cancel","save"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"label",4),t._UZ(5,"img",5),t.TgZ(6,"input",6),t.NdJ("onLoad",function(s){return e.onUpload(s)}),t.qZA()()(),t.TgZ(7,"h3"),t._uU(8),t.qZA()(),t.TgZ(9,"ng-dialog",7),t.NdJ("visibleChange",function(s){return e.cropperVisibility=s}),t.TgZ(10,"dialog-body")(11,"div",8)(12,"image-cropper",9),t.NdJ("cancel",function(){return e.cancel()})("save",function(s){return e.save(s)}),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("src",e.imgSrc||(null==e.auth.user?null:e.auth.user.image),t.LSH)("alt",null==e.auth.user?null:e.auth.user.first_name),t.xp6(5),t.Oqu(null==e.auth.user?null:e.auth.user.first_name),t.xp6(1),t.Q6J("visible",e.cropperVisibility),t.xp6(3),t.Q6J("imageUrl",e.imgSrc))},dependencies:[l.ez,u,I,p,m.S,L.a,E.H],styles:[".profile-meta-info[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;overflow:hidden}.profile-meta-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:500;text-transform:capitalize}.profile-meta-info[_ngcontent-%COMP%]   .sticky-upload[_ngcontent-%COMP%]{position:relative}.profile-meta-info[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:absolute;bottom:0;right:0}.profile-meta-info[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]:lang(ar){right:unset;left:0}.profile-meta-info[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.img-cropper-container[_ngcontent-%COMP%]{width:100vw;min-width:300px;max-width:400px}"]})}return n})();const D=[{path:"",component:(()=>{class n{constructor(){this.appRoutes=c.VP}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-account-layout"]],decls:26,vars:20,consts:[[1,"container"],[1,"row-sm","align-items-start","my-3"],[1,"user-options"],[1,"shadow-sm","rounded-2","pb-5"],["routerLinkActive","active-link",3,"routerLink"],["src","assets/images/svg/profile.svg","alt","profile","width","22","height","22"],["src","assets/images/svg/save.svg","alt","profile","width","22","height","22"],["src","assets/images/svg/save-offer.svg","alt","profile","width","22","height","22"],["src","assets/images/svg/heart.svg","alt","profile","width","22","height","22"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3),t._UZ(4,"app-profile-image"),t.TgZ(5,"li",4),t._UZ(6,"img",5),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"li",4),t._UZ(10,"img",5),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"li",4),t._UZ(14,"img",6),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"li",4),t._UZ(18,"img",7),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"li",4),t._UZ(22,"img",8),t._uU(23),t.ALo(24,"translate"),t.qZA()()(),t._UZ(25,"router-outlet"),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("routerLink",e.appRoutes.userAccount.profile),t.xp6(2),t.hij(" ",t.lcZ(8,10,"userAccount.profile")," "),t.xp6(2),t.Q6J("routerLink",e.appRoutes.userAccount.wallet),t.xp6(2),t.hij(" ",t.lcZ(12,12,"userAccount.samaWallet")," "),t.xp6(2),t.Q6J("routerLink",e.appRoutes.userAccount.reservation),t.xp6(2),t.hij(" ",t.lcZ(16,14,"userAccount.reservation")," "),t.xp6(2),t.Q6J("routerLink",e.appRoutes.userAccount.bookingOffer),t.xp6(2),t.hij(" ",t.lcZ(20,16,"userAccount.offerBooking")," "),t.xp6(2),t.Q6J("routerLink",e.appRoutes.userAccount.favorite),t.xp6(2),t.hij(" ",t.lcZ(24,18,"userAccount.favourites")," "))},dependencies:[g.lC,g.rH,g.Od,M,h.X$],styles:[".user-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:1.4rem 10px;width:-moz-fit-content;width:fit-content}.user-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;cursor:pointer;min-width:220px;font-size:15px;font-weight:500;padding:15px 8px;margin-bottom:10px}.user-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:.3s;background-color:rgb(var(--primary),.2);color:rgb(var(--primary));border-radius:4px}.active-link[_ngcontent-%COMP%]{background-color:rgb(var(--primary),.2);color:rgb(var(--primary));border-radius:4px}"]})}return n})(),resolve:[(n,y)=>{const o=(0,t.f3M)(b.i);return!!Object.keys(o.userProfile()).length||o.sync()}],children:[{path:"",redirectTo:c.HJ.userAccount.profile,pathMatch:"full"},{path:c.HJ.userAccount.profile,loadComponent:()=>Promise.all([r.e(223),r.e(611)]).then(r.bind(r,6611)).then(n=>n.ProfileComponent)},{path:c.HJ.userAccount.wallet,loadComponent:()=>r.e(124).then(r.bind(r,8124)).then(n=>n.WalletComponent)},{path:c.HJ.userAccount.reservation,loadComponent:()=>r.e(246).then(r.bind(r,7246)).then(n=>n.ReservationComponent)},{path:c.HJ.userAccount.bookingOffer,loadComponent:()=>r.e(127).then(r.bind(r,9127)).then(n=>n.OfferBookingComponent)},{path:c.HJ.userAccount.favorite,loadComponent:()=>r.e(156).then(r.bind(r,1156)).then(n=>n.FavoriteComponent)}]}];let S=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(D),g.Bz]})}return n})(),J=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[l.ez,S,h.aw,M]})}return n})()}}]);