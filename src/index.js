// import _ from 'lodash';
import printme from "./print.js";
import { cube1 } from "./other.js";
cube1(5);
import "../asset/style.css";
import "../asset/index.css";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }else {
   console.log('Looks like we are in production mode!');
 }

function component() {
  // var element = document.createElement("div");
  var element = document.getElementById("container");
  
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack', cube(5)], ' ');

  element.innerHTML =['Hello ', 'webpack ', cube1(5)];
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printme;

  element.appendChild(btn);

  return element;
}

component();
