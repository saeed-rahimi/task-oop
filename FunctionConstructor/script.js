"use strict"

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
};


const person1 = new Person("saeed", "asghar", 25)
const person2 = new Person("reza", "ali", 30)


person1.greet()
person2.greet()