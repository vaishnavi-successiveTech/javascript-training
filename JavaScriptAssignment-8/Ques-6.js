const person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old"); // function does not have this.
  },
};
person.getDetails();
// function should be call by using ()

