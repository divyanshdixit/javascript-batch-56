// primitive => (can not be change / immutable, they don't have their own props and methods) => reference/address

// string
// number
// boolean
// undefined

var x = 10;

console.log(typeof x);

// non-primitive =>  (can be change , mutable, they have own props and methods)

// object
// null => object
// array => this is special kind of object

var y = 20; // [1000]
y = 30; // [1001]

var obj1 = { // [1100]
    name:'divyansh',
    age: 28
};

obj1.name = 'abhishek';
console.log(obj1); // [1100]

