function calculateArea(length, width) {
  return length * width;
}
console.log("Area of rectangle (5 x 10):", calculateArea(5, 10));

// 2. Movie object with method
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  getDetails: function () {
    return `${this.title} (directed by ${this.director}, released in ${this.releaseYear})`;
  },
};
console.log(movie.getDetails());

// 3. Convert to arrow function (example function)
const greet = (name) => `Hello, ${name}!`;
