import{D as C,I as T,c as h,k as m,a0 as O,at as x,$ as _,e as D,aT as E,cp as k,i as $,cx as u,d as f,cr as g,cy as v,cq as N,cz as P,cA as z,cu as I,cB as A,aI as W}from"./index.59515e77.js";var j=typeof window<"u",U=n=>n===window,y=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),X=n=>{const e=D(n);if(U(e)){const t=e.innerWidth,o=e.innerHeight;return y(t,o)}return e?.getBoundingClientRect?e.getBoundingClientRect():y(0,0)};function nn(n){const e=C(n,null);if(e){const t=x(),{link:o,unlink:i,internalChildren:s}=e;o(t),T(()=>i(t));const r=h(()=>s.indexOf(t));return{parent:e,index:r}}return{parent:null,index:m(-1)}}function V(n){const e=[],t=o=>{Array.isArray(o)&&o.forEach(i=>{var s;E(i)&&(e.push(i),(s=i.component)!=null&&s.subTree&&(e.push(i.component.subTree),t(i.component.subTree.children)),i.children&&t(i.children))})};return t(n),e}function L(n,e,t){const o=V(n.subTree.children);t.sort((s,r)=>o.indexOf(s.vnode)-o.indexOf(r.vnode));const i=t.map(s=>s.proxy);e.sort((s,r)=>{const a=i.indexOf(s),c=i.indexOf(r);return a-c})}function en(n){const e=O([]),t=O([]),o=x();return{children:e,linkChildren:s=>{_(n,Object.assign({link:c=>{c.proxy&&(t.push(c),e.push(c.proxy),L(o,e,t))},unlink:c=>{const d=t.indexOf(c);e.splice(d,1),t.splice(d,1)},children:e,internalChildren:t},s))}}}var l,p;function tn(){if(!l&&(l=m(0),p=m(0),j)){const n=()=>{l.value=window.innerWidth,p.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:l,height:p}}const S="van-hairline",rn=`${S}--surround`,on=`${S}--top-bottom`,sn={to:[String,Object],url:String,replace:Boolean};function H({to:n,url:e,replace:t,$router:o}){n&&o?o[t?"replace":"push"](n):e&&(t?location.replace(e):location.href=e)}function an(){const n=x().proxy;return()=>H(n)}const[M,B]=k("badge"),Z={dot:Boolean,max:g,tag:v("div"),color:String,offset:Array,content:g,showZero:N,position:v("top-right")};var q=$({name:M,props:Z,setup(n,{slots:e}){const t=()=>{if(e.content)return!0;const{content:r,showZero:a}=n;return P(r)&&r!==""&&(a||r!==0&&r!=="0")},o=()=>{const{dot:r,max:a,content:c}=n;if(!r&&t())return e.content?e.content():P(a)&&z(c)&&+c>a?`${a}+`:c},i=h(()=>{const r={background:n.color};if(n.offset){const[a,c]=n.offset;e.default?(r.top=u(c),typeof a=="number"?r.right=u(-a):r.right=a.startsWith("-")?a.replace("-",""):`-${a}`):(r.marginTop=u(c),r.marginLeft=u(a))}return r}),s=()=>{if(t()||n.dot)return f("div",{class:B([n.position,{dot:n.dot,fixed:!!e.default}]),style:i.value},[o()])};return()=>{if(e.default){const{tag:r}=n;return f(r,{class:B("wrapper")},{default:()=>[e.default(),s()]})}return s()}}});const F=I(q),[G,R]=k("icon"),K=n=>n?.includes("/"),Y={dot:Boolean,tag:v("i"),name:String,size:g,badge:g,color:String,badgeProps:Object,classPrefix:String};var J=$({name:G,props:Y,setup(n,{slots:e}){const t=C(A,null),o=h(()=>n.classPrefix||t?.iconPrefix||R());return()=>{const{tag:i,dot:s,name:r,size:a,badge:c,color:d}=n,b=K(r);return f(F,W({dot:s,tag:i,class:[o.value,b?"":`${o.value}-${r}`],style:{color:d,fontSize:u(a)},content:c},n.badgeProps),{default:()=>{var w;return[(w=e.default)==null?void 0:w.call(e),b&&f("img",{class:R("image"),src:r},null)]}})}}});const cn=I(J);export{on as B,cn as I,en as a,an as b,nn as c,F as d,tn as e,rn as f,sn as r,X as u};
