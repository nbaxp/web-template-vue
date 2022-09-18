import{d as hp,i as R0,b as Co,C as Pa}from"./el-tag.228ea367.js";import{b5 as Zm,b2 as j0,cg as F0,ch as V0,b1 as U0,ci as nn,bM as gp,cj as Jm,aR as Rt,G as jt,Q as it,bk as H0,aI as $0,_ as $n,i as yn,j as $t,H as Xn,k as Oe,U as qt,W as on,c as xe,ck as W0,cl as Y0,aL as q0,e as k,bB as G0,X as Ba,o as ve,b as Et,w as $e,n as ce,v as Xm,x as Hn,E as pt,r as vr,f as dt,p as Me,N as Se,q as Ei,a1 as at,aA as mp,at as Dt,m as K0,P as vt,a4 as Gt,a5 as Jn,L as fn,d as Ee,bZ as Q0,aC as Z0,av as J0,T as pp,aY as Jo,aa as fp,bg as kp,A as bp,J as Xo,M as Ao,cm as Mi,ar as za,as as Ar,cn as Si,a$ as La,al as wp,Y as Ha,co as X0,an as ey,ag as xi,ae as yr,O as ty,aw as vp,aj as ny,ab as Di,ac as ep,$ as _p,D as oy,cp as iy,cq as Ap,cr as ry,cd as sy}from"./index.8cf78fc7.js";import{a as ay,E as xr}from"./el-button.d43bdf49.js";import{u as Bn,E as cy}from"./el-popper.db34ff75.js";import{e as tp,a as ly,i as dy,T as uy}from"./index.2533d500.js";var np=Zm?Zm.isConcatSpreadable:void 0;function hy(T){return j0(T)||F0(T)||!!(np&&T&&T[np])}function Cp(T,I,x,_,E){var B=-1,A=T.length;for(x||(x=hy),E||(E=[]);++B<A;){var C=T[B];I>0&&x(C)?I>1?Cp(C,I-1,x,_,E):V0(E,C):_||(E[E.length]=C)}return E}function gy(T){var I=T==null?0:T.length;return I?Cp(T,1):[]}var my="Expected a function";function nx(T,I,x){var _=!0,E=!0;if(typeof T!="function")throw new TypeError(my);return U0(x)&&(_="leading"in x?!!x.leading:_,E="trailing"in x?!!x.trailing:E),hp(T,I,{leading:_,maxWait:I,trailing:E})}const py=["year","month","date","dates","week","datetime","datetimerange","daterange","monthrange"],ox=T=>[...new Set(T)],yo=T=>!T&&T!==0?[]:Array.isArray(T)?T:[T],$a=Symbol();var yp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){var x=1e3,_=6e4,E=36e5,B="millisecond",A="second",C="minute",m="hour",y="day",S="week",D="month",g="quarter",w="year",q="date",z="Invalid Date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ue={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},F=function(ie,Z,$){var ae=String(ie);return!ae||ae.length>=Z?ie:""+Array(Z+1-ae.length).join($)+ie},re={s:F,z:function(ie){var Z=-ie.utcOffset(),$=Math.abs(Z),ae=Math.floor($/60),se=$%60;return(Z<=0?"+":"-")+F(ae,2,"0")+":"+F(se,2,"0")},m:function ie(Z,$){if(Z.date()<$.date())return-ie($,Z);var ae=12*($.year()-Z.year())+($.month()-Z.month()),se=Z.clone().add(ae,D),X=$-se<0,N=Z.clone().add(ae+(X?-1:1),D);return+(-(ae+($-se)/(X?se-N:N-se))||0)},a:function(ie){return ie<0?Math.ceil(ie)||0:Math.floor(ie)},p:function(ie){return{M:D,y:w,w:S,d:y,D:q,h:m,m:C,s:A,ms:B,Q:g}[ie]||String(ie||"").toLowerCase().replace(/s$/,"")},u:function(ie){return ie===void 0}},ge="en",me={};me[ge]=ue;var K=function(ie){return ie instanceof be},te=function ie(Z,$,ae){var se;if(!Z)return ge;if(typeof Z=="string"){var X=Z.toLowerCase();me[X]&&(se=X),$&&(me[X]=$,se=X);var N=Z.split("-");if(!se&&N.length>1)return ie(N[0])}else{var W=Z.name;me[W]=Z,se=W}return!ae&&se&&(ge=se),se||!ae&&ge},Q=function(ie,Z){if(K(ie))return ie.clone();var $=typeof Z=="object"?Z:{};return $.date=ie,$.args=arguments,new be($)},oe=re;oe.l=te,oe.i=K,oe.w=function(ie,Z){return Q(ie,{locale:Z.$L,utc:Z.$u,x:Z.$x,$offset:Z.$offset})};var be=function(){function ie($){this.$L=te($.locale,null,!0),this.parse($)}var Z=ie.prototype;return Z.parse=function($){this.$d=function(ae){var se=ae.date,X=ae.utc;if(se===null)return new Date(NaN);if(oe.u(se))return new Date;if(se instanceof Date)return new Date(se);if(typeof se=="string"&&!/Z$/i.test(se)){var N=se.match(H);if(N){var W=N[2]-1||0,G=(N[7]||"0").substring(0,3);return X?new Date(Date.UTC(N[1],W,N[3]||1,N[4]||0,N[5]||0,N[6]||0,G)):new Date(N[1],W,N[3]||1,N[4]||0,N[5]||0,N[6]||0,G)}}return new Date(se)}($),this.$x=$.x||{},this.init()},Z.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},Z.$utils=function(){return oe},Z.isValid=function(){return this.$d.toString()!==z},Z.isSame=function($,ae){var se=Q($);return this.startOf(ae)<=se&&se<=this.endOf(ae)},Z.isAfter=function($,ae){return Q($)<this.startOf(ae)},Z.isBefore=function($,ae){return this.endOf(ae)<Q($)},Z.$g=function($,ae,se){return oe.u($)?this[ae]:this.set(se,$)},Z.unix=function(){return Math.floor(this.valueOf()/1e3)},Z.valueOf=function(){return this.$d.getTime()},Z.startOf=function($,ae){var se=this,X=!!oe.u(ae)||ae,N=oe.p($),W=function(ke,R){var Pe=oe.w(se.$u?Date.UTC(se.$y,R,ke):new Date(se.$y,R,ke),se);return X?Pe:Pe.endOf(y)},G=function(ke,R){return oe.w(se.toDate()[ke].apply(se.toDate("s"),(X?[0,0,0,0]:[23,59,59,999]).slice(R)),se)},L=this.$W,ee=this.$M,Ae=this.$D,j="set"+(this.$u?"UTC":"");switch(N){case w:return X?W(1,0):W(31,11);case D:return X?W(1,ee):W(0,ee+1);case S:var fe=this.$locale().weekStart||0,Ie=(L<fe?L+7:L)-fe;return W(X?Ae-Ie:Ae+(6-Ie),ee);case y:case q:return G(j+"Hours",0);case m:return G(j+"Minutes",1);case C:return G(j+"Seconds",2);case A:return G(j+"Milliseconds",3);default:return this.clone()}},Z.endOf=function($){return this.startOf($,!1)},Z.$set=function($,ae){var se,X=oe.p($),N="set"+(this.$u?"UTC":""),W=(se={},se[y]=N+"Date",se[q]=N+"Date",se[D]=N+"Month",se[w]=N+"FullYear",se[m]=N+"Hours",se[C]=N+"Minutes",se[A]=N+"Seconds",se[B]=N+"Milliseconds",se)[X],G=X===y?this.$D+(ae-this.$W):ae;if(X===D||X===w){var L=this.clone().set(q,1);L.$d[W](G),L.init(),this.$d=L.set(q,Math.min(this.$D,L.daysInMonth())).$d}else W&&this.$d[W](G);return this.init(),this},Z.set=function($,ae){return this.clone().$set($,ae)},Z.get=function($){return this[oe.p($)]()},Z.add=function($,ae){var se,X=this;$=Number($);var N=oe.p(ae),W=function(ee){var Ae=Q(X);return oe.w(Ae.date(Ae.date()+Math.round(ee*$)),X)};if(N===D)return this.set(D,this.$M+$);if(N===w)return this.set(w,this.$y+$);if(N===y)return W(1);if(N===S)return W(7);var G=(se={},se[C]=_,se[m]=E,se[A]=x,se)[N]||1,L=this.$d.getTime()+$*G;return oe.w(L,this)},Z.subtract=function($,ae){return this.add(-1*$,ae)},Z.format=function($){var ae=this,se=this.$locale();if(!this.isValid())return se.invalidDate||z;var X=$||"YYYY-MM-DDTHH:mm:ssZ",N=oe.z(this),W=this.$H,G=this.$m,L=this.$M,ee=se.weekdays,Ae=se.months,j=function(R,Pe,De,We){return R&&(R[Pe]||R(ae,X))||De[Pe].slice(0,We)},fe=function(R){return oe.s(W%12||12,R,"0")},Ie=se.meridiem||function(R,Pe,De){var We=R<12?"AM":"PM";return De?We.toLowerCase():We},ke={YY:String(this.$y).slice(-2),YYYY:this.$y,M:L+1,MM:oe.s(L+1,2,"0"),MMM:j(se.monthsShort,L,Ae,3),MMMM:j(Ae,L),D:this.$D,DD:oe.s(this.$D,2,"0"),d:String(this.$W),dd:j(se.weekdaysMin,this.$W,ee,2),ddd:j(se.weekdaysShort,this.$W,ee,3),dddd:ee[this.$W],H:String(W),HH:oe.s(W,2,"0"),h:fe(1),hh:fe(2),a:Ie(W,G,!0),A:Ie(W,G,!1),m:String(G),mm:oe.s(G,2,"0"),s:String(this.$s),ss:oe.s(this.$s,2,"0"),SSS:oe.s(this.$ms,3,"0"),Z:N};return X.replace(J,function(R,Pe){return Pe||ke[R]||N.replace(":","")})},Z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},Z.diff=function($,ae,se){var X,N=oe.p(ae),W=Q($),G=(W.utcOffset()-this.utcOffset())*_,L=this-W,ee=oe.m(this,W);return ee=(X={},X[w]=ee/12,X[D]=ee,X[g]=ee/3,X[S]=(L-G)/6048e5,X[y]=(L-G)/864e5,X[m]=L/E,X[C]=L/_,X[A]=L/x,X)[N]||L,se?ee:oe.a(ee)},Z.daysInMonth=function(){return this.endOf(D).$D},Z.$locale=function(){return me[this.$L]},Z.locale=function($,ae){if(!$)return this.$L;var se=this.clone(),X=te($,ae,!0);return X&&(se.$L=X),se},Z.clone=function(){return oe.w(this.$d,this)},Z.toDate=function(){return new Date(this.valueOf())},Z.toJSON=function(){return this.isValid()?this.toISOString():null},Z.toISOString=function(){return this.$d.toISOString()},Z.toString=function(){return this.$d.toUTCString()},ie}(),Ce=be.prototype;return Q.prototype=Ce,[["$ms",B],["$s",A],["$m",C],["$H",m],["$W",y],["$M",D],["$y",w],["$D",q]].forEach(function(ie){Ce[ie[1]]=function(Z){return this.$g(Z,ie[0],ie[1])}}),Q.extend=function(ie,Z){return ie.$i||(ie(Z,be,Q),ie.$i=!0),Q},Q.locale=te,Q.isDayjs=K,Q.unix=function(ie){return Q(1e3*ie)},Q.en=me[ge],Q.Ls=me,Q.p={},Q})})(yp);const Be=yp.exports;var xp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_,E){var B=_.prototype,A=function(D){return D&&(D.indexOf?D:D.s)},C=function(D,g,w,q,z){var H=D.name?D:D.$locale(),J=A(H[g]),ue=A(H[w]),F=J||ue.map(function(ge){return ge.slice(0,q)});if(!z)return F;var re=H.weekStart;return F.map(function(ge,me){return F[(me+(re||0))%7]})},m=function(){return E.Ls[E.locale()]},y=function(D,g){return D.formats[g]||function(w){return w.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,z,H){return z||H.slice(1)})}(D.formats[g.toUpperCase()])},S=function(){var D=this;return{months:function(g){return g?g.format("MMMM"):C(D,"months")},monthsShort:function(g){return g?g.format("MMM"):C(D,"monthsShort","months",3)},firstDayOfWeek:function(){return D.$locale().weekStart||0},weekdays:function(g){return g?g.format("dddd"):C(D,"weekdays")},weekdaysMin:function(g){return g?g.format("dd"):C(D,"weekdaysMin","weekdays",2)},weekdaysShort:function(g){return g?g.format("ddd"):C(D,"weekdaysShort","weekdays",3)},longDateFormat:function(g){return y(D.$locale(),g)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};B.localeData=function(){return S.bind(this)()},E.localeData=function(){var D=m();return{firstDayOfWeek:function(){return D.weekStart||0},weekdays:function(){return E.weekdays()},weekdaysShort:function(){return E.weekdaysShort()},weekdaysMin:function(){return E.weekdaysMin()},months:function(){return E.months()},monthsShort:function(){return E.monthsShort()},longDateFormat:function(g){return y(D,g)},meridiem:D.meridiem,ordinal:D.ordinal}},E.months=function(){return C(m(),"months")},E.monthsShort=function(){return C(m(),"monthsShort","months",3)},E.weekdays=function(D){return C(m(),"weekdays",null,null,D)},E.weekdaysShort=function(D){return C(m(),"weekdaysShort","weekdays",3,D)},E.weekdaysMin=function(D){return C(m(),"weekdaysMin","weekdays",2,D)}}})})(xp);const fy=xp.exports;var Dp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){var x={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},_=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,E=/\d\d/,B=/\d\d?/,A=/\d*[^-_:/,()\s\d]+/,C={},m=function(z){return(z=+z)+(z>68?1900:2e3)},y=function(z){return function(H){this[z]=+H}},S=[/[+-]\d\d:?(\d\d)?|Z/,function(z){(this.zone||(this.zone={})).offset=function(H){if(!H||H==="Z")return 0;var J=H.match(/([+-]|\d\d)/g),ue=60*J[1]+(+J[2]||0);return ue===0?0:J[0]==="+"?-ue:ue}(z)}],D=function(z){var H=C[z];return H&&(H.indexOf?H:H.s.concat(H.f))},g=function(z,H){var J,ue=C.meridiem;if(ue){for(var F=1;F<=24;F+=1)if(z.indexOf(ue(F,0,H))>-1){J=F>12;break}}else J=z===(H?"pm":"PM");return J},w={A:[A,function(z){this.afternoon=g(z,!1)}],a:[A,function(z){this.afternoon=g(z,!0)}],S:[/\d/,function(z){this.milliseconds=100*+z}],SS:[E,function(z){this.milliseconds=10*+z}],SSS:[/\d{3}/,function(z){this.milliseconds=+z}],s:[B,y("seconds")],ss:[B,y("seconds")],m:[B,y("minutes")],mm:[B,y("minutes")],H:[B,y("hours")],h:[B,y("hours")],HH:[B,y("hours")],hh:[B,y("hours")],D:[B,y("day")],DD:[E,y("day")],Do:[A,function(z){var H=C.ordinal,J=z.match(/\d+/);if(this.day=J[0],H)for(var ue=1;ue<=31;ue+=1)H(ue).replace(/\[|\]/g,"")===z&&(this.day=ue)}],M:[B,y("month")],MM:[E,y("month")],MMM:[A,function(z){var H=D("months"),J=(D("monthsShort")||H.map(function(ue){return ue.slice(0,3)})).indexOf(z)+1;if(J<1)throw new Error;this.month=J%12||J}],MMMM:[A,function(z){var H=D("months").indexOf(z)+1;if(H<1)throw new Error;this.month=H%12||H}],Y:[/[+-]?\d+/,y("year")],YY:[E,function(z){this.year=m(z)}],YYYY:[/\d{4}/,y("year")],Z:S,ZZ:S};function q(z){var H,J;H=z,J=C&&C.formats;for(var ue=(z=H.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,oe,be){var Ce=be&&be.toUpperCase();return oe||J[be]||x[be]||J[Ce].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(ie,Z,$){return Z||$.slice(1)})})).match(_),F=ue.length,re=0;re<F;re+=1){var ge=ue[re],me=w[ge],K=me&&me[0],te=me&&me[1];ue[re]=te?{regex:K,parser:te}:ge.replace(/^\[|\]$/g,"")}return function(Q){for(var oe={},be=0,Ce=0;be<F;be+=1){var ie=ue[be];if(typeof ie=="string")Ce+=ie.length;else{var Z=ie.regex,$=ie.parser,ae=Q.slice(Ce),se=Z.exec(ae)[0];$.call(oe,se),Q=Q.replace(se,"")}}return function(X){var N=X.afternoon;if(N!==void 0){var W=X.hours;N?W<12&&(X.hours+=12):W===12&&(X.hours=0),delete X.afternoon}}(oe),oe}}return function(z,H,J){J.p.customParseFormat=!0,z&&z.parseTwoDigitYear&&(m=z.parseTwoDigitYear);var ue=H.prototype,F=ue.parse;ue.parse=function(re){var ge=re.date,me=re.utc,K=re.args;this.$u=me;var te=K[1];if(typeof te=="string"){var Q=K[2]===!0,oe=K[3]===!0,be=Q||oe,Ce=K[2];oe&&(Ce=K[2]),C=this.$locale(),!Q&&Ce&&(C=J.Ls[Ce]),this.$d=function(ae,se,X){try{if(["x","X"].indexOf(se)>-1)return new Date((se==="X"?1e3:1)*ae);var N=q(se)(ae),W=N.year,G=N.month,L=N.day,ee=N.hours,Ae=N.minutes,j=N.seconds,fe=N.milliseconds,Ie=N.zone,ke=new Date,R=L||(W||G?1:ke.getDate()),Pe=W||ke.getFullYear(),De=0;W&&!G||(De=G>0?G-1:ke.getMonth());var We=ee||0,He=Ae||0,gt=j||0,Nt=fe||0;return Ie?new Date(Date.UTC(Pe,De,R,We,He,gt,Nt+60*Ie.offset*1e3)):X?new Date(Date.UTC(Pe,De,R,We,He,gt,Nt)):new Date(Pe,De,R,We,He,gt,Nt)}catch{return new Date("")}}(ge,te,me),this.init(),Ce&&Ce!==!0&&(this.$L=this.locale(Ce).$L),be&&ge!=this.format(te)&&(this.$d=new Date("")),C={}}else if(te instanceof Array)for(var ie=te.length,Z=1;Z<=ie;Z+=1){K[1]=te[Z-1];var $=J.apply(this,K);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}Z===ie&&(this.$d=new Date(""))}else F.call(this,re)}}})})(Dp);const ky=Dp.exports,op=["hours","minutes","seconds"],ip="HH:mm:ss",Zo="YYYY-MM-DD",by={date:Zo,dates:Zo,week:"gggg[w]ww",year:"YYYY",month:"YYYY-MM",datetime:`${Zo} ${ip}`,monthrange:"YYYY-MM",daterange:Zo,datetimerange:`${Zo} ${ip}`},Ia=(T,I)=>[T>0?T-1:void 0,T,T<I?T+1:void 0],Ep=T=>Array.from(Array.from({length:T}).keys()),Mp=T=>T.replace(/\W?m{1,2}|\W?ZZ/g,"").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi,"").trim(),Sp=T=>T.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g,"").trim(),rp=function(T,I){const x=Jm(T),_=Jm(I);return x&&_?T.getTime()===I.getTime():!x&&!_?T===I:!1},sp=function(T,I){const x=Rt(T),_=Rt(I);return x&&_?T.length!==I.length?!1:T.every((E,B)=>rp(E,I[B])):!x&&!_?rp(T,I):!1},ap=function(T,I,x){const _=gp(I)||I==="x"?Be(T).locale(x):Be(T,I).locale(x);return _.isValid()?_:void 0},cp=function(T,I,x){return gp(I)?T:I==="x"?+T:Be(T).locale(x).format(I)},Ta=(T,I)=>{var x;const _=[],E=I?.();for(let B=0;B<T;B++)_.push((x=E?.includes(B))!=null?x:!1);return _},Ip=jt({disabledHours:{type:it(Function)},disabledMinutes:{type:it(Function)},disabledSeconds:{type:it(Function)}}),wy=jt({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Tp=jt({id:{type:it([Array,String])},name:{type:it([Array,String]),default:""},popperClass:{type:String,default:""},format:String,valueFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:it([String,Object]),default:H0},editable:{type:Boolean,default:!0},prefixIcon:{type:it([String,Object]),default:""},size:$0,readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},popperOptions:{type:it(Object),default:()=>({})},modelValue:{type:it([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:it([Date,Array])},defaultTime:{type:it([Date,Array])},isRange:{type:Boolean,default:!1},...Ip,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:{type:Boolean,default:!1},label:{type:String,default:void 0},tabindex:{type:it([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean}),vy=["id","name","placeholder","value","disabled","readonly"],_y=["id","name","placeholder","value","disabled","readonly"],Ay={name:"Picker"},Cy=yn({...Ay,props:Tp,emits:["update:modelValue","change","focus","blur","calendar-change","panel-change","visible-change","keydown"],setup(T,{expose:I,emit:x}){const _=T,{lang:E}=Bn(),B=$t("date"),A=$t("input"),C=$t("range"),{form:m,formItem:y}=ay(),S=Xn("ElPopperOptions",{}),D=Oe(),g=Oe(),w=Oe(!1),q=Oe(!1),z=Oe(null);let H=!1,J=!1;qt(w,P=>{P?z.value=_.modelValue:(Te.value=null,on(()=>{ue(_.modelValue)}))});const ue=(P,_e)=>{(_e||!sp(P,z.value))&&(x("change",P),_.validateEvent&&y?.validate("change").catch(de=>tp()))},F=P=>{if(!sp(_.modelValue,P)){let _e;Rt(P)?_e=P.map(de=>cp(de,_.valueFormat,E.value)):P&&(_e=cp(P,_.valueFormat,E.value)),x("update:modelValue",P&&_e,E.value)}},re=P=>{x("keydown",P)},ge=xe(()=>{if(g.value){const P=He.value?g.value:g.value.$el;return Array.from(P.querySelectorAll("input"))}return[]}),me=(P,_e,de)=>{const le=ge.value;!le.length||(!de||de==="min"?(le[0].setSelectionRange(P,_e),le[0].focus()):de==="max"&&(le[1].setSelectionRange(P,_e),le[1].focus()))},K=()=>{$(!0,!0),on(()=>{J=!1})},te=(P="",_e=!1)=>{_e||K(),w.value=_e;let de;Rt(P)?de=P.map(le=>le.toDate()):de=P&&P.toDate(),Te.value=null,F(de)},Q=()=>{q.value=!0},oe=()=>{x("visible-change",!0)},be=P=>{P?.key===Dt.esc&&$(!0,!0)},Ce=()=>{q.value=!1,J=!1,x("visible-change",!1)},ie=()=>{w.value=!0},Z=()=>{w.value=!1},$=(P=!0,_e=!1)=>{J=_e;const[de,le]=k(ge);let ye=de;!P&&He.value&&(ye=le),ye&&ye.focus()},ae=P=>{_.readonly||N.value||w.value||J||(w.value=dy(P?.relatedTarget),x("focus",P))};let se;const X=P=>{const _e=async()=>{setTimeout(()=>{var de;se===_e&&(!(((de=D.value)==null?void 0:de.isFocusInsideContent())&&!H)&&ge.value.filter(le=>le.contains(document.activeElement)).length===0&&(Ft(),w.value=!1,x("blur",P),_.validateEvent&&y?.validate("blur").catch(le=>tp())),H=!1)},0)};se=_e,_e()},N=xe(()=>_.disabled||m?.disabled),W=xe(()=>{let P;if(ke.value?V.value.getDefaultValue&&(P=V.value.getDefaultValue()):Rt(_.modelValue)?P=_.modelValue.map(_e=>ap(_e,_.valueFormat,E.value)):P=ap(_.modelValue,_.valueFormat,E.value),V.value.getRangeAvailableTime){const _e=V.value.getRangeAvailableTime(P);R0(_e,P)||(P=_e,F(Rt(P)?P.map(de=>de.toDate()):P.toDate()))}return Rt(P)&&P.some(_e=>!_e)&&(P=[]),P}),G=xe(()=>{if(!V.value.panelReady)return"";const P=Pt(W.value);return Rt(Te.value)?[Te.value[0]||P&&P[0]||"",Te.value[1]||P&&P[1]||""]:Te.value!==null?Te.value:!ee.value&&ke.value||!w.value&&ke.value?"":P?Ae.value?P.join(", "):P:""}),L=xe(()=>_.type.includes("time")),ee=xe(()=>_.type.startsWith("time")),Ae=xe(()=>_.type==="dates"),j=xe(()=>_.prefixIcon||(L.value?W0:Y0)),fe=Oe(!1),Ie=P=>{_.readonly||N.value||fe.value&&(P.stopPropagation(),K(),F(null),ue(null,!0),fe.value=!1,w.value=!1,V.value.handleClear&&V.value.handleClear())},ke=xe(()=>{const{modelValue:P}=_;return!P||Rt(P)&&!P.filter(Boolean).length}),R=async P=>{var _e;_.readonly||N.value||(((_e=P.target)==null?void 0:_e.tagName)!=="INPUT"||ge.value.includes(document.activeElement))&&(w.value=!0)},Pe=()=>{_.readonly||N.value||!ke.value&&_.clearable&&(fe.value=!0)},De=()=>{fe.value=!1},We=P=>{var _e;(((_e=P.touches[0].target)==null?void 0:_e.tagName)!=="INPUT"||ge.value.includes(document.activeElement))&&(w.value=!0)},He=xe(()=>_.type.includes("range")),gt=q0(),Nt=xe(()=>{var P,_e;return(_e=(P=k(D))==null?void 0:P.popperRef)==null?void 0:_e.contentRef}),rt=xe(()=>{var P;return k(He)?k(g):(P=k(g))==null?void 0:P.$el});G0(rt,P=>{const _e=k(Nt),de=k(rt);_e&&(P.target===_e||P.composedPath().includes(_e))||P.target===de||P.composedPath().includes(de)||(w.value=!1)});const Te=Oe(null),Ft=()=>{if(Te.value){const P=Kt(G.value);P&&ut(P)&&(F(Rt(P)?P.map(_e=>_e.toDate()):P.toDate()),Te.value=null)}Te.value===""&&(F(null),ue(null),Te.value=null)},Kt=P=>P?V.value.parseUserInput(P):null,Pt=P=>P?V.value.formatToString(P):null,ut=P=>V.value.isValidValue(P),kn=async P=>{if(_.readonly||N.value)return;const{code:_e}=P;if(re(P),_e===Dt.esc){w.value===!0&&(w.value=!1,P.preventDefault(),P.stopPropagation());return}if(_e===Dt.down&&(V.value.handleFocusPicker&&(P.preventDefault(),P.stopPropagation()),w.value===!1&&(w.value=!0,await on()),V.value.handleFocusPicker)){V.value.handleFocusPicker();return}if(_e===Dt.tab){H=!0;return}if(_e===Dt.enter||_e===Dt.numpadEnter){(Te.value===null||Te.value===""||ut(Kt(G.value)))&&(Ft(),w.value=!1),P.stopPropagation();return}if(Te.value){P.stopPropagation();return}V.value.handleKeydownInput&&V.value.handleKeydownInput(P)},Qt=P=>{Te.value=P,w.value||(w.value=!0)},Je=P=>{const _e=P.target;Te.value?Te.value=[_e.value,Te.value[1]]:Te.value=[_e.value,null]},_t=P=>{const _e=P.target;Te.value?Te.value=[Te.value[0],_e.value]:Te.value=[null,_e.value]},bt=()=>{var P;const _e=Te.value,de=Kt(_e&&_e[0]),le=k(W);if(de&&de.isValid()){Te.value=[Pt(de),((P=G.value)==null?void 0:P[1])||null];const ye=[de,le&&(le[1]||null)];ut(ye)&&(F(ye),Te.value=null)}},rn=()=>{var P;const _e=k(Te),de=Kt(_e&&_e[1]),le=k(W);if(de&&de.isValid()){Te.value=[((P=k(G))==null?void 0:P[0])||null,Pt(de)];const ye=[le&&le[0],de];ut(ye)&&(F(ye),Te.value=null)}},V=Oe({}),pe=P=>{V.value[P[0]]=P[1],V.value.panelReady=!0},Re=P=>{x("calendar-change",P)},Mt=(P,_e,de)=>{x("panel-change",P,_e,de)};return Ba("EP_PICKER_BASE",{props:_}),I({focus:$,handleFocusInput:ae,handleBlurInput:X,handleOpen:ie,handleClose:Z,onPick:te}),(P,_e)=>(ve(),Et(k(ly),mp({ref_key:"refPopper",ref:D,visible:w.value,effect:"light",pure:"",trigger:"click"},P.$attrs,{role:"dialog",teleported:"",transition:`${k(B).namespace.value}-zoom-in-top`,"popper-class":[`${k(B).namespace.value}-picker__popper`,P.popperClass],"popper-options":k(S),"fallback-placements":["bottom","top","right","left"],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:Q,onShow:oe,onHide:Ce}),{default:$e(()=>[k(He)?(ve(),Me("div",{key:1,ref_key:"inputRef",ref:g,class:ce([k(B).b("editor"),k(B).bm("editor",P.type),k(A).e("wrapper"),k(B).is("disabled",k(N)),k(B).is("active",w.value),k(C).b("editor"),k(gt)?k(C).bm("editor",k(gt)):"",P.$attrs.class]),style:Xm(P.$attrs.style),onClick:ae,onMouseenter:Pe,onMouseleave:De,onTouchstart:We,onKeydown:kn},[k(j)?(ve(),Et(k(pt),{key:0,class:ce([k(A).e("icon"),k(C).e("icon")]),onMousedown:Hn(R,["prevent"]),onTouchstart:We},{default:$e(()=>[(ve(),Et(vr(k(j))))]),_:1},8,["class","onMousedown"])):dt("v-if",!0),Se("input",{id:P.id&&P.id[0],autocomplete:"off",name:P.name&&P.name[0],placeholder:P.startPlaceholder,value:k(G)&&k(G)[0],disabled:k(N),readonly:!P.editable||P.readonly,class:ce(k(C).b("input")),onMousedown:R,onInput:Je,onChange:bt,onFocus:ae,onBlur:X},null,42,vy),Ei(P.$slots,"range-separator",{},()=>[Se("span",{class:ce(k(C).b("separator"))},at(P.rangeSeparator),3)]),Se("input",{id:P.id&&P.id[1],autocomplete:"off",name:P.name&&P.name[1],placeholder:P.endPlaceholder,value:k(G)&&k(G)[1],disabled:k(N),readonly:!P.editable||P.readonly,class:ce(k(C).b("input")),onMousedown:R,onFocus:ae,onBlur:X,onInput:_t,onChange:rn},null,42,_y),P.clearIcon?(ve(),Et(k(pt),{key:1,class:ce([k(A).e("icon"),k(C).e("close-icon"),{[k(C).e("close-icon--hidden")]:!fe.value}]),onClick:Ie},{default:$e(()=>[(ve(),Et(vr(P.clearIcon)))]),_:1},8,["class"])):dt("v-if",!0)],38)):(ve(),Et(k(Co),{key:0,id:P.id,ref_key:"inputRef",ref:g,"container-role":"combobox","model-value":k(G),name:P.name,size:k(gt),disabled:k(N),placeholder:P.placeholder,class:ce([k(B).b("editor"),k(B).bm("editor",P.type),P.$attrs.class]),style:Xm(P.$attrs.style),readonly:!P.editable||P.readonly||k(Ae)||P.type==="week",label:P.label,tabindex:P.tabindex,"validate-event":!1,onInput:Qt,onFocus:ae,onBlur:X,onKeydown:kn,onChange:Ft,onMousedown:R,onMouseenter:Pe,onMouseleave:De,onTouchstart:We,onClick:_e[0]||(_e[0]=Hn(()=>{},["stop"]))},{prefix:$e(()=>[k(j)?(ve(),Et(k(pt),{key:0,class:ce(k(A).e("icon")),onMousedown:Hn(R,["prevent"]),onTouchstart:We},{default:$e(()=>[(ve(),Et(vr(k(j))))]),_:1},8,["class","onMousedown"])):dt("v-if",!0)]),suffix:$e(()=>[fe.value&&P.clearIcon?(ve(),Et(k(pt),{key:0,class:ce(`${k(A).e("icon")} clear-icon`),onClick:Hn(Ie,["stop"])},{default:$e(()=>[(ve(),Et(vr(P.clearIcon)))]),_:1},8,["class","onClick"])):dt("v-if",!0)]),_:1},8,["id","model-value","name","size","disabled","placeholder","class","style","readonly","label","tabindex","onKeydown"]))]),content:$e(()=>[Ei(P.$slots,"default",{visible:w.value,actualVisible:q.value,parsedValue:k(W),format:P.format,unlinkPanels:P.unlinkPanels,type:P.type,defaultValue:P.defaultValue,onPick:te,onSelectRange:me,onSetPickerOption:pe,onCalendarChange:Re,onPanelChange:Mt,onKeydown:be,onMousedown:_e[1]||(_e[1]=Hn(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options"]))}});var yy=$n(Cy,[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);const xy=jt({...wy,datetimeRole:String,parsedValue:{type:it(Object)}}),Dy=({getAvailableHours:T,getAvailableMinutes:I,getAvailableSeconds:x})=>{const _=(A,C,m,y)=>{const S={hour:T,minute:I,second:x};let D=A;return["hour","minute","second"].forEach(g=>{if(S[g]){let w;const q=S[g];switch(g){case"minute":{w=q(D.hour(),C,y);break}case"second":{w=q(D.hour(),D.minute(),C,y);break}default:{w=q(C,y);break}}if(w?.length&&!w.includes(D[g]())){const z=m?0:w.length-1;D=D[g](w[z])}}}),D},E={};return{timePickerOptions:E,getAvailableTime:_,onSetOption:([A,C])=>{E[A]=C}}},Na=T=>{const I=(_,E)=>_||E,x=_=>_!==!0;return T.map(I).filter(x)},Np=(T,I,x)=>({getHoursList:(A,C)=>Ta(24,T&&(()=>T?.(A,C))),getMinutesList:(A,C,m)=>Ta(60,I&&(()=>I?.(A,C,m))),getSecondsList:(A,C,m,y)=>Ta(60,x&&(()=>x?.(A,C,m,y)))}),Ey=(T,I,x)=>{const{getHoursList:_,getMinutesList:E,getSecondsList:B}=Np(T,I,x);return{getAvailableHours:(y,S)=>Na(_(y,S)),getAvailableMinutes:(y,S,D)=>Na(E(y,S,D)),getAvailableSeconds:(y,S,D,g)=>Na(B(y,S,D,g))}},My=T=>{const I=Oe(T.parsedValue);return qt(()=>T.visible,x=>{x||(I.value=T.parsedValue)}),I},Sy=100,Iy=600,lp={beforeMount(T,I){let x=null,_=null;const E=()=>I.value&&I.value(),B=()=>{_&&(clearTimeout(_),_=null),x&&(clearInterval(x),x=null)};T.addEventListener("mousedown",A=>{A.button===0&&(E(),document.addEventListener("mouseup",B,{once:!0}),B(),_=setTimeout(()=>{x=setInterval(()=>{E()},Sy)},Iy))})}},Ty=jt({role:{type:String,required:!0},spinnerDate:{type:it(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:it(String),default:""},...Ip}),Ny=["onClick"],Py=["onMouseenter"],By=yn({__name:"basic-time-spinner",props:Ty,emits:["change","select-range","set-option"],setup(T,{emit:I}){const x=T,_=$t("time"),{getHoursList:E,getMinutesList:B,getSecondsList:A}=Np(x.disabledHours,x.disabledMinutes,x.disabledSeconds);let C=!1;const m=Oe(),y=Oe(),S=Oe(),D=Oe(),g={hours:y,minutes:S,seconds:D},w=xe(()=>x.showSeconds?op:op.slice(0,2)),q=xe(()=>{const{spinnerDate:N}=x,W=N.hour(),G=N.minute(),L=N.second();return{hours:W,minutes:G,seconds:L}}),z=xe(()=>{const{hours:N,minutes:W}=k(q);return{hours:E(x.role),minutes:B(N,x.role),seconds:A(N,W,x.role)}}),H=xe(()=>{const{hours:N,minutes:W,seconds:G}=k(q);return{hours:Ia(N,23),minutes:Ia(W,59),seconds:Ia(G,59)}}),J=hp(N=>{C=!1,re(N)},200),ue=N=>{if(!!!x.amPmMode)return"";const G=x.amPmMode==="A";let L=N<12?" am":" pm";return G&&(L=L.toUpperCase()),L},F=N=>{let W;switch(N){case"hours":W=[0,2];break;case"minutes":W=[3,5];break;case"seconds":W=[6,8];break}const[G,L]=W;I("select-range",G,L),m.value=N},re=N=>{K(N,k(q)[N])},ge=()=>{re("hours"),re("minutes"),re("seconds")},me=N=>N.querySelector(`.${_.namespace.value}-scrollbar__wrap`),K=(N,W)=>{if(x.arrowControl)return;const G=k(g[N]);G&&G.$el&&(me(G.$el).scrollTop=Math.max(0,W*te(N)))},te=N=>{const W=k(g[N]);return W?.$el.querySelector("li").offsetHeight||0},Q=()=>{be(1)},oe=()=>{be(-1)},be=N=>{m.value||F("hours");const W=m.value,G=k(q)[W],L=m.value==="hours"?24:60,ee=Ce(W,G,N,L);ie(W,ee),K(W,ee),on(()=>F(W))},Ce=(N,W,G,L)=>{let ee=(W+G+L)%L;const Ae=k(z)[N];for(;Ae[ee]&&ee!==W;)ee=(ee+G+L)%L;return ee},ie=(N,W)=>{if(k(z)[N][W])return;const{hours:ee,minutes:Ae,seconds:j}=k(q);let fe;switch(N){case"hours":fe=x.spinnerDate.hour(W).minute(Ae).second(j);break;case"minutes":fe=x.spinnerDate.hour(ee).minute(W).second(j);break;case"seconds":fe=x.spinnerDate.hour(ee).minute(Ae).second(W);break}I("change",fe)},Z=(N,{value:W,disabled:G})=>{G||(ie(N,W),F(N),K(N,W))},$=N=>{C=!0,J(N);const W=Math.min(Math.round((me(k(g[N]).$el).scrollTop-(ae(N)*.5-10)/te(N)+3)/te(N)),N==="hours"?23:59);ie(N,W)},ae=N=>k(g[N]).$el.offsetHeight,se=()=>{const N=W=>{const G=k(g[W]);G&&G.$el&&(me(G.$el).onscroll=()=>{$(W)})};N("hours"),N("minutes"),N("seconds")};K0(()=>{on(()=>{!x.arrowControl&&se(),ge(),x.role==="start"&&F("hours")})});const X=(N,W)=>{g[W].value=N};return I("set-option",[`${x.role}_scrollDown`,be]),I("set-option",[`${x.role}_emitSelectRange`,F]),qt(()=>x.spinnerDate,()=>{C||ge()}),(N,W)=>(ve(),Me("div",{class:ce([k(_).b("spinner"),{"has-seconds":N.showSeconds}])},[N.arrowControl?dt("v-if",!0):(ve(!0),Me(vt,{key:0},Gt(k(w),G=>(ve(),Et(k(cy),{key:G,ref_for:!0,ref:L=>X(L,G),class:ce(k(_).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":k(_).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:L=>F(G),onMousemove:L=>re(G)},{default:$e(()=>[(ve(!0),Me(vt,null,Gt(k(z)[G],(L,ee)=>(ve(),Me("li",{key:ee,class:ce([k(_).be("spinner","item"),k(_).is("active",ee===k(q)[G]),k(_).is("disabled",L)]),onClick:Ae=>Z(G,{value:ee,disabled:L})},[G==="hours"?(ve(),Me(vt,{key:0},[Jn(at(("0"+(N.amPmMode?ee%12||12:ee)).slice(-2))+at(ue(ee)),1)],64)):(ve(),Me(vt,{key:1},[Jn(at(("0"+ee).slice(-2)),1)],64))],10,Ny))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),N.arrowControl?(ve(!0),Me(vt,{key:1},Gt(k(w),G=>(ve(),Me("div",{key:G,class:ce([k(_).be("spinner","wrapper"),k(_).is("arrow")]),onMouseenter:L=>F(G)},[fn((ve(),Et(k(pt),{class:ce(["arrow-up",k(_).be("spinner","arrow")])},{default:$e(()=>[Ee(k(Q0))]),_:1},8,["class"])),[[k(lp),oe]]),fn((ve(),Et(k(pt),{class:ce(["arrow-down",k(_).be("spinner","arrow")])},{default:$e(()=>[Ee(k(Z0))]),_:1},8,["class"])),[[k(lp),Q]]),Se("ul",{class:ce(k(_).be("spinner","list"))},[(ve(!0),Me(vt,null,Gt(k(H)[G],(L,ee)=>(ve(),Me("li",{key:ee,class:ce([k(_).be("spinner","item"),k(_).is("active",L===k(q)[G]),k(_).is("disabled",k(z)[G][L])])},[typeof L=="number"?(ve(),Me(vt,{key:0},[G==="hours"?(ve(),Me(vt,{key:0},[Jn(at(("0"+(N.amPmMode?L%12||12:L)).slice(-2))+at(ue(L)),1)],64)):(ve(),Me(vt,{key:1},[Jn(at(("0"+L).slice(-2)),1)],64))],64)):dt("v-if",!0)],2))),128))],2)],42,Py))),128)):dt("v-if",!0)],2))}});var zy=$n(By,[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);const Ly=yn({__name:"panel-time-pick",props:xy,emits:["pick","select-range","set-picker-option"],setup(T,{emit:I}){const x=T,_=Xn("EP_PICKER_BASE"),{arrowControl:E,disabledHours:B,disabledMinutes:A,disabledSeconds:C,defaultValue:m}=_.props,{getAvailableHours:y,getAvailableMinutes:S,getAvailableSeconds:D}=Ey(B,A,C),g=$t("time"),{t:w,lang:q}=Bn(),z=Oe([0,2]),H=My(x),J=xe(()=>J0(x.actualVisible)?`${g.namespace.value}-zoom-in-top`:""),ue=xe(()=>x.format.includes("ss")),F=xe(()=>x.format.includes("A")?"A":x.format.includes("a")?"a":""),re=X=>{const N=Be(X).locale(q.value),W=Z(N);return N.isSame(W)},ge=()=>{I("pick",H.value,!1)},me=(X=!1,N=!1)=>{N||I("pick",x.parsedValue,X)},K=X=>{if(!x.visible)return;const N=Z(X).millisecond(0);I("pick",N,!0)},te=(X,N)=>{I("select-range",X,N),z.value=[X,N]},Q=X=>{const N=[0,3].concat(ue.value?[6]:[]),W=["hours","minutes"].concat(ue.value?["seconds"]:[]),L=(N.indexOf(z.value[0])+X+N.length)%N.length;be.start_emitSelectRange(W[L])},oe=X=>{const N=X.code,{left:W,right:G,up:L,down:ee}=Dt;if([W,G].includes(N)){Q(N===W?-1:1),X.preventDefault();return}if([L,ee].includes(N)){const Ae=N===L?-1:1;be.start_scrollDown(Ae),X.preventDefault();return}},{timePickerOptions:be,onSetOption:Ce,getAvailableTime:ie}=Dy({getAvailableHours:y,getAvailableMinutes:S,getAvailableSeconds:D}),Z=X=>ie(X,x.datetimeRole||"",!0),$=X=>X?Be(X,x.format).locale(q.value):null,ae=X=>X?X.format(x.format):null,se=()=>Be(m).locale(q.value);return I("set-picker-option",["isValidValue",re]),I("set-picker-option",["formatToString",ae]),I("set-picker-option",["parseUserInput",$]),I("set-picker-option",["handleKeydownInput",oe]),I("set-picker-option",["getRangeAvailableTime",Z]),I("set-picker-option",["getDefaultValue",se]),(X,N)=>(ve(),Et(pp,{name:k(J)},{default:$e(()=>[X.actualVisible||X.visible?(ve(),Me("div",{key:0,class:ce(k(g).b("panel"))},[Se("div",{class:ce([k(g).be("panel","content"),{"has-seconds":k(ue)}])},[Ee(zy,{ref:"spinner",role:X.datetimeRole||"start","arrow-control":k(E),"show-seconds":k(ue),"am-pm-mode":k(F),"spinner-date":X.parsedValue,"disabled-hours":k(B),"disabled-minutes":k(A),"disabled-seconds":k(C),onChange:K,onSetOption:k(Ce),onSelectRange:te},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),Se("div",{class:ce(k(g).be("panel","footer"))},[Se("button",{type:"button",class:ce([k(g).be("panel","btn"),"cancel"]),onClick:ge},at(k(w)("el.datepicker.cancel")),3),Se("button",{type:"button",class:ce([k(g).be("panel","btn"),"confirm"]),onClick:N[0]||(N[0]=W=>me())},at(k(w)("el.datepicker.confirm")),3)],2)],2)):dt("v-if",!0)]),_:1},8,["name"]))}});var Oa=$n(Ly,[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]),Pp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_,E){var B=_.prototype,A=B.format;E.en.ordinal=function(C){var m=["th","st","nd","rd"],y=C%100;return"["+C+(m[(y-20)%10]||m[y]||m[0])+"]"},B.format=function(C){var m=this,y=this.$locale();if(!this.isValid())return A.bind(this)(C);var S=this.$utils(),D=(C||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(g){switch(g){case"Q":return Math.ceil((m.$M+1)/3);case"Do":return y.ordinal(m.$D);case"gggg":return m.weekYear();case"GGGG":return m.isoWeekYear();case"wo":return y.ordinal(m.week(),"W");case"w":case"ww":return S.s(m.week(),g==="w"?1:2,"0");case"W":case"WW":return S.s(m.isoWeek(),g==="W"?1:2,"0");case"k":case"kk":return S.s(String(m.$H===0?24:m.$H),g==="k"?1:2,"0");case"X":return Math.floor(m.$d.getTime()/1e3);case"x":return m.$d.getTime();case"z":return"["+m.offsetName()+"]";case"zzz":return"["+m.offsetName("long")+"]";default:return g}});return A.bind(this)(D)}}})})(Pp);const Oy=Pp.exports;var Bp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){var x="week",_="year";return function(E,B,A){var C=B.prototype;C.week=function(m){if(m===void 0&&(m=null),m!==null)return this.add(7*(m-this.week()),"day");var y=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var S=A(this).startOf(_).add(1,_).date(y),D=A(this).endOf(x);if(S.isBefore(D))return 1}var g=A(this).startOf(_).date(y).startOf(x).subtract(1,"millisecond"),w=this.diff(g,x,!0);return w<0?A(this).startOf("week").week():Math.ceil(w)},C.weeks=function(m){return m===void 0&&(m=null),this.week(m)}}})})(Bp);const Ry=Bp.exports;var zp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_){_.prototype.weekYear=function(){var E=this.month(),B=this.week(),A=this.year();return B===1&&E===11?A+1:E===0&&B>=52?A-1:A}}})})(zp);const jy=zp.exports;var Lp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_,E){_.prototype.dayOfYear=function(B){var A=Math.round((E(this).startOf("day")-E(this).startOf("year"))/864e5)+1;return B==null?A:this.add(B-A,"day")}}})})(Lp);const Fy=Lp.exports;var Op={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_){_.prototype.isSameOrAfter=function(E,B){return this.isSame(E,B)||this.isAfter(E,B)}}})})(Op);const Vy=Op.exports;var Rp={exports:{}};(function(T,I){(function(x,_){T.exports=_()})(nn,function(){return function(x,_){_.prototype.isSameOrBefore=function(E,B){return this.isSame(E,B)||this.isBefore(E,B)}}})})(Rp);const Uy=Rp.exports,Hy=jt({type:{type:it(String),default:"date"}}),$y=["date","dates","year","month","week","range"],Wa=jt({disabledDate:{type:it(Function)},date:{type:it(Object),required:!0},minDate:{type:it(Object)},maxDate:{type:it(Object)},parsedValue:{type:it([Object,Array])},rangeState:{type:it(Object),default:()=>({endDate:null,selecting:!1})}}),jp=jt({type:{type:it(String),required:!0,values:py}}),Fp=jt({unlinkPanels:Boolean,parsedValue:{type:it(Array)}}),Vp=T=>({type:String,values:$y,default:T}),Wy=jt({...jp,parsedValue:{type:it([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),Yy=jt({...Wa,cellClassName:{type:it(Function)},showWeekNumber:Boolean,selectionMode:Vp("date")}),Ra=T=>{if(!Rt(T))return!1;const[I,x]=T;return Be.isDayjs(I)&&Be.isDayjs(x)&&I.isSameOrBefore(x)},Up=(T,{lang:I,unit:x,unlinkPanels:_})=>{let E;if(Rt(T)){let[B,A]=T.map(C=>Be(C).locale(I));return _||(A=B.add(1,x)),[B,A]}else T?E=Be(T):E=Be();return E=E.locale(I),[E,E.add(1,x)]},qy=(T,I,{columnIndexOffset:x,startDate:_,nextEndDate:E,now:B,unit:A,relativeDateGetter:C,setCellMetadata:m,setRowMetadata:y})=>{for(let S=0;S<T.row;S++){const D=I[S];for(let g=0;g<T.column;g++){let w=D[g+x];w||(w={row:S,column:g,type:"normal",inRange:!1,start:!1,end:!1});const q=S*T.column+g,z=C(q);w.dayjs=z,w.date=z.toDate(),w.timestamp=z.valueOf(),w.type="normal",w.inRange=!!(_&&z.isSameOrAfter(_,A)&&E&&z.isSameOrBefore(E,A))||!!(_&&z.isSameOrBefore(_,A)&&E&&z.isSameOrAfter(E,A)),_?.isSameOrAfter(E)?(w.start=!!E&&z.isSame(E,A),w.end=_&&z.isSame(_,A)):(w.start=!!_&&z.isSame(_,A),w.end=!!E&&z.isSame(E,A)),z.isSame(B,A)&&(w.type="today"),m?.(w,{rowIndex:S,columnIndex:g}),D[g+x]=w}y?.(D)}},Gy=jt({cell:{type:it(Object)}});var Ky=yn({name:"ElDatePickerCell",props:Gy,setup(T){const I=$t("date-table-cell"),{slots:x}=Xn($a);return()=>{const{cell:_}=T;if(x.default){const E=x.default(_).filter(B=>B.patchFlag!==-2&&B.type.toString()!=="Symbol(Comment)");if(E.length)return E}return Ee("div",{class:I.b()},[Ee("span",{class:I.e("text")},[_?.text])])}}});const Qy=["aria-label"],Zy={key:0,scope:"col"},Jy=["aria-label"],Xy=["aria-current","aria-selected","tabindex"],e1=yn({__name:"basic-date-table",props:Yy,emits:["changerange","pick","select"],setup(T,{expose:I,emit:x}){const _=T,E=$t("date-table"),{t:B,lang:A}=Bn(),C=Oe(),m=Oe(),y=Oe(),S=Oe(),D=Oe([[],[],[],[],[],[]]);let g=!1;const w=_.date.$locale().weekStart||7,q=_.date.locale("en").localeData().weekdaysShort().map(L=>L.toLowerCase()),z=xe(()=>w>3?7-w:-w),H=xe(()=>{const L=_.date.startOf("month");return L.subtract(L.day()||7,"day")}),J=xe(()=>q.concat(q).slice(w,w+7)),ue=xe(()=>gy(te.value).some(L=>L.isCurrent)),F=xe(()=>{const L=_.date.startOf("month"),ee=L.day()||7,Ae=L.daysInMonth(),j=L.subtract(1,"month").daysInMonth();return{startOfMonthDay:ee,dateCountOfMonth:Ae,dateCountOfLastMonth:j}}),re=xe(()=>_.selectionMode==="dates"?yo(_.parsedValue):[]),ge=(L,{count:ee,rowIndex:Ae,columnIndex:j})=>{const{startOfMonthDay:fe,dateCountOfMonth:Ie,dateCountOfLastMonth:ke}=k(F),R=k(z);if(Ae>=0&&Ae<=1){const Pe=fe+R<0?7+fe+R:fe+R;if(j+Ae*7>=Pe)return L.text=ee,!0;L.text=ke-(Pe-j%7)+1+Ae*7,L.type="prev-month"}else return ee<=Ie?L.text=ee:(L.text=ee-Ie,L.type="next-month"),!0;return!1},me=(L,{columnIndex:ee,rowIndex:Ae},j)=>{const{disabledDate:fe,cellClassName:Ie}=_,ke=k(re),R=ge(L,{count:j,rowIndex:Ae,columnIndex:ee}),Pe=L.dayjs.toDate();return L.selected=ke.find(De=>De.valueOf()===L.dayjs.valueOf()),L.isSelected=!!L.selected,L.isCurrent=be(L),L.disabled=fe?.(Pe),L.customClass=Ie?.(Pe),R},K=L=>{if(_.selectionMode==="week"){const[ee,Ae]=_.showWeekNumber?[1,7]:[0,6],j=G(L[ee+1]);L[ee].inRange=j,L[ee].start=j,L[Ae].inRange=j,L[Ae].end=j}},te=xe(()=>{const{minDate:L,maxDate:ee,rangeState:Ae,showWeekNumber:j}=_,fe=z.value,Ie=D.value,ke="day";let R=1;if(j)for(let Pe=0;Pe<6;Pe++)Ie[Pe][0]||(Ie[Pe][0]={type:"week",text:H.value.add(Pe*7+1,ke).week()});return qy({row:6,column:7},Ie,{startDate:L,columnIndexOffset:j?1:0,nextEndDate:Ae.endDate||ee||Ae.selecting&&L||null,now:Be().locale(k(A)).startOf(ke),unit:ke,relativeDateGetter:Pe=>H.value.add(Pe-fe,ke),setCellMetadata:(...Pe)=>{me(...Pe,R)&&(R+=1)},setRowMetadata:K}),Ie});qt(()=>_.date,async()=>{var L,ee;(L=C.value)!=null&&L.contains(document.activeElement)&&(await on(),(ee=m.value)==null||ee.focus())});const Q=async()=>{var L;(L=m.value)==null||L.focus()},oe=(L="")=>["normal","today"].includes(L),be=L=>_.selectionMode==="date"&&oe(L.type)&&Ce(L,_.parsedValue),Ce=(L,ee)=>ee?Be(ee).locale(A.value).isSame(_.date.date(Number(L.text)),"day"):!1,ie=L=>{const ee=[];return oe(L.type)&&!L.disabled?(ee.push("available"),L.type==="today"&&ee.push("today")):ee.push(L.type),be(L)&&ee.push("current"),L.inRange&&(oe(L.type)||_.selectionMode==="week")&&(ee.push("in-range"),L.start&&ee.push("start-date"),L.end&&ee.push("end-date")),L.disabled&&ee.push("disabled"),L.selected&&ee.push("selected"),L.customClass&&ee.push(L.customClass),ee.join(" ")},Z=(L,ee)=>{const Ae=L*7+(ee-(_.showWeekNumber?1:0))-z.value;return H.value.add(Ae,"day")},$=L=>{var ee;if(!_.rangeState.selecting)return;let Ae=L.target;if(Ae.tagName==="SPAN"&&(Ae=(ee=Ae.parentNode)==null?void 0:ee.parentNode),Ae.tagName==="DIV"&&(Ae=Ae.parentNode),Ae.tagName!=="TD")return;const j=Ae.parentNode.rowIndex-1,fe=Ae.cellIndex;te.value[j][fe].disabled||(j!==y.value||fe!==S.value)&&(y.value=j,S.value=fe,x("changerange",{selecting:!0,endDate:Z(j,fe)}))},ae=L=>!ue.value&&L?.text===1&&L.type==="normal"||L.isCurrent,se=L=>{g||ue.value||_.selectionMode!=="date"||W(L,!0)},X=L=>{!L.target.closest("td")||(g=!0)},N=L=>{!L.target.closest("td")||(g=!1)},W=(L,ee=!1)=>{const Ae=L.target.closest("td");if(!Ae)return;const j=Ae.parentNode.rowIndex-1,fe=Ae.cellIndex,Ie=te.value[j][fe];if(Ie.disabled||Ie.type==="week")return;const ke=Z(j,fe);if(_.selectionMode==="range")!_.rangeState.selecting||!_.minDate?(x("pick",{minDate:ke,maxDate:null}),x("select",!0)):(ke>=_.minDate?x("pick",{minDate:_.minDate,maxDate:ke}):x("pick",{minDate:ke,maxDate:_.minDate}),x("select",!1));else if(_.selectionMode==="date")x("pick",ke,ee);else if(_.selectionMode==="week"){const R=ke.week(),Pe=`${ke.year()}w${R}`;x("pick",{year:ke.year(),week:R,value:Pe,date:ke.startOf("week")})}else if(_.selectionMode==="dates"){const R=Ie.selected?yo(_.parsedValue).filter(Pe=>Pe?.valueOf()!==ke.valueOf()):yo(_.parsedValue).concat([ke]);x("pick",R)}},G=L=>{if(_.selectionMode!=="week")return!1;let ee=_.date.startOf("day");if(L.type==="prev-month"&&(ee=ee.subtract(1,"month")),L.type==="next-month"&&(ee=ee.add(1,"month")),ee=ee.date(Number.parseInt(L.text,10)),_.parsedValue&&!Array.isArray(_.parsedValue)){const Ae=(_.parsedValue.day()-w+7)%7-1;return _.parsedValue.subtract(Ae,"day").isSame(ee,"day")}return!1};return I({focus:Q}),(L,ee)=>(ve(),Me("table",{role:"grid","aria-label":k(B)("el.datepicker.dateTablePrompt"),cellspacing:"0",cellpadding:"0",class:ce([k(E).b(),{"is-week-mode":L.selectionMode==="week"}]),onClick:W,onMousemove:$,onMousedown:X,onMouseup:N},[Se("tbody",{ref_key:"tbodyRef",ref:C},[Se("tr",null,[L.showWeekNumber?(ve(),Me("th",Zy,at(k(B)("el.datepicker.week")),1)):dt("v-if",!0),(ve(!0),Me(vt,null,Gt(k(J),(Ae,j)=>(ve(),Me("th",{key:j,scope:"col","aria-label":k(B)("el.datepicker.weeksFull."+Ae)},at(k(B)("el.datepicker.weeks."+Ae)),9,Jy))),128))]),(ve(!0),Me(vt,null,Gt(k(te),(Ae,j)=>(ve(),Me("tr",{key:j,class:ce([k(E).e("row"),{current:G(Ae[1])}])},[(ve(!0),Me(vt,null,Gt(Ae,(fe,Ie)=>(ve(),Me("td",{key:`${j}.${Ie}`,ref_for:!0,ref:ke=>ae(fe)&&(m.value=ke),class:ce(ie(fe)),"aria-current":fe.isCurrent?"date":void 0,"aria-selected":fe.isCurrent,tabindex:ae(fe)?0:-1,onFocus:se},[Ee(k(Ky),{cell:fe},null,8,["cell"])],42,Xy))),128))],2))),128))],512)],42,Qy))}});var ja=$n(e1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);const t1=jt({...Wa,selectionMode:Vp("month")}),n1=["aria-label"],o1=["aria-selected","aria-label","tabindex","onKeydown"],i1={class:"cell"},r1=yn({__name:"basic-month-table",props:t1,emits:["changerange","pick","select"],setup(T,{expose:I,emit:x}){const _=T,E=(re,ge,me)=>{const K=Be().locale(me).startOf("month").month(ge).year(re),te=K.daysInMonth();return Ep(te).map(Q=>K.add(Q,"day").toDate())},B=$t("month-table"),{t:A,lang:C}=Bn(),m=Oe(),y=Oe(),S=Oe(_.date.locale("en").localeData().monthsShort().map(re=>re.toLowerCase())),D=Oe([[],[],[]]),g=Oe(),w=Oe(),q=xe(()=>{var re,ge;const me=D.value,K=Be().locale(C.value).startOf("month");for(let te=0;te<3;te++){const Q=me[te];for(let oe=0;oe<4;oe++){const be=Q[oe]||(Q[oe]={row:te,column:oe,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1});be.type="normal";const Ce=te*4+oe,ie=_.date.startOf("year").month(Ce),Z=_.rangeState.endDate||_.maxDate||_.rangeState.selecting&&_.minDate||null;be.inRange=!!(_.minDate&&ie.isSameOrAfter(_.minDate,"month")&&Z&&ie.isSameOrBefore(Z,"month"))||!!(_.minDate&&ie.isSameOrBefore(_.minDate,"month")&&Z&&ie.isSameOrAfter(Z,"month")),(re=_.minDate)!=null&&re.isSameOrAfter(Z)?(be.start=!!(Z&&ie.isSame(Z,"month")),be.end=_.minDate&&ie.isSame(_.minDate,"month")):(be.start=!!(_.minDate&&ie.isSame(_.minDate,"month")),be.end=!!(Z&&ie.isSame(Z,"month"))),K.isSame(ie)&&(be.type="today"),be.text=Ce,be.disabled=((ge=_.disabledDate)==null?void 0:ge.call(_,ie.toDate()))||!1}}return me}),z=()=>{var re;(re=y.value)==null||re.focus()},H=re=>{const ge={},me=_.date.year(),K=new Date,te=re.text;return ge.disabled=_.disabledDate?E(me,te,C.value).every(_.disabledDate):!1,ge.current=yo(_.parsedValue).findIndex(Q=>Be.isDayjs(Q)&&Q.year()===me&&Q.month()===te)>=0,ge.today=K.getFullYear()===me&&K.getMonth()===te,re.inRange&&(ge["in-range"]=!0,re.start&&(ge["start-date"]=!0),re.end&&(ge["end-date"]=!0)),ge},J=re=>{const ge=_.date.year(),me=re.text;return yo(_.date).findIndex(K=>K.year()===ge&&K.month()===me)>=0},ue=re=>{var ge;if(!_.rangeState.selecting)return;let me=re.target;if(me.tagName==="A"&&(me=(ge=me.parentNode)==null?void 0:ge.parentNode),me.tagName==="DIV"&&(me=me.parentNode),me.tagName!=="TD")return;const K=me.parentNode.rowIndex,te=me.cellIndex;q.value[K][te].disabled||(K!==g.value||te!==w.value)&&(g.value=K,w.value=te,x("changerange",{selecting:!0,endDate:_.date.startOf("year").month(K*4+te)}))},F=re=>{var ge;const me=(ge=re.target)==null?void 0:ge.closest("td");if(me?.tagName!=="TD"||fp(me,"disabled"))return;const K=me.cellIndex,Q=me.parentNode.rowIndex*4+K,oe=_.date.startOf("year").month(Q);_.selectionMode==="range"?_.rangeState.selecting?(_.minDate&&oe>=_.minDate?x("pick",{minDate:_.minDate,maxDate:oe}):x("pick",{minDate:oe,maxDate:_.minDate}),x("select",!1)):(x("pick",{minDate:oe,maxDate:null}),x("select",!0)):x("pick",Q)};return qt(()=>_.date,async()=>{var re,ge;(re=m.value)!=null&&re.contains(document.activeElement)&&(await on(),(ge=y.value)==null||ge.focus())}),I({focus:z}),(re,ge)=>(ve(),Me("table",{role:"grid","aria-label":k(A)("el.datepicker.monthTablePrompt"),class:ce(k(B).b()),onClick:F,onMousemove:ue},[Se("tbody",{ref_key:"tbodyRef",ref:m},[(ve(!0),Me(vt,null,Gt(k(q),(me,K)=>(ve(),Me("tr",{key:K},[(ve(!0),Me(vt,null,Gt(me,(te,Q)=>(ve(),Me("td",{key:Q,ref_for:!0,ref:oe=>J(te)&&(y.value=oe),class:ce(H(te)),"aria-selected":`${J(te)}`,"aria-label":k(A)(`el.datepicker.month${+te.text+1}`),tabindex:J(te)?0:-1,onKeydown:[Jo(Hn(F,["prevent","stop"]),["space"]),Jo(Hn(F,["prevent","stop"]),["enter"])]},[Se("div",null,[Se("span",i1,at(k(A)("el.datepicker.months."+S.value[te.text])),1)])],42,o1))),128))]))),128))],512)],42,n1))}});var Fa=$n(r1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);const{date:s1,disabledDate:a1,parsedValue:c1}=Wa,l1=jt({date:s1,disabledDate:a1,parsedValue:c1}),d1=["aria-label"],u1=["aria-selected","tabindex","onKeydown"],h1={class:"cell"},g1={key:1},m1=yn({__name:"basic-year-table",props:l1,emits:["pick"],setup(T,{expose:I,emit:x}){const _=T,E=(z,H)=>{const J=Be(String(z)).locale(H).startOf("year"),F=J.endOf("year").dayOfYear();return Ep(F).map(re=>J.add(re,"day").toDate())},B=$t("year-table"),{t:A,lang:C}=Bn(),m=Oe(),y=Oe(),S=xe(()=>Math.floor(_.date.year()/10)*10),D=()=>{var z;(z=y.value)==null||z.focus()},g=z=>{const H={},J=Be().locale(C.value);return H.disabled=_.disabledDate?E(z,C.value).every(_.disabledDate):!1,H.current=yo(_.parsedValue).findIndex(ue=>ue.year()===z)>=0,H.today=J.year()===z,H},w=z=>z===S.value&&_.date.year()<S.value&&_.date.year()>S.value+9||yo(_.date).findIndex(H=>H.year()===z)>=0,q=z=>{const J=z.target.closest("td");if(J&&J.textContent){if(fp(J,"disabled"))return;const ue=J.textContent||J.innerText;x("pick",Number(ue))}};return qt(()=>_.date,async()=>{var z,H;(z=m.value)!=null&&z.contains(document.activeElement)&&(await on(),(H=y.value)==null||H.focus())}),I({focus:D}),(z,H)=>(ve(),Me("table",{role:"grid","aria-label":k(A)("el.datepicker.yearTablePrompt"),class:ce(k(B).b()),onClick:q},[Se("tbody",{ref_key:"tbodyRef",ref:m},[(ve(),Me(vt,null,Gt(3,(J,ue)=>Se("tr",{key:ue},[(ve(),Me(vt,null,Gt(4,(F,re)=>(ve(),Me(vt,{key:ue+"_"+re},[ue*4+re<10?(ve(),Me("td",{key:0,ref_for:!0,ref:ge=>w(k(S)+ue*4+re)&&(y.value=ge),class:ce(["available",g(k(S)+ue*4+re)]),"aria-selected":`${w(k(S)+ue*4+re)}`,tabindex:w(k(S)+ue*4+re)?0:-1,onKeydown:[Jo(Hn(q,["prevent","stop"]),["space"]),Jo(Hn(q,["prevent","stop"]),["enter"])]},[Se("span",h1,at(k(S)+ue*4+re),1)],42,u1)):(ve(),Me("td",g1))],64))),64))])),64))],512)],10,d1))}});var p1=$n(m1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);const f1=["onClick"],k1=["aria-label"],b1=["aria-label"],w1=["aria-label"],v1=["aria-label"],_1=yn({__name:"panel-date-pick",props:Wy,emits:["pick","set-picker-option","panel-change"],setup(T,{emit:I}){const x=T,_=(V,pe,Re)=>!0,E=$t("picker-panel"),B=$t("date-picker"),A=kp(),C=bp(),{t:m,lang:y}=Bn(),S=Xn("EP_PICKER_BASE"),D=Xn(uy),{shortcuts:g,disabledDate:w,cellClassName:q,defaultTime:z,arrowControl:H}=S.props,J=Xo(S.props,"defaultValue"),ue=Oe(),F=Oe(Be().locale(y.value)),re=xe(()=>Be(z).locale(y.value)),ge=xe(()=>F.value.month()),me=xe(()=>F.value.year()),K=Oe([]),te=Oe(null),Q=Oe(null),oe=V=>K.value.length>0?_(V,K.value,x.format||"HH:mm:ss"):!0,be=V=>z&&!De.value?re.value.year(V.year()).month(V.month()).date(V.date()):j.value?V.millisecond(0):V.startOf("day"),Ce=(V,...pe)=>{if(!V)I("pick",V,...pe);else if(Rt(V)){const Re=V.map(be);I("pick",Re,...pe)}else I("pick",be(V),...pe);te.value=null,Q.value=null},ie=(V,pe)=>{if(N.value==="date"){V=V;let Re=x.parsedValue?x.parsedValue.year(V.year()).month(V.month()).date(V.date()):V;oe(Re)||(Re=K.value[0][0].year(V.year()).month(V.month()).date(V.date())),F.value=Re,Ce(Re,j.value||pe)}else N.value==="week"?Ce(V.date):N.value==="dates"&&Ce(V,!0)},Z=V=>{const pe=V?"add":"subtract";F.value=F.value[pe](1,"month"),rn("month")},$=V=>{const pe=F.value,Re=V?"add":"subtract";F.value=ae.value==="year"?pe[Re](10,"year"):pe[Re](1,"year"),rn("year")},ae=Oe("date"),se=xe(()=>{const V=m("el.datepicker.year");if(ae.value==="year"){const pe=Math.floor(me.value/10)*10;return V?`${pe} ${V} - ${pe+9} ${V}`:`${pe} - ${pe+9}`}return`${me.value} ${V}`}),X=V=>{const pe=La(V.value)?V.value():V.value;if(pe){Ce(Be(pe).locale(y.value));return}V.onClick&&V.onClick({attrs:A,slots:C,emit:I})},N=xe(()=>{const{type:V}=x;return["week","month","year","dates"].includes(V)?V:"date"}),W=xe(()=>N.value==="date"?ae.value:N.value),G=xe(()=>!!g.length),L=async V=>{F.value=F.value.startOf("month").month(V),N.value==="month"?Ce(F.value,!1):(ae.value="date",["month","year","date","week"].includes(N.value)&&(Ce(F.value,!0),await on(),Je())),rn("month")},ee=async V=>{N.value==="year"?(F.value=F.value.startOf("year").year(V),Ce(F.value,!1)):(F.value=F.value.year(V),ae.value="month",["month","year","date","week"].includes(N.value)&&(Ce(F.value,!0),await on(),Je())),rn("year")},Ae=async V=>{ae.value=V,await on(),Je()},j=xe(()=>x.type==="datetime"||x.type==="datetimerange"),fe=xe(()=>j.value||N.value==="dates"),Ie=()=>{if(N.value==="dates")Ce(x.parsedValue);else{let V=x.parsedValue;if(!V){const pe=Be(z).locale(y.value),Re=Qt();V=pe.year(Re.year()).month(Re.month()).date(Re.date())}F.value=V,Ce(V)}},ke=()=>{const pe=Be().locale(y.value).toDate();(!w||!w(pe))&&oe(pe)&&(F.value=Be().locale(y.value),Ce(F.value))},R=xe(()=>Sp(x.format)),Pe=xe(()=>Mp(x.format)),De=xe(()=>{if(Q.value)return Q.value;if(!(!x.parsedValue&&!J.value))return(x.parsedValue||F.value).format(R.value)}),We=xe(()=>{if(te.value)return te.value;if(!(!x.parsedValue&&!J.value))return(x.parsedValue||F.value).format(Pe.value)}),He=Oe(!1),gt=()=>{He.value=!0},Nt=()=>{He.value=!1},rt=V=>({hour:V.hour(),minute:V.minute(),second:V.second(),year:V.year(),month:V.month(),date:V.date()}),Te=(V,pe,Re)=>{const{hour:Mt,minute:P,second:_e}=rt(V),de=x.parsedValue?x.parsedValue.hour(Mt).minute(P).second(_e):V;F.value=de,Ce(F.value,!0),Re||(He.value=pe)},Ft=V=>{const pe=Be(V,R.value).locale(y.value);if(pe.isValid()&&oe(pe)){const{year:Re,month:Mt,date:P}=rt(F.value);F.value=pe.year(Re).month(Mt).date(P),Q.value=null,He.value=!1,Ce(F.value,!0)}},Kt=V=>{const pe=Be(V,Pe.value).locale(y.value);if(pe.isValid()){if(w&&w(pe.toDate()))return;const{hour:Re,minute:Mt,second:P}=rt(F.value);F.value=pe.hour(Re).minute(Mt).second(P),te.value=null,Ce(F.value,!0)}},Pt=V=>Be.isDayjs(V)&&V.isValid()&&(w?!w(V.toDate()):!0),ut=V=>N.value==="dates"?V.map(pe=>pe.format(x.format)):V.format(x.format),kn=V=>Be(V,x.format).locale(y.value),Qt=()=>{const V=Be(J.value).locale(y.value);if(!J.value){const pe=re.value;return Be().hour(pe.hour()).minute(pe.minute()).second(pe.second()).locale(y.value)}return V},Je=async()=>{var V;["week","month","year","date"].includes(N.value)&&((V=ue.value)==null||V.focus(),N.value==="week"&&bt(Dt.down))},_t=V=>{const{code:pe}=V;[Dt.up,Dt.down,Dt.left,Dt.right,Dt.home,Dt.end,Dt.pageUp,Dt.pageDown].includes(pe)&&(bt(pe),V.stopPropagation(),V.preventDefault()),[Dt.enter,Dt.space].includes(pe)&&te.value===null&&Q.value===null&&(V.preventDefault(),Ce(F.value,!1))},bt=V=>{var pe;const{up:Re,down:Mt,left:P,right:_e,home:de,end:le,pageUp:ye,pageDown:Vt}=Dt,sn={year:{[Re]:-4,[Mt]:4,[P]:-1,[_e]:1,offset:(Ge,cn)=>Ge.setFullYear(Ge.getFullYear()+cn)},month:{[Re]:-4,[Mt]:4,[P]:-1,[_e]:1,offset:(Ge,cn)=>Ge.setMonth(Ge.getMonth()+cn)},week:{[Re]:-1,[Mt]:1,[P]:-1,[_e]:1,offset:(Ge,cn)=>Ge.setDate(Ge.getDate()+cn*7)},date:{[Re]:-7,[Mt]:7,[P]:-1,[_e]:1,[de]:Ge=>-Ge.getDay(),[le]:Ge=>-Ge.getDay()+6,[ye]:Ge=>-new Date(Ge.getFullYear(),Ge.getMonth(),0).getDate(),[Vt]:Ge=>new Date(Ge.getFullYear(),Ge.getMonth()+1,0).getDate(),offset:(Ge,cn)=>Ge.setDate(Ge.getDate()+cn)}},an=F.value.toDate();for(;Math.abs(F.value.diff(an,"year",!0))<1;){const Ge=sn[W.value];if(!Ge)return;if(Ge.offset(an,La(Ge[V])?Ge[V](an):(pe=Ge[V])!=null?pe:0),w&&w(an))break;const cn=Be(an).locale(y.value);F.value=cn,I("pick",cn,!0);break}},rn=V=>{I("panel-change",F.value.toDate(),V,ae.value)};return qt(()=>N.value,V=>{if(["month","year"].includes(V)){ae.value=V;return}ae.value="date"},{immediate:!0}),qt(()=>ae.value,()=>{D?.updatePopper()}),qt(()=>J.value,V=>{V&&(F.value=Qt())},{immediate:!0}),qt(()=>x.parsedValue,V=>{if(V){if(N.value==="dates"||Array.isArray(V))return;F.value=V}else F.value=Qt()},{immediate:!0}),I("set-picker-option",["isValidValue",Pt]),I("set-picker-option",["formatToString",ut]),I("set-picker-option",["parseUserInput",kn]),I("set-picker-option",["handleFocusPicker",Je]),(V,pe)=>(ve(),Me("div",{class:ce([k(E).b(),k(B).b(),{"has-sidebar":V.$slots.sidebar||k(G),"has-time":k(j)}])},[Se("div",{class:ce(k(E).e("body-wrapper"))},[Ei(V.$slots,"sidebar",{class:ce(k(E).e("sidebar"))}),k(G)?(ve(),Me("div",{key:0,class:ce(k(E).e("sidebar"))},[(ve(!0),Me(vt,null,Gt(k(g),(Re,Mt)=>(ve(),Me("button",{key:Mt,type:"button",class:ce(k(E).e("shortcut")),onClick:P=>X(Re)},at(Re.text),11,f1))),128))],2)):dt("v-if",!0),Se("div",{class:ce(k(E).e("body"))},[k(j)?(ve(),Me("div",{key:0,class:ce(k(B).e("time-header"))},[Se("span",{class:ce(k(B).e("editor-wrap"))},[Ee(k(Co),{placeholder:k(m)("el.datepicker.selectDate"),"model-value":k(We),size:"small","validate-event":!1,onInput:pe[0]||(pe[0]=Re=>te.value=Re),onChange:Kt},null,8,["placeholder","model-value"])],2),fn((ve(),Me("span",{class:ce(k(B).e("editor-wrap"))},[Ee(k(Co),{placeholder:k(m)("el.datepicker.selectTime"),"model-value":k(De),size:"small","validate-event":!1,onFocus:gt,onInput:pe[1]||(pe[1]=Re=>Q.value=Re),onChange:Ft},null,8,["placeholder","model-value"]),Ee(k(Oa),{visible:He.value,format:k(R),"time-arrow-control":k(H),"parsed-value":F.value,onPick:Te},null,8,["visible","format","time-arrow-control","parsed-value"])],2)),[[k(Pa),Nt]])],2)):dt("v-if",!0),fn(Se("div",{class:ce([k(B).e("header"),(ae.value==="year"||ae.value==="month")&&k(B).e("header--bordered")])},[Se("span",{class:ce(k(B).e("prev-btn"))},[Se("button",{type:"button","aria-label":k(m)("el.datepicker.prevYear"),class:ce(["d-arrow-left",k(E).e("icon-btn")]),onClick:pe[2]||(pe[2]=Re=>$(!1))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Mi))]),_:1})],10,k1),fn(Se("button",{type:"button","aria-label":k(m)("el.datepicker.prevMonth"),class:ce([k(E).e("icon-btn"),"arrow-left"]),onClick:pe[3]||(pe[3]=Re=>Z(!1))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(za))]),_:1})],10,b1),[[Ao,ae.value==="date"]])],2),Se("span",{role:"button",class:ce(k(B).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:pe[4]||(pe[4]=Jo(Re=>Ae("year"),["enter"])),onClick:pe[5]||(pe[5]=Re=>Ae("year"))},at(k(se)),35),fn(Se("span",{role:"button","aria-live":"polite",tabindex:"0",class:ce([k(B).e("header-label"),{active:ae.value==="month"}]),onKeydown:pe[6]||(pe[6]=Jo(Re=>Ae("month"),["enter"])),onClick:pe[7]||(pe[7]=Re=>Ae("month"))},at(k(m)(`el.datepicker.month${k(ge)+1}`)),35),[[Ao,ae.value==="date"]]),Se("span",{class:ce(k(B).e("next-btn"))},[fn(Se("button",{type:"button","aria-label":k(m)("el.datepicker.nextMonth"),class:ce([k(E).e("icon-btn"),"arrow-right"]),onClick:pe[8]||(pe[8]=Re=>Z(!0))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Ar))]),_:1})],10,w1),[[Ao,ae.value==="date"]]),Se("button",{type:"button","aria-label":k(m)("el.datepicker.nextYear"),class:ce([k(E).e("icon-btn"),"d-arrow-right"]),onClick:pe[9]||(pe[9]=Re=>$(!0))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Si))]),_:1})],10,v1)],2)],2),[[Ao,ae.value!=="time"]]),Se("div",{class:ce(k(E).e("content")),onKeydown:_t},[ae.value==="date"?(ve(),Et(ja,{key:0,ref_key:"currentViewRef",ref:ue,"selection-mode":k(N),date:F.value,"parsed-value":V.parsedValue,"disabled-date":k(w),"cell-class-name":k(q),onPick:ie},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):dt("v-if",!0),ae.value==="year"?(ve(),Et(p1,{key:1,ref_key:"currentViewRef",ref:ue,date:F.value,"disabled-date":k(w),"parsed-value":V.parsedValue,onPick:ee},null,8,["date","disabled-date","parsed-value"])):dt("v-if",!0),ae.value==="month"?(ve(),Et(Fa,{key:2,ref_key:"currentViewRef",ref:ue,date:F.value,"parsed-value":V.parsedValue,"disabled-date":k(w),onPick:L},null,8,["date","parsed-value","disabled-date"])):dt("v-if",!0)],34)],2)],2),fn(Se("div",{class:ce(k(E).e("footer"))},[fn(Ee(k(xr),{text:"",size:"small",class:ce(k(E).e("link-btn")),onClick:ke},{default:$e(()=>[Jn(at(k(m)("el.datepicker.now")),1)]),_:1},8,["class"]),[[Ao,k(N)!=="dates"]]),Ee(k(xr),{plain:"",size:"small",class:ce(k(E).e("link-btn")),onClick:Ie},{default:$e(()=>[Jn(at(k(m)("el.datepicker.confirm")),1)]),_:1},8,["class"])],2),[[Ao,k(fe)&&ae.value==="date"]])],2))}});var A1=$n(_1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);const C1=jt({...jp,...Fp}),y1=T=>{const{emit:I}=wp(),x=kp(),_=bp();return B=>{const A=La(B.value)?B.value():B.value;if(A){I("pick",[Be(A[0]).locale(T.value),Be(A[1]).locale(T.value)]);return}B.onClick&&B.onClick({attrs:x,slots:_,emit:I})}},Hp=(T,{defaultValue:I,leftDate:x,rightDate:_,unit:E,onParsedValueChanged:B})=>{const{emit:A}=wp(),{pickerNs:C}=Xn($a),m=$t("date-range-picker"),{t:y,lang:S}=Bn(),D=y1(S),g=Oe(),w=Oe(),q=Oe({endDate:null,selecting:!1}),z=F=>{q.value=F},H=(F=!1)=>{const re=k(g),ge=k(w);Ra([re,ge])&&A("pick",[re,ge],F)},J=F=>{q.value.selecting=F,F||(q.value.endDate=null)},ue=()=>{const[F,re]=Up(k(I),{lang:k(S),unit:E,unlinkPanels:T.unlinkPanels});g.value=void 0,w.value=void 0,x.value=F,_.value=re};return qt(I,F=>{F&&ue()},{immediate:!0}),qt(()=>T.parsedValue,F=>{if(Rt(F)&&F.length===2){const[re,ge]=F;g.value=re,x.value=re,w.value=ge,B(k(g),k(w))}else ue()},{immediate:!0}),{minDate:g,maxDate:w,rangeState:q,lang:S,ppNs:C,drpNs:m,handleChangeRange:z,handleRangeConfirm:H,handleShortcutClick:D,onSelect:J,t:y}},x1=["onClick"],D1=["disabled"],E1=["disabled"],M1=["disabled"],S1=["disabled"],I1=yn({__name:"panel-date-range",props:C1,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(T,{emit:I}){const x=T,_="month",E=Xn("EP_PICKER_BASE"),{disabledDate:B,cellClassName:A,format:C,defaultTime:m,arrowControl:y,clearable:S}=E.props,D=Xo(E.props,"shortcuts"),g=Xo(E.props,"defaultValue"),{lang:w}=Bn(),q=Oe(Be().locale(w.value)),z=Oe(Be().locale(w.value).add(1,_)),{minDate:H,maxDate:J,rangeState:ue,ppNs:F,drpNs:re,handleChangeRange:ge,handleRangeConfirm:me,handleShortcutClick:K,onSelect:te,t:Q}=Hp(x,{defaultValue:g,leftDate:q,rightDate:z,unit:_,onParsedValueChanged:_e}),oe=Oe({min:null,max:null}),be=Oe({min:null,max:null}),Ce=xe(()=>`${q.value.year()} ${Q("el.datepicker.year")} ${Q(`el.datepicker.month${q.value.month()+1}`)}`),ie=xe(()=>`${z.value.year()} ${Q("el.datepicker.year")} ${Q(`el.datepicker.month${z.value.month()+1}`)}`),Z=xe(()=>q.value.year()),$=xe(()=>q.value.month()),ae=xe(()=>z.value.year()),se=xe(()=>z.value.month()),X=xe(()=>!!D.value.length),N=xe(()=>oe.value.min!==null?oe.value.min:H.value?H.value.format(Ae.value):""),W=xe(()=>oe.value.max!==null?oe.value.max:J.value||H.value?(J.value||H.value).format(Ae.value):""),G=xe(()=>be.value.min!==null?be.value.min:H.value?H.value.format(ee.value):""),L=xe(()=>be.value.max!==null?be.value.max:J.value||H.value?(J.value||H.value).format(ee.value):""),ee=xe(()=>Sp(C)),Ae=xe(()=>Mp(C)),j=()=>{q.value=q.value.subtract(1,"year"),x.unlinkPanels||(z.value=q.value.add(1,"month")),He("year")},fe=()=>{q.value=q.value.subtract(1,"month"),x.unlinkPanels||(z.value=q.value.add(1,"month")),He("month")},Ie=()=>{x.unlinkPanels?z.value=z.value.add(1,"year"):(q.value=q.value.add(1,"year"),z.value=q.value.add(1,"month")),He("year")},ke=()=>{x.unlinkPanels?z.value=z.value.add(1,"month"):(q.value=q.value.add(1,"month"),z.value=q.value.add(1,"month")),He("month")},R=()=>{q.value=q.value.add(1,"year"),He("year")},Pe=()=>{q.value=q.value.add(1,"month"),He("month")},De=()=>{z.value=z.value.subtract(1,"year"),He("year")},We=()=>{z.value=z.value.subtract(1,"month"),He("month")},He=de=>{I("panel-change",[q.value.toDate(),z.value.toDate()],de)},gt=xe(()=>{const de=($.value+1)%12,le=$.value+1>=12?1:0;return x.unlinkPanels&&new Date(Z.value+le,de)<new Date(ae.value,se.value)}),Nt=xe(()=>x.unlinkPanels&&ae.value*12+se.value-(Z.value*12+$.value+1)>=12),rt=xe(()=>!(H.value&&J.value&&!ue.value.selecting&&Ra([H.value,J.value]))),Te=xe(()=>x.type==="datetime"||x.type==="datetimerange"),Ft=(de,le)=>{if(!!de)return m?Be(m[le]||m).locale(w.value).year(de.year()).month(de.month()).date(de.date()):de},Kt=(de,le=!0)=>{const ye=de.minDate,Vt=de.maxDate,sn=Ft(ye,0),an=Ft(Vt,1);J.value===an&&H.value===sn||(I("calendar-change",[ye.toDate(),Vt&&Vt.toDate()]),J.value=an,H.value=sn,!(!le||Te.value)&&me())},Pt=Oe(!1),ut=Oe(!1),kn=()=>{Pt.value=!1},Qt=()=>{ut.value=!1},Je=(de,le)=>{oe.value[le]=de;const ye=Be(de,Ae.value).locale(w.value);if(ye.isValid()){if(B&&B(ye.toDate()))return;le==="min"?(q.value=ye,H.value=(H.value||q.value).year(ye.year()).month(ye.month()).date(ye.date()),x.unlinkPanels||(z.value=ye.add(1,"month"),J.value=H.value.add(1,"month"))):(z.value=ye,J.value=(J.value||z.value).year(ye.year()).month(ye.month()).date(ye.date()),x.unlinkPanels||(q.value=ye.subtract(1,"month"),H.value=J.value.subtract(1,"month")))}},_t=(de,le)=>{oe.value[le]=null},bt=(de,le)=>{be.value[le]=de;const ye=Be(de,ee.value).locale(w.value);ye.isValid()&&(le==="min"?(Pt.value=!0,H.value=(H.value||q.value).hour(ye.hour()).minute(ye.minute()).second(ye.second()),(!J.value||J.value.isBefore(H.value))&&(J.value=H.value)):(ut.value=!0,J.value=(J.value||z.value).hour(ye.hour()).minute(ye.minute()).second(ye.second()),z.value=J.value,J.value&&J.value.isBefore(H.value)&&(H.value=J.value)))},rn=(de,le)=>{be.value[le]=null,le==="min"?(q.value=H.value,Pt.value=!1):(z.value=J.value,ut.value=!1)},V=(de,le,ye)=>{be.value.min||(de&&(q.value=de,H.value=(H.value||q.value).hour(de.hour()).minute(de.minute()).second(de.second())),ye||(Pt.value=le),(!J.value||J.value.isBefore(H.value))&&(J.value=H.value,z.value=de))},pe=(de,le,ye)=>{be.value.max||(de&&(z.value=de,J.value=(J.value||z.value).hour(de.hour()).minute(de.minute()).second(de.second())),ye||(ut.value=le),J.value&&J.value.isBefore(H.value)&&(H.value=J.value))},Re=()=>{q.value=Up(k(g),{lang:k(w),unit:"month",unlinkPanels:x.unlinkPanels})[0],z.value=q.value.add(1,"month"),I("pick",null)},Mt=de=>Rt(de)?de.map(le=>le.format(C)):de.format(C),P=de=>Rt(de)?de.map(le=>Be(le,C).locale(w.value)):Be(de,C).locale(w.value);function _e(de,le){if(x.unlinkPanels&&le){const ye=de?.year()||0,Vt=de?.month()||0,sn=le.year(),an=le.month();z.value=ye===sn&&Vt===an?le.add(1,_):le}else z.value=q.value.add(1,_),le&&(z.value=z.value.hour(le.hour()).minute(le.minute()).second(le.second()))}return I("set-picker-option",["isValidValue",Ra]),I("set-picker-option",["parseUserInput",P]),I("set-picker-option",["formatToString",Mt]),I("set-picker-option",["handleClear",Re]),(de,le)=>(ve(),Me("div",{class:ce([k(F).b(),k(re).b(),{"has-sidebar":de.$slots.sidebar||k(X),"has-time":k(Te)}])},[Se("div",{class:ce(k(F).e("body-wrapper"))},[Ei(de.$slots,"sidebar",{class:ce(k(F).e("sidebar"))}),k(X)?(ve(),Me("div",{key:0,class:ce(k(F).e("sidebar"))},[(ve(!0),Me(vt,null,Gt(k(D),(ye,Vt)=>(ve(),Me("button",{key:Vt,type:"button",class:ce(k(F).e("shortcut")),onClick:sn=>k(K)(ye)},at(ye.text),11,x1))),128))],2)):dt("v-if",!0),Se("div",{class:ce(k(F).e("body"))},[k(Te)?(ve(),Me("div",{key:0,class:ce(k(re).e("time-header"))},[Se("span",{class:ce(k(re).e("editors-wrap"))},[Se("span",{class:ce(k(re).e("time-picker-wrap"))},[Ee(k(Co),{size:"small",disabled:k(ue).selecting,placeholder:k(Q)("el.datepicker.startDate"),class:ce(k(re).e("editor")),"model-value":k(N),"validate-event":!1,onInput:le[0]||(le[0]=ye=>Je(ye,"min")),onChange:le[1]||(le[1]=ye=>_t(ye,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),fn((ve(),Me("span",{class:ce(k(re).e("time-picker-wrap"))},[Ee(k(Co),{size:"small",class:ce(k(re).e("editor")),disabled:k(ue).selecting,placeholder:k(Q)("el.datepicker.startTime"),"model-value":k(G),"validate-event":!1,onFocus:le[2]||(le[2]=ye=>Pt.value=!0),onInput:le[3]||(le[3]=ye=>bt(ye,"min")),onChange:le[4]||(le[4]=ye=>rn(ye,"min"))},null,8,["class","disabled","placeholder","model-value"]),Ee(k(Oa),{visible:Pt.value,format:k(ee),"datetime-role":"start","time-arrow-control":k(y),"parsed-value":q.value,onPick:V},null,8,["visible","format","time-arrow-control","parsed-value"])],2)),[[k(Pa),kn]])],2),Se("span",null,[Ee(k(pt),null,{default:$e(()=>[Ee(k(Ar))]),_:1})]),Se("span",{class:ce([k(re).e("editors-wrap"),"is-right"])},[Se("span",{class:ce(k(re).e("time-picker-wrap"))},[Ee(k(Co),{size:"small",class:ce(k(re).e("editor")),disabled:k(ue).selecting,placeholder:k(Q)("el.datepicker.endDate"),"model-value":k(W),readonly:!k(H),"validate-event":!1,onInput:le[5]||(le[5]=ye=>Je(ye,"max")),onChange:le[6]||(le[6]=ye=>_t(ye,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),fn((ve(),Me("span",{class:ce(k(re).e("time-picker-wrap"))},[Ee(k(Co),{size:"small",class:ce(k(re).e("editor")),disabled:k(ue).selecting,placeholder:k(Q)("el.datepicker.endTime"),"model-value":k(L),readonly:!k(H),"validate-event":!1,onFocus:le[7]||(le[7]=ye=>k(H)&&(ut.value=!0)),onInput:le[8]||(le[8]=ye=>bt(ye,"max")),onChange:le[9]||(le[9]=ye=>rn(ye,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),Ee(k(Oa),{"datetime-role":"end",visible:ut.value,format:k(ee),"time-arrow-control":k(y),"parsed-value":z.value,onPick:pe},null,8,["visible","format","time-arrow-control","parsed-value"])],2)),[[k(Pa),Qt]])],2)],2)):dt("v-if",!0),Se("div",{class:ce([[k(F).e("content"),k(re).e("content")],"is-left"])},[Se("div",{class:ce(k(re).e("header"))},[Se("button",{type:"button",class:ce([k(F).e("icon-btn"),"d-arrow-left"]),onClick:j},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Mi))]),_:1})],2),Se("button",{type:"button",class:ce([k(F).e("icon-btn"),"arrow-left"]),onClick:fe},[Ee(k(pt),null,{default:$e(()=>[Ee(k(za))]),_:1})],2),de.unlinkPanels?(ve(),Me("button",{key:0,type:"button",disabled:!k(Nt),class:ce([[k(F).e("icon-btn"),{"is-disabled":!k(Nt)}],"d-arrow-right"]),onClick:R},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Si))]),_:1})],10,D1)):dt("v-if",!0),de.unlinkPanels?(ve(),Me("button",{key:1,type:"button",disabled:!k(gt),class:ce([[k(F).e("icon-btn"),{"is-disabled":!k(gt)}],"arrow-right"]),onClick:Pe},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Ar))]),_:1})],10,E1)):dt("v-if",!0),Se("div",null,at(k(Ce)),1)],2),Ee(ja,{"selection-mode":"range",date:q.value,"min-date":k(H),"max-date":k(J),"range-state":k(ue),"disabled-date":k(B),"cell-class-name":k(A),onChangerange:k(ge),onPick:Kt,onSelect:k(te)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),Se("div",{class:ce([[k(F).e("content"),k(re).e("content")],"is-right"])},[Se("div",{class:ce(k(re).e("header"))},[de.unlinkPanels?(ve(),Me("button",{key:0,type:"button",disabled:!k(Nt),class:ce([[k(F).e("icon-btn"),{"is-disabled":!k(Nt)}],"d-arrow-left"]),onClick:De},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Mi))]),_:1})],10,M1)):dt("v-if",!0),de.unlinkPanels?(ve(),Me("button",{key:1,type:"button",disabled:!k(gt),class:ce([[k(F).e("icon-btn"),{"is-disabled":!k(gt)}],"arrow-left"]),onClick:We},[Ee(k(pt),null,{default:$e(()=>[Ee(k(za))]),_:1})],10,S1)):dt("v-if",!0),Se("button",{type:"button",class:ce([k(F).e("icon-btn"),"d-arrow-right"]),onClick:Ie},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Si))]),_:1})],2),Se("button",{type:"button",class:ce([k(F).e("icon-btn"),"arrow-right"]),onClick:ke},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Ar))]),_:1})],2),Se("div",null,at(k(ie)),1)],2),Ee(ja,{"selection-mode":"range",date:z.value,"min-date":k(H),"max-date":k(J),"range-state":k(ue),"disabled-date":k(B),"cell-class-name":k(A),onChangerange:k(ge),onPick:Kt,onSelect:k(te)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),k(Te)?(ve(),Me("div",{key:0,class:ce(k(F).e("footer"))},[k(S)?(ve(),Et(k(xr),{key:0,text:"",size:"small",class:ce(k(F).e("link-btn")),onClick:Re},{default:$e(()=>[Jn(at(k(Q)("el.datepicker.clear")),1)]),_:1},8,["class"])):dt("v-if",!0),Ee(k(xr),{plain:"",size:"small",class:ce(k(F).e("link-btn")),disabled:k(rt),onClick:le[10]||(le[10]=ye=>k(me)(!1))},{default:$e(()=>[Jn(at(k(Q)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):dt("v-if",!0)],2))}});var T1=$n(I1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);const N1=jt({...Fp}),P1=["pick","set-picker-option"],B1=({unlinkPanels:T,leftDate:I,rightDate:x})=>{const{t:_}=Bn(),E=()=>{I.value=I.value.subtract(1,"year"),T||(x.value=x.value.subtract(1,"year"))},B=()=>{T||(I.value=I.value.add(1,"year")),x.value=x.value.add(1,"year")},A=()=>{I.value=I.value.add(1,"year")},C=()=>{x.value=x.value.subtract(1,"year")},m=xe(()=>`${I.value.year()} ${_("el.datepicker.year")}`),y=xe(()=>`${x.value.year()} ${_("el.datepicker.year")}`),S=xe(()=>I.value.year()),D=xe(()=>x.value.year()===I.value.year()?I.value.year()+1:x.value.year());return{leftPrevYear:E,rightNextYear:B,leftNextYear:A,rightPrevYear:C,leftLabel:m,rightLabel:y,leftYear:S,rightYear:D}},z1=["onClick"],L1=["disabled"],O1=["disabled"],R1={name:"DatePickerMonthRange"},j1=yn({...R1,props:N1,emits:P1,setup(T,{emit:I}){const x=T,_="year",{lang:E}=Bn(),B=Xn("EP_PICKER_BASE"),{shortcuts:A,disabledDate:C,format:m}=B.props,y=Xo(B.props,"defaultValue"),S=Oe(Be().locale(E.value)),D=Oe(Be().locale(E.value).add(1,_)),{minDate:g,maxDate:w,rangeState:q,ppNs:z,drpNs:H,handleChangeRange:J,handleRangeConfirm:ue,handleShortcutClick:F,onSelect:re}=Hp(x,{defaultValue:y,leftDate:S,rightDate:D,unit:_,onParsedValueChanged:se}),ge=xe(()=>!!A.length),{leftPrevYear:me,rightNextYear:K,leftNextYear:te,rightPrevYear:Q,leftLabel:oe,rightLabel:be,leftYear:Ce,rightYear:ie}=B1({unlinkPanels:Xo(x,"unlinkPanels"),leftDate:S,rightDate:D}),Z=xe(()=>x.unlinkPanels&&ie.value>Ce.value+1),$=(X,N=!0)=>{const W=X.minDate,G=X.maxDate;w.value===G&&g.value===W||(w.value=G,g.value=W,N&&ue())},ae=X=>X.map(N=>N.format(m));function se(X,N){if(x.unlinkPanels&&N){const W=X?.year()||0,G=N.year();D.value=W===G?N.add(1,_):N}else D.value=S.value.add(1,_)}return I("set-picker-option",["formatToString",ae]),(X,N)=>(ve(),Me("div",{class:ce([k(z).b(),k(H).b(),{"has-sidebar":Boolean(X.$slots.sidebar)||k(ge)}])},[Se("div",{class:ce(k(z).e("body-wrapper"))},[Ei(X.$slots,"sidebar",{class:ce(k(z).e("sidebar"))}),k(ge)?(ve(),Me("div",{key:0,class:ce(k(z).e("sidebar"))},[(ve(!0),Me(vt,null,Gt(k(A),(W,G)=>(ve(),Me("button",{key:G,type:"button",class:ce(k(z).e("shortcut")),onClick:L=>k(F)(W)},at(W.text),11,z1))),128))],2)):dt("v-if",!0),Se("div",{class:ce(k(z).e("body"))},[Se("div",{class:ce([[k(z).e("content"),k(H).e("content")],"is-left"])},[Se("div",{class:ce(k(H).e("header"))},[Se("button",{type:"button",class:ce([k(z).e("icon-btn"),"d-arrow-left"]),onClick:N[0]||(N[0]=(...W)=>k(me)&&k(me)(...W))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Mi))]),_:1})],2),X.unlinkPanels?(ve(),Me("button",{key:0,type:"button",disabled:!k(Z),class:ce([[k(z).e("icon-btn"),{[k(z).is("disabled")]:!k(Z)}],"d-arrow-right"]),onClick:N[1]||(N[1]=(...W)=>k(te)&&k(te)(...W))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Si))]),_:1})],10,L1)):dt("v-if",!0),Se("div",null,at(k(oe)),1)],2),Ee(Fa,{"selection-mode":"range",date:S.value,"min-date":k(g),"max-date":k(w),"range-state":k(q),"disabled-date":k(C),onChangerange:k(J),onPick:$,onSelect:k(re)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),Se("div",{class:ce([[k(z).e("content"),k(H).e("content")],"is-right"])},[Se("div",{class:ce(k(H).e("header"))},[X.unlinkPanels?(ve(),Me("button",{key:0,type:"button",disabled:!k(Z),class:ce([[k(z).e("icon-btn"),{"is-disabled":!k(Z)}],"d-arrow-left"]),onClick:N[2]||(N[2]=(...W)=>k(Q)&&k(Q)(...W))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Mi))]),_:1})],10,O1)):dt("v-if",!0),Se("button",{type:"button",class:ce([k(z).e("icon-btn"),"d-arrow-right"]),onClick:N[3]||(N[3]=(...W)=>k(K)&&k(K)(...W))},[Ee(k(pt),null,{default:$e(()=>[Ee(k(Si))]),_:1})],2),Se("div",null,at(k(be)),1)],2),Ee(Fa,{"selection-mode":"range",date:D.value,"min-date":k(g),"max-date":k(w),"range-state":k(q),"disabled-date":k(C),onChangerange:k(J),onPick:$,onSelect:k(re)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});var F1=$n(j1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);const V1=function(T){switch(T){case"daterange":case"datetimerange":return T1;case"monthrange":return F1;default:return A1}};Be.extend(fy);Be.extend(Oy);Be.extend(ky);Be.extend(Ry);Be.extend(jy);Be.extend(Fy);Be.extend(Vy);Be.extend(Uy);var U1=yn({name:"ElDatePicker",install:null,props:{...Tp,...Hy},emits:["update:modelValue"],setup(T,{expose:I,emit:x,slots:_}){const E=$t("picker-panel");Ba("ElPopperOptions",Ha(Xo(T,"popperOptions"))),Ba($a,{slots:_,pickerNs:E});const B=Oe();I({focus:(m=!0)=>{var y;(y=B.value)==null||y.focus(m)},handleOpen:()=>{var m;(m=B.value)==null||m.handleOpen()},handleClose:()=>{var m;(m=B.value)==null||m.handleClose()}});const C=m=>{x("update:modelValue",m)};return()=>{var m;const y=(m=T.format)!=null?m:by[T.type]||Zo,S=V1(T.type);return Ee(yy,mp(T,{format:y,type:T.type,ref:B,"onUpdate:modelValue":C}),{default:D=>Ee(S,D,null),"range-separator":_["range-separator"]})}}});const Cr=U1;Cr.install=T=>{T.component(Cr.name,Cr)};const ix=Cr;function H1(T){let I;const x=$t("loading"),_=Oe(!1),E=Ha({...T,originalPosition:"",originalOverflow:"",visible:!1});function B(w){E.text=w}function A(){const w=E.parent;if(!w.vLoadingAddClassList){let q=w.getAttribute("loading-number");q=Number.parseInt(q)-1,q?w.setAttribute("loading-number",q.toString()):(yr(w,x.bm("parent","relative")),w.removeAttribute("loading-number")),yr(w,x.bm("parent","hidden"))}C(),D.unmount()}function C(){var w,q;(q=(w=g.$el)==null?void 0:w.parentNode)==null||q.removeChild(g.$el)}function m(){var w;T.beforeClose&&!T.beforeClose()||(_.value=!0,clearTimeout(I),I=window.setTimeout(y,400),E.visible=!1,(w=T.closed)==null||w.call(T))}function y(){if(!_.value)return;const w=E.parent;_.value=!1,w.vLoadingAddClassList=void 0,A()}const D=X0({name:"ElLoading",setup(){return()=>{const w=E.spinner||E.svg,q=xi("svg",{class:"circular",viewBox:E.svgViewBox?E.svgViewBox:"25 25 50 50",...w?{innerHTML:w}:{}},[xi("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),z=E.text?xi("p",{class:x.b("text")},[E.text]):void 0;return xi(pp,{name:x.b("fade"),onAfterLeave:y},{default:$e(()=>[fn(Ee("div",{style:{backgroundColor:E.background||""},class:[x.b("mask"),E.customClass,E.fullscreen?"is-fullscreen":""]},[xi("div",{class:x.b("spinner")},[q,z])]),[[Ao,E.visible]])])})}}}),g=D.mount(document.createElement("div"));return{...ey(E),setText:B,removeElLoadingChild:C,close:m,handleAfterLeave:y,vm:g,get $el(){return g.$el}}}let _r;const $1=function(T={}){if(!ty)return;const I=W1(T);if(I.fullscreen&&_r)return _r;const x=H1({...I,closed:()=>{var E;(E=I.closed)==null||E.call(I),I.fullscreen&&(_r=void 0)}});Y1(I,I.parent,x),dp(I,I.parent,x),I.parent.vLoadingAddClassList=()=>dp(I,I.parent,x);let _=I.parent.getAttribute("loading-number");return _?_=`${Number.parseInt(_)+1}`:_="1",I.parent.setAttribute("loading-number",_),I.parent.appendChild(x.$el),on(()=>x.visible.value=I.visible),I.fullscreen&&(_r=x),x},W1=T=>{var I,x,_,E;let B;return vp(T.target)?B=(I=document.querySelector(T.target))!=null?I:document.body:B=T.target||document.body,{parent:B===document.body||T.body?document.body:B,background:T.background||"",svg:T.svg||"",svgViewBox:T.svgViewBox||"",spinner:T.spinner||!1,text:T.text||"",fullscreen:B===document.body&&((x=T.fullscreen)!=null?x:!0),lock:(_=T.lock)!=null?_:!1,customClass:T.customClass||"",visible:(E=T.visible)!=null?E:!0,target:B}},Y1=async(T,I,x)=>{const{nextZIndex:_}=ny(),E={};if(T.fullscreen)x.originalPosition.value=Di(document.body,"position"),x.originalOverflow.value=Di(document.body,"overflow"),E.zIndex=_();else if(T.parent===document.body){x.originalPosition.value=Di(document.body,"position"),await on();for(const B of["top","left"]){const A=B==="top"?"scrollTop":"scrollLeft";E[B]=`${T.target.getBoundingClientRect()[B]+document.body[A]+document.documentElement[A]-Number.parseInt(Di(document.body,`margin-${B}`),10)}px`}for(const B of["height","width"])E[B]=`${T.target.getBoundingClientRect()[B]}px`}else x.originalPosition.value=Di(I,"position");for(const[B,A]of Object.entries(E))x.$el.style[B]=A},dp=(T,I,x)=>{const _=$t("loading");["absolute","fixed","sticky"].includes(x.originalPosition.value)?yr(I,_.bm("parent","relative")):ep(I,_.bm("parent","relative")),T.fullscreen&&T.lock?ep(I,_.bm("parent","hidden")):yr(I,_.bm("parent","hidden"))},Va=Symbol("ElLoading"),up=(T,I)=>{var x,_,E,B;const A=I.instance,C=g=>_p(I.value)?I.value[g]:void 0,m=g=>{const w=vp(g)&&A?.[g]||g;return w&&Oe(w)},y=g=>m(C(g)||T.getAttribute(`element-loading-${iy(g)}`)),S=(x=C("fullscreen"))!=null?x:I.modifiers.fullscreen,D={text:y("text"),svg:y("svg"),svgViewBox:y("svgViewBox"),spinner:y("spinner"),background:y("background"),customClass:y("customClass"),fullscreen:S,target:(_=C("target"))!=null?_:S?void 0:T,body:(E=C("body"))!=null?E:I.modifiers.body,lock:(B=C("lock"))!=null?B:I.modifiers.lock};T[Va]={options:D,instance:$1(D)}},q1=(T,I)=>{for(const x of Object.keys(I))oy(I[x])&&(I[x].value=T[x])},rx={mounted(T,I){I.value&&up(T,I)},updated(T,I){const x=T[Va];I.oldValue!==I.value&&(I.value&&!I.oldValue?up(T,I):I.value&&I.oldValue?_p(I.value)&&q1(I.value,x.options):x?.instance.close())},unmounted(T){var I;(I=T[Va])==null||I.instance.close()}};(function(T){const I=T["zh-cn"]=T["zh-cn"]||{};I.dictionary=Object.assign(I.dictionary||{},{"%0 of %1":"\u7B2C %0 \u6B65\uFF0C\u5171 %1 \u6B65",Aquamarine:"\u6D77\u84DD\u8272",Black:"\u9ED1\u8272","Block quote":"\u5757\u5F15\u7528",Blue:"\u84DD\u8272",Bold:"\u52A0\u7C97","Break text":"\u6587\u5B57\u65AD\u884C","Bulleted List":"\u9879\u76EE\u7B26\u53F7\u5217\u8868",Cancel:"\u53D6\u6D88","Cannot determine a category for the uploaded file.":"\u65E0\u6CD5\u786E\u5B9A\u4E0A\u4F20\u6587\u4EF6\u7684\u7C7B\u522B\u3002","Cannot upload file:":"\u65E0\u6CD5\u4E0A\u4F20\u7684\u6587\u4EF6\uFF1A","Caption for image: %0":"\u56FE\u7247\u8BF4\u660E\uFF1A%0","Caption for the image":"\u56FE\u7247\u8BF4\u660E\uFF1A","Centered image":"\u56FE\u7247\u5C45\u4E2D","Change image text alternative":"\u66F4\u6539\u56FE\u7247\u66FF\u6362\u6587\u672C","Choose heading":"\u6807\u9898\u7C7B\u578B",Column:"\u5217","Could not insert image at the current position.":"\u65E0\u6CD5\u5728\u5F53\u524D\u4F4D\u7F6E\u63D2\u5165\u56FE\u7247","Could not obtain resized image URL.":"\u65E0\u6CD5\u83B7\u53D6\u91CD\u8BBE\u5927\u5C0F\u7684\u56FE\u7247URL","Decrease indent":"\u51CF\u5C11\u7F29\u8FDB","Delete column":"\u5220\u9664\u672C\u5217","Delete row":"\u5220\u9664\u672C\u884C","Dim grey":"\u6697\u7070\u8272",Downloadable:"\u53EF\u4E0B\u8F7D","Dropdown toolbar":"\u4E0B\u62C9\u5DE5\u5177\u680F","Edit block":"\u7F16\u8F91\u6846","Edit link":"\u4FEE\u6539\u94FE\u63A5","Editor block content toolbar":"","Editor contextual toolbar":"","Editor editing area: %0":"\u7F16\u8F91\u5668\u7F16\u8F91\u533A\u57DF\uFF1A%0","Editor toolbar":"\u7F16\u8F91\u5668\u5DE5\u5177\u680F","Enter image caption":"\u8F93\u5165\u56FE\u7247\u6807\u9898","Full size image":"\u5168\u5C3A\u5BF8\u56FE\u7247",Green:"\u7EFF\u8272",Grey:"\u7070\u8272","Header column":"\u6807\u9898\u5217","Header row":"\u6807\u9898\u884C",Heading:"\u6807\u9898","Heading 1":"\u6807\u9898 1","Heading 2":"\u6807\u9898 2","Heading 3":"\u6807\u9898 3","Heading 4":"\u6807\u9898 4","Heading 5":"\u6807\u9898 5","Heading 6":"\u6807\u9898 6","Image toolbar":"\u56FE\u7247\u5DE5\u5177\u680F","image widget":"\u56FE\u7247\u7EC4\u4EF6","In line":"\u884C\u5185","Increase indent":"\u589E\u52A0\u7F29\u8FDB","Insert column left":"\u5DE6\u4FA7\u63D2\u5165\u5217","Insert column right":"\u53F3\u4FA7\u63D2\u5165\u5217","Insert image":"\u63D2\u5165\u56FE\u50CF","Insert image or file":"\u63D2\u5165\u56FE\u7247\u6216\u6587\u4EF6","Insert media":"\u63D2\u5165\u5A92\u4F53","Insert paragraph after block":"\u5728\u540E\u9762\u63D2\u5165\u6BB5\u843D","Insert paragraph before block":"\u5728\u524D\u9762\u63D2\u5165\u6BB5\u843D","Insert row above":"\u5728\u4E0A\u9762\u63D2\u5165\u4E00\u884C","Insert row below":"\u5728\u4E0B\u9762\u63D2\u5165\u4E00\u884C","Insert table":"\u63D2\u5165\u8868\u683C","Inserting image failed":"\u63D2\u5165\u56FE\u7247\u5931\u8D25",Italic:"\u503E\u659C","Left aligned image":"\u56FE\u7247\u5DE6\u4FA7\u5BF9\u9F50","Light blue":"\u6D45\u84DD\u8272","Light green":"\u6D45\u7EFF\u8272","Light grey":"\u6D45\u7070\u8272",Link:"\u8D85\u94FE\u63A5","Link URL":"\u94FE\u63A5\u7F51\u5740","Media URL":"\u5A92\u4F53URL","media widget":"\u5A92\u4F53\u5C0F\u90E8\u4EF6","Merge cell down":"\u5411\u4E0B\u5408\u5E76\u5355\u5143\u683C","Merge cell left":"\u5411\u5DE6\u5408\u5E76\u5355\u5143\u683C","Merge cell right":"\u5411\u53F3\u5408\u5E76\u5355\u5143\u683C","Merge cell up":"\u5411\u4E0A\u5408\u5E76\u5355\u5143\u683C","Merge cells":"\u5408\u5E76\u5355\u5143\u683C",Next:"\u4E0B\u4E00\u6B65","Numbered List":"\u9879\u76EE\u7F16\u53F7\u5217\u8868","Open file manager":"\u6253\u5F00\u6587\u4EF6\u7BA1\u7406\u5668","Open in a new tab":"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00","Open link in new tab":"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\u94FE\u63A5","Open media in new tab":"",Orange:"\u6A59\u8272",Paragraph:"\u6BB5\u843D","Paste the media URL in the input.":"\u5728\u8F93\u5165\u4E2D\u7C98\u8D34\u5A92\u4F53URL",Previous:"\u4E0A\u4E00\u6B65",Purple:"\u7D2B\u8272",Red:"\u7EA2\u8272",Redo:"\u91CD\u505A","Rich Text Editor":"\u5BCC\u6587\u672C\u7F16\u8F91\u5668","Right aligned image":"\u56FE\u7247\u53F3\u4FA7\u5BF9\u9F50",Row:"\u884C",Save:"\u4FDD\u5B58","Select all":"\u5168\u9009","Select column":"\u9009\u62E9\u5217","Select row":"\u9009\u62E9\u884C","Selecting resized image failed":"\u9009\u62E9\u91CD\u8BBE\u5927\u5C0F\u7684\u56FE\u7247\u5931\u8D25","Show more items":"\u663E\u793A\u66F4\u591A","Side image":"\u56FE\u7247\u4FA7\u8FB9\u663E\u793A","Split cell horizontally":"\u6A2A\u5411\u62C6\u5206\u5355\u5143\u683C","Split cell vertically":"\u7EB5\u5411\u62C6\u5206\u5355\u5143\u683C","Table toolbar":"\u8868\u683C\u5DE5\u5177\u680F","Text alternative":"\u66FF\u6362\u6587\u672C","The URL must not be empty.":"URL\u4E0D\u53EF\u4EE5\u4E3A\u7A7A\u3002","This link has no URL":"\u6B64\u94FE\u63A5\u6CA1\u6709\u8BBE\u7F6E\u7F51\u5740","This media URL is not supported.":"\u4E0D\u652F\u6301\u6B64\u5A92\u4F53URL\u3002","Tip: Paste the URL into the content to embed faster.":"\u63D0\u793A\uFF1A\u5C06URL\u7C98\u8D34\u5230\u5185\u5BB9\u4E2D\u53EF\u66F4\u5FEB\u5730\u5D4C\u5165","Toggle caption off":"\u5173\u95ED\u8868\u6807\u9898","Toggle caption on":"\u6253\u5F00\u8868\u6807\u9898",Turquoise:"\u9752\u8272",Undo:"\u64A4\u9500",Unlink:"\u53D6\u6D88\u8D85\u94FE\u63A5","Upload failed":"\u4E0A\u4F20\u5931\u8D25","Upload in progress":"\u6B63\u5728\u4E0A\u4F20",White:"\u767D\u8272","Widget toolbar":"\u5C0F\u90E8\u4EF6\u5DE5\u5177\u680F","Wrap text":"\u6587\u5B57\u73AF\u7ED5",Yellow:"\u9EC4\u8272"}),I.getPluralForm=function(x){return 0}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));var Ua={exports:{}};(function(T,I){(function(x){const _=x.en=x.en||{};_.dictionary=Object.assign(_.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(x,_){T.exports=_()}(self,()=>(()=>{var x={3062:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const w=g},903:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const w=g},3143:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},4717:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const w=g},9315:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const w=g},8733:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const w=g},3508:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const w=g},2640:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const w=g},5083:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},4036:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const w=g},3773:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const w=g},3689:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const w=g},1905:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},9773:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const w=g},2347:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},7754:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},4652:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const w=g},7442:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},9292:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},1613:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);outline:none;width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAGlD,YAAa,CALb,+CAWD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const w=g},6306:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const w=g},3881:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const w=g},6945:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},4906:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const w=g},5332:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton:active{background:transparent}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDmEA,CAxCA,yICvBC,qCD+DD,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2EC/CD,eD0DC,CAXA,6LC3CA,qCAAsC,CD6CpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEvEA,kCFyEA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAIA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF,CAKF,gFACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}

	/* Regular buttons get a backgound when active. Switch buttons announce that through the switch toggle instead */
	&:active, &.ck-on:active {
		background: transparent;
	}

}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const w=g},6781:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const w=g},5485:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},3949:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},7686:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},7339:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const w=g},9688:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},8847:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const w=g},6574:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const w=g},4879:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},3662:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const w=g},2577:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},1046:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},8793:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},4650:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const w=g},7676:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},5868:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},6764:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const w=g},9695:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const w=g},5542:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDuFD,CA1FA,qECOE,qCDmFF,CA1FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAsFD,CAnFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CApFF,qCAwFE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=g},3332:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const w=g},4793:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCnGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJmGD,CI7FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const w=g},3488:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=g},8506:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const w=g},4921:(A,C,m)=>{m.d(C,{Z:()=>w});var y=m(1799),S=m.n(y),D=m(2609),g=m.n(D)()(S());g.push([A.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const w=g},2609:A=>{A.exports=function(C){var m=[];return m.toString=function(){return this.map(function(y){var S=C(y);return y[2]?"@media ".concat(y[2]," {").concat(S,"}"):S}).join("")},m.i=function(y,S,D){typeof y=="string"&&(y=[[null,y,""]]);var g={};if(D)for(var w=0;w<this.length;w++){var q=this[w][0];q!=null&&(g[q]=!0)}for(var z=0;z<y.length;z++){var H=[].concat(y[z]);D&&g[H[0]]||(S&&(H[2]?H[2]="".concat(S," and ").concat(H[2]):H[2]=S),m.push(H))}},m}},1799:A=>{function C(y,S){return function(D){if(Array.isArray(D))return D}(y)||function(D,g){var w=D&&(typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"]);if(w!=null){var q,z,H=[],J=!0,ue=!1;try{for(w=w.call(D);!(J=(q=w.next()).done)&&(H.push(q.value),!g||H.length!==g);J=!0);}catch(F){ue=!0,z=F}finally{try{J||w.return==null||w.return()}finally{if(ue)throw z}}return H}}(y,S)||function(D,g){if(!!D){if(typeof D=="string")return m(D,g);var w=Object.prototype.toString.call(D).slice(8,-1);if(w==="Object"&&D.constructor&&(w=D.constructor.name),w==="Map"||w==="Set")return Array.from(D);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return m(D,g)}}(y,S)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(y,S){(S==null||S>y.length)&&(S=y.length);for(var D=0,g=new Array(S);D<S;D++)g[D]=y[D];return g}A.exports=function(y){var S=C(y,4),D=S[1],g=S[3];if(!g)return D;if(typeof btoa=="function"){var w=btoa(unescape(encodeURIComponent(JSON.stringify(g)))),q="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w),z="/*# ".concat(q," */"),H=g.sources.map(function(J){return"/*# sourceURL=".concat(g.sourceRoot||"").concat(J," */")});return[D].concat(H).concat([z]).join(`
`)}return[D].join(`
`)}},6062:(A,C,m)=>{var y,S=function(){return y===void 0&&(y=Boolean(window&&document&&document.all&&!window.atob)),y},D=function(){var K={};return function(te){if(K[te]===void 0){var Q=document.querySelector(te);if(window.HTMLIFrameElement&&Q instanceof window.HTMLIFrameElement)try{Q=Q.contentDocument.head}catch{Q=null}K[te]=Q}return K[te]}}(),g=[];function w(K){for(var te=-1,Q=0;Q<g.length;Q++)if(g[Q].identifier===K){te=Q;break}return te}function q(K,te){for(var Q={},oe=[],be=0;be<K.length;be++){var Ce=K[be],ie=te.base?Ce[0]+te.base:Ce[0],Z=Q[ie]||0,$="".concat(ie," ").concat(Z);Q[ie]=Z+1;var ae=w($),se={css:Ce[1],media:Ce[2],sourceMap:Ce[3]};ae!==-1?(g[ae].references++,g[ae].updater(se)):g.push({identifier:$,updater:me(se,te),references:1}),oe.push($)}return oe}function z(K){var te=document.createElement("style"),Q=K.attributes||{};if(Q.nonce===void 0){var oe=m.nc;oe&&(Q.nonce=oe)}if(Object.keys(Q).forEach(function(Ce){te.setAttribute(Ce,Q[Ce])}),typeof K.insert=="function")K.insert(te);else{var be=D(K.insert||"head");if(!be)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");be.appendChild(te)}return te}var H,J=(H=[],function(K,te){return H[K]=te,H.filter(Boolean).join(`
`)});function ue(K,te,Q,oe){var be=Q?"":oe.media?"@media ".concat(oe.media," {").concat(oe.css,"}"):oe.css;if(K.styleSheet)K.styleSheet.cssText=J(te,be);else{var Ce=document.createTextNode(be),ie=K.childNodes;ie[te]&&K.removeChild(ie[te]),ie.length?K.insertBefore(Ce,ie[te]):K.appendChild(Ce)}}function F(K,te,Q){var oe=Q.css,be=Q.media,Ce=Q.sourceMap;if(be?K.setAttribute("media",be):K.removeAttribute("media"),Ce&&typeof btoa<"u"&&(oe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ce))))," */")),K.styleSheet)K.styleSheet.cssText=oe;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(oe))}}var re=null,ge=0;function me(K,te){var Q,oe,be;if(te.singleton){var Ce=ge++;Q=re||(re=z(te)),oe=ue.bind(null,Q,Ce,!1),be=ue.bind(null,Q,Ce,!0)}else Q=z(te),oe=F.bind(null,Q,te),be=function(){(function(ie){if(ie.parentNode===null)return!1;ie.parentNode.removeChild(ie)})(Q)};return oe(K),function(ie){if(ie){if(ie.css===K.css&&ie.media===K.media&&ie.sourceMap===K.sourceMap)return;oe(K=ie)}else be()}}A.exports=function(K,te){(te=te||{}).singleton||typeof te.singleton=="boolean"||(te.singleton=S());var Q=q(K=K||[],te);return function(oe){if(oe=oe||[],Object.prototype.toString.call(oe)==="[object Array]"){for(var be=0;be<Q.length;be++){var Ce=w(Q[be]);g[Ce].references--}for(var ie=q(oe,te),Z=0;Z<Q.length;Z++){var $=w(Q[Z]);g[$].references===0&&(g[$].updater(),g.splice($,1))}Q=ie}}}}},_={};function E(A){var C=_[A];if(C!==void 0)return C.exports;var m=_[A]={id:A,exports:{}};return x[A](m,m.exports,E),m.exports}E.n=A=>{var C=A&&A.__esModule?()=>A.default:()=>A;return E.d(C,{a:C}),C},E.d=(A,C)=>{for(var m in C)E.o(C,m)&&!E.o(A,m)&&Object.defineProperty(A,m,{enumerable:!0,get:C[m]})},E.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),E.o=(A,C)=>Object.prototype.hasOwnProperty.call(A,C),E.nc=void 0;var B={};return(()=>{E.d(B,{default:()=>Sa});const A=function(){return function i(){i.called=!0}};class C{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=A(),this.off=A()}}const m=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function y(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+m[i>>0&255]+m[i>>8&255]+m[i>>16&255]+m[i>>24&255]+m[e>>0&255]+m[e>>8&255]+m[e>>16&255]+m[e>>24&255]+m[t>>0&255]+m[t>>8&255]+m[t>>16&255]+m[t>>24&255]+m[n>>0&255]+m[n>>8&255]+m[n>>16&255]+m[n>>24&255]}const S={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function D(i,e){const t=S.get(e.priority);for(let n=0;n<i.length;n++)if(S.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class g extends Error{constructor(e,t,n){super(function(o,r){const s=new WeakSet,a=(d,u)=>{if(typeof u=="object"&&u!==null){if(s.has(u))return`[object ${u.constructor.name}]`;s.add(u)}return u},c=r?` ${JSON.stringify(r,a)}`:"",l=z(o);return o+c+l}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new g(e.message,t);throw n.stack=e.stack,n}}function w(i,e){console.warn(...H(i,e))}function q(i,e){console.error(...H(i,e))}function z(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function H(i,e){const t=z(i);return e?[i,e,t]:[i,t]}const J="35.1.0",ue=typeof window=="object"?window:E.g;if(ue.CKEDITOR_VERSION)throw new g("ckeditor-duplicated-modules",null);ue.CKEDITOR_VERSION=J;const F=Symbol("listeningTo"),re=Symbol("emitterId"),ge=Symbol("delegations");function me(i){return class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(r,...s)=>{o||(o=!0,r.off(),t.call(this,r,...s))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let r,s;this[F]||(this[F]={});const a=this[F];Q(e)||te(e);const c=Q(e);(r=a[c])||(r=a[c]={emitter:e,callbacks:{}}),(s=r.callbacks[t])||(s=r.callbacks[t]=[]),s.push(n),function(l,d,u,h,p){d._addEventListener?d._addEventListener(u,h,p):l._addEventListener.call(d,u,h,p)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[F];let r=e&&Q(e);const s=o&&r?o[r]:void 0,a=s&&t?s.callbacks[t]:void 0;if(!(!o||e&&!s||t&&!a))if(n)Z(this,e,t,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[t]:Z(this,e,t,n));else if(a){for(;n=a.pop();)Z(this,e,t,n);delete s.callbacks[t]}else if(s){for(t in s.callbacks)this.stopListening(e,t);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[F]}}fire(e,...t){try{const n=e instanceof C?e:new C(this,e),o=n.name;let r=Ce(this,o);if(n.path.push(this),r){const a=[n,...t];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[c].callback)),!n.stop.called);c++);}const s=this[ge];if(s){const a=s.get(o),c=s.get("*");a&&ie(a,n,t),c&&ie(c,n,t)}return n.return}catch(n){g.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ge]||(this[ge]=new Map),e.forEach(o=>{const r=this[ge].get(o);r?r.set(t,n):this[ge].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ge])if(e)if(t){const n=this[ge].get(e);n&&n.delete(t)}else this[ge].delete(e);else this[ge].clear()}_addEventListener(e,t,n){(function(s,a){const c=oe(s);if(c[a])return;let l=a,d=null;const u=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},u.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const h of u)h.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,e);const o=be(this,e),r={callback:t,priority:S.get(n.priority)};for(const s of o)D(s,r)}_removeEventListener(e,t){const n=be(this,e);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==t&&(o.splice(r,1),r--)}}}const K=me(Object);function te(i,e){i[re]||(i[re]=e||y())}function Q(i){return i[re]}function oe(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function be(i,e){const t=oe(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=be(i,t.childEvents[o]);n=n.concat(r)}return n}function Ce(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Ce(i,e.substr(0,e.lastIndexOf(":"))):null}function ie(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new C(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function Z(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{me[i]=K.prototype[i]});const $=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},ae=Symbol("observableProperties"),se=Symbol("boundObservables"),X=Symbol("boundProperties"),N=Symbol("decoratedMethods"),W=Symbol("decoratedOriginal");function G(i){return class extends i{set(e,t){if($(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);ee(this);const n=this[ae];if(e in this&&!n.has(e))throw new g("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const r=n.get(e);let s=this.fire(`set:${e}`,e,o,r);s===void 0&&(s=o),r===s&&n.has(e)||(n.set(e,s),this.fire(`change:${e}`,e,s,r))}}),this[e]=t}bind(...e){if(!e.length||!fe(e))throw new g("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new g("observable-bind-duplicate-properties",this);ee(this);const t=this[X];e.forEach(o=>{if(t.has(o))throw new g("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const r={property:o,to:[]};t.set(o,r),n.set(o,r)}),{to:Ae,toMany:j,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[ae])return;const t=this[X],n=this[se];if(e.length){if(!fe(e))throw new g("observable-unbind-wrong-properties",this);e.forEach(o=>{const r=t.get(o);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),t.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){ee(this);const t=this[e];if(!t)throw new g("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][W]=t,this[N]||(this[N]=[]),this[N].push(e)}stopListening(e,t,n){if(!e&&this[N]){for(const o of this[N])this[o]=this[o][W];delete this[N]}K.prototype.stopListening.call(this,e,t,n)}}}const L=G(K);function ee(i){i[ae]||(Object.defineProperty(i,ae,{value:new Map}),Object.defineProperty(i,se,{value:new Map}),Object.defineProperty(i,X,{value:new Map}))}function Ae(...i){const e=function(...r){if(!r.length)throw new g("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new g("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new g("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new g("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new g("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const s=o[se];let a;s.get(r.observable)||o.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Ie(o,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,u,h,p){const f=d[se],b=f.get(h),v=b||{};v[p]||(v[p]=new Set),v[p].add(u),b||f.set(h,v)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Ie(this._observable,r)})}function j(i,e,t){if(this._bindings.size>1)throw new g("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function fe(i){return i.every(e=>typeof e=="string")}function Ie(i,e){const t=i[X].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}function ke(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(r=>{if(r in i.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const s=Object.getOwnPropertyDescriptor(t,r);s.enumerable=!1,Object.defineProperty(i.prototype,r,s)})})}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{G[i]=L.prototype[i]});class R{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Pe,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Pe),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Pe(i){i.return=!1,i.stop()}ke(R,G);class De{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",We,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",We),this.refresh())}execute(){}destroy(){this.stopListening()}}function We(i){i.return=!1,i.stop()}ke(De,G);class He extends De{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){D(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const gt=typeof nn=="object"&&nn&&nn.Object===Object&&nn;var Nt=typeof self=="object"&&self&&self.Object===Object&&self;const rt=gt||Nt||Function("return this")(),Te=rt.Symbol;var Ft=Object.prototype,Kt=Ft.hasOwnProperty,Pt=Ft.toString,ut=Te?Te.toStringTag:void 0;const kn=function(i){var e=Kt.call(i,ut),t=i[ut];try{i[ut]=void 0;var n=!0}catch{}var o=Pt.call(i);return n&&(e?i[ut]=t:delete i[ut]),o};var Qt=Object.prototype.toString;const Je=function(i){return Qt.call(i)};var _t=Te?Te.toStringTag:void 0;const bt=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":_t&&_t in Object(i)?kn(i):Je(i)},rn=function(i,e){return function(t){return i(e(t))}},V=rn(Object.getPrototypeOf,Object),pe=function(i){return i!=null&&typeof i=="object"};var Re=Function.prototype,Mt=Object.prototype,P=Re.toString,_e=Mt.hasOwnProperty,de=P.call(Object);const le=function(i){if(!pe(i)||bt(i)!="[object Object]")return!1;var e=V(i);if(e===null)return!0;var t=_e.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&P.call(t)==de},ye=function(){this.__data__=[],this.size=0},Vt=function(i,e){return i===e||i!=i&&e!=e},sn=function(i,e){for(var t=i.length;t--;)if(Vt(i[t][0],e))return t;return-1};var an=Array.prototype.splice;const Ge=function(i){var e=this.__data__,t=sn(e,i);return!(t<0)&&(t==e.length-1?e.pop():an.call(e,t,1),--this.size,!0)},cn=function(i){var e=this.__data__,t=sn(e,i);return t<0?void 0:e[t][1]},Wp=function(i){return sn(this.__data__,i)>-1},Yp=function(i,e){var t=this.__data__,n=sn(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function xo(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}xo.prototype.clear=ye,xo.prototype.delete=Ge,xo.prototype.get=cn,xo.prototype.has=Wp,xo.prototype.set=Yp;const Ii=xo,qp=function(){this.__data__=new Ii,this.size=0},Gp=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},Kp=function(i){return this.__data__.get(i)},Qp=function(i){return this.__data__.has(i)},eo=function(i){if(!$(i))return!1;var e=bt(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Dr=rt["__core-js_shared__"];var Ya=function(){var i=/[^.]+$/.exec(Dr&&Dr.keys&&Dr.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Zp=function(i){return!!Ya&&Ya in i};var Jp=Function.prototype.toString;const to=function(i){if(i!=null){try{return Jp.call(i)}catch{}try{return i+""}catch{}}return""};var Xp=/^\[object .+?Constructor\]$/,ef=Function.prototype,tf=Object.prototype,nf=ef.toString,of=tf.hasOwnProperty,rf=RegExp("^"+nf.call(of).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const sf=function(i){return!(!$(i)||Zp(i))&&(eo(i)?rf:Xp).test(to(i))},af=function(i,e){return i?.[e]},no=function(i,e){var t=af(i,e);return sf(t)?t:void 0},ei=no(rt,"Map"),ti=no(Object,"create"),cf=function(){this.__data__=ti?ti(null):{},this.size=0},lf=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var df=Object.prototype.hasOwnProperty;const uf=function(i){var e=this.__data__;if(ti){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return df.call(e,i)?e[i]:void 0};var hf=Object.prototype.hasOwnProperty;const gf=function(i){var e=this.__data__;return ti?e[i]!==void 0:hf.call(e,i)},mf=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=ti&&e===void 0?"__lodash_hash_undefined__":e,this};function Do(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Do.prototype.clear=cf,Do.prototype.delete=lf,Do.prototype.get=uf,Do.prototype.has=gf,Do.prototype.set=mf;const qa=Do,pf=function(){this.size=0,this.__data__={hash:new qa,map:new(ei||Ii),string:new qa}},ff=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Ti=function(i,e){var t=i.__data__;return ff(e)?t[typeof e=="string"?"string":"hash"]:t.map},kf=function(i){var e=Ti(this,i).delete(i);return this.size-=e?1:0,e},bf=function(i){return Ti(this,i).get(i)},wf=function(i){return Ti(this,i).has(i)},vf=function(i,e){var t=Ti(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Eo(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Eo.prototype.clear=pf,Eo.prototype.delete=kf,Eo.prototype.get=bf,Eo.prototype.has=wf,Eo.prototype.set=vf;const Ni=Eo,_f=function(i,e){var t=this.__data__;if(t instanceof Ii){var n=t.__data__;if(!ei||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Ni(n)}return t.set(i,e),this.size=t.size,this};function Mo(i){var e=this.__data__=new Ii(i);this.size=e.size}Mo.prototype.clear=qp,Mo.prototype.delete=Gp,Mo.prototype.get=Kp,Mo.prototype.has=Qp,Mo.prototype.set=_f;const ni=Mo,Af=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Pi=function(){try{var i=no(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Er=function(i,e,t){e=="__proto__"&&Pi?Pi(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var Cf=Object.prototype.hasOwnProperty;const Mr=function(i,e,t){var n=i[e];Cf.call(i,e)&&Vt(n,t)&&(t!==void 0||e in i)||Er(i,e,t)},So=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=n?n(t[a],i[a],a,t,i):void 0;c===void 0&&(c=i[a]),o?Er(t,a,c):Mr(t,a,c)}return t},yf=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},Ga=function(i){return pe(i)&&bt(i)=="[object Arguments]"};var Ka=Object.prototype,xf=Ka.hasOwnProperty,Df=Ka.propertyIsEnumerable;const Sr=Ga(function(){return arguments}())?Ga:function(i){return pe(i)&&xf.call(i,"callee")&&!Df.call(i,"callee")},Ut=Array.isArray,Ef=function(){return!1};var Qa=I&&!I.nodeType&&I,Za=Qa&&!0&&T&&!T.nodeType&&T,Ja=Za&&Za.exports===Qa?rt.Buffer:void 0;const oi=(Ja?Ja.isBuffer:void 0)||Ef;var Mf=/^(?:0|[1-9]\d*)$/;const Ir=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Mf.test(i))&&i>-1&&i%1==0&&i<e},Xa=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var ct={};ct["[object Float32Array]"]=ct["[object Float64Array]"]=ct["[object Int8Array]"]=ct["[object Int16Array]"]=ct["[object Int32Array]"]=ct["[object Uint8Array]"]=ct["[object Uint8ClampedArray]"]=ct["[object Uint16Array]"]=ct["[object Uint32Array]"]=!0,ct["[object Arguments]"]=ct["[object Array]"]=ct["[object ArrayBuffer]"]=ct["[object Boolean]"]=ct["[object DataView]"]=ct["[object Date]"]=ct["[object Error]"]=ct["[object Function]"]=ct["[object Map]"]=ct["[object Number]"]=ct["[object Object]"]=ct["[object RegExp]"]=ct["[object Set]"]=ct["[object String]"]=ct["[object WeakMap]"]=!1;const Sf=function(i){return pe(i)&&Xa(i.length)&&!!ct[bt(i)]},Tr=function(i){return function(e){return i(e)}};var ec=I&&!I.nodeType&&I,ii=ec&&!0&&T&&!T.nodeType&&T,Nr=ii&&ii.exports===ec&&gt.process;const Io=function(){try{var i=ii&&ii.require&&ii.require("util").types;return i||Nr&&Nr.binding&&Nr.binding("util")}catch{}}();var tc=Io&&Io.isTypedArray;const Pr=tc?Tr(tc):Sf;var If=Object.prototype.hasOwnProperty;const nc=function(i,e){var t=Ut(i),n=!t&&Sr(i),o=!t&&!n&&oi(i),r=!t&&!n&&!o&&Pr(i),s=t||n||o||r,a=s?yf(i.length,String):[],c=a.length;for(var l in i)!e&&!If.call(i,l)||s&&(l=="length"||o&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ir(l,c))||a.push(l);return a};var Tf=Object.prototype;const Br=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Tf)},Nf=rn(Object.keys,Object);var Pf=Object.prototype.hasOwnProperty;const Bf=function(i){if(!Br(i))return Nf(i);var e=[];for(var t in Object(i))Pf.call(i,t)&&t!="constructor"&&e.push(t);return e},Bi=function(i){return i!=null&&Xa(i.length)&&!eo(i)},zr=function(i){return Bi(i)?nc(i):Bf(i)},zf=function(i,e){return i&&So(e,zr(e),i)},Lf=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Of=Object.prototype.hasOwnProperty;const Rf=function(i){if(!$(i))return Lf(i);var e=Br(i),t=[];for(var n in i)(n!="constructor"||!e&&Of.call(i,n))&&t.push(n);return t},To=function(i){return Bi(i)?nc(i,!0):Rf(i)},jf=function(i,e){return i&&So(e,To(e),i)};var oc=I&&!I.nodeType&&I,ic=oc&&!0&&T&&!T.nodeType&&T,rc=ic&&ic.exports===oc?rt.Buffer:void 0,sc=rc?rc.allocUnsafe:void 0;const ac=function(i,e){if(e)return i.slice();var t=i.length,n=sc?sc(t):new i.constructor(t);return i.copy(n),n},cc=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},Ff=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var s=i[t];e(s,t,i)&&(r[o++]=s)}return r},lc=function(){return[]};var Vf=Object.prototype.propertyIsEnumerable,dc=Object.getOwnPropertySymbols;const Lr=dc?function(i){return i==null?[]:(i=Object(i),Ff(dc(i),function(e){return Vf.call(i,e)}))}:lc,Uf=function(i,e){return So(i,Lr(i),e)},uc=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},hc=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)uc(e,Lr(i)),i=V(i);return e}:lc,Hf=function(i,e){return So(i,hc(i),e)},gc=function(i,e,t){var n=e(i);return Ut(i)?n:uc(n,t(i))},Or=function(i){return gc(i,zr,Lr)},$f=function(i){return gc(i,To,hc)},Rr=no(rt,"DataView"),jr=no(rt,"Promise"),Fr=no(rt,"Set"),Vr=no(rt,"WeakMap");var mc="[object Map]",pc="[object Promise]",fc="[object Set]",kc="[object WeakMap]",bc="[object DataView]",Wf=to(Rr),Yf=to(ei),qf=to(jr),Gf=to(Fr),Kf=to(Vr),oo=bt;(Rr&&oo(new Rr(new ArrayBuffer(1)))!=bc||ei&&oo(new ei)!=mc||jr&&oo(jr.resolve())!=pc||Fr&&oo(new Fr)!=fc||Vr&&oo(new Vr)!=kc)&&(oo=function(i){var e=bt(i),t=e=="[object Object]"?i.constructor:void 0,n=t?to(t):"";if(n)switch(n){case Wf:return bc;case Yf:return mc;case qf:return pc;case Gf:return fc;case Kf:return kc}return e});const ri=oo;var Qf=Object.prototype.hasOwnProperty;const Zf=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Qf.call(i,"index")&&(t.index=i.index,t.input=i.input),t},zi=rt.Uint8Array,Ur=function(i){var e=new i.constructor(i.byteLength);return new zi(e).set(new zi(i)),e},Jf=function(i,e){var t=e?Ur(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var Xf=/\w*$/;const ek=function(i){var e=new i.constructor(i.source,Xf.exec(i));return e.lastIndex=i.lastIndex,e};var wc=Te?Te.prototype:void 0,vc=wc?wc.valueOf:void 0;const tk=function(i){return vc?Object(vc.call(i)):{}},_c=function(i,e){var t=e?Ur(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},nk=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return Ur(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Jf(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return _c(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return ek(i);case"[object Symbol]":return tk(i)}};var Ac=Object.create;const ok=function(){function i(){}return function(e){if(!$(e))return{};if(Ac)return Ac(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),Cc=function(i){return typeof i.constructor!="function"||Br(i)?{}:ok(V(i))},ik=function(i){return pe(i)&&ri(i)=="[object Map]"};var yc=Io&&Io.isMap;const rk=yc?Tr(yc):ik,sk=function(i){return pe(i)&&ri(i)=="[object Set]"};var xc=Io&&Io.isSet;const ak=xc?Tr(xc):sk;var Dc="[object Arguments]",Ec="[object Function]",ck="[object Object]",st={};st[Dc]=st["[object Array]"]=st["[object ArrayBuffer]"]=st["[object DataView]"]=st["[object Boolean]"]=st["[object Date]"]=st["[object Float32Array]"]=st["[object Float64Array]"]=st["[object Int8Array]"]=st["[object Int16Array]"]=st["[object Int32Array]"]=st["[object Map]"]=st["[object Number]"]=st["[object Object]"]=st["[object RegExp]"]=st["[object Set]"]=st["[object String]"]=st["[object Symbol]"]=st["[object Uint8Array]"]=st["[object Uint8ClampedArray]"]=st["[object Uint16Array]"]=st["[object Uint32Array]"]=!0,st["[object Error]"]=st[Ec]=st["[object WeakMap]"]=!1;const Hr=function i(e,t,n,o,r,s){var a,c=1&t,l=2&t,d=4&t;if(n&&(a=r?n(e,o,r,s):n(e)),a!==void 0)return a;if(!$(e))return e;var u=Ut(e);if(u){if(a=Zf(e),!c)return cc(e,a)}else{var h=ri(e),p=h==Ec||h=="[object GeneratorFunction]";if(oi(e))return ac(e,c);if(h==ck||h==Dc||p&&!r){if(a=l||p?{}:Cc(e),!c)return l?Hf(e,jf(a,e)):Uf(e,zf(a,e))}else{if(!st[h])return r?e:{};a=nk(e,h,c)}}s||(s=new ni);var f=s.get(e);if(f)return f;s.set(e,a),ak(e)?e.forEach(function(v){a.add(i(v,t,n,v,e,s))}):rk(e)&&e.forEach(function(v,M){a.set(M,i(v,t,n,M,e,s))});var b=u?void 0:(d?l?$f:Or:l?To:zr)(e);return Af(b||e,function(v,M){b&&(v=e[M=v]),Mr(a,M,i(v,t,n,M,e,s))}),a},Mc=function(i,e){return Hr(i,5,e=typeof e=="function"?e:void 0)},zn=function(i){return pe(i)&&i.nodeType===1&&!le(i)};class Sc{constructor(e,t){this._config={},t&&this.define(Ic(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(le(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const s of r)le(e[s])||(e[s]={}),e=e[s];if(le(n))return le(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!le(e[o])){e=null;break}e=e[o]}return e?Ic(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Ic(i){return Mc(i,lk)}function lk(i){return zn(i)?i:void 0}function Zt(i){return!(!i||!i[Symbol.iterator])}class bn extends K{constructor(e={},t={}){super();const n=Zt(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new g("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),s=t+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new g("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new g("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,s)=>{const a=t._bindToCollection==this,c=t._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=e(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const u of this._skippedIndexesFromExternal)s>u&&d--;for(const u of t._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let u=0;u<t._skippedIndexesFromExternal.length;u++)d<=t._skippedIndexesFromExternal[u]&&t._skippedIndexesFromExternal[u]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new g("collection-add-invalid-id",this);if(this.get(n))throw new g("collection-add-item-already-exists",this)}else e[t]=n=y();return n}_remove(e){let t,n,o,r=!1;const s=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[s])):(o=e,n=o[s],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new g("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}class $r{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new g("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function f(b,v=new Set){b.forEach(M=>{c(M)&&(v.has(M)||(v.add(M),M.pluginName&&!o._availablePlugins.has(M.pluginName)&&o._availablePlugins.set(M.pluginName,M),M.requires&&f(M.requires,v)))})})(e),h(e);const s=[...function f(b,v=new Set){return b.map(M=>c(M)?M:o._availablePlugins.get(M)).reduce((M,O)=>v.has(O)?M:(v.add(O),O.requires&&(h(O.requires,O),f(O.requires,v).forEach(Y=>M.add(Y))),M.add(O)),new Set)}(e.filter(f=>!d(f,t)))];(function(f,b){for(const v of b){if(typeof v!="function")throw new g("plugincollection-replace-plugin-invalid-type",null,{pluginItem:v});const M=v.pluginName;if(!M)throw new g("plugincollection-replace-plugin-missing-name",null,{pluginItem:v});if(v.requires&&v.requires.length)throw new g("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:M});const O=o._availablePlugins.get(M);if(!O)throw new g("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:M});const Y=f.indexOf(O);if(Y===-1){if(o._contextPlugins.has(O))return;throw new g("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:M})}if(O.requires&&O.requires.length)throw new g("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:M});f.splice(Y,1,v),o._availablePlugins.set(M,v)}})(s,n);const a=function(f){return f.map(b=>{const v=o._contextPlugins.get(b)||new b(r);return o._add(b,v),v})}(s);return p(a,"init").then(()=>p(a,"afterInit")).then(()=>a);function c(f){return typeof f=="function"}function l(f){return c(f)&&f.isContextPlugin}function d(f,b){return b.some(v=>v===f||u(f)===v||u(v)===f)}function u(f){return c(f)?f.pluginName||f.name:f}function h(f,b=null){f.map(v=>c(v)?v:o._availablePlugins.get(v)||v).forEach(v=>{(function(M,O){if(!c(M))throw O?new g("plugincollection-soft-required",r,{missingPlugin:M,requiredBy:u(O)}):new g("plugincollection-plugin-not-found",r,{plugin:M})})(v,b),function(M,O){if(!!l(O)&&!l(M))throw new g("plugincollection-context-required",r,{plugin:u(M),requiredBy:u(O)})}(v,b),function(M,O){if(!!O&&!!d(M,t))throw new g("plugincollection-required",r,{plugin:u(M),requiredBy:u(O)})}(v,b)})}function p(f,b){return f.reduce((v,M)=>M[b]?o._contextPlugins.has(M)?v:v.then(M[b].bind(M)):v,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new g("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function St(i){return Array.isArray(i)?i:[i]}let Wr;ke($r,me);try{Wr={window,document}}catch{Wr={window:{},document:{}}}const Ve=Wr;function dk(i,e,t=1){if(typeof t!="number")throw new g("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Ve.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(Ve.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(c,l){return!!Ve.window.CKEDITOR_TRANSLATIONS[c]&&!!Ve.window.CKEDITOR_TRANSLATIONS[c].dictionary[l]}(i,o))return t!==1?e.plural:e.string;const r=Ve.window.CKEDITOR_TRANSLATIONS[i].dictionary,s=Ve.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(c=>c===1?0:1),a=r[o];return typeof a=="string"?a:a[Number(s(t))]}Ve.window.CKEDITOR_TRANSLATIONS||(Ve.window.CKEDITOR_TRANSLATIONS={});const uk=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Tc(i){return uk.includes(i)?"rtl":"ltr"}class hk{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Tc(this.uiLanguage),this.contentLanguageDirection=Tc(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=St(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(dk(this.uiLanguage,e,n),t)}}class gk{constructor(e){this.config=new Sc(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new $r(this,t);const n=this.config.get("language")||{};this.locale=new hk({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new bn,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new g("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new g("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new g("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class si{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}ke(si,G);class io{is(){throw new Error("is() method is abstract")}}function Ot(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}const Nc=function(i){return Hr(i,4)};class ro extends me(io){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new g("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Ot(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Nc(this);return delete e.parent,e}}ro.prototype.is=function(i){return i==="node"||i==="view:node"};class Xe extends ro{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Xe&&(this===e||this.data===e.data)}_clone(){return new Xe(this.document,this.data)}}Xe.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class xn extends io{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new g("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new g("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function Dn(i){return Zt(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}xn.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class En{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=Pc(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=Pc(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Pc(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return le(n)?(n.style!==void 0&&w("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&w("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Yr(n,r,s=>o.getAttribute(s))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return Yr(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return Yr(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles)?null:t}function Yr(i,e,t){const n=function(s){return Array.isArray(s)?s.map(a=>le(a)?(a.key!==void 0&&a.value!==void 0||w("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):le(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(e),r=[];if(n.forEach(([s,a])=>{o.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,u){if(l===!0)return!0;const h=u(d);return l===h||l instanceof RegExp&&!!String(h).match(l)}(a,c,t)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const Li=function(i){return typeof i=="symbol"||pe(i)&&bt(i)=="[object Symbol]"};var mk=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pk=/^\w*$/;const fk=function(i,e){if(Ut(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Li(i))||pk.test(i)||!mk.test(i)||e!=null&&i in Object(e)};function qr(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return t.cache=r.set(o,s)||r,s};return t.cache=new(qr.Cache||Ni),t}qr.Cache=Ni;const kk=qr;var bk=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wk=/\\(\\)?/g,vk=function(i){var e=kk(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(bk,function(t,n,o,r){e.push(o?r.replace(wk,"$1"):n||t)}),e});const _k=vk,Ak=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var Bc=Te?Te.prototype:void 0,zc=Bc?Bc.toString:void 0;const Ck=function i(e){if(typeof e=="string")return e;if(Ut(e))return Ak(e,i)+"";if(Li(e))return zc?zc.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Gr=function(i){return i==null?"":Ck(i)},Kr=function(i,e){return Ut(i)?i:fk(i,e)?[i]:_k(Gr(i))},yk=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Qr=function(i){if(typeof i=="string"||Li(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},Lc=function(i,e){for(var t=0,n=(e=Kr(e,i)).length;i!=null&&t<n;)i=i[Qr(e[t++])];return t&&t==n?i:void 0},Oc=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},xk=function(i,e){return e.length<2?i:Lc(i,Oc(e,0,-1))},Dk=function(i,e){return e=Kr(e,i),(i=xk(i,e))==null||delete i[Qr(yk(e))]},Ek=function(i,e){return i==null||Dk(i,e)},Oi=function(i,e,t){var n=i==null?void 0:Lc(i,e);return n===void 0?t:n},Zr=function(i,e,t){(t!==void 0&&!Vt(i[e],t)||t===void 0&&!(e in i))&&Er(i,e,t)},Mk=function(i){return function(e,t,n){for(var o=-1,r=Object(e),s=n(e),a=s.length;a--;){var c=s[i?a:++o];if(t(r[c],c,r)===!1)break}return e}}(),Sk=function(i){return pe(i)&&Bi(i)},Jr=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},Ik=function(i){return So(i,To(i))},Tk=function(i,e,t,n,o,r,s){var a=Jr(i,t),c=Jr(e,t),l=s.get(c);if(l)Zr(i,t,l);else{var d=r?r(a,c,t+"",i,e,s):void 0,u=d===void 0;if(u){var h=Ut(c),p=!h&&oi(c),f=!h&&!p&&Pr(c);d=c,h||p||f?Ut(a)?d=a:Sk(a)?d=cc(a):p?(u=!1,d=ac(c,!0)):f?(u=!1,d=_c(c,!0)):d=[]:le(c)||Sr(c)?(d=a,Sr(a)?d=Ik(a):$(a)&&!eo(a)||(d=Cc(c))):u=!1}u&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),Zr(i,t,d)}},Nk=function i(e,t,n,o,r){e!==t&&Mk(t,function(s,a){if(r||(r=new ni),$(s))Tk(e,t,a,n,i,o,r);else{var c=o?o(Jr(e,a),s,a+"",e,t,r):void 0;c===void 0&&(c=s),Zr(e,a,c)}},To)},so=function(i){return i},Pk=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Rc=Math.max;const Bk=function(i,e,t){return e=Rc(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=Rc(n.length-e,0),s=Array(r);++o<r;)s[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=t(s),Pk(i,this,a)}},zk=function(i){return function(){return i}},Lk=Pi?function(i,e){return Pi(i,"toString",{configurable:!0,enumerable:!1,value:zk(e),writable:!0})}:so;var Ok=Date.now;const Rk=function(i){var e=0,t=0;return function(){var n=Ok(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(Lk),jk=function(i,e){return Rk(Bk(i,e,so),i+"")},Fk=function(i,e,t){if(!$(t))return!1;var n=typeof e;return!!(n=="number"?Bi(t)&&Ir(e,t.length):n=="string"&&e in t)&&Vt(t[e],i)},jc=function(i){return jk(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,s=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&Fk(t[0],t[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var a=t[n];a&&i(e,a,n,r)}return e})},Fc=jc(function(i,e,t){Nk(i,e,t)}),Vk=function(i,e,t,n){if(!$(i))return i;for(var o=-1,r=(e=Kr(e,i)).length,s=r-1,a=i;a!=null&&++o<r;){var c=Qr(e[o]),l=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(o!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=$(d)?d:Ir(e[o+1])?[]:{})}Mr(a,c,l),a=a[c]}return i},Uk=function(i,e,t){return i==null?i:Vk(i,e,t)};class Hk{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(o===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":o=d;break;case";":{const u=n.substr(s,l-s);a&&c.set(a.trim(),u.trim()),a=null,r=l+1;break}}else d===o&&(o=null)}return c}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if($(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Xr(e);Ek(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!$(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=Oi(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class $k{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if($(t))es(n,Xr(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:s}=o(t);es(n,r,s)}else es(n,e,t)}getNormalized(e,t){if(!e)return Fc({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Oi(t,n);const o=n(e,t);if(o)return o}return Oi(t,Xr(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Xr(i){return i.replace("-",".")}function es(i,e,t){let n=t;$(t)&&(n=Fc({},Oi(i,e),t)),Uk(i,e,n)}class Jt extends ro{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(r){const s=Dn(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Vc(this._classes,r),this._attrs.delete("class")}this._styles=new Hk(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Jt))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new En(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Xe(r,s)]:(Zt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Xe(r,a):a instanceof xn?new Xe(r,a.data):a))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Vc(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of St(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of St(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),le(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of St(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Vc(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}Jt.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ai extends Jt{constructor(...e){super(...e),this.getFillerOffset=Uc}}function Uc(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}ai.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Ri extends G(ai){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Ri.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Hc=Symbol("rootName");class $c extends Ri{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Hc)}set rootName(e){this._setCustomProperty(Hc,e)}set _name(e){this.name=e}}$c.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ao{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new g("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new g("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=he._createAt(e.startPosition):this.position=he._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Xe){if(e.isAtEnd)return this.position=he._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof Jt)return this.shallow?e.offset++:e=new he(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Xe){if(this.singleCharacters)return e=new he(o,0),this.position=e,this._next();{let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new xn(o,0,s),e=he._createAfter(r)):(r=new xn(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const s=new xn(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=he._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Xe){if(e.isAtStart)return this.position=he._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof Jt)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new he(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Xe){if(this.singleCharacters)return e=new he(o,o.data.length),this.position=e,this._previous();{let r,s=o.data.length;if(o==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new xn(o,a,o.data.length-a),s=r.data.length,e=he._createBefore(r)}else r=new xn(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-a}e.offset-=r;const s=new xn(n,e.offset,r);return this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=he._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof xn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=he._createAfter(t.textNode):(o=he._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=he._createBefore(t.textNode):(o=he._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class he extends io{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ri);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=he._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ao(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=Ot(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ao(e)}clone(){return new he(this.parent,this.offset)}static _createAt(e,t){if(e instanceof he)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new g("view-createpositionat-offset-required",n)}return new he(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new g("view-position-after-root",e,{root:e});return new he(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText);if(!e.parent)throw new g("view-position-before-root",e,{root:e});return new he(e.parent,e.index)}}he.prototype.is=function(i){return i==="position"||i==="view:position"};class ze extends io{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ao({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ji,{direction:"backward"}),t=this.end.getLastMatchingPosition(ji);return e.parent.is("$text")&&e.isAtStart&&(e=he._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=he._createAfter(t.parent)),new ze(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ji);if(e.isAfter(this.end)||e.isEqual(this.end))return new ze(e,e);let t=this.end.getLastMatchingPosition(ji,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new he(n,0)),o&&o.is("$text")&&(t=new he(o,o.data.length)),new ze(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ze(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ze(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ze(t,n)}return null}getWalker(e={}){return e.boundaries=this,new ao(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ze(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ao(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ao(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new he(e,t),new he(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(he._createBefore(e),t)}}function ji(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function ts(i){let e=0;for(const t of i)e++;return e}ze.prototype.is=function(i){return i==="range"||i==="view:range"};class wn extends me(io){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=ts(this.getRanges());if(t!=ts(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof wn||t instanceof ns)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ze)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof he)this._setRanges([new ze(t)]),this._setFakeOptions(o);else if(t instanceof ro){const r=!!o&&!!o.backward;let s;if(n===void 0)throw new g("view-selection-setto-required-second-parameter",this);s=n=="in"?ze._createIn(t):n=="on"?ze._createOn(t):new ze(he._createAt(t,n)),this._setRanges([s],r),this._setFakeOptions(o)}else{if(!Zt(t))throw new g("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new g("view-selection-setfocus-no-ranges",this);const n=he._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new ze(n,o),!0):this._addRange(new ze(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ze))throw new g("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new g("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ze(e.start,e.end))}}wn.prototype.is=function(i){return i==="selection"||i==="view:selection"};class ns extends me(io){constructor(...e){super(),this._selection=new wn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}ns.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class ci extends C{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const os=Symbol("bubbling contexts");function is(i){return class extends i{fire(e,...t){try{const n=e instanceof C?e:new C(this,e),o=rs(this);if(!o.size)return;if(li(n,"capturing",this),No(o,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&Boolean(Wc(o,s));let c=s||function(l){if(!l)return null;const d=l.start.parent,u=l.end.parent,h=d.getPath(),p=u.getPath();return h.length>p.length?d:u}(r);if(li(n,"atTarget",c),!a){if(No(o,"$text",n,...t))return n.return;li(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(No(o,"$root",n,...t))return n.return}else if(c.is("element")&&No(o,c.name,n,...t))return n.return;if(No(o,c,n,...t))return n.return;c=c.parent,li(n,"bubbling",c)}return li(n,"bubbling",this),No(o,"$document",n,...t),n.return}catch(n){g.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=St(n.context||"$document"),r=rs(this);for(const s of o){let a=r.get(s);a||(a=new K,r.set(s,a)),this.listenTo(a,e,t,n)}}_removeEventListener(e,t){const n=rs(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=is(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{is[e]=i.prototype[e]})}function li(i,e,t){i instanceof ci&&(i._eventPhase=e,i._currentTarget=t)}function No(i,e,t,...n){const o=typeof e=="string"?i.get(e):Wc(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Wc(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function rs(i){return i[os]||(i[os]=new Map),i[os]}class ss extends is(L){constructor(e){super(),this.selection=new ns,this.roots=new bn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class co extends Jt{constructor(...e){super(...e),this.getFillerOffset=Wk,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new g("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Wk(){if(as(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(as(i)>1)return null;i=i.parent}return!i||as(i)>1?null:this.childCount}function as(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}co.DEFAULT_PRIORITY=10,co.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class cs extends Jt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=Yk}_insertChild(e,t){if(t&&(t instanceof ro||Array.from(t).length>0))throw new g("view-emptyelement-cannot-add",[this,t]);return 0}}function Yk(){return null}cs.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const lo=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),qk={isMac:Yc(lo),isWindows:function(i){return i.indexOf("windows")>-1}(lo),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(lo),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(lo),isiOS:function(i){return!!i.match(/iphone|ipad/i)||Yc(i)&&navigator.maxTouchPoints>0}(lo),isAndroid:function(i){return i.indexOf("android")>-1}(lo),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(lo),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},Ke=qk;function Yc(i){return i.indexOf("macintosh")>-1}const Gk={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Kk={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Fe=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);i[t.toLowerCase()]=e}for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Qk=Object.fromEntries(Object.entries(Fe).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function Mn(i){let e;if(typeof i=="string"){if(e=Fe[i.toLowerCase()],!e)throw new g("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Fe.alt:0)+(i.ctrlKey?Fe.ctrl:0)+(i.shiftKey?Fe.shift:0)+(i.metaKey?Fe.cmd:0);return e}function ls(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Mn(t.slice(0,-1));const n=Mn(t);return Ke.isMac&&n==Fe.ctrl?Fe.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function qc(i){let e=ls(i);return Object.entries(Ke.isMac?Gk:Kk).reduce((t,[n,o])=>((e&Fe[n])!=0&&(e&=~Fe[n],t+=o),t),"")+(e?Qk[e]:"")}function ds(i,e){const t=e==="ltr";switch(i){case Fe.arrowleft:return t?"left":"right";case Fe.arrowright:return t?"right":"left";case Fe.arrowup:return"up";case Fe.arrowdown:return"down"}}class Fi extends Jt{constructor(...e){super(...e),this.getFillerOffset=Jk}_insertChild(e,t){if(t&&(t instanceof ro||Array.from(t).length>0))throw new g("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function Zk(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==Fe.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let u=!1;const h=d.getLastMatchingPosition(p=>(p.item.is("uiElement")&&(u=!0),!(!p.item.is("uiElement")&&!p.item.is("attributeElement"))));if(u){const p=r.viewPositionToDom(h);a?s.collapse(p.parent,p.offset):s.extend(p.parent,p.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function Jk(){return null}Fi.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class us extends Jt{constructor(...e){super(...e),this.getFillerOffset=Xk}_insertChild(e,t){if(t&&(t instanceof ro||Array.from(t).length>0))throw new g("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function Xk(){return null}us.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class uo extends me(io){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Xe(r,s)]:(Zt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Xe(r,a):a instanceof xn?new Xe(r,a.data):a))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}uo.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Gc{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new uo(this.document,e)}createText(e){return new Xe(this.document,e)}createAttributeElement(e,t,n={}){const o=new co(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;le(n)?o=n:r=n;const s=new ai(this.document,e,t,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(e,t,n={}){const o=new Ri(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new cs(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Fi(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new us(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){le(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof he?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new g("view-writer-break-non-container-element",this.document);if(!t.parent)throw new g("view-writer-break-root",this.document);if(e.isAtStart)return he._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(he._createAfter(t),n);const o=new ze(e,he._createAt(t,"end")),r=new he(n,0);this.move(o,r)}return he._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new he(s,a))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return Qc(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new he(o,s))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new g("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof Xe?he._createAt(o,"end"):he._createAt(t,"end");return this.move(ze._createIn(n),he._createAt(t,"end")),this.remove(ze._createOn(n)),r}insert(e,t){Zc(t=Zt(t)?[...t]:[t],this.document);const n=t.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let o=null,r=e;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);o||(o=c.start),r=c.end}return o?new ze(o,r):new ze(e)}remove(e){const t=e instanceof ze?e:ze._createOn(e);if(di(t,this.document),t.isCollapsed)return new uo(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return t.start=c,t.end=c.clone(),new uo(this.document,a)}clear(e,t){di(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&t.isSimilar(r))s=ze._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&t.isSimilar(c));a&&(s=ze._createIn(a))}s&&(s.end.isAfter(e.end)&&(s.end=e.end),s.start.isBefore(e.start)&&(s.start=e.start),this.remove(s))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof co))throw new g("view-writer-wrap-invalid-attribute",this.document);if(di(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new ze(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof co))throw new g("view-writer-unwrap-invalid-attribute",this.document);if(di(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ze(a,c)}rename(e,t){const n=new ai(this.document,e,t.getAttributes());return this.insert(he._createAfter(t),n),this.move(ze._createIn(t),he._createAt(n,0)),this.remove(ze._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return he._createAt(e,t)}createPositionAfter(e){return he._createAfter(e)}createPositionBefore(e){return he._createBefore(e)}createRange(...e){return new ze(...e)}createRangeOn(e){return ze._createOn(e)}createRangeIn(e){return ze._createIn(e)}createSelection(...e){return new wn(...e)}createSlot(e){if(!this._slotFactory)throw new g("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?hs(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new g("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?gs(e):e;const s=o._insertChild(r.offset,t);for(const d of t)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new ze(c,l)}_wrapChildren(e,t,n,o){let r=t;const s=[];for(;r<n;){const c=e.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(o,c))s.push(new he(e,r));else if(l||!d||eb(o,c)){const u=o._clone();c._remove(),u._appendChild(c),e._insertChild(r,u),this._addToClonedElementsGroup(u),s.push(new he(e,r))}else this._wrapChildren(c,0,c.childCount,o);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=t&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return ze._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const s=[];for(;r<n;){const c=e.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(o)){const l=c.getChildren(),d=c.childCount;c._remove(),e._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new he(e,r),new he(e,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(o,c)?(s.push(new he(e,r),new he(e,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,o),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==t||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return ze._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ze(a,c)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Kc(e.clone());e.parent.is("$text")&&(e=gs(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new ze(e,e.getShiftedBy(1));this.wrap(o,t);const r=new he(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Xe&&a instanceof Xe?Qc(s,a):Kc(r)}_wrapAttributeElement(e,t){if(!Jc(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Jc(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(di(e,this.document),e.isCollapsed){const c=this._breakAttributes(e.start,t);return new ze(c,c)}const r=this._breakAttributes(o,t),s=r.parent.childCount,a=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-s,new ze(a,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new g("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new g("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new g("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&ms(o.parent)||ms(o))return e.clone();if(o.is("$text"))return this._breakAttributes(gs(e),t);if(n==o.childCount){const r=new he(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new he(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=o.childCount-n,c=o._removeChildren(n,a);s._appendChild(c);const l=new he(o.parent,r);return this._breakAttributes(l,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function hs(i){let e=i.parent;for(;!ms(e);){if(!e)return;e=e.parent}return e}function eb(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function Kc(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new he(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new he(t,0):i}function gs(i){if(i.offset==i.parent.data.length)return new he(i.parent.parent,i.parent.index+1);if(i.offset===0)return new he(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Xe(i.root.document,e)),new he(i.parent.parent,i.parent.index+1)}function Qc(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new he(i,t)}const tb=[Xe,co,ai,cs,us,Fi];function Zc(i,e){for(const t of i){if(!tb.some(n=>t instanceof n))throw new g("view-writer-insert-invalid-node-type",e);t.is("$text")||Zc(t.getChildren(),e)}}function ms(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function di(i,e){const t=hs(i.start),n=hs(i.end);if(!t||!n||t!==n)throw new g("view-writer-invalid-range-container",e)}function Jc(i,e){return i.id===null&&e.id===null}function Bt(i){return Object.prototype.toString.call(i)=="[object Text]"}const Xc=i=>i.createTextNode("\xA0"),el=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},tl=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Vi="\u2060".repeat(7);function Xt(i){return Bt(i)&&i.data.substr(0,7)===Vi}function Ui(i){return i.data.length==7&&Xt(i)}function ps(i){return Xt(i)?i.data.slice(7):i.data}function nb(i,e){if(e.keyCode==Fe.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Xt(n)&&o<=7&&t.collapse(n,0)}}}function nl(i,e,t,n=!1){t=t||function(a,c){return a===c};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),s=function(a,c,l){const d=ol(a,c,l);if(d===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const u=il(a,d),h=il(c,d),p=ol(u,h,l),f=a.length-p,b=c.length-p;return{firstIndex:d,lastIndexOld:f,lastIndexNew:b}}(o,r,t);return n?function(a,c){const{firstIndex:l,lastIndexOld:d,lastIndexNew:u}=a;if(l===-1)return Array(c).fill("equal");let h=[];return l>0&&(h=h.concat(Array(l).fill("equal"))),u-l>0&&(h=h.concat(Array(u-l).fill("insert"))),d-l>0&&(h=h.concat(Array(d-l).fill("delete"))),u<c&&(h=h.concat(Array(c-u).fill("equal"))),h}(s,r.length):function(a,c){const l=[],{firstIndex:d,lastIndexOld:u,lastIndexNew:h}=c;return h-d>0&&l.push({index:d,type:"insert",values:a.slice(d,h)}),u-d>0&&l.push({index:d+(h-d),type:"delete",howMany:u-d}),l}(r,s)}function ol(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function il(i,e){return i.slice(e).reverse()}function Wn(i,e,t){t=t||function(b,v){return b===v};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return Wn.fastDiff(i,e,t,!0);let r,s;if(o<n){const b=i;i=e,e=b,r="delete",s="insert"}else r="insert",s="delete";const a=i.length,c=e.length,l=c-a,d={},u={};function h(b){const v=(u[b-1]!==void 0?u[b-1]:-1)+1,M=u[b+1]!==void 0?u[b+1]:-1,O=v>M?-1:1;d[b+O]&&(d[b]=d[b+O].slice(0)),d[b]||(d[b]=[]),d[b].push(v>M?r:s);let Y=Math.max(v,M),we=Y-b;for(;we<a&&Y<c&&t(i[we],e[Y]);)we++,Y++,d[b].push("equal");return Y}let p,f=0;do{for(p=-f;p<l;p++)u[p]=h(p);for(p=l+f;p>l;p--)u[p]=h(p);u[l]=h(l),f++}while(u[l]!==c);return d[l].slice(1)}function rl(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function sl(i){const e=i.parentNode;e&&e.removeChild(i)}function Po(i){return i&&i.nodeType===Node.COMMENT_NODE}function Bo(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}Wn.fastDiff=nl;var ob=E(6062),Le=E.n(ob),al=E(9315),ib={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(al.Z,ib),al.Z.locals;class rb extends L{constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),Ke.isBlink&&!Ke.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new g("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e=null;const t=!(Ke.isBlink&&!Ke.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=he._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Xt(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=cl(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),r=this._findReplaceActions(o,t,n);if(r.indexOf("replace")!==-1){const s={equal:0,insert:0,delete:0};for(const a of r)if(a==="replace"){const c=s.equal+s.insert,l=s.equal+s.delete,d=e.getChild(c);!d||d.is("uiElement")||d.is("rawElement")||this._updateElementMappings(d,t[l]),sl(n[c]),s.equal++}else s[a]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?he._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Bt(t.parent)&&Xt(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Xt(e))throw new g("view-renderer-filler-was-lost",this);Ui(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof Xe||r instanceof Xe)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),o=this.domConverter.viewToDom(e),r=n.data;let s=o.data;const a=t.inlineFillerPosition;if(a&&a.parent==e.parent&&a.offset==e.index&&(s=Vi+s),r!=s){const c=nl(r,s);for(const l of c)l.type==="insert"?n.insertData(l.index,l.values.join("")):n.deleteData(l.index,l.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const o=t.inlineFillerPosition,r=this.domConverter.mapViewToDom(e).childNodes,s=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&cl(n.ownerDocument,s,o.offset);const a=this._diffNodeLists(r,s);let c=0;const l=new Set;for(const d of a)d==="delete"?(l.add(r[c]),sl(r[c])):d==="equal"&&c++;c=0;for(const d of a)d==="insert"?(rl(n,c,s[c]),c++):d==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[c])),c++);for(const d of l)d.parentNode||this.domConverter.unbindDomElement(d)}_diffNodeLists(e,t){return Wn(e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),t,sb.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let o=[],r=[],s=[];const a={equal:0,insert:0,delete:0};for(const c of e)c==="insert"?s.push(n[a.equal+a.insert]):c==="delete"?r.push(t[a.equal+a.delete]):(o=o.concat(Wn(r,s,ll).map(l=>l==="equal"?"replace":l)),o.push("equal"),r=[],s=[]),a[c]++;return o.concat(Wn(r,s,ll).map(c=>c==="equal"?"replace":c))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(Ke.isBlink&&!Ke.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),Ke.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function cl(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(Bt(o))return o.data=Vi+o.data,o;{const r=i.createTextNode(Vi);return Array.isArray(e)?n.splice(t,0,r):rl(e,t,r),r}}function ll(i,e){return Bo(i)&&Bo(e)&&!Bt(i)&&!Bt(e)&&!Po(i)&&!Po(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function sb(i,e,t){return e===t||(Bt(e)&&Bt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function fs(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function dl(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const ab=tl(Ve.document),cb=Xc(Ve.document),lb=el(Ve.document),Hi="data-ck-unsafe-attribute-",ul="data-ck-unsafe-element";class $i{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ve.document:Ve.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new En,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new wn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const u of l.getAttributeNames())this.setDomElementAttribute(l,u,l.getAttribute(u));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(ml(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(ml(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||w("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Hi+t)&&r&&e.removeAttribute(Hi+t),e.setAttribute(r?t:Hi+t,n)}removeDomElementAttribute(e,t){t!=ul&&(e.removeAttribute(t),e.removeAttribute(Hi+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const s=r.is("element")&&r.getCustomProperty("dataPipeline:transparentRendering");s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(s&&w("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Xt(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const s=e.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!o)return null;n=o.parentNode,r=o.nextSibling}return Bt(r)&&Xt(r)?{parent:r,offset:7}:{parent:n,offset:o?fs(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(Po(e)&&t.skipComments)return null;if(Bt(e)){if(Ui(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Xe(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new uo(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let s=r.length,a=0;a<s;a++)o._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(o,t)||Po(e)){const s=Po(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;Bt(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new wn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new ze(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,fs(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return he._createBefore(n);if(Bt(e)){if(Ui(e))return this.domPositionToView(e.parentNode,fs(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(Xt(e)&&(r-=7,r=r<0?0:r),new he(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new he(o,0)}else{const o=e.childNodes[t-1],r=Bt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new he(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Ui(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof Xe?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof Xe?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Ve.window,r=[];hl(t,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),t.focus(),hl(t,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),Ve.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(ab):!(e.tagName!=="BR"||!gl(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(lb)||function(t,n){return t.isEqualNode(cb)&&gl(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=dl(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Xc(this._domDocument);case"markedNbsp":return el(this._domDocument);case"br":return tl(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Bt(e)&&Xt(e)&&t<7||this.isElement(e)&&Xt(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(l,d){return dl(l).some(u=>u.tagName&&d.includes(u.tagName.toLowerCase()))}(e,this.preElements))return ps(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),s=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),s&&(t=t.replace(/ $/,"")),t=ps(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const a=o&&this.isElement(o)&&o.tagName!="BR",c=o&&Bt(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||a||c)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Xt(e)}_getTouchingInlineViewNode(e,t){const n=new ao({startPosition:t?he._createAfter(e):he._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0,s=e;do if(!r&&s[n]?s=s[n]:s[o]?(s=s[o],r=!1):(s=s.parentNode,r=!0),!s||this._isBlockElement(s))return null;while(!Bt(s)&&s.tagName!="BR"&&!this._isInlineObjectElement(s));return s}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(Po(e))return new Fi(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Jt(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(ul,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function hl(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function gl(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function ml(i){i==="script"&&w("domconverter-unsafe-script-element-detected"),i==="style"&&w("domconverter-unsafe-style-element-detected")}function Wi(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}function ho(i){return class extends i{listenTo(e,t,n,o={}){if(Bo(e)||Wi(e)){const r={capture:!!o.useCapture,passive:!!o.usePassive},s=this._getProxyEmitter(e,r)||new db(e,r);this.listenTo(s,t,n,o)}else K.prototype.listenTo.call(this,e,t,n,o)}stopListening(e,t,n){if(Bo(e)||Wi(e)){const o=this._getAllProxyEmitters(e);for(const r of o)this.stopListening(r,t,n)}else K.prototype.stopListening.call(this,e,t,n)}_getProxyEmitter(e,t){return function(n,o){const r=n[F];return r&&r[o]?r[o].emitter:null}(this,fl(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}}const pl=ho(K);["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{ho[i]=pl.prototype[i]});class db extends K{constructor(e,t){super(),te(this,fl(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),K.prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){K.prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function fl(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=y())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}class Ln extends pl{constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const ub=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},hb=function(i){return this.__data__.has(i)};function Yi(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Ni;++e<t;)this.add(i[e])}Yi.prototype.add=Yi.prototype.push=ub,Yi.prototype.has=hb;const gb=Yi,mb=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},pb=function(i,e){return i.has(e)},kl=function(i,e,t,n,o,r){var s=1&t,a=i.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(i),d=r.get(e);if(l&&d)return l==e&&d==i;var u=-1,h=!0,p=2&t?new gb:void 0;for(r.set(i,e),r.set(e,i);++u<a;){var f=i[u],b=e[u];if(n)var v=s?n(b,f,u,e,i,r):n(f,b,u,i,e,r);if(v!==void 0){if(v)continue;h=!1;break}if(p){if(!mb(e,function(M,O){if(!pb(p,O)&&(f===M||o(f,M,t,n,r)))return p.push(O)})){h=!1;break}}else if(f!==b&&!o(f,b,t,n,r)){h=!1;break}}return r.delete(i),r.delete(e),h},fb=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},kb=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var bl=Te?Te.prototype:void 0,ks=bl?bl.valueOf:void 0;const bb=function(i,e,t,n,o,r,s){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!r(new zi(i),new zi(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Vt(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var a=fb;case"[object Set]":var c=1&n;if(a||(a=kb),i.size!=e.size&&!c)return!1;var l=s.get(i);if(l)return l==e;n|=2,s.set(i,e);var d=kl(a(i),a(e),n,o,r,s);return s.delete(i),d;case"[object Symbol]":if(ks)return ks.call(i)==ks.call(e)}return!1};var wb=Object.prototype.hasOwnProperty;const vb=function(i,e,t,n,o,r){var s=1&t,a=Or(i),c=a.length;if(c!=Or(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:wb.call(e,d)))return!1}var u=r.get(i),h=r.get(e);if(u&&h)return u==e&&h==i;var p=!0;r.set(i,e),r.set(e,i);for(var f=s;++l<c;){var b=i[d=a[l]],v=e[d];if(n)var M=s?n(v,b,d,e,i,r):n(b,v,d,i,e,r);if(!(M===void 0?b===v||o(b,v,t,n,r):M)){p=!1;break}f||(f=d=="constructor")}if(p&&!f){var O=i.constructor,Y=e.constructor;O==Y||!("constructor"in i)||!("constructor"in e)||typeof O=="function"&&O instanceof O&&typeof Y=="function"&&Y instanceof Y||(p=!1)}return r.delete(i),r.delete(e),p};var wl="[object Arguments]",vl="[object Array]",qi="[object Object]",_l=Object.prototype.hasOwnProperty;const _b=function(i,e,t,n,o,r){var s=Ut(i),a=Ut(e),c=s?vl:ri(i),l=a?vl:ri(e),d=(c=c==wl?qi:c)==qi,u=(l=l==wl?qi:l)==qi,h=c==l;if(h&&oi(i)){if(!oi(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new ni),s||Pr(i)?kl(i,e,t,n,o,r):bb(i,e,c,t,n,o,r);if(!(1&t)){var p=d&&_l.call(i,"__wrapped__"),f=u&&_l.call(e,"__wrapped__");if(p||f){var b=p?i.value():i,v=f?e.value():e;return r||(r=new ni),o(b,v,t,n,r)}}return!!h&&(r||(r=new ni),vb(i,e,t,n,o,r))},Al=function i(e,t,n,o,r){return e===t||(e==null||t==null||!pe(e)&&!pe(t)?e!=e&&t!=t:_b(e,t,n,o,i,r))},Ab=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?Al(i,e,void 0,t):!!n};class Cl extends Ln{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,o=new Set;for(const l of e)if(l.type==="childList"){const d=t.mapDomToView(l.target);if(d&&(d.is("uiElement")||d.is("rawElement")))continue;d&&!this._isBogusBrMutation(l)&&o.add(d)}for(const l of e){const d=t.mapDomToView(l.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&l.type==="characterData"){const u=t.findCorrespondingViewText(l.target);u&&!o.has(u.parent)?n.set(u,{type:"text",oldText:u.data,newText:ps(l.target),node:u}):!u&&Xt(l.target)&&o.add(t.mapDomToView(l.target.parentNode))}}const r=[];for(const l of n.values())this.renderer.markToSync("text",l.node),r.push(l);for(const l of o){const d=t.mapViewToDom(l),u=Array.from(l.getChildren()),h=Array.from(t.domChildrenToView(d,{withChildren:!1}));Ab(u,h,c)||(this.renderer.markToSync("children",l),r.push({type:"children",oldChildren:u,newChildren:h,node:l}))}const s=e[0].target.ownerDocument.getSelection();let a=null;if(s&&s.anchorNode){const l=t.domPositionToView(s.anchorNode,s.anchorOffset),d=t.domPositionToView(s.focusNode,s.focusOffset);l&&d&&(a=new wn(l),a.setFocus(d))}function c(l,d){if(!Array.isArray(l))return l===d||!(!l.is("$text")||!d.is("$text"))&&l.data===d.data}r.length&&(this.document.fire("mutations",r,a),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}const yl=jc(function(i,e){So(e,To(e),i)});class bs{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,yl(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Yn extends Ln{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new bs(this.view,t,n))}}class Cb extends Yn{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Mn(this)}};this.fire(e.type,e,t)}}const ws=function(){return rt.Date.now()};var yb=/\s/;const xb=function(i){for(var e=i.length;e--&&yb.test(i.charAt(e)););return e};var Db=/^\s+/;const Eb=function(i){return i&&i.slice(0,xb(i)+1).replace(Db,"")};var Mb=/^[-+]0x[0-9a-f]+$/i,Sb=/^0b[01]+$/i,Ib=/^0o[0-7]+$/i,Tb=parseInt;const xl=function(i){if(typeof i=="number")return i;if(Li(i))return NaN;if($(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=$(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=Eb(i);var t=Sb.test(i);return t||Ib.test(i)?Tb(i.slice(2),t?2:8):Mb.test(i)?NaN:+i};var Nb=Math.max,Pb=Math.min;const ui=function(i,e,t){var n,o,r,s,a,c,l=0,d=!1,u=!1,h=!0;if(typeof i!="function")throw new TypeError("Expected a function");function p(Y){var we=n,Ne=o;return n=o=void 0,l=Y,s=i.apply(Ne,we)}function f(Y){return l=Y,a=setTimeout(v,e),d?p(Y):s}function b(Y){var we=Y-c;return c===void 0||we>=e||we<0||u&&Y-l>=r}function v(){var Y=ws();if(b(Y))return M(Y);a=setTimeout(v,function(we){var Ne=e-(we-c);return u?Pb(Ne,r-(we-l)):Ne}(Y))}function M(Y){return a=void 0,h&&n?p(Y):(n=o=void 0,s)}function O(){var Y=ws(),we=b(Y);if(n=arguments,o=this,c=Y,we){if(a===void 0)return f(c);if(u)return clearTimeout(a),a=setTimeout(v,e),p(c)}return a===void 0&&(a=setTimeout(v,e)),s}return e=xl(e)||0,$(t)&&(d=!!t.leading,r=(u="maxWait"in t)?Nb(xl(t.maxWait)||0,e):r,h="trailing"in t?!!t.trailing:h),O.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=o=a=void 0},O.flush=function(){return a===void 0?s:M(ws())},O};class Bb extends Ln{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ui(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new wn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Fe.arrowleft&&e!=Fe.arrowup||n.setTo(n.getFirstPosition()),e!=Fe.arrowright&&e!=Fe.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class zb extends Ln{constructor(e){super(e),this.mutationObserver=e.getObserver(Cl),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ui(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ui(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(o,r)=>{this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Lb extends Yn{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Ob extends Yn{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class Rb extends Yn{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class jb{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const Dl=function(i){return typeof i=="string"||!Ut(i)&&pe(i)&&bt(i)=="[object String]"};function El(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const s in t)r.setAttribute(s,t[s]);!Dl(n)&&Zt(n)||(n=[n]);for(let s of n)Dl(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}class ht{constructor(e,t){ht._observerInstance||ht._createObserver(),this._element=e,this._callback=t,ht._addElementCallback(e,t),ht._observerInstance.observe(e)}destroy(){ht._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){ht._elementCallbacks||(ht._elementCallbacks=new Map);let n=ht._elementCallbacks.get(e);n||(n=new Set,ht._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=ht._getElementCallbacks(e);n&&(n.delete(t),n.size||(ht._elementCallbacks.delete(e),ht._observerInstance.unobserve(e))),ht._elementCallbacks&&!ht._elementCallbacks.size&&(ht._observerInstance=null,ht._elementCallbacks=null)}static _getElementCallbacks(e){return ht._elementCallbacks?ht._elementCallbacks.get(e):null}static _createObserver(){ht._observerInstance=new Ve.window.ResizeObserver(e=>{for(const t of e){const n=ht._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function zo(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function At(i){const e=i.next();return e.done?null:e.value}ht._observerInstance=null,ht._elementCallbacks=null;class vn extends ho(L){constructor(){super(),this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new g("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Sn{constructor(){this._listener=Object.create(ho)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Mn(n),n)})}set(e,t,n={}){const o=ls(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{t(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+Mn(e),e)}destroy(){this._listener.stopListening()}}class Fb extends Ln{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==Fe.arrowright||o==Fe.arrowleft||o==Fe.arrowup||o==Fe.arrowdown)){const r=new ci(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&t.stop()}var o})}observe(){}}class Vb extends Ln{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=Fe.tab||o.ctrlKey)return;const r=new ci(t,"tab",t.selection.getFirstRange());t.fire(r,o),r.stop.called&&n.stop()})}observe(){}}function Gi(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Ml(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const Sl=["top","right","bottom","left","width","height"];class ot{constructor(e){const t=Gi(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Tl(e)||t)if(t){const n=ot.getDomRangeRects(e);Ki(this,ot.getBoundingRect(n))}else Ki(this,e.getBoundingClientRect());else if(Wi(e)){const{innerWidth:n,innerHeight:o}=e;Ki(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Ki(this,e)}clone(){return new ot(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new ot(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Il(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Il(n);){const o=new ot(n),r=t.getIntersection(o);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of Sl)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Wi(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=Ml(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new ot(o));else{let o=e.startContainer;Bt(o)&&(o=o.parentNode);const r=new ot(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ot(t))}}function Ki(i,e){for(const t of Sl)i[t]=e[t]}function Il(i){return!!Tl(i)&&i===i.ownerDocument.body}function Tl(i){return zn(i)}function Ub(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new ot(i).excludeScrollbarsAndBorders();if(![o,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=i;Pl(o,r)?a-=r.top-e.top+t:Nl(n,r)&&(a+=e.bottom-r.bottom+t),Bl(e,r)?s-=r.left-e.left+t:zl(e,r)&&(s+=e.right-r.right+t),i.scrollTo(s,a)}}function Hb(i,e){const t=vs(i);let n,o;for(;i!=t.document.body;)o=e(),n=new ot(i).excludeScrollbarsAndBorders(),n.contains(o)||(Pl(o,n)?i.scrollTop-=n.top-o.top:Nl(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Bl(o,n)?i.scrollLeft-=n.left-o.left:zl(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Nl(i,e){return i.bottom>e.bottom}function Pl(i,e){return i.top<e.top}function Bl(i,e){return i.left<e.left}function zl(i,e){return i.right>e.right}function vs(i){return Gi(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function $b(i){if(Gi(i)){let e=i.commonAncestorContainer;return Bt(e)&&(e=e.parentNode),e}return i.parentNode}function Ll(i,e){const t=vs(i),n=new ot(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,s=new ot(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}class Wb extends L{constructor(e){super(),this.document=new ss(e),this.domConverter=new $i(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new rb(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document,"isFocused","isSelecting"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Gc(this.document),this.addObserver(Cl),this.addObserver(zb),this.addObserver(Lb),this.addObserver(Cb),this.addObserver(Bb),this.addObserver(Ob),this.addObserver(Fb),this.addObserver(Vb),Ke.isAndroid&&this.addObserver(Rb),this.document.on("arrowKey",nb,{priority:"low"}),Zk(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:s,value:a}of Array.from(e.attributes))o[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(e,o);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=vs(t);let r=o,s=null;for(;r;){let a;a=$b(r==o?t:s),Hb(a,()=>Ll(t,r));const c=Ll(t,r);if(Ub(r,c,n),r.parent!=r){if(s=r.frameElement,r=r.parent,!s)return}else r=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new g("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){g.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return he._createAt(e,t)}createPositionAfter(e){return he._createAfter(e)}createPositionBefore(e){return he._createBefore(e)}createRange(...e){return new ze(...e)}createRangeOn(e){return ze._createOn(e)}createRangeIn(e){return ze._createIn(e)}createSelection(...e){return new wn(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class qn{is(){throw new Error("is() method is abstract")}}class Gn extends qn{constructor(e){super(),this.parent=null,this._attrs=Dn(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new g("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new g("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Ot(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new Gn(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Dn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}Gn.prototype.is=function(i){return i==="node"||i==="model:node"};class hi{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new g("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new g("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Gn))throw new g("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class et extends Gn{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new et(this.data,this.getAttributes())}static fromJSON(e){return new et(e.data,e.attributes)}}et.prototype.is=function(i){return i==="$text"||i==="model:$text"||i==="text"||i==="model:text"||i==="node"||i==="model:node"};class _n extends qn{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new g("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new g("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}_n.prototype.is=function(i){return i==="$textProxy"||i==="model:$textProxy"||i==="textProxy"||i==="model:textProxy"};class Qe extends Gn{constructor(e,t,n){super(t),this.name=e,this._children=new hi,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Qe(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new et(o)]:(Zt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new et(r):r instanceof _n?new et(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(Qe.fromJSON(n)):t.push(et.fromJSON(n))}return new Qe(e.name,e.attributes,t)}}Qe.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="model:element"):i==="element"||i==="model:element"||i==="node"||i==="model:node"};class On{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new g("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new g("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=ne._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,r;do o=this.position,r=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const o=gi(t,n),r=o||Ol(t,n,o);if(r instanceof Qe)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,go("elementStart",r,e,t,1);if(r instanceof et){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-t.offset}const a=t.offset-r.startOffset,c=new _n(r,a,s);return t.offset+=s,this.position=t,go("text",c,e,t,s)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():go("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const o=t.parent,r=gi(t,o),s=r||Rl(t,o,r);if(s instanceof Qe)return t.offset--,this.shallow?(this.position=t,go("elementStart",s,e,t,1)):(t.path.push(s.maxOffset),this.position=t,this._visitedParent=s,this.ignoreElementEnd?this._previous():go("elementEnd",s,e,t));if(s instanceof et){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=t.offset-d}const c=t.offset-s.startOffset,l=new _n(s,c-a,a);return t.offset-=a,this.position=t,go("text",l,e,t,a)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,go("elementStart",n,e,t,1)}}function go(i,e,t,n,o){return{done:!1,value:{type:i,item:e,previousPosition:t,nextPosition:n,length:o}}}class ne extends qn{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new g("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new g("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new g("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new g("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return gi(this,this.parent)}get nodeAfter(){const e=this.parent;return Ol(this,e,gi(this,e))}get nodeBefore(){const e=this.parent;return Rl(this,e,gi(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=Ot(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new On(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=Ot(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=ne._createAt(this),n=ne._createAt(e);break;case"after":t=ne._createAt(e),n=ne._createAt(this);break;default:return!1}let o=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==o.maxOffset)return!1;t.path=t.path.slice(0,-1),o=o.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}throw new Error("unreachable code")}hasSameParentAs(e){return this.root!==e.root?!1:Ot(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=ne._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?ne._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=ne._createAt(this);if(this.root!=e.root)return n;if(Ot(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(Ot(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=ne._createAt(this);if(this.root!=e.root)return n;if(Ot(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(Ot(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return ne._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=ne._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof ne)return new ne(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new g("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new g("model-position-parent-incorrect",[this,e]);const r=o.getPath();return r.push(t),new this(o.root,r,n)}}static _createAfter(e,t){if(!e.parent)throw new g("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new g("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new ne(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new g("model-position-fromjson-no-root",t,{rootName:e.root});return new ne(t.getRoot(e.root),e.path,e.stickiness)}}function gi(i,e){const t=e.getChild(e.offsetToIndex(i.offset));return t&&t.is("$text")&&t.startOffset<i.offset?t:null}function Ol(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset))}function Rl(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset)-1)}ne.prototype.is=function(i){return i==="position"||i==="model:position"};class U extends qn{constructor(e,t){super(),this.start=ne._createAt(e),this.end=t?ne._createAt(t):ne._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new On({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ot(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=ne._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new U(this.start,e.start)),this.containsPosition(e.end)&&t.push(new U(e.end,this.end))):t.push(new U(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new U(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(r)&&(r=e.end),new U(o,r)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=ne._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const r=o.maxOffset-n.offset;r!==0&&e.push(new U(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&e.push(new U(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new On(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new On(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new On(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new U(this.start,this.end)]}getTransformedByOperations(e){const t=[new U(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const r=t[o].getTransformedByOperation(n);t.splice(o,1,...r),o+=r.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let r=n+1;r<t.length;r++){const s=t[r];(o.containsRange(s)||s.containsRange(o)||o.isEqual(s))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,r=e.targetPosition;return this._getTransformedByMove(n,r,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new U(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new U(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=ne._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new U(t,n)):new U(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new U(this.start,e),new U(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new U(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const u=this.start._getTransformedByMove(e,t,n);return[new U(u)]}const r=U._createFromPositionAndShift(e,n),s=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const u=this.start._getTransformedByMove(e,t,n),h=this.end._getTransformedByMove(e,t,n);return[new U(u,h)]}let a;const c=this.getDifference(r);let l=null;const d=this.getIntersection(r);if(c.length==1?l=new U(c[0].start._getTransformedByDeletion(e,n),c[0].end._getTransformedByDeletion(e,n)):c.length==2&&(l=new U(this.start,this.end._getTransformedByDeletion(e,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||o):[],d){const u=new U(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,u):a.push(u)}return a}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new U(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(ne._createAt(e,0),ne._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(ne._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new g("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let r=n-1;e[r].end.isEqual(o.start);r++)o.start=ne._createAt(e[r].start);for(let r=n+1;r<e.length&&e[r].start.isEqual(o.end);r++)o.end=ne._createAt(e[r].end);return o}static fromJSON(e,t){return new this(ne.fromJSON(e.start,t),ne.fromJSON(e.end,t))}}U.prototype.is=function(i){return i==="range"||i==="model:range"};class jl extends K{constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new g("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=ne._createAt(o,r)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new U(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new ze(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let r=0;r<t;r++)o+=this.getModelLength(e.getChild(r));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,r=0,s=0;if(e.is("$text"))return new he(e,t);for(;r<t;)n=e.getChild(s),o=this.getModelLength(n),r+=o,s++;return r==t?this._moveViewPositionToTextNode(new he(e,s)):this.findPositionIn(n,t-(r-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Xe?new he(t,t.data.length):n instanceof Xe?new he(n,0):e}}class Yb{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Qi(t),e instanceof _n&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Qi(t),e instanceof _n&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Qi(t),e instanceof _n&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=Qi(t),e instanceof _n&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[r,s]of o){const a=r.split(":")[0];s&&e==a&&t.push({event:r,item:n.name||n.description})}if(t.length)throw new g("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,r=Symbol("$textProxy:"+e.data);let s,a;return s=this._textProxyRegistry.get(t),s||(s=new Map,this._textProxyRegistry.set(t,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(o,r),r}}function Qi(i){const e=i.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?i:e.length>1?e[0]+":"+e[1]:e[0]}class Fl extends K{constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const s of e.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,o);const r=this._reduceChanges(e.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(U._createFromPositionAndShift(s.position,s.length),o):s.type==="reinsert"?this._convertReinsert(U._createFromPositionAndShift(s.position,s.length),o):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,o):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,o);for(const s of o.mapper.flushUnboundMarkerNames()){const a=t.get(s).getRange();this._convertMarkerRemove(s,a,o),this._convertMarkerAdd(s,a,o)}for(const s of e.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const r=this._createConversionApi(n,void 0,o);this._convertInsert(e,r);for(const[s,a]of t)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,e,o),this.fire("selection",{selection:e},r),e.isCollapsed){for(const s of o){const a=s.getRange();if(!qb(e.getFirstPosition(),s,r.mapper))continue;const c={item:e,markerName:s.name,markerRange:a};r.consumable.test(e,"addMarker:"+s.name)&&this.fire(`addMarker:${s.name}`,c,r)}for(const s of e.getAttributeKeys()){const a={item:e,range:e.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:e.getAttribute(s)};r.consumable.test(e,"attribute:"+a.attributeKey)&&this.fire(`attribute:${a.attributeKey}:$text`,a,r)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(Vl))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire(`remove:${n}`,{position:e,length:t},o)}_convertAttribute(e,t,n,o,r){this._addConsumablesForRange(r.consumable,e,`attribute:${t}`);for(const s of e){const a={item:s.item,range:U._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,a,r)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(Vl))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o=`addMarker:${e}`;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const r of t.getItems()){if(!n.consumable.test(r,o))continue;const s={item:r,range:U._createOn(r),markerName:e,markerRange:t};this.fire(o,s,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const r of o.getAttributeKeys())e.add(o,"attribute:"+r)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(c,l){const d=l.item.is("element")?l.item.name:"$text";return`${c}:${d}`}(e,t),r=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(o))return;a.add(o)}else s.set(r,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:U._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new Yb,writer:e,options:n,convertItem:r=>this._convertInsert(U._createOn(r),o),convertChildren:r=>this._convertInsert(U._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!t.has(o.mapper.toModelElement(r))};return this._firedEventsMap.set(o,new Map),o}}function qb(i,e,t){const n=e.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!t.toViewElement(r).getCustomProperty("addHighlight")})}function Vl(i){return{item:i.item,range:U._createFromPositionAndShift(i.previousPosition,i.length)}}class In extends me(qn){constructor(...e){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new U(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new U(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new U(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof In)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof U)this._setRanges([t],!!o&&!!o.backward);else if(t instanceof ne)this._setRanges([new U(t)]);else if(t instanceof Gn){const r=!!o&&!!o.backward;let s;if(n=="in")s=U._createIn(t);else if(n=="on")s=U._createOn(t);else{if(n===void 0)throw new g("model-selection-setto-required-second-parameter",[this,t]);s=new U(ne._createAt(t,n))}this._setRanges([s],r)}else{if(!Zt(t))throw new g("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,o&&!!o.backward)}}_setRanges(e,t=!1){const n=Array.from(e),o=n.some(r=>{if(!(r instanceof U))throw new g("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||o)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new g("model-selection-setfocus-no-ranges",[this,e]);const n=ne._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new U(n,o)),this._lastRangeBackward=!0):(this._pushRange(new U(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=Hl(t.start,e);n&&_s(n,t)&&(yield n);for(const r of t.getWalker()){const s=r.item;r.type=="elementEnd"&&Gb(s,e,t)&&(yield s)}const o=Hl(t.end,e);o&&!t.end.isTouching(ne._createAt(o,0))&&_s(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=ne._createAt(e,0),n=ne._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new U(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new g("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Ul(i,e){return!e.has(i)&&(e.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function Gb(i,e,t){return Ul(i,e)&&_s(i,t)}function Hl(i,e){const t=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(s=>!o&&(o=t.isLimit(s),!o&&Ul(s,e)));return n.forEach(s=>e.add(s)),r}function _s(i,e){const t=function(n){const o=n.root.document.model.schema;let r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return t?!e.containsRange(U._createOn(t),!0):!0}In.prototype.is=function(i){return i==="selection"||i==="model:selection"};class Tn extends me(U){constructor(e,t){super(e,t),Kb.call(this)}detach(){this.stopListening()}toRange(){return new U(this.start,this.end)}static fromRange(e){return new Tn(e.start,e.end)}}function Kb(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&Qb.call(this,t)},{priority:"low"})}function Qb(i){const e=this.getTransformedByOperation(i),t=U._createFromRanges(e),n=!t.isEqual(this),o=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,i);let r=null;if(n){t.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);const s=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",s,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}Tn.prototype.is=function(i){return i==="liveRange"||i==="model:liveRange"||i=="range"||i==="model:range"};const mi="selection:";class ln extends me(qn){constructor(e){super(),this._selection=new Zb(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return mi+e}static _isStoreAttributeKey(e){return e.startsWith(mi)}}ln.prototype.is=function(i){return i==="selection"||i=="model:selection"||i=="documentSelection"||i=="model:documentSelection"};class Zb extends In{constructor(e){super(),this.markers=new bn({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,r){const s=o.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&o.enqueueChange(r,l=>{const d=Array.from(c.getAttributeKeys()).filter(u=>u.startsWith(mi));for(const u of d)l.removeAttribute(u,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=y();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new g("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new g("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=Tn.fromRange(e);return t.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(t);this._ranges.splice(s,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=o.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const r=Array.from(this.markers),s=this.markers.has(e);if(t){let a=!1;for(const c of this.getRanges())if(t.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(e),o=!0):!a&&s&&(this.markers.remove(e),o=!0)}else s&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(e){const t=Dn(this._getSurroundingAttributes()),n=Dn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(t);const o=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||o.push(r);for(const[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(mi)&&(yield[t.substr(mi.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,r=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Zi(o)),n||(n=Zi(r)),!this.isGravityOverridden&&!n){let s=o;for(;s&&!t.isInline(s)&&!n;)s=s.previousSibling,n=Zi(s)}if(!n){let s=r;for(;s&&!t.isInline(s)&&!n;)s=s.nextSibling,n=Zi(s)}n||(n=this.getStoredAttributes())}else{const o=this.getFirstRange();for(const r of o){if(r.item.is("element")&&t.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Zi(i){return i instanceof _n||i instanceof et?i.getAttributes():null}class $l{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const mo=function(i){return Hr(i,5)};class Jb extends $l{elementToElement(e){return this.add(function(t){const n=ql(t.model),o=pi(t.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(s,a=ew){return(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;const u=s(l.item,d,l);if(!u)return;a(l.item,d.consumable);const h=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,u),d.writer.insert(h,u),d.convertAttributes(l.item),Jl(u,l.item.getChildren(),d,{reconversion:l.reconversion})}}(o,Zl(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",Ql(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=ql(t.model),o=pi(t.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new g("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=o,a=Zl(n),(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;const u=new Map;d.writer._registerSlotFactory(function(f,b,v){return(M,O="children")=>{const Y=M.createContainerElement("$slot");let we=null;if(O==="children")we=Array.from(f.getChildren());else{if(typeof O!="function")throw new g("conversion-slot-mode-unknown",v.dispatcher,{modeOrFilter:O});we=Array.from(f.getChildren()).filter(Ne=>O(Ne))}return b.set(Y,we),Y}}(l.item,u,d));const h=s(l.item,d,l);if(d.writer._clearSlotFactory(),!h)return;(function(f,b,v){const M=Array.from(b.values()).flat(),O=new Set(M);if(O.size!=M.length)throw new g("conversion-slot-filter-overlap",v.dispatcher,{element:f});if(O.size!=f.childCount)throw new g("conversion-slot-filter-incomplete",v.dispatcher,{element:f})})(l.item,u,d),a(l.item,d.consumable);const p=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,h),d.writer.insert(p,h),d.convertAttributes(l.item),function(f,b,v,M){v.mapper.on("modelToViewPosition",we,{priority:"highest"});let O=null,Y=null;for([O,Y]of b)Jl(f,Y,v,M),v.writer.move(v.writer.createRangeIn(O),v.writer.createPositionBefore(O)),v.writer.remove(O);function we(Ne,nt){const Ue=nt.modelPosition.nodeAfter,yt=Y.indexOf(Ue);yt<0||(nt.viewPosition=nt.mapper.findPositionIn(O,yt))}v.mapper.off("modelToViewPosition",we)}(h,u,d,{reconversion:l.reconversion})}),{priority:t.converterPriority||"normal"}),r.on("reduceChanges",Ql(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){let n=(t=mo(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const s of n.values)t.view[s]=pi(t.view[s],"attribute");else t.view=pi(t.view,"attribute");const r=Gl(t);return s=>{s.on(o,function(a){return(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;const u=a(l.attributeOldValue,d,l),h=a(l.attributeNewValue,d,l);if(!u&&!h)return;d.consumable.consume(l.item,c.name);const p=d.writer,f=p.document.selection;if(l.item instanceof In||l.item instanceof ln)p.wrap(f.getFirstRange(),h);else{let b=d.mapper.toViewRange(l.range);l.attributeOldValue!==null&&u&&(b=p.unwrap(b,u)),l.attributeNewValue!==null&&h&&p.wrap(b,h)}}}(r),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){let n=(t=mo(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const s of n.values)t.view[s]=Kl(t.view[s]);else t.view=Kl(t.view);const r=Gl(t);return s=>{var a;s.on(o,(a=r,(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;const u=a(l.attributeOldValue,d,l),h=a(l.attributeNewValue,d,l);if(!u&&!h)return;d.consumable.consume(l.item,c.name);const p=d.mapper.toViewElement(l.item),f=d.writer;if(!p)throw new g("conversion-attribute-to-attribute-on-text",d.dispatcher,l);if(l.attributeOldValue!==null&&u)if(u.key=="class"){const b=St(u.value);for(const v of b)f.removeClass(v,p)}else if(u.key=="style"){const b=Object.keys(u.value);for(const v of b)f.removeStyle(v,p)}else f.removeAttribute(u.key,p);if(l.attributeNewValue!==null&&h)if(h.key=="class"){const b=St(h.value);for(const v of b)f.addClass(v,p)}else if(h.key=="style"){const b=Object.keys(h.value);for(const v of b)f.setStyle(v,h.value[v],p)}else f.setAttribute(h.key,h.value,p)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=pi(t.view,"ui");return o=>{var r;o.on(`addMarker:${t.model}`,(r=n,(s,a,c)=>{a.isOpening=!0;const l=r(a,c);a.isOpening=!1;const d=r(a,c);if(!l||!d)return;const u=a.markerRange;if(u.isCollapsed&&!c.consumable.consume(u,s.name))return;for(const f of u)if(!c.consumable.consume(f.item,s.name))return;const h=c.mapper,p=c.writer;p.insert(h.toViewPosition(u.start),l),c.mapper.bindElementToMarker(l,a.markerName),u.isCollapsed||(p.insert(h.toViewPosition(u.end),d),c.mapper.bindElementToMarker(d,a.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),o.on(`removeMarker:${t.model}`,(s,a,c)=>{const l=c.mapper.markerNameToElements(a.markerName);if(l){for(const d of l)c.mapper.unbindElementFromMarkerName(d,a.markerName),c.writer.clear(c.writer.createRangeOn(d),d);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on(`addMarker:${t.model}`,(o=t.view,(r,s,a)=>{if(!s.item||!(s.item instanceof In||s.item instanceof ln||s.item.is("$textProxy")))return;const c=As(o,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const l=a.writer,d=Wl(l,c),u=l.document.selection;if(s.item instanceof In||s.item instanceof ln)l.wrap(u.getFirstRange(),d);else{const h=a.mapper.toViewRange(s.range),p=l.wrap(h,d);for(const f of p.getItems())if(f.is("attributeElement")&&f.isSimilar(d)){a.mapper.bindElementToMarker(f,s.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof Qe))return;const l=As(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;const d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const u of U._createIn(a.item))c.consumable.consume(u.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const l=As(r,a,c);if(!l)return;const d=Wl(c.writer,l),u=c.mapper.markerNameToElements(a.markerName);if(u){for(const h of u)c.mapper.unbindElementFromMarkerName(h,a.markerName),h.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(h),d):h.getCustomProperty("removeHighlight")(h,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=mo(t)).model;let o=t.view;return o||(o=r=>({group:n,name:r.substr(t.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=o,(a,c,l)=>{const d=s(c.markerName,l);if(!d)return;const u=c.markerRange;l.consumable.consume(u,a.name)&&(Yl(u,!1,l,c,d),Yl(u,!0,l,c,d),a.stop())}),{priority:t.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,l,d)=>{const u=a(l.markerName,d);if(!u)return;const h=d.mapper.markerNameToElements(l.markerName);if(h){for(const f of h)d.mapper.unbindElementFromMarkerName(f,l.markerName),f.is("containerElement")?(p(`data-${u.group}-start-before`,f),p(`data-${u.group}-start-after`,f),p(`data-${u.group}-end-before`,f),p(`data-${u.group}-end-after`,f)):d.writer.clear(d.writer.createRangeOn(f),f);d.writer.clearClonedElementsGroup(l.markerName),c.stop()}function p(f,b){if(b.hasAttribute(f)){const v=new Set(b.getAttribute(f).split(","));v.delete(u.name),v.size==0?d.writer.removeAttribute(f,b):d.writer.setAttribute(f,Array.from(v).join(","),b)}}}}(o),{priority:t.converterPriority||"normal"})}}(e))}}function Wl(i,e){const t=i.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Yl(i,e,t,n,o){const r=e?i.start:i.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,l;e&&s||!e&&!a?(c=s,l=!0):(c=a,l=!1);const d=t.mapper.toViewElement(c);if(d)return void function(u,h,p,f,b,v){const M=`data-${v.group}-${h?"start":"end"}-${p?"before":"after"}`,O=u.hasAttribute(M)?u.getAttribute(M).split(","):[];O.unshift(v.name),f.writer.setAttribute(M,O.join(","),u),f.mapper.bindElementToMarker(u,b.markerName)}(d,e,l,t,n,o)}(function(c,l,d,u,h){const p=`${h.group}-${l?"start":"end"}`,f=h.name?{name:h.name}:null,b=d.writer.createUIElement(p,f);d.writer.insert(c,b),d.mapper.bindElementToMarker(b,u.markerName)})(t.mapper.toViewPosition(r),e,t,n,o)}function ql(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function pi(i,e){return typeof i=="function"?i:(t,n)=>function(o,r,s){typeof o=="string"&&(o={name:o});let a;const c=r.writer,l=Object.assign({},o.attributes);if(s=="container")a=c.createContainerElement(o.name,l);else if(s=="attribute"){const d={priority:o.priority||co.DEFAULT_PRIORITY};a=c.createAttributeElement(o.name,l,d)}else a=c.createUIElement(o.name,l);if(o.styles){const d=Object.keys(o.styles);for(const u of d)c.setStyle(u,o.styles[u],a)}if(o.classes){const d=o.classes;if(typeof d=="string")c.addClass(d,a);else for(const u of d)c.addClass(u,a)}return a}(i,n,e)}function Gl(i){return i.model.values?(e,t,n)=>{const o=i.view[e];return o?o(e,t,n):null}:i.view}function Kl(i){return typeof i=="string"?e=>({key:i,value:e}):typeof i=="object"?i.value?()=>i:e=>({key:i.key,value:e}):i}function As(i,e,t){const n=typeof i=="function"?i(e,t):i;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Ql(i){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(i);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&e(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=ne._createBefore(s);o.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else o.push(r)}n.changes=o}}function Zl(i){return(e,t,n={})=>{const o=["insert"];for(const r of i.attributes)e.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>t.test(e,r))&&(n.preflight||o.forEach(r=>t.consume(e,r)),!0)}}function Jl(i,e,t,n){for(const o of e)Xb(i.root,o,t,n)||t.convertItem(o)}function Xb(i,e,t,n){const{writer:o,mapper:r}=t;if(!n.reconversion)return!1;const s=r.toViewElement(e);return!(!s||s.root==i)&&!!t.canReuseView(s)&&(o.move(o.createRangeOn(s),r.toViewPosition(ne._createBefore(e))),!0)}function ew(i,e,{preflight:t}={}){return t?e.test(i,"insert"):e.consume(i,"insert")}function Xl(i){const{schema:e,document:t}=i.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function ed(i,e,t){const n=t.createContext(i);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function td(i,e){const t=e.createElement("paragraph");return e.insert(t,i),e.createPositionAt(t,0)}class tw extends $l{elementToElement(e){return this.add(nd(e))}elementToAttribute(e){return this.add(function(t){od(t=mo(t));const n=id(t,!1),o=Cs(t.view),r=o?`element:${o}`:"element";return s=>{s.on(r,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=mo(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(t)),od(t,n);const o=id(t,!0);return r=>{r.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(o){return(r,s)=>{const a=typeof o=="string"?o:o(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(t.model);return nd({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){(t=mo(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n={view:t.view,model:t.model},o=ys(rd(n,"start")),r=ys(rd(n,"end"));return s=>{s.on(`element:${t.view}-start`,o,{priority:t.converterPriority||"normal"}),s.on(`element:${t.view}-end`,r,{priority:t.converterPriority||"normal"});const a=S.get("low"),c=S.get("highest"),l=S.get(t.converterPriority)/c;s.on("element",function(d){return(u,h,p)=>{const f=`data-${d.view}`;function b(v,M){for(const O of M){const Y=d.model(O,p),we=p.writer.createElement("$marker",{"data-name":Y});p.writer.insert(we,v),h.modelCursor.isEqual(v)?h.modelCursor=h.modelCursor.getShiftedBy(1):h.modelCursor=h.modelCursor._getTransformedByInsertion(v,1),h.modelRange=h.modelRange._getTransformedByInsertion(v,1)[0]}}(p.consumable.test(h.viewItem,{attributes:f+"-end-after"})||p.consumable.test(h.viewItem,{attributes:f+"-start-after"})||p.consumable.test(h.viewItem,{attributes:f+"-end-before"})||p.consumable.test(h.viewItem,{attributes:f+"-start-before"}))&&(h.modelRange||Object.assign(h,p.convertChildren(h.viewItem,h.modelCursor)),p.consumable.consume(h.viewItem,{attributes:f+"-end-after"})&&b(h.modelRange.end,h.viewItem.getAttribute(f+"-end-after").split(",")),p.consumable.consume(h.viewItem,{attributes:f+"-start-after"})&&b(h.modelRange.end,h.viewItem.getAttribute(f+"-start-after").split(",")),p.consumable.consume(h.viewItem,{attributes:f+"-end-before"})&&b(h.modelRange.start,h.viewItem.getAttribute(f+"-end-before").split(",")),p.consumable.consume(h.viewItem,{attributes:f+"-start-before"})&&b(h.modelRange.start,h.viewItem.getAttribute(f+"-start-before").split(",")))}}(n),{priority:a+l})}}(e))}}function nd(i){const e=ys(i=mo(i)),t=Cs(i.view),n=t?`element:${t}`:"element";return o=>{o.on(n,e,{priority:i.converterPriority||"normal"})}}function Cs(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function ys(i){const e=new En(i.view);return(t,n,o)=>{const r=e.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(i.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function od(i,e=null){const t=e===null||(r=>r.getAttribute(e)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?t:i.model.value;i.model={key:n,value:o}}function id(i,e){const t=new En(i.view);return(n,o,r)=>{if(!o.modelRange&&e)return;const s=t.match(o.viewItem);if(!s||(function(d,u){const h=typeof d=="function"?d(u):d;return typeof h=="object"&&!Cs(h)?!1:!h.classes&&!h.attributes&&!h.styles}(i.view,o.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(o.viewItem,s.match)))return;const a=i.model.key,c=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(c===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(d,u,h,p){let f=!1;for(const b of Array.from(d.getItems({shallow:h})))p.schema.checkAttribute(b,u.key)&&(f=!0,b.hasAttribute(u.key)||p.writer.setAttribute(u.key,u.value,b));return f}(o.modelRange,{key:a,value:c},e,r)&&(r.consumable.test(o.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(o.viewItem,s.match))}}function rd(i,e){return{view:`${i.view}-${e}`,model:(t,n)=>{const o=t.getAttribute("name"),r=i.model(o,n);return n.writer.createElement("$marker",{"data-name":r})}}}class nw extends L{constructor(e,t){super(),this.model=e,this.view=new Wb(t),this.mapper=new jl,this.downcastDispatcher=new Fl({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(o,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,l)=>{const d=l.newSelection,u=[];for(const p of d.getRanges())u.push(a.toModelRange(p));const h=s.createSelection(u,{backward:d.isBackward});h.isEqual(s.document.selection)||s.change(p=>{p.setSelection(h)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,s.name))return;const l=c.writer,d=c.mapper.toViewPosition(a.range.start),u=l.createText(a.item.data);l.insert(d,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,c)=>{c.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||c.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{const l=c.mapper.toViewPosition(a.position),d=a.position.getShiftedBy(a.length),u=c.mapper.toViewPosition(d,{isPhantom:!0}),h=c.writer.createRange(l,u),p=c.writer.remove(h.getTrimmed());for(const f of c.writer.createRangeIn(p).getItems())c.mapper.unbindViewElement(f,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=c.writer,d=l.document.selection;for(const u of d.getRanges())u.isCollapsed&&u.end.parent.isAttached()&&c.writer.mergeAttributes(u.start);l.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=a.selection;if(l.isCollapsed||!c.consumable.consume(l,"selection"))return;const d=[];for(const u of l.getRanges())d.push(c.mapper.toViewRange(u));c.writer.setSelection(d,{backward:l.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=a.selection;if(!l.isCollapsed||!c.consumable.consume(l,"selection"))return;const d=c.writer,u=l.getFirstPosition(),h=c.mapper.toViewPosition(u),p=d.breakAttributes(h);d.setSelection(p)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new $c(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new g("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class ow{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new g("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class fi{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new iw(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&t.attributes.push(s);const o=e.getClassNames();for(const s of o)t.classes.push(s);const r=e.getStyleNames();for(const s of r)t.styles.push(s);return t}static createFrom(e,t){if(t||(t=new fi),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,fi.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=fi.createFrom(n,t);return t}}const Ji=["attributes","classes","styles"];class iw{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of Ji)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of Ji)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of Ji)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of Ji)t in e&&this._revert(t,e[t])}_add(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n){if(e==="attributes"&&(r==="class"||r==="style"))throw new g("viewconsumable-invalid-attribute",this);if(o.set(r,!0),e==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!0)}}_test(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){const s=o.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),e=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class rw extends L{constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new po(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new po(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new g("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new g("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof ne){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof Qe))throw new g("schema-check-merge-no-element-before",this);if(!(o instanceof Qe))throw new g("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof ne?t=e.parent:t=(e instanceof U?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new et("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const r of o)if(this.checkAttribute(r.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new U(e);let n,o;const r=e.getAncestors().reverse().find(s=>this.isLimit(s))||e.root;t!="both"&&t!="backward"||(n=new On({boundaries:U._createIn(r),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new On({boundaries:U._createIn(r),startPosition:e}));for(const s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){const d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){const d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,o)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return U._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new U(c.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[r,s]of Object.entries(t))o.schema.checkAttribute(e,r)&&n.setAttribute(r,s,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))sd(this,n,t);else{const o=U._createIn(n).getPositions();for(const r of o)sd(this,r.nodeBefore||r.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[r,s]of e.getAttributes()){const a=this.getAttributeProperties(r);a[t]!==void 0&&(n!==void 0&&n!==a[t]||(o[r]=s))}return o}createContext(e){return new po(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=sw(t[o],o);for(const o of n)aw(e,o);for(const o of n)cw(e,o);for(const o of n)lw(e,o);for(const o of n)dw(e,o),uw(e,o);for(const o of n)hw(e,o),gw(e,o),mw(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const r=this.getDefinition(o);return this._checkContextMatch(r,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const r of e.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(U._createIn(r),t)),this.checkAttribute(r,t)||(n.isEqual(o)||(yield new U(n,o)),n=ne._createAfter(r)),o=ne._createAfter(r);n.isEqual(o)||(yield new U(n,o))}}class po{constructor(e){if(e instanceof po)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(fw)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new po([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function sw(i,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)o[a]=!!r[a]}}(i,t),fo(i,t,"allowIn"),fo(i,t,"allowContentOf"),fo(i,t,"allowWhere"),fo(i,t,"allowAttributes"),fo(i,t,"allowAttributesOf"),fo(i,t,"allowChildren"),fo(i,t,"inheritTypesFrom"),function(n,o){for(const r of n){const s=r.inheritAllFrom;s&&(o.allowContentOf.push(s),o.allowWhere.push(s),o.allowAttributesOf.push(s),o.inheritTypesFrom.push(s))}}(i,t),t}function aw(i,e){const t=i[e];for(const n of t.allowChildren){const o=i[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function cw(i,e){for(const t of i[e].allowContentOf)i[t]&&pw(i,t).forEach(n=>{n.allowIn.push(e)});delete i[e].allowContentOf}function lw(i,e){for(const t of i[e].allowWhere){const n=i[t];if(n){const o=n.allowIn;i[e].allowIn.push(...o)}}delete i[e].allowWhere}function dw(i,e){for(const t of i[e].allowAttributesOf){const n=i[t];if(n){const o=n.allowAttributes;i[e].allowAttributes.push(...o)}}delete i[e].allowAttributesOf}function uw(i,e){const t=i[e];for(const n of t.inheritTypesFrom){const o=i[n];if(o){const r=Object.keys(o).filter(s=>s.startsWith("is"));for(const s of r)s in t||(t[s]=o[s])}}delete t.inheritTypesFrom}function hw(i,e){const t=i[e],n=t.allowIn.filter(o=>i[o]);t.allowIn=Array.from(new Set(n))}function gw(i,e){const t=i[e];for(const n of t.allowIn)i[n].allowChildren.push(e)}function mw(i,e){const t=i[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function fo(i,e,t){for(const n of i){const o=n[t];typeof o=="string"?e[t].push(o):Array.isArray(o)&&e[t].push(...o)}}function pw(i,e){const t=i[e];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function fw(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:e=>i.getAttribute(e)}}function sd(i,e,t){for(const n of e.getAttributeKeys())i.checkAttribute(e,n)||t.removeAttribute(n,e)}class kw extends K{constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(s,a){let c;for(const l of new po(s)){const d={};for(const h of l.getAttributeKeys())d[h]=l.getAttribute(h);const u=a.createElement(l.name,d);c&&a.insert(u,c),c=ne._createAt(u,0)}return c}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=fi.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),r=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))t.append(s,r);r.markers=function(s,a){const c=new Set,l=new Map,d=U._createIn(s).getItems();for(const u of d)u.is("element","$marker")&&c.add(u);for(const u of c){const h=u.getAttribute("data-name"),p=a.createPositionBefore(u);l.has(h)?l.get(h).end=p.clone():l.set(h,new U(p.clone())),a.remove(u)}return l}(r,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof U))throw new g("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:ne._createAt(t,0);const o=new U(n);for(const r of Array.from(e.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof U&&(o.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(e);t.modelCursor=r?o.createPositionAt(r,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let r=n.findAllowedParent(t,e);if(r){if(r===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return ed(t,e,n)?{position:td(t,o)}:null;const s=this.conversionApi.writer.split(t,r),a=[];for(const l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{const d=a.pop(),u=l.item;this._registerSplitPair(d,u)}const c=s.range.end.parent;return this._cursorParents.set(e,c),{position:s.position,cursorParent:c}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class bw{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class ww{constructor(e){this.domParser=new DOMParser,this.domConverter=new $i(e,{renderingMode:"data"}),this.htmlWriter=new bw}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class vw extends K{constructor(e,t){super(),this.model=e,this.mapper=new jl,this.downcastDispatcher=new Fl({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(o.range.start),c=s.createText(o.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new kw({schema:e.schema}),this.viewDocument=new ss(t),this.stylesProcessor=t,this.htmlProcessor=new ww(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Gc(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:s,writer:a})=>{let c=o.modelCursor;if(!s.test(o.viewItem))return;if(!r.checkChild(c,"$text")){if(!ed(c,"$text",r)||o.viewItem.data.trim().length==0)return;c=td(c,a)}s.consume(o.viewItem);const l=a.createText(o.viewItem.data);a.insert(l,c),o.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),L.prototype.decorate.call(this,"init"),L.prototype.decorate.call(this,"set"),L.prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Xl)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new g("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const r=U._createIn(e),s=new uo(n);this.mapper.bindElements(e,s);const a=e.is("documentFragment")?e.markers:function(c){const l=[],d=c.root.document;if(!d)return new Map;const u=U._createIn(c);for(const h of d.model.markers){const p=h.getRange(),f=p.isCollapsed,b=p.start.isEqual(u.start)||p.end.isEqual(u.end);if(f&&b)l.push([h.name,p]);else{const v=u.getIntersection(p);v&&l.push([h.name,v])}}return l.sort(([h,p],[f,b])=>{if(p.end.compareWith(b.start)!=="after")return 1;if(p.start.compareWith(b.end)!=="before")return-1;switch(p.start.compareWith(b.start)){case"before":return 1;case"after":return-1;default:switch(p.end.compareWith(b.end)){case"before":return 1;case"after":return-1;default:return f.localeCompare(h)}}}),new Map(l)}(e);return this.downcastDispatcher.convert(r,a,o,t),s}init(e){if(this.model.document.version)throw new g("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new g("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const r=this.model.document.getRoot(o);n.insert(this.parse(t[o],r),r,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new g("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);o.remove(o.createRangeIn(s)),o.insert(this.parse(n[r],s),s,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class _w{constructor(e,t){this._helpers=new Map,this._downcast=St(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=St(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new g("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new g("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of xs(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of xs(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of xs(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new g("conversion-group-exists",this);const o=n?new Jb(t):new tw(t);this._helpers.set(e,o)}}function*xs(i){if(i.model.values)for(const e of i.model.values){const t={key:i.model.key,value:e},n=i.view[e],o=i.upcastAlso?i.upcastAlso[e]:void 0;yield*ad(t,n,o)}else yield*ad(i.model,i.view,i.upcastAlso)}function*ad(i,e,t){if(yield{model:i,view:e},t)for(const n of St(t))yield{model:i,view:n}}class Lo{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},w("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return w("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class Aw{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),o=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),o||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=U._createFromPositionAndShift(t.position,1);for(const o of this._markerCollection.getMarkersIntersectingRange(n)){const r=o.getData();this.bufferMarkerChange(o.name,r,r)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const o=t.graveyardPosition.parent;this._markInsert(o,t.graveyardPosition.offset,1);const r=t.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,r=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||r)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((d,u)=>d.offset===u.offset?d.type!=u.type?d.type=="remove"?-1:1:0:d.offset<u.offset?-1:1),r=this._elementSnapshots.get(n),s=cd(n.getChildren()),a=Cw(r.length,o);let c=0,l=0;for(const d of a)if(d==="i")t.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")t.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){const u=s[c].attributes,h=r[l].attributes;let p;if(s[c].name=="$text")p=new U(ne._createAt(n,c),ne._createAt(n,c+1));else{const f=n.offsetToIndex(c);p=new U(ne._createAt(n,c),ne._createAt(n.getChild(f),0))}t.push(...this._getAttributesDiff(p,h,u)),c++,l++}else c++,l++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const r=t[o],s=t[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(yw),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=U._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,cd(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,r=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<r&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<r){const s=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:s-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=r)if(e.offset<n.offset){const s=o-n.offset;n.offset=e.offset,n.howMany-=s,e.nodesToHandle-=s}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<r){const s=r-e.offset;n.howMany-=s,e.nodesToHandle-=s}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const s=o-n.offset;n.offset=e.offset,n.howMany-=s}else if(e.offset<r)if(o<=r){const s=n.howMany;n.howMany=e.offset-n.offset;const a=s-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>r){const s={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(s,t),t.push(s)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<r&&(o>r?(e.nodesToHandle=o-r,e.offset=r):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const s={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(s,t),t.push(s),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=r?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=r&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:ne._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:ne._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[r,s]of t){const a=n.has(r)?n.get(r):null;a!==s&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new U(ne._createAt(e,t),ne._createAt(e,t+n));for(const r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function cd(i){const e=[];for(const t of i)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function Cw(i,e){const t=[];let n=0,o=0;for(const r of e){if(r.offset>n){for(let s=0;s<r.offset-n;s++)t.push("e");o+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)t.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)t.push("r");n=r.offset,o+=r.howMany}else t.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)t.push("e");return t}function yw(i){const e="position"in i&&i.position.root.rootName=="$graveyard",t="range"in i&&i.range.root.rootName=="$graveyard";return!e&&!t}class xw{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new g("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[a,c]of this._gaps)e>a&&e<c&&(e=c),o>a&&o<c&&(o=a-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(e);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(o);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Xi extends Qe{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}function ld(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function dd(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}Xi.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"):i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"||i==="node"||i==="model:node"};const Dw=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function Ew(i,e){const t=String(i).matchAll(Dw);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Ds="$graveyard";class Mw extends K{constructor(e){super(),this.model=e,this.history=new xw,this.selection=new ln(this),this.roots=new bn({idProperty:"rootName"}),this.differ=new Aw(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Ds),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),o===null&&n.on("change",(c,l)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,{...d,range:l},d)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Ds)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new g("model-document-createroot-name-exists",this,{name:t});const n=new Xi(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Ds)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Nc(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return ud(e.start)&&ud(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function ud(i){const e=i.textNode;if(e){const t=e.data,n=i.offset-e.startOffset;return!ld(t,n)&&!dd(t,n)}return!0}class Sw extends K{constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof Oo?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const r=e instanceof Oo?e.name:e;if(r.includes(","))throw new g("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const l=s.getData(),d=s.getRange();let u=!1;return d.isEqual(t)||(s._attachLiveRange(Tn.fromRange(t)),u=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,u=!0),typeof o=="boolean"&&o!=s.affectsData&&(s._affectsData=o,u=!0),u&&this.fire(`update:${r}`,s,d,t,l),s}const a=Tn.fromRange(t),c=new Oo(r,a,n,o);return this._markers.set(r,c),this.fire(`update:${r}`,c,null,t,{...c.getData(),range:null}),c}_remove(e){const t=e instanceof Oo?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof Oo?e.name:e,n=this._markers.get(t);if(!n)throw new g("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire(`update:${t}`,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class Oo extends me(qn){constructor(e,t,n,o){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new g("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new g("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new g("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new g("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new g("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Oo.prototype.is=function(i){return i==="marker"||i==="model:marker"};class dn{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function Es(i,e){const t=gd(e),n=t.reduce((s,a)=>s+a.offsetSize,0),o=i.parent;wi(i);const r=i.index;return o._insertChild(r,t),bi(o,r+t.length),bi(o,r),new U(i,i.getShiftedBy(n))}function hd(i){if(!i.isFlat)throw new g("operation-utils-remove-range-not-flat",this);const e=i.start.parent;wi(i.start),wi(i.end);const t=e._removeChildren(i.start.index,i.end.index-i.start.index);return bi(e,i.start.index),t}function ki(i,e){if(!i.isFlat)throw new g("operation-utils-move-range-not-flat",this);const t=hd(i);return Es(e=e._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),t)}function gd(i){const e=[];(function t(n){if(typeof n=="string")e.push(new et(n));else if(n instanceof _n)e.push(new et(n.data,n.getAttributes()));else if(n instanceof Gn)e.push(n);else if(Zt(n))for(const o of n)t(o)})(i);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof et&&o instanceof et&&md(n,o)&&(e.splice(t-1,2,new et(o.data+n.data,o.getAttributes())),t--)}return e}function bi(i,e){const t=i.getChild(e-1),n=i.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&md(t,n)){const o=new et(t.data+n.data,t.getAttributes());i._removeChildren(e-1,2),i._insertChild(e-1,o)}}function wi(i){const e=i.textNode,t=i.parent;if(e){const n=i.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const r=new et(e.data.substr(0,n),e.getAttributes()),s=new et(e.data.substr(n),e.getAttributes());t._insertChild(o,[r,s])}}function md(i,e){const t=i.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const pd=function(i,e){return Al(i,e)};class wt extends dn{constructor(e,t,n,o,r){super(r),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new wt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new wt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new g("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!pd(e.getAttribute(this.key),this.oldValue))throw new g("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new g("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){pd(this.oldValue,this.newValue)||function(e,t,n){wi(e.start),wi(e.end);for(const o of e.getItems({shallow:!0})){const r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(t,n):r._removeAttribute(t),bi(r.parent,r.index)}bi(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new wt(U.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class qe extends dn{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new qe(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new qe(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new g("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new g("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Ot(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new g("move-operation-node-into-itself",this)}}_execute(){ki(U._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=ne.fromJSON(e.sourcePosition,t),o=ne.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class It extends dn{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new hi(gd(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new hi([...this.nodes].map(n=>n._clone(!0))),t=new It(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new ne(e,[0]);return new qe(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new g("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new hi([...e].map(t=>t._clone(!0))),Es(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const r of e.nodes)r.name?n.push(Qe.fromJSON(r)):n.push(et.fromJSON(r));const o=new It(ne.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class Wt extends dn{constructor(e,t,n,o,r,s){super(s),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Wt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Wt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Wt(e.name,e.oldRange?U.fromJSON(e.oldRange,t):null,e.newRange?U.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class Tt extends dn{get type(){return"noop"}clone(){return new Tt(this.baseVersion)}getReversed(){return new Tt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Yt extends dn{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new Yt(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Yt(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Qe))throw new g("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new g("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Yt(ne.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Rn extends dn{constructor(e,t,n,o,r){super(r),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Rn(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Rn(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new g("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new g("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new g("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new g("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Rn(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class ft extends dn{constructor(e,t,n,o,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new ne(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new U(this.sourcePosition,e)}clone(){return new ft(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new ne(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new tt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new g("merge-operation-source-position-invalid",this);if(!t.parent)throw new g("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new g("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;ki(U._createIn(e),this.targetPosition),ki(U._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=ne.fromJSON(e.sourcePosition,t),o=ne.fromJSON(e.targetPosition,t),r=ne.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,r,e.baseVersion)}}class tt extends dn{constructor(e,t,n,o,r){super(r),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new ne(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new U(this.splitPosition,e)}clone(){return new tt(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new ne(e,[0]);return new ft(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new g("split-operation-position-invalid",this);if(!e.parent)throw new g("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new g("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new g("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)ki(U._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Es(this.insertionPosition,t)}ki(new U(ne._createAt(e,this.splitPosition.offset),ne._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new ne(e.root,t,"toPrevious")}static fromJSON(e,t){const n=ne.fromJSON(e.splitPosition,t),o=ne.fromJSON(e.insertionPosition,t),r=e.graveyardPosition?ne.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,r,e.baseVersion)}}const An={};An[wt.className]=wt,An[It.className]=It,An[Wt.className]=Wt,An[qe.className]=qe,An[Tt.className]=Tt,An[dn.className]=dn,An[Yt.className]=Yt,An[Rn.className]=Rn,An[tt.className]=tt,An[ft.className]=ft;class Iw extends dn{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new g("detach-operation-on-document-node",this)}_execute(){hd(U._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class jn extends qn{constructor(e){super(),this.markers=new Map,this._children=new hi,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Qe.fromJSON(n)):t.push(et.fromJSON(n));return new jn(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new et(o)]:(Zt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new et(r):r instanceof _n?new et(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}jn.prototype.is=function(i){return i==="documentFragment"||i==="model:documentFragment"};class Tw{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new et(e,t)}createElement(e,t){return new Qe(e,t)}createDocumentFragment(){return new jn}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof et&&e.data=="")return;const o=ne._createAt(t,n);if(e.parent){if(bd(e.root,o.root))return void this.move(U._createOn(e),o);if(e.root.document)throw new g("model-writer-insert-forbidden-move",this);this.remove(e)}const r=o.root.document?o.root.document.version:null,s=new It(o,e,r);if(e instanceof et&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),e instanceof jn)for(const[a,c]of e.markers){const l=ne._createAt(c.root,0),d={range:new U(c.start._getCombined(l,o),c.end._getCombined(l,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(e,t,n,o){t instanceof jn||t instanceof Qe||t instanceof ne?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof jn||t instanceof Qe||t instanceof ne?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof jn||t instanceof Qe?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof jn||t instanceof Qe?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof U){const o=n.getMinimalFlatRanges();for(const r of o)fd(this,e,t,r)}else kd(this,e,t,n)}setAttributes(e,t){for(const[n,o]of Dn(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof U){const n=t.getMinimalFlatRanges();for(const o of n)fd(this,e,null,o)}else kd(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof U)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof U))throw new g("writer-move-invalid-range",this);if(!e.isFlat)throw new g("writer-move-range-not-flat",this);const o=ne._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!bd(e.root,o.root))throw new g("writer-move-different-document",this);const r=e.root.document?e.root.document.version:null,s=new qe(e.start,e.end.offset-e.start.offset,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof U?e:U._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),Nw(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Qe))throw new g("writer-merge-no-element-before",this);if(!(n instanceof Qe))throw new g("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(U._createIn(n),ne._createAt(t,"end")),this.remove(n)}_merge(e){const t=ne._createAt(e.nodeBefore,"end"),n=ne._createAt(e.nodeAfter,0),o=e.root.document.graveyard,r=new ne(o,[0]),s=e.root.document.version,a=new ft(n,e.nodeAfter.maxOffset,t,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Qe))throw new g("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new Yt(ne._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,r=e.parent;if(!r.parent)throw new g("writer-split-element-no-parent",this);if(t||(t=r.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new g("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-e.offset,c=tt.getInsertionPosition(e),l=new tt(e,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||o||(n=r,o=e.parent.nextSibling),r=(e=this.createPositionAfter(e.parent)).parent}while(r!==t);return{position:e,range:new U(ne._createAt(n,"end"),ne._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new g("writer-wrap-range-not-flat",this);const n=t instanceof Qe?t:new Qe(t);if(n.childCount>0)throw new g("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new g("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new U(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,ne._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new g("writer-unwrap-element-no-parent",this);this.move(U._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new g("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,r=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new g("writer-addmarker-marker-exists",this);if(!o)throw new g("writer-addmarker-no-range",this);return n?(vi(this,e,null,o,r),this.model.markers.get(e)):this.model.markers._set(e,o,n,r)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new g("writer-updatemarker-marker-not-exists",this);if(!t)return w("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const r=typeof t.usingOperation=="boolean",s=typeof t.affectsData=="boolean",a=s?t.affectsData:o.affectsData;if(!r&&!t.range&&!s)throw new g("writer-updatemarker-wrong-options",this);const c=o.getRange(),l=t.range?t.range:c;r&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?vi(this,n,null,l,a):(vi(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):o.managedUsingOperations?vi(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new g("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);vi(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of Dn(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=ln._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=ln._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new g("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let r=!1;if(e==="move"){const s=t;r=s.containsPosition(o.start)||s.start.isEqual(o.start)||s.containsPosition(o.end)||s.end.isEqual(o.end)}else{const s=t,a=s.nodeBefore,c=s.nodeAfter,l=o.start.parent==a&&o.start.isAtEnd,d=o.end.parent==c&&o.end.offset==0,u=o.end.nodeAfter==c,h=o.start.nodeAfter==c;r=l||d||u||h}r&&this.updateMarker(n.name,{range:o})}}}function fd(i,e,t,n){const o=i.model,r=o.document;let s,a,c,l=n.start;for(const u of n.getWalker({shallow:!0}))c=u.item.getAttribute(e),s&&a!=c&&(a!=t&&d(),l=s),s=u.nextPosition,a=c;function d(){const u=new U(l,s),h=u.root.document?r.version:null,p=new wt(u,e,a,t,h);i.batch.addOperation(p),o.applyOperation(p)}s instanceof ne&&s!=l&&a!=t&&d()}function kd(i,e,t,n){const o=i.model,r=o.document,s=n.getAttribute(e);let a,c;if(s!=t){if(n.root===n){const l=n.document?r.version:null;c=new Rn(n,e,s,t,l)}else{a=new U(ne._createBefore(n),i.createPositionAfter(n));const l=a.root.document?r.version:null;c=new wt(a,e,s,t,l)}i.batch.addOperation(c),o.applyOperation(c)}}function vi(i,e,t,n,o){const r=i.model,s=r.document,a=new Wt(e,t,n,r.markers,!!o,s.version);i.batch.addOperation(a),r.applyOperation(a)}function Nw(i,e,t,n){let o;if(i.root.document){const r=n.document,s=new ne(r.graveyard,[0]);o=new qe(i,e,s,r.version)}else o=new Iw(i,e);t.addOperation(o),n.applyOperation(o)}function bd(i,e){return i===e||i instanceof Xi&&e instanceof Xi}function Pw(i){i.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of o.getRanges()){const l=Bw(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}return a&&t.setSelection(function(c){const l=[...c],d=new Set;let u=1;for(;u<l.length;){const h=l[u],p=l.slice(0,u);for(const[f,b]of p.entries())if(!d.has(f)){if(h.isEqual(b))d.add(f);else if(h.isIntersecting(b)){d.add(f),d.add(u);const v=h.getJoined(b);l.push(v)}}u++}return l.filter((h,p)=>!d.has(p))}(s),{backward:o.isBackward}),!1}(e,i))}function Bw(i,e){return i.isCollapsed?function(t,n){const o=t.start,r=n.getNearestSelectionRange(o);if(!r){const a=o.getAncestors().reverse().find(c=>n.isObject(c));return a?U._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return o.isEqual(s)?null:new U(s)}(i,e):function(t,n){const{start:o,end:r}=t,s=n.checkChild(o,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(o),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(h,p,f){const b=h.nodeAfter&&!f.isLimit(h.nodeAfter)||f.checkChild(h,"$text"),v=p.nodeBefore&&!f.isLimit(p.nodeBefore)||f.checkChild(p,"$text");return b||v}(o,r,n)){const h=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),p=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),f=h?h.start:o,b=p?p.end:r;return new U(f,b)}}const d=c&&!c.is("rootElement"),u=l&&!l.is("rootElement");if(d||u){const h=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,p=d&&(!h||!vd(o.nodeAfter,n)),f=u&&(!h||!vd(r.nodeBefore,n));let b=o,v=r;return p&&(b=ne._createBefore(wd(c,n))),f&&(v=ne._createAfter(wd(l,n))),new U(b,v)}return null}(i,e)}function wd(i,e){let t=i,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function vd(i,e){return i&&e.isSelectable(i)}class zt extends me(ne){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new g("model-liveposition-root-not-rootelement",e);zw.call(this)}detach(){this.stopListening()}toPosition(){return new ne(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function zw(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&Lw.call(this,t)},{priority:"low"})}function Lw(i){const e=this.getTransformedByOperation(i);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}function Ow(i,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(r=>{if(!t.doNotResetEntireContent&&function(l,d){const u=l.getLimitElement(d);if(!d.containsEntireContent(u))return!1;const h=d.getFirstRange();return h.start.parent==h.end.parent?!1:l.checkChild(u,"paragraph")}(o,e))return void function(l,d){const u=l.model.schema.getLimitElement(d);l.remove(l.createRangeIn(u)),Cd(l,l.createPositionAt(u,0),d)}(r,e);const s={};if(!t.doNotAutoparagraph){const l=e.getSelectedElement();l&&Object.assign(s,o.getAttributesWithProperty(l,"copyOnReplace",!0))}const[a,c]=function(l){const d=l.root.document.model,u=l.start;let h=l.end;if(d.hasContent(l,{ignoreMarkers:!0})){const p=function(f){const b=f.parent,v=b.root.document.model.schema,M=b.getAncestors({parentFirst:!0,includeSelf:!0});for(const O of M){if(v.isLimit(O))return null;if(v.isBlock(O))return O}}(h);if(p&&h.isTouching(d.createPositionAt(p,0))){const f=d.createSelection(l);d.modifySelection(f,{direction:"backward"});const b=f.getLastPosition(),v=d.createRange(b,h);d.hasContent(v,{ignoreMarkers:!0})||(h=b)}}return[zt.fromPosition(u,"toPrevious"),zt.fromPosition(h,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),t.leaveUnmerged||(function(l,d,u){const h=l.model;if(!Ms(l.model.schema,d,u))return;const[p,f]=function(b,v){const M=b.getAncestors(),O=v.getAncestors();let Y=0;for(;M[Y]&&M[Y]==O[Y];)Y++;return[M[Y],O[Y]]}(d,u);!p||!f||(!h.hasContent(p,{ignoreMarkers:!0})&&h.hasContent(f,{ignoreMarkers:!0})?Ad(l,d,u,p.parent):_d(l,d,u,p.parent))}(r,a,c),o.removeDisallowedAttributes(a.parent.getChildren(),r)),yd(r,e,a),!t.doNotAutoparagraph&&function(l,d){const u=l.checkChild(d,"$text"),h=l.checkChild(d,"paragraph");return!u&&h}(o,a)&&Cd(r,a,e,s),a.detach(),c.detach()})}function _d(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(r,e),i.merge(e);t.parent.isEmpty;){const s=t.parent;t=i.createPositionBefore(s),i.remove(s)}Ms(i.model.schema,e,t)&&_d(i,e,t,n)}}function Ad(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(o,t);e.parent.isEmpty;){const s=e.parent;e=i.createPositionBefore(s),i.remove(s)}t=i.createPositionBefore(r),function(s,a){const c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(i,t),Ms(i.model.schema,e,t)&&Ad(i,e,t,n)}}function Ms(i,e,t){const n=e.parent,o=t.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,s,a){const c=new U(r,s);for(const l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(e,t,i)}function Cd(i,e,t,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,e),yd(i,t,i.createPositionAt(o,0))}function yd(i,e,t){e instanceof ln?i.setSelection(t):e.setTo(t)}function xd(i,e){const t=[];Array.from(i.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const r=e.createRangeOn(o);o=o.parent,e.remove(r)}})}zt.prototype.is=function(i){return i==="livePosition"||i==="model:livePosition"||i=="position"||i==="model:position"};class Rw{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new g("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?U._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new U(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=zt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new g("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=zt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=zt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Qe)||!this._canMergeLeft(e))return;const t=zt._createBefore(e);t.stickiness="toNext";const n=zt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=zt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=zt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Qe)||!this._canMergeRight(e))return;const t=zt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new g("insertcontent-invalid-insertion-position",this);this.position=ne._createAt(t.nodeBefore,"end");const n=zt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=zt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=zt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Qe&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Qe&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Dd(i,e,t="auto"){const n=i.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=At(i.getSelectedBlocks());if(!o)return e.createRange(i.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const r=e.createPositionAfter(o);return i.focus.isTouching(r)?e.createRange(r):e.createRange(e.createPositionBefore(o))}function jw(i,e,t,n,o={}){if(!i.schema.isObject(e))throw new g("insertobject-element-not-an-object",i,{object:e});let r;r=t?t instanceof In||t instanceof ln?t:i.createSelection(t,n):i.document.selection;let s=r;o.findOptimalPosition&&i.schema.isBlock(e)&&(s=i.createSelection(Dd(r,i,o.findOptimalPosition)));const a=At(r.getSelectedBlocks()),c={};return a&&Object.assign(c,i.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),i.change(l=>{s.isCollapsed||i.deleteContent(s,{doNotAutoparagraph:!0});let d=e;const u=s.anchor.parent;!i.schema.checkChild(u,e)&&i.schema.checkChild(u,"paragraph")&&i.schema.checkChild("paragraph",e)&&(d=l.createElement("paragraph"),l.insert(e,d)),i.schema.setAllowedAttributes(d,c,l);const h=i.insertContent(d,s);return h.isCollapsed||o.setSelection&&function(p,f,b,v){const M=p.model;if(b=="after"){let O=f.nextSibling;!(O&&M.schema.checkChild(O,"$text"))&&M.schema.checkChild(f.parent,"paragraph")&&(O=p.createElement("paragraph"),M.schema.setAllowedAttributes(O,v,p),M.insertContent(O,p.createPositionAfter(f))),O&&p.setSelection(O,0)}else{if(b!="on")throw new g("insertobject-invalid-place-parameter-value",M);p.setSelection(f,"on")}}(l,e,o.setSelection,c),h})}const Ed=' ,.?!:;"-()';function Fw(i,e){const{isForward:t,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:s}=i,{type:a,item:c,nextPosition:l}=e;if(a=="text")return i.unit==="word"?function(d,u){let h=d.position.textNode;if(h){let p=d.position.offset-h.startOffset;for(;!Uw(h.data,p,u)&&!Hw(h,p,u);){d.next();const f=u?d.position.nodeAfter:d.position.nodeBefore;if(f&&f.is("$text")){const b=f.data.charAt(u?0:f.data.length-1);Ed.includes(b)||(d.next(),h=d.position.textNode)}p=d.position.offset-h.startOffset}}return d.position}(n,t):function(d,u,h){const p=d.position.textNode;if(p){const f=p.data;let b=d.position.offset-p.startOffset;for(;ld(f,b)||u=="character"&&dd(f,b)||h&&Ew(f,b);)d.next(),b=d.position.offset-p.startOffset}return d.position}(n,o,s);if(a==(t?"elementStart":"elementEnd")){if(r.isSelectable(c))return ne._createAt(c,t?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(l,"$text"))return l}}function Vw(i,e){const t=i.root,n=ne._createAt(t,e?"end":0);return e?new U(i,n):new U(n,i)}function Uw(i,e,t){const n=e+(t?0:-1);return Ed.includes(i.charAt(n))}function Hw(i,e,t){return e===(t?i.endOffset:0)}class $w extends L{constructor(){super(),this.markers=new Sw,this.document=new Mw(this),this.schema=new rw,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),Pw(this),this.document.registerPostFixer(Xl)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Lo,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){g.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Lo):e instanceof Lo||(e=new Lo(e)):e=new Lo,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){g.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,r,s,a){return o.change(c=>{let l;l=s?s instanceof In||s instanceof ln?s:c.createSelection(s,a):o.document.selection,l.isCollapsed||o.deleteContent(l,{doNotAutoparagraph:!0});const d=new Rw(o,c,l.anchor);let u;u=r.is("documentFragment")?r.getChildren():[r],d.handleNodes(u);const h=d.getSelectionRange();h&&(l instanceof ln?c.setSelection(h):l.setTo(h));const p=d.getAffectedRange()||o.createRange(l.anchor);return d.destroy(),p})}(this,e,t,n)}insertObject(e,t,n,o){return jw(this,e,t,n,o)}deleteContent(e,t){Ow(this,e,t)}modifySelection(e,t){(function(n,o,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=!!r.treatEmojiAsSingleUnit,d=o.focus,u=new On({boundaries:Vw(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),h={walker:u,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:l};let p;for(;p=u.next();){if(p.done)return;const f=Fw(h,p.value);if(f)return void(o instanceof ln?n.change(b=>{b.setSelectionFocus(f)}):o.setFocus(f))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const r=o.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c);let d;d=s.start.parent==s.end.parent?s:o.createRange(o.createPositionAt(l,s.start.path[c.length]),o.createPositionAt(l,s.end.path[c.length]+1));const u=d.end.offset-d.start.offset;for(const h of d.getItems({shallow:!0}))h.is("$textProxy")?o.appendText(h.data,h.getAttributes(),r):o.append(o.cloneElement(h,!0),r);if(d!=s){const h=s._getTransformedByMove(d.start,o.createPositionAt(r,0),u)[0],p=o.createRange(o.createPositionAt(r,0),h.start);xd(o.createRange(h.end,o.createPositionAt(r,"end")),o),xd(p,o)}return r})}(this,e)}hasContent(e,t={}){const n=e instanceof U?e:U._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=t;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!o||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new ne(e,t,n)}createPositionAt(e,t){return ne._createAt(e,t)}createPositionAfter(e){return ne._createAfter(e)}createPositionBefore(e){return ne._createBefore(e)}createRange(e,t){return new U(e,t)}createRangeIn(e){return U._createIn(e)}createRangeOn(e){return U._createOn(e)}createSelection(...e){return new In(...e)}createBatch(e){return new Lo(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return An[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Tw(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class Ww extends Sn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(r,s)=>{this.editor.execute(o),s()}}super.set(e,t,n)}}class Md{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new gk({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new Sc(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new $r(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new ow,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new $w;const o=new $k;this.data=new vw(this.model,o),this.editing=new nw(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new _w([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Ww(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new g("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new g("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new g("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],r=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,r)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){g.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}ke(Md,G);class Yw{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Ss(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new g("componentfactory-item-missing",this,{name:e});return this._components.get(Ss(e)).callback(this.editor.locale)}has(e){return this._components.has(Ss(e))}}function Ss(i){return String(i).toLowerCase()}class ko extends bn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new g("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const r of e)o.delegate(r).to(t)}),this.on("remove",(n,o)=>{for(const r of e)o.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}class en{constructor(e){Object.assign(this,Nd(Td(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new g("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)tr(n)?yield n:Is(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new qw({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,r)=>new Sd({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:r})}}static extend(e,t){if(e._isRendered)throw new g("template-extend-render",[this,e]);Ld(e,Nd(Td(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new g("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),er(this.text)?this._bindToObservable({schema:this.text,updater:Gw(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,o,r;if(!this.attributes)return;const s=e.node,a=e.revertData;for(t in this.attributes)if(o=s.getAttribute(t),n=this.attributes[t],a&&(a.attributes[t]=o),r=$(n[0])&&n[0].ns?n[0].ns:null,er(n)){const c=r?n[0].value:n;a&&Od(t)&&c.unshift(o),this._bindToObservable({schema:c,updater:Kw(s,t,r),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(a&&o&&Od(t)&&n.unshift(o),n=n.map(c=>c&&c.value||c).reduce((c,l)=>c.concat(l),[]).reduce(Bd,""),Ro(n)||s.setAttributeNS(r,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const r=e[o];er(r)?this._bindToObservable({schema:[r],updater:Qw(n,o),data:t}):n.style[o]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let r=0;for(const s of this.children)if(Ts(s)){if(!o){s.setParent(t);for(const a of s)n.appendChild(a.element)}}else if(tr(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(Bo(s))n.appendChild(s);else if(o){const a={children:[],bindings:[],attributes:{}};e.revertData.children.push(a),s._renderNode({node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[r,s]=t.split("@");return o.activateDomEventListener(r,s,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Id(e,t,n);const r=e.filter(s=>!Ro(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(e,t,n));o&&o.bindings.push(r)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const o of n)o();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const o=t.attributes[n];o===null?e.removeAttribute(n):e.setAttribute(n,o)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}ke(en,me);class _i{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Id(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class qw extends _i{activateDomEventListener(e,t,n){const o=(r,s)=>{t&&!s.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Sd extends _i{getValue(e){return!Ro(super.getValue(e))&&(this.valueIfTrue||!0)}}function er(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(er):i instanceof _i)}function Id(i,e,{node:t}){let n=function(o,r){return o.map(s=>s instanceof _i?s.getValue(r):s)}(i,t);n=i.length==1&&i[0]instanceof Sd?n[0]:n.reduce(Bd,""),Ro(n)?e.remove():e.set(n)}function Gw(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function Kw(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function Qw(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function Td(i){return Mc(i,e=>{if(e&&(e instanceof _i||Is(e)||tr(e)||Ts(e)))return e})}function Nd(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=St(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)Pd(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=St(t[n].value)),Pd(t,n)}(i.attributes);const e=[];if(i.children)if(Ts(i.children))e.push(i.children);else for(const t of i.children)Is(t)||tr(t)||Bo(t)?e.push(t):e.push(new en(t));i.children=e}return i}function Pd(i,e){i[e]=St(i[e])}function Bd(i,e){return Ro(e)?i:Ro(i)?e:`${i} ${e}`}function zd(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function Ld(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),zd(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),zd(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new g("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)Ld(i.children[t++],n)}}function Ro(i){return!i&&i!==0}function tr(i){return i instanceof je}function Is(i){return i instanceof en}function Ts(i){return i instanceof ko}function Od(i){return i=="class"||i=="style"}var Rd=E(4793),Zw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Rd.Z,Zw),Rd.Z.locals;class je{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new bn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=en.bind(this,this)}createCollection(e){const t=new ko(e);return this._viewCollections.add(t),t}registerChild(e){Zt(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Zt(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new en(e)}extendTemplate(e){en.extend(this.template,e)}render(){if(this.isRendered)throw new g("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function jd({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){eo(e)&&(e=e()),eo(n)&&(n=n());const s=function(h){return h&&h.parentNode?h.offsetParent===Ve.document.body?null:h.offsetParent:null}(i),a=new ot(i),c=new ot(e);let l;const d=o&&function(h){h=Object.assign({top:0,bottom:0,left:0,right:0},h);const p=new ot(Ve.window);return p.top+=h.top,p.height-=h.top,p.bottom-=h.bottom,p.height-=h.bottom,p}(r)||null,u={targetRect:c,elementRect:a,positionedElementAncestor:s,viewportRect:d};if(n||o){const h=n&&new ot(n).getVisible();Object.assign(u,{limiterRect:h,viewportRect:d}),l=function(p,f){const{elementRect:b}=f,v=b.getArea(),M=p.map(we=>new Ns(we,f)).filter(we=>!!we.name);let O=0,Y=null;for(const we of M){const{limiterIntersectionArea:Ne,viewportIntersectionArea:nt}=we;if(Ne===v)return we;const Ue=nt**2+Ne**2;Ue>O&&(O=Ue,Y=we)}return Y}(t,u)||new Ns(t[0],u)}else l=new Ns(t[0],u);return l}function Fd(i){const{scrollX:e,scrollY:t}=Ve.window;return i.clone().moveBy(e,t)}ke(je,ho),ke(je,G);class Ns{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Fd(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Fd(new ot(t)),o=Ml(t);let r=0,s=0;r-=n.left,s-=n.top,r+=t.scrollLeft,s+=t.scrollTop,r-=o.left,s-=o.top,e.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Ps(i){return e=>e+i}var Vd=E(8793),Jw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Vd.Z,Jw),Vd.Z.locals;const Ud=Ps("px"),Hd=Ve.document.body;class Ht extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Ud),left:t.to("left",Ud)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Ht.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:Hd,fitInViewport:!0},e),o=Ht._getOptimalPosition(n),r=parseInt(o.left),s=parseInt(o.top),{name:a,config:c={}}=o,{withArrow:l=!0}=c;Object.assign(this,{top:s,left:r,position:a,withArrow:l})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=Bs(e.target),n=e.limiter?Bs(e.limiter):Hd;this.listenTo(Ve.document,"scroll",(o,r)=>{const s=r.target,a=t&&s.contains(t),c=n&&s.contains(n);!a&&!c&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Ve.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Ve.document,"scroll"),this.stopListening(Ve.window,"resize")}}function Bs(i){return zn(i)?i:Gi(i)?i.commonAncestorContainer:typeof i=="function"?Bs(i()):null}function $d({sideOffset:i=Ht.arrowSideOffset,heightOffset:e=Ht.arrowHeightOffset,stickyVerticalOffset:t=Ht.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(s,a)=>({top:o(s,a),left:s.left-a.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left-a.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(s,a)=>({top:o(s,a),left:s.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.right-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(s,a)=>({top:o(s,a),left:s.right-a.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.right-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(s,a)=>({top:o(s,a),left:s.right-a.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(s,a)=>({top:r(s),left:s.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(s,a)=>({top:r(s),left:s.left-a.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(s,a)=>({top:r(s),left:s.left-a.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(s,a)=>({top:r(s),left:s.left+s.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left+s.width/2-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left+s.width/2-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(s,a)=>({top:r(s),left:s.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.right-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(s,a)=>({top:r(s),left:s.right-a.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.right-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(s,a)=>({top:r(s),left:s.right-a.width+i,name:"arrow_ne",...n&&{config:n}}),westArrowEast:(s,a)=>({top:s.top+s.height/2-a.height/2,left:s.left-a.width-e,name:"arrow_e",...n&&{config:n}}),eastArrowWest:(s,a)=>({top:s.top+s.height/2-a.height/2,left:s.right+e,name:"arrow_w",...n&&{config:n}}),viewportStickyNorth:(s,a,c)=>s.getIntersection(c)?{top:c.top+t,left:s.left+s.width/2-a.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(s,a){return s.top-a.height-e}function r(s){return s.bottom+e}}Ht.arrowSideOffset=25,Ht.arrowHeightOffset=10,Ht.stickyVerticalOffset=20,Ht._getOptimalPosition=jd,Ht.defaultPositions=$d();var Wd=E(3332),Xw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Wd.Z,Xw),Wd.Z.locals;const Yd="ck-tooltip";class Ct{constructor(e){if(Ct._editors.add(e),Ct._instance)return Ct._instance;Ct._instance=this,this.tooltipTextView=new je(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Ht(e.locale),this.balloonPanelView.class=Yd,this.balloonPanelView.content.add(this.tooltipTextView),this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=ui(this._pinTooltip,600),this.listenTo(Ve.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Ve.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Ve.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Ve.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Ve.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){Ct._editors.delete(e),this.stopListening(e.ui),Ct._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Ct._instance=null)}_onEnterOrFocus(e,{target:t}){const n=zs(t);var o;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(o=n).dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!zn(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const o=zs(t),r=zs(n);o&&o!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:o}){const r=At(Ct._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:Ct.getPositioningFunctions(n)}),this.balloonPanelView.class=[Yd,o].filter(s=>s).join(" ");for(const s of Ct._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of Ct._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null}_updateTooltipPosition(){zo(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Ct.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}static getPositioningFunctions(e){const t=Ct.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}}function zs(i){return zn(i)?i.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}ke(Ct,ho),Ct.defaultBalloonPositions=$d({heightOffset:5,sideOffset:13}),Ct._instance=null,Ct._editors=new Set;class qd{constructor(e){this.editor=e,this.componentFactory=new Yw(e),this.focusTracker=new vn,this.tooltipManager=new Ct(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(t.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&o||(o=this._getFocusableCandidateToolbarDefinitions(c));for(let l=0;l<o.length;l++){const d=o.shift();if(o.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),e.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):e.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(zo(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>Gd(t)-Gd(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!zo(t.element)&&(t.focus(),!0)}}function Gd(i){const{toolbarView:e,options:t}=i;let n=10;return zo(e.element)&&n--,t.isContextual&&n--,n}ke(qd,G);const ev={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},tv=ev;function nv(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}const ov={updateSourceElement(i=this.data.get()){if(!this.sourceElement)throw new g("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;nv(this.sourceElement,e||t?i:"")}};class Kd extends si{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new bn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new g("pendingactions-add-invalid-message",this);const t=Object.create(G);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Qd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',un={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:Qd};function Ls({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!e())return;const s=typeof r.composedPath=="function"?r.composedPath():[];for(const a of n)if(a.contains(r.target)||s.includes(a))return;t()})}function Os(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Rs({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}class iv extends ko{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new en({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=El(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Zd=E(6574),rv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Zd.Z,rv),Zd.Z.locals;class nr extends je{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t);this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var Jd=E(4906),sv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Jd.Z,sv),Jd.Z.locals;class lt extends je{constructor(e){super(e);const t=this.bindTemplate,n=y();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new nr,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-pressed":t.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};Ke.isSafari&&(o.on.mousedown=t.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new je,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>qc(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=qc(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Xd=E(5332),av={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Xd.Z,av),Xd.Z.locals;class or extends lt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var eu=E(6781),cv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(eu.Z,cv),eu.Z.locals;const tu='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class nu extends lt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new nr;return e.content=tu,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var ou=E(7686),lv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(ou.Z,lv),ou.Z.locals;class iu extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Sn,this.focusTracker=new vn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new lt;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new lt,t=e.bindTemplate;return e.icon=tu,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class dv extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():w("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var ru=E(5485),uv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(ru.Z,uv),ru.Z.locals;class jo extends je{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Sn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=jo._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:l,northMiddleWest:d}=jo.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,a,c,e,r,s,l,d,t]:[o,n,c,a,e,s,r,d,l,t]}}jo.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},jo._getOptimalPosition=jd;class Fo{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(r,s)=>{this[t](),s()})}}get first(){return this.focusables.find(js)||null}get last(){return this.focusables.filter(js).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const r=this.focusables.get(o);if(js(r))return r;o=(o+n+e)%n}while(o!==t);return null}}function js(i){return!(!i.focus||!zo(i.element))}class su extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class hv extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function au(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var cu=E(5542),gv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(cu.Z,gv),cu.Z.locals;class Fs extends je{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new vn,this.keystrokes=new Sn,this.set("class"),this.set("isCompact",!1),this.itemsView=new mv(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=e.uiLanguageDirection==="rtl";this._focusCycler=new Fo({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new fv(this):new pv(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=au(e),o=n.items.filter((s,a,c)=>s==="|"||n.removeItems.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(w("toolbarview-line-break-ignored-when-grouping-items",c),!1):!!t.has(s)||(w("toolbarview-item-unavailable",{name:s}),!1))),r=this._cleanSeparators(o).map(s=>s==="|"?new su:s==="-"?new hv:t.create(s));this.items.addMany(r)}_cleanSeparators(e){const t=s=>s!=="-"&&s!=="|",n=e.length,o=e.findIndex(t),r=n-e.slice().reverse().findIndex(t);return e.slice(o,r).filter((s,a,c)=>t(s)?!0:!(a>0&&c[a-1]===s))}}class mv extends je{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class pv{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class fv{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index;for(const r of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(r):this.ungroupedItems.remove(r);for(let r=o;r<o+n.added.length;r++){const s=n.added[r-o];r>this.ungroupedItems.length?this.groupedItems.add(s,r-this.ungroupedItems.length):this.ungroupedItems.add(s,r)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!zo(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new ot(e.lastChild),o=new ot(e);if(!this.cachedPadding){const r=Ve.window.getComputedStyle(e),s=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new ht(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new su),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=bo(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",gu(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Qd}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var lu=E(1046),kv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(lu.Z,kv),lu.Z.locals;class bv extends je{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new vn,this.keystrokes=new Sn,this._focusCycler=new Fo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class du extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class wv extends je{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var uu=E(7339),vv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(uu.Z,vv),uu.Z.locals;var hu=E(3949),_v={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(hu.Z,_v),hu.Z.locals;function bo(i,e=nu){const t=new e(i),n=new dv(i),o=new jo(i,t,n);return t.bind("isEnabled").to(o),t instanceof nu?t.bind("isOn").to(o,"isOpen"):t.arrowView.bind("isOn").to(o,"isOpen"),function(r){(function(s){s.on("render",()=>{Ls({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof or||(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r)}(o),o}function gu(i,e,t={}){const n=i.locale,o=n.t,r=i.toolbarView=new Fs(n);r.set("ariaLabel",o("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(s=>r.items.add(s)),t.enableActiveItemFocusOnDropdownOpen&&pu(i,()=>r.items.find(s=>s.isOn)),i.panelView.children.add(r),r.items.delegate("execute").to(i)}function mu(i,e){const t=i.locale,n=i.listView=new bv(t);n.items.bindTo(e).using(({type:o,model:r})=>{if(o==="separator")return new wv(t);if(o==="button"||o==="switchbutton"){const s=new du(t);let a;return a=o==="button"?new lt(t):new or(t),a.bind(...Object.keys(r)).to(r),a.delegate("execute").to(s),s.children.add(a),s}}),i.panelView.children.add(n),n.items.delegate("execute").to(i),pu(i,()=>n.items.find(o=>o instanceof du&&o.children.first.isOn))}function pu(i,e){i.on("change:isOpen",()=>{if(!i.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():w("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:"low"})}var fu=E(9688),Av={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(fu.Z,Av),fu.Z.locals;class Cv extends je{constructor(e){super(e),this.body=new iv(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var ku=E(3662),yv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(ku.Z,yv),ku.Z.locals;class bu extends je{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${y()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class xv extends Cv{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new bu;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class Dv extends je{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const r=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):t(o)})}(this):t(this)}}class Ev extends Dv{constructor(e,t,n,o={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var wu=E(8847),Mv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(wu.Z,Mv),wu.Z.locals;var vu=E(4879),Sv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(vu.Z,Sv),vu.Z.locals;class Iv extends je{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new vn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class Tv extends Iv{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var _u=E(2577),Nv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(_u.Z,Nv),_u.Z.locals;class Vs extends je{constructor(e,t){super(e);const n=`ck-labeled-field-view-${y()}`,o=`ck-labeled-field-view-status-${y()}`;this.fieldView=t(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new bu(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new je(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function Us(i,e,t){const n=new Tv(i.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class Hs extends si{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class $s{constructor(e,t){t&&yl(this,t),e&&this.set(e)}}ke($s,G);var Au=E(4650),Pv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Au.Z,Pv),Au.Z.locals;var Cu=E(7676),Bv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Cu.Z,Bv),Cu.Z.locals;const ir=Ps("px");class rr extends R{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Ht(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new g("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new g("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new g("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new zv(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new Lv(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class zv extends je{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new vn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new lt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class Lv extends je{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",ir),left:n.to("left",ir),width:n.to("width",ir),height:n.to("height",ir)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new je;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new ot(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var yu=E(5868),Ov={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(yu.Z,Ov),yu.Z.locals;const Ai=Ps("px");class Rv extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new en({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Ai(this._panelRect.height):null)}}}).render(),this._contentPanel=new en({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Ai(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Ai(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Ai(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Ve.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Ai(-Ve.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var xu=E(9695),jv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(xu.Z,jv),xu.Z.locals;var Du=E(4717),Fv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(Du.Z,Fv),Du.Z.locals;const sr=new WeakMap;function Eu(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,s=e.document;sr.has(s)||(sr.set(s,new Map),s.registerPostFixer(a=>Mu(s,a))),sr.get(s).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(a=>Mu(s,a))}function Vv(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function Mu(i,e){const t=sr.get(i),n=[];let o=!1;for(const[r,s]of t)s.isDirectHost&&(n.push(r),Su(e,r,s)&&(o=!0));for(const[r,s]of t){if(s.isDirectHost)continue;const a=Uv(r);a&&(n.includes(a)||(s.hostElement=a,Su(e,r,s)&&(o=!0)))}return o}function Su(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||e.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(h=>!h.is("uiElement")))return!1;if(c)return!0;const d=a.document;if(!d.isFocused)return!0;const u=d.selection.anchor;return!!u&&u.parent!==a}(r,t.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(i,r)&&(s=!0):Vv(i,r)&&(s=!0),s}function Uv(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const Ws=new Map;function Ye(i,e,t){let n=Ws.get(i);n||(n=new Map,Ws.set(i,n)),n.set(e,t)}function Hv(i){return[i]}function Iu(i,e,t={}){const n=function(o,r){const s=Ws.get(o);return s&&s.has(r)?s.get(r):Hv}(i.constructor,e.constructor);try{return n(i=i.clone(),e,t)}catch(o){throw o}}function $v(i,e,t){i=i.slice(),e=e.slice();const n=new Wv(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(e);const o=n.originalOperations;if(i.length==0||e.length==0)return{operationsA:i,operationsB:e,originalOperations:o};const r=new WeakMap;for(const c of i)r.set(c,0);const s={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:e.length};let a=0;for(;a<i.length;){const c=i[a],l=r.get(c);if(l==e.length){a++;continue}const d=e[l],u=Iu(c,d,n.getContext(c,d,!0)),h=Iu(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(u,c),n.setOriginalOperations(h,d);for(const p of u)r.set(p,l+h.length);i.splice(a,1,...u),e.splice(l,1,...h)}if(t.padWithNoOps){const c=i.length-s.originalOperationsACount,l=e.length-s.originalOperationsBCount;Nu(i,l-c),Nu(e,c-l)}return Tu(i,s.nextBaseVersionB),Tu(e,s.nextBaseVersionA),{operationsA:i,operationsB:e,originalOperations:o}}class Wv{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){if(e instanceof qe)t instanceof ft?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof qe&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof tt){if(t instanceof ft)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof qe)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=U._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,r=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:r})}}}else if(e instanceof ft)t instanceof ft?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof tt&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof Wt){const n=e.newRange;if(!n)return;if(t instanceof qe){const o=U._createFromPositionAndShift(t.sourcePosition,t.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),s=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!s||o.containsRange(n)||this._setRelation(e,t,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(t instanceof ft){const o=n.start.isEqual(t.targetPosition),r=n.start.isEqual(t.deletionPosition),s=n.end.isEqual(t.deletionPosition),a=n.end.isEqual(t.sourcePosition);(o||r||s||a)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const r=this.originalOperations.get(e),s=this._relations.get(r);return s&&s.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),r=this.originalOperations.get(t);let s=this._relations.get(o);s||(s=new Map,this._relations.set(o,s)),s.set(r,n)}}function Tu(i,e){for(const t of i)t.baseVersion=e++}function Nu(i,e){for(let t=0;t<e;t++)i.push(new Tt(0))}function Pu(i,e,t){const n=i.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new U(i.position,i.position.getShiftedBy(i.howMany));return new wt(o,e,n,t,0)}function Bu(i,e){return i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Vo(i,e){const t=[];for(let n=0;n<i.length;n++){const o=i[n],r=new qe(o.start,o.end.offset-o.start.offset,e,0);t.push(r);for(let s=n+1;s<i.length;s++)i[s]=i[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return t}Ye(wt,wt,(i,e,t)=>{if(i.key===e.key&&i.range.start.hasSameParentAs(e.range.start)){const n=i.range.getDifference(e.range).map(r=>new wt(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new wt(o,e.key,e.newValue,i.newValue,0)),n.length==0?[new Tt(0)]:n}return[i]}),Ye(wt,It,(i,e)=>{if(i.range.start.hasSameParentAs(e.position)&&i.range.containsPosition(e.position)){const t=i.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new wt(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(e.shouldReceiveAttributes){const n=Pu(e,i.key,i.oldValue);n&&t.unshift(n)}return t}return i.range=i.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[i]}),Ye(wt,ft,(i,e)=>{const t=[];i.range.start.hasSameParentAs(e.deletionPosition)&&(i.range.containsPosition(e.deletionPosition)||i.range.start.isEqual(e.deletionPosition))&&t.push(U._createFromPositionAndShift(e.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new wt(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),Ye(wt,qe,(i,e)=>function(n,o){const r=U._createFromPositionAndShift(o.sourcePosition,o.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let l of a){l=l._getTransformedByDeletion(o.sourcePosition,o.howMany);const d=o.getMovedRangeStart(),u=l.start.hasSameParentAs(d),h=l._getTransformedByInsertion(d,o.howMany,u);c.push(...h)}return s&&c.push(s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),c}(i.range,e).map(n=>new wt(n,i.key,i.oldValue,i.newValue,i.baseVersion))),Ye(wt,tt,(i,e)=>{if(i.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(e.splitPosition)&&i.range.containsPosition(e.splitPosition)){const t=i.clone();return t.range=new U(e.moveTargetPosition.clone(),i.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),i.range.end=e.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,t]}return i.range=i.range._getTransformedBySplitOperation(e),[i]}),Ye(It,wt,(i,e)=>{const t=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(i.position)){const n=Pu(i,e.key,e.newValue);n&&t.push(n)}return t}),Ye(It,It,(i,e,t)=>(i.position.isEqual(e.position)&&t.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(e)),[i])),Ye(It,qe,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),Ye(It,tt,(i,e)=>(i.position=i.position._getTransformedBySplitOperation(e),[i])),Ye(It,ft,(i,e)=>(i.position=i.position._getTransformedByMergeOperation(e),[i])),Ye(Wt,It,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(e)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(e)[0]),[i])),Ye(Wt,Wt,(i,e,t)=>{if(i.name==e.name){if(!t.aIsStrong)return[new Tt(0)];i.oldRange=e.newRange?e.newRange.clone():null}return[i]}),Ye(Wt,ft,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(e)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(e)),[i])),Ye(Wt,qe,(i,e,t)=>{if(i.oldRange&&(i.oldRange=U._createFromRanges(i.oldRange._getTransformedByMoveOperation(e))),i.newRange){if(t.abRelation){const n=U._createFromRanges(i.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(i.newRange.start))return i.newRange.end=n.end,i.newRange.start.path=t.abRelation.path,[i];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=t.abRelation.path,[i]}i.newRange=U._createFromRanges(i.newRange._getTransformedByMoveOperation(e))}return[i]}),Ye(Wt,tt,(i,e,t)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(e)),i.newRange){if(t.abRelation){const n=i.newRange._getTransformedBySplitOperation(e);return i.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?i.newRange.start=ne._createAt(e.insertionPosition):i.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(i.newRange.start=ne._createAt(e.moveTargetPosition)),i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?i.newRange.end=ne._createAt(e.moveTargetPosition):i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?i.newRange.end=ne._createAt(e.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(e)}return[i]}),Ye(ft,It,(i,e)=>(i.sourcePosition.hasSameParentAs(e.position)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(e),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e),[i])),Ye(ft,ft,(i,e,t)=>{if(i.sourcePosition.isEqual(e.sourcePosition)&&i.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new ne(e.graveyardPosition.root,n),i.howMany=0,[i]}return[new Tt(0)]}if(i.sourcePosition.isEqual(e.sourcePosition)&&!i.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const s=e.targetPosition._getTransformedByMergeOperation(e),a=i.targetPosition._getTransformedByMergeOperation(e);return[new qe(s,i.howMany,a,0)]}return[new Tt(0)]}return i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(e),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),i.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),Ye(ft,qe,(i,e,t)=>{const n=U._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&i.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new Tt(0)]:(i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition.hasSameParentAs(e.sourcePosition)&&(i.howMany-=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(e),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(e),i.graveyardPosition.isEqual(e.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)),[i])}),Ye(ft,tt,(i,e,t)=>{if(e.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),i.deletionPosition.isEqual(e.graveyardPosition)&&(i.howMany=e.howMany)),i.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&i.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),[i]}if(i.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i];if(t.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=e.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}return i.sourcePosition.hasSameParentAs(e.splitPosition)&&(i.howMany=e.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}),Ye(qe,It,(i,e)=>{const t=U._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(e,!1)[0];return i.sourcePosition=t.start,i.howMany=t.end.offset-t.start.offset,i.targetPosition.isEqual(e.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e)),[i]}),Ye(qe,qe,(i,e,t)=>{const n=U._createFromPositionAndShift(i.sourcePosition,i.howMany),o=U._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=t.aIsStrong,a=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?a=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(a=!1),r=i.targetPosition.isEqual(e.targetPosition)&&a?i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):i.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Bu(i,e)&&Bu(e,i))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Vo([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Vo([n],r);const c=Ot(i.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Vo([n],r);i.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?i.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(o);for(const h of d){h.start=h.start._getTransformedByDeletion(e.sourcePosition,e.howMany),h.end=h.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const p=Ot(h.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",f=h._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,p);l.push(...f)}const u=n.getIntersection(o);return u!==null&&s&&(u.start=u.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.end=u.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),l.length===0?l.push(u):l.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),l.length===0?[new Tt(i.baseVersion)]:Vo(l,r)}),Ye(qe,tt,(i,e,t)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(e));const o=U._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let s=new U(e.splitPosition,o.end);return s=s._getTransformedBySplitOperation(e),Vo([new U(o.start,e.splitPosition),s],n)}i.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),i.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=i.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const s=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);i.howMany>1&&s&&!t.aWasUndone&&r.push(U._createFromPositionAndShift(e.insertionPosition,1))}return Vo(r,n)}),Ye(qe,ft,(i,e,t)=>{const n=U._createFromPositionAndShift(i.sourcePosition,i.howMany);if(e.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(i.type!="remove"||t.forceWeakRemove){if(i.howMany==1)return t.bWasUndone?(i.sourcePosition=e.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]):[new Tt(0)]}else if(!t.aWasUndone){const r=[];let s=e.graveyardPosition.clone(),a=e.targetPosition._getTransformedByMergeOperation(e);i.howMany>1&&(r.push(new qe(i.sourcePosition,i.howMany-1,i.targetPosition,0)),s=s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const c=e.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),l=new qe(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);const u=new ne(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);const h=new qe(a,e.howMany,u,0);return r.push(l),r.push(h),r}}const o=U._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(e);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]}),Ye(Yt,It,(i,e)=>(i.position=i.position._getTransformedByInsertOperation(e),[i])),Ye(Yt,ft,(i,e)=>i.position.isEqual(e.deletionPosition)?(i.position=e.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(e),[i])),Ye(Yt,qe,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),Ye(Yt,Yt,(i,e,t)=>{if(i.position.isEqual(e.position)){if(!t.aIsStrong)return[new Tt(0)];i.oldName=e.newName}return[i]}),Ye(Yt,tt,(i,e)=>{if(Ot(i.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new Yt(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,t]}return i.position=i.position._getTransformedBySplitOperation(e),[i]}),Ye(Rn,Rn,(i,e,t)=>{if(i.root===e.root&&i.key===e.key){if(!t.aIsStrong||i.newValue===e.newValue)return[new Tt(0)];i.oldValue=e.newValue}return[i]}),Ye(tt,It,(i,e)=>(i.splitPosition.hasSameParentAs(e.position)&&i.splitPosition.offset<e.position.offset&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(e),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(e),[i])),Ye(tt,ft,(i,e,t)=>{if(!i.graveyardPosition&&!t.bWasUndone&&i.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new ne(e.graveyardPosition.root,n),r=tt.getInsertionPosition(new ne(e.graveyardPosition.root,n)),s=new tt(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),i.graveyardPosition=s.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[s,i]}return i.splitPosition.hasSameParentAs(e.deletionPosition)&&!i.splitPosition.isAfter(e.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),Ye(tt,qe,(i,e,t)=>{const n=U._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.graveyardPosition){const r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!t.bWasUndone&&r){const s=i.splitPosition._getTransformedByMoveOperation(e),a=i.graveyardPosition._getTransformedByMoveOperation(e),c=a.path.slice();c.push(0);const l=new ne(a.root,c);return[new qe(s,i.howMany,l,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)}const o=i.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return i.howMany+=e.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:r,offset:s}=t.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(s),[i]}if(i.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.splitPosition)){const r=e.howMany-(i.splitPosition.offset-e.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany),i.splitPosition=e.sourcePosition.clone(),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]}return e.sourcePosition.isEqual(e.targetPosition)||(i.splitPosition.hasSameParentAs(e.sourcePosition)&&i.splitPosition.offset<=e.sourcePosition.offset&&(i.howMany-=e.howMany),i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(e),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(e):i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]}),Ye(tt,tt,(i,e,t)=>{if(i.splitPosition.isEqual(e.splitPosition)){if(!i.graveyardPosition&&!e.graveyardPosition)return[new Tt(0)];if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition))return[new Tt(0)];if(t.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e),[i]}if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const s=[];return e.howMany&&s.push(new qe(e.moveTargetPosition,e.howMany,e.splitPosition,0)),i.howMany&&s.push(new qe(i.splitPosition,i.howMany,i.moveTargetPosition,0)),s}return[new Tt(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e)),i.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return i.howMany++,[i];if(e.splitPosition.isEqual(i.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new ne(e.insertionPosition.root,n);return[i,new qe(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(e.splitPosition)&&i.splitPosition.offset<e.splitPosition.offset&&(i.howMany-=e.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]});class Yv extends Yn{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class ar extends Yn{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Uo{constructor(e){this.document=e}createDocumentFragment(e){return new uo(this.document,e)}createElement(e,t,n){return new Jt(this.document,e,t,n)}createText(e){return new Xe(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Jt(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){le(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return he._createAt(e,t)}createPositionAfter(e){return he._createAfter(e)}createPositionBefore(e){return he._createBefore(e)}createRange(e,t){return new ze(e,t)}createRangeOn(e){return ze._createOn(e)}createRangeIn(e){return ze._createIn(e)}createSelection(...e){return new wn(...e)}}class qv extends qd{constructor(e,t){super(e),this.view=t,this._toolbarConfig=au(e.config.get("toolbar")),this._elementReplacer=new jb}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,r=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&Eu({view:t,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var zu=E(3143),Gv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Le()(zu.Z,Gv),zu.Z.locals;class Kv extends xv{constructor(e,t,n={}){super(e),this.stickyPanel=new Rv(e),this.toolbar=new Fs(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new Ev(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Ys extends Md{constructor(e,t={}){if(!zn(e)&&t.initialData!==void 0)throw new g("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return zn(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(e)),zn(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new Kv(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new qv(this,o),function(r){if(!eo(r.updateSourceElement))throw new g("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(s&&s.tagName.toLowerCase()==="textarea"&&s.form){let a;const c=s.form,l=()=>r.updateSourceElement();eo(c.submit)&&(a=c.submit,c.submit=()=>{l(),a.apply(c)}),c.addEventListener("submit",l),r.on("destroy",()=>{c.removeEventListener("submit",l),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(zn(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}ke(Ys,tv),ke(Ys,ov);class Qv{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class qs extends Yn{constructor(e){super(e);const t=this.document;function n(o){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new C(t,o);t.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new Qv(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const r=o.target.ownerDocument,s=o.clientX,a=o.clientY;let c;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?c=r.caretRangeFromPoint(s,a):o.rangeParent&&(c=r.createRange(),c.setStart(o.rangeParent,o.rangeOffset),c.collapse(!0)),c?n.domConverter.domRangeToView(c):null}(this.view,e)),this.fire(e.type,e,t)}}const Lu=["figcaption","li"];function Ou(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=Ou(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Lu.includes(t.name)||Lu.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(T,I){(function(x,_){T.exports=_(ry)})(window,function(x){return function(_){var E={};function B(A){if(E[A])return E[A].exports;var C=E[A]={i:A,l:!1,exports:{}};return _[A].call(C.exports,C,C.exports,B),C.l=!0,C.exports}return B.m=_,B.c=E,B.d=function(A,C,m){B.o(A,C)||Object.defineProperty(A,C,{enumerable:!0,get:m})},B.r=function(A){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},B.t=function(A,C){if(1&C&&(A=B(A)),8&C||4&C&&typeof A=="object"&&A&&A.__esModule)return A;var m=Object.create(null);if(B.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:A}),2&C&&typeof A!="string")for(var y in A)B.d(m,y,function(S){return A[S]}.bind(null,y));return m},B.n=function(A){var C=A&&A.__esModule?function(){return A.default}:function(){return A};return B.d(C,"a",C),C},B.o=function(A,C){return Object.prototype.hasOwnProperty.call(A,C)},B.p="",B(B.s=3)}([function(_,E){_.exports=x},function(_,E,B){(function(A){var C=typeof A=="object"&&A&&A.Object===Object&&A;E.a=C}).call(this,B(2))},function(_,E){var B;B=function(){return this}();try{B=B||new Function("return this")()}catch{typeof window=="object"&&(B=window)}_.exports=B},function(_,E,B){B.r(E);var A=B(0),C=B.n(A),m=function(j){var fe=typeof j;return j!=null&&(fe=="object"||fe=="function")},y=B(1),S=typeof self=="object"&&self&&self.Object===Object&&self,D=y.a||S||Function("return this")(),g=function(){return D.Date.now()},w=/\s/,q=function(j){for(var fe=j.length;fe--&&w.test(j.charAt(fe)););return fe},z=/^\s+/,H=function(j){return j&&j.slice(0,q(j)+1).replace(z,"")},J=D.Symbol,ue=Object.prototype,F=ue.hasOwnProperty,re=ue.toString,ge=J?J.toStringTag:void 0,me=function(j){var fe=F.call(j,ge),Ie=j[ge];try{j[ge]=void 0;var ke=!0}catch{}var R=re.call(j);return ke&&(fe?j[ge]=Ie:delete j[ge]),R},K=Object.prototype.toString,te=function(j){return K.call(j)},Q=J?J.toStringTag:void 0,oe=function(j){return j==null?j===void 0?"[object Undefined]":"[object Null]":Q&&Q in Object(j)?me(j):te(j)},be=function(j){return j!=null&&typeof j=="object"},Ce=function(j){return typeof j=="symbol"||be(j)&&oe(j)=="[object Symbol]"},ie=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,$=/^0o[0-7]+$/i,ae=parseInt,se=function(j){if(typeof j=="number")return j;if(Ce(j))return NaN;if(m(j)){var fe=typeof j.valueOf=="function"?j.valueOf():j;j=m(fe)?fe+"":fe}if(typeof j!="string")return j===0?j:+j;j=H(j);var Ie=Z.test(j);return Ie||$.test(j)?ae(j.slice(2),Ie?2:8):ie.test(j)?NaN:+j},X=Math.max,N=Math.min,W=function(j,fe,Ie){var ke,R,Pe,De,We,He,gt=0,Nt=!1,rt=!1,Te=!0;if(typeof j!="function")throw new TypeError("Expected a function");function Ft(Je){var _t=ke,bt=R;return ke=R=void 0,gt=Je,De=j.apply(bt,_t)}function Kt(Je){return gt=Je,We=setTimeout(ut,fe),Nt?Ft(Je):De}function Pt(Je){var _t=Je-He;return He===void 0||_t>=fe||_t<0||rt&&Je-gt>=Pe}function ut(){var Je=g();if(Pt(Je))return kn(Je);We=setTimeout(ut,function(_t){var bt=fe-(_t-He);return rt?N(bt,Pe-(_t-gt)):bt}(Je))}function kn(Je){return We=void 0,Te&&ke?Ft(Je):(ke=R=void 0,De)}function Qt(){var Je=g(),_t=Pt(Je);if(ke=arguments,R=this,He=Je,_t){if(We===void 0)return Kt(He);if(rt)return clearTimeout(We),We=setTimeout(ut,fe),Ft(He)}return We===void 0&&(We=setTimeout(ut,fe)),De}return fe=se(fe)||0,m(Ie)&&(Nt=!!Ie.leading,Pe=(rt="maxWait"in Ie)?X(se(Ie.maxWait)||0,fe):Pe,Te="trailing"in Ie?!!Ie.trailing:Te),Qt.cancel=function(){We!==void 0&&clearTimeout(We),gt=0,ke=He=R=We=void 0},Qt.flush=function(){return We===void 0?De:kn(g())},Qt},G={name:"ckeditor",created(){const{CKEDITOR_VERSION:j}=window;if(j){const[fe]=j.split(".").map(Number);fe<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(A.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const j=Object.assign({},this.config);this.modelValue&&(j.initialData=this.modelValue),this.editor.create(this.$el,j).then(fe=>{this.instance=Object(A.markRaw)(fe),this.setUpEditorEvents(),this.modelValue!==j.initialData&&fe.setData(this.modelValue),this.disabled&&fe.enableReadOnlyMode("Integration Sample"),this.$emit("ready",fe)}).catch(fe=>{console.error(fe)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(j){this.instance&&j!==this.lastEditorData&&this.instance.setData(j)},disabled(j){j?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const j=this.instance,fe=W(Ie=>{const ke=this.lastEditorData=j.getData();this.$emit("update:modelValue",ke,Ie,j),this.$emit("input",ke,Ie,j)},300,{leading:!0});j.model.document.on("change:data",fe),j.editing.view.document.on("focus",Ie=>{this.$emit("focus",Ie,j)}),j.editing.view.document.on("blur",Ie=>{this.$emit("blur",Ie,j)})}}};const L=C.a?C.a.version:A.version,[ee]=L.split(".").map(j=>parseInt(j,10));if(ee<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Ae={install(j){j.component("ckeditor",G)},component:G};E.default=Ae}]).default})})($p);const K1=Ap($p.exports),sx={__name:"app-editor",props:{modelValue:{type:String,default:""},uploadUrl:{type:String,default:null}},emits:["update:modelValue"],setup(T,{emit:I}){const x=T,_=K1.component,E=Oe(x.modelValue??"");qt(E,m=>{I("update:modelValue",m)}),qt(()=>x.modelValue,m=>{E.value=m??""});const B=Ha({language:"zh-cn",url:x.uploadUrl});class A{constructor(y){this.loader=y}upload(){return this.loader.file.then(y=>new Promise((S,D)=>{const g=new FormData;g.append("file",y);try{const w={url:B.url,method:"post",data:g};(w.url.startsWith("http")||w.url.startsWith("/"))&&(w.baseURL=""),sy.request(w).then(q=>{const z=q.data.data??q.data;S({default:z})})}catch(w){D(w)}}))}}const C=m=>{m.plugins.get("FileRepository").createUploadAdapter=y=>new A(y)};return(m,y)=>(ve(),Et(k(_),{modelValue:E.value,"onUpdate:modelValue":y[0]||(y[0]=S=>E.value=S),editor:k(G1),config:B,class:"w-full",onReady:C},null,8,["modelValue","editor","config"]))}};export{ix as E,lp as R,sx as _,Cp as b,yo as c,nx as t,ox as u,rx as v};