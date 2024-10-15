var obj = {
    name: 'divyansh',
    getName: function(name){ // method
        return `my name is ${name}`
    }
}

var name = 'abhishek1';

function printObjectName(name){ // parameter

    console.log(obj.getName(name)) // argument

}

printObjectName(name);

// apply, call 
