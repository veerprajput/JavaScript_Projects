/// Class ///

// class Person {
//     name =  'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name +  ' and I am ' + this.age + ' years old.');
//     }
// }

/// Constructor Function ///

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log('Hi, I am ' + this.name +  ' and I am ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();