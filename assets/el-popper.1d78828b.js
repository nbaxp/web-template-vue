import{C as Q,D as Z,c as k,e as d,F as ee,k as m,G as te,H as A,i as O,I as ae,j as I,J as oe,l as H,L as W,o as C,b as B,w as J,M as le,N as se,O as R,n as _,v as $,T as re,_ as F,P as ne,p as K,d as Y,Q as ie,R as ce,S as N,U,V as j,W as ue,X as V,Y as me,Z as de,m as ve,$ as fe,q as he,r as pe,f as ge,a0 as be,z as ye}from"./index.8e778151.js";import{t as we}from"./index.09c7de01.js";const Oe=(a="")=>a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Fe=a=>Q(a),We="update:modelValue",Ye="change",Ue="input",G=Symbol("scrollbarContextKey");var Se={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Te=a=>(r,i)=>ke(r,i,d(a)),ke=(a,r,i)=>te(i,a,a).replace(/\{(\w+)\}/g,(o,c)=>{var u;return`${(u=r?.[c])!=null?u:`{${c}}`}`}),Ee=a=>{const r=k(()=>d(a).name),i=ee(a)?a:m(a);return{lang:r,locale:i,t:Te(a)}},je=()=>{const a=Z("locale");return Ee(k(()=>a.value||Se))},T=4,ze={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Ne=({move:a,size:r,bar:i})=>({[i.size]:r,transform:`translate${i.axis}(${a}%)`}),Ce=A({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),_e=O({__name:"thumb",props:Ce,setup(a){const r=a,i="Thumb",o=ae(G),c=I("scrollbar");o||we(i,"can not inject scrollbar context");const u=m(),s=m(),p=m({}),l=m(!1);let y=!1,w=!1,S=ne?document.onselectstart:null;const t=k(()=>ze[r.vertical?"vertical":"horizontal"]),L=k(()=>Ne({size:r.size,move:r.move,bar:t.value})),E=k(()=>u.value[t.value.offset]**2/o.wrapElement[t.value.scrollSize]/r.ratio/s.value[t.value.offset]),P=n=>{var v;if(n.stopPropagation(),n.ctrlKey||[1,2].includes(n.button))return;(v=window.getSelection())==null||v.removeAllRanges(),x(n);const f=n.currentTarget;!f||(p.value[t.value.axis]=f[t.value.offset]-(n[t.value.client]-f.getBoundingClientRect()[t.value.direction]))},D=n=>{if(!s.value||!u.value||!o.wrapElement)return;const v=Math.abs(n.target.getBoundingClientRect()[t.value.direction]-n[t.value.client]),f=s.value[t.value.offset]/2,b=(v-f)*100*E.value/u.value[t.value.offset];o.wrapElement[t.value.scroll]=b*o.wrapElement[t.value.scrollSize]/100},x=n=>{n.stopImmediatePropagation(),y=!0,document.addEventListener("mousemove",M),document.addEventListener("mouseup",z),S=document.onselectstart,document.onselectstart=()=>!1},M=n=>{if(!u.value||!s.value||y===!1)return;const v=p.value[t.value.axis];if(!v)return;const f=(u.value.getBoundingClientRect()[t.value.direction]-n[t.value.client])*-1,b=s.value[t.value.offset]-v,q=(f-b)*100*E.value/u.value[t.value.offset];o.wrapElement[t.value.scroll]=q*o.wrapElement[t.value.scrollSize]/100},z=()=>{y=!1,p.value[t.value.axis]=0,document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",z),h(),w&&(l.value=!1)},g=()=>{w=!1,l.value=!!r.size},e=()=>{w=!0,l.value=y};oe(()=>{h(),document.removeEventListener("mouseup",z)});const h=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return H(W(o,"scrollbarElement"),"mousemove",g),H(W(o,"scrollbarElement"),"mouseleave",e),(n,v)=>(C(),B(re,{name:d(c).b("fade"),persisted:""},{default:J(()=>[le(R("div",{ref_key:"instance",ref:u,class:_([d(c).e("bar"),d(c).is(d(t).key)]),onMousedown:D},[R("div",{ref_key:"thumb",ref:s,class:_(d(c).e("thumb")),style:$(d(L)),onMousedown:P},null,38)],34),[[se,n.always||l.value]])]),_:1},8,["name"]))}});var X=F(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Le=A({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),De=O({__name:"bar",props:Le,setup(a,{expose:r}){const i=a,o=m(0),c=m(0);return r({handleScroll:s=>{if(s){const p=s.offsetHeight-T,l=s.offsetWidth-T;c.value=s.scrollTop*100/p*i.ratioY,o.value=s.scrollLeft*100/l*i.ratioX}}}),(s,p)=>(C(),K(ie,null,[Y(X,{move:o.value,ratio:s.ratioX,size:s.width,always:s.always},null,8,["move","ratio","size","always"]),Y(X,{move:c.value,ratio:s.ratioY,size:s.height,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var Me=F(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Pe=A({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:ce([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),xe={scroll:({scrollTop:a,scrollLeft:r})=>[a,r].every(N)},He={name:"ElScrollbar"},Be=O({...He,props:Pe,emits:xe,setup(a,{expose:r,emit:i}){const o=a,c=I("scrollbar");let u,s;const p=m(),l=m(),y=m(),w=m("0"),S=m("0"),t=m(),L=m(1),E=m(1),P=k(()=>{const e={};return o.height&&(e.height=U(o.height)),o.maxHeight&&(e.maxHeight=U(o.maxHeight)),[o.wrapStyle,e]}),D=()=>{var e;l.value&&((e=t.value)==null||e.handleScroll(l.value),i("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function x(e,h){be(e)?l.value.scrollTo(e):N(e)&&N(h)&&l.value.scrollTo(e,h)}const M=e=>{!N(e)||(l.value.scrollTop=e)},z=e=>{!N(e)||(l.value.scrollLeft=e)},g=()=>{if(!l.value)return;const e=l.value.offsetHeight-T,h=l.value.offsetWidth-T,n=e**2/l.value.scrollHeight,v=h**2/l.value.scrollWidth,f=Math.max(n,o.minSize),b=Math.max(v,o.minSize);L.value=n/(e-n)/(f/(e-f)),E.value=v/(h-v)/(b/(h-b)),S.value=f+T<e?`${f}px`:"",w.value=b+T<h?`${b}px`:""};return j(()=>o.noresize,e=>{e?(u?.(),s?.()):({stop:u}=ue(y,g),s=H("resize",g))},{immediate:!0}),j(()=>[o.maxHeight,o.height],()=>{o.native||V(()=>{var e;g(),l.value&&((e=t.value)==null||e.handleScroll(l.value))})}),me(G,de({scrollbarElement:p,wrapElement:l})),ve(()=>{o.native||V(()=>{g()})}),fe(()=>g()),r({wrap$:l,update:g,scrollTo:x,setScrollTop:M,setScrollLeft:z,handleScroll:D}),(e,h)=>(C(),K("div",{ref_key:"scrollbar$",ref:p,class:_(d(c).b())},[R("div",{ref_key:"wrap$",ref:l,class:_([e.wrapClass,d(c).e("wrap"),{[d(c).em("wrap","hidden-default")]:!e.native}]),style:$(d(P)),onScroll:D},[(C(),B(pe(e.tag),{ref_key:"resize$",ref:y,class:_([d(c).e("view"),e.viewClass]),style:$(e.viewStyle)},{default:J(()=>[he(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?ge("v-if",!0):(C(),B(Me,{key:0,ref_key:"barRef",ref:t,height:S.value,width:w.value,always:e.always,"ratio-x":E.value,"ratio-y":L.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Re=F(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Ve=ye(Re);export{Ye as C,Ve as E,Ue as I,We as U,Fe as c,Oe as e,je as u};
