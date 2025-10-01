for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.forEach((fruit) => console.log(fruit));

const numbers = [2, 4, 6, 8, 10];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum of numbers:", sum);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
