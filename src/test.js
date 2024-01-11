function Person(name, age){
    this.name = name,
    this.age = age
}

function Cricketer(name, age, type, country){
    Person.call(this);
    this.age = age;
    this.name = name;
    this.type = type;
    this.country = country;
}

Person.prototype.eat = function(){
    console.log(`${this.name} is overeating at age ${this.age}`);
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;


const Sakib = new Cricketer("Sakib", 25, "alrounder", "Bangladesh");
Sakib.eat();
console.log(Sakib);
