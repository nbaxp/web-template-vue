import{bt as Vl,L as yl,bu as Ml,C as zl,aZ as Bl,_ as me,i as be,ap as Cl,j as ie,c as g,o as b,p as V,J as T,q as x,n as f,e as $,b as P,w as O,d as te,Y as ul,x as H,E as nl,f as z,v as J,T as Sl,z as Ol,D as Le,bv as Te,aP as F,Q as W,al as ol,V as $e,aq as tl,F as Pl,S as B,H as ve,I as il,Z,k as R,m as al,R as wl,s as dl,bw as fe,bx as el,X as cl,ae as Dl,bo as ql,by as Fl,U as Il,h as oe,a_ as Wl,M as ll,a1 as pl,ar as q,bz as Al,aX as Kl,r as fl,B as kl}from"./index.70f90e7f.js";import{f as vl,d as ml,s as Hl,h as Rl,E as Nl,i as jl}from"./el-form-item.076284d8.js";import{a as Ql,d as Gl}from"./index.7ca47aad.js";import{E as Ul}from"./el-popper.97eae9b5.js";import{a as sl,b as Xl,U as Y,C as El}from"./el-button.714d6015.js";import{d as Zl}from"./index.012ccabd.js";const Jl=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Yl=e=>Vl[e||"default"],xl=e=>({focus:()=>{var l,t;(t=(l=e.value)==null?void 0:l.focus)==null||t.call(l)}}),X=new Map;let bl;yl&&(document.addEventListener("mousedown",e=>bl=e),document.addEventListener("mouseup",e=>{for(const l of X.values())for(const{documentHandler:t}of l)t(e,bl)}));function gl(e,l){let t=[];return Array.isArray(l.arg)?t=l.arg:Ml(l.arg)&&t.push(l.arg),function(v,r){const d=l.instance.popperRef,a=v.target,c=r?.target,p=!l||!l.instance,y=!a||!c,m=e.contains(a)||e.contains(c),C=e===a,w=t.length&&t.some(i=>i?.contains(a))||t.length&&t.includes(c),E=d&&(d.contains(a)||d.contains(c));p||y||m||C||w||E||l.value(v,r)}}const _l={beforeMount(e,l){X.has(e)||X.set(e,[]),X.get(e).push({documentHandler:gl(e,l),bindingFn:l.value})},updated(e,l){X.has(e)||X.set(e,[]);const t=X.get(e),v=t.findIndex(d=>d.bindingFn===l.oldValue),r={documentHandler:gl(e,l),bindingFn:l.value};v>=0?t.splice(v,1,r):t.push(r)},unmounted(e){X.delete(e)}},Ll=zl({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:Bl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),en={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},ln={name:"ElTag"},nn=be({...ln,props:Ll,emits:en,setup(e,{emit:l}){const t=e,v=Cl(),r=ie("tag"),d=g(()=>{const{type:p,hit:y,effect:m,closable:C,round:w}=t;return[r.b(),r.is("closable",C),r.m(p),r.m(v.value),r.m(m),r.is("hit",y),r.is("round",w)]}),a=p=>{l("close",p)},c=p=>{l("click",p)};return(p,y)=>p.disableTransitions?(b(),V("span",{key:0,class:f($(d)),style:J({backgroundColor:p.color}),onClick:c},[T("span",{class:f($(r).e("content"))},[x(p.$slots,"default")],2),p.closable?(b(),P($(nl),{key:0,class:f($(r).e("close")),onClick:H(a,["stop"])},{default:O(()=>[te($(ul))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)):(b(),P(Sl,{key:1,name:`${$(r).namespace.value}-zoom-in-center`,appear:""},{default:O(()=>[T("span",{class:f($(d)),style:J({backgroundColor:p.color}),onClick:c},[T("span",{class:f($(r).e("content"))},[x(p.$slots,"default")],2),p.closable?(b(),P($(nl),{key:0,class:f($(r).e("close")),onClick:H(a,["stop"])},{default:O(()=>[te($(ul))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)]),_:3},8,["name"]))}});var on=me(nn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const tn=Ol(on),Tl="ElSelectGroup",Ve="ElSelect";function an(e,l){const t=Le(Ve),v=Le(Tl,{disabled:!1}),r=g(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),d=g(()=>t.props.multiple?C(t.props.modelValue,e.value):w(e.value,t.props.modelValue)),a=g(()=>{if(t.props.multiple){const h=t.props.modelValue||[];return!d.value&&h.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),c=g(()=>e.label||(r.value?"":e.value)),p=g(()=>e.value||e.label||""),y=g(()=>e.disabled||l.groupDisabled||a.value),m=ol(),C=(h=[],S)=>{if(r.value){const I=t.props.valueKey;return h&&h.some(A=>Te(F(A,I))===F(S,I))}else return h&&h.includes(S)},w=(h,S)=>{if(r.value){const{valueKey:I}=t.props;return F(h,I)===F(S,I)}else return h===S},E=()=>{!e.disabled&&!v.disabled&&(t.hoverIndex=t.optionsArray.indexOf(m.proxy))};W(()=>c.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),W(()=>e.value,(h,S)=>{const{remote:I,valueKey:A}=t.props;if(!e.created&&!I){if(A&&typeof h=="object"&&typeof S=="object"&&h[A]===S[A])return;t.setSelected()}}),W(()=>v.disabled,()=>{l.groupDisabled=v.disabled},{immediate:!0});const{queryChange:i}=Te(t);return W(i,h=>{const{query:S}=$(h),I=new RegExp(Jl(S),"i");l.visible=I.test(c.value)||e.created,l.visible||t.filteredOptionsCount--}),{select:t,currentLabel:c,currentValue:p,itemSelected:d,isDisabled:y,hoverItem:E}}const sn=be({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),t=$e({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:v,itemSelected:r,isDisabled:d,select:a,hoverItem:c}=an(e,t),{visible:p,hover:y}=tl(t),m=ol().proxy,C=m.value;a.onOptionCreate(m),Pl(()=>{const{selected:E}=a,h=(a.props.multiple?E:[E]).some(S=>S.value===m.value);B(()=>{a.cachedOptions.get(C)===m&&!h&&a.cachedOptions.delete(C)}),a.onOptionDestroy(C,m)});function w(){e.disabled!==!0&&t.groupDisabled!==!0&&a.handleOptionSelect(m,!0)}return{ns:l,currentLabel:v,itemSelected:r,isDisabled:d,select:a,hoverItem:c,visible:p,hover:y,selectOptionClick:w,states:t}}});function rn(e,l,t,v,r,d){return ve((b(),V("li",{class:f([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...a)=>e.hoverItem&&e.hoverItem(...a)),onClick:l[1]||(l[1]=H((...a)=>e.selectOptionClick&&e.selectOptionClick(...a),["stop"]))},[x(e.$slots,"default",{},()=>[T("span",null,Z(e.currentLabel),1)])],34)),[[il,e.visible]])}var rl=me(sn,[["render",rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const un=be({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Le(Ve),l=ie("select"),t=g(()=>e.props.popperClass),v=g(()=>e.props.multiple),r=g(()=>e.props.fitInputWidth),d=R("");function a(){var c;d.value=`${(c=e.selectWrapper)==null?void 0:c.offsetWidth}px`}return al(()=>{a(),wl(e.selectWrapper,a)}),{ns:l,minWidth:d,popperClass:t,isMultiple:v,isFitInputWidth:r}}});function dn(e,l,t,v,r,d){return b(),V("div",{class:f([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:J({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[x(e.$slots,"default")],6)}var cn=me(un,[["render",dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function pn(e){const{t:l}=sl();return $e({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const fn=(e,l,t)=>{const{t:v}=sl(),r=ie("select"),d=R(null),a=R(null),c=R(null),p=R(null),y=R(null),m=R(null),C=R(-1),w=dl({query:""}),E=dl(""),{form:i,formItem:h}=Xl(),S=g(()=>!e.filterable||e.multiple||!l.visible),I=g(()=>e.disabled||i?.disabled),A=g(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!I.value&&l.inputHovering&&n}),se=g(()=>e.remote&&e.filterable?"":e.suffixIcon),Me=g(()=>r.is("reverse",se.value&&l.visible)),ge=g(()=>e.remote?300:0),re=g(()=>e.loading?e.loadingText||v("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||v("el.select.noMatch"):l.options.size===0?e.noDataText||v("el.select.noData"):null),L=g(()=>Array.from(l.options.values())),ze=g(()=>Array.from(l.cachedOptions.values())),Be=g(()=>{const n=L.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ae=Cl(),Pe=g(()=>["small"].includes(ae.value)?"small":"default"),De=g({get(){return l.visible&&re.value!==!1},set(n){l.visible=n}});W([()=>I.value,()=>ae.value,()=>i?.size],()=>{B(()=>{K()})}),W(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),W(()=>e.modelValue,(n,o)=>{e.multiple&&(K(),n&&n.length>0||a.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",j(l.query))),ue(),e.filterable&&!e.multiple&&(l.inputLength=20),!vl(n,o)&&e.validateEvent&&h?.validate("change").catch(s=>Zl())},{flush:"post",deep:!0}),W(()=>l.visible,n=>{var o,s,u;n?((s=(o=c.value)==null?void 0:o.updatePopper)==null||s.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(u=a.value)==null||u.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),j(l.query),!e.multiple&&!e.remote&&(w.value.query="",fe(w),fe(E)))):(a.value&&a.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,qe(),B(()=>{a.value&&a.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),W(()=>l.options.entries(),()=>{var n,o,s;if(!yl)return;(o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&K();const u=((s=y.value)==null?void 0:s.querySelectorAll("input"))||[];Array.from(u).includes(document.activeElement)||ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ye()},{flush:"post"}),W(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(C.value=L.value[n]||{}),L.value.forEach(o=>{o.hover=C.value===o})});const K=()=>{e.collapseTags&&!e.filterable||B(()=>{var n,o;if(!d.value)return;const s=d.value.$el.querySelector("input"),u=p.value,k=Yl(ae.value||i?.size);s.style.height=`${(l.selected.length===0?k:Math.max(u?u.clientHeight+(u.clientHeight>k?6:0):0,k))-2}px`,l.tagInMultiLine=Number.parseFloat(s.style.height)>=k,l.visible&&re.value!==!1&&((o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n))})},j=n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,B(()=>{var o,s;l.visible&&((s=(o=c.value)==null?void 0:o.updatePopper)==null||s.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&B(()=>{const o=a.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,he(),K()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),fe(E)):(l.filteredOptionsCount=l.optionsCount,w.value.query=n,fe(w),fe(E)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ye()}},he=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=a.value.value?"":l.cachedPlaceHolder)},ye=()=>{const n=L.value.filter(u=>u.visible&&!u.disabled&&!u.states.groupDisabled),o=n.find(u=>u.created),s=n[0];l.hoverIndex=de(L.value,o||s)},ue=()=>{var n;if(e.multiple)l.selectedLabel="";else{const s=Ce(e.modelValue);(n=s.props)!=null&&n.created?(l.createdLabel=s.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=s.currentLabel,l.selected=s,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(s=>{o.push(Ce(s))}),l.selected=o,B(()=>{K()})},Ce=n=>{let o;const s=el(n).toLowerCase()==="object",u=el(n).toLowerCase()==="null",k=el(n).toLowerCase()==="undefined";for(let N=l.cachedOptions.size-1;N>=0;N--){const D=ze.value[N];if(s?F(D.value,e.valueKey)===F(n,e.valueKey):D.value===n){o={value:n,currentLabel:D.currentLabel,isDisabled:D.isDisabled};break}}if(o)return o;const G=s?n.label:!u&&!k?n:"",U={value:n,currentLabel:G};return e.multiple&&(U.hitState=!1),U},qe=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>L.value.findIndex(s=>F(s,n)===F(o,n)))):l.hoverIndex=-1:l.hoverIndex=L.value.findIndex(o=>le(o)===le(l.selected))},300)},Fe=()=>{var n,o;We(),(o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&K()},We=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.getBoundingClientRect().width},Ae=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,j(l.query))},Ke=ml(()=>{Ae()},ge.value),He=ml(n=>{j(n.target.value)},ge.value),_=n=>{vl(e.modelValue,n)||t.emit(El,n)},Re=n=>{if(n.target.value.length<=0&&!ce()){const o=e.modelValue.slice();o.pop(),t.emit(Y,o),_(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ne=(n,o)=>{const s=l.selected.indexOf(o);if(s>-1&&!I.value){const u=e.modelValue.slice();u.splice(s,1),t.emit(Y,u),_(u),t.emit("remove-tag",o.value)}n.stopPropagation()},ee=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(typeof o!="string")for(const s of l.selected)s.isDisabled&&o.push(s.value);t.emit(Y,o),_(o),l.visible=!1,t.emit("clear")},Se=(n,o)=>{var s;if(e.multiple){const u=(e.modelValue||[]).slice(),k=de(u,n.value);k>-1?u.splice(k,1):(e.multipleLimit<=0||u.length<e.multipleLimit)&&u.push(n.value),t.emit(Y,u),_(u),n.created&&(l.query="",j(""),l.inputLength=20),e.filterable&&((s=a.value)==null||s.focus())}else t.emit(Y,n.value),_(n.value),l.visible=!1;l.isSilentBlur=o,je(),!l.visible&&B(()=>{Q(n)})},de=(n=[],o)=>{if(!cl(o))return n.indexOf(o);const s=e.valueKey;let u=-1;return n.some((k,G)=>Te(F(k,s))===F(o,s)?(u=G,!0):!1),u},je=()=>{l.softFocus=!0;const n=a.value||d.value;n&&n?.focus()},Q=n=>{var o,s,u,k,G;const U=Array.isArray(n)?n[0]:n;let N=null;if(U?.value){const D=L.value.filter(M=>M.value===U.value);D.length>0&&(N=D[0].$el)}if(c.value&&N){const D=(k=(u=(s=(o=c.value)==null?void 0:o.popperRef)==null?void 0:s.contentRef)==null?void 0:u.querySelector)==null?void 0:k.call(u,`.${r.be("dropdown","wrap")}`);D&&Hl(D,N)}(G=m.value)==null||G.handleScroll()},Qe=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ge=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ue=n=>{n.code!==Dl.backspace&&ce(!1),l.inputLength=a.value.value.length*15+20,K()},ce=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(!!o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},pe=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,B(()=>j(o));else{const s=o[o.length-1]||"";l.isOnComposition=!Rl(s)}},Oe=()=>{B(()=>Q(l.selected))},Xe=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",n))},we=()=>{var n;l.visible=!1,(n=d.value)==null||n.blur()},Ze=n=>{B(()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",n)}),l.softFocus=!1},Je=n=>{ee(n)},Ye=()=>{l.visible=!1},Ie=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},ke=()=>{var n;I.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=a.value||d.value)==null||n.focus()))},xe=()=>{l.visible?L.value[l.hoverIndex]&&Se(L.value[l.hoverIndex],void 0):ke()},le=n=>cl(n.value)?F(n.value,e.valueKey):n.value,_e=g(()=>L.value.filter(n=>n.visible).every(n=>n.disabled)),Ee=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!_e.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=L.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ee(n),B(()=>Q(C.value))}};return{optionsArray:L,selectSize:ae,handleResize:Fe,debouncedOnInputChange:Ke,debouncedQueryChange:He,deletePrevTag:Re,deleteTag:Ne,deleteSelected:ee,handleOptionSelect:Se,scrollToOption:Q,readonly:S,resetInputHeight:K,showClose:A,iconComponent:se,iconReverse:Me,showNewOption:Be,collapseTagSize:Pe,setSelected:ue,managePlaceholder:he,selectDisabled:I,emptyText:re,toggleLastOptionHitState:ce,resetInputState:Ue,handleComposition:pe,onOptionCreate:Qe,onOptionDestroy:Ge,handleMenuEnter:Oe,handleFocus:Xe,blur:we,handleBlur:Ze,handleClearClick:Je,handleClose:Ye,handleKeydownEscape:Ie,toggleMenu:ke,selectOption:xe,getValueKey:le,navigateOptions:Ee,dropMenuVisible:De,queryChange:w,groupQueryChange:E,reference:d,input:a,tooltipRef:c,tags:p,selectWrapper:y,scrollbar:m}},hl="ElSelect",vn=be({name:hl,componentName:hl,components:{ElInput:Nl,ElSelectMenu:cn,ElOption:rl,ElTag:tn,ElScrollbar:Ul,ElTooltip:Ql,ElIcon:nl},directives:{ClickOutside:_l},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:jl},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Gl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:ql},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:Fl},tagType:{...Ll.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[Y,El,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=ie("select"),v=ie("input"),{t:r}=sl(),d=pn(e),{optionsArray:a,selectSize:c,readonly:p,handleResize:y,collapseTagSize:m,debouncedOnInputChange:C,debouncedQueryChange:w,deletePrevTag:E,deleteTag:i,deleteSelected:h,handleOptionSelect:S,scrollToOption:I,setSelected:A,resetInputHeight:se,managePlaceholder:Me,showClose:ge,selectDisabled:re,iconComponent:L,iconReverse:ze,showNewOption:Be,emptyText:ae,toggleLastOptionHitState:Pe,resetInputState:De,handleComposition:K,onOptionCreate:j,onOptionDestroy:he,handleMenuEnter:ye,handleFocus:ue,blur:Ce,handleBlur:qe,handleClearClick:Fe,handleClose:We,handleKeydownEscape:Ae,toggleMenu:Ke,selectOption:He,getValueKey:_,navigateOptions:Re,dropMenuVisible:Ne,reference:ee,input:Se,tooltipRef:de,tags:je,selectWrapper:Q,scrollbar:Qe,queryChange:Ge,groupQueryChange:Ue}=fn(e,d,l),{focus:ce}=xl(ee),{inputWidth:pe,selected:Oe,inputLength:Xe,filteredOptionsCount:we,visible:Ze,softFocus:Je,selectedLabel:Ye,hoverIndex:Ie,query:ke,inputHovering:xe,currentPlaceholder:le,menuVisibleOnFocus:_e,isOnComposition:Ee,isSilentBlur:n,options:o,cachedOptions:s,optionsCount:u,prefixWidth:k,tagInMultiLine:G}=tl(d),U=g(()=>{const M=[t.b()],ne=$(c);return ne&&M.push(t.m(ne)),e.disabled&&M.push(t.m("disabled")),M}),N=g(()=>({maxWidth:`${$(pe)-32}px`,width:"100%"}));Il(Ve,$e({props:e,options:o,optionsArray:a,cachedOptions:s,optionsCount:u,filteredOptionsCount:we,hoverIndex:Ie,handleOptionSelect:S,onOptionCreate:j,onOptionDestroy:he,selectWrapper:Q,selected:Oe,setSelected:A,queryChange:Ge,groupQueryChange:Ue})),al(()=>{d.cachedPlaceHolder=le.value=e.placeholder||r("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(le.value=""),wl(Q,y),e.remote&&e.multiple&&se(),B(()=>{const M=ee.value&&ee.value.$el;if(!!M&&(pe.value=M.getBoundingClientRect().width,l.slots.prefix)){const ne=M.querySelector(`.${v.e("prefix")}`);k.value=Math.max(ne.getBoundingClientRect().width+5,30)}}),A()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Y,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Y,"");const D=g(()=>{var M,ne;return(ne=(M=de.value)==null?void 0:M.popperRef)==null?void 0:ne.contentRef});return{tagInMultiLine:G,prefixWidth:k,selectSize:c,readonly:p,handleResize:y,collapseTagSize:m,debouncedOnInputChange:C,debouncedQueryChange:w,deletePrevTag:E,deleteTag:i,deleteSelected:h,handleOptionSelect:S,scrollToOption:I,inputWidth:pe,selected:Oe,inputLength:Xe,filteredOptionsCount:we,visible:Ze,softFocus:Je,selectedLabel:Ye,hoverIndex:Ie,query:ke,inputHovering:xe,currentPlaceholder:le,menuVisibleOnFocus:_e,isOnComposition:Ee,isSilentBlur:n,options:o,resetInputHeight:se,managePlaceholder:Me,showClose:ge,selectDisabled:re,iconComponent:L,iconReverse:ze,showNewOption:Be,emptyText:ae,toggleLastOptionHitState:Pe,resetInputState:De,handleComposition:K,handleMenuEnter:ye,handleFocus:ue,blur:Ce,handleBlur:qe,handleClearClick:Fe,handleClose:We,handleKeydownEscape:Ae,toggleMenu:Ke,selectOption:He,getValueKey:_,navigateOptions:Re,dropMenuVisible:Ne,focus:ce,reference:ee,input:Se,tooltipRef:de,popperPaneRef:D,tags:je,selectWrapper:Q,scrollbar:Qe,wrapperKls:U,selectTagsStyle:N,nsSelect:t}}}),mn={class:"select-trigger"},bn=["disabled","autocomplete"],gn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function hn(e,l,t,v,r,d){const a=oe("el-tag"),c=oe("el-tooltip"),p=oe("el-icon"),y=oe("el-input"),m=oe("el-option"),C=oe("el-scrollbar"),w=oe("el-select-menu"),E=Wl("click-outside");return ve((b(),V("div",{ref:"selectWrapper",class:f(e.wrapperKls),onClick:l[22]||(l[22]=H((...i)=>e.toggleMenu&&e.toggleMenu(...i),["stop"]))},[te(c,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:O(()=>[T("div",mn,[e.multiple?(b(),V("div",{key:0,ref:"tags",class:f(e.nsSelect.e("tags")),style:J(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(b(),V("span",{key:0,class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[te(a,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=i=>e.deleteTag(i,e.selected[0]))},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-123+"px"})},Z(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(b(),P(a,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:O(()=>[e.collapseTagsTooltip?(b(),P(c,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-1),3)]),content:O(()=>[T("div",{class:f(e.nsSelect.e("collapse-tags"))},[(b(!0),V(ll,null,pl(e.selected.slice(1),(i,h)=>(b(),V("div",{key:h,class:f(e.nsSelect.e("collapse-tag"))},[(b(),P(a,{key:e.getValueKey(i),class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:S=>e.deleteTag(S,i)},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},Z(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(b(),V("span",{key:1,class:f(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-1),3))]),_:1},8,["size","type"])):z("v-if",!0)],2)):z("v-if",!0),z(" <div> "),e.collapseTags?z("v-if",!0):(b(),P(Sl,{key:1,onAfterLeave:e.resetInputHeight},{default:O(()=>[T("span",{class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),V(ll,null,pl(e.selected,i=>(b(),P(a,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:h=>e.deleteTag(h,i)},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},Z(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),z(" </div> "),e.filterable?ve((b(),V("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=i=>e.query=i),type:"text",class:f([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:J({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[3]||(l[3]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[4]||(l[4]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[5]||(l[5]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[6]||(l[6]=q(H(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(H(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q((...i)=>e.handleKeydownEscape&&e.handleKeydownEscape(...i),["esc"])),l[9]||(l[9]=q(H((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[11]||(l[11]=q(i=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[14]||(l[14]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[15]||(l[15]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,bn)),[[Al,e.query]]):z("v-if",!0)],6)):z("v-if",!0),te(y,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=i=>e.selectedLabel=i),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:f([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(H(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(H(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(H(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(i=>e.visible=!1,["tab"]))],onMouseenter:l[20]||(l[20]=i=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=i=>e.inputHovering=!1)},Kl({suffix:O(()=>[e.iconComponent&&!e.showClose?(b(),P(p,{key:0,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:O(()=>[(b(),P(fl(e.iconComponent)))]),_:1},8,["class"])):z("v-if",!0),e.showClose&&e.clearIcon?(b(),P(p,{key:1,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:O(()=>[(b(),P(fl(e.clearIcon)))]),_:1},8,["class","onClick"])):z("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:O(()=>[T("div",gn,[x(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:O(()=>[te(w,null,{default:O(()=>[ve(te(C,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:f([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:O(()=>[e.showNewOption?(b(),P(m,{key:0,value:e.query,created:!0},null,8,["value"])):z("v-if",!0),x(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[il,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(b(),V(ll,{key:0},[e.$slots.empty?x(e.$slots,"empty",{key:0}):(b(),V("p",{key:1,class:f(e.nsSelect.be("dropdown","empty"))},Z(e.emptyText),3))],64)):z("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[E,e.handleClose,e.popperPaneRef]])}var yn=me(vn,[["render",hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Cn=be({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),t=R(!0),v=ol(),r=R([]);Il(Tl,$e({...tl(e)}));const d=Le(Ve);al(()=>{r.value=a(v.subTree)});const a=p=>{const y=[];return Array.isArray(p.children)&&p.children.forEach(m=>{var C;m.type&&m.type.name==="ElOption"&&m.component&&m.component.proxy?y.push(m.component.proxy):(C=m.children)!=null&&C.length&&y.push(...a(m))}),y},{groupQueryChange:c}=Te(d);return W(c,()=>{t.value=r.value.some(p=>p.visible===!0)}),{visible:t,ns:l}}});function Sn(e,l,t,v,r,d){return ve((b(),V("ul",{class:f(e.ns.be("group","wrap"))},[T("li",{class:f(e.ns.be("group","title"))},Z(e.label),3),T("li",null,[T("ul",{class:f(e.ns.b("group"))},[x(e.$slots,"default")],2)])],2)),[[il,e.visible]])}var $l=me(Cn,[["render",Sn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Tn=Ol(yn,{Option:rl,OptionGroup:$l}),$n=kl(rl);kl($l);export{_l as C,$n as E,Tn as a};
