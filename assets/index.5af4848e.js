import{I as C,az as T,c as h,i as p,Z as O,am as x,Y as _,e as E,aT as D,cJ as k,m as S,cR as u,d as f,cL as g,cS as v,cK as N,cT as P,cU as z,cO as $,cV as U,aB as V}from"./index.bd10bac3.js";var W=typeof window<"u",j=n=>n===window,R=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),X=n=>{const e=E(n);if(j(e)){const t=e.innerWidth,o=e.innerHeight;return R(t,o)}return e?.getBoundingClientRect?e.getBoundingClientRect():R(0,0)};function nn(n){const e=C(n,null);if(e){const t=x(),{link:o,unlink:i,internalChildren:s}=e;o(t),T(()=>i(t));const r=h(()=>s.indexOf(t));return{parent:e,index:r}}return{parent:null,index:p(-1)}}function A(n){const e=[],t=o=>{Array.isArray(o)&&o.forEach(i=>{var s;D(i)&&(e.push(i),(s=i.component)!=null&&s.subTree&&(e.push(i.component.subTree),t(i.component.subTree.children)),i.children&&t(i.children))})};return t(n),e}function L(n,e,t){const o=A(n.subTree.children);t.sort((s,r)=>o.indexOf(s.vnode)-o.indexOf(r.vnode));const i=t.map(s=>s.proxy);e.sort((s,r)=>{const a=i.indexOf(s),c=i.indexOf(r);return a-c})}function en(n){const e=O([]),t=O([]),o=x();return{children:e,linkChildren:s=>{_(n,Object.assign({link:c=>{c.proxy&&(t.push(c),e.push(c.proxy),L(o,e,t))},unlink:c=>{const d=t.indexOf(c);e.splice(d,1),t.splice(d,1)},children:e,internalChildren:t},s))}}}var l,m;function tn(){if(!l&&(l=p(0),m=p(0),W)){const n=()=>{l.value=window.innerWidth,m.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:l,height:m}}const I="van-hairline",rn=`${I}--surround`,on=`${I}--top-bottom`,sn={to:[String,Object],url:String,replace:Boolean};function Z({to:n,url:e,replace:t,$router:o}){n&&o?o[t?"replace":"push"](n):e&&(t?location.replace(e):location.href=e)}function an(){const n=x().proxy;return()=>Z(n)}const[H,B]=k("badge"),K={dot:Boolean,max:g,tag:v("div"),color:String,offset:Array,content:g,showZero:N,position:v("top-right")};var M=S({name:H,props:K,setup(n,{slots:e}){const t=()=>{if(e.content)return!0;const{content:r,showZero:a}=n;return P(r)&&r!==""&&(a||r!==0&&r!=="0")},o=()=>{const{dot:r,max:a,content:c}=n;if(!r&&t())return e.content?e.content():P(a)&&z(c)&&+c>a?`${a}+`:c},i=h(()=>{const r={background:n.color};if(n.offset){const[a,c]=n.offset;e.default?(r.top=u(c),typeof a=="number"?r.right=u(-a):r.right=a.startsWith("-")?a.replace("-",""):`-${a}`):(r.marginTop=u(c),r.marginLeft=u(a))}return r}),s=()=>{if(t()||n.dot)return f("div",{class:B([n.position,{dot:n.dot,fixed:!!e.default}]),style:i.value},[o()])};return()=>{if(e.default){const{tag:r}=n;return f(r,{class:B("wrapper")},{default:()=>[e.default(),s()]})}return s()}}});const Y=$(M),[F,y]=k("icon"),G=n=>n?.includes("/"),J={dot:Boolean,tag:v("i"),name:String,size:g,badge:g,color:String,badgeProps:Object,classPrefix:String};var q=S({name:F,props:J,setup(n,{slots:e}){const t=C(U,null),o=h(()=>n.classPrefix||t?.iconPrefix||y());return()=>{const{tag:i,dot:s,name:r,size:a,badge:c,color:d}=n,b=G(r);return f(Y,V({dot:s,tag:i,class:[o.value,b?"":`${o.value}-${r}`],style:{color:d,fontSize:u(a)},content:c},n.badgeProps),{default:()=>{var w;return[(w=e.default)==null?void 0:w.call(e),b&&f("img",{class:y("image"),src:r},null)]}})}}});const cn=$(q);export{on as B,cn as I,en as a,an as b,nn as c,Y as d,tn as e,rn as f,sn as r,X as u};
