import{J as ze,h as q,s as ce,i as M,O as z,k as te,o as $,l as V,I as k,n as _,p as B,a0 as se,c as F,D as Le,ab as de,W as Te,L as U,ad as W,S as Fe,a4 as Ie,Q as G,R as Be,g as N,aD as Pe,b as I,w as v,G as he,d as f,f as Q,a6 as fe,a7 as ee,a2 as P,H as He,u as Oe,aE as De,e as S,r as me}from"./index.deda38a7.js";import{E as Re,b as Ue,c as We,a as je}from"./el-form-item.c3e02849.js";import{E as ke,U as oe,a as Ye,b as qe}from"./el-button.41d860a0.js";import{a as re,C as Xe,i as Ke,d as Je,E as Ge,b as Qe,c as Ze}from"./el-select.2233287a.js";import{u as xe}from"./el-popper.b24014d5.js";import{E as et}from"./el-space.81ff4bb5.js";/* empty css                */import{E as $e,d as tt,j as lt}from"./index.8904e04f.js";import{a as ot}from"./index.dc85d0c6.js";import{_ as X}from"./plugin-vue_export-helper.a0554eae.js";import{u as K}from"./index.4331a0ad.js";import{d as pe}from"./index.b3ad05d2.js";import"./icon.d9e9a8c2.js";let ne=!1;function Y(e,t){if(!ze)return;const o=function(n){var a;(a=t.drag)==null||a.call(t,n)},l=function(n){var a;document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",l),document.onselectstart=null,document.ondragstart=null,ne=!1,(a=t.end)==null||a.call(t,n)},s=function(n){var a;ne||(n.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",o),document.addEventListener("mouseup",l),document.addEventListener("touchmove",o),document.addEventListener("touchend",l),ne=!0,(a=t.start)==null||a.call(t,n))};e.addEventListener("mousedown",s),e.addEventListener("touchstart",s)}const nt=q({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(e){const t=K("color-alpha-slider"),o=se(),l=ce(null),s=ce(null),n=M(0),a=M(0),c=M(null);z(()=>e.color.get("alpha"),()=>{d()}),z(()=>e.color.value,()=>{d()});function p(){if(e.vertical)return 0;const r=o.vnode.el,u=e.color.get("alpha");return r?Math.round(u*(r.offsetWidth-l.value.offsetWidth/2)/100):0}function m(){const r=o.vnode.el;if(!e.vertical)return 0;const u=e.color.get("alpha");return r?Math.round(u*(r.offsetHeight-l.value.offsetHeight/2)/100):0}function y(){if(e.color&&e.color.value){const{r,g:u,b}=e.color.toRgb();return`linear-gradient(to right, rgba(${r}, ${u}, ${b}, 0) 0%, rgba(${r}, ${u}, ${b}, 1) 100%)`}return null}function h(r){r.target!==l.value&&C(r)}function C(r){const b=o.vnode.el.getBoundingClientRect(),{clientX:E,clientY:A}=re(r);if(e.vertical){let g=A-b.top;g=Math.max(l.value.offsetHeight/2,g),g=Math.min(g,b.height-l.value.offsetHeight/2),e.color.set("alpha",Math.round((g-l.value.offsetHeight/2)/(b.height-l.value.offsetHeight)*100))}else{let g=E-b.left;g=Math.max(l.value.offsetWidth/2,g),g=Math.min(g,b.width-l.value.offsetWidth/2),e.color.set("alpha",Math.round((g-l.value.offsetWidth/2)/(b.width-l.value.offsetWidth)*100))}}function d(){n.value=p(),a.value=m(),c.value=y()}return te(()=>{const r={drag:u=>{C(u)},end:u=>{C(u)}};Y(s.value,r),Y(l.value,r),d()}),{thumb:l,bar:s,thumbLeft:n,thumbTop:a,background:c,handleClick:h,update:d,ns:t}}});function at(e,t,o,l,s,n){return $(),V("div",{class:_([e.ns.b(),e.ns.is("vertical",e.vertical)])},[k("div",{ref:"bar",class:_(e.ns.e("bar")),style:B({background:e.background}),onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,6),k("div",{ref:"thumb",class:_(e.ns.e("thumb")),style:B({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var st=X(nt,[["render",at],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);const rt=q({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const t=K("color-hue-slider"),o=se(),l=M(null),s=M(null),n=M(0),a=M(0),c=F(()=>e.color.get("hue"));z(()=>c.value,()=>{C()});function p(d){d.target!==l.value&&m(d)}function m(d){const u=o.vnode.el.getBoundingClientRect(),{clientX:b,clientY:E}=re(d);let A;if(e.vertical){let g=E-u.top;g=Math.min(g,u.height-l.value.offsetHeight/2),g=Math.max(l.value.offsetHeight/2,g),A=Math.round((g-l.value.offsetHeight/2)/(u.height-l.value.offsetHeight)*360)}else{let g=b-u.left;g=Math.min(g,u.width-l.value.offsetWidth/2),g=Math.max(l.value.offsetWidth/2,g),A=Math.round((g-l.value.offsetWidth/2)/(u.width-l.value.offsetWidth)*360)}e.color.set("hue",A)}function y(){const d=o.vnode.el;if(e.vertical)return 0;const r=e.color.get("hue");return d?Math.round(r*(d.offsetWidth-l.value.offsetWidth/2)/360):0}function h(){const d=o.vnode.el;if(!e.vertical)return 0;const r=e.color.get("hue");return d?Math.round(r*(d.offsetHeight-l.value.offsetHeight/2)/360):0}function C(){n.value=y(),a.value=h()}return te(()=>{const d={drag:r=>{m(r)},end:r=>{m(r)}};Y(s.value,d),Y(l.value,d),C()}),{bar:s,thumb:l,thumbLeft:n,thumbTop:a,hueValue:c,handleClick:p,update:C,ns:t}}});function ut(e,t,o,l,s,n){return $(),V("div",{class:_([e.ns.b(),e.ns.is("vertical",e.vertical)])},[k("div",{ref:"bar",class:_(e.ns.e("bar")),onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,2),k("div",{ref:"thumb",class:_(e.ns.e("thumb")),style:B({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var it=X(rt,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const Ce=Symbol(),ct=()=>Le(Ce),ve=function(e,t,o){return[e,t*o/((e=(2-t)*o)<1?e:2-e)||0,e/2]},dt=function(e){return typeof e=="string"&&e.includes(".")&&Number.parseFloat(e)===1},ht=function(e){return typeof e=="string"&&e.includes("%")},H=function(e,t){dt(e)&&(e="100%");const o=ht(e);return e=Math.min(t,Math.max(0,Number.parseFloat(`${e}`))),o&&(e=Number.parseInt(`${e*t}`,10)/100),Math.abs(e-t)<1e-6?1:e%t/Number.parseFloat(t)},ge={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},Z=function(e){e=Math.min(Math.round(e),255);const t=Math.floor(e/16),o=e%16;return`${ge[t]||t}${ge[o]||o}`},be=function({r:e,g:t,b:o}){return Number.isNaN(+e)||Number.isNaN(+t)||Number.isNaN(+o)?"":`#${Z(e)}${Z(t)}${Z(o)}`},ae={A:10,B:11,C:12,D:13,E:14,F:15},T=function(e){return e.length===2?(ae[e[0].toUpperCase()]||+e[0])*16+(ae[e[1].toUpperCase()]||+e[1]):ae[e[1].toUpperCase()]||+e[1]},ft=function(e,t,o){t=t/100,o=o/100;let l=t;const s=Math.max(o,.01);o*=2,t*=o<=1?o:2-o,l*=s<=1?s:2-s;const n=(o+t)/2,a=o===0?2*l/(s+l):2*t/(o+t);return{h:e,s:a*100,v:n*100}},_e=function(e,t,o){e=H(e,255),t=H(t,255),o=H(o,255);const l=Math.max(e,t,o),s=Math.min(e,t,o);let n;const a=l,c=l-s,p=l===0?0:c/l;if(l===s)n=0;else{switch(l){case e:{n=(t-o)/c+(t<o?6:0);break}case t:{n=(o-e)/c+2;break}case o:{n=(e-t)/c+4;break}}n/=6}return{h:n*360,s:p*100,v:a*100}},R=function(e,t,o){e=H(e,360)*6,t=H(t,100),o=H(o,100);const l=Math.floor(e),s=e-l,n=o*(1-t),a=o*(1-s*t),c=o*(1-(1-s)*t),p=l%6,m=[o,a,n,n,c,o][p],y=[c,o,o,a,n,n][p],h=[n,n,c,o,o,a][p];return{r:Math.round(m*255),g:Math.round(y*255),b:Math.round(h*255)}};class j{constructor(t){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="",t=t||{};for(const o in t)de(t,o)&&(this[o]=t[o]);t.value?this.fromString(t.value):this.doOnChange()}set(t,o){if(arguments.length===1&&typeof t=="object"){for(const l in t)de(t,l)&&this.set(l,t[l]);return}this[`_${t}`]=o,this.doOnChange()}get(t){return t==="alpha"?Math.floor(this[`_${t}`]):this[`_${t}`]}toRgb(){return R(this._hue,this._saturation,this._value)}fromString(t){if(!t){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const o=(l,s,n)=>{this._hue=Math.max(0,Math.min(360,l)),this._saturation=Math.max(0,Math.min(100,s)),this._value=Math.max(0,Math.min(100,n)),this.doOnChange()};if(t.includes("hsl")){const l=t.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,n)=>n>2?Number.parseFloat(s):Number.parseInt(s,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:s,s:n,v:a}=ft(l[0],l[1],l[2]);o(s,n,a)}}else if(t.includes("hsv")){const l=t.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,n)=>n>2?Number.parseFloat(s):Number.parseInt(s,10));l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3&&o(l[0],l[1],l[2])}else if(t.includes("rgb")){const l=t.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,n)=>n>2?Number.parseFloat(s):Number.parseInt(s,10));if(l.length===4?this._alpha=Number.parseFloat(l[3])*100:l.length===3&&(this._alpha=100),l.length>=3){const{h:s,s:n,v:a}=_e(l[0],l[1],l[2]);o(s,n,a)}}else if(t.includes("#")){const l=t.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l))return;let s,n,a;l.length===3?(s=T(l[0]+l[0]),n=T(l[1]+l[1]),a=T(l[2]+l[2])):(l.length===6||l.length===8)&&(s=T(l.slice(0,2)),n=T(l.slice(2,4)),a=T(l.slice(4,6))),l.length===8?this._alpha=T(l.slice(6))/255*100:(l.length===3||l.length===6)&&(this._alpha=100);const{h:c,s:p,v:m}=_e(s,n,a);o(c,p,m)}}compare(t){return Math.abs(t._hue-this._hue)<2&&Math.abs(t._saturation-this._saturation)<1&&Math.abs(t._value-this._value)<1&&Math.abs(t._alpha-this._alpha)<1}doOnChange(){const{_hue:t,_saturation:o,_value:l,_alpha:s,format:n}=this;if(this.enableAlpha)switch(n){case"hsl":{const a=ve(t,o/100,l/100);this.value=`hsla(${t}, ${Math.round(a[1]*100)}%, ${Math.round(a[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${t}, ${Math.round(o)}%, ${Math.round(l)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${be(R(t,o,l))}${Z(s*255/100)}`;break}default:{const{r:a,g:c,b:p}=R(t,o,l);this.value=`rgba(${a}, ${c}, ${p}, ${this.get("alpha")/100})`}}else switch(n){case"hsl":{const a=ve(t,o/100,l/100);this.value=`hsl(${t}, ${Math.round(a[1]*100)}%, ${Math.round(a[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${t}, ${Math.round(o)}%, ${Math.round(l)}%)`;break}case"rgb":{const{r:a,g:c,b:p}=R(t,o,l);this.value=`rgb(${a}, ${c}, ${p})`;break}default:this.value=be(R(t,o,l))}}}const mt=q({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const t=K("color-predefine"),{currentColor:o}=ct(),l=M(n(e.colors,e.color));z(()=>o.value,a=>{const c=new j;c.fromString(a),l.value.forEach(p=>{p.selected=c.compare(p)})}),Te(()=>{l.value=n(e.colors,e.color)});function s(a){e.color.fromString(e.colors[a])}function n(a,c){return a.map(p=>{const m=new j;return m.enableAlpha=!0,m.format="rgba",m.fromString(p),m.selected=m.value===c.value,m})}return{rgbaColors:l,handleSelect:s,ns:t}}}),pt=["onClick"];function vt(e,t,o,l,s,n){return $(),V("div",{class:_(e.ns.b())},[k("div",{class:_(e.ns.e("colors"))},[($(!0),V(U,null,W(e.rgbaColors,(a,c)=>($(),V("div",{key:e.colors[c],class:_([e.ns.e("color-selector"),e.ns.is("alpha",a._alpha<100),{selected:a.selected}]),onClick:p=>e.handleSelect(c)},[k("div",{style:B({backgroundColor:a.value})},null,4)],10,pt))),128))],2)],2)}var gt=X(mt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const bt=q({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const t=K("color-svpanel"),o=se(),l=M(0),s=M(0),n=M("hsl(0, 100%, 50%)"),a=F(()=>{const m=e.color.get("hue"),y=e.color.get("value");return{hue:m,value:y}});function c(){const m=e.color.get("saturation"),y=e.color.get("value"),h=o.vnode.el,{clientWidth:C,clientHeight:d}=h;s.value=m*C/100,l.value=(100-y)*d/100,n.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function p(m){const h=o.vnode.el.getBoundingClientRect(),{clientX:C,clientY:d}=re(m);let r=C-h.left,u=d-h.top;r=Math.max(0,r),r=Math.min(r,h.width),u=Math.max(0,u),u=Math.min(u,h.height),s.value=r,l.value=u,e.color.set({saturation:r/h.width*100,value:100-u/h.height*100})}return z(()=>a.value,()=>{c()}),te(()=>{Y(o.vnode.el,{drag:m=>{p(m)},end:m=>{p(m)}}),c()}),{cursorTop:l,cursorLeft:s,background:n,colorValue:a,handleDrag:p,update:c,ns:t}}}),_t=k("div",null,null,-1),kt=[_t];function $t(e,t,o,l,s,n){return $(),V("div",{class:_(e.ns.b()),style:B({backgroundColor:e.background})},[k("div",{class:_(e.ns.e("white"))},null,2),k("div",{class:_(e.ns.e("black"))},null,2),k("div",{class:_(e.ns.e("cursor")),style:B({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},kt,6)],6)}var Ct=X(bt,[["render",$t],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const wt=q({name:"ElColorPicker",components:{ElButton:ke,ElTooltip:ot,ElInput:Re,ElIcon:$e,Close:tt,ArrowDown:lt,SvPanel:Ct,HueSlider:it,AlphaSlider:st,Predefine:gt},directives:{ClickOutside:Xe},props:{modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:{type:String,validator:Ke},popperClass:String,label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:Array,validateEvent:{type:Boolean,default:!0}},emits:["change","active-change",oe],setup(e,{emit:t}){const{t:o}=xe(),l=K("color"),{form:s,formItem:n}=Ye(),{inputId:a,isLabeledByFormItem:c}=qe(e,{formItemContext:n}),p=M(),m=M(),y=M(),h=M(null);let C=!0;const d=Fe(new j({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue})),r=M(!1),u=M(!1),b=M(""),E=F(()=>!e.modelValue&&!u.value?"transparent":Me(d,e.showAlpha)),A=Ie(),g=F(()=>!!(e.disabled||s?.disabled)),O=F(()=>!e.modelValue&&!u.value?"":d.value),i=F(()=>c.value?void 0:e.label||o("el.colorpicker.defaultLabel")),we=F(()=>c.value?n?.labelId:void 0);z(()=>e.modelValue,w=>{w?w&&w!==d.value&&(C=!1,d.fromString(w)):u.value=!1}),z(()=>O.value,w=>{b.value=w,C&&t("active-change",w),C=!0}),z(()=>d.value,()=>{!e.modelValue&&!u.value&&(u.value=!0)});function Me(w,L){if(!(w instanceof j))throw new TypeError("color should be instance of _color Class");const{r:D,g:ue,b:ie}=w.toRgb();return L?`rgba(${D}, ${ue}, ${ie}, ${w.get("alpha")/100})`:`rgb(${D}, ${ue}, ${ie})`}function ye(w){r.value=w}const J=Je(ye,100);function Se(){J(!1),le()}function le(){G(()=>{e.modelValue?d.fromString(e.modelValue):(d.value="",G(()=>{u.value=!1}))})}function Ve(){g.value||J(!r.value)}function Ee(){d.fromString(b.value)}function Ae(){const w=d.value;t(oe,w),t("change",w),e.validateEvent&&n?.validate("change").catch(L=>pe()),J(!1),G(()=>{const L=new j({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue});d.compare(L)||le()})}function Ne(){J(!1),t(oe,null),t("change",null),e.modelValue!==null&&e.validateEvent&&n?.validate("change").catch(w=>pe()),le()}return te(()=>{e.modelValue&&(b.value=O.value)}),z(()=>r.value,()=>{G(()=>{var w,L,D;(w=p.value)==null||w.update(),(L=m.value)==null||L.update(),(D=y.value)==null||D.update()})}),Be(Ce,{currentColor:O}),{color:d,colorDisabled:g,colorSize:A,displayedColor:E,showPanelColor:u,showPicker:r,customInput:b,buttonId:a,buttonAriaLabel:i,buttonAriaLabelledby:we,handleConfirm:Ee,hide:Se,handleTrigger:Ve,clear:Ne,confirmValue:Ae,t:o,ns:l,hue:p,svPanel:m,alpha:y,popper:h}}}),Mt=["id","aria-label","aria-labelledby","aria-description","tabindex"];function yt(e,t,o,l,s,n){const a=N("hue-slider"),c=N("sv-panel"),p=N("alpha-slider"),m=N("predefine"),y=N("el-input"),h=N("el-button"),C=N("arrow-down"),d=N("el-icon"),r=N("close"),u=N("el-tooltip"),b=Pe("click-outside");return $(),I(u,{ref:"popper",visible:e.showPicker,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[e.ns.be("picker","panel"),e.ns.b("dropdown"),e.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${e.ns.namespace.value}-zoom-in-top`,persistent:""},{content:v(()=>[he(($(),V("div",null,[k("div",{class:_(e.ns.be("dropdown","main-wrapper"))},[f(a,{ref:"hue",class:"hue-slider",color:e.color,vertical:""},null,8,["color"]),f(c,{ref:"svPanel",color:e.color},null,8,["color"])],2),e.showAlpha?($(),I(p,{key:0,ref:"alpha",color:e.color},null,8,["color"])):Q("v-if",!0),e.predefine?($(),I(m,{key:1,ref:"predefine",color:e.color,colors:e.predefine},null,8,["color","colors"])):Q("v-if",!0),k("div",{class:_(e.ns.be("dropdown","btns"))},[k("span",{class:_(e.ns.be("dropdown","value"))},[f(y,{modelValue:e.customInput,"onUpdate:modelValue":t[0]||(t[0]=E=>e.customInput=E),"validate-event":!1,size:"small",onKeyup:fe(e.handleConfirm,["enter"]),onBlur:e.handleConfirm},null,8,["modelValue","onKeyup","onBlur"])],2),f(h,{class:_(e.ns.be("dropdown","link-btn")),text:"",size:"small",onClick:e.clear},{default:v(()=>[ee(P(e.t("el.colorpicker.clear")),1)]),_:1},8,["class","onClick"]),f(h,{plain:"",size:"small",class:_(e.ns.be("dropdown","btn")),onClick:e.confirmValue},{default:v(()=>[ee(P(e.t("el.colorpicker.confirm")),1)]),_:1},8,["class","onClick"])],2)])),[[b,e.hide]])]),default:v(()=>[k("div",{id:e.buttonId,class:_([e.ns.b("picker"),e.ns.is("disabled",e.colorDisabled),e.ns.bm("picker",e.colorSize)]),role:"button","aria-label":e.buttonAriaLabel,"aria-labelledby":e.buttonAriaLabelledby,"aria-description":e.t("el.colorpicker.description",{color:e.modelValue||""}),tabindex:e.tabindex,onKeydown:t[2]||(t[2]=fe((...E)=>e.handleTrigger&&e.handleTrigger(...E),["enter"]))},[e.colorDisabled?($(),V("div",{key:0,class:_(e.ns.be("picker","mask"))},null,2)):Q("v-if",!0),k("div",{class:_(e.ns.be("picker","trigger")),onClick:t[1]||(t[1]=(...E)=>e.handleTrigger&&e.handleTrigger(...E))},[k("span",{class:_([e.ns.be("picker","color"),e.ns.is("alpha",e.showAlpha)])},[k("span",{class:_(e.ns.be("picker","color-inner")),style:B({backgroundColor:e.displayedColor})},[he(f(d,{class:_([e.ns.be("picker","icon"),e.ns.is("icon-arrow-down")])},{default:v(()=>[f(C)]),_:1},8,["class"]),[[He,e.modelValue||e.showPanelColor]]),!e.modelValue&&!e.showPanelColor?($(),I(d,{key:0,class:_([e.ns.be("picker","empty"),e.ns.is("icon-close")])},{default:v(()=>[f(r)]),_:1},8,["class"])):Q("v-if",!0)],6)],2)],2)],42,Mt)]),_:1},8,["visible","popper-class","transition"])}var x=X(wt,[["render",yt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue"]]);x.install=e=>{e.component(x.name,x)};const St=x,Vt=St;const Et={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},At=k("path",{fill:"currentColor",d:"M240.448 240.448a384 384 0 1 0 559.424 525.696a448 448 0 0 1-542.016-542.08a390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"},null,-1),Nt=[At];function zt(e,t){return $(),V("svg",Et,Nt)}const Lt={name:"ep-moon",render:zt},Tt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ft=k("path",{fill:"currentColor",d:"M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"},null,-1),It=[Ft];function Bt(e,t){return $(),V("svg",Tt,It)}const Pt={name:"ep-platform",render:Bt},Ht={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ot=k("path",{fill:"currentColor",d:"M512 704a192 192 0 1 0 0-384a192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"},null,-1),Dt=[Ot];function Rt(e,t){return $(),V("svg",Ht,Dt)}const Ut={name:"ep-sunny",render:Rt},Wt=ee("\u6062\u590D\u9ED8\u8BA4"),jt=ee("\u590D\u5236\u914D\u7F6E"),nl={__name:"header-settings",setup(e){const t=Oe(),o=[{text:"\u8DDF\u968F\u7CFB\u7EDF",value:"auto",icon:Pt},{text:"\u4EAE\u8272\u6A21\u5F0F",value:"light",icon:Ut},{text:"\u6697\u8272\u6A21\u5F0F",value:"dark",icon:Lt}],l=[{text:"\u9ED8\u8BA4",value:"default"},{text:"\u5C0F",value:"small"},{text:"\u5927",value:"large"}],s=[{text:"\u4E2D\u6587",value:"zh"},{text:"English",value:"en"}],n=[{text:"trace",value:"trace"},{text:"debug",value:"debug"},{text:"info",value:"info"},{text:"warn",value:"warn"},{text:"error",value:"error"}],a=M(null),c=()=>{a.value.resetFields(),t.$reset()},{copy:p}=De(),m=async()=>{const y=JSON.stringify(t.$state,null,2);await p(y),je({message:"config/settings.json",type:"success"})};return(y,h)=>{const C=$e,d=et,r=Ge,u=Qe,b=Ue,E=Vt,A=Ze,g=ke,O=We;return $(),I(O,{ref_key:"formRef",ref:a,model:S(t),"label-width":"auto"},{default:v(()=>[f(b,{prop:"appStore.mode",label:"\u4E3B\u9898\u6A21\u5F0F"},{default:v(()=>[f(u,{modelValue:S(t).mode,"onUpdate:modelValue":h[0]||(h[0]=i=>S(t).mode=i)},{prefix:v(()=>[f(C,null,{default:v(()=>[($(),I(me(o.find(i=>i.value===S(t).mode).icon)))]),_:1})]),default:v(()=>[($(),V(U,null,W(o,i=>f(r,{key:i.value,value:i.value,label:i.text},{default:v(()=>[f(d,null,{default:v(()=>[f(C,null,{default:v(()=>[($(),I(me(i.icon)))]),_:2},1024),k("span",null,P(i.text),1)]),_:2},1024)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),f(b,{prop:"appStore.themeColor",label:"\u4E3B\u9898\u8272"},{default:v(()=>[f(E,{modelValue:S(t).themeColor,"onUpdate:modelValue":h[1]||(h[1]=i=>S(t).themeColor=i)},null,8,["modelValue"])]),_:1}),f(b,{prop:"appStore.size",label:"\u7EC4\u4EF6\u5927\u5C0F"},{default:v(()=>[f(u,{modelValue:S(t).size,"onUpdate:modelValue":h[2]||(h[2]=i=>S(t).size=i)},{default:v(()=>[($(),V(U,null,W(l,i=>f(r,{key:i.value,value:i.value,label:i.text},{default:v(()=>[k("span",null,P(i.text),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),f(b,{prop:"appStore.locale",label:"\u9ED8\u8BA4\u8BED\u8A00"},{default:v(()=>[f(u,{modelValue:S(t).locale,"onUpdate:modelValue":h[3]||(h[3]=i=>S(t).locale=i)},{default:v(()=>[($(),V(U,null,W(s,i=>f(r,{key:i.value,value:i.value,label:i.text},{default:v(()=>[k("span",null,P(i.text),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),f(b,{prop:"appStore.showBreadcrumb",label:"\u663E\u793A\u9762\u5305\u5C51"},{default:v(()=>[f(A,{modelValue:S(t).showBreadcrumb,"onUpdate:modelValue":h[4]||(h[4]=i=>S(t).showBreadcrumb=i)},null,8,["modelValue"])]),_:1}),f(b,{prop:"appStore.isUseTabsRouter",label:"\u591A\u6807\u7B7ETab\u9875"},{default:v(()=>[f(A,{modelValue:S(t).isUseTabsRouter,"onUpdate:modelValue":h[5]||(h[5]=i=>S(t).isUseTabsRouter=i)},null,8,["modelValue"])]),_:1}),f(b,{prop:"appStore.menuCollapse",label:"\u6298\u53E0\u83DC\u5355"},{default:v(()=>[f(A,{modelValue:S(t).menuCollapse,"onUpdate:modelValue":h[6]||(h[6]=i=>S(t).menuCollapse=i)},null,8,["modelValue"])]),_:1}),f(b,{prop:"appStore.loglevel",label:"\u65E5\u5FD7\u7EA7\u522B"},{default:v(()=>[f(u,{modelValue:S(t).loglevel,"onUpdate:modelValue":h[7]||(h[7]=i=>S(t).loglevel=i)},{default:v(()=>[($(),V(U,null,W(n,i=>f(r,{key:i.value,value:i.value,label:i.text},{default:v(()=>[k("span",null,P(i.text),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),f(b,null,{default:v(()=>[f(g,{onClick:c},{default:v(()=>[Wt]),_:1}),f(g,{type:"primary",onClick:m},{default:v(()=>[jt]),_:1})]),_:1})]),_:1},8,["model"])}}};export{nl as default};
