"use strict"

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
};


const person1 = new Person("John", "Doe", 25);
const person2 = new Person("Jane", "Smith", 30);


person1.greet()
person2.greet()