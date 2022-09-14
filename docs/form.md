# json 生成 form

表单分为 4 种模式：

1. query：查询模式，inline 方式显示
1. crate: 创建模式
1. update: 更新模式，readOnly 字段为只读

模式传入 form 的 model 属性：

## schema

1. title：参考 JSON Schema
1. type:参考 JSON schema
1. input：输入类型
1. rules：验证规则
1. readOnly：update 模式下显示为只读。用于创建后不可更改的字段类型，如 userName
1. hideForEdit：create 和 update 模式下均不显示，list 和 detail 模式下显示。用于审计字段，如 createdAt

## data

el-form[v-model=data]，为 null 时根据 schema 自动生成

## disableValidation

禁止表单验证，用于 query 模式

## 输入和显示

表单项使用自定义组件 app-item-input,使用 type(=schema.input ?? schema.type) 匹配输入组件：

1. hidden: 在 list、detail、create、update 模式下均不显示，用于 id、rowNumber 等字段
1. string: el-input[type=text]
1. number: number=>el-input-number
1. slider: number=>el-slider
1. boolean：boolean=>el-checkbox
1. switch: boolean=>el-switch
1. radio-group 单选（通常为必选，因选后不可取消）: string|number|boolean=>el-radio-group
1. checkbox-group 多选: array=>el-checkbox-group
1. transfer 多选：array=>el-transfer
1. select：单选 string|number|boolean=>el-select；多选 array=>el-select[multiple]
1. cascader: 单选 string|number|boolean=>el-cascader；多选 array=>el-cascader[multiple]
1. color: string=>el-color
1. date|datetime: =>el-date-picker[type=type]
1. image: el-upload 作为输入组件，el-image 作为显示组件
1. 未匹配的，默认使用 el-input[ type = schema.input ?? schema.type === 'string' ? 'text' : schema.type ]
