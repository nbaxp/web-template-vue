import{C as u,N as v,i,j as y,o,p as d,n as r,e as a,q as n,a2 as h,Z as _,f as b,J as C,v as f,_ as m,z as g,c as p,U as S,b as $,w as k,r as R}from"./index.70f90e7f.js";const j=Symbol("rowContextKey"),E=u({header:{type:String,default:""},bodyStyle:{type:v([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),N={name:"ElCard"},B=i({...N,props:E,setup(l){const s=y("card");return(e,c)=>(o(),d("div",{class:r([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),d("div",{key:0,class:r(a(s).e("header"))},[n(e.$slots,"header",{},()=>[h(_(e.header),1)])],2)):b("v-if",!0),C("div",{class:r(a(s).e("body")),style:f(e.bodyStyle)},[n(e.$slots,"default")],6)],2))}});var P=m(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const I=g(P),z=["start","center","end","space-around","space-between","space-evenly"],V=["top","middle","bottom"],A=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:z,default:"start"},align:{type:String,values:V,default:"top"}}),D={name:"ElRow"},J=i({...D,props:A,setup(l){const s=l,e=y("row"),c=p(()=>s.gutter);S(j,{gutter:c});const w=p(()=>{const t={};return s.gutter&&(t.marginRight=t.marginLeft=`-${s.gutter/2}px`),t});return(t,T)=>(o(),$(R(t.tag),{class:r([a(e).b(),a(e).is(`justify-${s.justify}`,t.justify!=="start"),a(e).is(`align-${s.align}`,t.align!=="top")]),style:f(a(w))},{default:k(()=>[n(t.$slots,"default")]),_:3},8,["class","style"]))}});var K=m(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const L=g(K);export{I as E,L as a,j as r};
