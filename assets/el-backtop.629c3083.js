import{s as w,i as V,j as q,k as z,l as I,m as l,p as d,c as v,o as c,b as O,w as T,e as n,q as f,t as g,n as i,v as D,x as _,d as C,E as P,y as j,f as L,T as R,_ as h,z as N,A as G,B as b}from"./index.bd10bac3.js";import{t as J}from"./index.7898061d.js";const B=t=>t**3,K=t=>t<.5?B(t*2)/2:1-B((1-t)*2)/2,Q={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},U={click:t=>t instanceof MouseEvent},W=(t,o,s)=>{const e=w(),a=w(),r=V(!1),u=()=>{if(!e.value)return;const m=Date.now(),H=e.value.scrollTop,y=()=>{if(!e.value)return;const $=(Date.now()-m)/500;$<1?(e.value.scrollTop=H*(1-K($)),requestAnimationFrame(y)):e.value.scrollTop=0};requestAnimationFrame(y)},p=()=>{e.value&&(r.value=e.value.scrollTop>=t.visibilityHeight)},k=m=>{u(),o("click",m)},E=I(p,300,!0);return q(a,"scroll",E),z(()=>{var m;a.value=document,e.value=document.documentElement,t.target&&(e.value=(m=document.querySelector(t.target))!=null?m:void 0,e.value||J(s,`target does not exist: ${t.target}`),a.value=e.value)}),{visible:r,handleClick:k}},S="ElBacktop",X=l({name:S}),Y=l({...X,props:Q,emits:U,setup(t,{emit:o}){const s=t,e=d("backtop"),{handleClick:a,visible:r}=W(s,o,S),u=v(()=>({right:`${s.right}px`,bottom:`${s.bottom}px`}));return(p,k)=>(c(),O(R,{name:`${n(e).namespace.value}-fade-in`},{default:T(()=>[n(r)?(c(),f("div",{key:0,style:g(n(u)),class:i(n(e).b()),onClick:k[0]||(k[0]=D((...E)=>n(a)&&n(a)(...E),["stop"]))},[_(p.$slots,"default",{},()=>[C(n(P),{class:i(n(e).e("icon"))},{default:T(()=>[C(n(j))]),_:1},8,["class"])])],6)):L("v-if",!0)]),_:3},8,["name"]))}});var Z=h(Y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const de=N(Z),ee=l({name:"ElContainer"}),te=l({...ee,props:{direction:{type:String}},setup(t){const o=t,s=G(),e=d("container"),a=v(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:s&&s.default?s.default().some(u=>{const p=u.type.name;return p==="ElHeader"||p==="ElFooter"}):!1);return(r,u)=>(c(),f("section",{class:i([n(e).b(),n(e).is("vertical",n(a))])},[_(r.$slots,"default")],2))}});var se=h(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const ne=l({name:"ElAside"}),oe=l({...ne,props:{width:{type:String,default:null}},setup(t){const o=t,s=d("aside"),e=v(()=>o.width?s.cssVarBlock({width:o.width}):{});return(a,r)=>(c(),f("aside",{class:i(n(s).b()),style:g(n(e))},[_(a.$slots,"default")],6))}});var F=h(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const ae=l({name:"ElFooter"}),le=l({...ae,props:{height:{type:String,default:null}},setup(t){const o=t,s=d("footer"),e=v(()=>o.height?s.cssVarBlock({height:o.height}):{});return(a,r)=>(c(),f("footer",{class:i(n(s).b()),style:g(n(e))},[_(a.$slots,"default")],6))}});var M=h(le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const re=l({name:"ElHeader"}),ce=l({...re,props:{height:{type:String,default:null}},setup(t){const o=t,s=d("header"),e=v(()=>o.height?s.cssVarBlock({height:o.height}):{});return(a,r)=>(c(),f("header",{class:i(n(s).b()),style:g(n(e))},[_(a.$slots,"default")],6))}});var A=h(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const ie=l({name:"ElMain"}),ue=l({...ie,setup(t){const o=d("main");return(s,e)=>(c(),f("main",{class:i(n(o).b())},[_(s.$slots,"default")],2))}});var x=h(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const fe=N(se,{Aside:F,Footer:M,Header:A,Main:x}),_e=b(F),he=b(M),ve=b(A),ke=b(x);export{ve as E,_e as a,ke as b,he as c,de as d,fe as e};
