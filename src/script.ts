console.log("Hello KKP!");
const country = "I love Bangladesh";
console.log(country);

const kishor = () => {
  console.log("Hello Async Function");
};

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

const sayHello = (user: userType) => {
  console.log(`Hello (${user.age} > 50 ? "Sir" : "Mr.) ${user.name}`);
};

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

let userInfo: (id: stringOrNumber, userInfo: userType) => number;

userInfo = (id: stringOrNumber, userInfo: userType) => {
  return 10 + 20;
};

console.log(
  userInfo(12, {
    name: "Kishor",
    age: 24,
  })
);
