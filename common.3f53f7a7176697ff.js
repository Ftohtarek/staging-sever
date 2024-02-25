"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[592],{1515:(P,d,n)=>{n.r(d),n.d(d,{ForgetPasswordComponent:()=>o});var s=n(6814),r=n(3911),a=n(6223),u=n(3193),m=n(9068),f=n(6026),t=n(9291),i=n(2005),_=n(3959);let o=(()=>{class e{constructor(c,l){this.authController=c,this.authViewController=l,this.appRoutes=f.VP,this.countryKey="+2",this.loginForm=new a.cw({key:new a.NI,password:new a.NI})}setCountryKey(c){this.countryKey=c.target.value}sendCode(){this.authController.forgetPassword({key:`${this.countryKey}${this.loginForm.value.key}`})}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(i.Q),t.Y36(_.w))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-forget-password"]],standalone:!0,features:[t.jDz],decls:30,vars:19,consts:[["bindingLayout",""],[3,"formGroup"],[1,"grid-sm","mb-3"],["for","phone"],[1,"row-sm"],[1,"auth-form-group","row-sm"],["type","text","formControlName","key",1,"auth-form-controller",3,"placeholder"],[1,"auth-form-group","form-select-group","w-25"],["id","country","aria-placeholder","country",1,"form-select",3,"change"],["value","2","selected","",1,"form-control"],["value","966",1,"form-control"],[1,"actions","grid-sm","text-center"],[1,"app-btn","app-btn-primary",3,"click"],[1,"forget-password"],[1,"new-account"],[1,"text-accent",3,"click"]],template:function(l,p){1&l&&(t.TgZ(0,"div",0)(1,"h6"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"form",1)(5,"div",2)(6,"label",3),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",4)(10,"div",5),t._UZ(11,"input",6),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",7)(14,"select",8),t.NdJ("change",function(C){return p.setCountryKey(C)}),t.TgZ(15,"option",9),t._uU(16,"+2 EG"),t.qZA(),t.TgZ(17,"option",10),t._uU(18,"+966 SA"),t.qZA()()()()(),t.TgZ(19,"div",11)(20,"button",12),t.NdJ("click",function(){return p.sendCode()}),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"p",13),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"p",14)(27,"a",15),t.NdJ("click",function(){return p.authViewController.login()}),t._uU(28),t.ALo(29,"translate"),t.qZA()()()()()),2&l&&(t.xp6(2),t.Oqu(t.lcZ(3,7,"auth.new_password")),t.xp6(2),t.Q6J("formGroup",p.loginForm),t.xp6(3),t.Oqu(t.lcZ(8,9,"label.mobile_number")),t.xp6(4),t.Q6J("placeholder",t.lcZ(12,11,"placeholder.mobile_number")),t.xp6(10),t.Oqu(t.lcZ(22,13,"label.send_code")),t.xp6(3),t.Oqu(t.lcZ(25,15,"label.already_have_account")),t.xp6(4),t.Oqu(t.lcZ(29,17,"label.login")))},dependencies:[s.ez,a.UX,a._Y,a.YN,a.Kr,a.Fj,a.JJ,a.JL,a.sg,a.u,u.A,m.Bz,r.aw,r.X$],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}h6[_ngcontent-%COMP%]{color:rgb(var(--text-color));font-size:16px;font-weight:500;text-align:center;margin:10px auto}.auth-form-group[_ngcontent-%COMP%]{border-radius:20px;background:#F9F9F9;width:100%;height:100%;display:inline-flex;justify-content:center;align-items:center}.auth-form-group[_ngcontent-%COMP%]   .auth-form-controller[_ngcontent-%COMP%]{padding:15px;background-color:transparent;border:none;outline:none;width:100%;color:rgb(var(--text-color));font-size:16px;font-weight:400}.auth-form-group[_ngcontent-%COMP%]   .auth-form-controller[_ngcontent-%COMP%]::placeholder{color:#0000004d}.form-select[_ngcontent-%COMP%]{border:none;outline:none;background-color:transparent;display:block;width:90%;padding:15px 5px;font-size:1rem}.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{display:block;min-height:1.2em;padding:0 2px 1px;white-space:nowrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:inline-block;font-size:18px;border-radius:6px}.actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .auth-form-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::placeholder{font-size:.8em!important}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .form-select-group[_ngcontent-%COMP%]{min-width:90px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{font-size:13px!important}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:inline-block;font-size:14px;border-radius:6px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}"]})}return e})()},2233:(P,d,n)=>{n.r(d),n.d(d,{LoginComponent:()=>o});var s=n(6814),r=n(6223),a=n(9068),u=n(3911),m=n(6026),f=n(3193),t=n(9291),i=n(2005),_=n(3959);let o=(()=>{class e{constructor(c,l){this.authController=c,this.authViewController=l,this.appRoutes=m.VP,this.countryKey="+2",this.loginForm=new r.cw({key:new r.NI,password:new r.NI})}setCountryKey(c){this.countryKey=c.target.value}login(){this.authController.login({...this.loginForm.value,key:`${this.countryKey}${this.loginForm.value.key}`})}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(i.Q),t.Y36(_.w))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:39,vars:28,consts:[["bindingLayout",""],[3,"formGroup"],[1,"grid-sm","mb-3"],["for","phone"],[1,"row-sm"],[1,"auth-form-group","row-sm"],["type","text","formControlName","key",1,"auth-form-controller",3,"placeholder"],[1,"auth-form-group","form-select-group","w-25"],["id","country","aria-placeholder","country",1,"form-select",3,"change"],["value","2","selected","",1,"form-control"],["value","966",1,"form-control"],["for","password"],[1,"auth-form-group"],["autocomplete","current-password","id","password","type","password","formControlName","password",1,"auth-form-controller",3,"placeholder"],[1,"actions","grid-sm","text-center"],[1,"forget-password",3,"click"],[1,"app-btn","app-btn-primary",3,"click"],[1,"new-account"],[1,"text-accent",3,"click"]],template:function(l,p){1&l&&(t.TgZ(0,"div",0)(1,"h6"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"form",1)(5,"div",2)(6,"label",3),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",4)(10,"div",5),t._UZ(11,"input",6),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",7)(14,"select",8),t.NdJ("change",function(C){return p.setCountryKey(C)}),t.TgZ(15,"option",9),t._uU(16,"+2 EG"),t.qZA(),t.TgZ(17,"option",10),t._uU(18,"+966 SA"),t.qZA()()()()(),t.TgZ(19,"div",2)(20,"label",11),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"div",12),t._UZ(24,"input",13),t.ALo(25,"translate"),t.qZA()(),t.TgZ(26,"div",14)(27,"a",15),t.NdJ("click",function(){return p.authViewController.forgetPassword()}),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"button",16),t.NdJ("click",function(){return p.login()}),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.TgZ(33,"p",17),t._uU(34),t.ALo(35,"translate"),t.TgZ(36,"a",18),t.NdJ("click",function(){return p.authViewController.register()}),t._uU(37),t.ALo(38,"translate"),t.qZA()()()()()),2&l&&(t.xp6(2),t.Oqu(t.lcZ(3,10,"auth.login")),t.xp6(2),t.Q6J("formGroup",p.loginForm),t.xp6(3),t.Oqu(t.lcZ(8,12,"label.mobile_number")),t.xp6(4),t.Q6J("placeholder",t.lcZ(12,14,"placeholder.mobile_number")),t.xp6(10),t.Oqu(t.lcZ(22,16,"label.password")),t.xp6(3),t.Q6J("placeholder",t.lcZ(25,18,"placeholder.password")),t.xp6(4),t.Oqu(t.lcZ(29,20,"label.forget_password")),t.xp6(3),t.Oqu(t.lcZ(32,22,"label.login")),t.xp6(3),t.hij(" ",t.lcZ(35,24,"label.dont_have_account")," "),t.xp6(3),t.Oqu(t.lcZ(38,26,"label.new_account")))},dependencies:[s.ez,r.UX,r._Y,r.YN,r.Kr,r.Fj,r.JJ,r.JL,r.sg,r.u,f.A,a.Bz,u.aw,u.X$],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}h6[_ngcontent-%COMP%]{color:rgb(var(--text-color));font-size:16px;font-weight:500;text-align:center;margin:10px auto}.auth-form-group[_ngcontent-%COMP%]{border-radius:20px;background:#F9F9F9;width:100%;height:100%;display:inline-flex;justify-content:center;align-items:center}.auth-form-group[_ngcontent-%COMP%]   .auth-form-controller[_ngcontent-%COMP%]{padding:15px;background-color:transparent;border:none;outline:none;width:100%;color:rgb(var(--text-color));font-size:16px;font-weight:400}.auth-form-group[_ngcontent-%COMP%]   .auth-form-controller[_ngcontent-%COMP%]::placeholder{color:#0000004d}.form-select[_ngcontent-%COMP%]{border:none;outline:none;background-color:transparent;display:block;width:90%;padding:15px 5px;font-size:1rem}.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{display:block;min-height:1.2em;padding:0 2px 1px;white-space:nowrap}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:inline-block;font-size:18px;border-radius:6px}.actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .auth-form-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::placeholder{font-size:.8em!important}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .form-select-group[_ngcontent-%COMP%]{min-width:90px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{font-size:13px!important}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:inline-block;font-size:14px;border-radius:6px}[_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_ngcontent-%COMP%]:where(.tablet-mode, .mobile-mode)[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}"]})}return e})()},3959:(P,d,n)=>{n.d(d,{w:()=>t});var s=n(5861),r=n(6026),a=n(9291);let u=(()=>{class i{setRootViewContainerRef(o){this.viewContainerRef=o}build(o,e,g){this.viewContainerRef?.remove();const c=this.viewContainerRef.createComponent(e);this.patchInput(c,g),this.viewContainerRef.insert(c.hostView)}bulidSync(o,e,g){var c=this;return(0,s.Z)(function*(){const l=yield e;yield c.build(o,l,g)})()}patchInput(o,e){for(const g in e)o.setInput(g,e[g])}destroy(){this.viewContainerRef?.clear()}static#t=this.\u0275fac=function(e){return new(e||i)};static#n=this.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var m=n(319),f=n(9068);let t=(()=>{class i{constructor(o,e,g){this.authBuilder=o,this.deviceMode=e,this.route=g,this.visible=!1,this.header=""}setRootViewContainerRef(o){this.viewContainerRef=o,this.authBuilder.setRootViewContainerRef(o)}open(o,e,g){this.visible=!0,this.header=o,setTimeout(()=>{this.authBuilder.build(this.viewContainerRef,e,g)},1)}close(){return this.closeDialog(),this.deviceMode.isDesktop()?this.authBuilder.destroy():this.route.navigate([r.VP.home])}closeDialog(){this.visible=!1}login(){var o=this;return(0,s.Z)(function*(){if(!o.deviceMode.isDesktop())return o.route.navigate([r.VP.auth.login]);const{LoginComponent:e}=yield Promise.all([n.e(223),n.e(592),n.e(521)]).then(n.bind(n,2233));return o.open("HOME.LOGIN_MASSAGE",e)})()}register(){var o=this;return(0,s.Z)(function*(){if(!o.deviceMode.isDesktop())return o.route.navigate([r.VP.auth.register]);const{RegisterComponent:e}=yield Promise.all([n.e(223),n.e(219),n.e(671)]).then(n.bind(n,9671));return o.open("",e)})()}forgetPassword(){var o=this;return(0,s.Z)(function*(){if(!o.deviceMode.isDesktop())return o.route.navigate([r.VP.auth.forgetPassword]);const{ForgetPasswordComponent:e}=yield Promise.all([n.e(223),n.e(592),n.e(15)]).then(n.bind(n,1515));return o.open("",e)})()}loaderCallback(o=(0,s.Z)(function*(){})){return(0,s.Z)(function*(){yield o().then(()=>{})})()}static#t=this.\u0275fac=function(e){return new(e||i)(a.LFG(u),a.LFG(m.Q),a.LFG(f.F0))};static#n=this.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);