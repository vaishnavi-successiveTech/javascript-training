/* function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = Person("John Doe", 30);
console.log(person.name); */

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("John Doe", 30); // use new keyword
console.log(person.name);



