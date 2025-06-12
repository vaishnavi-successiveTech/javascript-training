function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
let person = new Person("John Doe", 30); // create 
// delete person.name; // to print the value remove delete
person.getDetails();
