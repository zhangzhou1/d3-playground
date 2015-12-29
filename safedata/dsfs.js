use strict;

console.log(d3.scale);
    
var color;
(function getLinearColor( global ){
 global.color =  d3.scale.linear()
    .domain([1, 500])
    .range(["red", "blue"]);
})( window );

var count = 500;
(function displayLinearColor( global ){
for(let var i = 1; i < global.count; i++) {
  let var band = document.createElement('div');
  band.style.background = global.color(i);
  band.style.width = '100%';
  band.style.height = '1px';
  document.body.appendChild(band);
}
})( window );

