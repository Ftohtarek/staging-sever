import{a as R}from"./chunk-6VX67YU4.js";import{b as E}from"./chunk-23SNOJPT.js";import{k as I,p as k}from"./chunk-XVQXFQXA.js";import{Fb as h,Ga as s,Ib as F,Ja as n,Ka as c,_ as m,ab as d,eb as f,jb as i,kb as a,lb as p,nb as S,xb as o,yb as u,zb as g}from"./chunk-6GN7ROPZ.js";var _=(r,t)=>[r,t],j=(()=>{let t=class t{constructor(l){this.favouriteService=l,this.appRoutes=E}addToFavorite(l){l.stopPropagation(),l.preventDefault(),this.favouriteService.toggle(this.event)}};t.\u0275fac=function(v){return new(v||t)(c(R))},t.\u0275cmp=m({type:t,selectors:[["event-card"]],inputs:{event:"event"},standalone:!0,features:[h],decls:18,vars:13,consts:[[1,"event-item"],[3,"routerLink"],[1,"event-img"],[1,"img-fluid",3,"src","alt"],[3,"click"],[1,"des","d-flex","flex-column"],[1,"event-title"],[1,"d-flex","text-muted"],[1,"vr","mx-2"],[1,"price","mt-2"]],template:function(v,e){v&1&&(i(0,"div",0)(1,"a",1)(2,"div",2),p(3,"img",3),i(4,"i",4),S("click",function(y){return e.addToFavorite(y)}),a()(),i(5,"div",5)(6,"div",6)(7,"h5"),o(8),a()(),i(9,"div",7)(10,"span"),o(11),a(),p(12,"span",8),i(13,"span"),o(14),a()(),i(15,"div",9)(16,"h5"),o(17),a()()()()()),v&2&&(n(),d("routerLink",F(10,_,e.appRoutes.events.details,e.event==null?null:e.event.id)),n(2),d("src",e.event==null?null:e.event.image,s)("alt",e.event==null?null:e.event.name),n(),f("lni ",e.favouriteService.isFavourite(e.event==null?null:e.event.id)?"lni-heart-fill text-danger":"lni-heart",""),n(4),u(e.event==null?null:e.event.name),n(3),u(e.event==null?null:e.event.zone),n(3),u(e.event==null?null:e.event.event_date),n(3),g("SR ",e.event==null?null:e.event.price,""))},dependencies:[k,I]});let r=t;return r})();export{j as a};
