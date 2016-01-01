ol = body.append('ol');
d3.json('data.json', function (e, d) {
  if(!e) {
    ol.selectAll('li').data(d)
      .enter()
      .append('li')
      .html(function (item) {
        return item.name;
      })
      .style('color', function (item) {
        return item.color;
      }
    });
  });
