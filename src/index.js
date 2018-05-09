import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import MyImage from './my-image.png';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  var myimg = new Image();
  myimg.src = MyImage;

  element.appendChild(myimg);
  
  console.log(Data)
  return element;
}

document.body.appendChild(component());