import{_ as i}from"./app-list.0cc4d7d8.js";import{k as a,Z as d,b as n,F as s,o as p}from"./index.1e692261.js";import"./app-form.319bbf02.js";import"./app-input-editor.82b3466e.js";import"./debounce.420a5b4a.js";import"./el-select.3aaed70f.js";import"./el-button.69f0df7c.js";import"./index.09be628b.js";import"./index.2f4afd98.js";import"./el-popper.e6a0cfe6.js";import"./svg-icon.a3d9bbaf.js";/* empty css                */import"./el-link.4571d607.js";import"./vnode.04055651.js";import"./refs.d2a66b7c.js";import"./aria.71131d37.js";import"./el-card.7bde72c8.js";import"./el-col.3d7fdf0b.js";import"./index.9c79d48c.js";const z={__name:"role",setup(m){const r=a(null),e={properties:{id:{type:"string",input:"hidden"},name:{type:"string",title:"\u540D\u79F0",rules:[{required:!0}]},number:{type:"string",title:"\u7F16\u53F7",rules:[{required:!0}]},isReadonly:{type:"boolean",title:"\u53EA\u8BFB",readOnly:!0}}},t=d({queryModel:{action:"role",method:"get",inline:!0,disableValidation:!0,data:null,schema:e},listModel:{data:[],schema:e,disableRowIndex:!0,disablePagination:!0},detailModel:{disabled:!0,data:null,schema:e},createModel:{data:null,schema:e},updateModel:{data:{},schema:e}});return(y,o)=>(p(),n(i,{ref_key:"listRef",ref:r,modelValue:t,"onUpdate:modelValue":o[0]||(o[0]=l=>s(t)?t.value=l:null)},null,8,["modelValue"]))}};export{z as default};