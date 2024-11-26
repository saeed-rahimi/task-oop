"use strict"
//task1
class Student {
    #subjects; 

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.#subjects = []; 
    }

    addSubject(subject) {
        this.#subjects.push(subject);
    }

    listSubjects() {
        console.log(`Subjects: ${this.#subjects.join(", ")}`);
    }

    getDetails() {
        console.log(`Student Name: ${this.name}, Grade: ${this.grade}`);
    }
}


const student = new Student("Alice", "10th");
student.addSubject("Mathematics");
student.addSubject("Science");
student.getDetails(); 
student.listSubjects(); 

//task2

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails() {
        console.log(`Employee Name: ${this.name}, Position: ${this.position}`);
    }

    calculateBonus() {
        return this.salary * 0.1; 
    }
}


class Manager extends Employee {
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
    }

    calculateBonus() {
        return this.salary * 0.2; 
    }
}


const emp = new Employee("Bob", "Developer", 50000);
emp.getDetails(); 
console.log(`Bonus: $${emp.calculateBonus()}`); 

const mgr = new Manager("Clara", "Manager", 80000, "IT");
mgr.getDetails(); 
console.log(`Bonus: $${mgr.calculateBonus()}`); 

//task 2
class MathUtil {
    static square(num) {
        return num * num;
    }
}


console.log(MathUtil.square(5)); 
console.log(MathUtil.square(9)); 
