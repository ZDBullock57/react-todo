var React = require('react');

function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
//console.log(add(...toAdd));


var groupA = ['Jen', 'Cory'];
var groupB = ['Tom'];
var final = [3, ...groupA];

console.log(final);
