var head = document.getElementsByTagName('head')[0];
var style = document.createElement('link');
var script = document.createElement('script');

style.type = "text/css";
style.rel = "stylesheet";
style.href = "//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css";

script.src = "//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js";

head.appendChild(style);
head.appendChild(script);
