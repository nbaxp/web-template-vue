import{E as ue}from"./el-button.651c63f4.js";import{c as R,u as he,d as re,a as ye,O as Te,w as se,F as $e}from"./index.7898061d.js";import{E as Oe,u as ke}from"./el-popper.31ce43ec.js";import{_ as P,m as K,x as N,i as C,Y as z,I as h,k as Fe,e as y,J as Se,H as W,R as B,au as g,c as T,aO as Re,L as J,V as Ne,j as Be,h as E,o as D,b as Y,w as I,d as F,aP as De,aQ as Pe,X as Ke,ai as Me,E as de,aD as Le,p as x,U as Ae,aJ as Ge,am as ce,q as j,aR as ze,aB as H,n as X,f as Z,N as Ye,r as Ue,Q as Je,t as He,z as Ve,B as pe}from"./index.bd10bac3.js";import{u as fe}from"./index.eb8b9e5b.js";import{c as me}from"./refs.47b7c97b.js";const je=K({inheritAttrs:!1});function We(e,o,s,t,i,c){return N(e.$slots,"default")}var qe=P(je,[["render",We],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Qe=K({name:"ElCollectionItem",inheritAttrs:!1});function Xe(e,o,s,t,i,c){return N(e.$slots,"default")}var Ze=P(Qe,[["render",Xe],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ve="data-el-collection-item",ge=e=>{const o=`El${e}Collection`,s=`${o}Item`,t=Symbol(o),i=Symbol(s),c={...qe,name:o,setup(){const l=C(null),u=new Map;z(t,{itemMap:u,getItems:()=>{const f=y(l);if(!f)return[];const p=Array.from(f.querySelectorAll(`[${ve}]`));return[...u.values()].sort((n,d)=>p.indexOf(n.ref)-p.indexOf(d.ref))},collectionRef:l})}},r={...Ze,name:s,setup(l,{attrs:u}){const v=C(null),f=h(t,void 0);z(i,{collectionItemRef:v}),Fe(()=>{const p=y(v);p&&f.itemMap.set(p,{ref:p,...u})}),Se(()=>{const p=y(v);f.itemMap.delete(p)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:i,ElCollection:c,ElCollectionItem:r}},xe=W({style:{type:B([String,Array,Object])},currentTabId:{type:B(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:B(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:eo,ElCollectionItem:oo,COLLECTION_INJECTION_KEY:ee,COLLECTION_ITEM_INJECTION_KEY:no}=ge("RovingFocusGroup"),oe=Symbol("elRovingFocusGroup"),we=Symbol("elRovingFocusGroupItem"),to={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},lo=(e,o)=>{if(o!=="rtl")return e;switch(e){case g.right:return g.left;case g.left:return g.right;default:return e}},ro=(e,o,s)=>{const t=lo(e.key,s);if(!(o==="vertical"&&[g.left,g.right].includes(t))&&!(o==="horizontal"&&[g.up,g.down].includes(t)))return to[t]},so=(e,o)=>e.map((s,t)=>e[(t+o)%e.length]),ne=e=>{const{activeElement:o}=document;for(const s of e)if(s===o||(s.focus(),o!==document.activeElement))return},ae="currentTabIdChange",ie="rovingFocusGroup.entryFocus",ao={bubbles:!1,cancelable:!0},io=K({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:xe,emits:[ae,"entryFocus"],setup(e,{emit:o}){var s;const t=C((s=e.currentTabId||e.defaultCurrentTabId)!=null?s:null),i=C(!1),c=C(!1),r=C(null),{getItems:l}=h(ee,void 0),u=T(()=>[{outline:"none"},e.style]),v=a=>{o(ae,a)},f=()=>{i.value=!0},p=R(a=>{var w;(w=e.onMousedown)==null||w.call(e,a)},()=>{c.value=!0}),_=R(a=>{var w;(w=e.onFocus)==null||w.call(e,a)},a=>{const w=!y(c),{target:M,currentTarget:$}=a;if(M===$&&w&&!y(i)){const L=new Event(ie,ao);if($?.dispatchEvent(L),!L.defaultPrevented){const b=l().filter(k=>k.focusable),S=b.find(k=>k.active),O=b.find(k=>k.id===y(t)),G=[S,O,...b].filter(Boolean).map(k=>k.ref);ne(G)}}c.value=!1}),n=R(a=>{var w;(w=e.onBlur)==null||w.call(e,a)},()=>{i.value=!1}),d=(...a)=>{o("entryFocus",...a)};z(oe,{currentTabbedId:Re(t),loop:J(e,"loop"),tabIndex:T(()=>y(i)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:u,orientation:J(e,"orientation"),dir:J(e,"dir"),onItemFocus:v,onItemShiftTab:f,onBlur:n,onFocus:_,onMousedown:p}),Ne(()=>e.currentTabId,a=>{t.value=a??null}),Be(r,ie,d)}});function uo(e,o,s,t,i,c){return N(e.$slots,"default")}var co=P(io,[["render",uo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const po=K({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:eo,ElRovingFocusGroupImpl:co}});function fo(e,o,s,t,i,c){const r=E("el-roving-focus-group-impl"),l=E("el-focus-group-collection");return D(),Y(l,null,{default:I(()=>[F(r,De(Pe(e.$attrs)),{default:I(()=>[N(e.$slots,"default")]),_:3},16)]),_:3})}var mo=P(po,[["render",fo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const vo=K({components:{ElRovingFocusCollectionItem:oo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:s,loop:t,onItemFocus:i,onItemShiftTab:c}=h(oe,void 0),{getItems:r}=h(ee,void 0),l=fe(),u=C(null),v=R(n=>{o("mousedown",n)},n=>{e.focusable?i(y(l)):n.preventDefault()}),f=R(n=>{o("focus",n)},()=>{i(y(l))}),p=R(n=>{o("keydown",n)},n=>{const{key:d,shiftKey:a,target:w,currentTarget:M}=n;if(d===g.tab&&a){c();return}if(w!==M)return;const $=ro(n);if($){n.preventDefault();let b=r().filter(S=>S.focusable).map(S=>S.ref);switch($){case"last":{b.reverse();break}case"prev":case"next":{$==="prev"&&b.reverse();const S=b.indexOf(M);b=t.value?so(b,S+1):b.slice(S+1);break}}Ke(()=>{ne(b)})}}),_=T(()=>s.value===y(l));return z(we,{rovingFocusGroupItemRef:u,tabIndex:T(()=>y(_)?0:-1),handleMousedown:v,handleFocus:f,handleKeydown:p}),{id:l,handleKeydown:p,handleFocus:f,handleMousedown:v}}});function go(e,o,s,t,i,c){const r=E("el-roving-focus-collection-item");return D(),Y(r,{id:e.id,focusable:e.focusable,active:e.active},{default:I(()=>[N(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var wo=P(vo,[["render",go],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const bo=W({trigger:he.trigger,effect:{...re.effect,default:"light"},type:{type:B(String)},placement:{type:B(String),default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:B([Number,String]),default:0},maxHeight:{type:B([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:B(Object)},teleported:re.teleported}),be=W({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Me}}),Io=W({onKeydown:{type:B(Function)}}),Eo=[g.down,g.pageDown,g.home],Ie=[g.up,g.pageUp,g.end],_o=[...Eo,...Ie],{ElCollection:Co,ElCollectionItem:ho,COLLECTION_INJECTION_KEY:yo,COLLECTION_ITEM_INJECTION_KEY:To}=ge("Dropdown"),q=Symbol("elDropdown"),{ButtonGroup:$o}=ue,Oo=K({name:"ElDropdown",components:{ElButton:ue,ElButtonGroup:$o,ElScrollbar:Oe,ElDropdownCollection:Co,ElTooltip:ye,ElRovingFocusGroup:mo,ElOnlyChild:Te,ElIcon:de,ArrowDown:Le},props:bo,emits:["visible-change","click","command"],setup(e,{emit:o}){const s=ce(),t=x("dropdown"),{t:i}=ke(),c=C(),r=C(),l=C(null),u=C(null),v=C(null),f=C(null),p=C(!1),_=[g.enter,g.space,g.down],n=T(()=>({maxHeight:Ae(e.maxHeight)})),d=T(()=>[t.m(b.value)]),a=fe().value,w=T(()=>e.id||a);function M(){$()}function $(){var m;(m=l.value)==null||m.onClose()}function L(){var m;(m=l.value)==null||m.onOpen()}const b=Ge();function S(...m){o("command",...m)}function O(){}function A(){const m=y(u);m?.focus(),f.value=null}function G(m){f.value=m}function k(m){p.value||(m.preventDefault(),m.stopImmediatePropagation())}function te(){o("visible-change",!0)}function V(m){m?.type==="keydown"&&u.value.focus()}function U(){o("visible-change",!1)}return z(q,{contentRef:u,role:T(()=>e.role),triggerId:w,isUsingKeyboard:p,onItemEnter:O,onItemLeave:A}),z("elDropdown",{instance:s,dropdownSize:b,handleClick:M,commandHandler:S,trigger:J(e,"trigger"),hideOnClick:J(e,"hideOnClick")}),{t:i,ns:t,scrollbar:v,wrapStyle:n,dropdownTriggerKls:d,dropdownSize:b,triggerId:w,triggerKeys:_,currentTabId:f,handleCurrentTabIdChange:G,handlerMainButtonClick:m=>{o("click",m)},handleEntryFocus:k,handleClose:$,handleOpen:L,handleBeforeShowTooltip:te,handleShowTooltip:V,handleBeforeHideTooltip:U,onFocusAfterTrapped:m=>{var Q,le;m.preventDefault(),(le=(Q=u.value)==null?void 0:Q.focus)==null||le.call(Q,{preventScroll:!0})},popperRef:l,contentRef:u,triggeringElementRef:c,referenceElementRef:r}}});function ko(e,o,s,t,i,c){var r;const l=E("el-dropdown-collection"),u=E("el-roving-focus-group"),v=E("el-scrollbar"),f=E("el-only-child"),p=E("el-tooltip"),_=E("el-button"),n=E("arrow-down"),d=E("el-icon"),a=E("el-button-group");return D(),j("div",{class:X([e.ns.b(),e.ns.is("disabled",e.disabled)])},[F(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},ze({content:I(()=>[F(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I(()=>[F(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I(()=>[F(l,null,{default:I(()=>[N(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:I(()=>[F(f,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:I(()=>[N(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(D(),Y(a,{key:0},{default:I(()=>[F(_,H({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I(()=>[N(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),F(_,H({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I(()=>[F(d,{class:X(e.ns.e("icon"))},{default:I(()=>[F(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):Z("v-if",!0)],2)}var Fo=P(Oo,[["render",ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const So=K({name:"DropdownItemImpl",components:{ElIcon:de},props:be,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const s=x("dropdown"),{role:t}=h(q,void 0),{collectionItemRef:i}=h(To,void 0),{collectionItemRef:c}=h(no,void 0),{rovingFocusGroupItemRef:r,tabIndex:l,handleFocus:u,handleKeydown:v,handleMousedown:f}=h(we,void 0),p=me(i,c,r),_=T(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=R(d=>{const{code:a}=d;if(a===g.enter||a===g.space)return d.preventDefault(),d.stopImmediatePropagation(),o("clickimpl",d),!0},v);return{ns:s,itemRef:p,dataset:{[ve]:""},role:_,tabIndex:l,handleFocus:u,handleKeydown:n,handleMousedown:f}}}),Ro=["aria-disabled","tabindex","role"];function No(e,o,s,t,i,c){const r=E("el-icon");return D(),j(Je,null,[e.divided?(D(),j("li",H({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):Z("v-if",!0),Ye("li",H({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=(...l)=>e.handleKeydown&&e.handleKeydown(...l)),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(D(),Y(r,{key:0},{default:I(()=>[(D(),Y(Ue(e.icon)))]),_:1})):Z("v-if",!0),N(e.$slots,"default")],16,Ro)],64)}var Bo=P(So,[["render",No],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Ee=()=>{const e=h("elDropdown",{}),o=T(()=>e?.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Do=K({name:"ElDropdownItem",components:{ElDropdownCollectionItem:ho,ElRovingFocusItem:wo,ElDropdownItemImpl:Bo},inheritAttrs:!1,props:be,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:s}){const{elDropdown:t}=Ee(),i=ce(),c=C(null),r=T(()=>{var n,d;return(d=(n=y(c))==null?void 0:n.textContent)!=null?d:""}),{onItemEnter:l,onItemLeave:u}=h(q,void 0),v=R(n=>(o("pointermove",n),n.defaultPrevented),se(n=>{var d;e.disabled?u(n):(l(n),n.defaultPrevented||(d=n.currentTarget)==null||d.focus())})),f=R(n=>(o("pointerleave",n),n.defaultPrevented),se(n=>{u(n)})),p=R(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var d,a,w;if(e.disabled){n.stopImmediatePropagation();return}(d=t?.hideOnClick)!=null&&d.value&&((a=t.handleClick)==null||a.call(t)),(w=t.commandHandler)==null||w.call(t,e.command,i,n)}),_=T(()=>({...e,...s}));return{handleClick:p,handlePointerMove:v,handlePointerLeave:f,textContent:r,propsAndAttrs:_}}});function Po(e,o,s,t,i,c){var r;const l=E("el-dropdown-item-impl"),u=E("el-roving-focus-item"),v=E("el-dropdown-collection-item");return D(),Y(v,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:I(()=>[F(u,{focusable:!e.disabled},{default:I(()=>[F(l,H(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I(()=>[N(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var _e=P(Do,[["render",Po],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Ko=K({name:"ElDropdownMenu",props:Io,setup(e){const o=x("dropdown"),{_elDropdownSize:s}=Ee(),t=s.value,{focusTrapRef:i,onKeydown:c}=h($e,void 0),{contentRef:r,role:l,triggerId:u}=h(q,void 0),{collectionRef:v,getItems:f}=h(yo,void 0),{rovingFocusGroupRef:p,rovingFocusGroupRootStyle:_,tabIndex:n,onBlur:d,onFocus:a,onMousedown:w}=h(oe,void 0),{collectionRef:M}=h(ee,void 0),$=T(()=>[o.b("menu"),o.bm("menu",t?.value)]),L=me(r,v,i,p,M),b=R(O=>{var A;(A=e.onKeydown)==null||A.call(e,O)},O=>{const{currentTarget:A,code:G,target:k}=O;if(A.contains(k),g.tab===G&&O.stopImmediatePropagation(),O.preventDefault(),k!==y(r)||!_o.includes(G))return;const V=f().filter(U=>!U.disabled).map(U=>U.ref);Ie.includes(G)&&V.reverse(),ne(V)});return{size:t,rovingFocusGroupRootStyle:_,tabIndex:n,dropdownKls:$,role:l,triggerId:u,dropdownListWrapperRef:L,handleKeydown:O=>{b(O),c(O)},onBlur:d,onFocus:a,onMousedown:w}}}),Mo=["role","aria-labelledby"];function Lo(e,o,s,t,i,c){return D(),j("ul",{ref:e.dropdownListWrapperRef,class:X(e.dropdownKls),style:He(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=(...r)=>e.handleKeydown&&e.handleKeydown(...r)),onMousedown:o[3]||(o[3]=(...r)=>e.onMousedown&&e.onMousedown(...r))},[N(e.$slots,"default")],46,Mo)}var Ce=P(Ko,[["render",Lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const jo=Ve(Fo,{DropdownItem:_e,DropdownMenu:Ce}),Wo=pe(_e),qo=pe(Ce);export{Wo as E,qo as a,jo as b};
