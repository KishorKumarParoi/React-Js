class Student {
    constructor(name, id, roll) {
        this.name = name;
        this.id = id;
        this.roll = roll;
    }
    read() {
        console.log(`${this.name} whose roll is ${this.roll} got id number ${this.id}`);
    }
}
export default Student;
