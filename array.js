

var arr = ['divyansh', 28, true, [], {}]; // string,  number, boolean, array, object

arr[0] = 'abhishek'
console.log(arr);

console.log(arr.length);

// reverse()

// arr.reverse() // [1,2,3] => [3,2,1]

// arr.join('') => 3,2,1

// slice, splice, push, pop, shift, unshift

var arr1 = [1,2,3,4,50]

console.log(arr1.slice(1,4));
console.log(arr1);

const v = arr1.push(90) // 
console.log(v, arr1);

const f = arr1.pop();
console.log(f, arr1);

const a = arr1.unshift(12);
console.log(a, arr1);

const b = arr1.shift();
console.log(b, arr1);

const c = arr1.splice(2,0,60,70); // delete , add start ,end , mid
const d = arr1.splice(2,1); // delete , add start ,end , mid
const e = arr1.splice(2,1, 10,20,30); // delete , add start ,end , mid
console.log(c, d, e, arr1);

// forEach, map, filter, find, every