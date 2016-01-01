console.log(d3.scale)
color = d3.scale.linear()
    .domain([1, 500])
    .range(["red", "blue"])
for(var i = 1; i < 500; i++) {
  var band = document.createElement('div');
  band.style.background = color(i);
  band.style.width = '100%';
  band.style.height = '1px';
  document.body.appendChild(band);
}
