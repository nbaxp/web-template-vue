import{_ as s}from"./app-form.3865b92f.js";import{p as n,d as l,o as a}from"./index.62ba39cc.js";import"./el-select.452a58a2.js";import"./el-button.e1898b92.js";import"./index.cf211c5a.js";/* empty css                */import"./el-overlay.40aa64e5.js";import"./vnode.3a45fb47.js";import"./el-link.2ab4aaa7.js";import"./svg-icon.13975fb2.js";import"./aria.71131d37.js";import"./refs.e595911e.js";const p={class:"w-full h-full overflow-auto"},E={__name:"test",setup(d){const e=new WebSocket("ws://localhost/ws");e.addEventListener("open",()=>{console.log("websocket open"),e.send("hello")}),e.addEventListener("close",()=>{console.log("websocket close")}),e.addEventListener("error",()=>{console.log("websocket error")}),e.addEventListener("message",o=>{console.log("Received\uFF1A",o.data)});const t={data:null,schema:{properties:{stringProp:{type:"string",title:"type[string]",rules:[{required:!0}]}}},tableData:[],tableSchema:{properties:{id:{type:"string",input:"hidden"},name:{type:"string",title:"\u59D3\u540D"},email:{type:"string",title:"\u90AE\u7BB1"},emailConfirmed:{type:"boolean",title:"\u90AE\u7BB1\u5DF2\u786E\u8BA4"},avatar:{type:"string",title:"\u5934\u50CF",input:"image"},birthday:{type:"string",title:"\u751F\u65E5",input:"date"},rowVersion:{type:"string",input:"hidden"}}}};return(o,r)=>(a(),n("div",p,[l(s,{modelValue:t,"onUpdate:modelValue":r[0]||(r[0]=i=>t=i)})]))}};export{E as default};
