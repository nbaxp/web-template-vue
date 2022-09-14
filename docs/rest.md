# restful

参考:<https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md>

1. GET：检索，返回 200、404（获取单个数据时，id 不存在）
   1. 查询所有：请求地址 /resources
   1. 获取单个：请求地址 /resources/{id}
1. POST：创建，请求地址 /resources ，返回 201（已创建）、400（数据无效）
1. PUT：更新，请求地址 /resources/{id} ，返回 204（无内容）、404（不存在）、400（数据无效）
1. DELETE：请求地址 /resources/{id} 删除，返回 204（无内容）或 404（不存在）
