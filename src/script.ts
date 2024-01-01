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
