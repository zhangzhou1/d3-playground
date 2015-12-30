// 2015-12-30
src = 'https://raw.githubusercontent.com/bigdata-mindstorms/d3-playground/gh-pages/lzyforever/2015-12-30/sandbox.js';
d3.text(src, function (e, d) { 
  if(!e) {
    eval(d);
  }
})
