export class Playerr {
    constructor(name, age, surname, country) {
        this.name = name;
        this.age = age;
        this.surname = surname;
        this.country = country;
    }
    getProperty() {
        return this.surname;
    }
    play() {
        console.log(`${this.name} who has ${this.surname} is playing from ${this.country} at age of ${this.age}`);
    }
}
