let details = {
  name: "John Doe",
  age: 25,
  isStudent: false,
};

details.name = "Hamper"; // OK
details.age = 30; // OK
details.isStudent = true; // OK

details = {
  name: "Hamper",
  isStudent: true,
  age: 30,
  //  skills: ["JavaScript", "TypeScript"], // Error: Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; age: number; isStudent: boolean; }'.
};

console.log(details); // { name: 'Hamper', age: 30, isStudent: true }
