import{h as p,s as $,i as I,c as v,j as z,k as O,o as c,b as D,w,l as m,m as d,d as C,e as o,n as i,p as k,q as P,f as j,T as L,t as R,v as N,x as G,y as g}from"./index.deda38a7.js";import{c as J,E as K}from"./index.8904e04f.js";import{_ as f}from"./plugin-vue_export-helper.a0554eae.js";import{u as _}from"./index.4331a0ad.js";import{t as Q}from"./index.b3ad05d2.js";const T=t=>t**3,U=t=>t<.5?T(t*2)/2:1-T((1-t)*2)/2,W={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},X={click:t=>t instanceof MouseEvent},Y=["onClick"],Z={name:"ElBacktop"},ee=p({...Z,props:W,emits:X,setup(t,{emit:n}){const e=t,a="ElBacktop",r=_("backtop"),s=$(),u=$(),h=I(!1),x=v(()=>({right:`${e.right}px`,bottom:`${e.bottom}px`})),A=()=>{if(!s.value)return;const l=Date.now(),b=s.value.scrollTop,E=()=>{if(!s.value)return;const y=(Date.now()-l)/500;y<1?(s.value.scrollTop=b*(1-U(y)),requestAnimationFrame(E)):s.value.scrollTop=0};requestAnimationFrame(E)},H=()=>{s.value&&(h.value=s.value.scrollTop>=e.visibilityHeight)},V=l=>{A(),n("click",l)},q=R(H,300);return z(u,"scroll",q),O(()=>{var l;u.value=document,s.value=document.documentElement,e.target&&(s.value=(l=document.querySelector(e.target))!=null?l:void 0,s.value||Q(a,`target is not existed: ${e.target}`),u.value=s.value)}),(l,b)=>(c(),D(L,{name:`${o(r).namespace.value}-fade-in`},{default:w(()=>[h.value?(c(),m("div",{key:0,style:k(o(x)),class:i(o(r).b()),onClick:P(V,["stop"])},[d(l.$slots,"default",{},()=>[C(o(K),{class:i(o(r).e("icon"))},{default:w(()=>[C(o(J))]),_:1},8,["class"])])],14,Y)):j("v-if",!0)]),_:3},8,["name"]))}});var te=f(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const ke=N(te),se={name:"ElContainer"},oe=p({...se,props:{direction:{type:String}},setup(t){const n=t,e=G(),a=_("container"),r=v(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:e&&e.default?e.default().some(u=>{const h=u.type.name;return h==="ElHeader"||h==="ElFooter"}):!1);return(s,u)=>(c(),m("section",{class:i([o(a).b(),o(a).is("vertical",o(r))])},[d(s.$slots,"default")],2))}});var ne=f(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const ae={name:"ElAside"},re=p({...ae,props:{width:{type:String,default:null}},setup(t){const n=t,e=_("aside"),a=v(()=>n.width?e.cssVarBlock({width:n.width}):{});return(r,s)=>(c(),m("aside",{class:i(o(e).b()),style:k(o(a))},[d(r.$slots,"default")],6))}});var S=f(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const le={name:"ElFooter"},ce=p({...le,props:{height:{type:String,default:null}},setup(t){const n=t,e=_("footer"),a=v(()=>n.height?e.cssVarBlock({height:n.height}):{});return(r,s)=>(c(),m("footer",{class:i(o(e).b()),style:k(o(a))},[d(r.$slots,"default")],6))}});var B=f(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const ie={name:"ElHeader"},ue=p({...ie,props:{height:{type:String,default:null}},setup(t){const n=t,e=_("header"),a=v(()=>n.height?e.cssVarBlock({height:n.height}):{});return(r,s)=>(c(),m("header",{class:i(o(e).b()),style:k(o(a))},[d(r.$slots,"default")],6))}});var F=f(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const pe={name:"ElMain"},me=p({...pe,setup(t){const n=_("main");return(e,a)=>(c(),m("main",{class:i(o(n).b())},[d(e.$slots,"default")],2))}});var M=f(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const ge=N(ne,{Aside:S,Footer:B,Header:F,Main:M}),be=g(S),Ee=g(B),ye=g(F),$e=g(M);export{ye as E,be as a,$e as b,Ee as c,ke as d,ge as e};