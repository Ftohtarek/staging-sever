"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[521,5,462,15],{2005:(U,h,r)=>{r.d(h,{Q:()=>m});var a=r(6026);class n{constructor(){this.store={}}static getInstance(){return n.instance||(n.instance=new n),n.instance}set(o,t){this.store[o]=t}get(o){return this.store[o]}has(o){const t=this.get(o);return!(!t&&0!=t&&""!=t)}remove(o){delete this.store[o]}}const u=n.getInstance();var i=r(9291),c=r(3052),l=r(9862);let d=(()=>{class e{constructor(t){this.http=t,this.baseUrl=c.N.baseUrl}register(t){return this.http.post(`${this.baseUrl}v1/register`,t)}login(t){return this.http.post(`${this.baseUrl}v1/login`,t)}sendCode(t){return this.http.post(`${this.baseUrl}v1/send-code`,t)}verify(t){return this.http.post(`${this.baseUrl}verify`,t)}resendCode(t){return this.http.post(`${this.baseUrl}resend-code`,t)}verifyPasswordCode(t){return this.http.post(`${this.baseUrl}verify-code`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}reset-password`,t)}static#t=this.\u0275fac=function(s){return new(s||e)(i.LFG(l.eN))};static#s=this.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var v=r(3959),f=r(7699),g=r(9376),p=r(9068);let m=(()=>{class e{constructor(t,s,b,F,P){this.endPoint=t,this.authView=s,this.authState=b,this.toaster=F,this.router=P}register(t){this.endPoint.register(t).subscribe({next:s=>{if(![200].includes(s.status))return this.toaster.error(s.msg);u.set("otpType","email"),this.toaster.success(s.msg),this.router.navigate([a.VP.auth.register,{email:t.email}])},error:s=>{this.toaster.error(s)}})}login(t){this.endPoint.login(t).subscribe({next:s=>{if(![200].includes(s.status))return this.toaster.error(s.msg);this.authView.close(),this.toaster.success(s.msg),this.authState.login(s?.token,s.data)},error:s=>{this.toaster.error(s)}})}forgetPassword(t){this.endPoint.sendCode(t).subscribe({next:()=>{this.router.navigate([a.VP.auth.confirm,{key:t.key}])}})}static#t=this.\u0275fac=function(s){return new(s||e)(i.LFG(d),i.LFG(v.w),i.LFG(f.V),i.LFG(g.M),i.LFG(p.F0))};static#s=this.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);