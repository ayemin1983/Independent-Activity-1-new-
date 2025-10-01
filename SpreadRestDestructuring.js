const person = { name: "Alice", age: 25, city: "New York", country: "USA" };
const { name, age, ...location } = person;
console.log("Name:", name);
console.log("Age:", age);
console.log("Location object:", location);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...remaining] = arr;
console.log("a:", a);
console.log("b:", b);
console.log("Remaining:", remaining);

function printPersonInfo({ name, age, occupation = "Unknown" }) {
  console.log(`Name: ${name}, Age: ${age}, Occupation: ${occupation}`);
}
printPersonInfo({ name: "Bob", age: 30, occupation: "Engineer" });
printPersonInfo({ name: "Carol", age: 28 });
