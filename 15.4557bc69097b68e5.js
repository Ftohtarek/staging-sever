"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[15,5,462,521],{2005:(U,c,r)=>{r.d(c,{Q:()=>m});var h=r(6026);class a{constructor(){this.store={}}static getInstance(){return a.instance||(a.instance=new a),a.instance}set(n,t){this.store[n]=t}get(n){return this.store[n]}has(n){const t=this.get(n);return!(!t&&0!=t&&""!=t)}remove(n){delete this.store[n]}}const u=a.getInstance();var o=r(9291),l=r(3052),d=r(9862);let v=(()=>{class s{constructor(t){this.http=t,this.baseUrl=l.N.baseUrl}register(t){return this.http.post(`${this.baseUrl}v1/register`,t)}login(t){return this.http.post(`${this.baseUrl}v1/login`,t)}sendCode(t){return this.http.post(`${this.baseUrl}v1/send-code`,t)}verify(t){return this.http.post(`${this.baseUrl}verify`,t)}resendCode(t){return this.http.post(`${this.baseUrl}resend-code`,t)}verifyPasswordCode(t){return this.http.post(`${this.baseUrl}verify-code`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}reset-password`,t)}static#t=this.\u0275fac=function(e){return new(e||s)(o.LFG(d.eN))};static#s=this.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var f=r(3959),g=r(7699),p=r(9376),b=r(9795);let m=(()=>{class s{constructor(t,e,i,F,P){this.endPoint=t,this.authView=e,this.authState=i,this.toaster=F,this.router=P}register(t){this.endPoint.register(t).subscribe({next:e=>{[200].includes(e.status)&&(u.set("otpType","email"),this.toaster.success(e.msg),this.router.navigate([h.VP.auth.register,{email:t.email}]))}})}login(t,e){console.log("----------------\x3e",e),this.endPoint.login(t).subscribe({next:i=>{if(![200].includes(i.status))return this.toaster.error(i.msg);this.authView.close(e),this.toaster.success(i.msg),this.authState.login(i?.token,i.data)},error:i=>{this.toaster.error(i)}})}forgetPassword(t){this.endPoint.sendCode(t).subscribe({next:()=>{this.router.navigate([h.VP.auth.confirm,{key:t.key}])}})}static#t=this.\u0275fac=function(e){return new(e||s)(o.LFG(v),o.LFG(f.w),o.LFG(g.V),o.LFG(p.M),o.LFG(b.F0))};static#s=this.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);