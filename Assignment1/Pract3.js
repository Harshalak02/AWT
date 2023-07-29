let x = 10;
const PI = 3.14;

const add = (a, b) => a + b;
const square = (x) => x * x;
const greet = () => console.log("Hello!");

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

const ages = new Map();
ages.set("Harshal", 30);
ages.set("Sneha", 25);

console.log(ages.get("Harshal"));
console.log(ages.has("Sneha"));

const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
console.log(uniqueNumbers);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const har = new Person("har", 20);
har.greet();

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched successfully!"), 2000);
    });
};

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

const id = Symbol("id");
const user = {
    [id]: 101,
    name: "Harshal",
};

console.log(user[id]);

function greetWithName(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetWithName();
greetWithName("Sneha");

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));
