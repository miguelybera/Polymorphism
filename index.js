class Person{
    constructor(name){
        this.name = name;
    }
}

class Student extends Person{
    constructor(name, course){
        super(name);
        this.course = course
    }
}

let p = new Person("Juan Dela Cruz");
let s = new Student("Pedro Morales", "IT");
document.write(typeof(s) + "<br>");
s=1;
document.write(s);
document.write(`<br>Hello ${p.name}<br>`);
p=s;
document.write(`Hello ${s.name}`);