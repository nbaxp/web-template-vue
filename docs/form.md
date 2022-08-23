# json 生成 form

1. 定义 schema 用于生成 form

   1. 在定义 schema 的 properties 的同时定义验证规则 rules，作为 el-form-item 的 rules 属性值
   1. 如果服务端不提供 model ，根据 schema 生成 model

1. 传递 schema.properties 到 form-item

   1. form-item 遍历 properties，
   1. 如果 type 为 object，传递 property.properties 到 form-item
   1. 如果 type 为 array 且 items.type 为 object，如果数组为空则添加默认空对象，遍历数组 。。。？？？
   1. 根据 input 调用对应的组件

1. 验证时，el-form-item 的 prop 属性值用于查找 model 的属性，因此 prop 属性和 el-input 等输入控件的 v-model 是一一对应的

1. `type==='string|number|boolean'` 生成 `input[type=text|number|checkbox]||select`
1. `type==='object'` 嵌套生成
1. `type==='array'&&items.type==='string|number|boolean'` 生成：`·`select[multiple]||input[type=radio]`
1. `type==='array'&&items.type==='object'` 生成支持 +||- 的子对象列表

## form data 格式

```json
{
  "test1": null,
  "test2": {
    "test21": null
  },
  "test3": [{ "text": "one", "value": 1 }]
}
```

## form schema 格式

```json
{
  "type": "object",
  "properties": {
    "test1": {
      "type": "string"
    },
    "test2": {
      "type": "object",
      "properties": {
        "test21": {
          "type": "string"
        }
      }
    },
    "test3": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string"
          },
          "value": {
            "type": "number"
          }
        }
      }
    }
  }
}
```
