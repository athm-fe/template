# Template

该模版修改自 [underscore.js](http://underscorejs.org) 。

模版：
```html
<div id="app"></div>
<script id="tplDemo" type="text/tpl">
  <h2>hello: {%= name %}</h2>
  <article>{%- content %}</article>
  <ul>
    {% for (var i = 0; i < list.length; i++) { %}
      <li>{%= list[i] %}</li>
    {% } %}
  </ul>
</script>
```

数据
```javascript
var data = {
  name: 'Tom <em>Escaped</em>',
  content: 'I am from <strong><em>China</em></strong>',
  list: ['React', 'Vue', 'Webpack', 'Gulp']
};
var $app = $('#app');

// 方式一: 直接传入数据
$('#tplDemo').template(data).appendTo($app);

// 方式二：先预编译
var compiled = $('#tplDemo').template();
var result = compiled(data);
$app.append($(result));
```

## 语法说明

`{%= %}` 表示插值，会进行 HTML 转义
`{%- %}` 同样表示插值，但是不会对 HTML 进行转义
`{% %}` 里面可以写任何的 JS 代码

注意：关于转义部分，和 underscore 有一些不同，underscore 的 `<%= %>` 不会进行 HTML 转义，`<%- %>` 才表示转义。

因为 .Net 使用了 `<% %>` ，所以不能使用这个。

由于我们页面开发时使用的是 Nunjucks 模版引擎，会存在和这个库的语法冲突的问题，所以得使用 Nunjucks 的 `raw` 来特殊处理一下：

```html
<script id="tplDemo" type="text/tpl">
  {% raw %}
  <h2>hello: {%= name %}</h2>
  <article>{%- content %}</article>
  <ul>
    {% for (var i = 0; i < list.length; i++) { %}
      <li>{%= list[i] %}</li>
    {% } %}
  </ul>
  {% endraw %}
</script>
```