
// regular/normal , arrow function (anonymous function) clousers, self invoking function
 var c ;

function functionName(n1,n2=0){ // parameter, window (global object)
    // logic
    var result = n1 + n2; // 3, 
    console.log('first');
    return result; // function => single value return, last line of function
}

console.log(functionName(1)); // 30 (argument)
console.log(functionName(3)); // 30
console.log(functionName(5,6)); // 30
console.log(functionName(7,8)); // 30

// arrow

function abc(n1, n2){
    var res = n1 + n2
    return res;
}

let abc = (n1, n2) => n1 + n2;

console.log(abc(1,2)); // 30

