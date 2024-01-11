console.log("Hello KKP!");
const country = "I love Bangladesh";
console.log(country);
const kishor = () => {
    console.log("Hello Async Function");
};
console.log("🚀 ~ file: script.ts:6 ~ kishor ~ kishor:", kishor);
const userDetails = (id, user) => {
    console.log(`User id is ${id}, User name is ${user.name} and age is ${user.age}`);
};
console.log("🚀 ~ file: script.ts:17 ~ userDetails ~ userDetails :", userDetails);
const sayHello = (user) => {
    console.log(`Hello (${user.age} > 50 ? "Sir" : "Mr.) ${user.name}`);
};
console.log("🚀 ~ sayHello ~ sayHello:", sayHello);
// Function Signature
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(5, 6));
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 60, "add"));
// class
import { Playerr } from "../output/classes/Player.js";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing at age ${this.age} from ${this.country}`);
    }
}
const mashrafi = new Player("Mashrafi", 30, "Bangladesh");
const sakib = new Player("Sakib", 28, "Bangladesh");
console.log(mashrafi);
mashrafi.play();
const players = [];
players.push(sakib, mashrafi);
console.log(players);
import Student from "../output/student.js";
const Kishor = new Student("Kishor", 101, 1703053);
console.log(Kishor);
Kishor.read();
const paroi = new Student("Paroi", 102, 1703054);
console.log(paroi);
const students = [];
students.push(paroi, Kishor);
students.push("1000");
console.log(students);
let x = 100;
console.log(x);
function drawRectangle(options) {
    let width = options.width;
    let height = options.height;
    let thickness = options.kkp;
    console.log("Area : ", width * height);
    console.log(`thicknesss is ${thickness}`);
}
let threeDoptions = {
    width: 30,
    height: 20,
    kkp: 30,
};
drawRectangle(threeDoptions);
let paro;
paro = new Playerr("Paro", 24, "kishor", "Bangladesh");
console.log(paro);
console.log("kishorfdsff");
console.log(paro.getProperty());
// Generics
const addId = (obj) => {
    let id = Math.floor(Math.random() * 1000000);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Kishor",
    age: 24,
    country: "Bangladesh",
});
// let user = "fdsfsgg";
// addId(user);
console.log(`user-id is ${user.id}`);
console.log(user.country);
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
    RType[RType["ERROR"] = 4] = "ERROR";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.FORBIDDEN,
    data: {
        name: "Kishor Kumar Paroi",
        something: 400,
    },
};
console.log(response1);
let arr = [3, "heelo", { p: 4 }];
arr[0] = "kihsor";
console.log(arr);
// tuples
let b = [
    100,
    "kkp",
    199,
    { name: "Kishor" },
    true,
];
console.log(b);
let name = "Kishor";
console.log("🚀 ~ file: script.ts:208 ~ name:", name);
console.log('Kishor Kumar Paroi');
