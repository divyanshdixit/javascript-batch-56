// {} => object literals
// class => object
// function object (blueprint)


// {key: value }

// this => wherever it used , it'll denote the parent object:

// own properties and methods(functions)
var details = {
    name : 'divyansh',
    age : 28,
    city : 'noida',
    printAgeAndCity: function(){
        console.log(`age is ${this.age} and city is ${this.city}` )
    }
}

// print prop and method value
console.log(details.name); // divyansh
console.log(details.printAgeAndCity())

// change the prop value
details.name = "abhishek";
console.log(details);

// add new prop
details.profile = 'developer';
console.log(details);

// delete prop:
delete details.name
console.log(details)

// get the length of object:
console.log(Object.values(details).length);