import{C as u,M as h,h as i,o,l as c,n as r,e as a,m as n,a7 as v,a2 as _,f as b,I as C,p as m,v as y,c as d,R as S,b as $,w as k,r as R}from"./index.deda38a7.js";import{_ as f}from"./plugin-vue_export-helper.a0554eae.js";import{u as g}from"./index.4331a0ad.js";const E=Symbol("rowContextKey"),j=u({header:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),N={name:"ElCard"},B=i({...N,props:j,setup(l){const t=g("card");return(e,p)=>(o(),c("div",{class:r([a(t).b(),a(t).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),c("div",{key:0,class:r(a(t).e("header"))},[n(e.$slots,"header",{},()=>[v(_(e.header),1)])],2)):b("v-if",!0),C("div",{class:r(a(t).e("body")),style:m(e.bodyStyle)},[n(e.$slots,"default")],6)],2))}});var P=f(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const O=y(P),V=["start","center","end","space-around","space-between","space-evenly"],z=["top","middle","bottom"],A=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:V,default:"start"},align:{type:String,values:z,default:"top"}}),D={name:"ElRow"},I=i({...D,props:A,setup(l){const t=l,e=g("row"),p=d(()=>t.gutter);S(E,{gutter:p});const w=d(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft=`-${t.gutter/2}px`),s});return(s,T)=>(o(),$(R(s.tag),{class:r([a(e).b(),a(e).is(`justify-${t.justify}`,s.justify!=="start"),a(e).is(`align-${t.align}`,s.align!=="top")]),style:m(a(w))},{default:k(()=>[n(s.$slots,"default")]),_:3},8,["class","style"]))}});var K=f(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const q=y(K);export{O as E,q as a,E as r};