import{H as W,R as ne,ap as fe,i as X,I as oe,j as Y,k as T,V as A,X as Q,W as be,o as S,p as M,n as ve,e as k,v as $e,_ as me,am as le,aq as Ne,ar as Te,c as H,m as pe,$ as ke,d as c,E as K,as as Ee,at as Se,a1 as Be,au as j,Z as _e,Y as xe,av as Re,q as he,aw as ce,ax as ze,S as Oe,A as Ve,ay as ie,az as Ae,M as Me,N as Le,f as se,z as Ie,B as De,O as F,a as Fe,a4 as Ue,aA as He,b as te,w as O,g as qe,a5 as Ke,Q as ue,a6 as q,a2 as je,a7 as We}from"./index.1e692261.js";import{u as Xe}from"./el-button.69f0df7c.js";import{c as I,U as ge}from"./el-popper.e6a0cfe6.js";import{E as Ye,a as Qe,b as Ze}from"./el-dropdown-item.c0ce5f07.js";import{_ as Ge}from"./svg-icon.a3d9bbaf.js";import{t as re}from"./index.2f4afd98.js";import"./index.09be628b.js";import"./refs.d2a66b7c.js";/* empty css                */const Z=Symbol("tabsRootContextKey"),Je=W({tabs:{type:ne(Array),default:()=>fe([])}}),et={name:"ElTabBar"},tt=X({...et,props:Je,setup(t,{expose:l}){const s=t,R="ElTabBar",h=le(),n=oe(Z);n||re(R,"<el-tabs><el-tab-bar /></el-tabs>");const g=Y("tabs"),w=T(),y=T(),d=()=>{let u=0,p=0;const $=["top","bottom"].includes(n.props.tabPosition)?"width":"height",_=$==="width"?"x":"y";return s.tabs.every(e=>{var o,r,f,z;const B=(r=(o=h.parent)==null?void 0:o.refs)==null?void 0:r[`tab-${e.uid}`];if(!B)return!1;if(!e.active)return!0;p=B[`client${I($)}`];const D=_==="x"?"left":"top";u=B.getBoundingClientRect()[D]-((z=(f=B.parentElement)==null?void 0:f.getBoundingClientRect()[D])!=null?z:0);const V=window.getComputedStyle(B);return $==="width"&&(s.tabs.length>1&&(p-=Number.parseFloat(V.paddingLeft)+Number.parseFloat(V.paddingRight)),u+=Number.parseFloat(V.paddingLeft)),!1}),{[$]:`${p}px`,transform:`translate${I(_)}(${u}px)`}},C=()=>y.value=d();return A(()=>s.tabs,async()=>{await Q(),C()},{immediate:!0}),be(w,()=>C()),l({ref:w,update:C}),(u,p)=>(S(),M("div",{ref_key:"barRef",ref:w,class:ve([k(g).e("active-bar"),k(g).is(k(n).props.tabPosition)]),style:$e(y.value)},null,6))}});var at=me(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const st=W({panes:{type:ne(Array),default:()=>fe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),nt={tabClick:(t,l,s)=>s instanceof Event,tabRemove:(t,l)=>l instanceof Event},de="ElTabNav",ot=X({name:de,props:st,emits:nt,setup(t,{expose:l,emit:s}){const R=le(),h=oe(Z);h||re(de,"<el-tabs><tab-nav /></el-tabs>");const n=Y("tabs"),g=Ne(),w=Te(),y=T(),d=T(),C=T(),u=T(!1),p=T(0),$=T(!1),_=T(!0),e=H(()=>["top","bottom"].includes(h.props.tabPosition)?"width":"height"),o=H(()=>({transform:`translate${e.value==="width"?"X":"Y"}(-${p.value}px)`})),r=()=>{if(!y.value)return;const i=y.value[`offset${I(e.value)}`],b=p.value;if(!b)return;const a=b>i?b-i:0;p.value=a},f=()=>{if(!y.value||!d.value)return;const i=d.value[`offset${I(e.value)}`],b=y.value[`offset${I(e.value)}`],a=p.value;if(i-a<=b)return;const v=i-a>b*2?a+b:i-b;p.value=v},z=async()=>{const i=d.value;if(!u.value||!C.value||!y.value||!i)return;await Q();const b=C.value.querySelector(".is-active");if(!b)return;const a=y.value,v=["top","bottom"].includes(h.props.tabPosition),m=b.getBoundingClientRect(),N=a.getBoundingClientRect(),x=v?i.offsetWidth-N.width:i.offsetHeight-N.height,E=p.value;let P=E;v?(m.left<N.left&&(P=E-(N.left-m.left)),m.right>N.right&&(P=E+m.right-N.right)):(m.top<N.top&&(P=E-(N.top-m.top)),m.bottom>N.bottom&&(P=E+(m.bottom-N.bottom))),P=Math.max(P,0),p.value=Math.min(P,x)},B=()=>{if(!d.value||!y.value)return;const i=d.value[`offset${I(e.value)}`],b=y.value[`offset${I(e.value)}`],a=p.value;if(b<i){const v=p.value;u.value=u.value||{},u.value.prev=v,u.value.next=v+b<i,i-v<b&&(p.value=i-b)}else u.value=!1,a>0&&(p.value=0)},D=i=>{const b=i.code,{up:a,down:v,left:m,right:N}=j;if(![a,v,m,N].includes(b))return;const x=Array.from(i.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),E=x.indexOf(i.target);let P;b===m||b===a?E===0?P=x.length-1:P=E-1:E<x.length-1?P=E+1:P=0,x[P].focus(),x[P].click(),V()},V=()=>{_.value&&($.value=!0)},U=()=>$.value=!1;return A(g,i=>{i==="hidden"?_.value=!1:i==="visible"&&setTimeout(()=>_.value=!0,50)}),A(w,i=>{i?setTimeout(()=>_.value=!0,50):_.value=!1}),be(C,B),pe(()=>setTimeout(()=>z(),0)),ke(()=>B()),l({scrollToActiveTab:z,removeFocus:U}),A(()=>t.panes,()=>R.update(),{flush:"post"}),()=>{const i=u.value?[c("span",{class:[n.e("nav-prev"),n.is("disabled",!u.value.prev)],onClick:r},[c(K,null,{default:()=>[c(Ee,null,null)]})]),c("span",{class:[n.e("nav-next"),n.is("disabled",!u.value.next)],onClick:f},[c(K,null,{default:()=>[c(Se,null,null)]})])]:null,b=t.panes.map((a,v)=>{var m,N,x,E;const P=a.uid,G=a.props.disabled,J=(N=(m=a.props.name)!=null?m:a.index)!=null?N:`${v}`,ee=!G&&(a.isClosable||t.editable);a.index=`${v}`;const Pe=ee?c(K,{class:"is-icon-close",onClick:L=>s("tabRemove",a,L)},{default:()=>[c(Be,null,null)]}):null,we=((E=(x=a.slots).label)==null?void 0:E.call(x))||a.props.label,Ce=!G&&a.active?0:-1;return c("div",{ref:`tab-${P}`,class:[n.e("item"),n.is(h.props.tabPosition),n.is("active",a.active),n.is("disabled",G),n.is("closable",ee),n.is("focus",$.value)],id:`tab-${J}`,key:`tab-${P}`,"aria-controls":`pane-${J}`,role:"tab","aria-selected":a.active,tabindex:Ce,onFocus:()=>V(),onBlur:()=>U(),onClick:L=>{U(),s("tabClick",a,J,L)},onKeydown:L=>{ee&&(L.code===j.delete||L.code===j.backspace)&&s("tabRemove",a,L)}},[we,Pe])});return c("div",{ref:C,class:[n.e("nav-wrap"),n.is("scrollable",!!u.value),n.is(h.props.tabPosition)]},[i,c("div",{class:n.e("nav-scroll"),ref:y},[c("div",{class:[n.e("nav"),n.is(h.props.tabPosition),n.is("stretch",t.stretch&&["top","bottom"].includes(h.props.tabPosition))],ref:d,style:o.value,role:"tablist",onKeydown:D},[t.type?null:c(at,{tabs:[...t.panes]},null),b])])])}}}),lt=W({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ne(Function),default:()=>!0},stretch:Boolean}),ae=t=>ze(t)||Oe(t),rt={[ge]:t=>ae(t),tabClick:(t,l)=>l instanceof Event,tabChange:t=>ae(t),edit:(t,l)=>["remove","add"].includes(l),tabRemove:t=>ae(t),tabAdd:()=>!0};var ct=X({name:"ElTabs",props:lt,emits:rt,setup(t,{emit:l,slots:s,expose:R}){var h,n;const g=Y("tabs"),w=T(),y=_e({}),d=T((n=(h=t.modelValue)!=null?h:t.activeName)!=null?n:"0"),C=e=>{d.value=e,l(ge,e),l("tabChange",e)},u=async e=>{var o,r,f;if(!(d.value===e||ce(e)))try{await((o=t.beforeLeave)==null?void 0:o.call(t,e,d.value))!==!1&&(C(e),(f=(r=w.value)==null?void 0:r.removeFocus)==null||f.call(r))}catch{}},p=(e,o,r)=>{e.props.disabled||(u(o),l("tabClick",e,r))},$=(e,o)=>{e.props.disabled||ce(e.props.name)||(o.stopPropagation(),l("edit",e.props.name,"remove"),l("tabRemove",e.props.name))},_=()=>{l("edit",void 0,"add"),l("tabAdd")};return Xe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},H(()=>!!t.activeName)),A(()=>t.activeName,e=>u(e)),A(()=>t.modelValue,e=>u(e)),A(d,async()=>{var e;await Q(),(e=w.value)==null||e.scrollToActiveTab()}),xe(Z,{props:t,currentName:d,registerPane:r=>y[r.uid]=r,unregisterPane:r=>delete y[r]}),R({currentName:d}),()=>{const e=t.editable||t.addable?c("span",{class:g.e("new-tab"),tabindex:"0",onClick:_,onKeydown:f=>{f.code===j.enter&&_()}},[c(K,{class:g.is("icon-plus")},{default:()=>[c(Re,null,null)]})]):null,o=c("div",{class:[g.e("header"),g.is(t.tabPosition)]},[e,c(ot,{ref:w,currentName:d.value,editable:t.editable,type:t.type,panes:Object.values(y),stretch:t.stretch,onTabClick:p,onTabRemove:$},null)]),r=c("div",{class:g.e("content")},[he(s,"default")]);return c("div",{class:[g.b(),g.m(t.tabPosition),{[g.m("card")]:t.type==="card",[g.m("border-card")]:t.type==="border-card"}]},[...t.tabPosition!=="bottom"?[o,r]:[r,o]])}}});const it=W({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ut=["id","aria-hidden","aria-labelledby"],dt={name:"ElTabPane"},ft=X({...dt,props:it,setup(t){const l=t,s="ElTabPane",R=le(),h=Ve(),n=oe(Z);n||re(s,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const g=Y("tab-pane"),w=T(),y=H(()=>l.closable||n.props.closable),d=ie(()=>{var _;return n.currentName.value===((_=l.name)!=null?_:w.value)}),C=T(d.value),u=H(()=>{var _;return(_=l.name)!=null?_:w.value}),p=ie(()=>!l.lazy||C.value||d.value);A(d,_=>{_&&(C.value=!0)});const $=_e({uid:R.uid,slots:h,props:l,paneName:u,active:d,index:w,isClosable:y});return pe(()=>{n.registerPane($)}),Ae(()=>{n.unregisterPane($.uid)}),(_,e)=>k(p)?Me((S(),M("div",{key:0,id:`pane-${k(u)}`,class:ve(k(g).b()),role:"tabpanel","aria-hidden":!k(d),"aria-labelledby":`tab-${k(u)}`},[he(_.$slots,"default")],10,ut)),[[Le,k(d)]]):se("v-if",!0)}});var ye=me(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const bt=Ie(ct,{TabPane:ye}),vt=De(ye);const mt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},pt=F("path",{fill:"currentColor",d:"M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"},null,-1),_t=[pt];function ht(t,l){return S(),M("svg",mt,_t)}const gt={name:"ep-switch",render:ht},yt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Pt=F("path",{fill:"currentColor",d:"M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"},null,-1),wt=[Pt];function Ct(t,l){return S(),M("svg",yt,wt)}const $t={name:"ep-right",render:Ct},Nt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Tt=F("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),kt=F("path",{fill:"currentColor",d:"m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),Et=[Tt,kt];function St(t,l){return S(),M("svg",Nt,Et)}const Bt={name:"ep-back",render:St},xt={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Rt=F("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1),zt=[Rt];function Ot(t,l){return S(),M("svg",xt,zt)}const Vt={name:"ep-refresh",render:Ot},At={class:"inline-flex items-center"},Mt=q("\u5237\u65B0"),Lt=q("\u5173\u95ED\u5DE6\u4FA7 "),It=q("\u5173\u95ED\u53F3\u4FA7 "),Dt=q("\u5173\u95ED\u5176\u4ED6 "),Qt={__name:"layout-tabs",setup(t){const l=T([]),s=Fe(),R=Ue(),h=qe(),n=We(),g=T(h.fullPath);He(e=>{g.value=e.fullPath});const w=(e,o)=>{o?l.value[e]=o:l.value.splice(e,1)},y=(e,o)=>{o&&l.value.forEach((r,f)=>{f!==e&&r?.handleClose()})},d=e=>{const o=s.routes.findIndex(f=>f.fullPath===h.fullPath),r=s.routes[e];e!==o&&n.push({path:r.fullPath}),s.isRefreshing=!0,Q(()=>{s.isRefreshing=!1})},C=e=>{if(s.routes.length>1){const o=s.routes.findIndex(f=>f.fullPath===e),r=s.routes.findIndex(f=>f.fullPath===h.fullPath);s.routes.splice(o,1),o===r&&(s.routes[o]?n.push(s.routes[o]):n.push(s.routes[o-1]))}},u=e=>{const o=s.routes.findIndex(f=>f.fullPath===h.fullPath),r=s.routes[e];s.routes.splice(0,e),o<e&&n.push(r)},p=e=>{const o=s.routes.findIndex(r=>r.fullPath===h.fullPath);s.routes.splice(e+1,s.routes.length-e),o>e&&n.push(s.routes[e])},$=e=>{p(e),u(e),s.routes[0].fullPath!==h.fullPath&&n.push(s.routes[0])},_=e=>{e.active||n.push(e.props.name)};return(e,o)=>{const r=Vt,f=Ye,z=Bt,B=$t,D=gt,V=Qe,U=Ze,i=vt,b=bt;return S(),te(b,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=a=>g.value=a),type:"border-card",class:"router-tab w-full",onTabRemove:C,onTabClick:_},{default:O(()=>[(S(!0),M(ue,null,Ke(k(s).routes,(a,v)=>(S(),M(ue,{key:a.fullPath},[!a.meta.requiresAuth||k(R).hasPermission(a.meta?.permission)?(S(),te(i,{key:0,modelValue:a.fullPath,"onUpdate:modelValue":m=>a.fullPath=m,name:a.fullPath,closable:k(s).routes.length>1},{label:O(()=>[c(U,{ref_for:!0,ref:m=>w(v,m),class:"h-full",trigger:"contextmenu",onVisibleChange:m=>y(v,m)},{dropdown:O(()=>[c(V,null,{default:O(()=>[c(f,{onClick:m=>d(v)},{default:O(()=>[c(r),Mt]),_:2},1032,["onClick"]),c(f,{disabled:v===0,onClick:m=>u(v)},{default:O(()=>[c(z),Lt]),_:2},1032,["disabled","onClick"]),c(f,{disabled:v===k(s).routes.length-1,onClick:m=>p(v)},{default:O(()=>[c(B),It]),_:2},1032,["disabled","onClick"]),c(f,{disabled:v===0&&v===k(s).routes.length-1,onClick:m=>$(v)},{default:O(()=>[c(D),Dt]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:O(()=>[F("span",At,[a.meta.icon?(S(),te(Ge,{key:0,name:a.meta.icon},null,8,["name"])):se("",!0),q(" "+je(a.meta?.title??a.fullPath),1)])]),_:2},1032,["onVisibleChange"])]),_:2},1032,["modelValue","onUpdate:modelValue","name","closable"])):se("",!0)],64))),128))]),_:1},8,["modelValue"])}}};export{Qt as default};