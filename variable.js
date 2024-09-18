// scope => global, block, local/functional

// var => global scope varibale =>
    // let const => block scope varaible



var a = 10;

{
    var a = 20;
    console.log(a); // 20
}

console.log(a); // 20;



let b = 20; // global scope

{
    let b = 30;
    console.log(b) //30
}

console.log(b); // 20


const c = 20; // global scope

{
    const c = 30;
    console.log(c) //30
}

console.log(c) // 20

// redeclaration:

var t = 10;
// var t = 20; // redeclare, reassign/redefine
t= 20; // reassign

let v = 20;
v = 30;

const bx = 20;
// bx = 30;
console.log(bx); // 20

// var n = 10;
{
    var n = 20;
    let v = 20;
    v = 30;
}
console.log(n)


function abc(){
    var s = 10 // var let const => local 
}

abc();

console.log(s);