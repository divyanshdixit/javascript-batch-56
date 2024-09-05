// var, let, const, 

// var - gloabl scope
// es6 - let, const, - local/block scope

var a = 10;

var a;
a = 10;

console.log(a, typeof a) // 10, number
a = '10';
console.log(a, typeof a) // 10, string

let b = 20;
b = 30;

{
    let c = 10;
}
let c = 120;

const v = 90;
v = 100;

let k = 90;
k = 100;
// let c = 120;
// let c = 30;



console.log(a)