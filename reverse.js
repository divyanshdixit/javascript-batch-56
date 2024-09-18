// 

var name = ''; // global scope

function handleInput (event){
    console.log(event.target.value)
    name = event.target.value;
}

function reverse(){
   document.getElementById('reverse').innerHTML = name;
}