import{cH as R,cI as E,I as M,V as j,i as T,k as H,X as P,d as u,cJ as V,cK as y,cL as p,cM as K,m as S,cN as L,cO as w,cP as z,am as D,c as F,cQ as G,aB as Q,Z as U,q as B,N as Y,w as I,Q as C,o as v,a5 as Z,b as q,a6 as J,a2 as X,h as W}from"./index.bd10bac3.js";import{u as ee,a as te,B as ae,r as oe,b as ne,c as re,d as ce,I as se}from"./index.5af4848e.js";import{_ as le}from"./_plugin-vue_export-helper.cdc0426e.js";function ie(e,{args:o=[],done:t,canceled:a}){if(e){const r=e.apply(null,o);R(r)?r.then(l=>{l?t():a&&a()}).catch(E):r?t():a&&a()}else t()}const ue=Symbol();function de(e){const o=M(ue,null);o&&j(o,t=>{t&&e()})}const me=(e,o)=>{const t=T(),a=()=>{t.value=ee(e).height};return H(()=>{if(P(a),o)for(let r=1;r<=3;r++)setTimeout(a,100*r)}),de(()=>P(a)),t};function fe(e,o){const t=me(e,!0);return a=>u("div",{class:o("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[a()])}const[O,k]=V("tabbar"),be={route:Boolean,fixed:y,border:y,zIndex:p,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:K(0),safeAreaInsetBottom:{type:Boolean,default:null}},A=Symbol(O);var _e=S({name:O,props:be,emits:["change","update:modelValue"],setup(e,{emit:o,slots:t}){const a=T(),{linkChildren:r}=te(A),l=fe(a,k),d=()=>{var c;return(c=e.safeAreaInsetBottom)!=null?c:e.fixed},n=()=>{var c;const{fixed:s,zIndex:i,border:f}=e;return u("div",{ref:a,role:"tablist",style:L(i),class:[k({fixed:s}),{[ae]:f,"van-safe-area-bottom":d()}]},[(c=t.default)==null?void 0:c.call(t)])};return r({props:e,setActive:(c,s)=>{ie(e.beforeChange,{args:[c],done(){o("update:modelValue",c),o("change",c),s()}})}}),()=>e.fixed&&e.placeholder?l(n):n()}});const ve=w(_e),[he,h]=V("tabbar-item"),pe=z({},oe,{dot:Boolean,icon:String,name:p,badge:p,badgeProps:Object,iconPrefix:String});var ge=S({name:he,props:pe,emits:["click"],setup(e,{emit:o,slots:t}){const a=ne(),r=D().proxy,{parent:l,index:d}=re(A);if(!l)return;const n=F(()=>{var s;const{route:i,modelValue:f}=l.props;if(i&&"$route"in r){const{$route:_}=r,{to:b}=e,m=G(b)?b:{path:b};return!!_.matched.find(x=>{const N="path"in m&&m.path===x.path,$="name"in m&&m.name===x.name;return N||$})}return((s=e.name)!=null?s:d.value)===f}),g=s=>{var i;n.value||l.setActive((i=e.name)!=null?i:d.value,a),o("click",s)},c=()=>{if(t.icon)return t.icon({active:n.value});if(e.icon)return u(se,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var s;const{dot:i,badge:f}=e,{activeColor:_,inactiveColor:b}=l.props,m=n.value?_:b;return u("div",{role:"tab",class:h({active:n.value}),style:{color:m},tabindex:0,"aria-selected":n.value,onClick:g},[u(ce,Q({dot:i,class:h("icon"),content:f},e.badgeProps),{default:c}),u("div",{class:h("text")},[(s=t.default)==null?void 0:s.call(t,{active:n.value})])])}}});const xe=w(ge);const Pe={class:"container"},ye={__name:"layout",setup(e){const o=U({current:"home",items:[{name:"home",to:"/home",icon:"wap-home-o",label:"\u9996\u9875"},{name:"category",to:"/category",icon:"apps-o",label:"\u5206\u7C7B"},{name:"worth",to:"/worth",icon:"bag-o",label:"\u503C\u5F97\u4E70"},{name:"cart",to:"/cart",icon:"shopping-cart-o",label:"\u8D2D\u7269\u8F66"},{name:"user",to:"/user",icon:"user-o",label:"\u6211\u7684"}]});return(t,a)=>{const r=W("router-view"),l=xe,d=ve;return v(),B(C,null,[Y("div",Pe,[u(r)]),u(d,{modelValue:o.current,"onUpdate:modelValue":a[0]||(a[0]=n=>o.current=n),route:""},{default:I(()=>[(v(!0),B(C,null,Z(o.items,n=>(v(),q(l,{key:n.to,name:n.name,to:n.to,icon:n.icon},{default:I(()=>[J(X(n.label),1)]),_:2},1032,["name","to","icon"]))),128))]),_:1},8,["modelValue"])],64)}}},ke=le(ye,[["__scopeId","data-v-8a3604ce"]]);export{ke as default};