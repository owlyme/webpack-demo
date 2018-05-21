import _ from 'lodash';
import printme from "./print.js";
import { cube } from "./math.js";

import "../asset/style.css";

function component() {
  // var element = document.createElement("div");
  var element = document.getElementById("container");
  
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', cube(5)], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printme;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

