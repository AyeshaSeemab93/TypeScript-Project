let names = ["Alice", "Bob", "Charlie"];
names.push("David");

// names.push(3); Error: Argument of type '3' is not assignable to parameter of type 'string'.

let numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("5"); Error: Argument of type '"5"' is not assignable to parameter of type 'number'.

let mixed = ["Alice", 1, "Bob", 2, true];
mixed.push("Charlie");
mixed.push(3);
mixed.push(false);
console.log(mixed);
