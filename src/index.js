const $ = require('jquery');
var React = require('react');

let sayHello = str => console.log("hello, " + str);
sayHello("jay");

$('body').css('background-color', 'blue');

const hello = require('./say-hello');

console.log(hello.hello());
console.log(hello.goodbye());

import {add, subtract, multiply} from './basic-math'
// const math = require('./basic-math');
// math.add(12, 4);
// math.subtract(12, 5);
// math.multiply(25, 25);

add(4,5);


// import {x, y} from './basic-math'
// math.add(x, y);

