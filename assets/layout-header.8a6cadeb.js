import{k as ve,W as Ne,E as Be,A as Se,X as Ye,J as he,O as K,Y as Ue,Z as ue,Q as G,C as re,M as fe,h as ye,d as r,m as U,_ as ze,$ as qe,i as B,z as Xe,c as A,a0 as Ke,a1 as Ce,g as I,o as u,b as E,w as i,G as te,H as ne,I as v,n as m,l as g,a2 as F,f as _,p as me,q as J,T as Ie,a3 as We,v as je,S as Le,a4 as Ge,a5 as Ze,r as x,a6 as ee,a7 as X,a8 as Je,a9 as se,aa as Ae,ab as we,V as Qe,u as xe,ac as eo,e as oe,L as de,ad as oo,ae as to}from"./index.deda38a7.js";import{E as no}from"./el-link.64f54e05.js";import{U as Te,u as so,E as lo}from"./el-button.41d860a0.js";import{u as Oe}from"./el-popper.b24014d5.js";import{E as ao,a as ro,b as io}from"./el-dropdown-item.61e45a58.js";import{P as ce,E as uo}from"./el-space.81ff4bb5.js";import"./el-tooltip.89296c46.js";import{o as Ee,a as co,E as fo}from"./el-menu-item.3f7354e0.js";/* empty css                */import{_ as mo}from"./svg-icon.bbb3e41c.js";import po from"./header-logo.ef1acf83.js";import vo from"./header-settings.5ad7742b.js";import{a as le,h as _e,g as ho,b as yo,r as go,E as ge,d as bo,i as Co}from"./index.8904e04f.js";import{u as ie,d as wo}from"./index.4331a0ad.js";import{i as Eo,T as _o,a as Me}from"./icon.d9e9a8c2.js";import{_ as De}from"./plugin-vue_export-helper.a0554eae.js";import{E as Ve}from"./index.dc85d0c6.js";import{t as Mo,E as ko,u as Re,a as ae}from"./index.b3ad05d2.js";import{g as $o,i as Bo}from"./el-select.2233287a.js";import{E as So,a as ke}from"./el-form-item.c3e02849.js";const zo=(e,o,s)=>{let l={offsetX:0,offsetY:0};const n=c=>{const p=c.clientX,C=c.clientY,{offsetX:w,offsetY:h}=l,d=e.value.getBoundingClientRect(),b=d.left,T=d.top,$=d.width,L=d.height,O=document.documentElement.clientWidth,N=document.documentElement.clientHeight,V=-b+w,M=-T+h,S=O-b-$+w,R=N-T-L+h,D=y=>{const W=Math.min(Math.max(w+y.clientX-p,V),S),Y=Math.min(Math.max(h+y.clientY-C,M),R);l={offsetX:W,offsetY:Y},e.value.style.transform=`translate(${le(W)}, ${le(Y)})`},k=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",k)},a=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",n)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",n)};ve(()=>{Ne(()=>{s.value?a():t()})}),Be(()=>{t()})},Pe=e=>{Se(e)||Mo("[useLockscreen]","You need to pass a ref param to this function");const o=ie("popup"),s=Ye(()=>o.bm("parent","hidden"));if(!he||_e(document.body,s.value))return;let l=0,n=!1,a="0";const t=()=>{go(document.body,s.value),n&&(document.body.style.width=a)};K(e,c=>{if(!c){t();return}n=!_e(document.body,s.value),n&&(a=document.body.style.width),l=$o(o.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,C=ho(document.body,"overflowY");l>0&&(p||C==="scroll")&&n&&(document.body.style.width=`calc(100% - ${l}px)`),yo(document.body,s.value)}),Ue(()=>t())},Io=(e,o)=>{let s;K(()=>e.value,l=>{var n,a;l?(s=document.activeElement,Se(o)&&((a=(n=o.value).focus)==null||a.call(n))):s.focus()})},He=e=>{if(!e)return{onClick:ue,onMousedown:ue,onMouseup:ue};let o=!1,s=!1;return{onClick:t=>{o&&s&&e(t),o=s=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{s=t.target===t.currentTarget}}},pe="_trap-focus-children",q=[],$e=e=>{if(q.length===0)return;const o=q[q.length-1][pe];if(o.length>0&&e.code===ko.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const s=e.shiftKey,l=e.target===o[0],n=e.target===o[o.length-1];l&&s&&(e.preventDefault(),o[o.length-1].focus()),n&&!s&&(e.preventDefault(),o[0].focus())}},Lo={beforeMount(e){e[pe]=Ee(e),q.push(e),q.length<=1&&document.addEventListener("keydown",$e)},updated(e){G(()=>{e[pe]=Ee(e)})},unmounted(){q.shift(),q.length===0&&document.removeEventListener("keydown",$e)}},Ao=re({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:fe([String,Array,Object])},zIndex:{type:fe([String,Number])}}),To={click:e=>e instanceof MouseEvent};var Oo=ye({name:"ElOverlay",props:Ao,emits:To,setup(e,{slots:o,emit:s}){const l=ie("overlay"),n=p=>{s("click",p)},{onClick:a,onMousedown:t,onMouseup:c}=He(e.customMaskEvent?void 0:n);return()=>e.mask?r("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:c},[U(o,"default")],ce.STYLE|ce.CLASS|ce.PROPS,["onClick","onMouseup","onMousedown"]):ze("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[U(o,"default")])}});const Fe=Oo,Do=re({center:{type:Boolean,default:!1},closeIcon:{type:Eo,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Vo=re({...Do,appendToBody:{type:Boolean,default:!1},beforeClose:{type:fe(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Ro={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Te]:e=>qe(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Po=(e,o)=>{const l=Ke().emit,{nextZIndex:n}=Re();let a="";const t=ae(),c=ae(),p=B(!1),C=B(!1),w=B(!1),h=B(e.zIndex||n());let d,b;const T=Xe("namespace",wo),$=A(()=>{const z={},f=`--${T.value}-dialog`;return e.fullscreen||(e.top&&(z[`${f}-margin-top`]=e.top),e.width&&(z[`${f}-width`]=le(e.width))),z});function L(){l("opened")}function O(){l("closed"),l(Te,!1),e.destroyOnClose&&(w.value=!1)}function N(){l("close")}function V(){b?.(),d?.(),e.openDelay&&e.openDelay>0?{stop:d}=Ce(()=>D(),e.openDelay):D()}function M(){d?.(),b?.(),e.closeDelay&&e.closeDelay>0?{stop:b}=Ce(()=>k(),e.closeDelay):k()}function S(){function z(f){f||(C.value=!0,p.value=!1)}e.beforeClose?e.beforeClose(z):M()}function R(){e.closeOnClickModal&&S()}function D(){!he||(p.value=!0)}function k(){p.value=!1}function y(){l("openAutoFocus")}function W(){l("closeAutoFocus")}e.lockScroll&&Pe(p);function Y(){e.closeOnPressEscape&&S()}return K(()=>e.modelValue,z=>{z?(C.value=!1,V(),w.value=!0,h.value=e.zIndex?h.value++:n(),G(()=>{l("open"),o.value&&(o.value.scrollTop=0)})):p.value&&M()}),K(()=>e.fullscreen,z=>{!o.value||(z?(a=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=a)}),ve(()=>{e.modelValue&&(p.value=!0,w.value=!0,V())}),{afterEnter:L,afterLeave:O,beforeLeave:N,handleClose:S,onModalClick:R,close:M,doClose:k,onOpenAutoFocus:y,onCloseAutoFocus:W,onCloseRequested:Y,titleId:t,bodyId:c,closed:C,style:$,rendered:w,visible:p,zIndex:h}},Ho=re({...Vo,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),Fo=Ro,No=ye({name:"ElDrawer",components:{ElOverlay:Fe,ElFocusTrap:Ve,ElIcon:ge,Close:bo},props:Ho,emits:Fo,setup(e,{slots:o}){so({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},A(()=>!!o.title));const s=B(),l=B(),n=ie("drawer"),{t:a}=Oe(),t=A(()=>e.direction==="rtl"||e.direction==="ltr"),c=A(()=>le(e.size));return{...Po(e,s),drawerRef:s,focusStartRef:l,isHorizontal:t,drawerSize:c,ns:n,t:a}}}),Yo=["aria-label","aria-labelledby","aria-describedby"],Uo=["id"],qo=["aria-label"],Xo=["id"];function Ko(e,o,s,l,n,a){const t=I("close"),c=I("el-icon"),p=I("el-focus-trap"),C=I("el-overlay");return u(),E(We,{to:"body",disabled:!e.appendToBody},[r(Ie,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:i(()=>[te(r(C,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:i(()=>[r(p,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:i(()=>[v("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:m([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:me(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:o[1]||(o[1]=J(()=>{},["stop"]))},[v("span",{ref:"focusStartRef",class:m(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(u(),g("header",{key:0,class:m(e.ns.e("header"))},[e.$slots.title?U(e.$slots,"title",{key:1},()=>[_(" DEPRECATED SLOT ")]):U(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?_("v-if",!0):(u(),g("span",{key:0,id:e.titleId,role:"heading",class:m(e.ns.e("title"))},F(e.title),11,Uo))]),e.showClose?(u(),g("button",{key:2,"aria-label":e.t("el.drawer.close"),class:m(e.ns.e("close-btn")),type:"button",onClick:o[0]||(o[0]=(...w)=>e.handleClose&&e.handleClose(...w))},[r(c,{class:m(e.ns.e("close"))},{default:i(()=>[r(t)]),_:1},8,["class"])],10,qo)):_("v-if",!0)],2)):_("v-if",!0),e.rendered?(u(),g("div",{key:1,id:e.bodyId,class:m(e.ns.e("body"))},[U(e.$slots,"default")],10,Xo)):_("v-if",!0),e.$slots.footer?(u(),g("div",{key:2,class:m(e.ns.e("footer"))},[U(e.$slots,"footer")],2)):_("v-if",!0)],14,Yo)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[ne,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var Wo=De(No,[["render",Ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const jo=je(Wo),Go=ye({name:"ElMessageBox",directives:{TrapFocus:Lo},components:{ElButton:lo,ElFocusTrap:Ve,ElInput:So,ElOverlay:Fe,ElIcon:ge,..._o},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Bo},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{t:s}=Oe(),l=ie("message-box"),n=B(!1),{nextZIndex:a}=Re(),t=Le({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:a()}),c=A(()=>{const f=t.type;return{[l.bm("icon",f)]:f&&Me[f]}}),p=ae(),C=ae(),w=Ge(A(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),h=A(()=>t.icon||Me[t.type]||""),d=A(()=>!!t.message),b=B(),T=B(),$=B(),L=B(),O=B(),N=A(()=>t.confirmButtonClass);K(()=>t.inputValue,async f=>{await G(),e.boxType==="prompt"&&f!==null&&y()},{immediate:!0}),K(()=>n.value,f=>{var P,j;f&&(e.boxType!=="prompt"&&(t.autofocus?$.value=(j=(P=O.value)==null?void 0:P.$el)!=null?j:b.value:$.value=b.value),t.zIndex=a()),e.boxType==="prompt"&&(f?G().then(()=>{var be;L.value&&L.value.$el&&(t.autofocus?$.value=(be=W())!=null?be:b.value:$.value=b.value)}):(t.editorErrorMessage="",t.validateError=!1))});const V=A(()=>e.draggable);zo(b,T,V),ve(async()=>{await G(),e.closeOnHashChange&&window.addEventListener("hashchange",M)}),Be(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",M)});function M(){!n.value||(n.value=!1,G(()=>{t.action&&o("action",t.action)}))}const S=()=>{e.closeOnClickModal&&k(t.distinguishCancelAndClose?"close":"cancel")},R=He(S),D=f=>{if(t.inputType!=="textarea")return f.preventDefault(),k("confirm")},k=f=>{var P;e.boxType==="prompt"&&f==="confirm"&&!y()||(t.action=f,t.beforeClose?(P=t.beforeClose)==null||P.call(t,f,t,M):M())},y=()=>{if(e.boxType==="prompt"){const f=t.inputPattern;if(f&&!f.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||s("el.messagebox.error"),t.validateError=!0,!1;const P=t.inputValidator;if(typeof P=="function"){const j=P(t.inputValue);if(j===!1)return t.editorErrorMessage=t.inputErrorMessage||s("el.messagebox.error"),t.validateError=!0,!1;if(typeof j=="string")return t.editorErrorMessage=j,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},W=()=>{const f=L.value.$refs;return f.input||f.textarea},Y=()=>{k("close")},z=()=>{e.closeOnPressEscape&&Y()};return e.lockScroll&&Pe(n),Io(n),{...Ze(t),ns:l,overlayEvent:R,visible:n,hasMessage:d,typeClass:c,contentId:p,inputId:C,btnSize:w,iconComponent:h,confirmButtonClasses:N,rootRef:b,focusStartRef:$,headerRef:T,inputRef:L,confirmRef:O,doClose:M,handleClose:Y,onCloseRequested:z,handleWrapperClick:S,handleInputEnter:D,handleAction:k,t:s}}}),Zo=["aria-label","aria-describedby"],Jo=["aria-label"],Qo=["id"];function xo(e,o,s,l,n,a){const t=I("el-icon"),c=I("close"),p=I("el-input"),C=I("el-button"),w=I("el-focus-trap"),h=I("el-overlay");return u(),E(Ie,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=d=>e.$emit("vanish")),persisted:""},{default:i(()=>[te(r(h,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:i(()=>[v("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:m(`${e.ns.namespace.value}-overlay-message-box`),onClick:o[8]||(o[8]=(...d)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...d)),onMousedown:o[9]||(o[9]=(...d)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...d)),onMouseup:o[10]||(o[10]=(...d)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...d))},[r(w,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:i(()=>[v("div",{ref:"rootRef",class:m([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:me(e.customStyle),tabindex:"-1",onClick:o[7]||(o[7]=J(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(u(),g("div",{key:0,ref:"headerRef",class:m(e.ns.e("header"))},[v("div",{class:m(e.ns.e("title"))},[e.iconComponent&&e.center?(u(),E(t,{key:0,class:m([e.ns.e("status"),e.typeClass])},{default:i(()=>[(u(),E(x(e.iconComponent)))]),_:1},8,["class"])):_("v-if",!0),v("span",null,F(e.title),1)],2),e.showClose?(u(),g("button",{key:0,type:"button",class:m(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:o[0]||(o[0]=d=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=ee(J(d=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[r(t,{class:m(e.ns.e("close"))},{default:i(()=>[r(c)]),_:1},8,["class"])],42,Jo)):_("v-if",!0)],2)):_("v-if",!0),v("div",{id:e.contentId,class:m(e.ns.e("content"))},[v("div",{class:m(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(u(),E(t,{key:0,class:m([e.ns.e("status"),e.typeClass])},{default:i(()=>[(u(),E(x(e.iconComponent)))]),_:1},8,["class"])):_("v-if",!0),e.hasMessage?(u(),g("div",{key:1,class:m(e.ns.e("message"))},[U(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(u(),E(x(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(u(),E(x(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:i(()=>[X(F(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):_("v-if",!0)],2),te(v("div",{class:m(e.ns.e("input"))},[r(p,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=d=>e.inputValue=d),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:m({invalid:e.validateError}),onKeydown:ee(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),v("div",{class:m(e.ns.e("errormsg")),style:me({visibility:e.editorErrorMessage?"visible":"hidden"})},F(e.editorErrorMessage),7)],2),[[ne,e.showInput]])],10,Qo),v("div",{class:m(e.ns.e("btns"))},[e.showCancelButton?(u(),E(C,{key:0,loading:e.cancelButtonLoading,class:m([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=d=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=ee(J(d=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:i(()=>[X(F(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):_("v-if",!0),te(r(C,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:m([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=d=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=ee(J(d=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:i(()=>[X(F(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ne,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Zo)]),_:3},8,["z-index","overlay-class","mask"]),[[ne,e.visible]])]),_:3})}var et=De(Go,[["render",xo],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const Q=new Map,ot=(e,o,s=null)=>{const l=ze(et,e);return l.appContext=s,Ae(l,o),document.body.appendChild(o.firstElementChild),l.component},tt=()=>document.createElement("div"),nt=(e,o)=>{const s=tt();e.onVanish=()=>{Ae(null,s),Q.delete(n)},e.onAction=a=>{const t=Q.get(n);let c;e.showInput?c={value:n.inputValue,action:a}:c=a,e.callback?e.callback(c,l.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?t.reject("close"):t.reject("cancel"):t.resolve(c)};const l=ot(e,s,o),n=l.proxy;for(const a in e)we(e,a)&&!we(n.$props,a)&&(n[a]=e[a]);return K(()=>n.message,(a,t)=>{se(a)?l.slots.default=()=>[a]:se(t)&&!se(a)&&delete l.slots.default},{immediate:!0}),n.visible=!0,n};function Z(e,o=null){if(!he)return Promise.reject();let s;return Je(e)||se(e)?e={message:e}:s=e.callback,new Promise((l,n)=>{const a=nt(e,o??Z._context);Q.set(a,{options:e,callback:s,resolve:l,reject:n})})}const st=["alert","confirm","prompt"],lt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};st.forEach(e=>{Z[e]=at(e)});function at(e){return(o,s,l,n)=>{let a="";return Qe(s)?(l=s,a=""):Co(s)?a="":a=s,Z(Object.assign({title:a,message:o,type:"",...lt[e]},l,{boxType:e}),n)}}Z.close=()=>{Q.forEach((e,o)=>{o.doClose()}),Q.clear()};Z._context=null;const H=Z;H.install=e=>{H._context=e._context,e.config.globalProperties.$msgbox=H,e.config.globalProperties.$messageBox=H,e.config.globalProperties.$alert=H.alert,e.config.globalProperties.$confirm=H.confirm,e.config.globalProperties.$prompt=H.prompt};const rt=H;const it={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ut=v("path",{fill:"currentColor",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"},null,-1),dt=[ut];function ct(e,o){return u(),g("svg",it,dt)}const ft={name:"ep-setting",render:ct},mt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},pt=v("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),vt=v("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1),ht=[pt,vt];function yt(e,o){return u(),g("svg",mt,ht)}const gt={name:"ep-switch-button",render:yt},bt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ct=v("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1),wt=[Ct];function Et(e,o){return u(),g("svg",bt,wt)}const _t={name:"ep-user",render:Et},Mt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},kt=v("path",{fill:"currentColor",d:"M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"},null,-1),$t=[kt];function Bt(e,o){return u(),g("svg",Mt,$t)}const St={name:"ep-arrow-down",render:Bt},zt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},It=v("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384L128 512l192 128V384z"},null,-1),Lt=[It];function At(e,o){return u(),g("svg",zt,Lt)}const Tt={name:"ep-fold",render:At},Ot={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Dt=v("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160l-192 128V352z"},null,-1),Vt=[Dt];function Rt(e,o){return u(),g("svg",Ot,Vt)}const Pt={name:"ep-expand",render:Rt};const Ht={class:"between"},Ft={class:"between"},Nt={key:0,class:"center"},Yt={class:"between"},Ut=["src"],qt=X("\u4E2A\u4EBA\u4E2D\u5FC3 "),Xt=X("\u9000\u51FA\u767B\u5F55 "),Kt=X(" \u767B\u5F55 "),Wt=X("\u6CE8\u518C"),vn={__name:"layout-header",props:{hasAside:{type:Boolean,default:!1}},setup(e){const o=Le({show:!1,toggle(){this.show=!this.show}}),s=xe(),l=()=>s.menuCollapse=!s.menuCollapse,n=eo(),a=to(),t=async()=>{try{await rt.confirm("\u786E\u8BA4\u9000\u51FA\uFF1F","\u63D0\u793A",{type:"warning"}),await n.logout(),ke({type:"success",message:"\u9000\u51FA\u6210\u529F"}),a.push("/login")}catch(c){console.log(c),ke({type:"info",message:"\u9000\u51FA\u53D6\u6D88"})}};return(c,p)=>{const C=Pt,w=Tt,h=ge,d=co,b=fo,T=St,$=uo,L=_t,O=ao,N=gt,V=ro,M=io,S=I("router-link"),R=no,D=ft,k=jo;return u(),g(de,null,[v("div",Ht,[v("div",Ft,[r(po,{"has-aside":e.hasAside},null,8,["has-aside"]),e.hasAside?(u(),g("div",Nt,[r(h,{size:18,class:"cursor-pointer",onClick:l},{default:i(()=>[oe(s).menuCollapse?(u(),E(C,{key:0})):(u(),E(w,{key:1}))]),_:1})])):_("",!0),r(b,{mode:"horizontal","default-active":c.$route.matched[0].path,ellipsis:!1,router:""},{default:i(()=>[(u(!0),g(de,null,oo(c.$router.options.routes,y=>(u(),g(de,null,[y.meta?.hide?_("",!0):(u(),E(d,{key:y.path,index:y.path},{title:i(()=>[y.meta.icon?(u(),E(h,{key:0},{default:i(()=>[r(mo,{name:y.meta.icon},null,8,["name"])]),_:2},1024)):_("",!0),v("span",null,F(y.meta?.title??y.path),1)]),_:2},1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),v("div",Yt,[oe(n).token?(u(),E(M,{key:0,class:"cursor-pointer"},{dropdown:i(()=>[r(V,null,{default:i(()=>[r(O,null,{default:i(()=>[r(h,null,{default:i(()=>[r(L)]),_:1}),qt]),_:1}),r(O,{divided:"",onClick:t},{default:i(()=>[r(h,null,{default:i(()=>[r(N)]),_:1}),Xt]),_:1})]),_:1})]),default:i(()=>[r($,null,{default:i(()=>[r(h,{size:18},{default:i(()=>[v("img",{src:oe(n).avatar,class:"h-full"},null,8,Ut)]),_:1}),v("span",null,F(oe(n).name),1),r(h,null,{default:i(()=>[r(T)]),_:1})]),_:1})]),_:1})):(u(),E($,{key:1,size:20},{default:i(()=>[r(R,{type:"info"},{default:i(()=>[r(S,{class:"router-link",to:{path:"/login",query:{redirect:c.$route.fullPath}}},{default:i(()=>[Kt]),_:1},8,["to"])]),_:1}),r(R,{type:"info"},{default:i(()=>[r(S,{class:"router-link",to:"/register"},{default:i(()=>[Wt]),_:1})]),_:1})]),_:1})),r(h,{size:18,class:"cursor-pointer",onClick:p[0]||(p[0]=y=>o.toggle())},{default:i(()=>[r(D)]),_:1})])]),r(k,{modelValue:o.show,"onUpdate:modelValue":p[1]||(p[1]=y=>o.show=y),title:"\u9875\u9762\u914D\u7F6E","append-to-body":"","destroy-on-close":"",size:"auto"},{default:i(()=>[r(vo)]),_:1},8,["modelValue"])],64)}}};export{vn as default};
