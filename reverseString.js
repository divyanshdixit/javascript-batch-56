

function ReverseString(str){
    let result = '';
    for(let i=str.length - 1; i>=0; i--){ // i=7 i-- i=-1
        // console.log(str[i]) // str[0] d
        console.log(i, str[i])
        result = result + str[i] // '' + 'h' => h + 's' => hs + 'n' => hsn
    }
    return result;
}


var a = 10;
var b = 20;
var temp;
temp = a; // 10
a = b; // 20
b = temp; // 10

console.log(a,b); // 20,10

console.log(ReverseString('divyagnsh'));

console.log(ReverseString('abhishek'));

function reverseString2(str){
 return str.split('').reverse().join('');
}
console.log(reverseString2('abhishek'))