import{_ as p}from"./app-list.ffe69841.js";import{a0 as n,b as o,L as s,o as u}from"./index.f2b0fb39.js";import"./app-form.2a8447b1.js";import"./el-select.bab01ab5.js";import"./el-button.e2528e7d.js";import"./index.9c25ca14.js";/* empty css                */import"./el-overlay.1be643ab.js";import"./vnode.6ba4b3ec.js";import"./el-link.0c49de41.js";import"./svg-icon.8751ca7e.js";import"./aria.71131d37.js";import"./refs.1b6f9c24.js";import"./el-card.258e44eb.js";import"./index.b7c27207.js";const S={__name:"list",setup(d){const t=[{required:!0,message:"\u5FC5\u586B\u9879"}],e=[{value:"value1",label:"option1",children:[{value:"value1.1",label:"options1.1"}]},{value:"value2",label:"option2"},{value:"value3",label:"option3"}],i={type:"object",properties:{id:{type:"string",input:"hidden"},createdAt:{type:"string",title:"\u521B\u5EFA\u65F6\u95F4",input:"datetime",hideForEdit:!0},modifiedAt:{type:"string",title:"\u4FEE\u6539\u65F6\u95F4",input:"datetime",hideForEdit:!0},rowVersion:{type:"string",input:"hidden"},color:{title:"Color",type:"string",input:"color",rules:t},colorRgba:{title:"RGBA Color",type:"string",input:"color",showAlpha:!0,rules:t},input:{title:"\u5B57\u7B26\u4E32",type:"string",rules:t},number:{title:"\u6570\u5B57",type:"number",precision:2,step:.5,min:0,max:10,rules:t},numberSlider:{title:"\u6ED1\u52A8\u8F93\u5165",type:"number",input:"slider"},numberRate:{title:"\u8BC4\u5206",type:"number",input:"rate",max:6},boolean:{title:"Boolean",type:"boolean"},booleanSwitch:{title:"\u5F00\u5173",type:"boolean",input:"switch"},radioGroup:{title:"\u5355\u9009\u6846",type:"string",input:"radio-group",options:e,rules:t},checkBoxGroup:{title:"\u590D\u9009\u6846\u591A\u9009",type:"array",items:{type:"string"},input:"checkbox-group",options:e,rules:t},transfer:{title:"\u7A7F\u68AD\u6846\u591A\u9009",type:"array",items:{type:"string"},input:"transfer",options:e,rules:t},select:{title:"\u5355\u9009",type:"string",input:"select",options:e,rules:t},selectMultiple:{title:"\u591A\u9009",type:"array",items:{type:"string"},input:"select",multiple:!0,options:e,rules:t},selectLazy1:{title:"\u5355\u9009\u61D2\u52A0\u8F7D",type:"string",input:"select",url:"lazy/select1",rules:t},selectLazy2:{title:"\u5355\u9009\u7EA7\u80542",type:"string",input:"select",url:"lazy/select2",parent:"selectLazy1",rules:t},selectLazy3:{title:"\u5355\u9009\u7EA7\u80543",type:"string",input:"select",url:"lazy/select3",parent:"selectLazy2",rules:t},cascader:{title:"\u7EA7\u8054",type:"string",items:{type:"string"},input:"cascader",checkStrictly:!0,options:e,rules:t},cascaderMultiple:{title:"\u7EA7\u8054\u591A\u9009",type:"array",items:{type:"string"},input:"cascader",checkStrictly:!0,multiple:!0,options:e,rules:t},date:{title:"\u65E5\u671F",type:"string",input:"date",rules:t},datetime:{title:"\u65E5\u671F\u65F6\u95F4",type:"string",input:"datetime",rules:t},start:{title:"\u65E5\u671F\u8303\u56F4",type:"string",items:{type:"string"},input:"daterange",end:"end",disabledDate:"(value)=>value<new Date()",rules:t},end:{title:"string[datetime]",type:"string",input:"hidden",rules:t},startDatetime:{title:"\u65E5\u671F\u65F6\u95F4\u8303\u56F4",type:"string",items:{type:"string"},input:"datetimerange",end:"endDatetime",disabledDate:"(value)=>value<new Date()",rules:t},endDatetime:{title:"string[datetime]",type:"string",input:"hidden",rules:t},file:{title:"\u6587\u4EF6",type:"string",input:"file",action:"/api/upload",rules:t},fileMultiple:{title:"\u6587\u4EF6\u591A\u9009",type:"array",items:{type:"string"},input:"file",action:"/api/upload",multiple:!0,accept:".jpg,.png",rules:t},image:{title:"\u56FE\u7247",type:"string",input:"image",accept:".jpg,.png",action:"/api/upload",rules:t},imageMultiple:{title:"\u56FE\u7247\u591A\u9009",type:"array",items:{type:"string"},input:"image",accept:".jpg,.png",action:"/api/upload",multiple:!0,rules:t}}},l=n({queryModel:{action:"list",method:"get",inline:!0,disableValidation:!0},listModel:{data:[],schema:i},detailModel:{data:null,schema:i},createModel:{data:null,schema:i},updateModel:{data:{},schema:i}});return(h,a)=>(u(),o(p,{modelValue:l,"onUpdate:modelValue":a[0]||(a[0]=r=>s(l)?l.value=r:null)},null,8,["modelValue"]))}};export{S as default};