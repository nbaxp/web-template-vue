import{_ as l}from"./app-list.1c2c7804.js";import{i as a,Z as s,b as n,e as d,F as p,o as m}from"./index.bd10bac3.js";import"./app-form.832e5c30.js";import"./app-input-editor.11c61a77.js";import"./debounce.29dda0c1.js";import"./el-select.71c8dc86.js";import"./el-button.651c63f4.js";import"./index.eb8b9e5b.js";import"./index.7898061d.js";import"./el-popper.31ce43ec.js";import"./svg-icon.441a2e72.js";/* empty css                */import"./el-link.2b17af65.js";import"./vnode.2f8d4e0e.js";import"./refs.47b7c97b.js";import"./aria.71131d37.js";import"./el-card.d057a303.js";import"./el-col.1c3580dd.js";import"./index.85e45423.js";const C={__name:"permission",setup(u){const i=a(null),e={properties:{id:{type:"string",input:"hidden"},name:{type:"string",title:"\u540D\u79F0",sortable:!0},number:{type:"string",title:"\u7F16\u53F7",sortable:!0}}},t=s({queryModel:{action:"permission",method:"get",inline:!0,disableValidation:!0,data:null,schema:e},listModel:{data:[],schema:e,disableRowIndex:!0,disablePagination:!0},detailModel:{disabled:!0,data:null,schema:e},createModel:{data:null,schema:e},updateModel:{data:{},schema:e}});return(y,o)=>(m(),n(l,{ref_key:"listRef",ref:i,modelValue:d(t),"onUpdate:modelValue":o[0]||(o[0]=r=>p(t)?t.value=r:null)},null,8,["modelValue"]))}};export{C as default};