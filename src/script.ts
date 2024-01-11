console.log("Hello KKP!");
const country = "I love Bangladesh";
console.log(country);

const kishor = () => {
  console.log("Hello Async Function");
};
console.log("🚀 ~ file: script.ts:6 ~ kishor ~ kishor:", kishor);

type stringOrNumber = string | number;
type userType = {
  name: string;
  age: number;
};

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(
    `User id is ${id}, User name is ${user.name} and age is ${user.age}`
  );
};

console.log(
  "🚀 ~ file: script.ts:17 ~ userDetails ~ userDetails :",
  userDetails
);
const sayHello = (user: userType) => {
  console.log(`Hello (${user.age} > 50 ? "Sir" : "Mr.) ${user.name}`);
};

console.log("🚀 ~ sayHello ~ sayHello:", sayHello);
// Function Signature

let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 6));

let calculation: (a: number, b: number, c: string) => number;
calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(5, 60, "add"));

// class

import { Playerr } from "../output/classes/Player.js";
import { isPlayer } from "../output/interfaces/isPlayer.js";
class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      `${this.name} is playing at age ${this.age} from ${this.country}`
    );
  }
}

const mashrafi = new Player("Mashrafi", 30, "Bangladesh");
const sakib = new Player("Sakib", 28, "Bangladesh");
console.log(mashrafi);
mashrafi.play();

const players: Player[] = [];
players.push(sakib, mashrafi);
console.log(players);

import Student from "../output/student.js";

const Kishor = new Student("Kishor", 101, 1703053);
console.log(Kishor);
Kishor.read();

const paroi = new Student("Paroi", 102, 1703054);
console.log(paroi);

const students: Student[] = [];
students.push(paroi, Kishor);
students.push("1000");
console.log(students);

let x = 100;
console.log(x);

interface RectangleOptions {
  width: number;
  height: number;
  kkp: number;
}

function drawRectangle(options: RectangleOptions) {
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

let paro: isPlayer;
paro = new Playerr("Paro", 24, "kishor", "Bangladesh");

console.log(paro);
console.log("kishorfdsff");
console.log(paro.getProperty());

// Generics

const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 1000000);
  return { ...obj, id };
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

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
  ERROR,
}
interface APIresponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response1: APIresponse<object> = {
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
let b: [number, string, stringOrNumber, object, boolean] = [
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
