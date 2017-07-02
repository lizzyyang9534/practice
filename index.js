//var a = require('./a.js');//一定要打"./"，不然他會判斷成npm安裝的模組
//console.log(a());//Hello

/*
//ES6
import a from './a.js';
console.log(a());
*/
/*
import sum from './math';
import * as all from './math'; // all = { sum1, sum2, default };
console.log(a;
console.log(all['sum1'];
*/
/*
console.log('b');
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

var data = [{
  name: "洪名辰",
  title: "打雜的",
  img: "https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p320x320/12938324_1304624899554192_2781397432586487103_n.jpg?oh=c9dc2c04844a4f1c0113d0880b75d62d&oe=5783A396"
}, {
  name: "Anna Su",
  title: "路過",
  img: "https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p320x320/12936690_10204634969314400_2114258775092788914_n.jpg?oh=a6c8e3126ca5ced9452e510b8d8cb459&oe=577DA024"
}];

var root = document.getElementById('root');

ReactDOM.render(<App data={ data }/>, root);
