# Template

## TODO

* 从 underscore 中抽取 _.template 方法
  * _.defaults
  * _.escape
  * _
  * 去掉 oldSettings
* 修改为默认使用转义, 即 <% %> 会转义, <%- %> 不会转义
* 可以作为 jQuery 插件使用, 也可以单独使用
* 可以返回预编译函数, 也可以返回渲染后内容
* 写文档: for, if, else, else if 等

## 问题

* underscore 的模版没有空白控制功能
* 速度没有 artTemplate 快
* 可以写原生 JS , 可能会导致模版过于复杂