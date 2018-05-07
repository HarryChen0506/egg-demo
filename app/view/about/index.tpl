<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/about.css" />
  </head>
  <body>
    <h3 class="about">about页面</h3>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item" style="display: inline-block">
          <img src="{{item.posterUrl}}" alt="" width="200" height="100">
        </li>
      {% endfor %}
    </ul>
    <div>时间：{{helper.formatTime(testTime)}}</div>
  </body>
</html>