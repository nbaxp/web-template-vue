import{D as u,N as h,i,o,m as c,n as r,e as a,p as n,a8 as v,a3 as _,f as S,J as b,q as m,x as y,c as d,S as C,b as $,w as k,r as R}from"./index.b2875c3e.js";import{_ as f}from"./plugin-vue_export-helper.a0554eae.js";import{u as g}from"./index.38fcb330.js";const E=Symbol("rowContextKey"),N=u({header:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),j={name:"ElCard"},B=i({...j,props:N,setup(l){const t=g("card");return(e,p)=>(o(),c("div",{class:r([a(t).b(),a(t).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),c("div",{key:0,class:r(a(t).e("header"))},[n(e.$slots,"header",{},()=>[v(_(e.header),1)])],2)):S("v-if",!0),b("div",{class:r(a(t).e("body")),style:m(e.bodyStyle)},[n(e.$slots,"default")],6)],2))}});var P=f(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const O=y(P),D=["start","center","end","space-around","space-between","space-evenly"],V=["top","middle","bottom"],z=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:D,default:"start"},align:{type:String,values:V,default:"top"}}),A={name:"ElRow"},J=i({...A,props:z,setup(l){const t=l,e=g("row"),p=d(()=>t.gutter);C(E,{gutter:p});const w=d(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft=`-${t.gutter/2}px`),s});return(s,T)=>(o(),$(R(s.tag),{class:r([a(e).b(),a(e).is(`justify-${t.justify}`,s.justify!=="start"),a(e).is(`align-${t.align}`,s.align!=="top")]),style:m(a(w))},{default:k(()=>[n(s.$slots,"default")]),_:3},8,["class","style"]))}});var K=f(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const F=y(K);export{O as E,F as a,E as r};
