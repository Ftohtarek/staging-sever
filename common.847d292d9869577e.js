"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[592],{2005:(p,d,o)=>{o.d(d,{Q:()=>m});var c=o(6026);class n{constructor(){this.store={}}static getInstance(){return n.instance||(n.instance=new n),n.instance}set(f,t){this.store[f]=t}get(f){return this.store[f]}has(f){const t=this.get(f);return!(!t&&0!=t&&""!=t)}remove(f){delete this.store[f]}}const a=n.getInstance();var s=o(9291),i=o(3052),e=o(9862);let h=(()=>{class u{constructor(t){this.http=t,this.baseUrl=i.N.baseUrl}register(t){return this.http.post(`${this.baseUrl}v1/register`,t)}verify(t){return this.http.post(`${this.baseUrl}verify`,t)}resendCode(t){return this.http.post(`${this.baseUrl}resend-code`,t)}login(t){return this.http.post(`${this.baseUrl}v1/login`,t)}forgetPassword(t){return this.http.post(`${this.baseUrl}forgot-password`,t)}verifyPasswordCode(t){return this.http.post(`${this.baseUrl}verify-code`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}reset-password`,t)}static#t=this.\u0275fac=function(r){return new(r||u)(s.LFG(e.eN))};static#e=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();var l=o(7699),g=o(9376),v=o(57);let m=(()=>{class u{constructor(t,r,k,E){this.endPoint=t,this.authState=r,this.toaster=k,this.router=E}register(t){this.endPoint.register(t).subscribe({next:r=>{if(![200].includes(r.status))return this.toaster.error(r.msg);a.set("otpType","email"),this.toaster.success(r.msg),this.router.navigate([c.VP.auth.register,{email:t.email}])},error:r=>{this.toaster.error(r)}})}login(t){this.endPoint.login(t).subscribe({next:r=>{if(console.log(r),![200].includes(r.status))return this.toaster.error(r.msg);this.toaster.success(r.msg),this.router.navigate([c.VP.home])},error:r=>{this.toaster.error(r)}})}static#t=this.\u0275fac=function(r){return new(r||u)(s.LFG(h),s.LFG(l.V),s.LFG(g.M),s.LFG(v.F0))};static#e=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},7699:(p,d,o)=>{o.d(d,{V:()=>a});var c=o(9291);let n=(()=>{class s{constructor(){}get(e){const h=document.cookie.split("; ");for(const l of h){const[g,v]=l.split("=");if(g===e)return JSON.parse(v)}return!1}set(e,h,l=7){const g=new Date;g.setDate(g.getDate()+l);const v=`${e}=${JSON.stringify(h)}; expires=${g.toUTCString()}; path=/; secure`;document.cookie=v}delete(e){const l=`${e}=; expires=${new Date(0).toUTCString()}; path=/`;document.cookie=l}static#t=this.\u0275fac=function(h){return new(h||s)};static#e=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),a=(()=>{class s{constructor(e){this.cookie=e,this.isLoggedIn=(0,c.tdS)(!0),this.detectUserState()}logout(){this.cookie.delete("auth_token"),this.detectUserState()}detectUserState(){const e=!!this.cookie.get("auth_token");this.isLoggedIn.update(()=>e),e&&(this.user=this.cookie.get("user"))}login(e){localStorage.setItem("auth_token",JSON.stringify(e)),this.cookie.set("user",e,15),this.detectUserState()}static#t=this.\u0275fac=function(h){return new(h||s)(c.LFG(n))};static#e=this.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},5431:(p,d,o)=>{o.d(d,{$:()=>s});var c=o(6814),n=o(6197),a=o(9291);let s=(()=>{class i{static#t=this.\u0275fac=function(l){return new(l||i)};static#e=this.\u0275mod=a.oAB({type:i});static#s=this.\u0275inj=a.cJS({providers:[n.K],imports:[c.ez]})}return i})()},6197:(p,d,o)=>{o.d(d,{K:()=>n});var c=o(9291);let n=(()=>{class a{constructor(){this.state=!1,this.closedEvent=i=>{const e=i.target.closest(".ng-menu");console.log("event"),e||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(i){const e=i.target;this.setMenu(e.getClientRects(),e.clientHeight),this.state?this.close():this.open()}setMenu(i,e){console.log(i[0]),this.menuEl.style.top=`${i[0].top+e+2}px`,this.menuEl.style.left=`${i[0].left}px`,this.menuEl.style.transform=`translateX(-${i[0].width}px)`}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac})}return a})()}}]);