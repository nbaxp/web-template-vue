import{k as y,o as r,b as v,aR as L,w as c,d as l,p as E,a5 as h,O as g,e as f,a2 as k,Q as w,aG as e}from"./index.1e692261.js";import{E as D,a as I}from"./el-select.3aaed70f.js";import"./el-popper.e6a0cfe6.js";import{_ as P}from"./svg-icon.a3d9bbaf.js";import{_ as R}from"./app-form.319bbf02.js";import"./el-button.69f0df7c.js";import"./index.09be628b.js";import"./index.2f4afd98.js";import"./debounce.420a5b4a.js";/* empty css                */import"./app-input-editor.82b3466e.js";import"./el-link.4571d607.js";import"./vnode.04055651.js";import"./refs.d2a66b7c.js";import"./aria.71131d37.js";const A={class:"inline-flex items-center"},T={class:"el-input__inner"},x={__name:"icon-select",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(m,{emit:s}){const i=m,a=Object.keys(Object.assign({"../assets/icons/administator.svg":()=>e(()=>import("./administator.40691512.js"),["assets/administator.40691512.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/default.svg":()=>e(()=>import("./default.59b1ee37.js"),["assets/default.59b1ee37.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/folder.svg":()=>e(()=>import("./folder.48e4fbb8.js"),["assets/folder.48e4fbb8.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/group.svg":()=>e(()=>import("./group.3589ff5e.js"),["assets/group.3589ff5e.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/home.svg":()=>e(()=>import("./home.47de30e6.js"),["assets/home.47de30e6.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/lock.svg":()=>e(()=>import("./lock.15602ef6.js"),["assets/lock.15602ef6.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/page.svg":()=>e(()=>import("./page.182239e6.js"),["assets/page.182239e6.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/permission.svg":()=>e(()=>import("./permission.8bd404ee.js"),["assets/permission.8bd404ee.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/role.svg":()=>e(()=>import("./role.c11a7a08.js"),["assets/role.c11a7a08.js","assets/index.1e692261.js","assets/index.b71d5b81.css"]),"../assets/icons/user.svg":()=>e(()=>import("./user.422ad9c1.js"),["assets/user.422ad9c1.js","assets/index.1e692261.js","assets/index.b71d5b81.css"])})).map(t=>t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("."))),o=y(i.modelValue),p=t=>{o.value=t,s("update:modelValue",t)};return(t,d)=>{const u=P,V=D,b=I;return r(),v(b,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=n=>o.value=n),filterable:"",clearable:"",onChange:p},L({default:c(()=>[(r(!0),E(w,null,h(f(a),(n,O)=>(r(),v(V,{key:n,label:n,value:n},{default:c(()=>[g("div",A,[l(u,{name:f(a)[O]},null,8,["name"]),g("span",T,k(n),1)])]),_:2},1032,["label","value"]))),128))]),_:2},[o.value?{name:"prefix",fn:c(()=>[l(u,{name:o.value},null,8,["name"])]),key:"0"}:void 0]),1032,["modelValue"])}}},S={class:"w-full h-full overflow-auto"},M={__name:"test",setup(m){const s=new WebSocket("ws://localhost/ws");s.addEventListener("open",()=>{console.log("websocket open"),s.send("hello")}),s.addEventListener("close",()=>{console.log("websocket close")}),s.addEventListener("error",()=>{console.log("websocket error")}),s.addEventListener("message",_=>{console.log("Received\uFF1A",_.data)});const i={data:null,schema:{properties:{stringProp:{type:"string",title:"type[string]",rules:[{required:!0}]}}},tableData:[],tableSchema:{properties:{id:{type:"string",input:"hidden"},name:{type:"string",title:"\u59D3\u540D"},email:{type:"string",title:"\u90AE\u7BB1"},emailConfirmed:{type:"boolean",title:"\u90AE\u7BB1\u5DF2\u786E\u8BA4"},avatar:{type:"string",title:"\u5934\u50CF",input:"image"},birthday:{type:"string",title:"\u751F\u65E5",input:"date"},rowVersion:{type:"string",input:"hidden"}}}};return(_,a)=>{const o=R,p=x;return r(),E("div",S,[l(o,{modelValue:i,"onUpdate:modelValue":a[0]||(a[0]=t=>i=t)}),l(p)])}}};export{M as default};