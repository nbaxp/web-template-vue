import{k as J,a9 as te,J as ne,U as $,F as se,p as X,aa as le,P as K,ab as W,V as A,ac as ae,ad as ue,ae as ie,af as ce,ag as z,H as D,R as H,m as V,d as de,x as L,ah as re,ai as Q,aj as fe,ak as me,i as S,D as ve,al as ye,c as _,X as pe,am as he,an as U,o as T,q as j,b as q,w as ge,r as Ce,e as h,E as be,f as N,n as Z,_ as ke,z as Ee}from"./index.bd10bac3.js";import{P as Y}from"./vnode.2f8d4e0e.js";import{U as R}from"./el-popper.31ce43ec.js";import{u as G}from"./index.eb8b9e5b.js";import{t as we}from"./index.7898061d.js";import{g as Me}from"./el-select.71c8dc86.js";const We=(e,t,l)=>{let n={offsetX:0,offsetY:0};const a=d=>{const u=d.clientX,m=d.clientY,{offsetX:r,offsetY:v}=n,c=e.value.getBoundingClientRect(),f=c.left,k=c.top,O=c.width,P=c.height,I=document.documentElement.clientWidth,x=document.documentElement.clientHeight,F=-f+r,E=-k+v,g=I-f-O+r,C=x-k-P+v,w=p=>{const M=Math.min(Math.max(r+p.clientX-u,F),g),B=Math.min(Math.max(v+p.clientY-m,E),C);n={offsetX:M,offsetY:B},e.value.style.transform=`translate(${$(M)}, ${$(B)})`},b=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",b)},o=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",a)},s=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",a)};J(()=>{te(()=>{l.value?o():s()})}),ne(()=>{s()})},Be=e=>{se(e)||we("[useLockscreen]","You need to pass a ref param to this function");const t=X("popup"),l=le(()=>t.bm("parent","hidden"));if(!K||W(document.body,l.value))return;let n=0,a=!1,o="0";const s=()=>{setTimeout(()=>{ce(document.body,l.value),a&&(document.body.style.width=o)},200)};A(e,d=>{if(!d){s();return}a=!W(document.body,l.value),a&&(o=document.body.style.width),n=Me(t.namespace.value);const u=document.documentElement.clientHeight<document.body.scrollHeight,m=ae(document.body,"overflowY");n>0&&(u||m==="scroll")&&a&&(document.body.style.width=`calc(100% - ${n}px)`),ue(document.body,l.value)}),ie(()=>s())},Se=e=>{if(!e)return{onClick:z,onMousedown:z,onMouseup:z};let t=!1,l=!1;return{onClick:s=>{t&&l&&e(s),t=l=!1},onMousedown:s=>{t=s.target===s.currentTarget},onMouseup:s=>{l=s.target===s.currentTarget}}},Te=D({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:H([String,Array,Object])},zIndex:{type:H([String,Number])}}),Le={click:e=>e instanceof MouseEvent};var De=V({name:"ElOverlay",props:Te,emits:Le,setup(e,{slots:t,emit:l}){const n=X("overlay"),a=u=>{l("click",u)},{onClick:o,onMousedown:s,onMouseup:d}=Se(e.customMaskEvent?void 0:a);return()=>e.mask?de("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:o,onMousedown:s,onMouseup:d},[L(t,"default")],Y.STYLE|Y.CLASS|Y.PROPS,["onClick","onMouseup","onMousedown"]):re("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[L(t,"default")])}});const _e=De,Oe=D({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Q},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ue={close:()=>!0},je=D({...Oe,appendToBody:{type:Boolean,default:!1},beforeClose:{type:H(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[R]:e=>fe(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ze=(e,t)=>{const n=he().emit,{nextZIndex:a}=me();let o="";const s=G(),d=G(),u=S(!1),m=S(!1),r=S(!1),v=S(e.zIndex||a());let c,f;const k=ve("namespace",ye),O=_(()=>{const i={},y=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(i[`${y}-margin-top`]=e.top),e.width&&(i[`${y}-width`]=$(e.width))),i}),P=_(()=>e.alignCenter?{display:"flex"}:{});function I(){n("opened")}function x(){n("closed"),n(R,!1),e.destroyOnClose&&(r.value=!1)}function F(){n("close")}function E(){f?.(),c?.(),e.openDelay&&e.openDelay>0?{stop:c}=U(()=>b(),e.openDelay):b()}function g(){c?.(),f?.(),e.closeDelay&&e.closeDelay>0?{stop:f}=U(()=>p(),e.closeDelay):p()}function C(){function i(y){y||(m.value=!0,u.value=!1)}e.beforeClose?e.beforeClose(i):g()}function w(){e.closeOnClickModal&&C()}function b(){!K||(u.value=!0)}function p(){u.value=!1}function M(){n("openAutoFocus")}function B(){n("closeAutoFocus")}function ee(i){var y;((y=i.detail)==null?void 0:y.focusReason)==="pointer"&&i.preventDefault()}e.lockScroll&&Be(u);function oe(){e.closeOnPressEscape&&C()}return A(()=>e.modelValue,i=>{i?(m.value=!1,E(),r.value=!0,v.value=e.zIndex?v.value++:a(),pe(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):u.value&&g()}),A(()=>e.fullscreen,i=>{!t.value||(i?(o=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=o)}),J(()=>{e.modelValue&&(u.value=!0,r.value=!0,E())}),{afterEnter:I,afterLeave:x,beforeLeave:F,handleClose:C,onModalClick:w,close:g,doClose:p,onOpenAutoFocus:M,onCloseAutoFocus:B,onCloseRequested:oe,onFocusoutPrevented:ee,titleId:s,bodyId:d,closed:m,style:O,overlayDialogStyle:P,rendered:r,visible:u,zIndex:v}},Pe=D({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:Q}}),Ie={click:e=>e instanceof MouseEvent},xe=["href"],Fe=V({name:"ElLink"}),ze=V({...Fe,props:Pe,emits:Ie,setup(e,{emit:t}){const l=e,n=X("link");function a(o){l.disabled||t("click",o)}return(o,s)=>(T(),j("a",{class:Z([h(n).b(),h(n).m(o.type),h(n).is("disabled",o.disabled),h(n).is("underline",o.underline&&!o.disabled)]),href:o.disabled||!o.href?void 0:o.href,onClick:a},[o.icon?(T(),q(h(be),{key:0},{default:ge(()=>[(T(),q(Ce(o.icon)))]),_:1})):N("v-if",!0),o.$slots.default?(T(),j("span",{key:1,class:Z(h(n).e("inner"))},[L(o.$slots,"default")],2)):N("v-if",!0),o.$slots.icon?L(o.$slots,"icon",{key:2}):N("v-if",!0)],10,xe))}});var Ne=ke(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const Ge=Ee(Ne);export{_e as E,qe as a,Ge as b,We as c,je as d,Be as e,Se as f,Oe as g,Ue as h,Ze as u};