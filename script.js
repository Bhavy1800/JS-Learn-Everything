// var let const - line by line comparison

// var a = 12; // accessible in whole program

a = 12; // this is a bug/problem
// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 12;

// global block functional scope

// redeclaration is possible in var only

// Temporal dead zone
console.log(a);
let a = 12;

// Hoisting impact per type
// var -> hoist -> undefined
// let -> hoist -> x(due to temporal dead zone :tdz) reference error
// const -> hoist -> x(due to temporal dead zone :tdz) reference error

// Learn about Object.freeze()
// in JavaScript is a method that prevents any changes to an object. When an object is frozen, it becomes immutable, meaning:
// No modification of existing properties: The values of existing properties cannot be changed.
// No addition of new properties: New properties cannot be added to the object.
// No deletion of existing properties: Existing properties cannot be removed from the object.
// No modification of property attributes: Attributes like writable, configurable, or enumerable cannot be changed for existing properties.

