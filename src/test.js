function Person(name, age) {
    this.name = name,
        this.age = age
}

function Cricketer(name, age, type, country) {
    Person.call(this);
    this.age = age;
    this.name = name;
    this.type = type;
    this.country = country;
}

Person.prototype.eat = function () {
    console.log(`${this.name} is overeating at age ${this.age}`);
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;


const Sakib = new Cricketer("Sakib", 25, "alrounder", "Bangladesh");
Sakib.eat();
console.log(Sakib);

// Class 

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating whose age is ${this.age}`);
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}


class CricketerClass extends PersonClass {
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    get Name() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    static isEqualAge(Cricketer1, Cricketer2) {
        console.log(Cricketer1.name);
        console.log(Cricketer2.name);
        // return Cricketer1.age === Cricketer2.age;
        // console.log(CricketerClass.isEqualAge(Kishor, paroi));

        return this.name;  // return CricketClass as static method doesn't recognise this
    }

    play() {
        super.play();
        console.log(`${this.name} is playing from ${this.country}`);
    }
}

const Kishor = new CricketerClass('Kishor Kumar Paroi', 24, "Alrounder", "Bangladesh");
console.log(Kishor);
console.log(Kishor.name);
Kishor.setName = "kkp"
Kishor.play();
Kishor.eat();

const paroi = new PersonClass("paroi", 25);
console.log(paroi);
paroi.eat();
console.log(CricketerClass.isEqualAge(Kishor, paroi));

const user = {
    name: "Kishor",
    age: 25,
    education: {
        degree: "Graduate",
        school: {
            SchoolName: {
                Name: "S.J Model High School",
                estd: 1900,
            }
        }
    }
}

const { education: { degree } = {} } = user;
const { education: { school: { SchoolName: { Name, estd } = {} } = {} } = {} } = user;
console.log(degree);
console.log(Name);
console.log(estd);

// optional chaining 
const establishedYear = user?.education?.school?.SchoolName?.estd;
console.log(establishedYear);

// Nullish Coalescing Operator

// Nullish means Null/undefined

let lang = null; // false
console.log(lang ?? "Javascript"); // returns javascript

lang = false;
console.log(lang ?? "Python"); // returns false

// nullish and or operator aren't same

console.log(lang || "Javascript");  // returns Javascript
console.log(lang && "Javascript");  // returns Javascript as it is true

