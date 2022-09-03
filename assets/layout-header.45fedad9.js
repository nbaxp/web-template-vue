import{l as ve,X as Ye,F as Se,B as ze,Y as Ue,L as he,P as j,Z as qe,_ as de,R as G,D as ie,N as fe,i as ye,d as r,p as K,$ as Ie,a0 as Xe,j as $,A as Ke,c as O,a1 as We,a2 as Ce,h as A,o as u,b as w,w as i,H as ne,I as se,J as m,n as f,m as b,a3 as D,f as E,q as me,t as x,T as Le,a4 as je,x as Ze,U as Ae,a5 as Ge,a6 as Je,r as oe,a7 as te,a8 as q,a9 as Qe,aa as le,ab as Te,ac as we,W as xe,u as eo,ad as oo,M as Q,e as H,ae as Ee,g as to,af as no}from"./index.b2875c3e.js";import{E as so}from"./el-link.76f93206.js";import{U as Re,u as lo,E as ao}from"./el-button.157702e2.js";import{u as Oe}from"./el-popper.dd060cec.js";import{E as ro,a as io,b as uo}from"./el-dropdown-item.b75fbef8.js";import{P as ce,E as co}from"./el-space.6432a772.js";import"./el-tooltip.89296c46.js";import{o as _e,a as fo,E as mo}from"./el-menu-item.9e4cfd7c.js";/* empty css                */import{_ as po}from"./svg-icon.1bc99cb2.js";import vo from"./header-logo.ddcba485.js";import ho from"./header-settings.70cd64ea.js";import{a as ae,h as Me,g as yo,b as go,r as bo,E as ge,d as Co,i as wo}from"./index.4d993eb4.js";import{u as ue,d as Eo}from"./index.38fcb330.js";import{i as _o,T as Mo,a as ke}from"./icon.68a11d83.js";import{_ as De}from"./plugin-vue_export-helper.a0554eae.js";import{E as Pe}from"./index.240e55c8.js";import{t as ko,E as $o,u as Ve,a as re}from"./index.89744426.js";import{g as Bo,i as So}from"./el-select.9f4b3270.js";import{E as zo,a as $e}from"./el-form-item.2647fa6b.js";const Io=(e,o,s)=>{let n={offsetX:0,offsetY:0};const l=h=>{const g=h.clientX,y=h.clientY,{offsetX:C,offsetY:M}=n,d=e.value.getBoundingClientRect(),p=d.left,P=d.top,B=d.width,S=d.height,z=document.documentElement.clientWidth,X=document.documentElement.clientHeight,T=-p+C,k=-P+M,I=z-p-B+C,F=X-P-S+M,R=V=>{const N=Math.min(Math.max(C+V.clientX-g,T),I),v=Math.min(Math.max(M+V.clientY-y,k),F);n={offsetX:N,offsetY:v},e.value.style.transform=`translate(${ae(N)}, ${ae(v)})`},_=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",_)},a=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",l)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",l)};ve(()=>{Ye(()=>{s.value?a():t()})}),Se(()=>{t()})},He=e=>{ze(e)||ko("[useLockscreen]","You need to pass a ref param to this function");const o=ue("popup"),s=Ue(()=>o.bm("parent","hidden"));if(!he||Me(document.body,s.value))return;let n=0,l=!1,a="0";const t=()=>{bo(document.body,s.value),l&&(document.body.style.width=a)};j(e,h=>{if(!h){t();return}l=!Me(document.body,s.value),l&&(a=document.body.style.width),n=Bo(o.namespace.value);const g=document.documentElement.clientHeight<document.body.scrollHeight,y=yo(document.body,"overflowY");n>0&&(g||y==="scroll")&&l&&(document.body.style.width=`calc(100% - ${n}px)`),go(document.body,s.value)}),qe(()=>t())},Lo=(e,o)=>{let s;j(()=>e.value,n=>{var l,a;n?(s=document.activeElement,ze(o)&&((a=(l=o.value).focus)==null||a.call(l))):s.focus()})},Fe=e=>{if(!e)return{onClick:de,onMousedown:de,onMouseup:de};let o=!1,s=!1;return{onClick:t=>{o&&s&&e(t),o=s=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{s=t.target===t.currentTarget}}},pe="_trap-focus-children",W=[],Be=e=>{if(W.length===0)return;const o=W[W.length-1][pe];if(o.length>0&&e.code===$o.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const s=e.shiftKey,n=e.target===o[0],l=e.target===o[o.length-1];n&&s&&(e.preventDefault(),o[o.length-1].focus()),l&&!s&&(e.preventDefault(),o[0].focus())}},Ao={beforeMount(e){e[pe]=_e(e),W.push(e),W.length<=1&&document.addEventListener("keydown",Be)},updated(e){G(()=>{e[pe]=_e(e)})},unmounted(){W.shift(),W.length===0&&document.removeEventListener("keydown",Be)}},To=ie({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:fe([String,Array,Object])},zIndex:{type:fe([String,Number])}}),Ro={click:e=>e instanceof MouseEvent};var Oo=ye({name:"ElOverlay",props:To,emits:Ro,setup(e,{slots:o,emit:s}){const n=ue("overlay"),l=g=>{s("click",g)},{onClick:a,onMousedown:t,onMouseup:h}=Fe(e.customMaskEvent?void 0:l);return()=>e.mask?r("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:h},[K(o,"default")],ce.STYLE|ce.CLASS|ce.PROPS,["onClick","onMouseup","onMousedown"]):Ie("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[K(o,"default")])}});const Ne=Oo,Do=ie({center:{type:Boolean,default:!1},closeIcon:{type:_o,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Po=ie({...Do,appendToBody:{type:Boolean,default:!1},beforeClose:{type:fe(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Vo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Re]:e=>Xe(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ho=(e,o)=>{const n=We().emit,{nextZIndex:l}=Ve();let a="";const t=re(),h=re(),g=$(!1),y=$(!1),C=$(!1),M=$(e.zIndex||l());let d,p;const P=Ke("namespace",Eo),B=O(()=>{const L={},c=`--${P.value}-dialog`;return e.fullscreen||(e.top&&(L[`${c}-margin-top`]=e.top),e.width&&(L[`${c}-width`]=ae(e.width))),L});function S(){n("opened")}function z(){n("closed"),n(Re,!1),e.destroyOnClose&&(C.value=!1)}function X(){n("close")}function T(){p?.(),d?.(),e.openDelay&&e.openDelay>0?{stop:d}=Ce(()=>R(),e.openDelay):R()}function k(){d?.(),p?.(),e.closeDelay&&e.closeDelay>0?{stop:p}=Ce(()=>_(),e.closeDelay):_()}function I(){function L(c){c||(y.value=!0,g.value=!1)}e.beforeClose?e.beforeClose(L):k()}function F(){e.closeOnClickModal&&I()}function R(){!he||(g.value=!0)}function _(){g.value=!1}function V(){n("openAutoFocus")}function N(){n("closeAutoFocus")}e.lockScroll&&He(g);function v(){e.closeOnPressEscape&&I()}return j(()=>e.modelValue,L=>{L?(y.value=!1,T(),C.value=!0,M.value=e.zIndex?M.value++:l(),G(()=>{n("open"),o.value&&(o.value.scrollTop=0)})):g.value&&k()}),j(()=>e.fullscreen,L=>{!o.value||(L?(a=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=a)}),ve(()=>{e.modelValue&&(g.value=!0,C.value=!0,T())}),{afterEnter:S,afterLeave:z,beforeLeave:X,handleClose:I,onModalClick:F,close:k,doClose:_,onOpenAutoFocus:V,onCloseAutoFocus:N,onCloseRequested:v,titleId:t,bodyId:h,closed:y,style:B,rendered:C,visible:g,zIndex:M}},Fo=ie({...Po,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),No=Vo,Yo=ye({name:"ElDrawer",components:{ElOverlay:Ne,ElFocusTrap:Pe,ElIcon:ge,Close:Co},props:Fo,emits:No,setup(e,{slots:o}){lo({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},O(()=>!!o.title));const s=$(),n=$(),l=ue("drawer"),{t:a}=Oe(),t=O(()=>e.direction==="rtl"||e.direction==="ltr"),h=O(()=>ae(e.size));return{...Ho(e,s),drawerRef:s,focusStartRef:n,isHorizontal:t,drawerSize:h,ns:l,t:a}}}),Uo=["aria-label","aria-labelledby","aria-describedby"],qo=["id"],Xo=["aria-label"],Ko=["id"];function Wo(e,o,s,n,l,a){const t=A("close"),h=A("el-icon"),g=A("el-focus-trap"),y=A("el-overlay");return u(),w(je,{to:"body",disabled:!e.appendToBody},[r(Le,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:i(()=>[ne(r(y,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:i(()=>[r(g,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:i(()=>[m("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:f([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:me(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:o[1]||(o[1]=x(()=>{},["stop"]))},[m("span",{ref:"focusStartRef",class:f(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(u(),b("header",{key:0,class:f(e.ns.e("header"))},[e.$slots.title?K(e.$slots,"title",{key:1},()=>[E(" DEPRECATED SLOT ")]):K(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?E("v-if",!0):(u(),b("span",{key:0,id:e.titleId,role:"heading",class:f(e.ns.e("title"))},D(e.title),11,qo))]),e.showClose?(u(),b("button",{key:2,"aria-label":e.t("el.drawer.close"),class:f(e.ns.e("close-btn")),type:"button",onClick:o[0]||(o[0]=(...C)=>e.handleClose&&e.handleClose(...C))},[r(h,{class:f(e.ns.e("close"))},{default:i(()=>[r(t)]),_:1},8,["class"])],10,Xo)):E("v-if",!0)],2)):E("v-if",!0),e.rendered?(u(),b("div",{key:1,id:e.bodyId,class:f(e.ns.e("body"))},[K(e.$slots,"default")],10,Ko)):E("v-if",!0),e.$slots.footer?(u(),b("div",{key:2,class:f(e.ns.e("footer"))},[K(e.$slots,"footer")],2)):E("v-if",!0)],14,Uo)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[se,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var jo=De(Yo,[["render",Wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const Zo=Ze(jo),Go=ye({name:"ElMessageBox",directives:{TrapFocus:Ao},components:{ElButton:ao,ElFocusTrap:Pe,ElInput:zo,ElOverlay:Ne,ElIcon:ge,...Mo},inheritAttrs:!1,props:{buttonSize:{type:String,validator:So},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{t:s}=Oe(),n=ue("message-box"),l=$(!1),{nextZIndex:a}=Ve(),t=Ae({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:a()}),h=O(()=>{const c=t.type;return{[n.bm("icon",c)]:c&&ke[c]}}),g=re(),y=re(),C=Ge(O(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),M=O(()=>t.icon||ke[t.type]||""),d=O(()=>!!t.message),p=$(),P=$(),B=$(),S=$(),z=$(),X=O(()=>t.confirmButtonClass);j(()=>t.inputValue,async c=>{await G(),e.boxType==="prompt"&&c!==null&&V()},{immediate:!0}),j(()=>l.value,c=>{var Y,Z;c&&(e.boxType!=="prompt"&&(t.autofocus?B.value=(Z=(Y=z.value)==null?void 0:Y.$el)!=null?Z:p.value:B.value=p.value),t.zIndex=a()),e.boxType==="prompt"&&(c?G().then(()=>{var be;S.value&&S.value.$el&&(t.autofocus?B.value=(be=N())!=null?be:p.value:B.value=p.value)}):(t.editorErrorMessage="",t.validateError=!1))});const T=O(()=>e.draggable);Io(p,P,T),ve(async()=>{await G(),e.closeOnHashChange&&window.addEventListener("hashchange",k)}),Se(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",k)});function k(){!l.value||(l.value=!1,G(()=>{t.action&&o("action",t.action)}))}const I=()=>{e.closeOnClickModal&&_(t.distinguishCancelAndClose?"close":"cancel")},F=Fe(I),R=c=>{if(t.inputType!=="textarea")return c.preventDefault(),_("confirm")},_=c=>{var Y;e.boxType==="prompt"&&c==="confirm"&&!V()||(t.action=c,t.beforeClose?(Y=t.beforeClose)==null||Y.call(t,c,t,k):k())},V=()=>{if(e.boxType==="prompt"){const c=t.inputPattern;if(c&&!c.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||s("el.messagebox.error"),t.validateError=!0,!1;const Y=t.inputValidator;if(typeof Y=="function"){const Z=Y(t.inputValue);if(Z===!1)return t.editorErrorMessage=t.inputErrorMessage||s("el.messagebox.error"),t.validateError=!0,!1;if(typeof Z=="string")return t.editorErrorMessage=Z,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},N=()=>{const c=S.value.$refs;return c.input||c.textarea},v=()=>{_("close")},L=()=>{e.closeOnPressEscape&&v()};return e.lockScroll&&He(l),Lo(l),{...Je(t),ns:n,overlayEvent:F,visible:l,hasMessage:d,typeClass:h,contentId:g,inputId:y,btnSize:C,iconComponent:M,confirmButtonClasses:X,rootRef:p,focusStartRef:B,headerRef:P,inputRef:S,confirmRef:z,doClose:k,handleClose:v,onCloseRequested:L,handleWrapperClick:I,handleInputEnter:R,handleAction:_,t:s}}}),Jo=["aria-label","aria-describedby"],Qo=["aria-label"],xo=["id"];function et(e,o,s,n,l,a){const t=A("el-icon"),h=A("close"),g=A("el-input"),y=A("el-button"),C=A("el-focus-trap"),M=A("el-overlay");return u(),w(Le,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=d=>e.$emit("vanish")),persisted:""},{default:i(()=>[ne(r(M,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:i(()=>[m("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:f(`${e.ns.namespace.value}-overlay-message-box`),onClick:o[8]||(o[8]=(...d)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...d)),onMousedown:o[9]||(o[9]=(...d)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...d)),onMouseup:o[10]||(o[10]=(...d)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...d))},[r(C,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:i(()=>[m("div",{ref:"rootRef",class:f([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:me(e.customStyle),tabindex:"-1",onClick:o[7]||(o[7]=x(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(u(),b("div",{key:0,ref:"headerRef",class:f(e.ns.e("header"))},[m("div",{class:f(e.ns.e("title"))},[e.iconComponent&&e.center?(u(),w(t,{key:0,class:f([e.ns.e("status"),e.typeClass])},{default:i(()=>[(u(),w(oe(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),m("span",null,D(e.title),1)],2),e.showClose?(u(),b("button",{key:0,type:"button",class:f(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:o[0]||(o[0]=d=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=te(x(d=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[r(t,{class:f(e.ns.e("close"))},{default:i(()=>[r(h)]),_:1},8,["class"])],42,Qo)):E("v-if",!0)],2)):E("v-if",!0),m("div",{id:e.contentId,class:f(e.ns.e("content"))},[m("div",{class:f(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(u(),w(t,{key:0,class:f([e.ns.e("status"),e.typeClass])},{default:i(()=>[(u(),w(oe(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),e.hasMessage?(u(),b("div",{key:1,class:f(e.ns.e("message"))},[K(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(u(),w(oe(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(u(),w(oe(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:i(()=>[q(D(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):E("v-if",!0)],2),ne(m("div",{class:f(e.ns.e("input"))},[r(g,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=d=>e.inputValue=d),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:f({invalid:e.validateError}),onKeydown:te(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),m("div",{class:f(e.ns.e("errormsg")),style:me({visibility:e.editorErrorMessage?"visible":"hidden"})},D(e.editorErrorMessage),7)],2),[[se,e.showInput]])],10,xo),m("div",{class:f(e.ns.e("btns"))},[e.showCancelButton?(u(),w(y,{key:0,loading:e.cancelButtonLoading,class:f([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=d=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=te(x(d=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:i(()=>[q(D(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):E("v-if",!0),ne(r(y,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:f([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=d=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=te(x(d=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:i(()=>[q(D(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[se,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Jo)]),_:3},8,["z-index","overlay-class","mask"]),[[se,e.visible]])]),_:3})}var ot=De(Go,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ee=new Map,tt=(e,o,s=null)=>{const n=Ie(ot,e);return n.appContext=s,Te(n,o),document.body.appendChild(o.firstElementChild),n.component},nt=()=>document.createElement("div"),st=(e,o)=>{const s=nt();e.onVanish=()=>{Te(null,s),ee.delete(l)},e.onAction=a=>{const t=ee.get(l);let h;e.showInput?h={value:l.inputValue,action:a}:h=a,e.callback?e.callback(h,n.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?t.reject("close"):t.reject("cancel"):t.resolve(h)};const n=tt(e,s,o),l=n.proxy;for(const a in e)we(e,a)&&!we(l.$props,a)&&(l[a]=e[a]);return j(()=>l.message,(a,t)=>{le(a)?n.slots.default=()=>[a]:le(t)&&!le(a)&&delete n.slots.default},{immediate:!0}),l.visible=!0,l};function J(e,o=null){if(!he)return Promise.reject();let s;return Qe(e)||le(e)?e={message:e}:s=e.callback,new Promise((n,l)=>{const a=st(e,o??J._context);ee.set(a,{options:e,callback:s,resolve:n,reject:l})})}const lt=["alert","confirm","prompt"],at={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};lt.forEach(e=>{J[e]=rt(e)});function rt(e){return(o,s,n,l)=>{let a="";return xe(s)?(n=s,a=""):wo(s)?a="":a=s,J(Object.assign({title:a,message:o,type:"",...at[e]},n,{boxType:e}),l)}}J.close=()=>{ee.forEach((e,o)=>{o.doClose()}),ee.clear()};J._context=null;const U=J;U.install=e=>{U._context=e._context,e.config.globalProperties.$msgbox=U,e.config.globalProperties.$messageBox=U,e.config.globalProperties.$alert=U.alert,e.config.globalProperties.$confirm=U.confirm,e.config.globalProperties.$prompt=U.prompt};const it=U;const ut={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},dt=m("path",{fill:"currentColor",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"},null,-1),ct=[dt];function ft(e,o){return u(),b("svg",ut,ct)}const mt={name:"ep-setting",render:ft},pt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},vt=m("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),ht=m("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1),yt=[vt,ht];function gt(e,o){return u(),b("svg",pt,yt)}const bt={name:"ep-switch-button",render:gt},Ct={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},wt=m("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1),Et=[wt];function _t(e,o){return u(),b("svg",Ct,Et)}const Mt={name:"ep-user",render:_t},kt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},$t=m("path",{fill:"currentColor",d:"M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"},null,-1),Bt=[$t];function St(e,o){return u(),b("svg",kt,Bt)}const zt={name:"ep-arrow-down",render:St},It={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Lt=m("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384L128 512l192 128V384z"},null,-1),At=[Lt];function Tt(e,o){return u(),b("svg",It,At)}const Rt={name:"ep-fold",render:Tt},Ot={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Dt=m("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160l-192 128V352z"},null,-1),Pt=[Dt];function Vt(e,o){return u(),b("svg",Ot,Pt)}const Ht={name:"ep-expand",render:Vt};const Ft={class:"between"},Nt={class:"between"},Yt={key:0,class:"center"},Ut={class:"between"},qt=["src"],Xt=q("\u4E2A\u4EBA\u4E2D\u5FC3 "),Kt=q("\u9000\u51FA\u767B\u5F55 "),Wt=q(" \u767B\u5F55 "),jt=q("\u6CE8\u518C"),hn={__name:"layout-header",props:{hasAside:{type:Boolean,default:!1}},setup(e){const o=Ae({show:!1,toggle(){this.show=!this.show}}),s=eo(),n=oo(),l=to(),a=no(),t=()=>s.menuCollapse=!s.menuCollapse,h=y=>{n.currentRole=y,l.meta?.requiresAuth&&!n.hasPermission(l.meta?.permission)&&a.push("/403")},g=async()=>{try{await it.confirm("\u786E\u8BA4\u9000\u51FA\uFF1F","\u63D0\u793A",{type:"warning"}),await n.logout(),$e({type:"success",message:"\u9000\u51FA\u6210\u529F"}),a.push("/login")}catch(y){console.log(y),$e({type:"info",message:"\u9000\u51FA\u53D6\u6D88"})}};return(y,C)=>{const M=Ht,d=Rt,p=ge,P=fo,B=mo,S=zt,z=co,X=Mt,T=ro,k=bt,I=io,F=uo,R=A("router-link"),_=so,V=mt,N=Zo;return u(),b(Q,null,[m("div",Ft,[m("div",Nt,[r(vo,{"has-aside":e.hasAside},null,8,["has-aside"]),e.hasAside?(u(),b("div",Yt,[r(p,{size:18,class:"cursor-pointer",onClick:t},{default:i(()=>[H(s).menuCollapse?(u(),w(M,{key:0})):(u(),w(d,{key:1}))]),_:1})])):E("",!0),r(B,{mode:"horizontal","default-active":y.$route.matched[0].path,ellipsis:!1,router:""},{default:i(()=>[(u(!0),b(Q,null,Ee(y.$router.options.routes,v=>(u(),b(Q,null,[v.meta?.hide?E("",!0):(u(),w(P,{key:v.path,index:v.path},{title:i(()=>[v.meta.icon?(u(),w(p,{key:0},{default:i(()=>[r(po,{name:v.meta.icon},null,8,["name"])]),_:2},1024)):E("",!0),m("span",null,D(v.meta?.title??v.path),1)]),_:2},1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),m("div",Ut,[r(z,null,{default:i(()=>[H(n).token?(u(),b(Q,{key:0},[r(F,{class:"cursor-pointer"},{dropdown:i(()=>[r(I,null,{default:i(()=>[r(T,null,{default:i(()=>[r(p,null,{default:i(()=>[r(X)]),_:1}),Xt]),_:1}),r(T,{divided:"",onClick:g},{default:i(()=>[r(p,null,{default:i(()=>[r(k)]),_:1}),Kt]),_:1})]),_:1})]),default:i(()=>[r(z,null,{default:i(()=>[r(p,{size:18},{default:i(()=>[m("img",{src:H(n).avatar,class:"h-full"},null,8,qt)]),_:1}),m("span",null,D(H(n).name),1),r(p,null,{default:i(()=>[r(S)]),_:1})]),_:1})]),_:1}),H(s).roleSwitchable&&H(n).currentRole?(u(),w(F,{key:0,class:"cursor-pointer",onCommand:h},{dropdown:i(()=>[r(I,null,{default:i(()=>[(u(!0),b(Q,null,Ee(H(n).roles,v=>(u(),w(T,{key:v.value,command:v.value},{default:i(()=>[q(D(v.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:i(()=>[r(z,null,{default:i(()=>[m("span",null,D(H(n).roles.find(v=>v.value===H(n).currentRole)?.name),1),r(p,null,{default:i(()=>[r(S)]),_:1})]),_:1})]),_:1})):E("",!0)],64)):(u(),w(z,{key:1,size:20},{default:i(()=>[r(_,{type:"info"},{default:i(()=>[r(R,{class:"router-link",to:{path:"/login",query:{redirect:y.$route.fullPath}}},{default:i(()=>[Wt]),_:1},8,["to"])]),_:1}),r(_,{type:"info"},{default:i(()=>[r(R,{class:"router-link",to:"/register"},{default:i(()=>[jt]),_:1})]),_:1})]),_:1})),r(p,{size:18,class:"cursor-pointer",onClick:C[0]||(C[0]=v=>o.toggle())},{default:i(()=>[r(V)]),_:1})]),_:1})])]),r(N,{modelValue:o.show,"onUpdate:modelValue":C[1]||(C[1]=v=>o.show=v),title:"\u9875\u9762\u914D\u7F6E","append-to-body":"","destroy-on-close":"",size:"auto"},{default:i(()=>[r(ho)]),_:1},8,["modelValue"])],64)}}};export{hn as default};
