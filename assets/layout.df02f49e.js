import{bp as E,bq as N,D as M,O as j,i as T,k as D,Q as P,d as u,br as S,bs as y,bt as p,bu as L,h as V,bv as z,bw as w,bx as F,a0 as G,c as H,by as K,am as U,S as Y,l as B,I as q,w as I,L as C,o as _,ad as Q,b as Z,a7 as J,a2 as W,g as X}from"./index.deda38a7.js";import{u as ee,a as te,B as ae,r as oe,b as ne,c as re,d as se,I as ce}from"./index.152a2aab.js";import{_ as le}from"./_plugin-vue_export-helper.cdc0426e.js";function ie(e,{args:o=[],done:t,canceled:a}){if(e){const r=e.apply(null,o);E(r)?r.then(l=>{l?t():a&&a()}).catch(N):r?t():a&&a()}else t()}const ue=Symbol();function de(e){const o=M(ue,null);o&&j(o,t=>{t&&e()})}const me=(e,o)=>{const t=T(),a=()=>{t.value=ee(e).height};return D(()=>{if(P(a),o)for(let r=1;r<=3;r++)setTimeout(a,100*r)}),de(()=>P(a)),t};function be(e,o){const t=me(e,!0);return a=>u("div",{class:o("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[a()])}const[O,k]=S("tabbar"),fe={route:Boolean,fixed:y,border:y,zIndex:p,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},A=Symbol(O);var ve=V({name:O,props:fe,emits:["change","update:modelValue"],setup(e,{emit:o,slots:t}){const a=T(),{linkChildren:r}=te(A),l=be(a,k),d=()=>{var s;return(s=e.safeAreaInsetBottom)!=null?s:e.fixed},n=()=>{var s;const{fixed:c,zIndex:i,border:b}=e;return u("div",{ref:a,role:"tablist",style:z(i),class:[k({fixed:c}),{[ae]:b,"van-safe-area-bottom":d()}]},[(s=t.default)==null?void 0:s.call(t)])};return r({props:e,setActive:(s,c)=>{ie(e.beforeChange,{args:[s],done(){o("update:modelValue",s),o("change",s),c()}})}}),()=>e.fixed&&e.placeholder?l(n):n()}});const _e=w(ve),[he,h]=S("tabbar-item"),pe=F({},oe,{dot:Boolean,icon:String,name:p,badge:p,badgeProps:Object,iconPrefix:String});var ge=V({name:he,props:pe,emits:["click"],setup(e,{emit:o,slots:t}){const a=ne(),r=G().proxy,{parent:l,index:d}=re(A);if(!l)return;const n=H(()=>{var c;const{route:i,modelValue:b}=l.props;if(i&&"$route"in r){const{$route:v}=r,{to:f}=e,m=K(f)?f:{path:f};return!!v.matched.find(x=>{const $="path"in m&&m.path===x.path,R="name"in m&&m.name===x.name;return $||R})}return((c=e.name)!=null?c:d.value)===b}),g=c=>{var i;n.value||l.setActive((i=e.name)!=null?i:d.value,a),o("click",c)},s=()=>{if(t.icon)return t.icon({active:n.value});if(e.icon)return u(ce,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var c;const{dot:i,badge:b}=e,{activeColor:v,inactiveColor:f}=l.props,m=n.value?v:f;return u("div",{role:"tab",class:h({active:n.value}),style:{color:m},tabindex:0,"aria-selected":n.value,onClick:g},[u(se,U({dot:i,class:h("icon"),content:b},e.badgeProps),{default:s}),u("div",{class:h("text")},[(c=t.default)==null?void 0:c.call(t,{active:n.value})])])}}});const xe=w(ge);const Pe={class:"container"},ye={__name:"layout",setup(e){const o=Y({current:"home",items:[{name:"home",to:"/home",icon:"wap-home-o",label:"\u9996\u9875"},{name:"category",to:"/category",icon:"apps-o",label:"\u5206\u7C7B"},{name:"worth",to:"/worth",icon:"bag-o",label:"\u503C\u5F97\u4E70"},{name:"cart",to:"/cart",icon:"shopping-cart-o",label:"\u8D2D\u7269\u8F66"},{name:"user",to:"/user",icon:"user-o",label:"\u6211\u7684"}]});return(t,a)=>{const r=X("router-view"),l=xe,d=_e;return _(),B(C,null,[q("div",Pe,[u(r)]),u(d,{modelValue:o.current,"onUpdate:modelValue":a[0]||(a[0]=n=>o.current=n),route:""},{default:I(()=>[(_(!0),B(C,null,Q(o.items,n=>(_(),Z(l,{key:n.to,name:n.name,to:n.to,icon:n.icon},{default:I(()=>[J(W(n.label),1)]),_:2},1032,["name","to","icon"]))),128))]),_:1},8,["modelValue"])],64)}}},ke=le(ye,[["__scopeId","data-v-8a3604ce"]]);export{ke as default};
