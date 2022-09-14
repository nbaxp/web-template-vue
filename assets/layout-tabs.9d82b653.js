import{N as j,V as U,aw as fe,i as W,D as ne,j as G,k,C as A,Z as Q,Y as be,o as S,p as V,n as ve,e as x,v as $e,_ as me,ax as F,at as oe,ao as re,ay as Te,az as Ne,c as H,m as pe,a1 as ke,d as l,E as K,aA as xe,aB as Ee,a9 as Se,aC as q,a0 as _e,$ as Be,aD as Re,q as he,aE as ce,aF as Me,W as ze,A as Oe,aG as ie,I as Ae,P as Ve,Q as Le,f as se,z as Ie,B as Fe,R as D,a as De,ac as Ue,aH as He,b as te,w as O,g as Ye,ad as Ke,U as ue,ae as Y,aa as qe,af as je}from"./index.f2b0fb39.js";import{u as We,U as ge}from"./el-button.e2528e7d.js";import{E as Ge,a as Qe,b as Xe}from"./el-dropdown-item.f4ef8cd8.js";import{_ as Ze}from"./svg-icon.8751ca7e.js";import{t as le}from"./index.9c25ca14.js";import"./refs.1b6f9c24.js";/* empty css                */const X=Symbol("tabsRootContextKey"),Je=j({tabs:{type:U(Array),default:()=>fe([])}}),et={name:"ElTabBar"},tt=W({...et,props:Je,setup(t,{expose:r}){const s=t,T="ElTabBar",n=oe(),g=ne(X);g||le(T,"<el-tabs><el-tab-bar /></el-tabs>");const P=G("tabs"),_=k(),w=k(),h=()=>{let u=0,N=0;const C=["top","bottom"].includes(g.props.tabPosition)?"width":"height",m=C==="width"?"x":"y";return s.tabs.every(e=>{var a,o,f,R;const M=(o=(a=n.parent)==null?void 0:a.refs)==null?void 0:o[`tab-${e.uid}`];if(!M)return!1;if(!e.active)return!0;N=M[`client${F(C)}`];const L=m==="x"?"left":"top";u=M.getBoundingClientRect()[L]-((R=(f=M.parentElement)==null?void 0:f.getBoundingClientRect()[L])!=null?R:0);const z=window.getComputedStyle(M);return C==="width"&&(s.tabs.length>1&&(N-=Number.parseFloat(z.paddingLeft)+Number.parseFloat(z.paddingRight)),u+=Number.parseFloat(z.paddingLeft)),!1}),{[C]:`${N}px`,transform:`translate${F(m)}(${u}px)`}},y=()=>w.value=h();return A(()=>s.tabs,async()=>{await Q(),y()},{immediate:!0}),be(_,()=>y()),r({ref:_,update:y}),(u,N)=>(S(),V("div",{ref_key:"barRef",ref:_,class:ve([x(P).e("active-bar"),x(P).is(x(g).props.tabPosition)]),style:$e(w.value)},null,6))}});var at=me(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const st=j({panes:{type:U(Array),default:()=>fe([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:U(Function),default:re},onTabRemove:{type:U(Function),default:re},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),de="ElTabNav",nt=W({name:de,props:st,setup(t,{expose:r}){const s=oe(),T=ne(X);T||le(de,"<el-tabs><tab-nav /></el-tabs>");const n=G("tabs"),g=Te(),P=Ne(),_=k(),w=k(),h=k(),y=k(!1),u=k(0),N=k(!1),C=k(!0),m=H(()=>["top","bottom"].includes(T.props.tabPosition)?"width":"height"),e=H(()=>({transform:`translate${m.value==="width"?"X":"Y"}(-${u.value}px)`})),a=()=>{if(!_.value)return;const c=_.value[`offset${F(m.value)}`],p=u.value;if(!p)return;const i=p>c?p-c:0;u.value=i},o=()=>{if(!_.value||!w.value)return;const c=w.value[`offset${F(m.value)}`],p=_.value[`offset${F(m.value)}`],i=u.value;if(c-i<=p)return;const d=c-i>p*2?i+p:c-p;u.value=d},f=async()=>{const c=w.value;if(!y.value||!h.value||!_.value||!c)return;await Q();const p=h.value.querySelector(".is-active");if(!p)return;const i=_.value,d=["top","bottom"].includes(T.props.tabPosition),b=p.getBoundingClientRect(),v=i.getBoundingClientRect(),B=d?c.offsetWidth-v.width:c.offsetHeight-v.height,E=u.value;let $=E;d?(b.left<v.left&&($=E-(v.left-b.left)),b.right>v.right&&($=E+b.right-v.right)):(b.top<v.top&&($=E-(v.top-b.top)),b.bottom>v.bottom&&($=E+(b.bottom-v.bottom))),$=Math.max($,0),u.value=Math.min($,B)},R=()=>{if(!w.value||!_.value)return;const c=w.value[`offset${F(m.value)}`],p=_.value[`offset${F(m.value)}`],i=u.value;if(p<c){const d=u.value;y.value=y.value||{},y.value.prev=d,y.value.next=d+p<c,c-d<p&&(u.value=c-p)}else y.value=!1,i>0&&(u.value=0)},M=c=>{const p=c.code,{up:i,down:d,left:b,right:v}=q;if(![i,d,b,v].includes(p))return;const B=Array.from(c.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),E=B.indexOf(c.target);let $;p===b||p===i?E===0?$=B.length-1:$=E-1:E<B.length-1?$=E+1:$=0,B[$].focus(),B[$].click(),L()},L=()=>{C.value&&(N.value=!0)},z=()=>N.value=!1;return A(g,c=>{c==="hidden"?C.value=!1:c==="visible"&&setTimeout(()=>C.value=!0,50)}),A(P,c=>{c?setTimeout(()=>C.value=!0,50):C.value=!1}),be(h,R),pe(()=>setTimeout(()=>f(),0)),ke(()=>R()),r({scrollToActiveTab:f,removeFocus:z}),A(()=>t.panes,()=>s.update(),{flush:"post"}),()=>{const c=y.value?[l("span",{class:[n.e("nav-prev"),n.is("disabled",!y.value.prev)],onClick:a},[l(K,null,{default:()=>[l(xe,null,null)]})]),l("span",{class:[n.e("nav-next"),n.is("disabled",!y.value.next)],onClick:o},[l(K,null,{default:()=>[l(Ee,null,null)]})])]:null,p=t.panes.map((i,d)=>{var b,v,B,E;const $=i.uid,Z=i.props.disabled,J=(v=(b=i.props.name)!=null?b:i.index)!=null?v:`${d}`,ee=!Z&&(i.isClosable||t.editable);i.index=`${d}`;const Pe=ee?l(K,{class:"is-icon-close",onClick:I=>t.onTabRemove(i,I)},{default:()=>[l(Se,null,null)]}):null,we=((E=(B=i.slots).label)==null?void 0:E.call(B))||i.props.label,Ce=!Z&&i.active?0:-1;return l("div",{ref:`tab-${$}`,class:[n.e("item"),n.is(T.props.tabPosition),n.is("active",i.active),n.is("disabled",Z),n.is("closable",ee),n.is("focus",N.value)],id:`tab-${J}`,key:`tab-${$}`,"aria-controls":`pane-${J}`,role:"tab","aria-selected":i.active,tabindex:Ce,onFocus:()=>L(),onBlur:()=>z(),onClick:I=>{z(),t.onTabClick(i,J,I)},onKeydown:I=>{ee&&(I.code===q.delete||I.code===q.backspace)&&t.onTabRemove(i,I)}},[we,Pe])});return l("div",{ref:h,class:[n.e("nav-wrap"),n.is("scrollable",!!y.value),n.is(T.props.tabPosition)]},[c,l("div",{class:n.e("nav-scroll"),ref:_},[l("div",{class:[n.e("nav"),n.is(T.props.tabPosition),n.is("stretch",t.stretch&&["top","bottom"].includes(T.props.tabPosition))],ref:w,style:e.value,role:"tablist",onKeydown:M},[t.type?null:l(at,{tabs:[...t.panes]},null),p])])])}}}),ot=j({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:U(Function),default:()=>!0},stretch:Boolean}),ae=t=>Me(t)||ze(t),lt={[ge]:t=>ae(t),"tab-click":(t,r)=>r instanceof Event,"tab-change":t=>ae(t),edit:(t,r)=>["remove","add"].includes(r),"tab-remove":t=>ae(t),"tab-add":()=>!0};var rt=W({name:"ElTabs",props:ot,emits:lt,setup(t,{emit:r,slots:s,expose:T}){var n,g;const P=G("tabs"),_=k(),w=_e({}),h=k((g=(n=t.modelValue)!=null?n:t.activeName)!=null?g:"0"),y=e=>{h.value=e,r(ge,e),r("tab-change",e)},u=async e=>{var a,o,f;if(!(h.value===e||ce(e)))try{await((a=t.beforeLeave)==null?void 0:a.call(t,e,h.value))!==!1&&(y(e),(f=(o=_.value)==null?void 0:o.removeFocus)==null||f.call(o))}catch{}},N=(e,a,o)=>{e.props.disabled||(u(a),r("tab-click",e,o))},C=(e,a)=>{e.props.disabled||ce(e.props.name)||(a.stopPropagation(),r("edit",e.props.name,"remove"),r("tab-remove",e.props.name))},m=()=>{r("edit",void 0,"add"),r("tab-add")};return We({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},H(()=>!!t.activeName)),A(()=>t.activeName,e=>u(e)),A(()=>t.modelValue,e=>u(e)),A(h,async()=>{var e;await Q(),(e=_.value)==null||e.scrollToActiveTab()}),Be(X,{props:t,currentName:h,registerPane:o=>w[o.uid]=o,unregisterPane:o=>delete w[o]}),T({currentName:h}),()=>{const e=t.editable||t.addable?l("span",{class:P.e("new-tab"),tabindex:"0",onClick:m,onKeydown:f=>{f.code===q.enter&&m()}},[l(K,{class:P.is("icon-plus")},{default:()=>[l(Re,null,null)]})]):null,a=l("div",{class:[P.e("header"),P.is(t.tabPosition)]},[e,l(nt,{ref:_,currentName:h.value,editable:t.editable,type:t.type,panes:Object.values(w),stretch:t.stretch,onTabClick:N,onTabRemove:C},null)]),o=l("div",{class:P.e("content")},[he(s,"default")]);return l("div",{class:[P.b(),P.m(t.tabPosition),{[P.m("card")]:t.type==="card",[P.m("border-card")]:t.type==="border-card"}]},[...t.tabPosition!=="bottom"?[a,o]:[o,a]])}}});const ct=j({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),it=["id","aria-hidden","aria-labelledby"],ut={name:"ElTabPane"},dt=W({...ut,props:ct,setup(t){const r=t,s="ElTabPane",T=oe(),n=Oe(),g=ne(X);g||le(s,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const P=G("tab-pane"),_=k(),w=H(()=>r.closable||g.props.closable),h=ie(()=>{var m;return g.currentName.value===((m=r.name)!=null?m:_.value)}),y=k(h.value),u=H(()=>{var m;return(m=r.name)!=null?m:_.value}),N=ie(()=>!r.lazy||y.value||h.value);A(h,m=>{m&&(y.value=!0)});const C=_e({uid:T.uid,slots:n,props:r,paneName:u,active:h,index:_,isClosable:w});return pe(()=>{g.registerPane(C)}),Ae(()=>{g.unregisterPane(C.uid)}),(m,e)=>x(N)?Ve((S(),V("div",{key:0,id:`pane-${x(u)}`,class:ve(x(P).b()),role:"tabpanel","aria-hidden":!x(h),"aria-labelledby":`tab-${x(u)}`},[he(m.$slots,"default")],10,it)),[[Le,x(h)]]):se("v-if",!0)}});var ye=me(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ft=Ie(rt,{TabPane:ye}),bt=Fe(ye);const vt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},mt=D("path",{fill:"currentColor",d:"M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"},null,-1),pt=[mt];function _t(t,r){return S(),V("svg",vt,pt)}const ht={name:"ep-switch",render:_t},gt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},yt=D("path",{fill:"currentColor",d:"M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"},null,-1),Pt=[yt];function wt(t,r){return S(),V("svg",gt,Pt)}const Ct={name:"ep-right",render:wt},$t={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Tt=D("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),Nt=D("path",{fill:"currentColor",d:"m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),kt=[Tt,Nt];function xt(t,r){return S(),V("svg",$t,kt)}const Et={name:"ep-back",render:xt},St={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Bt=D("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1),Rt=[Bt];function Mt(t,r){return S(),V("svg",St,Rt)}const zt={name:"ep-refresh",render:Mt},Ot={class:"inline-flex items-center"},At=Y("\u5237\u65B0"),Vt=Y("\u5173\u95ED\u5DE6\u4FA7 "),Lt=Y("\u5173\u95ED\u53F3\u4FA7 "),It=Y("\u5173\u95ED\u5176\u4ED6 "),jt={__name:"layout-tabs",setup(t){const r=k([]),s=De(),T=Ue(),n=Ye(),g=je(),P=k(n.fullPath);He(e=>{P.value=e.fullPath});const _=(e,a)=>{a?r.value[e]=a:r.value.splice(e,1)},w=(e,a)=>{a&&r.value.forEach((o,f)=>{f!==e&&o?.handleClose()})},h=e=>{const a=s.routes.findIndex(f=>f.fullPath===n.fullPath),o=s.routes[e];e!==a&&g.push({path:o.fullPath}),s.isRefreshing=!0,Q(()=>{s.isRefreshing=!1})},y=e=>{if(s.routes.length>1){const a=s.routes.findIndex(f=>f.fullPath===e),o=s.routes.findIndex(f=>f.fullPath===n.fullPath);s.routes.splice(a,1),a===o&&(s.routes[a]?g.push(s.routes[a]):g.push(s.routes[a-1]))}},u=e=>{const a=s.routes.findIndex(f=>f.fullPath===n.fullPath),o=s.routes[e];s.routes.splice(0,e),a<e&&g.push(o)},N=e=>{const a=s.routes.findIndex(o=>o.fullPath===n.fullPath);s.routes.splice(e+1,s.routes.length-e),a>e&&g.push(s.routes[e])},C=e=>{N(e),u(e),s.routes[0].fullPath!==n.fullPath&&g.push(s.routes[0])},m=e=>{e.active||g.push(e.props.name)};return(e,a)=>{const o=zt,f=Ge,R=Et,M=Ct,L=ht,z=Qe,c=Xe,p=bt,i=ft;return S(),te(i,{modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=d=>P.value=d),type:"border-card",class:"router-tab w-full",onTabRemove:y,onTabClick:m},{default:O(()=>[(S(!0),V(ue,null,Ke(x(s).routes,(d,b)=>(S(),V(ue,{key:d.fullPath},[!d.meta.requiresAuth||x(T).hasPermission(d.meta?.permission)?(S(),te(p,{key:0,modelValue:d.fullPath,"onUpdate:modelValue":v=>d.fullPath=v,name:d.fullPath,closable:x(s).routes.length>1},{label:O(()=>[l(c,{ref_for:!0,ref:v=>_(b,v),class:"h-full",trigger:"contextmenu",onVisibleChange:v=>w(b,v)},{dropdown:O(()=>[l(z,null,{default:O(()=>[l(f,{onClick:v=>h(b)},{default:O(()=>[l(o),At]),_:2},1032,["onClick"]),l(f,{disabled:b===0,onClick:v=>u(b)},{default:O(()=>[l(R),Vt]),_:2},1032,["disabled","onClick"]),l(f,{disabled:b===x(s).routes.length-1,onClick:v=>N(b)},{default:O(()=>[l(M),Lt]),_:2},1032,["disabled","onClick"]),l(f,{disabled:b===0&&b===x(s).routes.length-1,onClick:v=>C(b)},{default:O(()=>[l(L),It]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:O(()=>[D("span",Ot,[d.meta.icon?(S(),te(Ze,{key:0,name:d.meta.icon},null,8,["name"])):se("",!0),Y(" "+qe(d.meta?.title??d.fullPath),1)])]),_:2},1032,["onVisibleChange"])]),_:2},1032,["modelValue","onUpdate:modelValue","name","closable"])):se("",!0)],64))),128))]),_:1},8,["modelValue"])}}};export{jt as default};