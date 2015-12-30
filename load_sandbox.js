function load_sandbox(user, date) {
  src = 'https://raw.githubusercontent.com/bigdata-mindstorms/d3-playground/gh-pages/' + user + '/' + date + '/sandbox.js';
  d3.text(src, function (e, d) { 
    if(!e) {
      eval(d);
    }
  })
}
