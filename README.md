# Template

该模版修改自 [underscore.js](http://underscorejs.org) .

模版：
```html
<div id="app"></div>
<script id="tplDemo" type="text/tpl">
  <h2>hello: <%= name %></h2>
  <article><%- content %></article>
  <ul>
    <% for (var i = 0; i < list.length; i++) { %>
      <li><%= list[i] %></li>
    <% } %>
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